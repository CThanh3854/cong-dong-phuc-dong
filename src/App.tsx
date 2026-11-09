import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { Section1History } from './components/Section1History.tsx';
import { Section2Indigenous } from './components/Section2Indigenous.tsx';
import { Section3Migrants } from './components/Section3Migrants.tsx';
import { Section4DailyLife } from './components/Section4DailyLife.tsx';
import { Section5Integration } from './components/Section5Integration.tsx';
import { Section6Challenges } from './components/Section6Challenges.tsx';
import { Section7AIChat } from './components/Section7AIChat.tsx';
import { CommunityVoices } from './components/CommunityVoices.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('section-history');

  // Scroll spy to highlight active section in Header navigation
  useEffect(() => {
    const sectionIds = [
      'section-history',
      'section-indigenous',
      'section-migrants',
      'section-dailylife',
      'section-integration',
      'section-challenges',
      'section-ai-chat',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-[#25221e] flex flex-col font-sans">
      {/* Top sticky navigation bar */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Documentary Banner */}
        <Hero onNavigate={handleNavigate} />

        {/* 1. Lịch sử hình thành và phát triển địa bàn */}
        <Section1History />

        {/* 2. Văn hóa cư dân bản địa */}
        <Section2Indigenous />

        {/* 3. Chân dung người di cư */}
        <Section3Migrants />

        {/* 4. Đời sống, sinh hoạt và phong tục */}
        <Section4DailyLife />

        {/* 5. Sự giao lưu và hòa nhập văn hóa */}
        <Section5Integration />

        {/* 6. Những vấn đề và thách thức cộng đồng */}
        <Section6Challenges />

        {/* 7. Hỏi đáp với AI (Gemini 3.8 Flash) */}
        <Section7AIChat />

        {/* Community Voices / Interactive Wall */}
        <CommunityVoices />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
