import {
  TimelineEvent,
  MapPoint,
  LandmarkPhoto,
  IndigenousElder,
  MigrantPortrait,
  DailyTimelineItem,
  CulturalExchangeItem,
  CommunityChallenge,
  CommunityVoiceNote,
} from '../types.ts';

import dinhMaiPhucImg from '/src/assets/images/dinh_mai_phuc_1794233824352.jpg';
import congLangImg from '/src/assets/images/cong_lang_phuc_dong_1794233839217.jpg';
import doThiImg from '/src/assets/images/do_thi_phuc_dong_1794233854824.jpg';
import xomTroImg from '/src/assets/images/xom_tro_cong_nhan_1794233876243.jpg';

export { dinhMaiPhucImg, congLangImg, doThiImg, xomTroImg };

export const LANDMARK_PHOTOS: LandmarkPhoto[] = [
  {
    id: 'dinh-mai-phuc-photo',
    title: 'Đình Mai Phúc & Cây Đa Cổ Thụ',
    subtitle: 'Di tích Lịch sử - Văn hóa cấp Quốc gia',
    category: 'Di tích cổ',
    imageUrl: dinhMaiPhucImg,
    description:
      'Đình làng Mai Phúc rợp bóng cây đa trăm tuổi, mái ngói vảy rồng cong vút cổ kính, nơi diễn ra lễ hội rằm tháng Hai và trung tâm sinh hoạt tâm linh của cộng đồng cư dân bản địa qua nhiều thế hệ.',
    significance: 'Biểu tượng lịch sử trường tồn của văn hóa làng xã vùng Kinh Bắc ven sông Hồng.',
  },
  {
    id: 'cong-lang-photo',
    title: 'Cổng Làng Cổ Mai Phúc',
    subtitle: 'Chứng nhân lịch sử & Cửa ngõ kết nối',
    category: 'Di tích cổ',
    imageUrl: congLangImg,
    description:
      'Cổng làng bằng gạch cổ rêu phong soi bóng thời gian, nơi người làng chào nhau mỗi sớm mai, các cụ già ngồi uống nước chè xanh dưới bóng đa và đón những người con xa quê trở về.',
    significance: 'Lưu giữ hồn cốt kiến trúc làng quê Bắc Bộ giữa lòng phố thị hiện đại.',
  },
  {
    id: 'do-thi-chu-huy-man-photo',
    title: 'Đại Lộ Chu Huy Mân & Diện Mạo Đô Thị',
    subtitle: 'Trục giao thông huyết mạch phường Phúc Đồng',
    category: 'Đô thị mới',
    imageUrl: doThiImg,
    description:
      'Đại lộ 8 làn xe hiện đại rợp bóng cây xanh kết nối Phúc Đồng với trung tâm Long Biên, nối các tổ hợp chung cư cao tầng, khu đô thị sinh thái và mạng lưới thương mại dịch vụ sầm uất.',
    significance: 'Minh chứng cho tốc độ đô thị hóa nhanh chóng và diện mạo khang trang hôm nay.',
  },
  {
    id: 'xom-tro-photo',
    title: 'Ngõ Phố & Xóm Trọ Công Nhân Phúc Đồng',
    subtitle: 'Nơi hội tụ cư dân di cư mưu sinh',
    category: 'Đời sống ngõ phố',
    imageUrl: xomTroImg,
    description:
      'Những con ngõ nhỏ lát gạch sạch sẽ với các dãy nhà trọ rợp bóng cây xanh, xe máy tấp nập và khói bếp chiều ấm cúng. Nơi nảy nở tình đồng hương và sự đùm bọc nghĩa tình giữa chủ nhà và người thuê.',
    significance: 'Lát cắt chân thực, sinh động nhất của hiện thực "Làng trong phố" và cộng đồng di cư.',
  },
];

