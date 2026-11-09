import React, { useState } from 'react';
import {
  HeartHandshake,
  Utensils,
  Languages,
  Smile,
  Users2,
  Check,
  Vote,
  Sparkles,
} from 'lucide-react';
import { CULTURAL_EXCHANGES } from '../data/phucDongData.ts';

export const Section5Integration: React.FC = () => {
  const [selectedExchangeIndex, setSelectedExchangeIndex] = useState(0);
  const [surveyVoted, setSurveyVoted] = useState<number | null>(null);
  const [surveyStats, setSurveyStats] = useState([42, 68, 51, 35]);

  const surveyOptions = [
    'Sự cởi mở, thấu hiểu của các chủ nhà trọ bản địa',
    'Mâm cơm chung, ẩm thực chia sẻ và sự tương trợ đời thường',
    'Trường học và sân chơi chung cho con em hai cộng đồng',
    'Sự tham gia vào các hoạt động lễ hội và tổ dân phố',
  ];

  const handleVote = (idx: number) => {
    if (surveyVoted !== null) return;
    const newStats = [...surveyStats];
    newStats[idx] += 1;
    setSurveyStats(newStats);
    setSurveyVoted(idx);
  };

  const totalVotes = surveyStats.reduce((a, b) => a + b, 0);

  return (
    <section id="section-integration" className="py-16 border-b border-[#e7ded1] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-3 border border-amber-200">
            <HeartHandshake className="w-3.5 h-3.5 text-amber-700" />
            Chuyên mục 5
          </div>
          <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Sự Giao Lưu & Hòa Nhập Văn Hóa
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Hòa nhập không phải là sự đồng hóa, mà là quá trình tiếp biến văn hóa hai chiều. Tại Phúc Đồng, văn hóa gốc Tràng An ven sông dung nạp sức sống dẻo dai từ khắp các miền quê, tạo nên một cộng đồng đô thị bao dung, ấm áp nghĩa tình.
          </p>
        </div>

        {/* 4 Cultural Exchange Dimensions */}
        <div className="bg-[#fcfaf7] border border-[#ebdcca] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ebdcca]">
            <h3 className="font-serif-title text-xl font-bold text-neutral-900">
              Bốn Chiều Kích Giao Thoa Nổi Bật
            </h3>
            <p className="text-xs text-neutral-500">
              Nhấp vào từng chiều kích để xem biểu hiện và câu chuyện thực tế
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {CULTURAL_EXCHANGES.map((item, idx) => {
              const isSelected = selectedExchangeIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedExchangeIndex(idx)}
                  className={`p-3.5 rounded-xl text-left border transition-all ${
                    isSelected
                      ? 'bg-amber-900 text-white border-amber-950 shadow-md ring-2 ring-amber-700/30'
                      : 'bg-white text-neutral-800 border-neutral-200 hover:border-amber-300 hover:bg-amber-50/40'
                  }`}
                >
                  <div className={`text-[11px] font-bold ${isSelected ? 'text-amber-200' : 'text-amber-800'}`}>
                    {item.domain}
                  </div>
                  <div className="text-xs font-semibold mt-1 truncate">{item.title}</div>
                </button>
              );
            })}
          </div>

          {/* Active Cultural Exchange Details */}
          {CULTURAL_EXCHANGES[selectedExchangeIndex] && (
            <div className="bg-white rounded-2xl p-6 border border-[#ebdcca] shadow-xs space-y-5 animate-in fade-in duration-200">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Lĩnh vực: {CULTURAL_EXCHANGES[selectedExchangeIndex].domain}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  <Smile className="w-3.5 h-3.5" />
                  Mức độ gắn kết: {CULTURAL_EXCHANGES[selectedExchangeIndex].impactScore}%
                </div>
              </div>

              <h4 className="font-serif-title text-xl sm:text-2xl font-bold text-neutral-900">
                {CULTURAL_EXCHANGES[selectedExchangeIndex].title}
              </h4>

              <div className="grid md:grid-cols-2 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-[#faf7f2] border border-[#ebdcca] space-y-1.5">
                  <div className="font-bold text-neutral-900">Nguồn gốc truyền thống:</div>
                  <p className="text-neutral-600 leading-relaxed">
                    {CULTURAL_EXCHANGES[selectedExchangeIndex].originDetails}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#faf7f2] border border-[#ebdcca] space-y-1.5">
                  <div className="font-bold text-neutral-900">Quá trình thích ứng & tiếp biến:</div>
                  <p className="text-neutral-600 leading-relaxed">
                    {CULTURAL_EXCHANGES[selectedExchangeIndex].adaptation}
                  </p>
                </div>
              </div>

              {/* Anecdote from fieldwork */}
              <div className="p-4 rounded-xl bg-amber-50/70 border-l-4 border-amber-800 text-xs sm:text-sm text-neutral-800 italic leading-relaxed">
                <strong className="font-semibold text-amber-950 not-italic block mb-1">
                  Ký sự điền dã thực tế:
                </strong>
                &ldquo;{CULTURAL_EXCHANGES[selectedExchangeIndex].anecdote}&rdquo;
              </div>
            </div>
          )}
        </div>

        {/* Feature: The Second Generation (Trẻ em thế hệ thứ hai) */}
        <div className="bg-[#f7f2eb] rounded-3xl p-6 sm:p-8 border border-[#ebdcca] grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-900 text-amber-100 flex items-center justify-center font-serif-title text-xl font-bold shadow-xs">
              <Users2 className="w-6 h-6" />
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-neutral-900">
              Thế Hệ Thứ Hai: &quot;Gốc Quê, Hồn Phố&quot;
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Những đứa trẻ sinh ra hoặc lớn lên tại Phúc Đồng từ các gia đình di cư mang một căn tính văn hóa đặc biệt.
            </p>
          </div>

          <div className="md:col-span-8 space-y-3 bg-white p-6 rounded-2xl border border-[#ebdcca] shadow-xs">
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              Các em nói tiếng Hà Nội chuẩn xác khi đến trường học, yêu mến các thầy cô bản địa, nhưng khi về đến nhà trọ vẫn lắng nghe câu hò, điệu ví của quê cha đất tổ và thưởng thức món cá kho, canh tương truyền thống.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 bg-[#faf7f2] rounded-xl text-xs text-neutral-700">
                <strong className="text-amber-900 block mb-0.5">Cầu nối xóa nhòa định kiến:</strong>
                Tình bạn ngây thơ giữa con em người bản địa và con em công nhân tại trường tiểu học Phúc Đồng là chất keo tự nhiên nhất gắn kết các bậc phụ huynh lại gần nhau.
              </div>
              <div className="p-3 bg-[#faf7f2] rounded-xl text-xs text-neutral-700">
                <strong className="text-amber-900 block mb-0.5">Khát vọng vươn lên:</strong>
                Chứng kiến sự nhọc nhằn của cha mẹ nơi xóm trọ, các em nuôi dưỡng ý chí học tập mãnh liệt để trở thành những công dân tri thức mới của thủ đô.
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Reader Community Survey */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#ebdcca] shadow-xs space-y-6">
          <div className="flex items-center gap-2">
            <Vote className="w-5 h-5 text-amber-700" />
            <h3 className="font-serif-title text-xl font-bold text-neutral-900">
              Khảo Sát Tương Tác: Yếu Tố Hòa Nhập Quan Trọng Nhất?
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-neutral-600">
            Theo góc nhìn của bạn, điều gì giúp cộng đồng di cư và cư dân bản địa tại Phúc Đồng thắt chặt tình đoàn kết nhất?
          </p>

          <div className="space-y-2.5">
            {surveyOptions.map((opt, idx) => {
              const votes = surveyStats[idx];
              const pct = Math.round((votes / totalVotes) * 100);
              const isSelected = surveyVoted === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleVote(idx)}
                  disabled={surveyVoted !== null}
                  className={`w-full text-left p-3.5 rounded-xl border transition-all relative overflow-hidden ${
                    isSelected
                      ? 'border-amber-700 ring-2 ring-amber-600/30'
                      : 'border-neutral-200 hover:border-amber-300'
                  }`}
                >
                  {/* Progress bar background */}
                  {surveyVoted !== null && (
                    <div
                      className="absolute inset-y-0 left-0 bg-amber-100/70 -z-1 transition-all duration-500"
                      style={{ width: `${pct}%` }}
                    />
                  )}

                  <div className="relative z-10 flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                          isSelected ? 'bg-amber-800 border-amber-900 text-white' : 'border-neutral-400'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                      <span className="font-medium text-neutral-800">{opt}</span>
                    </div>

                    {surveyVoted !== null && (
                      <span className="font-bold text-amber-900 text-xs ml-2">{pct}% ({votes})</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {surveyVoted !== null && (
            <p className="text-xs text-neutral-500 italic text-center">
              Cảm ơn bạn đã tham gia đóng góp góc nhìn cho chuyên đề nghiên cứu cộng đồng!
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
