import React, { useState } from 'react';
import { Target, TrendingUp, Users, HeartHandshake, CheckCircle2, Clock, Calendar, ArrowRight, ShieldCheck, Search } from 'lucide-react';
import { BUILDING_FUND_STATS, PARISH_MILESTONES, RECENT_DONORS } from '../data/parishData';

interface FundraisingProgressProps {
  onOpenDonate: () => void;
}

export const FundraisingProgress: React.FC<FundraisingProgressProps> = ({ onOpenDonate }) => {
  const [filterMinistry, setFilterMinistry] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const percentRaised = Number(
    ((BUILDING_FUND_STATS.raisedAmount / BUILDING_FUND_STATS.targetAmount) * 100).toFixed(1)
  );

  const remainingAmount = BUILDING_FUND_STATS.targetAmount - BUILDING_FUND_STATS.raisedAmount;

  const filteredDonors = RECENT_DONORS.filter((donor) => {
    const matchesMinistry =
      filterMinistry === 'all' ||
      (filterMinistry === 'building' && donor.ministry.includes('Kiến Thiết')) ||
      (filterMinistry === 'other' && !donor.ministry.includes('Kiến Thiết'));

    const matchesSearch =
      donor.donorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      donor.ministry.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesMinistry && matchesSearch;
  });

  return (
    <section id="tien-do" className="py-20 lg:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-900">
              <TrendingUp className="w-4 h-4 text-blue-800" />
              <span>Tiến Độ Quyên Góp & Minh Bạch Tài Chính</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950 mt-2 font-serif-heading [text-wrap:balance]">
              Hành trình kiến thiết Nhà Chúa
            </h2>
            <p className="text-base text-stone-600 mt-3">
              Mỗi đóng góp dù nhỏ bé đều là một viên gạch quý báu xây đắp ngôi nhà đức tin chung. Số liệu được cập nhật hàng tuần bởi Ban Tài chính Giáo xứ.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenDonate}
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-900 hover:bg-blue-950 active:bg-blue-950 rounded-lg shadow-sm transition-colors whitespace-nowrap"
            >
              <HeartHandshake className="w-4 h-4 text-amber-300" />
              <span>Chung tay đóng góp</span>
            </button>
          </div>
        </div>

        {/* Prominent Fundraising Visual Bar & Key Stats Box */}
        <div className="bg-[#FAF9F5] border border-stone-200/90 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-sm mb-16 overflow-hidden">
          {/* Top Numeric Readout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 border-b border-stone-200">
            <div className="min-w-0">
              <div className="text-xs font-medium uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span className="truncate">Mục tiêu kinh phí</span>
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 mt-1 tabular-nums font-serif break-words">
                60,000,000,000 <span className="text-xs sm:text-sm font-sans font-normal text-stone-500">VNĐ</span>
              </div>
              <div className="text-xs text-stone-500 mt-1">Dự toán toàn bộ công trình</div>
            </div>

            <div className="min-w-0">
              <div className="text-xs font-medium uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-blue-700 shrink-0" />
                <span className="truncate">Đã quyên góp</span>
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-900 mt-1 tabular-nums font-serif break-words">
                20,000,000,000 <span className="text-xs sm:text-sm font-sans font-normal text-blue-700">VNĐ</span>
              </div>
              <div className="text-xs font-semibold text-blue-800 mt-1">
                Đạt {percentRaised}% tổng chỉ tiêu
              </div>
            </div>

            <div className="min-w-0">
              <div className="text-xs font-medium uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span className="truncate">Số ân nhân đồng hành</span>
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-900 mt-1 tabular-nums font-serif">
                {BUILDING_FUND_STATS.donorCount.toLocaleString('vi-VN')} <span className="text-xs sm:text-sm font-sans font-normal text-stone-500">ân nhân</span>
              </div>
              <div className="text-xs text-stone-500 mt-1">Trong nước & Hải ngoại</div>
            </div>

            <div className="min-w-0">
              <div className="text-xs font-medium uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                <span className="truncate">Kinh phí còn thiếu</span>
              </div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-stone-700 mt-1 tabular-nums font-serif break-words">
                {remainingAmount.toLocaleString('vi-VN')} <span className="text-xs sm:text-sm font-sans font-normal text-stone-500">VNĐ</span>
              </div>
              <div className="text-xs text-stone-500 mt-1">Cần huy động trước 12/2026</div>
            </div>
          </div>

          {/* High-Impact Visual Progress Bar */}
          <div className="pt-8 space-y-3">
            <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
              <span className="text-stone-700">Tiến trình huy động quỹ: <strong>{percentRaised}%</strong></span>
              <span className="text-blue-900 font-semibold">10.25 Tỷ / 15.00 Tỷ VNĐ</span>
            </div>

            {/* Track */}
            <div className="h-5 sm:h-6 w-full bg-stone-200 rounded-full overflow-hidden p-1 shadow-inner relative">
              {/* Fill with deep blue / royal blue gradient */}
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 transition-all duration-1000 ease-out flex items-center justify-end pr-2 shadow-sm"
                style={{ width: `${percentRaised}%` }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-amber-300 animate-pulse" />
              </div>
            </div>

            {/* Milestones markers on the bar */}
            <div className="grid grid-cols-4 text-[10px] sm:text-xs text-stone-500 pt-1 font-medium">
              <div className="text-left">0đ (Bắt đầu)</div>
              <div className="text-center">GĐ 1: Móng</div>
              <div className="text-center font-semibold text-blue-900">Hiện tại ({percentRaised}%)</div>
              <div className="text-right font-bold text-stone-900">100% (15 Tỷ)</div>
            </div>
          </div>
        </div>

        {/* Phase Breakdown Tabs/Cards */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-stone-900 mb-6 font-serif-heading">
            Các giai đoạn thi công & Dự toán chi phí
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARISH_MILESTONES.map((milestone) => (
              <div
                key={milestone.step}
                className={`p-6 rounded-xl border transition-all ${
                  milestone.status === 'in_progress'
                    ? 'bg-blue-50/70 border-blue-300 ring-1 ring-blue-300 shadow-sm'
                    : milestone.status === 'completed'
                    ? 'bg-stone-50 border-stone-200'
                    : 'bg-white border-stone-200 opacity-90'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-mono font-semibold text-stone-500">
                    GIAI ĐOẠN 0{milestone.step}
                  </span>
                  {milestone.status === 'completed' && (
                    <span className="text-emerald-700 font-medium flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Hoàn thành
                    </span>
                  )}
                  {milestone.status === 'in_progress' && (
                    <span className="text-blue-900 font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> Đang thi công
                    </span>
                  )}
                  {milestone.status === 'upcoming' && (
                    <span className="text-stone-400 font-medium">Sắp tới</span>
                  )}
                </div>

                <h4 className="text-base font-bold text-stone-900 mb-2 leading-snug">
                  {milestone.title}
                </h4>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {milestone.description}
                </p>

                <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between text-xs">
                  <span className="text-stone-500">Dự toán:</span>
                  <span className="font-semibold text-stone-900 tabular-nums">
                    {(milestone.costEstimate / 1000000000).toFixed(2)} Tỷ VNĐ
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Donor Ledger & Transparency Log */}
        <div className="bg-[#FAF9F5] border border-stone-200 rounded-2xl p-5 sm:p-8 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-stone-900 font-serif-heading">
                Sổ Vàng Tri Ân Quý Ân Nhân Gần Đây
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                Danh sách ghi nhận các khoản đóng góp mới nhất được đối soát qua ngân hàng và văn phòng
              </p>
            </div>

            {/* Filter controls */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 max-w-full">
              <div className="relative w-full sm:w-auto">
                <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Tìm tên ân nhân..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 text-xs bg-white border border-stone-200 rounded-lg text-stone-800 focus:outline-none focus:ring-1 focus:ring-blue-800 w-full sm:w-44"
                />
              </div>

              <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-lg text-xs font-medium overflow-x-auto max-w-full">
                <button
                  onClick={() => setFilterMinistry('all')}
                  className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap text-xs ${
                    filterMinistry === 'all'
                      ? 'bg-white text-blue-950 font-semibold shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Tất cả
                </button>
                <button
                  onClick={() => setFilterMinistry('building')}
                  className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap text-xs ${
                    filterMinistry === 'building'
                      ? 'bg-white text-blue-950 font-semibold shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Quỹ Kiến Thiết
                </button>
                <button
                  onClick={() => setFilterMinistry('other')}
                  className={`px-2.5 py-1 rounded-md transition-colors whitespace-nowrap text-xs ${
                    filterMinistry === 'other'
                      ? 'bg-white text-blue-950 font-semibold shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Mục Vụ Khác
                </button>
              </div>
            </div>
          </div>

          {/* Table / List */}
          <div className="divide-y divide-stone-200/80 max-h-96 overflow-y-auto overflow-x-hidden">
            {filteredDonors.length > 0 ? (
              filteredDonors.map((donor) => (
                <div
                  key={donor.id}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-stone-100/50 px-2 rounded-lg transition-colors"
                >
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-semibold text-stone-900">
                        {donor.donorName}
                      </span>
                      <span className="text-stone-300">·</span>
                      <span className="text-xs text-stone-500 font-medium">
                        {donor.ministry}
                      </span>
                    </div>
                    {donor.message && (
                      <p className="text-xs text-stone-600 italic break-words">
                        "{donor.message}"
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-1 sm:pt-0">
                    <div className="text-sm font-bold text-blue-900 tabular-nums">
                      +{donor.amount.toLocaleString('vi-VN')} đ
                    </div>
                    <div className="text-xs text-stone-400 font-mono">
                      {donor.date}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-xs text-stone-500">
                Không tìm thấy ân nhân nào phù hợp với bộ lọc.
              </div>
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Dữ liệu được kiểm toán nội bộ bởi Hội đồng Mục vụ Giáo xứ mỗi tháng.</span>
            </div>
            <div className="font-medium text-stone-700">
              Cập nhật lúc: 10/10/2026 12:00
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