export const MAP_POINTS: MapPoint[] = [
  {
    id: 'dinh-mai-phuc',
    name: 'Đình & Chùa Mai Phúc',
    type: 'Di tích',
    location: 'Ngõ Mai Phúc, phường Phúc Đồng',
    description:
      'Di tích lịch sử - văn hóa cấp quốc gia, trung tâm tín ngưỡng cổ truyền của cư dân bản địa. Thờ danh tướng thời Hùng Vương cùng các vị tiền bối có công dựng làng.',
    tags: ['Di tích quốc gia', 'Hội làng tháng 2', 'Không gian tâm linh bản địa'],
    imageUrl: dinhMaiPhucImg,
    imageCaption: 'Khuôn viên Đình Mai Phúc với cây đa cổ thụ và sân gạch truyền thống',
  },
  {
    id: 'cong-lang-mai-phuc',
    name: 'Cổng làng cổ & Giếng đình',
    type: 'Di tích',
    location: 'Đầu đường Mai Phúc giao Chu Huy Mân',
    description:
      'Chứng nhân lịch sử lưu giữ dáng dấp làng quê Bắc Bộ xưa, rợp bóng cây đa cổ thụ, nơi các cụ cao niên ngồi uống nước chè xanh mỗi chiều mát.',
    tags: ['Ký ức làng quê', 'Điểm hẹn cộng đồng', 'Cây đa cổ thụ'],
    imageUrl: congLangImg,
    imageCaption: 'Cổng làng cổ kính với vòm cuốn gạch rêu phong và tán đa rợp mát',
  },
  {
    id: 'kcn-sai-dong-b',
    name: 'Khu công nghiệp Sài Đồng B (tiếp giáp)',
    type: 'Hạ tầng',
    location: 'Phía Đông phường Phúc Đồng',
    description:
      'Khu công nghiệp tập trung hàng chục nhà máy linh kiện điện tử, cơ khí chính xác, dệt may - nơi làm việc của hơn 60% người lao động nhập cư sinh sống tại các xóm trọ Phúc Đồng.',
    tags: ['Việc làm công nhân', 'Động lực kinh tế', 'Dòng chảy di cư'],
    imageUrl: doThiImg,
    imageCaption: 'Khu vực tiếp giáp công nghiệp và giao thông phát triển sôi động',
  },
  {
    id: 'xom-tro-ngo-84',
    name: 'Cụm xóm trọ công nhân ngõ 84 & ngõ 124',
    type: 'Xóm trọ',
    location: 'Trục ngõ sâu tổ dân phố 5 & 6',
    description:
      'Khu vực tập trung mật độ cao các dãy phòng trọ cấp 4 có gác xép. Nơi hội tụ công nhân, thợ hồ, shipper quê từ Thanh Hóa, Nam Định, Nghệ An, Phú Thọ...',
    tags: ['Đời sống di cư', 'Xóm trọ sẻ chia', 'Khói bếp chiều tối'],
    imageUrl: xomTroImg,
    imageCaption: 'Dãy ngõ xóm trọ bình yên rợp bóng cây với biển cho thuê phòng trọ',
  },
  {
    id: 'cho-coc-mai-phuc',
    name: 'Chợ dân sinh & Chợ cóc ban mai',
    type: 'Chợ dân sinh',
    location: 'Ven ngõ Mai Phúc - Chu Huy Mân',
    description:
      'Họp từ 5 giờ sáng, cung cấp rau củ tươi, cá đồng, bánh cuốn nóng và đồ ăn sáng bình dân. Nơi diễn ra sự giao tiếp tự nhiên và thân tình nhất giữa người bán bản địa và người mua tứ xứ.',
    tags: ['Giao lưu văn hóa', 'Ẩm thực bình dân', 'Nhịp sống 5h sáng'],
    imageUrl: congLangImg,
    imageCaption: 'Khu vực chợ dân sinh họp gần cửa ngõ làng cổ Mai Phúc',
  },
  {
    id: 'hope-residences',
    name: 'Tổ hợp nhà ở xã hội Hope Residences & Đại lộ Chu Huy Mân',
    type: 'Khu đô thị',
    location: 'Đường Chu Huy Mân & Nguyễn Lam',
    description:
      'Đại diện cho diện mạo hiện đại với hàng nghìn căn hộ gia đình trẻ, trí thức, tạo nên tầng lớp cư dân mới hội tụ đa dạng về Phúc Đồng.',
    tags: ['Đô thị mới', 'Gia đình trẻ', 'Hạ tầng hiện đại'],
    imageUrl: doThiImg,
    imageCaption: 'Tuyến đại lộ Chu Huy Mân với các khu nhà cao tầng hiện đại',
  },
];

export const HISTORICAL_TIMELINE: TimelineEvent[] = [
  {
    year: 'Thế kỷ XI - XIX',
    title: 'Hình thành làng cổ ven sông vùng châu thổ Kinh Bắc',
    category: 'Lịch sử',
    description:
      'Vùng đất Phúc Đồng nguyên là các thôn, xóm cổ thuộc tổng Cự Linh, huyện Gia Lâm, phủ Thuận An, trấn Kinh Bắc xưa. Đất đai phù sa màu mỡ ven sông Đuống và sông Hồng, cư dân thuần nông kết hợp thủ công nghiệp truyền thống.',
    details: [
      'Làng Mai Phúc được tạo lập với cụm di tích Đình - Chùa Mai Phúc thờ danh tướng thời Hùng Vương cùng các bậc tiền hiền khai hoang mở đất.',
      'Nền kinh tế nông nghiệp gắn liền với lúa nước, hoa màu, nghề nuôi tằm ươm tơ và giao thương qua các bến đò sông Hồng sang kinh thành Thăng Long.',
      'Hương ước làng xã và gia phả các dòng họ lớn (Đỗ, Nguyễn, Vũ, Trần) ghi nhận tính tự quản cao và truyền thống hiếu học.',
    ],
    significance: 'Đặt nền móng cho bản sắc văn hóa cội nguồn và tâm thức cộng đồng làng xã bền chặt hàng trăm năm.',
  },
  {
    year: '1954 - 1985',
    title: 'Thời kỳ Hợp tác xã nông nghiệp và vành đai lương thực Hà Nội',
    category: 'Xã hội',
    description:
      'Sau ngày giải phóng Thủ đô, xã Phúc Đồng thuộc huyện Gia Lâm trở thành hợp tác xã nông nghiệp tiêu biểu, cung cấp rau quả, lương thực và thực phẩm cho nội thành Hà Nội trong giai đoạn bao cấp.',
    details: [
      'Xây dựng trạm bơm nước, kênh mương dẫn nước tưới tiêu nội đồng nối từ sông Đuống.',
      'Cánh đồng lúa bạt ngàn trải dài đến tận khu vực Sài Đồng, Thạch Bàn ngày nay.',
      'Hình thành các xưởng cơ khí nhỏ và đội thợ mộc, thợ nề đi phục vụ kiến thiết các công trình tại thủ đô.',
    ],
    significance: 'Định hình nếp sống tập thể, tinh thần tương trợ xóm giềng và các mối quan hệ làng xóm gắn bó keo sơn.',
  },
  {
    year: '1995 - 2002',
    title: 'Tiếp cận công nghiệp hóa và khởi sắc hạ tầng',
    category: 'Đô thị hóa',
    description:
      'Khu công nghiệp Sài Đồng B kề bên được đầu tư xây dựng, trục Quốc lộ 5 nâng cấp mở rộng. Làn sóng người lao động từ các tỉnh lân cận bắt đầu dịch chuyển về khu vực để tìm việc làm.',
    details: [
      'Bắt đầu xuất hiện những dãy phòng trọ đầu tiên do các hộ dân bản địa xây dựng trên đất vườn để cho công nhân thuê.',
      'Một bộ phận nông dân chuyển đổi nghề nghiệp sang kinh doanh tạp hóa, mở quán cơm bình dân hoặc làm bảo vệ, công nhân nhà máy.',
      'Hạ tầng đường làng ngõ xóm bắt đầu được bê tông hóa thay thế đường đất gạch nghiêng.',
    ],
    significance: 'Khởi đầu cho sự chuyển dịch cơ cấu dân số từ cư dân thuần bản địa sang cộng đồng hỗn hợp đón người di cư.',
  },
  {
    year: 'Tháng 11/2003',
    title: 'Thành lập quận Long Biên & Phường Phúc Đồng chính thức ra đời',
    category: 'Hành chính',
    description:
      'Thực hiện Nghị định số 132/2003/NĐ-CP của Chính phủ, quận Long Biên được thành lập từ việc tách 10 xã và 3 thị trấn thuộc huyện Gia Lâm. Xã Phúc Đồng chính thức chuyển thành phường Phúc Đồng.',
    details: [
      'Bộ máy quản lý hành chính chuyển đổi từ mô hình chính quyền nông thôn sang chính quyền đô thị.',
      'Quy hoạch đất đai được điều chỉnh mạnh mẽ nhằm phục vụ các dự án phát triển công cộng, khu đô thị và mở rộng mạng lưới giao thông.',
      'Cư dân làng quê trở thành "thị dân", bắt đầu đối diện với sự thay đổi căn bản về phương thức sinh kế và lối sống.',
    ],
    significance: 'Cột mốc lịch sử mang tính bước ngoặt, mở ra kỷ nguyên đô thị hóa với tốc độ phi mã trên toàn địa bàn.',
  },
  {
    year: '2010 - 2018',
    title: 'Đại dự án đô thị và đại lộ liên kết vùng',
    category: 'Đô thị hóa',
    description:
      'Tuyến đại lộ Chu Huy Mân, đại siêu thị Aeon Mall Long Biên, khu đô thị sinh thái cao cấp liền kề và các khu nhà ở xã hội (Hope Residences) hình thành, làm biến đổi ngoạn mục diện mạo phường.',
    details: [
      'Hệ thống ngõ ngách được đánh số tên đường phố, lắp đèn chiếu sáng đô thị.',
      'Số lượng phòng trọ công nhân tăng gấp 4 lần, đón nhận hàng chục nghìn lượt lao động di cư từ Thanh Hóa, Nghệ An, Nam Định, Phú Thọ...',
      'Xuất hiện cấu trúc "Làng trong phố": Cổng làng, giếng đình cổ kính nằm đan xen giữa các khối nhà cao tầng và biệt thự sang trọng.',
    ],
    significance: 'Đưa Phúc Đồng trở thành một trong những điểm nóng giao thoa văn hóa đa vùng miền sống động nhất vùng Đông Hà Nội.',
  },
  {
    year: 'Hiện tại',
    title: 'Bức tranh đa sắc: Giao thoa cộng đồng đô thị & bản sắc di sản',
    category: 'Xã hội',
    description:
      'Phúc Đồng hôm nay là không gian tích hợp độc đáo: Cư dân gốc giữ gìn đình làng, dòng họ; cư dân di cư đóng góp sức lao động then chốt cho sản xuất; cư dân chung cư mới bổ sung tầng lớp trí thức trẻ.',
    details: [
      'Tổ chức đều đặn Lễ hội Đình - Chùa Mai Phúc rằm tháng Hai âm lịch thu hút cả cư dân bản xứ lẫn người thuê trọ cùng tham gia.',
      'Phát triển mô hình "Nhà trọ tự quản - Văn minh - An toàn PCCC" gắn kết giữa chủ trọ và người tạm trú.',
      'Ứng dụng công nghệ số trong quản lý dân cư và bảo tồn các tư liệu văn hóa phi vật thể của địa phương.',
    ],
    significance: 'Khẳng định tinh thần hiếu khách, dung hợp văn hóa và sức sống mãnh liệt của một cộng đồng đô thị chuyển đổi.',
  },
];



