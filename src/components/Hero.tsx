import React from 'react';
import {
  Sparkles,
  ArrowDown,
  Layers,
  MapPin,
  Building2,
  Users2,
  CalendarDays,
} from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#f9f5ed] via-[#fbf7f0] to-[#fcfaf7] border-b border-[#ebdcca] pt-10 pb-16 lg:pt-16 lg:pb-20">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#8d5b2d_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Topic Tag */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100/80 text-amber-900 border border-amber-300">
            <MapPin className="w-3.5 h-3.5 text-amber-700" />
            Quận Long Biên, Thành phố Hà Nội
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200">
            <Layers className="w-3.5 h-3.5 text-stone-500" />
            Nhân học Đô thị & Di cư Việt Nam
          </span>
        </div>

        {/* Main Title Banner */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="font-serif-title text-3xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 tracking-tight leading-[1.15]">
            PHÚC ĐỒNG
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-normal text-amber-900/90 mt-2 italic font-serif-title">
              Những Mảnh Ghép Cộng Đồng Đô Thị
            </span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-700 max-w-3xl mx-auto leading-relaxed font-light">
            Một chuyên khảo đa phương tiện về <strong className="font-semibold text-neutral-900">Văn hóa cư dân bản địa</strong> và{' '}
            <strong className="font-semibold text-neutral-900">Cộng đồng di cư</strong> tại vùng đất ven sông đang trải qua cuộc chuyển mình lịch sử: Từ làng quê truyền thống châu thổ sông Hồng thành không gian đô thị đa diện.
          </p>
        </div>

        {/* Fast Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-xl mx-auto">
          <button
            onClick={() => onNavigate('section-history')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-900 text-amber-50 font-medium text-sm shadow-md hover:bg-amber-800 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <span>Bắt đầu khám phá</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          <button
            onClick={() => onNavigate('section-ai-chat')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-amber-950 font-medium text-sm border-2 border-amber-300/80 shadow-sm hover:bg-amber-50/60 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Đối thoại với AI Nghiên cứu</span>
          </button>
        </div>

        {/* Key Metrics / Documentary Highlights */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          <div className="p-4 rounded-2xl bg-white/80 border border-[#e5d9c8] shadow-xs text-center">
            <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center">
              <CalendarDays className="w-4 h-4" />
            </div>
            <div className="font-serif-title text-xl sm:text-2xl font-bold text-neutral-900">800+ Năm</div>
            <p className="text-xs text-neutral-500 mt-0.5">Di sản làng cổ ven sông Hồng</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-[#e5d9c8] shadow-xs text-center">
            <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center">
              <Users2 className="w-4 h-4" />
            </div>
            <div className="font-serif-title text-xl sm:text-2xl font-bold text-neutral-900">~60%</div>
            <p className="text-xs text-neutral-500 mt-0.5">Tỷ lệ dân số nhập cư & tạm trú</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-[#e5d9c8] shadow-xs text-center">
            <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Building2 className="w-4 h-4" />
            </div>
            <div className="font-serif-title text-xl sm:text-2xl font-bold text-neutral-900">2003</div>
            <p className="text-xs text-neutral-500 mt-0.5">Cột mốc chuyển xã lên phường</p>
          </div>

          <div className="p-4 rounded-2xl bg-white/80 border border-[#e5d9c8] shadow-xs text-center">
            <div className="w-8 h-8 mx-auto mb-2 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <div className="font-serif-title text-xl sm:text-2xl font-bold text-neutral-900">Đa diện</div>
            <p className="text-xs text-neutral-500 mt-0.5">Cấu trúc &quot;Làng trong phố&quot; đặc thù</p>
          </div>
        </div>

        {/* Curatorial Quote Banner */}
        <div className="mt-8 max-w-3xl mx-auto text-center px-4 py-3 rounded-xl bg-amber-50/60 border border-amber-200/60">
          <p className="text-xs sm:text-sm text-neutral-700 italic">
            &ldquo;Đô thị hóa không làm mất đi làng quê, mà nén chặt các ký ức làng cổ vào lòng những con ngõ nhỏ, nơi người dân bản địa và người tứ xứ cùng chung sống dưới bóng mát của cây đa và những mái tôn xóm trọ.&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
};
