import React, { useState } from 'react';
import {
  Users,
  Search,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Clock,
  Heart,
  AlertCircle,
  Briefcase,
  Home,
  Package,
} from 'lucide-react';
import { MIGRANT_PORTRAITS } from '../data/phucDongData.ts';
import { MigrantPortrait } from '../types.ts';

export const Section3Migrants: React.FC = () => {
  const [selectedPortrait, setSelectedPortrait] = useState<MigrantPortrait>(MIGRANT_PORTRAITS[0]);
  const [activeTab, setActiveTab] = useState<'tất cả' | 'công nhân' | 'dịch vụ' | 'sinh viên'>('tất cả');
  const [playingAudioId, setPlayingAudioId] = useState<string | null>(null);

  const filteredPortraits = MIGRANT_PORTRAITS.filter((p) => {
    if (activeTab === 'công nhân') return p.occupation.toLowerCase().includes('công nhân') || p.occupation.toLowerCase().includes('thợ');
    if (activeTab === 'dịch vụ') return p.occupation.toLowerCase().includes('giao hàng') || p.occupation.toLowerCase().includes('xôi') || p.occupation.toLowerCase().includes('bảo vệ');
    if (activeTab === 'sinh viên') return p.occupation.toLowerCase().includes('sinh viên');
    return true;
  });

  const handleTogglePlay = (id: string) => {
    if (playingAudioId === id) {
      setPlayingAudioId(null);
    } else {
      setPlayingAudioId(id);
    }
  };

  const artifacts = [
    {
      name: 'Chiếc quạt tai voi / quạt hơi nước cũ',
      desc: 'Cứu cánh không thể thiếu trong những căn phòng trọ mái tôn 16m2 mùa hè Hà Nội.',
      icon: '🌬️',
    },
    {
      name: 'Cặp lồng cơm giữ nhiệt 3 tầng',
      desc: 'Bữa cơm trưa nấu vội từ 5h sáng mang vào nhà xưởng may mặc hoặc công trường.',
      icon: '🍱',
    },
    {
      name: 'Chiếc xe Wave cà tàng',
      desc: 'Phương tiện mưu sinh của shipper, thợ xây, lăn lộn qua từng ngõ ngách Phúc Đồng.',
      icon: '🛵',
    },
    {
      name: 'Cuốn sổ tiết kiệm & gửi tiền về quê',
      desc: 'Mỗi tháng chắt chiu từng đồng gửi về nuôi con ăn học và sửa mái ngói dột ở quê nhà.',
      icon: '📒',
    },
  ];

  return (
    <section id="section-migrants" className="py-16 border-b border-[#e7ded1] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-3 border border-amber-200">
            <Users className="w-3.5 h-3.5 text-amber-700" />
            Chuyên mục 3
          </div>
          <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Chân Dung Người Di Cư
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Họ đến từ Thanh Hóa, Nam Định, Nghệ An, Phú Thọ, Thái Bình... mang theo ước mơ thoát nghèo và sức lao động bền bỉ. Những mảnh ghép di cư không chỉ nuôi sống gia đình ở quê mà còn tạo nên nhịp đập kinh tế sôi động cho các xóm trọ Phúc Đồng.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider mr-2">
            Lọc chân dung:
          </span>
          {(['tất cả', 'công nhân', 'dịch vụ', 'sinh viên'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-xs px-3.5 py-1.5 rounded-full font-medium capitalize transition-all ${
                activeTab === tab
                  ? 'bg-amber-900 text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Portraits Grid + Detailed Inspector */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Thumbnails List */}
          <div className="lg:col-span-5 space-y-3">
            {filteredPortraits.map((portrait) => {
              const isSelected = selectedPortrait.id === portrait.id;
              return (
                <div
                  key={portrait.id}
                  onClick={() => setSelectedPortrait(portrait)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#faf6ee] border-amber-800 shadow-sm ring-1 ring-amber-800/40'
                      : 'bg-white border-neutral-200 hover:border-amber-300 hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${portrait.avatarColor} text-white font-serif-title text-lg font-bold flex items-center justify-center shrink-0 shadow-xs`}
                    >
                      {portrait.name.split(' ').pop()?.charAt(0) || 'N'}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="font-serif-title text-base font-bold text-neutral-900 truncate">
                          {portrait.name}
                        </h4>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 shrink-0">
                          {portrait.badge}
                        </span>
                      </div>
                      <div className="text-xs text-neutral-500 mt-0.5 flex flex-wrap items-center gap-2">
                        <span>{portrait.age} tuổi</span>
                        <span>•</span>
                        <span className="text-amber-800 font-medium">{portrait.hometown}</span>
                      </div>
                      <p className="text-xs text-neutral-600 mt-1 line-clamp-1 italic">
                        &ldquo;{portrait.quote}&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Detailed Selected Portrait Dossier */}
          <div className="lg:col-span-7 bg-[#fcfaf7] border border-[#ebdcca] rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-wrap items-start justify-between gap-4 pb-4 border-b border-[#ebdcca]">
              <div className="flex items-center gap-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedPortrait.avatarColor} text-white font-serif-title text-2xl font-bold flex items-center justify-center shadow-md`}
                >
                  {selectedPortrait.name.split(' ').pop()?.charAt(0)}
                </div>
                <div>
                  <h3 className="font-serif-title text-2xl font-bold text-neutral-900">
                    {selectedPortrait.name}
                  </h3>
                  <div className="text-xs text-neutral-600 mt-1 flex flex-wrap gap-2">
                    <span className="font-semibold text-amber-900">{selectedPortrait.occupation}</span>
                    <span>•</span>
                    <span>Quê quán: <strong>{selectedPortrait.hometown}</strong></span>
                    <span>•</span>
                    <span>Đã ở Phúc Đồng: <strong>{selectedPortrait.yearsInPhucDong} năm</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Quote */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border-l-4 border-amber-800 text-amber-950 italic text-sm leading-relaxed font-serif-title">
              &ldquo;{selectedPortrait.quote}&rdquo;
            </div>

            {/* In-depth Narrative Story */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider flex items-center gap-1.5">
                <Home className="w-3.5 h-3.5 text-amber-700" />
                Câu chuyện cuộc đời & Ký ức xóm trọ:
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed bg-white p-4 rounded-xl border border-[#ebdcca]">
                {selectedPortrait.story}
              </p>
            </div>

            {/* Daily Routine & Hopes/Worries */}
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white border border-[#ebdcca] space-y-1">
                <div className="font-bold text-neutral-900 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-700" />
                  Lịch trình một ngày:
                </div>
                <p className="text-neutral-600 leading-relaxed">{selectedPortrait.dailyRoutine}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#ebdcca] space-y-1.5">
                <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-emerald-600" />
                  Ước mơ lớn nhất:
                </div>
                <p className="text-neutral-600 leading-relaxed">{selectedPortrait.biggestHope}</p>
                <div className="font-bold text-rose-800 flex items-center gap-1.5 pt-1 border-t border-neutral-100">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
                  Nỗi lo thường trực:
                </div>
                <p className="text-neutral-600 leading-relaxed">{selectedPortrait.biggestWorry}</p>
              </div>
            </div>

            {/* Simulated Audio Quote Player */}
            {selectedPortrait.audioQuote && (
              <div className="p-4 rounded-2xl bg-amber-900 text-amber-50 space-y-2 shadow-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleTogglePlay(selectedPortrait.id)}
                      className="w-8 h-8 rounded-full bg-amber-100 text-amber-950 flex items-center justify-center hover:scale-105 transition-transform"
                    >
                      {playingAudioId === selectedPortrait.id ? (
                        <Pause className="w-4 h-4 text-amber-900" />
                      ) : (
                        <Play className="w-4 h-4 text-amber-900 ml-0.5" />
                      )}
                    </button>
                    <span className="text-xs font-bold">
                      {playingAudioId === selectedPortrait.id
                        ? 'Đang phát lời bộc bạch...'
                        : 'Nghe trích đoạn phỏng vấn thực địa'}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono opacity-80">
                    {selectedPortrait.audioQuote.duration}
                  </span>
                </div>

                {/* Animated simulated waveform */}
                <div className="flex items-center gap-1 h-5 px-1">
                  {[40, 75, 30, 90, 60, 20, 85, 45, 95, 30, 70, 50, 80, 25, 90, 65, 35, 75, 55, 85].map(
                    (val, wIdx) => (
                      <div
                        key={wIdx}
                        className={`flex-1 rounded-full transition-all duration-300 ${
                          playingAudioId === selectedPortrait.id
                            ? 'bg-amber-300 animate-pulse'
                            : 'bg-amber-700/60'
                        }`}
                        style={{ height: `${val}%` }}
                      />
                    )
                  )}
                </div>

                <p className="text-[11px] text-amber-200/90 italic pt-1 leading-relaxed border-t border-amber-800">
                  &ldquo;{selectedPortrait.audioQuote.transcript}&rdquo;
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Hành trang người di cư (Cultural artifacts showcase) */}
        <div className="bg-[#f7f2eb] rounded-3xl p-6 sm:p-8 border border-[#ebdcca]">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-200 text-amber-900 mb-2">
              <Package className="w-3.5 h-3.5 text-amber-800" />
              Vật chứng đời sống
            </div>
            <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-neutral-900">
              Hành Trang Trong Căn Phòng Trọ 16m²
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1">
              Những kỷ vật bình dị nhưng mang theo cả gánh nặng mưu sinh và niềm hy vọng của người xa xứ.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {artifacts.map((art, idx) => (
              <div
                key={idx}
                className="bg-white p-4 rounded-2xl border border-[#ebdcca] shadow-xs text-center space-y-2 hover:translate-y-[-2px] transition-transform"
              >
                <div className="text-3xl">{art.icon}</div>
                <div className="font-serif-title text-sm font-bold text-neutral-900">{art.name}</div>
                <p className="text-xs text-neutral-600 leading-relaxed">{art.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