export const INDIGENOUS_ELDERS: IndigenousElder[] = [
  {
    name: 'Cụ Đỗ Văn Cẩn',
    age: 87,
    role: 'Trưởng ban Khánh tiết Đình Mai Phúc, cư dân đời thứ 14',
    story:
      'Cả đời tôi gắn bó với mảnh đất này, từ thời còn chăn trâu trên bãi bồi, gặt lúa đổi công, đến ngày chứng kiến máy ủi san lấp cánh đồng làm đường lớn. Người làng Phúc Đồng chúng tôi ăn ở thơm thảo, đất đai biến đổi nhưng cái gốc gia phong, bàn thờ tổ tiên và chữ "tình làng nghĩa xóm" không bao giờ được phép mất đi.',
    quote:
      'Người từ đâu đến cũng là con Lạc cháu Hồng. Họ về đây làm ăn chăm chỉ, cùng giữ yên bình xóm ngõ thì đều là người của làng mình.',
    memoryPeriod: '1945 - nay (Hợp tác xã lúa nước đến Đô thị hóa)',
    imageTheme: 'Đình làng cổ kính & Áo the khăn xếp',
  },
  {
    name: 'Cụ bà Nguyễn Thị Lan',
    age: 81,
    role: 'Nghệ nhân dân gian làng, người truyền dạy làm bánh đúc và món ăn truyền thống',
    story:
      'Ngày xưa rằm tháng hai hội làng, cả xóm đỏ lửa nấu xôi nén, mổ lợn tế Thành hoàng. Bây giờ các cháu công nhân thuê trọ đông lắm, đến Tết hay ngày hội, tôi vẫn bớt cho các cháu đĩa xôi gấc, bát chè sen. Nhìn chúng nó ăn ngon lành mà nhớ con cháu mình đi làm xa.',
    quote:
      'Bát canh rau ngót nấu tôm chia nửa lúc chiều muộn, cái tình người già trao cho người trẻ xa quê quý hơn vàng bạc.',
    memoryPeriod: '1955 - nay (Nếp sống ẩm thực truyền thống)',
    imageTheme: 'Góc bếp củi xưa & Nụ cười nhân hậu',
  },
  {
    name: 'Bác Trần Văn Thao',
    age: 63,
    role: 'Tổ trưởng Tổ dân phố, nguyên cựu chiến binh',
    story:
      'Năm 2003 lên phường, việc quản lý thay đổi hẳn. Ban đầu bà con bản địa cũng e dè vì người lạ đến nhiều quá, sợ phức tạp an ninh. Nhưng rồi qua các buổi họp tổ dân phố, lập đội tuần tra tự quản có cả các anh em công nhân tham gia, tình cảm dần khăng khít. Giờ ai ốm đau trong ngõ, cả xóm đều đến hỏi thăm.',
    quote:
      'Đô thị hóa không chỉ là xây nhà cao tầng, mà là cách chúng ta mở rộng tấm lòng để biến người lạ thành xóm giềng.',
    memoryPeriod: '2003 - nay (Quá trình chuyển đổi xã lên phường)',
    imageTheme: 'Nhà văn hóa tổ dân phố & Sổ bộ dân cư',
  },
];

