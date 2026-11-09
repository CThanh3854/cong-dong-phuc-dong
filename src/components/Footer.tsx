import React from 'react';
import { ArrowUp, BookOpen, Heart, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#24211d] text-neutral-300 py-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center font-serif-title font-bold">
                PĐ
              </div>
              <span className="font-serif-title font-bold text-xl text-white tracking-tight">
                PHÚC ĐỒNG – NHỮNG MẢNH GHÉP CỘNG ĐỒNG ĐÔ THỊ
              </span>
            </div>
            <p className="text-xs text-neutral-400 max-w-xl leading-relaxed">
              Dự án khảo cứu tư liệu truyền thông và nhân học văn hóa: Ghi nhận sự chuyển mình lịch sử của phường Phúc Đồng (quận Long Biên, TP. Hà Nội) qua lăng kính đời sống cư dân bản địa và người lao động di cư.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-medium transition-colors border border-neutral-700 shrink-0"
          >
            <span>Về đầu trang</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Citations & Research Metadata */}
        <div className="grid sm:grid-cols-3 gap-6 text-xs text-neutral-400">
          <div className="space-y-1.5">
            <span className="font-bold text-neutral-200 uppercase tracking-wider block">
              Nguồn tư liệu & Điền dã
            </span>
            <p className="leading-relaxed">
              • Địa chí Thăng Long - Hà Nội & Lịch sử Đảng bộ phường Phúc Đồng.
            </p>
            <p className="leading-relaxed">
              • Văn bia, thần tích Đình - Chùa Mai Phúc (Di tích lịch sử cấp Quốc gia).
            </p>
            <p className="leading-relaxed">
              • Phỏng vấn sâu nhân học tại các cụm xóm trọ ngõ 84, ngõ 124 Phúc Đồng.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="font-bold text-neutral-200 uppercase tracking-wider block">
              Khung nghiên cứu
            </span>
            <p className="leading-relaxed">
              • Chuyển đổi nông thôn - đô thị vùng ven thủ đô (Urban fringe transition).
            </p>
            <p className="leading-relaxed">
              • Sinh kế công nhân và nhân khẩu học di cư nội địa tại Việt Nam.
            </p>
            <p className="leading-relaxed">
              • Tích hợp trí tuệ nhân tạo (Gemini AI) trong phổ biến tri thức cộng đồng.
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="font-bold text-neutral-200 uppercase tracking-wider block">
              Địa bàn khảo sát
            </span>
            <div className="flex items-start gap-1.5 text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
              <span>Phường Phúc Đồng, quận Long Biên, thành phố Hà Nội, Việt Nam.</span>
            </div>
            <p className="text-[11px] text-neutral-500 pt-2">
              © {new Date().getFullYear()} Chuyên trang Văn hóa Cộng đồng Đô thị & Di cư.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
