import React, { useState, useEffect } from 'react';
import {
  X,
  Heart,
  Copy,
  Check,
  QrCode,
  CreditCard,
  ShieldCheck,
  Download,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Building2,
  Sparkles
} from 'lucide-react';
import { BANK_ACCOUNTS } from '../data/parishData';
import {
  DONATION_PRESET_AMOUNTS,
  DONATION_ZONES,
  removeVietnameseDiacritics,
  sanitizeDonorName,
} from '../data/donationOptions';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMinistryId?: string;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  selectedMinistryId = 'church_building',
}) => {
  const [step, setStep] = useState<'info' | 'qr'>('info');
  const [ministryCode, setMinistryCode] = useState<string>('XAY NHA THO');
  const [donorName, setDonorName] = useState('');
  const [donorZone, setDonorZone] = useState('');
  const [prayerIntention, setPrayerIntention] = useState('');
  const [amount, setAmount] = useState(500000);
  const [selectedBankIndex, setSelectedBankIndex] = useState(0);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [confirmedDonation, setConfirmedDonation] = useState(false);

  // Sync ministryCode with prop whenever modal opens or prop changes
  useEffect(() => {
    if (selectedMinistryId === 'charity') setMinistryCode('CARITAS');
    else if (selectedMinistryId === 'youth') setMinistryCode('THIEUNHI');
    else if (selectedMinistryId === 'scholarship') setMinistryCode('KHUYENHOC');
    else if (selectedMinistryId === 'choir') setMinistryCode('THANHNHAC');
    else setMinistryCode('XAY NHA THO');

    setConfirmedDonation(false);
  }, [selectedMinistryId, isOpen]);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const bank = BANK_ACCOUNTS[selectedBankIndex];
  const sanitizedName = sanitizeDonorName(donorName);
  const sanitizedZone = removeVietnameseDiacritics(donorZone);

  const syntax = donorZone
    ? `${sanitizedName} - ${sanitizedZone} - ${ministryCode}`
    : `${sanitizedName} - ${ministryCode}`;

  const qrUrl = `https://img.vietqr.io/image/${bank.shortName.toLowerCase().replace(/\s+/g, '')}-${bank.accountNumber}-compact2.png?amount=${amount}&addInfo=${encodeURIComponent(
    syntax
  )}&accountName=${encodeURIComponent(bank.accountHolder)}`;

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const getMinistryLabel = (code: string) => {
    switch (code) {
      case 'XAY NHA THO':
        return 'Quỹ Kiến Thiết Nhà Thờ Mới';
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
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-stone-950/75 backdrop-blur-sm animate-in fade-in duration-150 overflow-x-hidden"
    >
      <div className="bg-white rounded-2xl sm:rounded-3xl max-w-lg w-full shadow-2xl border border-stone-200 flex flex-col max-h-[92vh] overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-stone-200/80 bg-[#FAF9F5] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 min-w-0 pr-2">
            <div className="w-8 h-8 rounded-xl bg-blue-900 text-amber-200 flex items-center justify-center shrink-0">
              <Heart className="w-4 h-4 fill-amber-300 text-amber-300" />
            </div>
            <div className="min-w-0">
              <h3 className="text-base sm:text-lg font-bold font-serif-heading text-blue-950 truncate">
                Ủng Hộ Giáo Xứ Hiển Linh
              </h3>
              <p className="text-[11px] text-stone-500 truncate">
                {getMinistryLabel(ministryCode)}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors shrink-0"
            aria-label="Đóng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator Tabs */}
        <div className="px-5 pt-3 pb-2 bg-white border-b border-stone-100 flex items-center gap-2 shrink-0">
          <button
            onClick={() => setStep('info')}
            className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
              step === 'info'
                ? 'bg-blue-50 text-blue-900 border border-blue-200'
                : 'text-stone-500 hover:bg-stone-50'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-blue-900 text-white text-[10px] flex items-center justify-center">1</span>
            <span>Thông tin đóng góp</span>
          </button>

          <button
            onClick={() => setStep('qr')}
            className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors ${
              step === 'qr'
                ? 'bg-blue-50 text-blue-900 border border-blue-200'
                : 'text-stone-500 hover:bg-stone-50'
            }`}
          >
            <span className="w-4 h-4 rounded-full bg-blue-900 text-white text-[10px] flex items-center justify-center">2</span>
            <span>Mã VietQR Chuyển khoản</span>
          </button>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {step === 'info' ? (
            /* STEP 1: INPUT INFORMATION */
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Chọn Quỹ ủng hộ:
                </label>
                <select
                  value={ministryCode}
                  onChange={(e) => {
                    setMinistryCode(e.target.value);
                    setConfirmedDonation(false);
                  }}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-blue-800 font-medium"
                >
                  <option value="XAY NHA THO">Quỹ Kiến Thiết Thánh Đường Mới (Ưu tiên hàng đầu)</option>
                  <option value="CARITAS">Quỹ Bác Ái Caritas (Người nghèo & bệnh nhân)</option>
                  <option value="THIEUNHI">Xứ Đoàn Thiếu Nhi Thánh Thể (600 thiếu nhi)</option>
                  <option value="KHUYENHOC">Quỹ Khuyến Học Tôma Thiện (Học bổng)</option>
                  <option value="THANHNHAC">Ban Phụng Vụ & Thánh Nhạc (Ca đoàn)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Tên Thánh & Họ Tên ân nhân:
                  </label>
                  <input
                    type="text"
                    placeholder="VD: Giuse Tran Van A"
                    value={donorName}
                    onChange={(e) => {
                      setDonorName(e.target.value);
                      setConfirmedDonation(false);
                    }}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-blue-800"
                  />
                  <span className="text-[10px] text-stone-400 mt-0.5 block truncate">
                    (Để trống nếu muốn ẩn danh)
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
                      setConfirmedDonation(false);
                    }}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-blue-800"
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
                    value={amount}
                    onChange={(e) => {
                      setAmount(Math.max(10000, Number(e.target.value) || 0));
                      setConfirmedDonation(false);
                    }}
                    className="w-full px-3.5 py-2.5 text-base sm:text-lg bg-stone-50 border border-stone-300 rounded-lg text-blue-950 font-bold focus:outline-none focus:ring-2 focus:ring-blue-800 tabular-nums pr-14"
                  />
                  <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-stone-400">
                    VNĐ
                  </span>
                </div>

                {/* Amount presets */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {DONATION_PRESET_AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setAmount(amt);
                        setConfirmedDonation(false);
                      }}
                      className={`px-2.5 py-1 text-xs rounded-md font-medium transition-all ${
                        amount === amt
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
                  Ý nguyện cầu bình an (tùy chọn):
                </label>
                <input
                  type="text"
                  placeholder="VD: Cầu bình an cho gia đình và công việc thuận lợi..."
                  value={prayerIntention}
                  onChange={(e) => setPrayerIntention(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-lg text-stone-900 focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>

              <div>
                <span className="text-xs font-semibold text-stone-700 block mb-1.5">
                  Ngân hàng tiếp nhận:
                </span>
                <div className="flex flex-wrap gap-2">
                  {BANK_ACCOUNTS.map((bankOption, index) => (
                    <button
                      key={bankOption.shortName}
                      type="button"
                      onClick={() => {
                        setSelectedBankIndex(index);
                        setConfirmedDonation(false);
                      }}
                      className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                        selectedBankIndex === index
                          ? 'bg-blue-900 text-white shadow-xs'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{bankOption.shortName}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-xs text-blue-950 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-stone-500">Cú pháp sẽ tạo:</div>
                  <div className="font-mono font-bold text-blue-900 truncate max-w-[260px] sm:max-w-[340px]">
                    {syntax}
                  </div>
                </div>
                <Sparkles className="w-4 h-4 text-amber-500 shrink-0 ml-2" />
              </div>
            </div>
          ) : (
            /* STEP 2: VIETQR CODE & PAYMENT DETAILS */
            <div className="space-y-4">
              {/* Highlight Amount */}
              <div className="text-center pb-2">
                <span className="text-xs text-stone-500">Số tiền ủng hộ:</span>
                <div className="text-2xl font-bold font-serif text-blue-950 tabular-nums">
                  {amount.toLocaleString('vi-VN')} VNĐ
                </div>
                <div className="text-xs text-blue-900 font-medium mt-0.5">
                  {getMinistryLabel(ministryCode)}
                </div>
              </div>

              {/* Centered QR Frame */}
              <div className="flex flex-col items-center justify-center p-4 bg-[#FAF9F5] rounded-2xl border border-stone-200">
                <div className="w-48 h-48 sm:w-56 sm:h-56 bg-white p-2 rounded-xl shadow-xs border border-stone-200 flex items-center justify-center shrink-0">
                  <img
                    src={qrUrl}
                    alt="Mã VietQR"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[11px] text-stone-500 mt-2 text-center">
                  Mở App Ngân hàng bất kỳ để quét (Mã đã điền sẵn STK, số tiền & cú pháp)
                </span>
              </div>

              {/* Bank Transfer Details with 1-Click Copy */}
              <div className="bg-stone-50 rounded-xl p-3.5 border border-stone-200 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="text-stone-500">Ngân hàng:</span>
                  <span className="font-semibold text-stone-900">{bank.shortName}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-stone-500">Số tài khoản:</span>
                  <div className="flex items-center gap-1.5">
                    <span className="font-mono font-bold text-blue-900 text-sm">
                      {bank.accountNumber}
                    </span>
                    <button
                      onClick={() => handleCopy(bank.accountNumber, 'acc')}
                      className="p-1 text-stone-400 hover:text-blue-900"
                      title="Sao chép STK"
                    >
                      {copiedField === 'acc' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-stone-500">Chủ tài khoản:</span>
                  <span className="font-semibold text-stone-900 text-[11px] truncate max-w-[200px]" title={bank.accountHolder}>
                    {bank.accountHolder}
                  </span>
                </div>

                <div className="pt-1.5 border-t border-stone-200">
                  <div className="flex items-center justify-between text-[11px] font-semibold text-blue-900 mb-1">
                    <span>NỘI DUNG CHUYỂN KHOẢN:</span>
                    <button
                      onClick={() => handleCopy(syntax, 'syntax')}
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
                  <div className="font-mono text-xs font-bold text-blue-950 bg-white p-2 rounded border border-blue-200 break-all select-all">
                    {syntax}
                  </div>
                </div>
              </div>

              {/* Thank you feedback banner */}
              {confirmedDonation && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 space-y-1 animate-in fade-in">
                  <div className="font-bold flex items-center gap-1.5 text-emerald-900">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Giáo Xứ Chân Thành Cảm Tạ Quý Ân Nhân!</span>
                  </div>
                  <p className="text-[11px] text-emerald-800">
                    Thông tin đóng góp đã được lưu vào hệ thống. Cha Chánh xứ và Giáo xứ hiệp ý cầu nguyện đặc biệt cho quý vị trong Thánh lễ cuối tuần.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:px-6 bg-[#FAF9F5] border-t border-stone-200 shrink-0 flex items-center justify-between gap-2.5">
          {step === 'info' ? (
            <>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-200/70 rounded-lg transition-colors"
              >
                Hủy bỏ
              </button>
              <button
                type="button"
                onClick={() => setStep('qr')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-950 active:bg-blue-950 rounded-lg shadow-sm transition-all"
              >
                <span>Tạo mã VietQR tiếp tục</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={() => setStep('info')}
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-stone-600 hover:text-stone-900 hover:bg-stone-200/70 rounded-lg transition-colors"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Sửa thông tin</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={qrUrl}
                  target="_blank"
                  rel="noreferrer"
                  download="vietqr-binh-an.png"
                  className="hidden sm:inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-lg border border-stone-200 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tải ảnh QR</span>
                </a>

                <button
                  type="button"
                  onClick={() => setConfirmedDonation(true)}
                  className={`inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all text-white ${
                    confirmedDonation
                      ? 'bg-emerald-700'
                      : 'bg-blue-900 hover:bg-blue-950'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{confirmedDonation ? 'Đã ghi nhận' : 'Đã chuyển tiền'}</span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
