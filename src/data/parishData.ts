import { Ministry, DonorRecord, BankAccount, ParishMilestone } from '../types';

export const PARISH_INFO = {
  name: 'Giáo Xứ Bình An',
  diocese: 'Tổng Giáo Phận Sài Gòn',
  address: '2287 Đường Phạm Thế Hiển, Phường 6, Quận 8, TP. Hồ Chí Minh',
  phone: '(028) 3850 1234',
  hotline: '0908 123 456 (Ban Hành Giáo)',
  email: 'giaoxubinhan.saigon@gmail.com',
  website: 'giaoxubinhan.org',
  priestName: 'Linh mục Chánh xứ Giuse Nguyễn Văn Hiền',
  foundedYear: 1952,
  currentParishioners: '4,500+ giáo dân',
  massSchedule: [
    { days: 'Ngày thường (Thứ 2 - Thứ 7)', times: '05:00 & 17:30' },
    { days: 'Chúa Nhật', times: '05:30, 07:00 (Thiếu nhi), 16:30 & 18:30' },
  ],
  officeHours: 'Thứ Ba đến Chúa Nhật: Sáng 08:00 - 11:30 | Chiều 14:30 - 17:30 (Thứ Hai nghỉ)',
};

export const BUILDING_FUND_STATS = {
  targetAmount: 15000000000, // 15 billion VND
  raisedAmount: 10250000000, // 10.25 billion VND
  donorCount: 1842,
  startDate: '15/08/2025',
  projectedEnd: '25/12/2027',
  groundbreakingDate: '01/11/2026',
};

export const BANK_ACCOUNTS: BankAccount[] = [
  {
    bankName: 'Ngân hàng TMCP Ngoại Thương Việt Nam (Vietcombank)',
    shortName: 'Vietcombank',
    accountNumber: '1022889988',
    accountHolder: 'GIAO XU BINH AN - TONG GIAO PHAN',
    branch: 'Chi nhánh Nam Sài Gòn',
    bin: '970436',
  },
  {
    bankName: 'Ngân hàng TMCP Quân Đội (MB Bank)',
    shortName: 'MB Bank',
    accountNumber: '8866112233',
    accountHolder: 'GIAO XU BINH AN - XAY DUNG',
    branch: 'Chi nhánh Chợ Lớn',
    bin: '970422',
  },
];

export const PARISH_MINISTRIES: Ministry[] = [
  {
    id: 'charity',
    title: 'Quỹ Bác Ái Caritas',
    subtitle: 'Nâng đỡ người nghèo & bệnh nhân neo đơn',
    description: 'Chăm lo cho hơn 120 hộ gia đình khó khăn, phát thuốc miễn phí định kỳ hàng tháng, bếp ăn tình thương cho người già cơ nhỡ và hỗ trợ mai táng cho người qua đời cô độc.',
    targetAmount: 300000000,
    raisedAmount: 215000000,
    donorCount: 342,
    iconName: 'HeartHandshake',
    image: '/src/assets/images/parish_charity_ministry_1791639836974.jpg',
    colorScheme: 'emerald',
    tags: ['Bác ái', 'Bếp ăn', 'Thuốc men'],
  },
  {
    id: 'youth',
    title: 'Xứ Đoàn Thiếu Nhi Thánh Thể',
    subtitle: 'Nuôi dưỡng đức tin và nhân bản cho 600 thiếu nhi',
    description: 'Trang trải giáo lý cụ, tổ chức trại hè Sa mạc Huấn luyện Huynh trưởng, trao thưởng học tập giáo lý và tổ chức các ngày lễ Bổn mạng Thiếu nhi tràn đầy niềm vui đức tin.',
    targetAmount: 200000000,
    raisedAmount: 148000000,
    donorCount: 215,
    iconName: 'Users',
    image: '/src/assets/images/parish_youth_ministry_1791639848212.jpg',
    colorScheme: 'sky',
    tags: ['Giáo lý', 'Thiếu nhi', 'Sa Mạc'],
  },
  {
    id: 'scholarship',
    title: 'Quỹ Khuyến Học Tôma Thiện',
    subtitle: 'Tiếp sức đến trường cho học sinh nghèo hiếu học',
    description: 'Trao 50 suất học bổng mỗi niên khóa cho học sinh, sinh viên nghèo vượt khó không phân biệt tôn giáo, hỗ trợ sách vở và học phí đại học để các em xây dựng tương lai.',
    targetAmount: 150000000,
    raisedAmount: 112000000,
    donorCount: 168,
    iconName: 'GraduationCap',
    colorScheme: 'amber',
    tags: ['Học bổng', 'Giáo dục', 'Tương lai'],
  },
  {
    id: 'choir',
    title: 'Ban Phụng Vụ & Thánh Nhạc',
    subtitle: 'Tôn vinh Thiên Chúa qua lời ca tiếng đàn trang nghiêm',
    description: 'Bảo dưỡng dàn đại phong cầm organ, trang bị hệ thống âm thanh chuyên dụng cho thánh lễ, may đồng phục áo lễ ca đoàn và in ấn tập hát phụng vụ cho cộng đoàn.',
    targetAmount: 120000000,
    raisedAmount: 89000000,
    donorCount: 124,
    iconName: 'Music',
    colorScheme: 'rose',
    tags: ['Ca đoàn', 'Âm thanh', 'Thánh nhạc'],
  },
];

