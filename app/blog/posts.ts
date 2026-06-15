export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "steps"; items: string[] }
  | { type: "cta" };

export type Post = {
  slug: string;
  title: string; // <h1> + <title>
  description: string; // meta description
  school: string; // chip label
  date: string; // ISO
  readingTime: string;
  keywords: string[];
  blocks: Block[];
};

// Khối nội dung dùng chung ở cuối mỗi bài (mẹo + CTA)
function tips(school: string): Block[] {
  return [
    { type: "h2", text: "Mẹo tăng tỉ lệ đăng ký thành công" },
    {
      type: "ul",
      items: [
        "Chuẩn bị sẵn mã môn và danh sách lớp muốn đăng ký từ trước.",
        "Đăng nhập sớm và giữ phiên để không bị văng đúng giờ vàng.",
        "Dùng mạng ổn định; nếu nghẽn, để công cụ tự động thử lại liên tục.",
        "Có phương án dự phòng: thêm 1–2 lớp thay thế cho mỗi môn.",
      ],
    },
    { type: "cta" },
    {
      type: "p",
      text: `Auto ĐKMH All-in-One hỗ trợ ${school} cùng nhiều trường khác. Cài đặt miễn phí từ Chrome Web Store và bật chế độ tự động để không còn lo nghẽn mạng hay hết slot.`,
    },
  ];
}

function howTo(school: string): Block[] {
  return [
    {
      type: "h2",
      text: `Cách đăng ký môn học tự động ở ${school} với Auto ĐKMH`,
    },
    {
      type: "steps",
      items: [
        "Cài tiện ích Auto ĐKMH All-in-One từ Chrome Web Store (miễn phí).",
        "Đăng nhập tài khoản sinh viên của trường — công cụ tự lưu phiên.",
        "Nhập sẵn danh sách mã môn / lớp tín chỉ bạn muốn đăng ký.",
        "Bật chế độ tự động. Đến giờ mở cổng, công cụ tự giải CAPTCHA và gửi yêu cầu đăng ký với tốc độ cao.",
        "Theo dõi kết quả: môn nào thành công sẽ được báo ngay, môn hết slot sẽ tự thử lại khi có chỗ trống.",
      ],
    },
  ];
}

