import React, { useState } from 'react';
import {
  AlertTriangle,
  Flame,
  GraduationCap,
  Trees,
  Scroll,
  ShieldCheck,
  CheckCircle2,
  Lightbulb,
} from 'lucide-react';
import { COMMUNITY_CHALLENGES } from '../data/phucDongData.ts';

export const Section6Challenges: React.FC = () => {
  const [selectedChallengeId, setSelectedChallengeId] = useState(COMMUNITY_CHALLENGES[0].id);

  const activeChallenge = COMMUNITY_CHALLENGES.find((c) => c.id === selectedChallengeId) || COMMUNITY_CHALLENGES[0];

  const initiatives = [
    {
      title: 'Tổ liên gia an toàn PCCC & Chuông báo cháy liên động',
      desc: 'Mỗi dãy ngõ lắp đặt bình bọt CO2 và hệ thống chuông báo liên động; tổ chức diễn tập định kỳ vào tối Chủ nhật.',
      icon: Flame,
      tag: 'An toàn phòng cháy',
    },
    {
      title: 'Lớp học yêu thương & Gia sư tình nguyện cuối tuần',
      desc: 'Đoàn thanh niên phối hợp với sinh viên các trường đại học dạy kèm bổ túc kiến thức cho hơn 45 con em công nhân.',
      icon: GraduationCap,
      tag: 'Giáo dục bình đẳng',
    },
    {
      title: 'Vườn xanh góc phố & Sân chơi bỏ túi (Pocket Park)',
      desc: 'Cải tạo các khu đất xen kẹt thành sân chơi an toàn lót thảm cao su và bàn bóng bàn ngoài trời cho thiếu nhi và người già.',
      icon: Trees,
      tag: 'Không gian sống xanh',
    },
    {
      title: 'Tủ sách cộng đồng & Điểm truy cập Internet miễn phí',
      desc: 'Đặt tại nhà văn hóa tổ dân phố, cung cấp sách pháp luật, kỹ năng sống và sách thiếu nhi cho người thuê trọ.',
      icon: Lightbulb,
      tag: 'Nâng cao dân trí',
    },
    {
      title: 'Dự án số hóa di sản & Ký ức Phúc Đồng',
      desc: 'Ghi hình, số hóa văn bia, thần tích Đình Mai Phúc và lưu trữ các câu chuyện truyền miệng của các thế hệ cư dân.',
      icon: Scroll,
      tag: 'Bảo tồn di sản',
    },
  ];

  return (
    <section id="section-challenges" className="py-16 border-b border-[#e7ded1] bg-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-900 mb-3 border border-rose-200">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
            Chuyên mục 6
          </div>
          <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Những Vấn Đề & Thách Thức Cộng Đồng
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Sự phát triển nhanh chóng cũng đặt ra nhiều bài toán hóc búa về quản trị đô thị, hạ tầng phòng chống cháy nổ trong ngõ hẹp, sự công bằng trong tiếp cận dịch vụ công và bảo tồn bản sắc làng quê trước cơn lốc bê tông hóa.
          </p>
        </div>

        {/* 4 Challenges Deep Dive */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Challenge Selector */}
          <div className="lg:col-span-5 space-y-3">
            {COMMUNITY_CHALLENGES.map((ch) => {
              const isSelected = selectedChallengeId === ch.id;
              return (
                <div
                  key={ch.id}
                  onClick={() => setSelectedChallengeId(ch.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-amber-800 shadow-sm ring-1 ring-amber-800/40'
                      : 'bg-white/70 border-neutral-200 hover:border-amber-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                        ch.severity === 'Cao'
                          ? 'bg-rose-100 text-rose-800'
                          : ch.severity === 'Trung bình'
                          ? 'bg-amber-100 text-amber-800'
                          : 'bg-stone-100 text-stone-700'
                      }`}
                    >
                      Mức độ: {ch.severity}
                    </span>
                    <span className="text-[11px] text-neutral-500 truncate">{ch.affectedGroup}</span>
                  </div>
                  <h4 className="font-serif-title text-base font-bold text-neutral-900 mt-2">
                    {ch.title}
                  </h4>
                  <p className="text-xs text-neutral-600 mt-1 line-clamp-2 leading-relaxed">
                    {ch.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Active Challenge Deep Details */}
          <div className="lg:col-span-7 bg-white border border-[#ebdcca] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-neutral-100">
              <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                Đối tượng chịu tác động: {activeChallenge.affectedGroup}
              </span>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800">
                Ưu tiên can thiệp: {activeChallenge.severity}
              </span>
            </div>

            <div>
              <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-neutral-900">
                {activeChallenge.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {activeChallenge.description}
              </p>
            </div>

            {/* Current reality */}
            <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs sm:text-sm text-neutral-800 space-y-1">
              <strong className="text-amber-900 block font-semibold">Thực trạng ghi nhận:</strong>
              <p className="text-neutral-700 leading-relaxed">{activeChallenge.currentReality}</p>
            </div>

            {/* Proposed solutions */}
            <div className="space-y-2">
              <span className="text-xs font-bold text-neutral-900 uppercase tracking-wider block">
                Giải pháp & Hành động kiến nghị:
              </span>
              <div className="space-y-2">
                {activeChallenge.proposedSolutions.map((sol, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#faf7f2] border border-[#ebdcca] text-xs sm:text-sm text-neutral-700 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                    <span>{sol}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case study */}
            <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200 text-xs sm:text-sm text-emerald-950 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <strong>Điển hình thực tế:</strong> {activeChallenge.caseStudy}
              </div>
            </div>
          </div>
        </div>

        {/* 5 Grassroots Community Initiatives */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ebdcca] shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 mb-2">
              <Lightbulb className="w-3.5 h-3.5 text-emerald-700" />
              Sáng kiến từ cơ sở
            </div>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-neutral-900">
              5 Sáng Kiến Cộng Đồng Vì Một Phúc Đồng Nhân Văn
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Các mô hình hành động thực tiễn do chính cư dân bản địa, người di cư và chính quyền cơ sở cùng bắt tay thực hiện.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {initiatives.map((init, idx) => {
              const Icon = init.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#faf7f2] border border-[#ebdcca] hover:bg-white hover:shadow-xs transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                      {init.tag}
                    </span>
                    <h4 className="font-serif-title text-base font-bold text-neutral-900 leading-snug">
                      {init.title}
                    </h4>
                    <p className="text-xs text-neutral-600 leading-relaxed">
                      {init.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
