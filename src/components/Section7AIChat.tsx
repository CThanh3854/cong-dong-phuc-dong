import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  Send,
  Sparkles,
  RotateCcw,
  Copy,
  Check,
  User,
  AlertCircle,
  HelpCircle,
  BookOpen,
} from 'lucide-react';
import { AI_SUGGESTED_PROMPTS } from '../data/phucDongData.ts';
import { ChatMessage } from '../types.ts';

export const Section7AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: `Chào bạn! Tôi là **Trợ lý Nghiên cứu Văn hóa Đô thị & Di cư Phúc Đồng**.

Tôi có thể hỗ trợ bạn tìm hiểu sâu sắc về:
* **Lịch sử & Di sản**: Cụm di tích Đình - Chùa Mai Phúc, quá trình chuyển đổi từ huyện Gia Lâm sang quận Long Biên năm 2003.
* **Cộng đồng bản địa & Di cư**: Đời sống xóm trọ công nhân, phong tục tập quán, ký ức làng cổ ven sông Hồng.
* **Tiếp biến văn hóa**: Sự giao thoa ẩm thực, tiếng nói, nếp sinh hoạt "Làng trong phố".
* **Thách thức & Sáng kiến**: Vấn đề PCCC, trường lớp cho con em di cư, không gian xanh đô thị.

Bạn có thể chọn một trong các câu hỏi gợi ý bên dưới hoặc tự do nhập bất kỳ câu hỏi nào!`,
      timestamp: 'Vừa xong',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    setErrorMsg(null);
    setInputValue('');

    const userMessage: ChatMessage = {
      id: 'user-' + Date.now(),
      role: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Build history for backend API
      const historyPayload = newMessages
        .filter((m) => m.id !== 'welcome')
        .map((m) => ({
          role: m.role,
          text: m.text,
        }));

      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: historyPayload,
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Lỗi máy chủ (${res.status})`);
      }

      const data = await res.json();
      const botMessage: ChatMessage = {
        id: 'bot-' + Date.now(),
        role: 'model',
        text: data.reply || 'Xin lỗi, không nhận được phản hồi từ hệ thống.',
        timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      setErrorMsg(err.message || 'Không thể kết nối đến trợ lý AI. Vui lòng thử lại sau.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: 'welcome-' + Date.now(),
        role: 'model',
        text: 'Cuộc đối thoại đã được làm mới. Bạn muốn tìm hiểu thêm về khía cạnh nào của Phúc Đồng?',
        timestamp: 'Vừa xong',
      },
    ]);
    setErrorMsg(null);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Helper to render simple markdown formatting
  const renderFormattedText = (rawText: string) => {
    const lines = rawText.split('\n');
    return lines.map((line, idx) => {
      // Heading level 3 ###
      if (line.startsWith('### ')) {
        return (
          <h4 key={idx} className="font-serif-title text-base sm:text-lg font-bold text-neutral-900 mt-3 mb-1">
            {line.replace('### ', '')}
          </h4>
        );
      }
      // Heading level 2 ##
      if (line.startsWith('## ')) {
        return (
          <h3 key={idx} className="font-serif-title text-lg sm:text-xl font-bold text-amber-950 mt-4 mb-2">
            {line.replace('## ', '')}
          </h3>
        );
      }
      // Bullet list
      if (line.trim().startsWith('* ') || line.trim().startsWith('- ')) {
        const itemContent = line.trim().substring(2);
        return (
          <li key={idx} className="ml-4 list-disc text-neutral-800 my-0.5 leading-relaxed">
            {renderInlineMarkdown(itemContent)}
          </li>
        );
      }
      // Empty line
      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }
      // Regular paragraph
      return (
        <p key={idx} className="text-neutral-800 leading-relaxed my-1">
          {renderInlineMarkdown(line)}
        </p>
      );
    });
  };

  // Helper for inline **bold** and *italic*
  const renderInlineMarkdown = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-neutral-900">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} className="italic text-neutral-700">{part.slice(1, -1)}</em>;
      }
      return part;
    });
  };

  return (
    <section id="section-ai-chat" className="py-16 border-b border-[#e7ded1] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 mb-3 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            Chuyên mục 7
          </div>
          <h2 className="font-serif-title text-2xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
            Hỏi Đáp Cùng Trợ Lý AI Nghiên Cứu
          </h2>
          <p className="mt-3 text-neutral-600 text-sm sm:text-base leading-relaxed">
            Được huấn luyện dựa trên nền tảng dữ liệu thực địa, lịch sử Phúc Đồng và các nghiên cứu nhân học đô thị. Bạn có thể tra cứu nhanh các sự kiện, phân tích các hiện tượng xã hội hoặc yêu cầu giải thích sâu sắc về đời sống cư dân nơi đây.
          </p>
        </div>

        {/* Suggested Prompt Chips */}
        <div className="space-y-2">
          <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-500 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-amber-700" />
            Gợi ý câu hỏi nghiên cứu thường gặp:
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {AI_SUGGESTED_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt.text)}
                disabled={isLoading}
                className="p-3 rounded-xl border border-neutral-200 bg-[#faf7f2] hover:bg-white hover:border-amber-400 hover:shadow-xs transition-all text-left group"
              >
                <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block mb-1">
                  {prompt.category}
                </span>
                <p className="text-xs text-neutral-700 font-medium group-hover:text-amber-950 line-clamp-2 leading-relaxed">
                  &ldquo;{prompt.text}&rdquo;
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Terminal Window */}
        <div className="bg-[#fcfaf7] border border-[#ebdcca] rounded-3xl overflow-hidden shadow-sm flex flex-col h-[620px]">
          {/* Chat Window Top Bar */}
          <div className="px-6 py-4 bg-white border-b border-[#ebdcca] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-700 to-amber-900 text-amber-50 flex items-center justify-center shadow-xs">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-serif-title font-bold text-sm text-neutral-900">
                    Trợ Lý Điền Dã Phúc Đồng (Gemini 3.8 Flash)
                  </h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-100 text-emerald-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    Sẵn sàng
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500">
                  Tri thức chuyên sâu: Lịch sử, nhân học, xóm trọ công nhân & đô thị hóa Long Biên
                </p>
              </div>
            </div>

            <button
              onClick={handleClearHistory}
              title="Làm mới cuộc trò chuyện"
              className="p-2 rounded-xl text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100 border border-neutral-200 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                      isUser
                        ? 'bg-amber-900 text-amber-100'
                        : 'bg-gradient-to-br from-amber-100 to-orange-100 text-amber-900 border border-amber-300'
                    }`}
                  >
                    {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  <div
                    className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm shadow-xs relative group ${
                      isUser
                        ? 'bg-amber-900 text-amber-50 rounded-tr-xs'
                        : 'bg-white text-neutral-800 border border-[#ebdcca] rounded-tl-xs'
                    }`}
                  >
                    <div className="text-[10px] opacity-60 mb-1 flex items-center justify-between">
                      <span>{isUser ? 'Bạn' : 'Trợ lý AI'}</span>
                      <span>{msg.timestamp}</span>
                    </div>

                    <div className="prose prose-sm max-w-none">
                      {isUser ? (
                        <p className="leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                      ) : (
                        renderFormattedText(msg.text)
                      )}
                    </div>

                    {!isUser && (
                      <button
                        onClick={() => handleCopy(msg.id, msg.text)}
                        title="Sao chép câu trả lời"
                        className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-600"
                      >
                        {copiedId === msg.id ? (
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 border border-amber-300 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#ebdcca] text-xs text-neutral-600 flex items-center gap-2 shadow-xs">
                  <div className="w-2 h-2 rounded-full bg-amber-700 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-amber-700 animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-amber-700 animate-bounce [animation-delay:0.4s]" />
                  <span className="italic ml-1">Đang tra cứu dữ liệu địa phương và tạo câu trả lời...</span>
                </div>
              </div>
            )}

            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input Bar */}
          <div className="p-4 bg-white border-t border-[#ebdcca]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Nhập câu hỏi về lịch sử, người di cư, xóm trọ hoặc văn hóa Phúc Đồng..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
                className="flex-1 px-4 py-3 text-xs sm:text-sm bg-[#faf7f2] rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="px-5 py-3 rounded-xl bg-amber-900 text-white font-medium text-xs sm:text-sm hover:bg-amber-800 disabled:opacity-50 disabled:hover:bg-amber-900 transition-colors flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
              >
                <span>Gửi</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            <div className="mt-2 text-[11px] text-neutral-400 flex items-center justify-between">
              <span>Hỏi đáp dựa trên tri thức nhân học thực địa phường Phúc Đồng</span>
              <span>Hỗ trợ bởi Google Gemini AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
