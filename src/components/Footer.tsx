import React from 'react';
import { Church, MapPin, Phone, Mail, Clock, ExternalLink, Heart } from 'lucide-react';
import { PARISH_INFO } from '../data/parishData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800">
          {/* Col 1: Parish identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-900 text-amber-200 flex items-center justify-center shadow-xs">
                <Church className="w-5 h-5 text-amber-200" />
              </div>
              <div>
                <span className="font-display text-lg font-bold text-white tracking-wide block">
                  GIÁO XỨ BÌNH AN
                </span>
                <span className="text-xs text-stone-400">
                  {PARISH_INFO.diocese}
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed pr-4">
              Cộng đoàn hiệp nhất trong đức tin, kiên vững trong đức cậy và nhiệt thành trong đức mến bác ái. Thành lập từ năm {PARISH_INFO.foundedYear}.
            </p>

            <div className="pt-2 text-xs text-amber-300 font-serif italic">
              "Tất cả để tôn vinh Danh Chúa và mưu ích cho các linh hồn."
            </div>
          </div>

          {/* Col 2: Contact info (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-mono">
              THÔNG TIN LIÊN HỆ
            </div>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{PARISH_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{PARISH_INFO.phone} · Hotline: {PARISH_INFO.hotline}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{PARISH_INFO.email}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{PARISH_INFO.officeHours}</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Mass schedule (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-mono">
              GIỜ PHỤNG VỤ & THÁNH LỄ
            </div>
            <div className="space-y-2 text-xs text-stone-300">
              {PARISH_INFO.massSchedule.map((item, idx) => (
                <div key={idx} className="pb-2 border-b border-stone-800/80">
                  <div className="text-stone-400 font-medium">{item.days}:</div>
                  <div className="text-amber-200 font-semibold mt-0.5">{item.times}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="https://tgpsaigon.net"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 transition-colors"
              >
                <span>Cổng thông tin Tổng Giáo Phận Sài Gòn</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Blessings message & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="space-y-1">
            <p className="text-xs sm:text-sm text-stone-200 font-serif italic">
              "Nguyện xin Thiên Chúa là Cha nhân từ chúc lành và ban bình an cho quý ân nhân cùng toàn thể gia đình!"
            </p>
            <p className="text-[11px] text-stone-500">
              © {new Date().getFullYear()} Ban Hành Giáo & Hội đồng Mục vụ Giáo Xứ Bình An. Mọi quyền được bảo lưu.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-400">
            <Heart className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
            <span>Hiệp nhất trong tình yêu Chúa Kitô</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
