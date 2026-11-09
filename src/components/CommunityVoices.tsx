import React, { useState, useEffect } from 'react';
import {
  MessageSquareHeart,
  Heart,
  Send,
  UserCheck,
  Sparkles,
} from 'lucide-react';
import { INITIAL_COMMUNITY_VOICES } from '../data/phucDongData.ts';
import { CommunityVoiceNote } from '../types.ts';

export const CommunityVoices: React.FC = () => {
  const [voices, setVoices] = useState<CommunityVoiceNote[]>(() => {
    try {
      const saved = localStorage.getItem('phucdong_community_voices');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_COMMUNITY_VOICES;
  });

  const [authorName, setAuthorName] = useState('');
  const [roleType, setRoleType] = useState<CommunityVoiceNote['roleType']>('Khách ghé thăm');
  const [content, setContent] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('phucdong_community_voices', JSON.stringify(voices));
    } catch {
      // ignore
    }
  }, [voices]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !content.trim()) return;

    const newNote: CommunityVoiceNote = {
      id: 'voice-' + Date.now(),
      author: authorName.trim(),
      roleType: roleType,
      content: content.trim(),
      createdAt: 'Vừa xong',
      likes: 1,
    };

    setVoices([newNote, ...voices]);
    setAuthorName('');
    setContent('');
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleLike = (id: string) => {
    setVoices(
      voices.map((v) => (v.id === id ? { ...v, likes: v.likes + 1 } : v))
    );
  };

  return (
    <section id="community-voices" className="py-16 border-b border-[#e7ded1] bg-[#fdfbf7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-3 border border-amber-200">
            <MessageSquareHeart className="w-3.5 h-3.5 text-amber-700" />
            Lưu bút & Chia sẻ
          </div>
          <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Tiếng Nói & Ký Ức Cộng Đồng
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Nơi ghi lại những tâm tình, ký ức chân thực của người dân bản địa, những người con xa quê đang sinh sống tại Phúc Đồng và các bạn trẻ nghiên cứu văn hóa đô thị.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Submission Form */}
          <div className="lg:col-span-5 bg-white border border-[#ebdcca] rounded-3xl p-6 sm:p-7 shadow-xs space-y-4">
            <h3 className="font-serif-title text-lg font-bold text-neutral-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-700" />
              Gửi gắm cảm nghĩ của bạn
            </h3>
            <p className="text-xs text-neutral-500">
              Chia sẻ kỷ niệm, câu chuyện ngõ xóm hoặc lời động viên đến cộng đồng Phúc Đồng.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1">
                  Họ tên hoặc bút danh:
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Hoàng Tuấn, Bác Ba xóm trọ..."
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#faf7f2] rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1">
                  Bạn là:
                </label>
                <select
                  value={roleType}
                  onChange={(e) => setRoleType(e.target.value as any)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#faf7f2] rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
                >
                  <option value="Khách ghé thăm">Khách ghé thăm chuyên trang</option>
                  <option value="Cư dân bản địa">Cư dân bản địa Phúc Đồng</option>
                  <option value="Người di cư">Người di cư / Lao động tạm trú</option>
                  <option value="Sinh viên / Nhà nghiên cứu">Sinh viên / Nhà nghiên cứu văn hóa</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1">
                  Cảm nghĩ hoặc kỷ niệm:
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Viết cảm nghĩ về con người, ẩm thực, xóm trọ hoặc tình nghĩa xóm làng nơi đây..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#faf7f2] rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-amber-900 text-white font-medium text-xs sm:text-sm hover:bg-amber-800 transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
              >
                <span>Đăng cảm nghĩ</span>
                <Send className="w-3.5 h-3.5" />
              </button>

              {isSuccess && (
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs text-center font-medium animate-in fade-in">
                  Cảm ơn bạn! Cảm nghĩ đã được lưu trữ trên bảng tin cộng đồng.
                </div>
              )}
            </form>
          </div>

          {/* Voices Board / Wall */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-3.5">
            {voices.map((note) => (
              <div
                key={note.id}
                className="p-4 rounded-2xl bg-white border border-[#ebdcca] shadow-xs flex flex-col justify-between space-y-3 hover:shadow-sm transition-shadow"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-serif-title font-bold text-sm text-neutral-900">
                      {note.author}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900">
                      {note.roleType}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-700 leading-relaxed italic">
                    &ldquo;{note.content}&rdquo;
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-neutral-100 text-[11px] text-neutral-400">
                  <span>{note.createdAt}</span>
                  <button
                    onClick={() => handleLike(note.id)}
                    className="flex items-center gap-1 text-rose-600 hover:text-rose-700 font-medium px-2 py-0.5 rounded-md hover:bg-rose-50 transition-colors"
                  >
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span>{note.likes}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
