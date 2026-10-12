import React, { useState } from 'react';
import { Heart, ArrowDown, ChevronRight, Church, Calendar, ShieldCheck, Sparkles } from 'lucide-react';
import { BUILDING_FUND_STATS } from '../data/parishData';

interface HeroProps {
  onOpenDonate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDonate }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const heroImagePath = '/src/assets/images/church_hero_render_1791639810322.jpg';

  const percentRaised = Math.round(
    (BUILDING_FUND_STATS.raisedAmount / BUILDING_FUND_STATS.targetAmount) * 100
  );

  return (
    <section className="relative overflow-hidden bg-stone-900 text-white">
      {/* Background Image Container with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        {!imageError ? (
          <img
            src={heroImagePath}
            alt="Phối cảnh 3D công trình Nhà thờ Giáo xứ Bình An mới"
            referrerPolicy="no-referrer"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            className={`w-full h-full object-cover object-center transform scale-105 transition-all duration-1000 ease-out ${
              imageLoaded ? 'opacity-85 blur-0' : 'opacity-0 blur-sm'
            }`}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-stone-900 via-amber-950/80 to-stone-900 flex items-center justify-center">
            <Church className="w-24 h-24 text-amber-500/20" />
          </div>
        )}

        {/* Measured scrims to satisfy WCAG AA contrast (>= 4.5:1) */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-stone-900/40" />
        <div className="absolute inset-0 bg-stone-950/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-28 sm:pb-24 lg:pt-36 lg:pb-32 flex flex-col justify-end min-h-[640px] lg:min-h-[720px]">
        <div className="max-w-3xl space-y-6">
          {/* Unboxed natural kicker */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-widest uppercase text-amber-300/90">
            <Church className="w-4 h-4 text-amber-400" />
            <span>Đại Công Trình Thế Kỷ 2026 - 2028</span>
            <span aria-hidden="true">·</span>
            <span>Giáo Xứ Bình An</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] font-serif-heading [text-wrap:balance]">
            Cùng chung tay kiến thiết <span className="text-amber-300 italic font-normal">Nhà Chúa</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg lg:text-xl text-stone-200 font-normal leading-relaxed max-w-2xl text-stone-200">
            Xây dựng ngôi thánh đường kiên cố, trang nghiêm — di sản đức tin thiêng liêng và mái ấm cộng đoàn vững bền cho ngàn đời con cháu mai sau.
          </p>

          {/* Dual CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-full">
            <button
              onClick={onOpenDonate}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-800 hover:bg-blue-700 active:bg-blue-900 rounded-lg shadow-lg hover:shadow-blue-950/40 transition-all duration-150 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <Heart className="w-4 h-4 fill-amber-300 text-amber-300 group-hover:scale-110 transition-transform" />
              <span>Đóng góp xây dựng</span>
              <ChevronRight className="w-4 h-4 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href="#gioi-thieu"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-stone-200 hover:text-white bg-stone-900/80 hover:bg-stone-800/90 border border-stone-600/80 rounded-lg backdrop-blur-sm transition-all duration-150 whitespace-nowrap shrink-0"
            >
              <span>Tìm hiểu thêm dự án</span>
              <ArrowDown className="w-4 h-4 text-stone-400" />
            </a>
          </div>
        </div>

        {/* Quick Highlights Strip Below Hero */}
        <div className="mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-stone-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-full">
          <div className="min-w-0">
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-stone-400 truncate">Mục tiêu kinh phí</div>
            <div className="text-lg sm:text-2xl font-bold text-white mt-1 tabular-nums font-serif">
              15.0 <span className="text-xs font-normal text-amber-300">Tỷ VNĐ</span>
            </div>
            <div className="text-[11px] sm:text-xs text-stone-400 mt-0.5 truncate">Quy mô 1,200 chỗ ngồi</div>
          </div>

          <div className="min-w-0">
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-stone-400 truncate">Tiến độ quyên góp</div>
            <div className="text-lg sm:text-2xl font-bold text-amber-400 mt-1 tabular-nums font-serif">
              {percentRaised}% <span className="text-xs font-normal text-stone-300">(10.25 Tỷ)</span>
            </div>
            <div className="text-[11px] sm:text-xs text-stone-400 mt-0.5 truncate">Giai đoạn ép cọc móng</div>
          </div>

          <div className="min-w-0">
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-stone-400 truncate">Ân nhân đồng hành</div>
            <div className="text-lg sm:text-2xl font-bold text-white mt-1 tabular-nums font-serif">
              {BUILDING_FUND_STATS.donorCount.toLocaleString('vi-VN')}+
            </div>
            <div className="text-[11px] sm:text-xs text-stone-400 mt-0.5 truncate">Trong và ngoài nước</div>
          </div>

          <div className="min-w-0">
            <div className="text-[11px] sm:text-xs uppercase tracking-wider text-stone-400 truncate">Thời gian khởi công</div>
            <div className="text-lg sm:text-2xl font-bold text-white mt-1 font-serif">
              Q3 / 2026
            </div>
            <div className="text-[11px] sm:text-xs text-stone-400 mt-0.5 truncate">Dự kiến hoàn thành 2028</div>
          </div>
        </div>
      </div>
    </section>
  );
};
