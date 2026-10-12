import React, { useState, useEffect } from 'react';
import { X, Code2, Copy, Check, FileCode, FolderTree } from 'lucide-react';

interface AstroProjectViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AstroProjectViewerModal: React.FC<AstroProjectViewerModalProps> = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState<string>('index.astro');
  const [copied, setCopied] = useState(false);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
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

  const astroFiles: Record<string, { description: string; code: string }> = {
    'file_structure.txt': {
      description: 'Cấu trúc thư mục hoàn chỉnh của dự án Astro',
      code: `parish-donation-landing/
├── public/
│   ├── favicon.svg
│   ├── images/
│   │   ├── church-render.jpg
│   │   ├── priest-portrait.jpg
│   │   ├── charity.jpg
│   │   └── youth.jpg
│   └── qr-code.png
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── PriestLetter.astro
│   │   ├── ProgressBar.astro
│   │   ├── WhyWeNeedHelp.astro
│   │   ├── BentoMinistries.astro
│   │   ├── DonationInfo.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── styles/
│   │   └── global.css
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
└── README.md`,
    },
    'index.astro': {
      description: 'Trang chủ chính src/pages/index.astro',
      code: `---
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.astro';
import Hero from '../components/Hero.astro';
import PriestLetter from '../components/PriestLetter.astro';
import ProgressBar from '../components/ProgressBar.astro';
import WhyWeNeedHelp from '../components/WhyWeNeedHelp.astro';
import BentoMinistries from '../components/BentoMinistries.astro';
import DonationInfo from '../components/DonationInfo.astro';
import Footer from '../components/Footer.astro';
---

<Layout title="Giáo Xứ Bình An - Quỹ Kiến Thiết Thánh Đường & Các Mục Vụ">
  <Header />
  <main>
    <Hero />
    <PriestLetter />
    <ProgressBar />
    <WhyWeNeedHelp />
    <BentoMinistries />
    <DonationInfo />
  </main>
  <Footer />
</Layout>`,
    },
    'Layout.astro': {
      description: 'Layout chính src/layouts/Layout.astro',
      code: `---
interface Props {
  title: string;
  description?: string;
}

const {
  title = "Giáo Xứ Bình An - Quỹ Kiến Thiết Nhà Thờ",
  description = "Trang tiếp nhận đóng góp Quỹ kiến thiết Nhà thờ Giáo xứ Bình An và các mục vụ bác ái."
} = Astro.props;
---

<!doctype html>
<html lang="vi" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#FAF9F5] text-stone-800 antialiased selection:bg-amber-200">
    <slot />
  </body>
</html>`,
    },
    'Header.astro': {
      description: 'Thanh điều hướng src/components/Header.astro',
      code: `---
// Header.astro
---
<header class="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-stone-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20 gap-8">
      <!-- Zone 1: Brand wordmark -->
      <a href="/" class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-amber-900 text-amber-100 flex items-center justify-center font-bold">
          ✝
        </div>
        <div class="flex flex-col">
          <span class="font-serif text-lg sm:text-xl font-bold tracking-tight text-stone-900 leading-none">
            GIÁO XỨ BÌNH AN
          </span>
          <span class="text-[11px] font-sans font-medium text-stone-500 uppercase tracking-wider mt-1">
            Tổng Giáo Phận Sài Gòn
          </span>
        </div>
      </a>

      <!-- Zone 2: Navigation links -->
      <nav class="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
        <a href="#gioi-thieu" class="hover:text-amber-900 transition-colors whitespace-nowrap">Lời ngỏ Cha Xứ</a>
        <a href="#tien-do" class="hover:text-amber-900 transition-colors whitespace-nowrap">Tiến độ quyên góp</a>
        <a href="#ly-do" class="hover:text-amber-900 transition-colors whitespace-nowrap">Tại sao cần xây mới?</a>
        <a href="#muc-vu" class="hover:text-amber-900 transition-colors whitespace-nowrap">Các mục vụ khác</a>
        <a href="#dong-gop" class="hover:text-amber-900 transition-colors whitespace-nowrap">Cách đóng góp</a>
      </nav>

      <!-- Zone 3: Primary CTA -->
      <div class="flex items-center gap-3">
        <a href="#dong-gop" class="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-amber-800 hover:bg-amber-900 rounded-lg shadow-sm transition-all whitespace-nowrap">
          <span>Ủng hộ ngay</span>
        </a>
      </div>
    </div>
  </div>
</header>`,
    },
    'Hero.astro': {
      description: 'Khu vực Hero src/components/Hero.astro',
      code: `---
// Hero.astro
---
<section class="relative bg-stone-900 text-white overflow-hidden min-h-[640px] flex items-center">
  <div class="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1548625361-195fe57870a7?auto=format&fit=crop&w=1920&q=80" 
      alt="Phối cảnh Thánh đường Giáo xứ Bình An"
      class="w-full h-full object-cover object-center opacity-40" 
    />
    <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent"></div>
  </div>

  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
    <div class="max-w-3xl space-y-6">
      <div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300">
        <span>Đại Công Trình 2026 - 2028</span>
        <span>·</span>
        <span>Giáo Xứ Bình An</span>
      </div>

      <h1 class="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif leading-[1.15] text-white">
        Cùng chung tay kiến thiết <span class="text-amber-300 italic font-normal">Nhà Chúa</span>
      </h1>

      <p class="text-base sm:text-xl text-stone-200 leading-relaxed max-w-2xl">
        Xây dựng ngôi thánh đường kiên cố, trang nghiêm — di sản đức tin thiêng liêng và mái ấm cộng đoàn cho ngàn đời con cháu mai sau.
      </p>

      <div class="pt-4 flex flex-col sm:flex-row gap-4">
        <a href="#dong-gop" class="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-amber-700 hover:bg-amber-600 rounded-lg shadow-lg transition-all">
          Đóng góp xây dựng
        </a>
        <a href="#gioi-thieu" class="inline-flex items-center justify-center px-6 py-3.5 text-base font-medium text-stone-200 bg-stone-800/80 hover:bg-stone-700 rounded-lg border border-stone-600 transition-all">
          Tìm hiểu thêm
        </a>
      </div>
    </div>
  </div>
</section>`,
    },
    'ProgressBar.astro': {
      description: 'Thanh tiến độ src/components/ProgressBar.astro',
      code: `---
// ProgressBar.astro
const target = 15000000000;
const raised = 10250000000;
const donors = 1842;
const percent = Math.round((raised / target) * 100);
---

<section id="tien-do" class="py-20 bg-white border-b border-stone-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mb-12">
      <span class="text-xs font-semibold uppercase tracking-wider text-amber-800">Minh Bạch Tài Chính</span>
      <h2 class="text-3xl font-bold font-serif text-stone-900 mt-2">Tiến độ quyên góp thánh đường</h2>
    </div>

    <div class="bg-[#FAF9F5] border border-stone-200 rounded-2xl p-6 sm:p-10 shadow-sm">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-8 border-b border-stone-200">
        <div>
          <span class="text-xs uppercase text-stone-500 font-medium">Mục tiêu</span>
          <div class="text-2xl font-bold font-serif text-stone-900 mt-1">15,000,000,000 VNĐ</div>
        </div>
        <div>
          <span class="text-xs uppercase text-amber-700 font-medium">Đã đạt được ({percent}%)</span>
          <div class="text-2xl font-bold font-serif text-amber-800 mt-1">10,250,000,000 VNĐ</div>
        </div>
        <div>
          <span class="text-xs uppercase text-stone-500 font-medium">Số ân nhân đồng hành</span>
          <div class="text-2xl font-bold font-serif text-stone-900 mt-1">{donors.toLocaleString('vi-VN')} người</div>
        </div>
      </div>

      <div class="pt-8 space-y-3">
        <div class="flex justify-between text-sm font-medium">
          <span>Tiến trình hoàn thành: <strong>{percent}%</strong></span>
          <span class="text-amber-800 font-semibold">10.25 / 15.00 Tỷ VNĐ</span>
        </div>
        <div class="h-5 w-full bg-stone-200 rounded-full overflow-hidden p-1">
          <div class="h-full bg-amber-700 rounded-full" style={\`width: \${percent}%\`}></div>
        </div>
      </div>
    </div>
  </div>
</section>`,
    },
    'BentoMinistries.astro': {
      description: 'Bento Grid các mục vụ src/components/BentoMinistries.astro',
      code: `---
// BentoMinistries.astro
---
<section id="muc-vu" class="py-20 bg-white border-b border-stone-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mb-12">
      <span class="text-xs font-semibold uppercase tracking-wider text-amber-800">Hiệp Thông Sứ Vụ</span>
      <h2 class="text-3xl font-bold font-serif text-stone-900 mt-2">Các mục vụ giáo xứ khác</h2>
    </div>

    <!-- Bento Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Bento 1: Quỹ Bác Ái (7 cols) -->
      <div class="md:col-span-7 bg-[#FAF9F5] border border-stone-200 rounded-3xl p-8 flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold text-emerald-700 uppercase tracking-wider">Mục Vụ Bác Ái</span>
          <h3 class="text-2xl font-bold font-serif text-stone-900 mt-2">Quỹ Bác Ái Caritas</h3>
          <p class="text-sm text-stone-600 mt-3 leading-relaxed">
            Chăm lo cho hơn 120 hộ gia đình khó khăn, phát thuốc miễn phí định kỳ hàng tháng, bếp ăn tình thương cho người già cơ nhỡ.
          </p>
        </div>
        <div class="pt-6 mt-6 border-t border-stone-200 flex justify-between items-center">
          <span class="text-xs text-stone-500">342 ân nhân</span>
          <a href="#dong-gop" class="text-xs font-semibold text-emerald-800 hover:underline">Ủng hộ quỹ này →</a>
        </div>
      </div>

      <!-- Bento 2: Thiếu Nhi Thánh Thể (5 cols) -->
      <div class="md:col-span-5 bg-[#FAF9F5] border border-stone-200 rounded-3xl p-8 flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold text-sky-700 uppercase tracking-wider">Giáo Lý Trẻ</span>
          <h3 class="text-xl font-bold font-serif text-stone-900 mt-2">Thiếu Nhi Thánh Thể</h3>
          <p class="text-sm text-stone-600 mt-3 leading-relaxed">
            Trang trải giáo lý cụ, tổ chức trại hè Sa mạc Huấn luyện Huynh trưởng cho 600 em thiếu nhi.
          </p>
        </div>
        <div class="pt-6 mt-6 border-t border-stone-200 flex justify-between items-center">
          <span class="text-xs text-stone-500">215 ân nhân</span>
          <a href="#dong-gop" class="text-xs font-semibold text-sky-800 hover:underline">Ủng hộ quỹ này →</a>
        </div>
      </div>

      <!-- Bento 3: Khuyến Học (6 cols) -->
      <div class="md:col-span-6 bg-white border border-stone-200 rounded-3xl p-8 flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold text-amber-700 uppercase tracking-wider">Giáo Dục</span>
          <h3 class="text-xl font-bold font-serif text-stone-900 mt-2">Quỹ Khuyến Học Tôma Thiện</h3>
          <p class="text-sm text-stone-600 mt-3 leading-relaxed">
            Trao 50 suất học bổng mỗi niên khóa cho học sinh, sinh viên nghèo vượt khó không phân biệt tôn giáo.
          </p>
        </div>
        <div class="pt-6 mt-6 border-t border-stone-200 flex justify-between items-center">
          <span class="text-xs text-stone-500">168 ân nhân</span>
          <a href="#dong-gop" class="text-xs font-semibold text-amber-800 hover:underline">Ủng hộ quỹ này →</a>
        </div>
      </div>

      <!-- Bento 4: Ca Đoàn & Phụng Vụ (6 cols) -->
      <div class="md:col-span-6 bg-white border border-stone-200 rounded-3xl p-8 flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold text-rose-700 uppercase tracking-wider">Phụng Vụ</span>
          <h3 class="text-xl font-bold font-serif text-stone-900 mt-2">Ca Đoàn & Phụng Vụ Thánh Nhạc</h3>
          <p class="text-sm text-stone-600 mt-3 leading-relaxed">
            Bảo dưỡng đàn đại phong cầm, trang bị âm thanh chuyên dụng cho thánh lễ và đồng phục áo lễ ca đoàn.
          </p>
        </div>
        <div class="pt-6 mt-6 border-t border-stone-200 flex justify-between items-center">
          <span class="text-xs text-stone-500">124 ân nhân</span>
          <a href="#dong-gop" class="text-xs font-semibold text-rose-800 hover:underline">Ủng hộ quỹ này →</a>
        </div>
      </div>
    </div>
  </div>
</section>`,
    },
    'DonationInfo.astro': {
      description: 'Thông tin đóng góp & Cú pháp src/components/DonationInfo.astro',
      code: `---
// DonationInfo.astro
const bankAccount = {
  bank: "Vietcombank (Chi nhánh Nam Sài Gòn)",
  accountNumber: "1022889988",
  accountHolder: "GIAO XU BINH AN - TONG GIAO PHAN",
  syntax: "GXBA KIENTHIET [Ho Ten] [So DT]"
};
---

<section id="dong-gop" class="py-20 bg-[#FAF9F5] border-b border-stone-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mb-12">
      <span class="text-xs font-semibold uppercase tracking-wider text-amber-800">Kênh Đóng Góp Chính Thức</span>
      <h2 class="text-3xl font-bold font-serif text-stone-900 mt-2">Cách thức ủng hộ giáo xứ</h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Method 1: Chuyển khoản -->
      <div class="bg-white rounded-2xl p-7 border border-stone-200 space-y-4">
        <h3 class="text-lg font-bold text-stone-900 font-serif">1. Chuyển Khoản Ngân Hàng</h3>
        <div class="text-xs text-stone-500">Ngân hàng:</div>
        <div class="text-sm font-semibold text-stone-900">{bankAccount.bank}</div>

        <div class="text-xs text-stone-500">Số tài khoản:</div>
        <div class="text-xl font-mono font-bold text-amber-900">{bankAccount.accountNumber}</div>

        <div class="text-xs text-stone-500">Chủ tài khoản:</div>
        <div class="text-sm font-semibold text-stone-900">{bankAccount.accountHolder}</div>

        <div class="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs">
          <strong>Cú pháp:</strong> <code class="font-mono">{bankAccount.syntax}</code>
        </div>
      </div>

      <!-- Method 2: Quét mã QR -->
      <div class="bg-white rounded-2xl p-7 border border-stone-200 space-y-4 text-center">
        <h3 class="text-lg font-bold text-stone-900 font-serif">2. Quét Mã VietQR</h3>
        <div class="w-48 h-48 mx-auto bg-stone-100 p-2 rounded-xl border flex items-center justify-center">
          <img src="/qr-code.png" alt="Mã VietQR Giáo Xứ" class="max-w-full" />
        </div>
        <p class="text-xs text-stone-600">Quét bằng ứng dụng của 40+ ngân hàng Việt Nam</p>
      </div>

      <!-- Method 3: Trực tiếp -->
      <div class="bg-white rounded-2xl p-7 border border-stone-200 space-y-4">
        <h3 class="text-lg font-bold text-stone-900 font-serif">3. Trực Tiếp Tại Văn Phòng</h3>
        <p class="text-xs text-stone-600">Địa chỉ: 2287 Phạm Thế Hiển, P.6, Q.8, TP.HCM</p>
        <p class="text-xs text-stone-600">Giờ làm việc: Thứ Ba - Chúa Nhật (08:00 - 11:30 & 14:30 - 17:30)</p>
        <p class="text-xs text-stone-600">Điện thoại: (028) 3850 1234</p>
        <div class="p-3 bg-emerald-50 rounded-lg text-xs text-emerald-900">
          Nhận Phiếu Công Đức / Tri Ân có dấu mộc của Giáo xứ.
        </div>
      </div>
    </div>
  </div>
</section>`,
    },
    'Footer.astro': {
      description: 'Chân trang src/components/Footer.astro',
      code: `---
// Footer.astro
---
<footer class="bg-stone-900 text-stone-300 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
    <h3 class="font-serif text-xl font-bold text-white">GIÁO XỨ BÌNH AN - TỔNG GIÁO PHẬN SÀI GÒN</h3>
    <p class="text-xs text-stone-400">2287 Đường Phạm Thế Hiển, Phường 6, Quận 8, TP. Hồ Chí Minh</p>
    <p class="text-sm font-serif italic text-amber-200">
      "Nguyện xin Thiên Chúa là Cha nhân từ chúc lành cho quý ân nhân và gia đình!"
    </p>
    <div class="text-xs text-stone-500 pt-4 border-t border-stone-800">
      © {new Date().getFullYear()} Giáo xứ Bình An. Mọi quyền được bảo lưu.
    </div>
  </div>
</footer>`,
    },
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(astroFiles[selectedFile].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-stone-950/80 backdrop-blur-sm overflow-x-hidden"
    >
      <div className="bg-stone-900 text-stone-100 rounded-2xl sm:rounded-3xl max-w-4xl w-full p-4 sm:p-7 shadow-2xl border border-stone-800 relative flex flex-col max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-900 flex items-center justify-center text-amber-200">
              <Code2 className="w-5 h-5 text-amber-200" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-serif-heading">
                Astro Project Blueprint & Source Deliverables
              </h3>
              <p className="text-xs text-stone-400">
                Mã nguồn Astro components theo đúng cấu trúc yêu cầu của đề bài
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* File Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto py-3 border-b border-stone-800 shrink-0 text-xs">
          {Object.keys(astroFiles).map((fileKey) => (
            <button
              key={fileKey}
              onClick={() => setSelectedFile(fileKey)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                selectedFile === fileKey
                  ? 'bg-blue-900 text-white font-semibold'
                  : 'bg-stone-800/70 text-stone-400 hover:text-stone-200'
              }`}
            >
              {fileKey.endsWith('.astro') ? (
                <FileCode className="w-3.5 h-3.5 text-amber-300" />
              ) : (
                <FolderTree className="w-3.5 h-3.5" />
              )}
              <span>{fileKey}</span>
            </button>
          ))}
        </div>

        {/* Code Content View */}
        <div className="flex-1 overflow-y-auto mt-4 pr-1 space-y-3 min-h-0">
          <div className="flex items-center justify-between text-xs text-stone-400">
            <span>{astroFiles[selectedFile].description}</span>
            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1 px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-md border border-stone-700 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Đã chép mã</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Sao chép code</span>
                </>
              )}
            </button>
          </div>

          <pre className="p-4 bg-stone-950 text-stone-200 rounded-xl text-xs font-mono overflow-x-auto border border-stone-800/80 leading-relaxed selection:bg-amber-900 selection:text-white">
            {astroFiles[selectedFile].code}
          </pre>
        </div>
      </div>
    </div>
  );
};