export const BUILDING_REASONS = [
  {
    title: 'Tình Trạng Xuống Cấp Nghiêm Trọng',
    icon: 'AlertTriangle',
    subtitle: 'Nguy cơ an toàn mùa mưa bão',
    description: 'Ngôi nhà thờ hiện tại xây từ năm 1952 (hơn 70 năm). Kết cấu xà gồ gỗ đã mục ruỗng do mối mọt, mái ngói nứt nẻ gây thấm dột lớn lên cung thánh và hàng ghế giáo dân mỗi khi trời mưa lớn.',
    stat: '74 năm',
    statLabel: 'Tuổi thọ công trình cũ',
  },
  {
    title: 'Quá Tải Không Gian Sinh Hoạt',
    icon: 'Maximize2',
    subtitle: 'Số lượng tín hữu tăng hơn 5 lần',
    description: 'Lúc thành lập giáo xứ chỉ có 800 giáo dân; hiện nay đã vượt 4,500 người. Các thánh lễ Chúa Nhật hàng trăm người phải đứng ngoài sân nắng mưa; 600 em thiếu nhi phải mượn hành lang làm lớp giáo lý.',
    stat: '5.6x',
    statLabel: 'Gia tăng dân số giáo xứ',
  },
  {
    title: 'Di Sản Đức Tin Cho Ngàn Đời Sau',
    icon: 'ShieldCheck',
    subtitle: 'Công trình kiến trúc tôn nghiêm bền vững',
    description: 'Thánh đường mới được thiết kế bê tông cốt thép kiên cố với niên hạn trên 100 năm, mang phong cách kiến trúc Á Đông kết hợp Gothic thanh thoát, là biểu tượng tình hiệp thông và đức tin kiên trung.',
    stat: '100+ năm',
    statLabel: 'Tuổi thọ thiết kế mới',
  },
  {
    title: 'Cơ Sở Phụng Vụ Tiếp Cận Toàn Diện',
    icon: 'HeartHandshake',
    subtitle: 'Thân thiện với người cao tuổi và khuyết tật',
    description: 'Quy hoạch đồng bộ gồm ram dốc xe lăn, hệ thống âm thanh hỗ trợ người khiếm thính, 12 phòng học giáo lý hiện đại, hội trường đa năng phục vụ sinh hoạt các đoàn thể và mục vụ bác ái.',
    stat: '12 phòng',
    statLabel: 'Lớp giáo lý & hội trường',
  },
];

export const PARISH_MILESTONES: ParishMilestone[] = [
  {
    step: 1,
    title: 'Khảo sát địa chất & Hoàn tất bản vẽ thiết kế',
    targetDate: '10/2025',
    description: 'Đã hoàn tất giấy phép xây dựng từ Tòa Giám Mục và cơ quan chức năng, hoàn thành thiết kế kết cấu 3D.',
    status: 'completed',
    costEstimate: 850000000,
  },
  {
    step: 2,
    title: 'Ép cọc bê tông & Đổ móng kiên cố',
    targetDate: '11/2026',
    description: 'Khoan 142 cọc nhồi sâu 38 mét, thi công hệ giằng móng và sàn tầng hầm sinh hoạt giáo xứ.',
    status: 'in_progress',
    costEstimate: 4500000000,
  },
  {
    step: 3,
    title: 'Xây dựng kết cấu thân, mái & Tháp chuông',
    targetDate: '08/2027',
    description: 'Đổ bê tông cột vòm thánh đường cao 24 mét, dựng tháp chuông 32 mét và lắp khung vì kèo thép chống rỉ.',
    status: 'upcoming',
    costEstimate: 6200000000,
  },
  {
    step: 4,
    title: 'Hoàn thiện Cung thánh, Kính màu & Nội thất',
    targetDate: '12/2027',
    description: 'Lát đá cẩm thạch Cung Thánh, đóng 120 dãy ghế gỗ sồi, lắp kính màu nghệ thuật và hệ thống âm thanh chuyên dụng.',
    status: 'upcoming',
    costEstimate: 3450000000,
  },
];

