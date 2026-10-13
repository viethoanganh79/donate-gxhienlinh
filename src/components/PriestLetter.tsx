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
                    Chánh xứ Giáo xứ Hiển Linh (2023 - nay)
                  </div>
                </div>
              </div>

              {/* Bio details */}
              {/* <div className="p-6 bg-white space-y-3">
                <div className="flex items-start gap-3 text-xs text-stone-600 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <span>Chủ tịch Ủy ban Xây dựng Thánh đường Giáo xứ Hiển Linh</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-stone-600 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <span>Đồng hành cùng 4,500+ tín hữu trong hành trình đức tin và bác ái</span>
                </div>
                <div className="pt-3 border-t border-stone-100 text-[11px] text-stone-400 font-mono">
                  CHỨNG THỰC BỞI TÒA TỔNG GIÁM MỤC TP. HỒ CHÍ MINH
                </div>
              </div> */}
            </div>
          </div>

          {/* Priest's Open Letter Body (7 columns) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-stone-500 font-mono">
              THƯ NGỎ TỪ CHA CHÁNH XỨ
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

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-950 font-serif-heading [text-wrap:balance]">
              Chung tay xây dựng Nhà Thờ và Nhà Mục vụ Giáo xứ
            </h3>

            {/* Letter Prose */}
            <div className="space-y-4 text-base text-stone-700 leading-relaxed max-w-prose">
              <p>
                Quý anh chị em thân mến,
              </p>

              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-blue-900 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                Ngôi thánh đường hiện tại của Giáo xứ chúng ta đã gắn liền với biết bao thế hệ, là nơi chứng kiến biết bao kỷ niệm thiêng liêng và là mái nhà tâm linh nuôi dưỡng đời sống đức tin của chúng ta. Tuy nhiên, qua năm tháng, ngôi nhà thờ đã xuống cấp nghiêm trọng, không còn đáp ứng đủ nhu cầu phụng vụ và học hỏi giáo lý cho các con em của chúng ta. 
              </p>

              <p>
                Xây dựng ngôi nhà thờ mới và nhà mục vụ là mong ước chung và là nhu cầu thật sự cấp thiết. Tạ ơn Chúa, Giáo xứ chúng ta đã nhận được giấy phép xây dựng. Đây là hồng ân Chúa ban sau nhiều năm tháng chúng ta mong đợi và cầu nguyện.
              </p>

              <p>
                Tổng kinh phí dự trù cho công trình ước tính khoảng 60 tỷ đồng. Nhờ lòng quảng đại của anh chị em và các ân nhân, trong những năm qua Giáo xứ đã quyên góp và được hứa giúp đỡ được khoảng 20 tỷ, nghĩa là còn thiếu khoảng 40 tỷ.
              </p>
            
            <p>
              Đứng trước khoản chi phí xây cất rất lớn này, với cương vị là mục tử chăm lo giáo xứ, lòng tôi không khỏi trăn trở và bận tâm. Trong thời gian qua, tôi cùng Hội đồng Mục Vụ Giáo xứ đã đi gõ cửa một số nơi để quyên góp, trải qua không ít vất vả nhưng cũng thấm đượm tình người.
            </p>

            <p>
              Nhưng anh chị em thân mến, nhà thờ giáo xứ trước hết là ngôi nhà chung của chính chúng ta. Một ngôi thánh đường chỉ thực sự ấm cúng và linh thiêng khi được dựng xây từ chính công sức, sự hy sinh và lòng mến của từng người con trong Giáo xứ.
            </p>
            <p>
              Chúa không nhìn vào số lượng dâng góp, nhưng Ngài nhìn vào tấm lòng của chúng ta. Mỗi người tuỳ theo khả năng của mình, mỗi sự đóng góp, dù là một ngày công, một khoản tiết kiệm nhỏ hàng tuần hay một lời cầu nguyện chân thành, đều là những “viên gạch” vô giá dựng xây nên ngôi Nhà Chúa.
            </p>
            <p>
              Tôi tha thiết kêu gọi quý anh chị em, hãy cầu nguyện và mở rộng lòng quảng đại cùng chung tay với Giáo xứ trong sứ vụ này. Để mai này, chúng ta có thể tự hào nói với con cháu rằng ngôi thánh đường này đã được dựng xây từ tình yêu và sự hy sinh của chính chúng ta.
            </p>
            <p>
              Anh chị em có thể đóng góp tại Văn phòng Giáo xứ, qua Ban Điều hành Giáo khu, hoặc chuyển khoản: Tên tài khoản: <strong>Giáo Xứ Hiển Linh</strong>; Số tài khoản: <strong>1042102288</strong>, nội dung xin ghi “Họ tên - Giáo khu - Xây nhà thờ”. Mọi đóng góp sẽ được công bố minh bạch.
            </p>
            <p>
              Xin Thiên Chúa, Đấng không bao giờ quên lòng quảng đại của chúng ta, trả công dồi dào và ban bình an cho anh chị em. 
            </p>
            <p>
              
            </p>
            </div>

            {/* Signature Block */}
            <div className="pt-6 border-t border-stone-200 flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-stone-900">
                  Lm. Phêrô Nguyễn Đức Trí, SJ
                </div>
                <div className="text-xs text-stone-500">
                  Chánh xứ Giáo xứ Hiển Linh
                </div>
              </div>
              <div className="text-right">
                <div className="text-xs text-stone-400 font-serif italic">
                  Hiển Linh, lễ Thánh Têrêsa, ngày 01/10/2026 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
