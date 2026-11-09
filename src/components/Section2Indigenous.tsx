import React, { useState } from 'react';
import {
  Landmark,
  Quote,
  Sparkles,
  Users,
  Utensils,
  BookMarked,
  ScrollText,
} from 'lucide-react';
import { INDIGENOUS_ELDERS } from '../data/phucDongData.ts';

export const Section2Indigenous: React.FC = () => {
  const [selectedElderIndex, setSelectedElderIndex] = useState(0);

  const culturalPillars = [
    {
      title: 'Đình & Chùa Mai Phúc – Trung tâm tín ngưỡng',
      icon: Landmark,
      desc: 'Cụm di tích lịch sử quốc gia thờ danh tướng thời Hùng Vương cùng các bậc tiền hiền khai khẩn. Nơi lưu giữ nhiều văn bia Hán Nôm cổ, sắc phong triều Nguyễn và chiếc chuông đồng đúc thế kỷ XVIII.',
      highlights: ['Hội làng rằm tháng Hai âm lịch', 'Tế lễ Thành hoàng làng', 'Rước kiệu và rước nước từ sông Đuống'],
    },
    {
      title: 'Gia phong các dòng họ truyền đời',
      icon: ScrollText,
      desc: 'Các dòng họ lớn như họ Đỗ, họ Nguyễn, họ Vũ, họ Trần đã có mặt tại Phúc Đồng từ 12 đến 16 đời. Hương ước và gia phả dòng tộc đề cao đức tính hiếu học, sự liêm chính và tình tương trợ nội tộc.',
      highlights: ['Nhà thờ họ và việc giỗ họ hàng năm', 'Quỹ khuyến học dòng họ bản xứ', 'Tôn ti trật tự & phép tắc ứng xử'],
    },
    {
      title: 'Ẩm thực dân gian & Nếp ăn thanh cảnh',
      icon: Utensils,
      desc: 'Ẩm thực người làng Phúc Đồng mang đặc trưng ẩm thực ven đô Thăng Long: Xôi nén mo cau dẻo thơm, bánh đúc lạc chấm tương bần, chè sen long nhãn, canh cá rô đồng nấu rau cải cúc.',
      highlights: ['Bánh đúc truyền thống làng Mai Phúc', 'Chè tươi hãm đặc uống sân đình', 'Cỗ truyền thống xôi gấc - gà giò'],
    },
    {
      title: 'Văn hóa ứng xử: &quot;Tình làng nghĩa xóm&quot;',
      icon: Users,
      desc: 'Cốt cách mộc mạc, coi trọng chữ tín và tình cảm xóm ngõ. Dù nhịp sống đô thị hóa ùa vào, thói quen chào hỏi, san sẻ nắm rau thơm hay trông nom nhà cửa giúp nhau vẫn được giữ gìn như nếp nhà.',
      highlights: ['Quán trà chén đàm đạo đầu ngõ', 'Tập quán giúp nhau khi hiếu hỉ', 'Sự bao dung với người tứ xứ'],
    },
  ];

  return (
    <section id="section-indigenous" className="py-16 border-b border-[#e7ded1] bg-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-3 border border-amber-200">
            <Landmark className="w-3.5 h-3.5 text-amber-700" />
            Chuyên mục 2
          </div>
          <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Văn Hóa Cư Dân Bản Địa
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Người Phúc Đồng mang trong mình chiều sâu văn hóa châu thổ sông Hồng: Tự hào về gốc gác ngàn năm, nếp đình chùa cổ kính, lễ hội truyền thống linh thiêng và cốt cách thơm thảo của người dân đất Kinh Bắc xưa.
          </p>
        </div>

        {/* 4 Cultural Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {culturalPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#ebdcca] shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif-title text-lg font-bold text-neutral-900 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-2.5 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-100 space-y-1.5">
                  {pillar.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-[11px] text-amber-900 font-medium flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-amber-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Cultural Ritual: Mai Phuc Village Festival */}
        <div className="bg-gradient-to-br from-amber-900 via-amber-950 to-stone-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-700/60 text-amber-200 border border-amber-600/50">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Điểm nhấn Lễ hội dân gian
            </div>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold tracking-tight text-amber-50">
              Hội Làng Mai Phúc: Nhịp Cầu Tâm Linh & Gắn Kết Cộng Đồng
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-light">
              Diễn ra từ ngày 10 đến ngày 15 tháng Hai âm lịch hàng năm tại Đình và Chùa Mai Phúc. Đây không chỉ là dịp tưởng nhớ công đức tiền nhân mà còn là không gian hội tụ sinh động nhất của đời sống cộng đồng.
            </p>

            <div className="grid sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                <div className="text-amber-300 font-bold text-xs">Lễ Rước Nước</div>
                <p className="text-[11px] text-neutral-300 mt-1">
                  Đoàn rước kiệu ra giếng cổ múc nước thiêng về làm lễ mộc dục, cầu cho mưa thuận gió hòa, mùa màng tươi tốt.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                <div className="text-amber-300 font-bold text-xs">Tế Lễ Cổ Truyền</div>
                <p className="text-[11px] text-neutral-300 mt-1">
                  Các bô lão trong trang phục áo the khăn xếp thực hiện nghi thức tế Thành hoàng theo đúng cổ lệ truyền đời.
                </p>
              </div>
              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/15">
                <div className="text-amber-300 font-bold text-xs">Trò Chơi Dân Gian</div>
                <p className="text-[11px] text-neutral-300 mt-1">
                  Cờ tướng người, chọi gà, vật truyền thống, nấu cơm thi và hát quan họ giao duyên trên thuyền rồng.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Oral History of Elders (Ký ức các bô lão làng) */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ebdcca] shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-800 uppercase tracking-wider">
                <BookMarked className="w-4 h-4 text-amber-700" />
                Lưu trữ lịch sử truyền miệng (Oral History)
              </div>
              <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                Ký Ức Các Bậc Cao Niên Bản Địa
              </h3>
            </div>

            {/* Elder selector buttons */}
            <div className="flex flex-wrap gap-2">
              {INDIGENOUS_ELDERS.map((elder, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedElderIndex(idx)}
                  className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all ${
                    selectedElderIndex === idx
                      ? 'bg-amber-900 text-white shadow-xs'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {elder.name} ({elder.age} tuổi)
                </button>
              ))}
            </div>
          </div>

          {/* Active Elder Card */}
          {INDIGENOUS_ELDERS[selectedElderIndex] && (
            <div className="grid md:grid-cols-12 gap-6 items-center bg-[#faf7f2] rounded-2xl p-6 border border-[#ebdcca]">
              <div className="md:col-span-4 space-y-3">
                <div className="w-16 h-16 rounded-2xl bg-amber-900 text-amber-100 flex items-center justify-center font-serif-title text-2xl font-bold shadow-md">
                  {INDIGENOUS_ELDERS[selectedElderIndex].name.charAt(3) || 'C'}
                </div>
                <div>
                  <h4 className="font-serif-title text-xl font-bold text-neutral-900">
                    {INDIGENOUS_ELDERS[selectedElderIndex].name}
                  </h4>
                  <p className="text-xs font-semibold text-amber-800">
                    {INDIGENOUS_ELDERS[selectedElderIndex].age} tuổi • {INDIGENOUS_ELDERS[selectedElderIndex].role}
                  </p>
                  <p className="text-[11px] text-neutral-500 mt-1">
                    Thời kỳ chứng kiến: {INDIGENOUS_ELDERS[selectedElderIndex].memoryPeriod}
                  </p>
                </div>
              </div>

              <div className="md:col-span-8 space-y-3 border-t md:border-t-0 md:border-l border-[#e0d0bf] pt-4 md:pt-0 md:pl-6">
                <div className="relative">
                  <Quote className="w-8 h-8 text-amber-300 absolute -top-3 -left-3 -z-1 opacity-60" />
                  <p className="text-sm sm:text-base text-neutral-800 italic font-serif-title leading-relaxed">
                    &ldquo;{INDIGENOUS_ELDERS[selectedElderIndex].quote}&rdquo;
                  </p>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {INDIGENOUS_ELDERS[selectedElderIndex].story}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
