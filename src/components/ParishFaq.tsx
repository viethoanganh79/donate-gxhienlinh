import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/parishData';

export const ParishFaq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-900">
            <HelpCircle className="w-4 h-4 text-blue-800" />
            <span>Giải Đáp Thắc Mắc</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-blue-950 mt-2 font-serif-heading">
            Câu hỏi thường gặp của quý ân nhân
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Mọi thông tin cần hỗ trợ thêm, quý vị vui lòng liên hệ Văn phòng Giáo xứ hoặc Ban Hành Giáo.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-stone-200 rounded-xl overflow-hidden transition-all bg-[#FAF9F5]"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-semibold text-stone-900 hover:text-blue-900 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-medium">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-900' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
