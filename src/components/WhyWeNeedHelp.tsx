import React from 'react';
import { AlertTriangle, Maximize2, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { BUILDING_REASONS } from '../data/parishData';

export const WhyWeNeedHelp: React.FC = () => {
  return (
    <section id="ly-do" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-900">
            <span>Sự Cần Thiết & Tầm Nhìn</span>
            <span aria-hidden="true">·</span>
            <span>Di Sản Đức Tin</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950 mt-2 font-serif-heading [text-wrap:balance]">
            Tại sao giáo xứ cần chung lòng xây mới thánh đường?
          </h2>
          <p className="text-base text-stone-600 mt-3 leading-relaxed">
            Đây không chỉ là một công trình gạch đá, mà là nơi thánh thiêng gìn giữ sự sống đức tin của bao thế hệ, nơi đón nhận mọi người tìm về bình an và ân sủng Chúa.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {BUILDING_REASONS.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200/90 shadow-sm flex flex-col justify-between hover:border-blue-700/40 hover:shadow-md transition-all duration-200 group"
              >
                <div>
                  {/* Subtle top indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      {idx === 0 && <AlertTriangle className="w-5 h-5 text-blue-900" />}
                      {idx === 1 && <Maximize2 className="w-5 h-5 text-blue-900" />}
                      {idx === 2 && <ShieldCheck className="w-5 h-5 text-blue-900" />}
                      {idx === 3 && <HeartHandshake className="w-5 h-5 text-blue-900" />}
                    </div>

                    <span className="text-xs font-mono font-semibold text-stone-400">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & subtitle */}
                  <h3 className="text-lg font-bold text-stone-900 font-serif-heading mb-1.5 leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-blue-900 mb-3">
                    {item.subtitle}
                  </div>

                  {/* Body description */}
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Stat Highlight */}
                <div className="mt-6 pt-4 border-t border-stone-100 flex items-baseline justify-between">
                  <span className="text-xs text-stone-500 font-medium">
                    {item.statLabel}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-blue-950 font-serif tabular-nums">
                    {item.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architectural Commitment Strip */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center lg:text-left">
            <h4 className="text-base font-bold text-stone-900 font-serif-heading">
              Cam kết chất lượng & Thẩm mỹ thánh đường
            </h4>
            <p className="text-xs text-stone-600">
              Bản vẽ thiết kế được Hội đồng Nghệ thuật Thánh Giáo phận thẩm định, đảm bảo quy chuẩn phụng vụ Công giáo, khả năng cách âm chống ồn và thông gió tự nhiên xanh mát.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-stone-700 shrink-0">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Giấy phép xây dựng hợp lệ
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bê tông mác cao chống thấm
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Kiểm toán tài chính minh bạch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