export const MIGRANT_PORTRAITS: MigrantPortrait[] = [
  {
    id: 'bac-tu-thanh-hoa',
    name: 'Bác Lê Văn Tư',
    age: 58,
    hometown: 'Hoằng Hóa, Thanh Hóa',
    occupation: 'Thợ mộc hoàn thiện & Bảo vệ ca đêm',
    yearsInPhucDong: 14,
    avatarColor: 'from-amber-700 to-amber-900',
    badge: '14 năm xóm trọ',
    quote:
      'Mười bốn năm ở ngõ 84, tôi nhớ từng ổ gà, từng khúc quanh. Chủ nhà coi tôi như người nhà, có giỗ chạp gì cũng gọi tôi sang uống chén rượu.',
    story:
      'Rời quê nhà sau những mùa mất mùa lúa, bác Tư ra Hà Nội mưu sinh từ năm 2010. Đôi bàn tay chai sần gắn liền với nghề thợ mộc mộc mạc, ban đêm nhận thêm ca trực bảo vệ công trình. Căn phòng trọ 16m2 đơn sơ nhưng ngăn nắp, chiếc quạt tai voi cũ và chiếc đài radio nhỏ là người bạn mỗi đêm khuya. Tiền kiếm được bác chắt chiu nuôi 3 đứa con học đại học tại quê nhà.',
    dailyRoutine: '5:30 dậy đạp xe dạo chợ mua rau - 7:00 xưởng mộc - 18:00 cơm trọ - 21:00 ca trực đêm.',
    biggestHope: 'Các con tốt nghiệp có việc làm ổn định, dành dụm sửa lại mái ngói ở quê.',
    biggestWorry: 'Tuổi già sức yếu, đau khớp chân những ngày đông buốt lạnh ở miền Bắc.',
    audioQuote: {
      duration: '01:42',
      transcript:
        'Hồi mới ra bỡ ngỡ lắm chú ơi, giọng quê mình nói nhanh người ta chưa hiểu. Nhưng sống lâu, thấy người Phúc Đồng hiền hậu, hay cho con cá quả mướp. Bây giờ về quê độ nửa tháng lại thấy nhớ cái ngõ nhỏ này...',
    },
  },
  {
    id: 'chi-hoa-nam-dinh',
    name: 'Chị Đặng Thị Hoa',
    age: 33,
    hometown: 'Ý Yên, Nam Định',
    occupation: 'Nữ công nhân may KCN Sài Đồng',
    yearsInPhucDong: 8,
    avatarColor: 'from-rose-600 to-rose-900',
    badge: 'Công nhân may 8 năm',
    quote:
      'Tăng ca đến 8 giờ tối mệt rã rời, nhưng về đến đầu ngõ thấy bà chủ trọ bế hộ đứa con gái út cho ăn cháo, lòng nhẹ bẫng.',
    story:
      'Chị Hoa cùng chồng lên Phúc Đồng từ năm 2016. Chồng làm thợ xây tự do, chị làm công nhân may theo dây chuyền xuất khẩu. Phòng trọ có thêm căn gác xép nhỏ làm chỗ ngủ cho hai mẹ con. Mùa dịch hay những đợt nhà máy ít đơn hàng, chủ trọ giảm 30% tiền phòng và gửi cho bao gạo, mớ rau vườn. Đối với chị, xóm trọ Phúc Đồng đã trở thành quê hương thứ hai chở che gia đình nhỏ.',
    dailyRoutine: '6:15 đưa con gửi trường mầm non - 7:00 vào ca may - 18:00 tan ca hoặc tăng ca - 19:30 đón con, nấu nướng.',
    biggestHope: 'Công xưởng có nhiều đơn hàng tăng ca đều đặn để có tiền tích lũy và đóng học phí cho con.',
    biggestWorry: 'Giá điện nước sinh hoạt mùa nóng và sợ con ốm không người trông nom lúc vào ca.',
    audioQuote: {
      duration: '02:15',
      transcript:
        'Phòng trọ tuy nhỏ nhưng có cái gác xép, hè nóng thì lắp thêm cái quạt hơi nước. Mấy chị em cùng dãy trọ thân nhau lắm, ai nấu nồi cá kho ngon cũng múc sang cho nhau một bát.',
    },
  },
  {
    id: 'anh-dung-phu-tho',
    name: 'Anh Trần Văn Dũng',
    age: 27,
    hometown: 'Thanh Ba, Phú Thọ',
    occupation: 'Tài xế giao hàng công nghệ (Shipper)',
    yearsInPhucDong: 4,
    avatarColor: 'from-blue-600 to-indigo-950',
    badge: 'Tài xế công nghệ 4 năm',
    quote:
      'Tôi thuộc từng số nhà ngóc ngách từ ngõ Chu Huy Mân đến khu biệt thự ven sông. Phúc Đồng là nơi tôi thấy rõ nhất sự đối lập nhưng lại hòa hợp kỳ lạ của Hà Nội.',
    story:
      'Dũng tốt nghiệp cao đẳng nghề rồi quyết định bám trụ thủ đô bằng chiếc xe máy cũ. Cậu chia sẻ phòng trọ cùng hai người bạn đồng hương. Tính tình xởi lởi, nhanh nhẹn, Dũng thường xuyên nhận chở đồ giúp các cụ già trong ngõ hoặc lấy thư từ giúp hàng xóm. Cậu là đại diện cho lớp trẻ di cư năng động, thích nghi thần tốc với kinh tế số.',
    dailyRoutine: '6:30 bật app nhận đơn - chạy qua trưa ăn bánh mì - 21:00 về phòng trọ xách nước tắm - 23:00 ngủ.',
    biggestHope: 'Tích cóp mua được chiếc xe tay ga mới để chạy chở khách êm hơn và mở một tiệm sửa điện thoại nhỏ.',
    biggestWorry: 'Thời tiết mưa bão, trơn trượt trên các tuyến đường và tai nạn rủi ro khi chạy xe liên tục ngoài đường.',
    audioQuote: {
      duration: '01:18',
      transcript:
        'Người Phúc Đồng gốc họ tinh tế lắm. Nhiều khi giao hàng trời mưa to, cô chủ nhà còn đưa cho chiếc khăn khô lau mặt rồi rót cho cốc nước ấm. Những điều nhỏ bé đó làm mình ấm lòng cả ngày.',
    },
  },
  {
    id: 'co-ba-ban-xoi',
    name: 'Cô Nguyễn Thị Ba',
    age: 53,
    hometown: 'Khoái Châu, Hưng Yên',
    occupation: 'Tiểu thương bán xôi sáng & bánh mì vỉa hè',
    yearsInPhucDong: 11,
    avatarColor: 'from-emerald-700 to-teal-950',
    badge: 'Gánh hàng rong 11 năm',
    quote:
      'Mỗi sáng bán 150 gói xôi từ 10.000 đến 15.000 đồng. Khách quen từ đứa trẻ con học lớp một nay đã học cấp ba vẫn ghé qua.',
    story:
      'Bắt đầu một ngày từ 3 giờ rưỡi sáng khi cả làng còn chìm trong giấc ngủ, cô Ba ngâm gạo nếp cái hoa vàng, đồ đỗ xanh, phi hành giòn rụm. Xe xôi đặt ngay ngã ba gần trường học và lối rẽ ra KCN. Cô Ba nhớ rõ sở thích của từng người: Chú công nhân ăn xôi xéo nhiều mỡ hành, em học sinh ăn xôi ngô thêm ruốc ngọt, cụ già ăn xôi trắng muối vừng.',
    dailyRoutine: '3:30 dậy đồ xôi - 5:30 dọn hàng - 9:00 thu dọn gánh xôi - 14:00 đi chợ đầu mối gom gạo đỗ.',
    biggestHope: 'Có sức khỏe để bán hàng đều mỗi sáng, cuối năm gom đủ tiền gửi về cho mẹ già ở quê uống thuốc.',
    biggestWorry: 'Trời mưa dầm dề ế xôi và bị đau nhức xương khớp mỗi khi thay đổi thời tiết.',
    audioQuote: {
      duration: '01:50',
      transcript:
        'Cái nghề này lấy công làm lãi thôi chú. Nhưng vui vì được gặp mọi người mỗi sáng. Ở đây 11 năm, cảm giác mình cũng như một phần nhịp thở của ngõ nhỏ này rồi.',
    },
  },
  {
    id: 'em-minh-nghe-an',
    name: 'Em Lê Hoàng Minh',
    age: 21,
    hometown: 'Yên Thành, Nghệ An',
    occupation: 'Sinh viên năm 3 Đại học & Nhân viên thu ngân bán thời gian',
    yearsInPhucDong: 2,
    avatarColor: 'from-violet-600 to-purple-950',
    badge: 'Sinh viên thế hệ Z',
    quote:
      'Ban đầu em sợ giọng miền Trung của mình khó nghe, nhưng bạn bè cùng phòng trọ và cô bán cơm luôn bảo: "Giọng Nghệ An nghe mộc mạc và chân chất lắm cháu ơi".',
    story:
      'Minh là con đầu trong gia đình làm nông nghiệp. Đậu đại học tại Hà Nội, em chọn thuê trọ tại Phúc Đồng vì giá thuê rẻ hơn nội thành từ 30% đến 40% và tiện tuyến xe buýt sang trường. Ngoài giờ học, Minh làm thêm tại cửa hàng tiện lợi và dạy kèm thêm toán cho con gái một gia đình bản địa trong ngõ.',
    dailyRoutine: '6:30 bắt xe buýt số 03 đi học - 13:00 về phòng ôn bài - 17:30 ca làm tại cửa hàng - 22:30 tự học.',
    biggestHope: 'Tốt nghiệp loại giỏi ngành Công nghệ thông tin và tìm được việc làm tại khu công nghệ cao.',
    biggestWorry: 'Chi phí sinh hoạt leo thang và áp lực thi cử cuối kỳ.',
    audioQuote: {
      duration: '01:25',
      transcript:
        'Ở xóm trọ Phúc Đồng có các bác công nhân như bố mẹ mình ở quê vậy. Có hôm em ôn thi thức khuya đói bụng, bác tầng dưới còn mang lên cho củ khoai nướng nóng hổi.',
    },
  },
  {
    id: 'bac-sau-thai-binh',
    name: 'Bác Vũ Đình Sáu',
    age: 62,
    hometown: 'Tiền Hải, Thái Bình',
    occupation: 'Thợ xây & sửa chữa nhà tự do',
    yearsInPhucDong: 16,
    avatarColor: 'from-stone-600 to-stone-900',
    badge: '16 năm thợ nề',
    quote:
      'Tôi đặt từng viên gạch xây nên bao ngôi nhà cao tầng ở đây. Nhìn Phúc Đồng khang trang từng ngày, mình cũng tự hào có chút mồ hôi công sức của mình.',
    story:
      'Là một trong những người di cư có mặt sớm nhất tại xóm trọ Phúc Đồng từ những năm 2008. Bác Sáu có tay nghề trát vữa, ốp lát điêu luyện. Nhiều chủ nhà người gốc Phúc Đồng tin tưởng giao cho bác sửa sang nhà cửa, lợp lại mái tôn. Giờ đây, bác được coi như "trưởng xóm trọ", luôn đứng ra hòa giải những xích mích nhỏ giữa các phòng.',
    dailyRoutine: '6:00 ăn sáng chè chén - 7:00 đi làm công trình - 17:30 về tắm giặt - 19:00 đánh cờ tướng đầu ngõ.',
    biggestHope: 'Xóm trọ luôn yên bình, mọi người đùm bọc nhau không xảy ra tai nạn hay sự cố gì.',
    biggestWorry: 'Nỗi lo về an toàn PCCC ở các ngõ sâu và giấy tờ tạm trú khi đã lớn tuổi.',
  },
];

