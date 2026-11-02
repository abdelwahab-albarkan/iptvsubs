const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');

console.log('Testing CDP Client WebSocket communication...');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'C:\\Users\\clanm\\AppData\\Local\\Temp\\chrome-cdp-profile-' + Date.now();

const chromeProc = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9223',
  '--no-first-run',
  '--no-default-browser-check',
  '--user-data-dir=' + userDataDir,
  'about:blank'
], {
  detached: true,
  stdio: 'ignore'
});

function sendJson(url, method = 'GET') {
  return new Promise((resolve, reject) => {
    http.get(url, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch(e) {
          resolve(data);
        }
      });
    }).on('error', reject);
  });
}

function sendPut(path) {
  return new Promise((resolve, reject) => {
    const req = http.request({
      hostname: '127.0.0.1',
      port: 9223,
      path: path,
      method: 'PUT'
    }, res => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch(e) {
          resolve(data);
        }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

setTimeout(async () => {
  try {
    const version = await sendJson('http://127.0.0.1:9223/json/version');
    console.log('Connected to Chrome:', version.Browser);

    const target = await sendPut('/json/new?http://localhost:3010');
    console.log('Created page target:', target.id);
    console.log('Target WS:', target.webSocketDebuggerUrl);

    const ws = new WebSocket(target.webSocketDebuggerUrl);

    let msgId = 1;
    const callbacks = new Map();

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && callbacks.has(msg.id)) {
        callbacks.get(msg.id)(msg);
        callbacks.delete(msg.id);
      }
    };

    function sendCommand(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        callbacks.set(id, (res) => resolve(res.result));
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    ws.onopen = async () => {
      console.log('WebSocket open!');
      await sendCommand('Page.enable');
      await sendCommand('Runtime.enable');
      
      console.log('Navigating to http://localhost:3010...');
      await sendCommand('Page.navigate', { url: 'http://localhost:3010' });
      
      // Wait 3 seconds for render
      setTimeout(async () => {
        const evalRes = await sendCommand('Runtime.evaluate', {
          expression: 'document.title',
          returnByValue: true
        });
        console.log('Page Title in Browser:', evalRes.result.value);

        // Capture test screenshot
        const shot = await sendCommand('Page.captureScreenshot', { format: 'png' });
        const buf = Buffer.from(shot.data, 'base64');
        fs.writeFileSync('C:\\Users\\clanm\\.gemini\\antigravity\\brain\\215ae4bd-758f-4fb4-928e-f479a511949b\\screenshots\\test_success.png', buf);
        console.log('Saved test screenshot: test_success.png (' + buf.length + ' bytes)');

        ws.close();
        chromeProc.kill();
        process.exit(0);
      }, 3000);
    };
  } catch(e) {
    console.error('Error during CDP test:', e);
    chromeProc.kill();
    process.exit(1);
  }
}, 2000);
