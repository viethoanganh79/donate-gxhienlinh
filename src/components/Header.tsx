import React, { useState } from 'react';
import { Church, Menu, X, Heart, Code2 } from 'lucide-react';

interface HeaderProps {
  onOpenDonate: (ministryId?: string) => void;
  onOpenAstroBlueprint: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenDonate, onOpenAstroBlueprint }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Single text element wordmark / brand title */}
          <a
            href="#"
            className="flex items-center gap-2.5 sm:gap-3.5 group text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 rounded-lg p-1 min-w-0"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-900 text-amber-200 flex items-center justify-center shadow-sm group-hover:bg-blue-950 transition-colors shrink-0">
              <Church className="w-5 h-5 text-amber-200" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-display text-base sm:text-lg lg:text-xl font-bold tracking-tight text-blue-950 leading-none whitespace-nowrap">
                GIÁO XỨ BÌNH AN
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-medium text-stone-500 tracking-wider uppercase mt-1 truncate">
                Tổng Giáo Phận Sài Gòn
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 clean single-line text links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
            <a
              href="#gioi-thieu"
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-blue-800"
            >
              Lời ngỏ Cha Xứ
            </a>
            <a
              href="#tien-do"
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-blue-800"
            >
              Tiến độ xây dựng
            </a>
            <a
              href="#ly-do"
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-blue-800"
            >
              Tại sao cần xây mới?
            </a>
            <a
              href="#muc-vu"
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-blue-800"
            >
              Các mục vụ khác
            </a>
            <a
              href="#dong-gop"
              className="hover:text-blue-900 transition-colors whitespace-nowrap shrink-0 py-1 border-b-2 border-transparent hover:border-blue-800"
            >
              Cách đóng góp
            </a>
          </nav>

          {/* Zone 3: 1 primary action + helper view */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenAstroBlueprint}
              title="Xem mã nguồn Astro Project"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 bg-stone-100/90 hover:bg-stone-200/80 border border-stone-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
            >
              <Code2 className="w-3.5 h-3.5 text-blue-800" />
              <span>Astro Blueprint</span>
            </button>

            <button
              onClick={() => onOpenDonate('church_building')}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-950 active:bg-blue-950 rounded-lg shadow-sm hover:shadow transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700"
            >
              <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-300 text-amber-300" />
              <span>Ủng hộ ngay</span>
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-blue-800"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-stone-200 bg-[#FAF9F5] px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-base font-medium text-stone-700">
            <a
              href="#gioi-thieu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100 text-stone-800"
            >
              Lời ngỏ Cha Xứ
            </a>
            <a
              href="#tien-do"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100 text-stone-800"
            >
              Tiến độ xây dựng
            </a>
            <a
              href="#ly-do"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100 text-stone-800"
            >
              Tại sao cần xây mới?
            </a>
            <a
              href="#muc-vu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100 text-stone-800"
            >
              Các mục vụ khác
            </a>
            <a
              href="#dong-gop"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-stone-100 text-stone-800"
            >
              Cách thức đóng góp
            </a>
          </nav>
          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDonate('church_building');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-950 rounded-lg shadow"
            >
              <Heart className="w-4 h-4 fill-amber-300 text-amber-300" />
              Ủng hộ Quỹ Nhà Thờ
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAstroBlueprint();
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-stone-700 bg-stone-100 border border-stone-200 rounded-lg"
            >
              <Code2 className="w-3.5 h-3.5" />
              Xem mã nguồn Astro Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
