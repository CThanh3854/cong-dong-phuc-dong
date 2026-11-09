export interface TimelineEvent {
  year: string;
  title: string;
  category: 'Lịch sử' | 'Hành chính' | 'Đô thị hóa' | 'Xã hội';
  description: string;
  details: string[];
  significance: string;
}

export interface MapPoint {
  id: string;
  name: string;
  type: 'Di tích' | 'Hạ tầng' | 'Khu đô thị' | 'Xóm trọ' | 'Chợ dân sinh';
  description: string;
  location: string;
  tags: string[];
  imageUrl?: string;
  imageCaption?: string;
}

export interface LandmarkPhoto {
  id: string;
  title: string;
  subtitle: string;
  category: 'Di tích cổ' | 'Đô thị mới' | 'Đời sống ngõ phố';
  imageUrl: string;
  description: string;
  significance: string;
}

export interface IndigenousElder {
  name: string;
  age: number;
  role: string;
  story: string;
  quote: string;
  memoryPeriod: string;
  imageTheme: string;
}

export interface MigrantPortrait {
  id: string;
  name: string;
  age: number;
  hometown: string;
  occupation: string;
  yearsInPhucDong: number;
  avatarColor: string;
  badge: string;
  quote: string;
  story: string;
  dailyRoutine: string;
  biggestHope: string;
  biggestWorry: string;
  audioQuote?: {
    duration: string;
    transcript: string;
  };
}

export interface DailyTimelineItem {
  time: string;
  title: string;
  indigenousPerspective: string;
  migrantPerspective: string;
  sharedSpace: string;
  iconName: string;
}

export interface CulturalExchangeItem {
  domain: string;
  title: string;
  originDetails: string;
  adaptation: string;
  impactScore: number;
  anecdote: string;
}

export interface CommunityChallenge {
  id: string;
  title: string;
  severity: 'Cao' | 'Trung bình' | 'Đặc thù';
  affectedGroup: string;
  description: string;
  currentReality: string;
  proposedSolutions: string[];
  caseStudy: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

export interface CommunityVoiceNote {
  id: string;
  author: string;
  roleType: 'Cư dân bản địa' | 'Người di cư' | 'Sinh viên / Nhà nghiên cứu' | 'Khách ghé thăm';
  content: string;
  createdAt: string;
  likes: number;
}
