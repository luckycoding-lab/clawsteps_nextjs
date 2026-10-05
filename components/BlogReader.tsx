'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Plus, Minus } from 'lucide-react';

const FONT_SIZES = ['sm', 'base', 'lg', 'xl'] as const;
type FontSize = (typeof FONT_SIZES)[number];

export default function BlogReader({ content }: { content: string }) {
  const [sizeIndex, setSizeIndex] = useState<number>(1); // Default: 'base'
  const [progress, setProgress] = useState<number>(0);

  // Dynamic Scroll Progress Bar Calculation
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const decreaseFontSize = () => {
    setSizeIndex((prev) => Math.max(0, prev - 1));
  };

  const increaseFontSize = () => {
    setSizeIndex((prev) => Math.min(FONT_SIZES.length - 1, prev + 1));
  };

  const currentSize = FONT_SIZES[sizeIndex];

  // Font size aur line-height mapping
  const fontClass = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-loose',
    xl: 'text-xl leading-loose',
  }[currentSize];

  // Safe Guard: Agar content empty ho ya load na hua ho
  if (!content || content.trim() === '') {
    return (
      <div className="my-10 p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5 text-center">
        <p className="text-amber-400 font-semibold text-sm">
          🐾 Article content is empty or currently being prepared.
        </p>
        <p className="text-neutral-500 text-xs mt-1">
          Please check the Appwrite collection document or try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-neutral-900 z-50">
        <div
          className="h-full bg-amber-500 transition-all duration-75"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Font Size Toolbar */}
      <div className="flex items-center justify-between bg-neutral-900/60 border border-neutral-800 rounded-xl p-3 mb-8">
        <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
          Reader Settings
        </span>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-neutral-500 mr-1 hidden sm:inline">Text Size:</span>
          <span className="text-xs font-bold text-amber-500 uppercase px-1.5 py-0.5 bg-neutral-950 rounded border border-neutral-800 mr-1">
            {currentSize}
          </span>
          
          {/* Negative Button */}
          <button
            type="button"
            onClick={decreaseFontSize}
            disabled={sizeIndex === 0}
            aria-label="Decrease font size"
            className="p-1.5 sm:p-1 rounded-lg bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition touch-manipulation cursor-pointer"
          >
            <Minus className="w-4 h-4" />
          </button>

          {/* Positive Button */}
          <button
            type="button"
            onClick={increaseFontSize}
            disabled={sizeIndex === FONT_SIZES.length - 1}
            aria-label="Increase font size"
            className="p-1.5 sm:p-1 rounded-lg bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition touch-manipulation cursor-pointer"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>  

      {/* Main Content Body (Rich Markdown Rendering) */}
      <article className={`text-neutral-300 transition-all duration-150 ${fontClass}`}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white mt-10 mb-4 tracking-tight leading-snug">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-xl sm:text-2xl font-bold text-amber-400 mt-8 mb-3.5 tracking-tight border-b border-neutral-800/80 pb-2">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-lg sm:text-xl font-semibold text-white mt-6 mb-2.5">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="mb-4 text-neutral-300 leading-relaxed font-normal">
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong className="font-bold text-white tracking-wide">
                {children}
              </strong>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-outside pl-6 space-y-2 mb-5 marker:text-amber-500">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-outside pl-6 space-y-2 mb-5 marker:text-amber-500">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="leading-relaxed pl-1">{children}</li>
            ),
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-amber-500 bg-neutral-900/60 rounded-r-xl pl-4 pr-3 py-2 italic text-neutral-300 my-5">
                {children}
              </blockquote>
            ),
            hr: () => <hr className="border-neutral-800 my-8" />,
            table: ({ children }) => (
              <div className="overflow-x-auto my-6 border border-neutral-800 rounded-xl bg-neutral-900/30">
                <table className="w-full text-left text-sm border-collapse min-w-[500px]">
                  {children}
                </table>
              </div>
            ),
            thead: ({ children }) => (
              <thead className="bg-neutral-900 border-b border-neutral-800 text-white font-semibold">
                {children}
              </thead>
            ),
            th: ({ children }) => (
              <th className="px-4 py-3 text-xs uppercase tracking-wider font-bold text-amber-400">
                {children}
              </th>
            ),
            td: ({ children }) => (
              <td className="px-4 py-3 border-b border-neutral-800/60 text-neutral-300 text-xs sm:text-sm">
                {children}
              </td>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target={href?.startsWith('http') ? '_blank' : undefined}
                rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-amber-400 font-medium underline underline-offset-4 hover:text-amber-300 transition-colors"
              >
                {children}
              </a>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </div>
  );
}