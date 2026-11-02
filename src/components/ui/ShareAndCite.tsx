'use client';

import React, { useState } from 'react';
import { Share2, Copy, Check, MessageSquare, ExternalLink, Bookmark } from 'lucide-react';

interface ShareAndCiteProps {
  title: string;
  url: string;
  primaryKeyword: string;
}

export function ShareAndCite({ title, url, primaryKeyword }: ShareAndCiteProps) {
  const [copied, setCopied] = useState(false);
  const [citeExpanded, setCiteExpanded] = useState(false);

  const fullUrl = url.startsWith('http') ? url : `https://iptvsubs8k.com${url}`;
  const shareText = `Check out this technical IPTV guide: ${title}`;

  const copyToClipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const redditUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(fullUrl)}&title=${encodeURIComponent(title)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(shareText)}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText} ${fullUrl}`)}`;

  const citationMarkdown = `[${title}](${fullUrl}) — IPTVSubs8K Technical Engineering Desk (2026).`;
  const citationHtml = `<a href="${fullUrl}" rel="dofollow">${title}</a> - IPTVSubs8K Technical Engineering Desk (2026).`;

  return (
    <div className="my-10 p-6 rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm font-black text-slate-900">
          <Share2 className="w-4 h-4 text-[#FF6B00]" />
          <span>Share or Cite This Technical Guide</span>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            type="button"
            onClick={copyToClipboard}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-2xs ${
              copied
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>

          <a
            href={redditUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white hover:bg-orange-50 text-slate-700 hover:text-[#FF6B00] border border-slate-200 hover:border-orange-200 transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <span>Reddit</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white hover:bg-sky-50 text-slate-700 hover:text-sky-600 border border-slate-200 hover:border-sky-200 transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <span>X / Twitter</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white hover:bg-emerald-50 text-slate-700 hover:text-emerald-700 border border-slate-200 hover:border-emerald-200 transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <span>WhatsApp</span>
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>

          <button
            type="button"
            onClick={() => setCiteExpanded(!citeExpanded)}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-orange-50 hover:bg-orange-100 text-[#FF6B00] border border-orange-200 transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Cite / Backlink</span>
          </button>
        </div>
      </div>

      {citeExpanded && (
        <div className="mt-4 pt-4 border-t border-slate-200 space-y-3">
          <p className="text-xs text-slate-600">
            Publishing a tech article, forum response, or cord-cutting report? Feel free to reference this research:
          </p>
          <div className="space-y-2">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                Markdown Link (For Reddit / GitHub / Blogs):
              </span>
              <pre className="p-3 rounded-xl bg-white text-xs font-mono text-slate-800 overflow-x-auto border border-slate-200 select-all">
                {citationMarkdown}
              </pre>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                HTML Backlink (For Webmasters / WordPress):
              </span>
              <pre className="p-3 rounded-xl bg-white text-xs font-mono text-slate-800 overflow-x-auto border border-slate-200 select-all">
                {citationHtml}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
