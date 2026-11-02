const { spawn } = require('child_process');
const http = require('http');

console.log('Testing Chrome DevTools Protocol launching...');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const userDataDir = 'C:\\Users\\clanm\\AppData\\Local\\Temp\\chrome-test-profile-' + Date.now();

const chromeProc = spawn(chromePath, [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--no-first-run',
  '--no-default-browser-check',
  '--user-data-dir=' + userDataDir,
  'about:blank'
], {
  detached: true,
  stdio: 'ignore'
});

setTimeout(() => {
  http.get('http://127.0.0.1:9222/json/version', res => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('CDP Version Response:', data);
      chromeProc.kill();
      process.exit(0);
    });
  }).on('error', err => {
    console.error('Failed to connect to CDP:', err.message);
    chromeProc.kill();
    process.exit(1);
  });
}, 2000);