export const DAILY_TIMELINE: DailyTimelineItem[] = [
  {
    time: '05:00 - 06:30',
    title: 'Bình minh thức giấc & Chợ cóc rộn ràng',
    indigenousPerspective:
      'Các cụ cao niên đi bộ thể dục quanh hồ đình Mai Phúc, tiếng chổi tre quét lá đa xào xạc trước sân đình.',
    migrantPerspective:
      'Những người bán xôi, thợ bánh mì và shipper dậy sớm chuẩn bị gánh hàng; công nhân ca sớm hối hả chuẩn bị cặp lồng cơm.',
    sharedSpace: 'Gánh xôi vỉa hè, quầy rau tươi cổng làng, giếng nước ngõ chung.',
    iconName: 'Sunrise',
  },
  {
    time: '07:00 - 08:30',
    title: 'Dòng người vào ca & Hối hả giờ cao điểm',
    indigenousPerspective:
      'Mở cửa các cửa hàng tạp hóa, tiệm sửa xe gia truyền; đưa đón con cháu vào các trường công lập Phúc Đồng.',
    migrantPerspective:
      'Từng đoàn xe máy nối đuôi nhau ra đường Chu Huy Mân hướng về KCN Sài Đồng B; tiếng còi xe và thẻ quét chấm công vang lên.',
    sharedSpace: 'Ngã tư Nguyễn Văn Linh - Chu Huy Mân, trạm dừng xe buýt nội thành.',
    iconName: 'Users',
  },
  {
    time: '11:30 - 13:00',
    title: 'Quán cơm 25k & Giấc ngủ trưa chớp nhoáng',
    indigenousPerspective:
      'Bữa cơm gia đình quây quần tại các ngôi nhà kiên cố, xem bản tin thời sự trưa Hà Nội.',
    migrantPerspective:
      'Bữa cơm trưa tại nhà ăn công xưởng hoặc quán cơm bình dân 25.000đ; ngả lưng trên chiếc võng dù mắc tạm góc phòng trọ.',
    sharedSpace: 'Quán cơm bình dân ngõ 84, bóng cây râm mát trước nhà văn hóa.',
    iconName: 'Coffee',
  },
  {
    time: '17:30 - 19:30',
    title: 'Khói bếp xóm trọ & Âm thanh gia đình',
    indigenousPerspective:
      'Tưới luống rau nhỏ sau nhà, các bác trung niên ngồi ghế đá bàn cờ tướng đầu ngõ, hương trầm ấm cúng trên bàn thờ gia tiên.',
    migrantPerspective:
      'Dãy trọ rộn ràng tiếng mở khóa cửa, mùi cá kho nghệ, canh mùng tơi bốc khói; tiếng trẻ con học bài í ới gọi nhau trên gác xép.',
    sharedSpace: 'Hành lang phơi quần áo dùng chung, sân chơi nhỏ trước ngõ.',
    iconName: 'Home',
  },
  {
    time: '20:30 - 22:30',
    title: 'Trà đá vỉa hè & Giao lưu đêm muộn',
    indigenousPerspective:
      'Chủ nhà trọ dạo quanh ngõ kiểm tra cổng ngõ chung, dặn dò các phòng khóa xe cẩn thận, tán gẫu đôi câu chuyện mùa vụ xưa.',
    migrantPerspective:
      'Công nhân tan ca muộn ghé quán trà đá làm điếu thuốc lào, gọi video call về quê trò chuyện với bố mẹ và con nhỏ qua màn hình điện thoại.',
    sharedSpace: 'Quán trà chén đầu ngõ đèn vàng le lói, chiếc ghế nhựa bình dị.',
    iconName: 'Moon',
  },
];

