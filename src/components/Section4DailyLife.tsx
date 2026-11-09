import React, { useState } from 'react';
import {
  SunMedium,
  Clock,
  Home,
  Users,
  Sparkles,
  ShoppingBag,
  Coffee,
  CheckCircle2,
  Calendar,
} from 'lucide-react';
import { DAILY_TIMELINE } from '../data/phucDongData.ts';

export const Section4DailyLife: React.FC = () => {
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(0);
  const [activeRoomZone, setActiveRoomZone] = useState<string>('gac-xep');

  const roomZones = [
    {
      id: 'gac-xep',
      title: '1. Căn gác xép gỗ (6m²)',
      desc: 'Nơi ngủ của cả gia đình hoặc chỗ nghỉ ngơi của 2-3 bạn trẻ cùng phòng. Trần nhà lợp xốp chống nóng và chiếc chiếu cói đơn sơ.',
      detail: 'Mùa hè nhiệt độ có thể lên đến 38°C; người thuê thường phải lắp thêm quạt treo tường hoặc tấm bạt phản quang.',
    },
    {
      id: 'goc-bep',
      title: '2. Góc bếp từ mini (2m²)',
      desc: 'Chiếc bếp điện từ đơn, một chiếc nồi cơm điện mini, vài lọ gia vị và chai nước mắm quê hương.',
      detail: 'Nơi khởi nguồn những món ăn quê dân dã: Cá kho riềng, rau muống luộc dầm sấu, canh cua đồng chia ngọt sẻ bùi.',
    },
    {
      id: 'goc-hoc',
      title: '3. Bàn học gấp & Giá sách con nhỏ',
      desc: 'Chiếc bàn gỗ ép có thể gấp gọn lại mỗi tối để lấy lối đi, nơi những đứa trẻ công nhân nắn nót từng nét chữ.',
      detail: 'Nhiều gia đình tự hào treo những tấm giấy khen của con em đạt học sinh giỏi trên bức tường vôi trắng giản dị.',
    },
    {
      id: 'hanh-lang',
      title: '4. Hành lang & Dây phơi đồ chung',
      desc: 'Không gian công cộng của dãy trọ, nơi giao lưu tin tức buổi chiều tối và tình đồng hương thắt chặt.',
      detail: 'Ai đi làm về sớm thì rút hộ quần áo khi trời đổ mưa dông; trẻ con trong dãy trọ cùng chơi đuổi bắt ở đây.',
    },
  ];

  return (
    <section id="section-dailylife" className="py-16 border-b border-[#e7ded1] bg-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-3 border border-amber-200">
            <SunMedium className="w-3.5 h-3.5 text-amber-700" />
            Chuyên mục 4
          </div>
          <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Đời Sống, Sinh Hoạt & Phong Tục
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Nhịp sống ở Phúc Đồng không ồn ã như phố cổ, cũng không biệt lập như các khu đô thị khép kín. Đó là sự nhịp nhàng đan xen giữa tiếng chuông chùa, tiếng chổi tre buổi sớm và tiếng còi ca tan tầm của các nhà máy công nghiệp.
          </p>
        </div>

        {/* 1. Interactive 24-Hour Cycle */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ebdcca] shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-100">
            <div>
              <h3 className="font-serif-title text-xl font-bold text-neutral-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-700" />
                24 Giờ Tại Phúc Đồng: Hai Góc Nhìn Song Hành
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Chọn từng khung giờ để xem cách cư dân bản địa và người di cư cùng trải qua một ngày
              </p>
            </div>
          </div>

          {/* Time Picker Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
            {DAILY_TIMELINE.map((item, idx) => {
              const isSelected = selectedTimelineIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedTimelineIndex(idx)}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    isSelected
                      ? 'bg-amber-900 text-white border-amber-950 shadow-md ring-2 ring-amber-700/30'
                      : 'bg-[#faf7f2] text-neutral-700 border-neutral-200 hover:border-amber-400'
                  }`}
                >
                  <div className={`text-[11px] font-bold ${isSelected ? 'text-amber-200' : 'text-amber-800'}`}>
                    {item.time}
                  </div>
                  <div className="text-xs font-semibold mt-1 truncate">{item.title}</div>
                </button>
              );
            })}
          </div>

          {/* Comparative Detail for Selected Hour */}
          {DAILY_TIMELINE[selectedTimelineIndex] && (
            <div className="bg-[#faf7f2] rounded-2xl p-6 border border-[#ebdcca] space-y-5 animate-in fade-in duration-200">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="font-serif-title text-xl font-bold text-neutral-900">
                  {DAILY_TIMELINE[selectedTimelineIndex].title} ({DAILY_TIMELINE[selectedTimelineIndex].time})
                </h4>
                <div className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold">
                  Không gian chia sẻ: {DAILY_TIMELINE[selectedTimelineIndex].sharedSpace}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {/* Indigenous perspective */}
                <div className="p-5 rounded-xl bg-white border border-[#ebdcca] space-y-2">
                  <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-amber-700" />
                    Góc nhìn Cư dân Bản địa:
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {DAILY_TIMELINE[selectedTimelineIndex].indigenousPerspective}
                  </p>
                </div>

                {/* Migrant perspective */}
                <div className="p-5 rounded-xl bg-white border border-[#ebdcca] space-y-2">
                  <div className="text-xs font-bold text-indigo-900 flex items-center gap-1.5 uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-indigo-600" />
                    Góc nhìn Người Di cư:
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {DAILY_TIMELINE[selectedTimelineIndex].migrantPerspective}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 2. Giải phẫu không gian xóm trọ 18m² (Anatomy of Boarding Room) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ebdcca] shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-900 mb-2">
              <Home className="w-3.5 h-3.5 text-indigo-700" />
              Giải phẫu vi không gian
            </div>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-neutral-900">
              Cấu Trúc Không Gian Một Căn Phòng Trọ 18m²
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Trong diện tích chỉ bằng một phòng ngủ nhỏ, người lao động di cư đã tổ chức cuộc sống gia đình một cách khéo léo và giàu tình cảm.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Visual Floorplan Blueprint Representation */}
            <div className="lg:col-span-7 bg-[#f6f2ea] rounded-2xl p-6 border-2 border-dashed border-[#d5c3af] relative">
              <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-3">
                Sơ đồ bố trí mặt bằng căn hộ trọ (Mô phỏng 4 x 4.5m)
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                {roomZones.map((zone) => {
                  const isActive = activeRoomZone === zone.id;
                  return (
                    <button
                      key={zone.id}
                      onClick={() => setActiveRoomZone(zone.id)}
                      className={`p-4 rounded-xl border text-left transition-all ${
                        isActive
                          ? 'bg-amber-900 text-white border-amber-950 shadow-md ring-2 ring-amber-500/50'
                          : 'bg-white text-neutral-800 border-neutral-300 hover:border-amber-400'
                      }`}
                    >
                      <div className="font-serif-title text-xs sm:text-sm font-bold truncate">
                        {zone.title}
                      </div>
                      <p
                        className={`text-[11px] mt-1 line-clamp-2 ${
                          isActive ? 'text-amber-200' : 'text-neutral-500'
                        }`}
                      >
                        {zone.desc}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 p-3 bg-white/80 rounded-xl border border-neutral-200 text-[11px] text-neutral-600 flex items-center justify-between">
                <span>Cửa ra vào &rarr; Ngõ chung 2m</span>
                <span className="font-mono text-neutral-400">Diện tích: 18.0 m²</span>
              </div>
            </div>

            {/* Selected Zone Deep Dive */}
            <div className="lg:col-span-5 space-y-4">
              {roomZones.find((z) => z.id === activeRoomZone) && (
                <div className="bg-[#faf7f2] p-6 rounded-2xl border border-[#ebdcca] space-y-3">
                  <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                    Khu vực chức năng
                  </span>
                  <h4 className="font-serif-title text-xl font-bold text-neutral-900">
                    {roomZones.find((z) => z.id === activeRoomZone)?.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                    {roomZones.find((z) => z.id === activeRoomZone)?.desc}
                  </p>
                  <div className="p-3 bg-white rounded-xl border border-[#ebdcca] text-xs text-neutral-600 italic">
                    <strong>Đặc trưng đời sống:</strong> {roomZones.find((z) => z.id === activeRoomZone)?.detail}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3. Phong tục ngày Tết & Hội tụ văn hóa */}
        <div className="bg-gradient-to-r from-amber-950 to-stone-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-800 text-amber-200">
              <Calendar className="w-3.5 h-3.5" />
              Phong tục & Lễ hội
            </div>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-amber-50">
              Tết Xóm Trọ & Nỗi Niềm Người Đi Xa
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              Mỗi dịp cận Tết, Phúc Đồng lại trải qua hai cung bậc cảm xúc đối lập: Không khí vội vã của những chuyến xe đò chở công nhân về quê sum họp gia đình, và sự ấm áp của bữa cơm Tất niên xóm trọ giữa những người ở lại trực ca xuyên Tết cùng chủ nhà.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-1">
                <div className="text-amber-300 font-bold text-sm">Chuyến xe đò ngày 28 Tết</div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Những thùng các-tông dán kín băng dính đựng bánh mứt thủ đô, quần áo mới cho con cái, gói trọn mồ hôi của cả một năm lao động vất vả nơi đất khách.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15 space-y-1">
                <div className="text-amber-300 font-bold text-sm">Mâm cơm Tất niên tình làng</div>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  Nhiều chủ nhà bản địa nấu mâm cơm cúng mời các bạn công nhân ở lại ăn bữa cơm giao thừa, tặng cặp bánh chưng xanh để người xa quê không cảm thấy cô quạnh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
