import React, { useState } from 'react';
import {
  CreditCard,
  QrCode,
  MapPin,
  Copy,
  Check,
  Heart,
  Clock,
  Phone,
  Sparkles,
  Download,
  Share2,
  CheckCircle2,
  RefreshCw,
  Building2,
  ShieldCheck
} from 'lucide-react';
import { BANK_ACCOUNTS, PARISH_INFO } from '../data/parishData';
import {
  DONATION_PRESET_AMOUNTS,
  DONATION_ZONES,
  removeVietnameseDiacritics,
  sanitizeDonorName,
} from '../data/donationOptions';

interface HowToDonateProps {
  initialMinistryId?: string;
}

export const HowToDonate: React.FC<HowToDonateProps> = ({ initialMinistryId = 'church_building' }) => {
  const [selectedBankIndex, setSelectedBankIndex] = useState(0);
  const [selectedMinistry, setSelectedMinistry] = useState<string>(
    initialMinistryId === 'charity'
      ? 'CARITAS'
      : initialMinistryId === 'youth'
      ? 'THIEUNHI'
      : initialMinistryId === 'scholarship'
      ? 'KHUYENHOC'
      : initialMinistryId === 'choir'
      ? 'THANHNHAC'
      : 'XAY NHA THO'
  );
  const [donorName, setDonorName] = useState<string>('');
  const [donorZone, setDonorZone] = useState<string>('');
  const [prayerIntention, setPrayerIntention] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<number>(500000);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [hasGeneratedQr, setHasGeneratedQr] = useState<boolean>(true);
  const [isDonatedConfirmed, setIsDonatedConfirmed] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'qr' | 'office'>('qr');

  // Synchronize ministry when prop changes
  React.useEffect(() => {
    if (initialMinistryId === 'charity') setSelectedMinistry('CARITAS');
    else if (initialMinistryId === 'youth') setSelectedMinistry('THIEUNHI');
    else if (initialMinistryId === 'scholarship') setSelectedMinistry('KHUYENHOC');
    else if (initialMinistryId === 'choir') setSelectedMinistry('THANHNHAC');
    else setSelectedMinistry('XAY NHA THO');
  }, [initialMinistryId]);

  const selectedBank = BANK_ACCOUNTS[selectedBankIndex];

  // Helper copy function with visual feedback
  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  // Generate transfer syntax:
  const sanitizedName = sanitizeDonorName(donorName);
  const sanitizedZone = removeVietnameseDiacritics(donorZone);

  const transferSyntax = donorZone
    ? `${sanitizedName} - ${sanitizedZone} - ${selectedMinistry}`
    : `${sanitizedName} - ${selectedMinistry}`;

  // VietQR Dynamic URL (uses standard VietQR format with pre-filled amount and memo)
  const vietQrUrl = `https://img.vietqr.io/image/${selectedBank.shortName.toLowerCase().replace(/\s+/g, '')}-${selectedBank.accountNumber}-compact2.png?amount=${customAmount}&addInfo=${encodeURIComponent(
    transferSyntax
  )}&accountName=${encodeURIComponent(selectedBank.accountHolder)}`;

  const getMinistryLabel = (code: string) => {
    switch (code) {
      case 'XAY NHA THO':
        return 'Quỹ Xây dựng Nhà Thờ Mới';
      case 'CARITAS':
        return 'Quỹ Bác Ái Caritas';
      case 'THIEUNHI':
        return 'Xứ Đoàn Thiếu Nhi Thánh Thể';
      case 'KHUYENHOC':
        return 'Quỹ Khuyến Học Tôma Thiện';
      case 'THANHNHAC':
        return 'Ban Phụng Vụ & Thánh Nhạc';
      default:
        return 'Quỹ Xây dựng Nhà Thờ Mới';
    }
  };

  return (
    <section id="dong-gop" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-stone-200 overflow-x-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-900">
            <Heart className="w-4 h-4 text-blue-800" />
            <span>Kênh Tiếp Nhận Chính Thức</span>
            <span aria-hidden="true">·</span>
            <span>Bảo Mật & Minh Bạch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950 mt-2 font-serif-heading [text-wrap:balance]">
            Cách thức đóng góp & Tạo mã VietQR ủng hộ
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2.5 leading-relaxed">
            Điền thông tin và số tiền bên dưới, hệ thống sẽ tự động tạo mã <strong>VietQR khớp số tiền và cú pháp chuẩn</strong> để quý vị quét và chuyển khoản nhanh qua ứng dụng ngân hàng.
          </p>
        </div>

        {/* 3 Donation Methods Tabs (Responsive Grid - Never overflows on mobile) */}
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-stone-200/80 rounded-xl max-w-lg mb-8 w-full">
          <button
            onClick={() => setActiveTab('qr')}
            className={`w-full py-2.5 px-1 sm:px-3 text-[11px] sm:text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1 sm:gap-1.5 ${
              activeTab === 'qr'
                ? 'bg-blue-900 text-white shadow-sm'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <QrCode className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Quét Mã chuyển khoản</span>
          </button>
          <button
            onClick={() => setActiveTab('office')}
            className={`w-full py-2.5 px-1 sm:px-3 text-[11px] sm:text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1 sm:gap-1.5 ${
              activeTab === 'office'
                ? 'bg-blue-900 text-white shadow-sm'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Tại Văn Phòng</span>
          </button>
        </div>

        {/* Form and Generated QR Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-full">
          {/* Left Column: Form nhập thông tin ủng hộ (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200 p-5 sm:p-8 shadow-sm space-y-6 max-w-full overflow-hidden">
            {/* Step 1 Title */}
            <div className="flex items-center justify-between pb-3 border-b border-stone-200">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-950 font-mono flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-blue-900 text-white text-[11px] flex items-center justify-center font-sans">1</span>
                <span>NHẬP THÔNG TIN ỦNG HỘ</span>
              </span>
              <span className="text-xs text-blue-900 font-medium">Cập nhật QR tức thì</span>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Mục đích ủng hộ / Quỹ tiếp nhận:
                </label>
                <select
                  value={selectedMinistry}
                  onChange={(e) => {
                    setSelectedMinistry(e.target.value);
                    setIsDonatedConfirmed(false);
                  }}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-blue-800 font-medium"
                >
                  <option value="XAY NHA THO">Quỹ Xây dựng Nhà Thờ Mới (60 Tỷ)</option>
                  <option value="CARITAS">Quỹ Bác Ái Caritas (Người nghèo & bệnh nhân)</option>
                  <option value="THIEUNHI">Xứ Đoàn Thiếu Nhi Thánh Thể (600 thiếu nhi)</option>
                  <option value="KHUYENHOC">Quỹ Khuyến Học Tôma Thiện (Học bổng)</option>
                  <option value="THANHNHAC">Ban Phụng Vụ & Thánh Nhạc (Ca đoàn)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Tên Thánh & Họ Tên ân nhân / Gia đình:
                  </label>
                  <input
                    type="text"
                    placeholder="VD: Giuse Nguyen Van A"
                    value={donorName}
                    onChange={(e) => {
                      setDonorName(e.target.value);
                      setIsDonatedConfirmed(false);
                    }}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-blue-800"
                  />
                  <span className="text-[10px] sm:text-[11px] text-stone-400 mt-0.5 block truncate">
                    (Để trống nếu quý vị muốn ủng hộ Ẩn Danh)
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Giáo khu (tùy chọn):
                  </label>
                  <select
                    value={donorZone}
                    onChange={(e) => {
                      setDonorZone(e.target.value);
                      setIsDonatedConfirmed(false);
                    }}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-blue-800"
                  >
                    <option value="">Chọn giáo khu</option>
                    {DONATION_ZONES.map((zone) => (
                      <option key={zone} value={zone}>{zone}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Số tiền ủng hộ (VNĐ):
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="50000"
                    min="10000"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(Math.max(10000, Number(e.target.value) || 0));
                      setIsDonatedConfirmed(false);
                    }}
                    className="w-full px-3.5 py-2.5 text-base sm:text-lg bg-stone-50 border border-stone-300 rounded-lg text-blue-950 font-bold focus:outline-none focus:ring-2 focus:ring-blue-800 tabular-nums pr-16"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400">
                    VNĐ
                  </span>
                </div>
              </div>

              {/* Amount preset buttons */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] sm:text-xs text-stone-500 font-medium">Mức gợi ý nhanh:</span>
                <div className="flex flex-wrap gap-1.5">
                  {DONATION_PRESET_AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => {
                        setCustomAmount(amt);
                        setIsDonatedConfirmed(false);
                      }}
                      className={`px-2.5 sm:px-3 py-1.5 text-xs rounded-lg font-medium transition-all ${
                        customAmount === amt
                          ? 'bg-blue-900 text-white font-semibold shadow-xs'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {(amt / 1000).toLocaleString('vi-VN')}k
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Ý nguyện / Lời nguyện cầu (nếu có):
                </label>
                <textarea
                  rows={2}
                  placeholder="VD: Cầu bình an cho gia đình và xin ơn bền đỗ đức tin..."
                  value={prayerIntention}
                  onChange={(e) => setPrayerIntention(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>

              {/* Bank selector */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-stone-700 block mb-1.5">
                  Ngân hàng tiếp nhận:
                </span>
                <div className="flex flex-wrap gap-2">
                  {BANK_ACCOUNTS.map((bank, idx) => (
                    <button
                      key={bank.shortName}
                      onClick={() => setSelectedBankIndex(idx)}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                        selectedBankIndex === idx
                          ? 'bg-blue-900 text-white shadow-xs'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{bank.shortName}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Office Info Box if office tab active */}
            {activeTab === 'office' && (
              <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2.5 text-xs text-stone-700">
                <div className="font-bold text-stone-900 flex items-center gap-1.5 text-sm">
                  <MapPin className="w-4 h-4 text-blue-900" />
                  <span>Văn phòng Giáo xứ Hiển Linh</span>
                </div>
                <p>📍 {PARISH_INFO.address}</p>
                <p>⏰ {PARISH_INFO.officeHours}</p>
                <p>📞 {PARISH_INFO.phone} · Hotline: {PARISH_INFO.hotline}</p>
                {/* <div className="pt-2 border-t border-stone-200 text-emerald-800 font-medium">
                  ✓ Nhận trực tiếp phiếu công đức có mộc đỏ của Giáo xứ.
                </div> */}
              </div>
            )}
          </div>

          {/* Right Column: BỔ SUNG PHẦN QR CODE SAU KHI NHẬP THÔNG TIN (5 cols) */}
          <div className="lg:col-span-5 space-y-6 max-w-full">
            {/* The Dynamic Generated VietQR Card */}
            <div className="bg-white rounded-2xl border-2 border-blue-900/80 p-5 sm:p-6 shadow-md relative overflow-hidden">
              {/* Top Banner */}
              <div className="flex items-center justify-between pb-3 border-b border-stone-200">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-900 text-white flex items-center justify-center">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-blue-950 uppercase tracking-wider block">
                      MÃ CHUYỂN KHOẢN TỰ ĐỘNG
                    </span>
                    <span className="text-[10px] text-stone-500 font-mono">
                      KHỚP {customAmount.toLocaleString('vi-VN')}Đ & CÚ PHÁP
                    </span>
                  </div>
                </div>

                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                  Sẵn sàng quét
                </span>
              </div>

              {/* QR Image Display */}
              <div className="my-4 flex flex-col items-center justify-center bg-[#FAF9F5] p-4 rounded-xl border border-stone-200">
                <div className="w-48 h-48 sm:w-56 sm:h-56 bg-white p-2 rounded-xl shadow-xs border border-stone-200 flex items-center justify-center shrink-0">
                  <img
                    src={vietQrUrl}
                    alt="Mã VietQR đóng góp giáo xứ"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-center mt-2.5 space-y-0.5">
                  <div className="text-xs font-bold text-blue-950">
                    {customAmount.toLocaleString('vi-VN')} VNĐ
                  </div>
                  <div className="text-[11px] text-stone-500">
                    Mở ứng dụng mọi ngân hàng để quét & chuyển
                  </div>
                </div>
              </div>

              {/* Bank & Memo Verification Details */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center py-1.5 border-b border-stone-100">
                  <span className="text-stone-500">Ngân hàng:</span>
                  <span className="font-semibold text-stone-900">{selectedBank.shortName}</span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-stone-100">
                  <span className="text-stone-500">Số tài khoản:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-blue-900 text-sm">
                      {selectedBank.accountNumber}
                    </span>
                    <button
                      onClick={() => handleCopy(selectedBank.accountNumber, 'acc')}
                      className="p-1 text-stone-400 hover:text-blue-900"
                      title="Sao chép STK"
                    >
                      {copiedField === 'acc' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-stone-100">
                  <span className="text-stone-500">Chủ tài khoản:</span>
                  <span className="font-semibold text-stone-900 text-[11px] truncate max-w-[200px]" title={selectedBank.accountHolder}>
                    {selectedBank.accountHolder}
                  </span>
                </div>

                {/* Syntax Memo with One-Click Copy */}
                <div className="pt-1">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-blue-900 mb-1">
                    <span>NỘI DUNG / CÚ PHÁP:</span>
                    <button
                      onClick={() => handleCopy(transferSyntax, 'syntax')}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-900 hover:text-blue-950 underline"
                    >
                      {copiedField === 'syntax' ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">Đã chép</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Sao chép cú pháp</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="font-mono text-xs font-bold text-blue-950 bg-blue-50/80 p-2.5 rounded-lg border border-blue-200 break-all select-all">
                    {transferSyntax}
                  </div>
                </div>
              </div>

              {/* Action buttons under QR */}
              <div className="mt-4 pt-4 border-t border-stone-200 grid grid-cols-2 gap-2">
                <a
                  href={vietQrUrl}
                  target="_blank"
                  rel="noreferrer"
                  download="vietqr-giao-xu-binh-an.png"
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg border border-stone-200 transition-colors text-center"
                >
                  <Download className="w-3.5 h-3.5 text-stone-600" />
                  <span className="truncate">Lưu ảnh QR</span>
                </a>

                <button
                  onClick={() => setIsDonatedConfirmed(true)}
                  className={`flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold rounded-lg transition-colors text-center ${
                    isDonatedConfirmed
                      ? 'bg-emerald-700 text-white'
                      : 'bg-blue-900 hover:bg-blue-950 text-white'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span className="truncate">
                    {isDonatedConfirmed ? 'Đã xác nhận' : 'Đã chuyển tiền'}
                  </span>
                </button>
              </div>

              {/* Thank you feedback banner */}
              {isDonatedConfirmed && (
                <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 space-y-1 animate-in fade-in">
                  <div className="font-bold flex items-center gap-1.5 text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Giáo Xứ Chân Thành Tri Ân Quý Ân Nhân!</span>
                  </div>
                  <p className="text-[11px] text-emerald-800">
                    Khoản đóng góp cho <strong>{getMinistryLabel(selectedMinistry)}</strong> đã được ghi nhận. Ban Hành Giáo sẽ đối soát sao kê và kính dâng lời nguyện cầu đặc biệt cho quý ân nhân trong Thánh lễ cuối tuần.
                  </p>
                </div>
              )}
            </div>

            {/* Quick Guarantees Strip */}
            <div className="bg-blue-950 text-stone-200 rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-300">
                <ShieldCheck className="w-4 h-4 text-amber-300" />
                <span>Cam Kết Minh Bạch & Ý Lễ</span>
              </div>
              <ul className="space-y-2 text-xs text-stone-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-300 font-bold">•</span>
                  <span>Tài khoản chính chủ mang tên <strong>GIAO XU BINH AN</strong>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-300 font-bold">•</span>
                  <span>Tên quý ân nhân được ghi danh vào Sổ Vàng Lưu Niệm Giáo xứ.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-300 font-bold">•</span>
                  <span>Mọi khoản thu chi được kiểm toán và công khai Chúa Nhật đầu tháng.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