export const RECENT_DONORS: DonorRecord[] = [
  {
    id: 'd1',
    donorName: 'Gia đình Giuse Trần Đình Nam',
    amount: 50000000,
    date: '10/10/2026',
    ministry: 'Quỹ Kiến Thiết Nhà Thờ',
    message: 'Xin Chúa chúc lành cho công trình xây dựng nhà Chúa sớm hoàn thành.',
  },
  {
    id: 'd2',
    donorName: 'Ân nhân Ẩn Danh (Giáo họ Têrêsa)',
    amount: 10000000,
    date: '10/10/2026',
    ministry: 'Quỹ Kiến Thiết Nhà Thờ',
    message: 'Tạ ơn Chúa và Mẹ Maria gìn giữ gia đình bình an.',
    isAnonymous: true,
  },
  {
    id: 'd3',
    donorName: 'Cụ Maria Lê Thị Mai (Khu 2)',
    amount: 5000000,
    date: '09/10/2026',
    ministry: 'Quỹ Bác Ái Caritas',
    message: 'Kính gởi chút quà cho người nghèo và neo đơn.',
  },
  {
    id: 'd4',
    donorName: 'Ca đoàn Cêcilia Bình An',
    amount: 20000000,
    date: '08/10/2026',
    ministry: 'Quỹ Kiến Thiết Nhà Thờ',
    message: 'Hiệp lòng cùng cha xứ và cộng đoàn giáo xứ.',
  },
  {
    id: 'd5',
    donorName: 'Gia đình Phêrô Vũ Minh Tuấn',
    amount: 15000000,
    date: '08/10/2026',
    ministry: 'Xứ Đoàn Thiếu Nhi',
    message: 'Góp phần nuôi dưỡng các em thiếu nhi học giáo lý.',
  },
  {
    id: 'd6',
    donorName: 'Chị Anna Nguyễn Hoàng Vy',
    amount: 2000000,
    date: '07/10/2026',
    ministry: 'Quỹ Khuyến Học Tôma Thiện',
    message: 'Ủng hộ các bạn học sinh nghèo vượt khó học giỏi.',
  },
  {
    id: 'd7',
    donorName: 'Một Gia Đình Hải Ngoại (Hoa Kỳ)',
    amount: 100000000,
    date: '06/10/2026',
    ministry: 'Quỹ Kiến Thiết Nhà Thờ',
    message: 'Con xa quê hương luôn hướng về xứ mẹ thân yêu.',
  },
  {
    id: 'd8',
    donorName: 'Gia đình Antôn Đặng Hữu Trí',
    amount: 3000000,
    date: '05/10/2026',
    ministry: 'Quỹ Kiến Thiết Nhà Thờ',
    message: 'Cầu bình an cho ông bà cha mẹ.',
  },
];

export const FAQS = [
  {
    q: 'Tiền đóng góp xây dựng có được báo cáo minh bạch không?',
    a: 'Ban Hành Giáo và Ban Tài chính Giáo xứ công khai sao kê thu - chi vào mỗi Chúa Nhật đầu tháng trên Bảng tin Giáo xứ, trong tờ tin mục vụ hàng tuần và cập nhật trực tiếp trên trang điện tử này. Mọi khoản đóng góp đều được ghi sổ vàng và lưu trữ hồ sơ cẩn trọng.',
  },
  {
    q: 'Tôi ở xa hoặc ở nước ngoài thì đóng góp như thế nào?',
    a: 'Quý ân nhân có thể chuyển khoản trực tiếp qua số tài khoản Vietcombank hoặc MB Bank chính thức của Giáo xứ (chủ tài khoản: GIAO XU BINH AN). Đối với kiều bào hải ngoại, quý vị có thể chuyển tiền qua dịch vụ ngân hàng quốc tế (SWIFT Code: BFTVVNVX) hoặc nhờ người thân tại Việt Nam chuyển giúp.',
  },
  {
    q: 'Cú pháp chuyển khoản chuẩn là gì để giáo xứ ghi nhận?',
    a: 'Cú pháp: [Tên Quỹ] [Họ Tên / Tên Thánh] [Số Điện Thoại]. Ví dụ: "KIENTHIET Maria Tran Thi Lan 0908123456" hoặc "CARITAS Giuse Nguyen Van An". Nếu muốn ẩn danh, xin ghi: "KIENTHIET An Nhan An Danh".',
  },
  {
    q: 'Giáo xứ có tổ chức dâng lễ tạ ơn cho quý ân nhân không?',
    a: 'Mỗi tuần vào Thánh lễ thứ Bảy (17:30) và Thánh lễ đầu tháng, Cha Chánh xứ và toàn thể cộng đoàn đều hiệp dâng thánh lễ cầu nguyện đặc biệt cho quý ân nhân còn sống được bình an, và quý ân nhân đã qua đời sớm hưởng nhan thánh Chúa.',
  },
];
