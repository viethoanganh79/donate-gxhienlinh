import React, { useState } from 'react';
import { HeartHandshake, Users, GraduationCap, Music, ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import { PARISH_MINISTRIES } from '../data/parishData';

interface BentoMinistriesProps {
  onSelectMinistry: (ministryId: string) => void;
}

export const BentoMinistries: React.FC<BentoMinistriesProps> = ({ onSelectMinistry }) => {
  const [charityImgError, setCharityImgError] = useState(false);
  const [youthImgError, setYouthImgError] = useState(false);

  const charityMinistry = PARISH_MINISTRIES.find((m) => m.id === 'charity')!;
  const youthMinistry = PARISH_MINISTRIES.find((m) => m.id === 'youth')!;
  const scholarshipMinistry = PARISH_MINISTRIES.find((m) => m.id === 'scholarship')!;
  const choirMinistry = PARISH_MINISTRIES.find((m) => m.id === 'choir')!;

  const calcPercent = (raised: number, target: number) => Math.round((raised / target) * 100);

  return (
    <section id="muc-vu" className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-900">
            <span>Hiệp Thông Sứ Vụ</span>
            <span aria-hidden="true">·</span>
            <span>Các Mục Vụ Giáo Xứ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950 mt-2 font-serif-heading [text-wrap:balance]">
            Đồng hành cùng các quỹ mục vụ thiết yếu
          </h2>
          <p className="text-base text-stone-600 mt-3 leading-relaxed">
            Song song với công trình kiến thiết thánh đường, đời sống bác ái, giáo lý thiếu nhi và phụng vụ thánh nhạc luôn cần sự chung tay nâng đỡ thường xuyên từ cộng đoàn.
          </p>
        </div>

        {/* Bento Grid: 12-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Quỹ Bác Ái Caritas (Large Bento - 7 cols on desktop) */}
          <div className="md:col-span-7 bg-[#FAF9F5] border border-stone-200 rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-emerald-300 transition-all duration-300">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-stone-200">
              {!charityImgError && charityMinistry.image ? (
                <img
                  src={charityMinistry.image}
                  alt={charityMinistry.title}
                  referrerPolicy="no-referrer"
                  onError={() => setCharityImgError(true)}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-emerald-900/10 text-emerald-800">
                  <HeartHandshake className="w-16 h-16" />
                </div>
              )}
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

              <div className="absolute bottom-4 left-5 right-5 text-white">
                <div className="flex items-center gap-2 text-xs text-emerald-300 font-medium uppercase tracking-wider">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Mục vụ Bác ái & Xã hội</span>
                </div>
                <h3 className="text-2xl font-bold font-serif-heading text-white mt-1">
                  {charityMinistry.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 bg-white">
              <div className="space-y-3">
                <p className="text-sm text-stone-600 leading-relaxed">
                  {charityMinistry.description}
                </p>

                {/* Progress bar */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-500 font-medium">
                      Đã đạt: <strong>{(charityMinistry.raisedAmount / 1000000).toLocaleString('vi-VN')} Tr</strong> / {(charityMinistry.targetAmount / 1000000).toLocaleString('vi-VN')} Tr
                    </span>
                    <span className="font-semibold text-emerald-700">
                      {calcPercent(charityMinistry.raisedAmount, charityMinistry.targetAmount)}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-600 rounded-full"
                      style={{ width: `${calcPercent(charityMinistry.raisedAmount, charityMinistry.targetAmount)}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center justify-between">
                <div className="text-xs text-stone-500">
                  <span>{charityMinistry.donorCount} ân nhân ủng hộ</span>
                </div>
                <button
                  onClick={() => onSelectMinistry(charityMinistry.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 hover:underline group-hover:translate-x-0.5 transition-all"
                >
                  <span>Ủng hộ quỹ này</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 2: Xứ Đoàn Thiếu Nhi Thánh Thể (5 cols on desktop) */}
          <div className="md:col-span-5 bg-[#FAF9F5] border border-stone-200 rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-sky-300 transition-all duration-300">
            <div className="relative aspect-[16/11] overflow-hidden bg-stone-200">
              {!youthImgError && youthMinistry.image ? (
                <img
                  src={youthMinistry.image}
                  alt={youthMinistry.title}
                  referrerPolicy="no-referrer"
                  onError={() => setYouthImgError(true)}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-sky-900/10 text-sky-800">
                  <Users className="w-16 h-16" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />

              <div className="absolute bottom-4 left-5 right-5 text-white">
                <div className="flex items-center gap-2 text-xs text-sky-300 font-medium uppercase tracking-wider">
                  <Users className="w-4 h-4" />
                  <span>Giáo Lý & Đức Tin Trẻ</span>
                </div>
                <h3 className="text-xl font-bold font-serif-heading text-white mt-1">
                  {youthMinistry.title}
                </h3>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 bg-white">
              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {youthMinistry.description}
                </p>

                {/* Progress */}
                <div className="space-y-1.5 pt-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-stone-500">
                      Đã đạt: <strong>{(youthMinistry.raisedAmount / 1000000).toLocaleString('vi-VN')} Tr</strong>
                    </span>
                    <span className="font-semibold text-sky-700">
                      {calcPercent(youthMinistry.raisedAmount, youthMinistry.targetAmount)}%
                    </span>
                  </div>
                  <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sky-600 rounded-full"
                      style={{ width: `${calcPercent(youthMinistry.raisedAmount, youthMinistry.targetAmount)}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-stone-100 flex items-center justify-between">
                <div className="text-xs text-stone-500">
                  <span>{youthMinistry.donorCount} ân nhân</span>
                </div>
                <button
                  onClick={() => onSelectMinistry(youthMinistry.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-800 hover:text-sky-950 hover:underline transition-all"
                >
                  <span>Ủng hộ quỹ này</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 3: Quỹ Khuyến Học Tôma Thiện (6 cols on desktop) */}
          <div className="md:col-span-6 bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-amber-300 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-amber-700" />
                </div>
                <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
                  Khuyến Học 2026-2027
                </span>
              </div>

              <h3 className="text-xl font-bold font-serif-heading text-stone-900 mb-1">
                {scholarshipMinistry.title}
              </h3>
              <div className="text-xs text-amber-800 font-medium mb-3">
                {scholarshipMinistry.subtitle}
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                {scholarshipMinistry.description}
              </p>
            </div>

            <div>
              <div className="space-y-1.5 mb-5">
                <div className="flex justify-between text-xs">
                  <span className="text-stone-500">
                    Đã huy động: <strong>{(scholarshipMinistry.raisedAmount / 1000000).toLocaleString('vi-VN')} Tr</strong> / {(scholarshipMinistry.targetAmount / 1000000).toLocaleString('vi-VN')} Tr
                  </span>
                  <span className="font-semibold text-amber-700">
                    {calcPercent(scholarshipMinistry.raisedAmount, scholarshipMinistry.targetAmount)}%
                  </span>
                </div>
                <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-600 rounded-full"
                    style={{ width: `${calcPercent(scholarshipMinistry.raisedAmount, scholarshipMinistry.targetAmount)}%` }}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  {scholarshipMinistry.donorCount} ân nhân khuyến học
                </span>
                <button
                  onClick={() => onSelectMinistry(scholarshipMinistry.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 hover:text-amber-950 hover:underline transition-all"
                >
                  <span>Ủng hộ quỹ này</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Card 4: Ban Phụng Vụ & Thánh Nhạc (6 cols on desktop) */}
          <div className="md:col-span-6 bg-white border border-stone-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-rose-300 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-800 flex items-center justify-center">
                  <Music className="w-6 h-6 text-rose-700" />
                </div>
                <span className="text-xs font-semibold text-rose-700 uppercase tracking-wider">
                  Phụng Vụ Thánh Nhạc
                </span>
              </div>

              <h3 className="text-xl font-bold font-serif-heading text-stone-900 mb-1">
                {choirMinistry.title}
              </h3>
              <div className="text-xs text-rose-800 font-medium mb-3">
                {choirMinistry.subtitle}
              </div>

              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-6">
                {choirMinistry.description}
              </p>
            </div>

            <div>
              <div className="space-y-1.5 mb-5">
                <div className="flex justify-between text-xs">
                  <span className="text-stone-500">
                    Đã huy động: <strong>{(choirMinistry.raisedAmount / 1000000).toLocaleString('vi-VN')} Tr</strong> / {(choirMinistry.targetAmount / 1000000).toLocaleString('vi-VN')} Tr
                  </span>
                  <span className="font-semibold text-rose-700">
                    {calcPercent(choirMinistry.raisedAmount, choirMinistry.targetAmount)}%
                  </span>
                </div>
                <div className="h-2 w-full bg-stone-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-rose-600 rounded-full"
                    style={{ width: `${calcPercent(choirMinistry.raisedAmount, choirMinistry.targetAmount)}%` }}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="text-xs text-stone-500">
                  {choirMinistry.donorCount} ân nhân thánh nhạc
                </span>
                <button
                  onClick={() => onSelectMinistry(choirMinistry.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-800 hover:text-rose-950 hover:underline transition-all"
                >
                  <span>Ủng hộ quỹ này</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