export const CULTURAL_EXCHANGES: CulturalExchangeItem[] = [
  {
    domain: 'Ẩm thực giao thoa',
    title: 'Mâm cơm xóm trọ & Sự hội tụ đặc sản trăm miền',
    originDetails:
      'Ẩm thực bản địa Hà Nội thiên về sự thanh cảnh, nước dùng trong, bún ốc, bún riêu, chè sen long nhãn.',
    adaptation:
      'Người di cư mang theo nem chua Thanh Hóa, bánh cáy Thái Bình, giò bê Nghệ An, mắm tép Nam Định. Trong các xóm trọ, chủ nhà chia cho người thuê đĩa xôi nén hội làng, người thuê mang biếu chủ buồng chuối hay giò quê ngày Tết.',
    impactScore: 92,
    anecdote:
      'Chị Hoa (Nam Định) dạy bà cụ Lan bản địa cách ủ tương nếp gia truyền, đổi lại cụ Lan chỉ chị bí quyết nấu nước dùng phở bò ngọt thanh từ mía lau.',
  },
  {
    domain: 'Ngôn ngữ & Khẩu âm',
    title: 'Sự dung nạp phương ngữ & Căn tính đứa trẻ thế hệ 2',
    originDetails:
      'Cư dân gốc giữ chất giọng Hà Nội cổ vùng ven nhẹ nhàng, dùng từ ngữ cổ như "thầy u", "bác nó", "chợ giời".',
    adaptation:
      'Người nhập cư mang theo phương ngữ miền Trung (trôông, mô, tê, răng, rứa) và Bắc Bộ (rơm rạ, bu, mợ). Đáng chú ý, thế hệ con em di cư sinh ra tại Phúc Đồng nói giọng Hà Nội chuẩn khi ở trường, nhưng về phòng trọ lại giao tiếp lưu loát bằng phương ngữ của cha mẹ.',
    impactScore: 88,
    anecdote:
      'Một cô giáo tại trường Tiểu học Phúc Đồng chia sẻ: "Lớp học có 40 cháu thì hơn nửa là con em di cư, các cháu hòa đồng rất nhanh, phát âm chuẩn và biết yêu quý sự đa dạng vùng miền".',
  },
  {
    domain: 'Tình nghĩa Chủ trọ - Người thuê',
    title: 'Vượt qua quan hệ thương mại hóa sang tình nghĩa xóm giềng',
    originDetails:
      'Thời gian đầu những năm 2000, quan hệ chủ yếu dựa trên hợp đồng thuê phòng ngắn hạn và sự thăm dò lẫn nhau.',
    adaptation:
      'Qua thử thách thời gian (đặc biệt giai đoạn thiên tai, dịch bệnh), mô hình nhà trọ nghĩa tình ra đời: Miễn giảm tiền thuê, hỗ trợ thực phẩm, đưa đi trạm y tế cấp cứu lúc nửa đêm, mời người thuê trọ ăn bữa cơm Tất niên cuối năm.',
    impactScore: 95,
    anecdote:
      'Bác Tư kể: "Năm tôi bị tai nạn gãy chân bó bột, chính gia đình bác chủ nhà cưu mang cơm nước suốt hai tháng ròng mà không lấy một đồng tiền phòng".',
  },
  {
    domain: 'Lễ hội & Sinh hoạt tâm linh',
    title: 'Hội làng Mai Phúc đón người xa xứ',
    originDetails:
      'Lễ hội truyền thống rằm tháng 2 âm lịch xưa kia chỉ dành cho các bậc chức sắc và con cháu chính tông của các dòng họ trong làng.',
    adaptation:
      'Ngày nay, lễ hội mở rộng cửa chào đón toàn bộ công nhân và cư dân tạm trú. Ban khánh tiết bố trí khu vực đón tiếp chu đáo, nhiều thanh niên công nhân nhiệt tình tham gia đội kéo co, bưng lễ vật rước nước.',
    impactScore: 86,
    anecdote:
      'Lần đầu tiên anh Dũng (Phú Thọ) được khoác chiếc áo lụa xanh khiêng kiệu rước nước trong hội làng: "Cảm giác mình không còn là người ngoài ngõ nữa, mà đã thuộc về nơi này".',
  },
];

