import React, { useState, useEffect } from 'react';
import {
  BookOpen,
  History,
  Landmark,
  Users,
  SunMedium,
  HeartHandshake,
  AlertTriangle,
  Bot,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'section-history', label: '1. Lịch sử', icon: History },
    { id: 'section-indigenous', label: '2. Văn hóa bản địa', icon: Landmark },
    { id: 'section-migrants', label: '3. Chân dung di cư', icon: Users },
    { id: 'section-dailylife', label: '4. Đời sống & Phong tục', icon: SunMedium },
    { id: 'section-integration', label: '5. Giao lưu hòa nhập', icon: HeartHandshake },
    { id: 'section-challenges', label: '6. Thách thức', icon: AlertTriangle },
    { id: 'section-ai-chat', label: '7. Hỏi đáp AI', icon: Bot, isSpecial: true },
  ];

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-amber-900/10 z-50">
        <div
          className="h-full bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="sticky top-0 z-40 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-[#e7ded1] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo / Brand */}
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 text-amber-50 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif-title font-bold text-lg sm:text-xl text-neutral-900 tracking-tight leading-none">
                    PHÚC ĐỒNG
                  </span>
                </div>
                <p className="text-xs text-neutral-500 hidden sm:block mt-0.5">
                  Những mảnh ghép cộng đồng đô thị & di cư
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      item.isSpecial
                        ? 'bg-amber-600/10 text-amber-800 hover:bg-amber-600/20 font-semibold border border-amber-300/60'
                        : isActive
                        ? 'bg-amber-900 text-amber-50 shadow-xs'
                        : 'text-neutral-600 hover:text-neutral-900 hover:bg-amber-100/50'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${item.isSpecial ? 'text-amber-600' : ''}`} />
                    <span>{item.label}</span>
                    {item.isSpecial && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Controls (Mobile menu button) */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                aria-label="Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#e7ded1] bg-[#fcfaf7] px-4 pt-3 pb-6 space-y-2 shadow-lg animate-in slide-in-from-top duration-200">
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider px-2 pb-1">
              Các chuyên mục chính
            </p>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    item.isSpecial
                      ? 'bg-amber-500/15 text-amber-900 border border-amber-300'
                      : isActive
                      ? 'bg-amber-900 text-white'
                      : 'text-neutral-700 hover:bg-amber-100/60'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4 text-amber-700" />
                    <span>{item.label}</span>
                  </div>
                  {item.isSpecial && (
                    <span className="flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 font-bold">
                      <Sparkles className="w-3 h-3 text-amber-700" /> AI
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </header>
    </>
  );
};
