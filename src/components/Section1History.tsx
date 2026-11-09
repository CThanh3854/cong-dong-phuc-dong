import React, { useState } from 'react';
import {
  History,
  Calendar,
  MapPin,
  ChevronRight,
  ArrowRightLeft,
  Compass,
  CheckCircle2,
  Camera,
  Maximize2,
  X,
} from 'lucide-react';
import { HISTORICAL_TIMELINE, MAP_POINTS, LANDMARK_PHOTOS } from '../data/phucDongData.ts';
import { MapPoint, LandmarkPhoto } from '../types.ts';

export const Section1History: React.FC = () => {
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState(3); // Default to 2003 landmark
  const [selectedMapPoint, setSelectedMapPoint] = useState<MapPoint>(MAP_POINTS[0]);
  const [timelineFilter, setTimelineFilter] = useState<string>('Tất cả');
  const [selectedPhotoModal, setSelectedPhotoModal] = useState<LandmarkPhoto | null>(null);

  const filteredTimeline = HISTORICAL_TIMELINE.filter((item) => {
    if (timelineFilter === 'Tất cả') return true;
    return item.category === timelineFilter;
  });

  const categories = ['Tất cả', 'Lịch sử', 'Hành chính', 'Đô thị hóa', 'Xã hội'];

  return (
    <section id="section-history" className="py-16 border-b border-[#e7ded1] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-3 border border-amber-200">
            <History className="w-3.5 h-3.5 text-amber-700" />
            Chuyên mục 1
          </div>
          <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Lịch Sử Hình Thành & Phát Triển Địa Bàn
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Từ vùng đất phù sa màu mỡ thuộc tổng Cự Linh, huyện Gia Lâm cổ kính, Phúc Đồng đã trải qua cuộc chuyển mình sâu sắc qua các thời kỳ: Từ làng xã nông nghiệp thuần phác thành một trong những phường có tốc độ đô thị hóa và hội tụ dân cư nhanh nhất của quận Long Biên.
          </p>
        </div>

        {/* 1. Interactive Timeline */}
        <div className="bg-[#fcfaf7] border border-[#ebdcca] rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#ebdcca]">
            <div>
              <h3 className="font-serif-title text-xl font-bold text-neutral-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-700" />
                Biên Niên Sử Phát Triển Phúc Đồng
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Nhấp vào từng mốc thời gian để xem sự kiện và phân tích tác động
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setTimelineFilter(cat)}
                  className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-colors ${
                    timelineFilter === cat
                      ? 'bg-amber-900 text-white'
                      : 'bg-white text-neutral-600 hover:bg-amber-100/70 border border-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline Navigation Dots / Bar */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-4 scrollbar-thin">
            {filteredTimeline.map((item, idx) => {
              const isSelected = selectedTimelineIndex === idx;
              return (
                <button
                  key={item.year}
                  onClick={() => setSelectedTimelineIndex(idx)}
                  className={`shrink-0 flex flex-col items-start px-4 py-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-amber-900 text-white border-amber-950 shadow-md ring-2 ring-amber-700/30'
                      : 'bg-white text-neutral-700 border-neutral-200 hover:border-amber-400 hover:bg-amber-50/50'
                  }`}
                >
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider ${
                      isSelected ? 'text-amber-200' : 'text-amber-800'
                    }`}
                  >
                    {item.year}
                  </span>
                  <span className="text-xs font-semibold mt-0.5 line-clamp-1 max-w-[150px]">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Timeline Details Card */}
          {filteredTimeline[selectedTimelineIndex] && (
            <div className="mt-6 bg-white border border-[#ebdcca] rounded-2xl p-6 sm:p-7 shadow-xs space-y-5 animate-in fade-in duration-200">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-200">
                  Thời kỳ: {filteredTimeline[selectedTimelineIndex].year}
                </span>
                <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-md">
                  Phân loại: {filteredTimeline[selectedTimelineIndex].category}
                </span>
              </div>

              <div>
                <h4 className="font-serif-title text-xl sm:text-2xl font-bold text-neutral-900">
                  {filteredTimeline[selectedTimelineIndex].title}
                </h4>
                <p className="mt-2 text-sm sm:text-base text-neutral-700 leading-relaxed">
                  {filteredTimeline[selectedTimelineIndex].description}
                </p>
              </div>

              {/* Specific Historical Facts */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                  Dấu ấn thực tế trên địa bàn:
                </p>
                <div className="grid sm:grid-cols-3 gap-3">
                  {filteredTimeline[selectedTimelineIndex].details.map((detail, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3.5 rounded-xl bg-[#faf7f2] border border-[#ebdcca] text-xs text-neutral-700 leading-relaxed flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 flex items-start gap-2">
                <span className="font-bold text-amber-800 shrink-0">Ý nghĩa lịch sử:</span>
                <span className="italic">{filteredTimeline[selectedTimelineIndex].significance}</span>
              </div>
            </div>
          )}
        </div>

        {/* 2. Spatial Cultural Coordinates & Interactive Map Representation */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900">
              <Compass className="w-3.5 h-3.5 text-emerald-700" />
              Tọa độ văn hóa không gian
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-neutral-900">
              Bản Đồ Không Gian Văn Hóa Phúc Đồng
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Cấu trúc không gian của Phúc Đồng là một lát cắt sống động của hiện tượng &quot;Làng trong phố&quot;. Nhấp vào từng điểm để khám phá các tọa độ lịch sử và đời sống thường nhật.
            </p>

            <div className="space-y-2 pt-2">
              {MAP_POINTS.map((pt) => {
                const isActive = selectedMapPoint.id === pt.id;
                return (
                  <button
                    key={pt.id}
                    onClick={() => setSelectedMapPoint(pt)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-amber-900 text-white border-amber-950 shadow-xs'
                        : 'bg-white text-neutral-800 border-neutral-200 hover:border-amber-300 hover:bg-amber-50/40'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          isActive ? 'bg-amber-800 text-white' : 'bg-amber-100 text-amber-800'
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-semibold">{pt.name}</div>
                        <div
                          className={`text-[11px] ${
                            isActive ? 'text-amber-200' : 'text-neutral-500'
                          }`}
                        >
                          {pt.type} • {pt.location}
                        </div>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-amber-200' : 'text-neutral-400'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Visual Map Card */}
          <div className="lg:col-span-7 bg-[#fbf8f3] border border-[#ebdcca] rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="relative aspect-[16/10] bg-gradient-to-br from-amber-50 to-[#ede5d8] rounded-2xl border border-[#dbcabb] overflow-hidden p-6 flex flex-col justify-between">
              {/* Decorative Map Grid overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#8d5b2d_1px,transparent_1px)] [background-size:20px_20px]" />

              {/* Road vectors simulation */}
              <div className="absolute top-1/2 left-0 right-0 h-3 bg-neutral-300/60 -rotate-6 transform" />
              <div className="absolute top-0 bottom-0 left-1/3 w-3 bg-neutral-300/60 rotate-12 transform" />
              <div className="absolute top-1/4 right-8 px-2 py-1 bg-amber-900/10 rounded text-[9px] font-bold text-neutral-500 tracking-wider">
                Đại lộ Chu Huy Mân &rarr;
              </div>
              <div className="absolute bottom-4 left-6 px-2 py-1 bg-amber-900/10 rounded text-[9px] font-bold text-neutral-500 tracking-wider">
                &larr; QL5 (Nguyễn Văn Linh)
              </div>

              {/* Pin representations on visual canvas */}
              <div className="relative z-10 flex flex-wrap gap-2">
                <span className="text-[10px] font-bold px-2 py-1 rounded bg-amber-900 text-amber-50 shadow-xs">
                  SƠ ĐỒ TRỰC QUAN KHÔNG GIAN PHƯỜNG PHÚC ĐỒNG
                </span>
              </div>

              {/* Interactive pin markers */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 gap-2 my-auto">
                {MAP_POINTS.map((pt) => {
                  const isCurrent = selectedMapPoint.id === pt.id;
                  return (
                    <button
                      key={pt.id}
                      onClick={() => setSelectedMapPoint(pt)}
                      className={`p-2.5 rounded-xl text-left border transition-all text-xs flex flex-col gap-1 ${
                        isCurrent
                          ? 'bg-amber-900 text-white border-amber-950 ring-2 ring-amber-500/50 scale-105'
                          : 'bg-white/90 text-neutral-800 border-neutral-300 hover:bg-white shadow-2xs'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold truncate">
                        <MapPin className={`w-3 h-3 ${isCurrent ? 'text-amber-300' : 'text-amber-700'}`} />
                        <span className="truncate">{pt.name}</span>
                      </div>
                      <span className={`text-[10px] ${isCurrent ? 'text-amber-200' : 'text-neutral-500'}`}>
                        {pt.type}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="relative z-10 text-[11px] text-neutral-500 italic bg-white/70 backdrop-blur-xs px-3 py-1.5 rounded-lg border border-neutral-200">
                Nhấp vào từng điểm mốc trên bản đồ để xem chi tiết bối cảnh lịch sử và đời sống cộng đồng.
              </div>
            </div>

            {/* Selected Point Details */}
            <div className="mt-6 p-5 rounded-2xl bg-white border border-[#ebdcca] shadow-xs space-y-3">
              {/* Photo representation if available */}
              {selectedMapPoint.imageUrl && (
                <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-[#ebdcca] shadow-xs group">
                  <img
                    src={selectedMapPoint.imageUrl}
                    alt={selectedMapPoint.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {selectedMapPoint.imageCaption && (
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 text-[11px] text-white">
                      {selectedMapPoint.imageCaption}
                    </div>
                  )}
                </div>
              )}

              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                  {selectedMapPoint.type}
                </span>
                <span className="text-xs text-neutral-500">{selectedMapPoint.location}</span>
              </div>
              <h4 className="font-serif-title text-xl font-bold text-neutral-900">
                {selectedMapPoint.name}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                {selectedMapPoint.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {selectedMapPoint.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2.5 py-0.5 rounded-full bg-stone-100 text-stone-700 font-medium"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Before & After 2003 Comparison */}
        <div className="bg-[#f7f2eb] rounded-3xl p-6 sm:p-8 border border-[#ebdcca]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-200/70 text-amber-900 mb-2">
              <ArrowRightLeft className="w-3.5 h-3.5 text-amber-800" />
              So sánh đối chiếu
            </div>
            <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-neutral-900">
              Phúc Đồng: Trước & Sau Cột Mốc 2003
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 mt-2">
              Cột mốc chuyển đổi từ xã ngoại thành Gia Lâm thành phường đô thị Long Biên đã làm thay đổi toàn diện diện mạo và cơ cấu xã hội của địa phương.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Before 2003 */}
            <div className="bg-white rounded-2xl p-6 border border-[#e5d9c8] shadow-xs space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <span className="font-serif-title text-lg font-bold text-neutral-900">
                  Xã Phúc Đồng (Trước 2003)
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-stone-100 text-stone-700">
                  Huyện Gia Lâm
                </span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700 mt-2 shrink-0" />
                  <span>
                    <strong>Không gian:</strong> Cánh đồng lúa nước, đầm ao nuôi cá, vườn chuối ven sông và các đường làng lát gạch nghiêng cổ kính.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700 mt-2 shrink-0" />
                  <span>
                    <strong>Dân cư & Xã hội:</strong> Thuần túy cư dân bản địa các dòng họ lâu đời (Đỗ, Nguyễn, Vũ...), quan hệ dòng tộc khép kín và bền chặt.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700 mt-2 shrink-0" />
                  <span>
                    <strong>Kinh tế & Sinh kế:</strong> Trồng lúa, rau màu, hoa quả cung cấp cho chợ đầu mối Long Biên và một số nghề rèn, đúc kim loại thủ công.
                  </span>
                </li>
              </ul>
            </div>

            {/* After 2003 */}
            <div className="bg-white rounded-2xl p-6 border border-amber-300 shadow-xs space-y-4 ring-1 ring-amber-300/50">
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <span className="font-serif-title text-lg font-bold text-amber-950">
                  Phường Phúc Đồng (Hiện nay)
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-900">
                  Quận Long Biên
                </span>
              </div>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700 mt-2 shrink-0" />
                  <span>
                    <strong>Không gian:</strong> Đại lộ 8 làn xe, chung cư cao tầng, liền kề KCN Sài Đồng B; làng cổ trở thành các ngõ phố bê tông kiên cố.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700 mt-2 shrink-0" />
                  <span>
                    <strong>Dân cư & Xã hội:</strong> Cấu trúc hỗn hợp đa vùng miền; hơn 60% dân số là công nhân, người lao động di cư và trí thức trẻ.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-700 mt-2 shrink-0" />
                  <span>
                    <strong>Kinh tế & Sinh kế:</strong> Công nghiệp sản xuất linh kiện, logistics, thương mại dịch vụ, kinh doanh phòng trọ và ẩm thực đường phố.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 4. Hình Ảnh Thực Địa & Địa Danh Phúc Đồng */}
        <div className="bg-[#fcfaf7] rounded-3xl p-6 sm:p-8 border border-[#ebdcca] shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#ebdcca]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-2">
                <Camera className="w-3.5 h-3.5 text-amber-700" />
                Kho ảnh tư liệu thực địa
              </div>
              <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-neutral-900">
                Hình Ảnh & Dấu Ấn Địa Danh Phúc Đồng
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Những góc nhìn chân thực ghi nhận sự đan xen giữa di sản cổ truyền và nhịp sống đô thị mới
              </p>
            </div>
            <span className="text-xs font-semibold text-neutral-500 bg-white px-3 py-1.5 rounded-xl border border-neutral-200 shrink-0">
              4 Địa danh tiêu biểu
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LANDMARK_PHOTOS.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhotoModal(photo)}
                className="bg-white rounded-2xl overflow-hidden border border-[#ebdcca] shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
                    <img
                      src={photo.imageUrl}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="p-2 rounded-full bg-white/90 text-neutral-800 shadow-md">
                        <Maximize2 className="w-4 h-4" />
                      </span>
                    </div>
                    <span className="absolute top-2.5 left-2.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-xs">
                      {photo.category}
                    </span>
                  </div>

                  <div className="p-4 space-y-1.5">
                    <div className="font-serif-title text-base font-bold text-neutral-900 group-hover:text-amber-900 transition-colors">
                      {photo.title}
                    </div>
                    <div className="text-[11px] font-medium text-amber-800">{photo.subtitle}</div>
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                      {photo.description}
                    </p>
                  </div>
                </div>

                <div className="px-4 pb-4 pt-1">
                  <div className="text-[11px] text-neutral-500 italic border-t border-neutral-100 pt-2">
                    {photo.significance}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Zoomed High-Res Landmark Photo */}
        {selectedPhotoModal && (
          <div
            onClick={() => setSelectedPhotoModal(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl border border-neutral-700 animate-in zoom-in-95 duration-200"
            >
              <div className="relative aspect-[16/9] bg-black">
                <img
                  src={selectedPhotoModal.imageUrl}
                  alt={selectedPhotoModal.title}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setSelectedPhotoModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-2 bg-[#fcfaf7]">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-900">
                    {selectedPhotoModal.category}
                  </span>
                  <span className="text-xs text-neutral-500">{selectedPhotoModal.subtitle}</span>
                </div>
                <h3 className="font-serif-title text-2xl font-bold text-neutral-900">
                  {selectedPhotoModal.title}
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {selectedPhotoModal.description}
                </p>
                <div className="p-3 bg-white rounded-xl border border-[#ebdcca] text-xs text-amber-950 italic">
                  <strong>Ý nghĩa thực địa:</strong> {selectedPhotoModal.significance}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