export const COMMUNITY_CHALLENGES: CommunityChallenge[] = [
  {
    id: 'pccc-nha-tro',
    title: 'An toàn phòng cháy chữa cháy & Cải tạo hạ tầng ngõ sâu',
    severity: 'Cao',
    affectedGroup: 'Cư dân các xóm trọ và hộ dân trong ngõ hẻm dưới 2m',
    description:
      'Nhiều dãy phòng trọ xây dựng từ 10-15 năm trước có kết cấu chuồng cọp bịt kín, đường dây điện chằng chịt do sử dụng nhiều thiết bị điện công suất lớn (bếp từ, điều hòa mini, xe máy điện). Khi xảy ra sự cố, xe cứu hỏa rất khó tiếp cận.',
    currentReality:
      'Khoảng 35% phòng trọ tại các ngõ sâu chưa có lối thoát hiểm thứ hai độc lập. Lực lượng chức năng quận Long Biên và phường Phúc Đồng đang quyết liệt rà soát, yêu cầu mở cửa thoát hiểm và trang bị bình chữa cháy.',
    proposedSolutions: [
      'Cắt bỏ 100% lồng sắt chuồng cọp, mở lối thoát hiểm khẩn cấp lên mái hoặc ban công.',
      'Lắp đặt các "Điểm chữa cháy công cộng" và "Tổ liên gia an toàn PCCC" ngay tại mỗi khúc quanh ngõ nhỏ.',
      'Tập huấn thực hành chữa cháy định kỳ vào tối Chủ nhật cho công nhân thuê trọ.',
    ],
    caseStudy:
      'Mô hình ngõ 84: 12 chủ nhà trọ đã chung tay góp kinh phí lắp đặt hệ thống chuông báo cháy liên động và 20 bình bọt CO2 dọc hành lang ngõ.',
  },
  {
    id: 'giao-duc-y-te',
    title: 'Áp lực tiếp cận trường công lập & Phúc lợi an sinh cho con em di cư',
    severity: 'Cao',
    affectedGroup: 'Con em công nhân diện tạm trú (KT3, KT4), trẻ em mầm non',
    description:
      'Tốc độ tăng dân số cơ học quá nhanh khiến các trường mầm non và tiểu học công lập trên địa bàn chịu tải lớn về sĩ số lớp học. Quy trình hoàn thiện thủ tục tạm trú để xét tuyển vào trường công đôi khi còn phức tạp với người lao động bận rộn.',
    currentReality:
      'Nhiều cặp vợ chồng công nhân phải gửi con về quê cho ông bà nuôi dưỡng vì không kham nổi học phí tại các cơ sở tư thục, dẫn đến cảnh gia đình chia cắt nhiều năm.',
    proposedSolutions: [
      'Đơn giản hóa và số hóa thủ tục xác nhận cư trú qua ứng dụng VNeID ngay tại nhà máy và xóm trọ.',
      'Mở rộng các nhóm trẻ gia đình được cấp phép với sự trợ giá một phần từ công đoàn KCN.',
      'Các câu lạc bộ gia sư sinh viên tình nguyện dạy bổ túc văn hóa miễn phí vào cuối tuần tại Nhà văn hóa tổ dân phố.',
    ],
    caseStudy:
      'Dự án "Lớp học yêu thương cuối tuần": Do nhóm sinh viên trường Đại học Thủ đô phối hợp với Đoàn thanh niên phường Phúc Đồng tổ chức dạy kèm cho hơn 45 em nhỏ con công nhân.',
  },
  {
    id: 'khong-gian-sinh-hoat',
    title: 'Thiếu hụt không gian công cộng & Áp lực bê tông hóa',
    severity: 'Trung bình',
    affectedGroup: 'Toàn thể cư dân (người già cần nơi tập dưỡng sinh, thanh niên cần sân thể thao)',
    description:
      'Các ao làng, bãi đất trống nông nghiệp trước kia nay đã được quy hoạch xây dựng nhà ở, phân lô. Không gian cây xanh tự nhiên bị thu hẹp đáng kể, tiếng ồn đô thị và bụi mịn gia tăng.',
    currentReality:
      'Sân đình Mai Phúc và một số nhà văn hóa tổ dân phố trở thành điểm tựa sinh hoạt hiếm hoi nhưng diện tích còn hạn chế so với quy mô dân số trên 15.000 người.',
    proposedSolutions: [
      'Cải tạo các góc đất xen kẹt thành công viên bỏ túi (Pocket Park) và sân chơi thiếu nhi lót thảm cao su an toàn.',
      'Xã hội hóa các điểm đặt dụng cụ thể dục ngoài trời dọc các tuyến mương hở đã được cống hóa.',
      'Khuyến khích các khu đô thị mới mở rộng cửa tiếp cận không gian xanh cho cư dân xung quanh.',
    ],
    caseStudy:
      'Sáng kiến "Vườn xanh góc phố": Người dân ngõ Mai Phúc đã tự nguyện dọn dẹp một bãi rác tự phát 120m2 thành vườn hoa và bàn bóng bàn ngoài trời.',
  },
  {
    id: 'bao-ton-di-san',
    title: 'Bảo tồn hồn cốt di sản trước nguy cơ phai nhạt căn tính làng quê',
    severity: 'Đặc thù',
    affectedGroup: 'Cư dân bản địa, thế hệ trẻ và nhà nghiên cứu văn hóa',
    description:
      'Lối sống xóm giềng truyền thống có nguy cơ bị thay thế bởi sự khép kín, "đèn nhà ai nhà nấy rạng" của lối sống thị dân mới. Ký ức về các nghề thủ công cổ, thần tích đình làng và hương ước xưa chỉ còn trong trí nhớ của các cụ già trên 80 tuổi.',
    currentReality:
      'Rất cần các dự án ghi chép nhân học, số hóa dữ liệu lịch sử truyền miệng (Oral History) và xây dựng bảo tàng số cộng đồng trước khi thế hệ bô lão qua đời.',
    proposedSolutions: [
      'Xây dựng chuyên trang số hóa di sản và ký ức cộng đồng Phúc Đồng phục vụ tra cứu mở.',
      'Đưa chuyên đề lịch sử địa phương vào các buổi ngoại khóa của học sinh trường THCS Phúc Đồng.',
      'Tổ chức "Ngày hội đại đoàn kết - Ngày hội văn hóa làng" gắn kết các thế hệ cư dân và cộng đồng nhập cư.',
    ],
    caseStudy:
      'Dự án Số hóa Thần tích - Sắc phong Đình Mai Phúc với sự hỗ trợ của Viện Nghiên cứu Hán Nôm và sự tham gia của thanh niên phường.',
  },
];