export const POSTS: Post[] = [
  {
    slug: "dang-ky-mon-hoc-tu-dong-vnua",
    title: "Đăng ký môn học tự động ở VNUA: hướng dẫn không lo nghẽn mạng",
    description:
      "Hướng dẫn sinh viên Học viện Nông nghiệp Việt Nam (VNUA) đăng ký môn học tự động, giải CAPTCHA và canh giờ mở cổng bằng tiện ích Auto ĐKMH.",
    school: "VNUA",
    date: "2026-06-02",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học VNUA",
      "auto đkmh vnua",
      "đăng ký tín chỉ vnua tự động",
    ],
    blocks: [
      {
        type: "p",
        text: "Mỗi kỳ đăng ký tín chỉ ở VNUA, hàng nghìn sinh viên cùng truy cập một thời điểm khiến hệ thống quá tải, nghẽn mạng và rất dễ hết slot những môn “hot”. Bài viết này hướng dẫn bạn cách đăng ký môn học tự động ở VNUA để tăng tỉ lệ thành công.",
      },
      { type: "h2", text: "Vì sao đăng ký môn học ở VNUA hay nghẽn?" },
      {
        type: "ul",
        items: [
          "Số lượng sinh viên truy cập cùng lúc rất lớn ngay khi cổng mở.",
          "Phải nhập CAPTCHA thủ công làm chậm thao tác, dễ mất slot.",
          "Hệ thống dễ văng phiên đăng nhập khi quá tải.",
        ],
      },
      ...howTo("VNUA"),
      ...tips("VNUA"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-ptit",
    title: "Đăng ký môn học tự động ở PTIT: mẹo vượt CAPTCHA và giữ phiên",
    description:
      "Sinh viên Học viện Công nghệ Bưu chính Viễn thông (PTIT) đăng ký tín chỉ tự động, tự giải CAPTCHA, giữ phiên đăng nhập và canh giờ mở cổng với Auto ĐKMH.",
    school: "PTIT",
    date: "2026-06-03",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học PTIT",
      "auto đkmh ptit",
      "đăng ký tín chỉ ptit tự động",
    ],
    blocks: [
      {
        type: "p",
        text: "Sinh viên PTIT thường gặp cảnh “F5 mỏi tay” mỗi đợt đăng ký tín chỉ: trang tải chậm, CAPTCHA nhập tay không kịp và slot môn học bay rất nhanh. Dưới đây là cách đăng ký môn học tự động ở PTIT giúp bạn nhẹ nhàng hơn.",
      },
      { type: "h2", text: "Những khó khăn khi đăng ký tín chỉ ở PTIT" },
      {
        type: "ul",
        items: [
          "Cổng đăng ký quá tải vào đúng khung giờ mở.",
          "CAPTCHA nhập tay khiến mỗi lần gửi yêu cầu mất vài giây quý giá.",
          "Mất phiên đăng nhập phải đăng nhập lại nhiều lần.",
        ],
      },
      ...howTo("PTIT"),
      ...tips("PTIT"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-hcmiu",
    title: "Đăng ký môn học tự động ở HCMIU (ĐH Quốc tế): hướng dẫn từ A–Z",
    description:
      "Hướng dẫn sinh viên Trường Đại học Quốc tế HCMIU đăng ký môn học tự động, giải CAPTCHA và đăng ký hàng loạt nhanh chóng bằng tiện ích Auto ĐKMH.",
    school: "HCMIU",
    date: "2026-06-04",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học HCMIU",
      "auto đkmh hcmiu",
      "đăng ký tín chỉ đại học quốc tế",
    ],
    blocks: [
      {
        type: "p",
        text: "Ở HCMIU, việc canh đúng thời điểm mở cổng và thao tác thật nhanh quyết định bạn có giành được lớp mong muốn hay không. Bài viết hướng dẫn cách đăng ký môn học tự động ở HCMIU để bạn không phải vừa học vừa lo canh giờ.",
      },
      { type: "h2", text: "Đăng ký môn ở HCMIU khó ở đâu?" },
      {
        type: "ul",
        items: [
          "Số lượng chỗ trong mỗi lớp giới hạn, hết rất nhanh.",
          "Phải thao tác chính xác trong vài giây đầu khi cổng mở.",
          "Nhập CAPTCHA thủ công làm chậm tiến độ.",
        ],
      },
      ...howTo("HCMIU"),
      ...tips("HCMIU"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-hanu",
    title: "Đăng ký môn học tự động ở HANU: cách giành lớp không lo hết slot",
    description:
      "Sinh viên Đại học Hà Nội (HANU) đăng ký tín chỉ tự động, tự đăng nhập, giải CAPTCHA và canh giờ mở cổng bằng Auto ĐKMH để tăng tỉ lệ thành công.",
    school: "HANU",
    date: "2026-06-05",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học HANU",
      "auto đkmh hanu",
      "đăng ký tín chỉ đại học hà nội",
    ],
    blocks: [
      {
        type: "p",
        text: "Đăng ký tín chỉ ở HANU luôn là cuộc đua tốc độ. Chỉ chậm vài giây là lớp bạn muốn đã đầy. Bài viết này giúp bạn đăng ký môn học tự động ở HANU một cách bài bản.",
      },
      { type: "h2", text: "Vì sao nên đăng ký tự động ở HANU?" },
      {
        type: "ul",
        items: [
          "Tốc độ gửi yêu cầu nhanh hơn nhiều so với thao tác tay.",
          "Không bỏ lỡ thời điểm mở cổng nhờ canh giờ máy chủ.",
          "Tự động thử lại khi nghẽn thay vì F5 liên tục.",
        ],
      },
      ...howTo("HANU"),
      ...tips("HANU"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-ftu",
    title: "Đăng ký môn học tự động ở FTU (Ngoại thương): hướng dẫn chi tiết",
    description:
      "Hướng dẫn sinh viên Đại học Ngoại thương (FTU) đăng ký môn học tự động, giải CAPTCHA, giữ phiên và đăng ký hàng loạt với tiện ích Auto ĐKMH.",
    school: "FTU",
    date: "2026-06-06",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học FTU",
      "auto đkmh ftu",
      "đăng ký tín chỉ ngoại thương",
    ],
    blocks: [
      {
        type: "p",
        text: "Với sinh viên FTU, các lớp tự chọn và môn của giảng viên “hot” thường hết chỗ chỉ sau ít phút. Cùng tìm hiểu cách đăng ký môn học tự động ở FTU để chủ động hơn mỗi kỳ.",
      },
      { type: "h2", text: "Khó khăn thường gặp khi đăng ký ở FTU" },
      {
        type: "ul",
        items: [
          "Lớp của giảng viên được yêu thích hết slot cực nhanh.",
          "Cổng đăng ký nghẽn vào giờ cao điểm.",
          "Thao tác tay không theo kịp tốc độ tranh slot.",
        ],
      },
      ...howTo("FTU"),
      ...tips("FTU"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-hcmuaf",
    title:
      "Đăng ký môn học tự động ở HCMUAF (Nông Lâm TP.HCM): hướng dẫn chi tiết",
    description:
      "Hướng dẫn sinh viên Đại học Nông Lâm TP.HCM (HCMUAF) đăng ký môn học tự động, giải CAPTCHA, giữ phiên và canh giờ mở cổng bằng tiện ích Auto ĐKMH.",
    school: "HCMUAF",
    date: "2026-06-09",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học HCMUAF",
      "auto đkmh nông lâm",
      "đăng ký tín chỉ nông lâm tphcm",
    ],
    blocks: [
      {
        type: "p",
        text: "Đầu mỗi học kỳ, sinh viên Đại học Nông Lâm TP.HCM (HCMUAF) lại bước vào cuộc đua đăng ký tín chỉ: hệ thống quá tải, CAPTCHA nhập tay không kịp và các lớp đẹp hết slot rất nhanh. Bài viết hướng dẫn cách đăng ký môn học tự động ở HCMUAF để tăng tỉ lệ thành công.",
      },
      { type: "h2", text: "Vì sao đăng ký môn học ở HCMUAF hay nghẽn?" },
      {
        type: "ul",
        items: [
          "Lượng sinh viên truy cập cùng lúc rất lớn ngay khi cổng mở.",
          "Nhập CAPTCHA thủ công làm chậm mỗi lần gửi yêu cầu.",
          "Hệ thống dễ văng phiên đăng nhập khi quá tải.",
        ],
      },
      ...howTo("HCMUAF"),
      ...tips("HCMUAF"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-sgu",
    title: "Đăng ký môn học tự động ở SGU (ĐH Sài Gòn): không lo hết slot",
    description:
      "Sinh viên Đại học Sài Gòn (SGU) đăng ký tín chỉ tự động, tự đăng nhập, giải CAPTCHA và canh giờ mở cổng bằng Auto ĐKMH để tăng tỉ lệ giành lớp.",
    school: "SGU",
    date: "2026-06-10",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học SGU",
      "auto đkmh sgu",
      "đăng ký tín chỉ đại học sài gòn",
    ],
    blocks: [
      {
        type: "p",
        text: "Đăng ký tín chỉ ở Đại học Sài Gòn (SGU) luôn là cuộc đua tốc độ — chỉ chậm vài giây là lớp bạn muốn đã đầy. Bài viết này giúp bạn đăng ký môn học tự động ở SGU một cách bài bản.",
      },
      { type: "h2", text: "Khó khăn thường gặp khi đăng ký ở SGU" },
      {
        type: "ul",
        items: [
          "Cổng đăng ký nghẽn vào đúng khung giờ mở.",
          "Thao tác tay không theo kịp tốc độ tranh slot.",
          "Phải đăng nhập lại nhiều lần khi mất phiên.",
        ],
      },
      ...howTo("SGU"),
      ...tips("SGU"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-stu",
    title:
      "Đăng ký môn học tự động ở STU (ĐH Công nghệ Sài Gòn): hướng dẫn A–Z",
    description:
      "Hướng dẫn sinh viên Đại học Công nghệ Sài Gòn (STU) đăng ký môn học tự động, vượt CAPTCHA, giữ phiên và đăng ký hàng loạt nhanh chóng với Auto ĐKMH.",
    school: "STU",
    date: "2026-06-11",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học STU",
      "auto đkmh stu",
      "đăng ký tín chỉ công nghệ sài gòn",
    ],
    blocks: [
      {
        type: "p",
        text: "Với sinh viên Đại học Công nghệ Sài Gòn (STU), việc canh đúng thời điểm mở cổng và thao tác thật nhanh quyết định bạn có giành được lớp mong muốn hay không. Cùng tìm hiểu cách đăng ký môn học tự động ở STU để không phải vừa học vừa lo canh giờ.",
      },
      { type: "h2", text: "Đăng ký môn ở STU khó ở đâu?" },
      {
        type: "ul",
        items: [
          "Số chỗ mỗi lớp giới hạn, hết rất nhanh khi cổng mở.",
          "Nhập CAPTCHA thủ công làm chậm tiến độ đăng ký.",
          "Mạng nghẽn khiến phải F5 liên tục, dễ bỏ lỡ slot.",
        ],
      },
      ...howTo("STU"),
      ...tips("STU"),
    ],
  },
  {
    slug: "meo-dang-ky-tin-chi-khong-bi-nghen-mang",
    title: "7 mẹo đăng ký tín chỉ không bị nghẽn mạng cho sinh viên",
    description:
      "Tổng hợp mẹo giúp sinh viên đăng ký tín chỉ không lo nghẽn mạng, không hết slot: chuẩn bị danh sách môn, giữ phiên, canh giờ và dùng công cụ tự động.",
    school: "Mẹo chung",
    date: "2026-06-08",
    readingTime: "5 phút đọc",
    keywords: [
      "mẹo đăng ký tín chỉ",
      "đăng ký môn học không bị nghẽn",
      "cách đăng ký tín chỉ nhanh",
    ],
    blocks: [
      {
        type: "p",
        text: "Đăng ký tín chỉ là “cơn ác mộng” đầu mỗi kỳ của nhiều sinh viên. Dưới đây là 7 mẹo thực tế giúp bạn tăng tỉ lệ giành được lớp mong muốn mà không phải căng thẳng canh giờ.",
      },
      { type: "h2", text: "7 mẹo đăng ký tín chỉ hiệu quả" },
      {
        type: "steps",
        items: [
          "Lập sẵn danh sách môn và mã lớp ưu tiên trước ngày mở cổng.",
          "Chuẩn bị 1–2 lớp dự phòng cho mỗi môn phòng khi hết slot.",
          "Đăng nhập sớm và giữ phiên để không bị văng đúng giờ vàng.",
          "Đồng bộ đồng hồ với giờ máy chủ để canh chính xác thời điểm mở.",
          "Dùng mạng ổn định, hạn chế thiết bị khác chiếm băng thông.",
          "Khi nghẽn, kiên nhẫn để hệ thống tự thử lại thay vì tắt đi mở lại.",
          "Dùng công cụ đăng ký tự động để giải CAPTCHA và gửi yêu cầu nhanh hơn.",
        ],
      },
      {
        type: "h2",
        text: "Đăng ký tự động — giải pháp nhanh và nhẹ nhàng nhất",
      },
      {
        type: "p",
        text: "Thay vì F5 mỏi tay và nhập CAPTCHA thủ công, tiện ích Auto ĐKMH tự đăng nhập, giữ phiên, giải CAPTCHA và gửi yêu cầu đăng ký với tốc độ tính bằng mili-giây ngay khi cổng mở.",
      },
      { type: "cta" },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
