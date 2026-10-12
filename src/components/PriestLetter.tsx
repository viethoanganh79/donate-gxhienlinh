import React, { useState } from 'react';
import { Quote, Church, PenTool, CheckCircle2 } from 'lucide-react';
import { PARISH_INFO } from '../data/parishData';

export const PriestLetter: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const priestImgPath = '/src/assets/images/parish_priest_portrait_1791639823985.jpg';

  return (
    <section id="gioi-thieu" className="py-20 lg:py-28 bg-[#FAF9F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tagline */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-900">
            <span>Tâm Thư Mục Tử</span>
            <span aria-hidden="true">·</span>
            <span>Năm Thánh Hy Vọng</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-blue-950 mt-2 font-serif-heading [text-wrap:balance]">
            Lời ngỏ từ Cha Chánh xứ gửi cộng đoàn dân Chúa
          </h2>
        </div>

        {/* 2-Column Split: Editorial Reading Column & Priest Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Priest Photo & Bio Card (5 columns) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden bg-stone-100 border border-stone-200/90 shadow-sm">
              <div className="aspect-[3/4] relative overflow-hidden bg-stone-200">
                {!imgError ? (
                  <img
                    src={priestImgPath}
                    alt={PARISH_INFO.priestName}
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-stone-400 bg-stone-100">
                    <Church className="w-16 h-16 mb-2 text-stone-300" />
                    <span className="text-sm">{PARISH_INFO.priestName}</span>
                  </div>
                )}
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="font-serif-heading text-lg font-bold">
                    {PARISH_INFO.priestName}
                  </div>
                  <div className="text-xs text-amber-200 font-medium">
                    Chánh xứ Giáo xứ Bình An (2018 - nay)
                  </div>
                </div>
              </div>

              {/* Bio details */}
              <div className="p-6 bg-white space-y-3">
                <div className="flex items-start gap-3 text-xs text-stone-600 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <span>Chủ tịch Ủy ban Xây dựng Thánh đường Giáo xứ Bình An</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-stone-600 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <span>Đồng hành cùng 4,500+ tín hữu trong hành trình đức tin và bác ái</span>
                </div>
                <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-400 font-mono">
                  CHỨNG THỰC BỞI TÒA TỔNG GIÁM MỤC TP. HỒ CHÍ MINH
                </div>
              </div>
            </div>
          </div>

          {/* Priest's Open Letter Body (7 columns) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
              THƯ KÊU GỌI SỐ 08/2026/GXBA
            </div>

            {/* Blockquote with refined editorial serif */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-900/40">
              <Quote className="w-8 h-8 text-blue-900/20 absolute -top-4 -left-3 rotate-180" />
              <p className="text-lg sm:text-xl font-serif text-stone-900 italic leading-relaxed">
                "Ví như Chúa chẳng xây nhà, thợ nề vất vả cũng là uổng công."
              </p>
              <div className="text-xs font-sans text-stone-500 mt-2 font-medium">
                — Thánh vịnh 127, câu 1
              </div>
            </div>

            {/* Letter Prose */}
            <div className="space-y-4 text-base text-stone-700 leading-relaxed max-w-prose">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-blue-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Kính thưa quý ân nhân xa gần, quý cụ, quý ban ngành đoàn thể và toàn thể anh chị em giáo hữu rất thân mến trong Chúa Kitô,
              </p>

              <p>
                Trải qua hơn 74 năm thăng trầm lịch sử kể từ ngày những hàng gạch đầu tiên được đặt xuống năm 1952, ngôi nhà thờ Giáo xứ Bình An thân yêu của chúng ta đã che chở và chứng kiến bao thế hệ con cái Chúa lớn lên, lãnh nhận các Bí tích và sống trọn vẹn đức tin.
              </p>

              <p>
                Thế nhưng hôm nay, thời gian và mưa nắng đã khiến công trình già nua xuống cấp trầm trọng. Mái ngói rạn vỡ, hệ xà gồ mối mọt rệu rã, mỗi mùa mưa về cung thánh lại thấm dột, tiềm ẩn nhiều nguy cơ mất an toàn cho cộng đoàn khi tham dự phụng vụ. Hơn thế nữa, từ một họ đạo nhỏ với 800 tín hữu năm xưa, nay giáo xứ đã đón nhận hơn 4,500 nhân danh. Thánh đường hiện tại đã quá chật hẹp; mỗi Chúa Nhật hàng trăm giáo dân, đặc biệt là các em thiếu nhi và các cụ già, phải đứng chen chúc nơi hành lang và ngoài sân nắng gắt.
              </p>

              <p>
                Trước nhu cầu khẩn thiết ấy, sau nhiều tháng cầu nguyện, lắng nghe và được sự chuẩn thuận của Đức Tổng Giám mục, Giáo xứ chúng ta chính thức khởi động <strong>Công trình Kiến thiết Nhà Chúa Mới</strong>.
              </p>

              <p>
                Tôi tha thiết kêu gọi mỗi gia đình, từng cá nhân trong giáo xứ, cùng quý ân nhân đồng hương hải ngoại và quý vị hảo tâm gần xa: hãy mở rộng vòng tay, cùng chung chia một viên gạch, một bao xi măng, một lời cầu nguyện, để ngôi thánh đường của Thiên Chúa sớm được hoàn thành trang nghiêm và bền vững.
              </p>
            </div>

            {/* Signature Block */}
            <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-stone-900">
                  Lm. Giuse Nguyễn Văn Hiền
                </div>
                <div className="text-xs text-stone-500">
                  Chánh xứ Giáo xứ Bình An
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-stone-400 font-serif italic">
                  Hiệp thông & Tri ân
                </div>
                <div className="text-xs text-blue-900 font-medium mt-0.5">
                  Nguyện Chúa chúc lành!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
