'use client';

import { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const FONT_SIZES = ['sm', 'base', 'lg', 'xl'] as const;
type FontSize = (typeof FONT_SIZES)[number];

export default function BlogReader({ content }: { content: string }) {
  const [sizeIndex, setSizeIndex] = useState<number>(1); 
  const [progress, setProgress] = useState(0);

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

  const fontClass = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-loose',
    xl: 'text-xl leading-loose',
  }[currentSize];

  return (
    <div>
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
            className="p-1.5 sm:p-1 rounded-lg bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition touch-manipulation"
          >
            <Minus className="w-4 h-4" />
          </button>

          {/* Positive Button */}
          <button
            type="button"
            onClick={increaseFontSize}
            disabled={sizeIndex === FONT_SIZES.length - 1}
            aria-label="Increase font size"
            className="p-1.5 sm:p-1 rounded-lg bg-neutral-800 text-neutral-300 hover:bg-neutral-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition touch-manipulation"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>  

      {/* Main Content Body */}
      <div className={`text-neutral-300 whitespace-pre-wrap ${fontClass}`}>
        {content}
      </div>
    </div>
  );
}