export const INITIAL_COMMUNITY_VOICES: CommunityVoiceNote[] = [
  {
    id: 'voice-1',
    author: 'Cụ Đỗ Văn Cẩn',
    roleType: 'Cư dân bản địa',
    content:
      'Làng mình xưa nghèo nhưng thanh bình, nay phố xá đông vui tấp nập. Tôi mong bà con dù gốc gác ở đâu về đây cũng giữ gìn nếp ăn ở hiền lành, đừng vứt rác bừa bãi ra ngõ.',
    createdAt: 'Hôm qua lúc 16:30',
    likes: 24,
  },
  {
    id: 'voice-2',
    author: 'Chị Đặng Thị Hoa',
    roleType: 'Người di cư',
    content:
      'Mỗi lần về quê ăn Tết xong ra lại Hà Nội, bước chân vào đầu ngõ Phúc Đồng nghe các cô chào: "Hoa đã lên rồi đấy à cháu!", thấy lòng ấm áp lạ lùng như về lại nhà mình.',
    createdAt: '3 ngày trước',
    likes: 38,
  },
  {
    id: 'voice-3',
    author: 'Bạn Hoàng Mai Anh',
    roleType: 'Sinh viên / Nhà nghiên cứu',
    content:
      'Nhóm sinh viên Nhân học chúng mình vừa hoàn thành đợt điền dã tại ngõ 84 Phúc Đồng. Sự cởi mở của bà con bản địa và nghị lực của các anh chị công nhân để lại ấn tượng vô cùng sâu sắc!',
    createdAt: '5 ngày trước',
    likes: 19,
  },
  {
    id: 'voice-4',
    author: 'Bác Trần Văn Thao',
    roleType: 'Cư dân bản địa',
    content:
      'Bà con chú ý kiểm tra ngắt bình nóng lạnh và bếp từ trước khi đi làm nhé. An toàn cho mình là an toàn cho cả xóm ngõ.',
    createdAt: '1 tuần trước',
    likes: 31,
  },
];

export const AI_SUGGESTED_PROMPTS = [
  {
    category: 'Lịch sử & Di tích',
    text: 'Đình và Chùa Mai Phúc có lịch sử thế nào, lễ hội truyền thống diễn ra vào ngày nào trong năm?',
  },
  {
    category: 'Đời sống người di cư',
    text: 'Cuộc sống sinh hoạt của công nhân trong các xóm trọ Phúc Đồng có những nét đặc thù gì?',
  },
  {
    category: 'Đô thị hóa',
    text: 'Sự chuyển đổi từ xã Phúc Đồng (Gia Lâm) lên phường (Long Biên) năm 2003 đã thay đổi cuộc sống người dân ra sao?',
  },
  {
    category: 'Giao thoa văn hóa',
    text: 'Cư dân bản địa và người nhập cư tại Phúc Đồng hòa nhập với nhau qua những phương diện nào?',
  },
  {
    category: 'Thách thức & Giải pháp',
    text: 'Vấn đề an toàn PCCC và môi trường tại các dãy trọ ngõ hẹp ở Phúc Đồng cần những giải pháp gì?',
  },
  {
    category: 'Góc nhìn Nhân học',
    text: 'Tại sao mô hình "Làng trong phố" ở Phúc Đồng lại là trường hợp nghiên cứu văn hóa đô thị tiêu biểu?',
  },
];
