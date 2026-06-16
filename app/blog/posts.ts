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
    title: "Đăng ký môn học tự động VNUA trên daotao.vnua.edu.vn",
    description:
      "Hướng dẫn đăng ký môn học tự động tại Học viện Nông nghiệp Việt Nam (VNUA) trên cổng daotao.vnua.edu.vn: tự đăng nhập, giải CAPTCHA và chốt tín chỉ trong tích tắc.",
    school: "VNUA",
    date: "2026-06-02",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học tự động VNUA",
      "Học viện Nông nghiệp Việt Nam",
      "daotao.vnua.edu.vn",
      "đăng ký tín chỉ VNUA",
      "cổng thông tin đào tạo VNUA",
      "đăng ký môn học VNUA",
      "auto đkmh vnua",
      "auto dkmh vnua",
      "auto đkmh nông nghiệp",
      "auto dkmh nông nghiệp",
      "đăng ký tín chỉ vnua tự động",
    ],
    blocks: [
      {
        type: "p",
        text: "Mỗi đầu học kỳ, gần 29.000 sinh viên Học viện Nông nghiệp Việt Nam (VNUA) cùng đổ vào cổng đào tạo daotao.vnua.edu.vn để giành chỗ trong các học phần. Khi cả 14 khoa mở đăng ký gần như cùng một khung giờ, trang quản lý tín chỉ ASP.NET quen thuộc với form đăng nhập bằng MSSV và mật khẩu thường ì ạch, treo và đẩy không ít bạn ra rìa danh sách lớp.",
      },
      { type: "h2", text: "Vì sao “canh” lớp ở VNUA lại mệt đến vậy?" },
      {
        type: "ul",
        items: [
          "Cổng daotao.vnua.edu.vn chỉ chạy trên trình duyệt web, không có app, nên đúng giờ vàng ai cũng phải ngồi F5 thủ công và dễ bị văng phiên đăng nhập.",
          "Với quy mô gần 29.000 sinh viên và hơn 40 ngành đào tạo, lượng truy cập dồn vào cùng lúc khiến trang tải chậm, báo lỗi hoặc quay vòng liên tục ngay khoảnh khắc mở cổng.",
          "Phải tự gõ lại MSSV, mật khẩu phân biệt hoa thường rồi nhập CAPTCHA mỗi lần vào lại, chỉ chậm vài giây là học phần đã đủ sĩ số.",
          "Mỗi học kỳ buộc đăng ký tối thiểu 15 tín chỉ (từ khóa 58 trở đi), nên trượt một vài học phần “hot” là kéo lệch cả lộ trình học tập chuẩn.",
        ],
      },
      {
        type: "h2",
        text: "Auto ĐKMH chốt tín chỉ trên cổng VNUA như thế nào?",
      },
      {
        type: "p",
        text: "Auto ĐKMH All-in-One đăng nhập sẵn vào daotao.vnua.edu.vn bằng MSSV và mật khẩu của bạn, tự giải CAPTCHA và giữ phiên luôn sống để không bị văng ngay phút mở cổng. Tiện ích đếm ngược chính xác tới mili-giây thời điểm Học viện bật đăng ký, rồi gửi đồng loạt danh sách học phần đã lưu sẵn để chốt đủ tối thiểu 15 tín chỉ chỉ trong tích tắc. Khi cả khoa cùng tranh một lớp, tốc độ ổn định này giúp bạn vào lớp mong muốn trước khi trang kịp báo “đã đủ sĩ số”.",
      },
      ...howTo("VNUA"),
      ...tips("VNUA"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-ptit",
    title: "Auto đăng ký môn học PTIT: vượt ải QLDT trong tích tắc",
    description:
      "Đăng ký môn học tự động cho sinh viên Học viện Công nghệ Bưu chính Viễn thông (PTIT): tự đăng nhập qldt.ptit.edu.vn, giải CAPTCHA và giành lớp tín chỉ chỉ trong mili-giây.",
    school: "PTIT",
    date: "2026-06-03",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học tự động PTIT",
      "Học viện Công nghệ Bưu chính Viễn thông",
      "đăng ký tín chỉ qldt.ptit.edu.vn",
      "tool đăng ký học phần PTIT",
      "auto đăng nhập S-Link PTIT",
      "giành lớp tín chỉ PTIT",
      "đăng ký môn học PTIT",
      "auto đkmh ptit",
      "auto dkmh ptit",
      "auto đkmh bưu chính viễn thông",
      "auto dkmh bưu chính viễn thông",
      "đăng ký tín chỉ ptit tự động",
    ],
    blocks: [
      {
        type: "p",
        text: "Ở PTIT, đăng ký học phần là quy trình hai chặng đặc thù: trước hết bạn nộp phiếu đăng ký học phần trên S-Link (slink.ptit.edu.vn) bằng tài khoản Office365 do Học viện cấp và chờ cố vấn học tập phê duyệt, sau đó mới được vào qldt.ptit.edu.vn để giành lớp theo thời khóa biểu. Chính ở chặng cuối trên cổng QLDT, gần 29.000 sinh viên hai cơ sở Hà Nội và TP.HCM cùng bấm vào một thời điểm, nên một giây chậm tay là mất lớp đẹp. Auto ĐKMH All-in-One sinh ra để lo trọn chặng nước rút này.",
      },
      { type: "h2", text: "Vì sao sinh viên PTIT hay trượt lớp đẹp?" },
      {
        type: "ul",
        items: [
          "Quy trình tách làm hai cổng: phiếu đăng ký nằm trên S-Link chờ cố vấn duyệt, còn việc giành lớp thực tế lại diễn ra trên qldt.ptit.edu.vn, nên dễ lỡ nhịp giữa lúc phiếu được duyệt và lúc QLDT mở đợt.",
          "Khoảng 29.000 sinh viên cả hai cơ sở Hà Nội và TP.HCM đổ dồn vào QLDT đúng giờ mở đăng ký, khiến hệ thống nghẽn, văng phiên và lớp các môn CNTT, An toàn thông tin “cháy” chỉ sau vài chục giây.",
          "Mỗi học kỳ chỉ được đăng ký trong khung tối thiểu khoảng 14 và tối đa 20 tín chỉ (tới 25 với hệ kỹ sư), nên phải canh thật chuẩn để xếp đủ lớp mong muốn mà không bị tràn giới hạn.",
          "CAPTCHA và việc phải đăng nhập lại bằng tài khoản Office365 khi phiên hết hạn làm mất vài giây vàng ngọc đúng lúc tranh lớp gắt nhất.",
        ],
      },
      {
        type: "h2",
        text: "Auto ĐKMH lo gì trên cổng QLDT của PTIT?",
      },
      {
        type: "p",
        text: "Tiện ích tự đăng nhập qldt.ptit.edu.vn, tự điền và giải CAPTCHA, đồng thời giữ phiên luôn “sống” để bạn không bị văng giữa lúc QLDT quá tải đầu đợt. Bạn chỉ cần nạp sẵn danh sách mã lớp học phần đã được duyệt từ phiếu S-Link; khi cổng vừa mở đúng giây, extension bấm đăng ký hàng loạt ở tốc độ mili-giây, nhanh hơn nhiều so với thao tác tay giữa lúc gần 29.000 sinh viên cùng tranh lớp. Nhờ đó bạn yên tâm xếp đủ tín chỉ trong giới hạn cho phép và giành đúng những lớp CNTT, viễn thông mình cần ngay từ lượt đầu.",
      },
      ...howTo("PTIT"),
      ...tips("PTIT"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-hcmiu",
    title: "Đăng ký môn học tự động HCMIU — vượt nghẽn cổng EdusoftWeb",
    description:
      "Auto ĐKMH giúp sinh viên Trường Đại học Quốc tế (ĐHQG-HCM) – HCMIU đăng ký môn học tự động trên edusoftweb.hcmiu.edu.vn: tự đăng nhập, giải CAPTCHA, canh giờ và chốt học phần tức thì.",
    school: "HCMIU",
    date: "2026-06-04",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học tự động HCMIU",
      "đăng ký tín chỉ Trường Đại học Quốc tế",
      "edusoftweb.hcmiu.edu.vn đăng ký môn học",
      "canh giờ đăng ký học phần HCMIU",
      "Trường Đại học Quốc tế ĐHQG-HCM",
      "đăng ký môn học HCMIU",
      "auto đkmh hcmiu",
      "auto dkmh hcmiu",
      "auto đkmh đại học quốc tế",
      "auto dkmh đại học quốc tế",
      "đăng ký tín chỉ đại học quốc tế",
    ],
    blocks: [
      {
        type: "p",
        text: "Ở Trường Đại học Quốc tế (ĐHQG-HCM), từ năm hai trở đi sinh viên tự đăng ký học phần ngay trên cổng EdusoftWeb tại edusoftweb.hcmiu.edu.vn, và đợt mở đăng ký được chia theo từng khóa trong một tuần định sẵn. Với hơn 10.000 sinh viên hệ chính quy cùng các lớp dạy hoàn toàn bằng tiếng Anh thường chỉ có một, hai nhóm, chỉ chậm vài giây là lớp “giờ đẹp” đã kín chỗ. Auto ĐKMH All-in-One giúp bạn không còn phải vừa ôn thi cuối kỳ vừa canh me bấm tay trên EdusoftWeb.",
      },
      { type: "h2", text: "Vì sao giành lớp trên EdusoftWeb của HCMIU lại căng?" },
      {
        type: "ul",
        items: [
          "Cả khóa cùng đổ vào edusoftweb.hcmiu.edu.vn đúng khung giờ mở của khóa mình khiến cổng EdusoftWeb quá tải, đăng nhập chập chờn và trang load mãi không xong đúng phút vàng.",
          "Mỗi học kỳ chính chỉ được đăng ký tối đa 25 và tối thiểu 14 tín chỉ (học kỳ hè tối đa 12), nên ai cũng phải canh gom đủ môn trong mức trần — chậm tay là lệch cả lộ trình.",
          "Sau khi cố vấn học tập duyệt kết quả là không đổi được lớp dù còn thời gian, nên phải chốt đúng nhóm ngay từ lần đăng ký đầu; muốn sửa chỉ còn trông vào tuần add/drop đầu học kỳ.",
          "Phải tự đăng nhập, giải CAPTCHA rồi tick từng học phần thủ công trên EdusoftWeb khi đường truyền đông nghẹt — trễ vài giây là lớp tiếng Anh ít suất đã có người khác giành mất.",
        ],
      },
      {
        type: "h2",
        text: "Auto ĐKMH chạy thế nào trên cổng EdusoftWeb của HCMIU?",
      },
      {
        type: "p",
        text: "Tiện ích chạy ngay trên Chrome cùng cổng edusoftweb.hcmiu.edu.vn nên không cần cài phần mềm lạ: nó tự đăng nhập bằng tài khoản EdusoftWeb của bạn, tự điền và giải CAPTCHA, đồng thời giữ phiên luôn sống để không bị văng trước giờ khóa mình mở. Vì HCMIU mở đăng ký theo lịch chia khóa trong tuần định sẵn, bạn chỉ cần nạp trước danh sách mã môn và nhóm lớp đã chốt rồi đặt giờ; đến đúng thời điểm, công cụ gửi toàn bộ yêu cầu chỉ trong vài mili-giây — kịp chốt đủ môn trong mức 14–25 tín chỉ trước khi lớp đầy. Bạn cũng có thể tận dụng giai đoạn chạy thử (demo) của trường để kiểm tra danh sách môn đã nạp, rồi để tiện ích lo phần tranh suất tốc độ cao khi đăng ký chính thức.",
      },
      ...howTo("HCMIU"),
      ...tips("HCMIU"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-hanu",
    title: "Đăng ký môn học tự động trên qldt.hanu.edu.vn cho sinh viên HANU",
    description:
      "Auto ĐKMH All-in-One giúp sinh viên Trường Đại học Hà Nội (HANU) đăng ký học phần tự động trên cổng qldt.hanu.edu.vn: tự đăng nhập, giải CAPTCHA, canh giờ mở cổng và chốt lớp tức thì.",
    school: "HANU",
    date: "2026-06-05",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học tự động HANU",
      "đăng ký học phần Trường Đại học Hà Nội",
      "qldt.hanu.edu.vn",
      "tool đăng ký tín chỉ HANU",
      "cổng đào tạo pStudent HANU",
      "đăng ký môn học HANU",
      "auto đkmh hanu",
      "auto dkmh hanu",
      "auto đkmh đại học hà nội",
      "auto dkmh đại học hà nội",
      "đăng ký tín chỉ đại học hà nội",
    ],
    blocks: [
      {
        type: "p",
        text: "Tại Trường Đại học Hà Nội (HANU), mọi học phần đều được chốt qua cổng đào tạo qldt.hanu.edu.vn (hệ pStudent), và lịch đăng ký được chia theo từng khóa với khung giờ cố định — thường mở từ 8 giờ sáng. Khi cả khóa cùng đăng nhập vào đúng khung giờ đó, cổng dễ quá tải và lớp “hot” hết slot chỉ sau vài nhịp bấm. Auto ĐKMH All-in-One sinh ra để giành những giây quyết định ấy thay bạn.",
      },
      {
        type: "h2",
        text: "Vì sao giành lớp trên cổng qldt.hanu.edu.vn lại khó đến vậy?",
      },
      {
        type: "ul",
        items: [
          "Lịch đăng ký được phân theo từng khóa với khung giờ cố định (ví dụ mở 8 giờ sáng), nên hàng nghìn sinh viên cùng khóa đổ vào qldt.hanu.edu.vn cùng lúc khiến cổng pStudent giật, lag và đăng nhập liên tục báo lỗi.",
          "Trần tín chỉ siết chặt: tối thiểu 12 tín chỉ mỗi kỳ, còn sinh viên đang bị xếp học lực yếu chỉ được tối đa 14 tín chỉ — chọn sai hay chậm tay là khó kín lịch hoặc lỡ môn tiên quyết.",
          "Mỗi lần thao tác phải nhập lại CAPTCHA và chờ trang tải, trong khi lớp ngoại ngữ và các môn ít slot của HANU hết chỗ chỉ trong tích tắc đầu giờ.",
          "Khoa CNTT còn có lịch và hệ thống riêng (lms.fit.hanu.vn), khiến sinh viên dễ rối giữa nhiều mốc thời gian và đăng nhập rải rác.",
        ],
      },
      {
        type: "h2",
        text: "Auto ĐKMH hoạt động thế nào trên cổng pStudent của HANU?",
      },
      {
        type: "p",
        text: "Tiện ích tự đăng nhập sẵn vào qldt.hanu.edu.vn và tự giải CAPTCHA, đồng thời giữ phiên luôn sống để bạn không bị văng ra ngay trước khung giờ mở của khóa mình. Bạn chỉ cần chọn trước danh sách mã học phần (kể cả phương án dự phòng khi lớp kín), đặt đúng mốc giờ mở cổng, và tiện ích sẽ gửi yêu cầu đăng ký hàng loạt ở tốc độ mili-giây ngay khi cổng vừa mở. Nhờ vậy bạn vừa kịp chốt lớp “hot”, vừa bảo đảm đủ trần tín chỉ theo quy định của HANU mà không phải canh màn hình bấm tay từng nhịp.",
      },
      ...howTo("HANU"),
      ...tips("HANU"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-ftu",
    title: "Đăng ký môn học tự động FTU: thoát cảnh canh giờ FTU GATE",
    description:
      "Tự động đăng ký môn học tại Trường Đại học Ngoại thương (FTU) trên hệ thống FTU GATE: auto đăng nhập, vượt CAPTCHA và giữ chỗ tín chỉ trong tích tắc.",
    school: "FTU",
    date: "2026-06-06",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học tự động FTU",
      "FTU GATE",
      "ftugate.ftu.edu.vn",
      "Trường Đại học Ngoại thương",
      "qldt.ftu.edu.vn",
      "đăng ký môn học FTU",
      "auto đkmh ftu",
      "auto dkmh ftu",
      "auto đkmh ngoại thương",
      "auto dkmh ngoại thương",
      "đăng ký tín chỉ ngoại thương",
    ],
    blocks: [
      {
        type: "p",
        text: "Với sinh viên Trường Đại học Ngoại thương (FTU), mỗi đợt mở đăng ký tín chỉ trên FTU GATE (ftugate.ftu.edu.vn) gần như là một cuộc thi bấm chuột: lớp “hot” như tiếng Anh thương mại hay các môn chuyên ngành Kinh tế đối ngoại thường hết slot chỉ sau vài phút. Lịch mở thường được Phòng Quản lý Đào tạo (qldt.ftu.edu.vn) thông báo theo từng khóa và từng cơ sở, nên ai chậm tay là phải chờ sang đợt đăng ký bổ sung. Auto ĐKMH All-in-One sinh ra để giành lại thế chủ động ngay từ giây đầu tiên cổng mở.",
      },
      { type: "h2", text: "Vì sao giành lớp trên FTU GATE lại căng đến vậy?" },
      {
        type: "ul",
        items: [
          "FTU GATE (ftugate.ftu.edu.vn) thường nghẽn nặng đúng khung giờ mở đăng ký, khi cả khóa 62, 63, 64 cùng F5 liên tục để giành những lớp ít chỉ tiêu.",
          "Lịch mở được Phòng Quản lý Đào tạo (qldt.ftu.edu.vn) chia theo khóa và theo cơ sở (Hà Nội, cơ sở II TP.HCM, CSQN Quảng Ninh), nên bạn buộc phải canh đúng phút giây slot của mình bật.",
          "Đăng nhập bằng tài khoản sinh viên do trường cấp cộng thêm CAPTCHA làm chậm vài giây quý giá; chỉ cần trượt nhịp là lớp mong muốn đã đầy.",
          "Theo quy chế đào tạo của trường (Điều 20), số tín chỉ mỗi kỳ có giới hạn và sau khi hết hạn không được hủy kết quả, nên việc “bấm trúng” ngay từ đợt chính thức là cực kỳ quan trọng.",
        ],
      },
      {
        type: "h2",
        text: "Auto ĐKMH hỗ trợ gì cụ thể trên cổng FTU GATE?",
      },
      {
        type: "p",
        text: "Tiện ích tự động đăng nhập FTU GATE bằng tài khoản đã lưu, đọc và điền CAPTCHA hộ bạn, đồng thời giữ phiên đăng nhập luôn “sống” để không bị văng ra giữa lúc cổng quá tải. Bạn chỉ cần lập sẵn danh sách mã lớp các môn cần đăng ký theo đúng đợt mà Phòng Quản lý Đào tạo công bố cho khóa và cơ sở của mình; khi đồng hồ điểm giờ, công cụ đếm ngược tới đúng thời khắc slot bật và gửi đăng ký hàng loạt ở tốc độ mili giây. Nhờ vậy, bạn nắm chắc các lớp chính ngay từ đợt đăng ký chính thức, hạn chế tối đa cảnh phải trông chờ vào đợt đăng ký bổ sung giai đoạn 2.",
      },
      ...howTo("FTU"),
      ...tips("FTU"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-hcmuaf",
    title: "Đăng ký môn học tự động HCMUAF trên dkmh.hcmuaf.edu.vn",
    description:
      "Đăng ký môn học tự động cho sinh viên Trường Đại học Nông Lâm TP.HCM (HCMUAF) trên cổng dkmh.hcmuaf.edu.vn: tự đăng nhập, canh giờ và giành tín chỉ trong tích tắc.",
    school: "HCMUAF",
    date: "2026-06-09",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học tự động HCMUAF",
      "dkmh.hcmuaf.edu.vn",
      "đăng ký học phần Nông Lâm",
      "Trường Đại học Nông Lâm TP.HCM",
      "đăng ký tín chỉ Nông Lâm tự động",
      "canh giờ đăng ký môn học HCMUAF",
      "đăng ký môn học HCMUAF",
      "auto đkmh hcmuaf",
      "auto dkmh hcmuaf",
      "auto đkmh nông lâm",
      "auto dkmh nông lâm",
      "đăng ký tín chỉ nông lâm tphcm",
    ],
    blocks: [
      {
        type: "p",
        text: "Ở Trường Đại học Nông Lâm TP.HCM, mỗi đầu học kỳ sinh viên phải tự vào cổng dkmh.hcmuaf.edu.vn để giành phần học theo khung giờ mà Phòng Đào tạo công bố. Vì cùng một thời điểm hàng nghìn bạn dùng MSSV đăng nhập và bấm chọn lớp, cổng dễ ì ạch đúng lúc cao điểm. Auto ĐKMH All-in-One sinh ra để lo phần đăng nhập, canh giờ mở cổng và chốt môn giúp bạn, thay vì ngồi F5 cầu may.",
      },
      {
        type: "h2",
        text: "Vì sao giành học phần trên dkmh.hcmuaf.edu.vn lại ngộp đến vậy?",
      },
      {
        type: "ul",
        items: [
          "Cổng dkmh.hcmuaf.edu.vn mở theo đợt do Phòng Đào tạo (pdt.hcmuaf.edu.vn) ấn định, nên cả khóa đổ vào cùng một khung giờ khiến trang quay vòng tải, đăng nhập MSSV liên tục báo lỗi.",
          "Mỗi học kỳ chỉ được đăng tối thiểu 8 và tối đa 25 tín chỉ, lỡ chậm vài giây là hết slot lớp đẹp, phải bốc lớp giờ xấu hoặc thiếu tín chỉ so với kế hoạch.",
          "Lớp ít người (lý thuyết dưới 25, thực hành dưới 15 sinh viên) sẽ bị hủy, nên ai cũng tranh thủ dồn vào vài lớp chắc mở, càng làm cổng nghẽn nặng hơn.",
          "Trang đăng ký từng nhiều lần khó truy cập đến mức Phòng Đào tạo phải phát thêm link dự phòng, gõ tay từng môn trong lúc đó gần như bất khả thi.",
        ],
      },
      {
        type: "h2",
        text: "Auto ĐKMH xử lý đợt đăng ký Nông Lâm như thế nào?",
      },
      {
        type: "p",
        text: "Bạn nạp sẵn danh sách mã môn và mã lớp muốn lấy, đặt đúng mốc giờ Phòng Đào tạo mở cổng, phần còn lại để extension lo. Công cụ tự đăng nhập bằng MSSV, giải CAPTCHA, giữ phiên không bị đăng xuất giữa chừng và bắn loạt đăng ký ngay mili-giây cổng dkmh.hcmuaf.edu.vn mở. Nhờ đó bạn chốt đủ 8 đến 25 tín chỉ với đúng các lớp dễ bị hủy vì thiếu sĩ số, thay vì ngồi tải lại trang và nhìn lớp đầy dần.",
      },
      ...howTo("HCMUAF"),
      ...tips("HCMUAF"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-sgu",
    title: "SGU: đăng ký môn học tự động trên thongtindaotao.sgu.edu.vn",
    description:
      "Hướng dẫn sinh viên Trường Đại học Sài Gòn (SGU) đăng ký môn học tự động trên cổng thongtindaotao.sgu.edu.vn: tự đăng nhập, giải CAPTCHA, canh đúng lịch theo khóa và chốt học phần trong tích tắc.",
    school: "SGU",
    date: "2026-06-10",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học tự động SGU",
      "đăng ký tín chỉ Trường Đại học Sài Gòn",
      "thongtindaotao.sgu.edu.vn đăng ký môn học",
      "tool đăng ký học phần SGU",
      "canh lịch đăng ký môn học theo khóa SGU",
      "đăng ký môn học SGU",
      "auto đkmh sgu",
      "auto dkmh sgu",
      "auto đkmh đại học sài gòn",
      "auto dkmh đại học sài gòn",
      "đăng ký tín chỉ đại học sài gòn",
    ],
    blocks: [
      {
        type: "p",
        text: "Ở Trường Đại học Sài Gòn (SGU), việc đăng ký môn học diễn ra trên cổng “Thông tin đào tạo” thongtindaotao.sgu.edu.vn, còn lịch và Sổ tay đăng ký thì công bố ở trang Phòng Đào tạo daotao.sgu.edu.vn. Trường chia lịch theo từng khóa (K.24, K.22, K.23, K.21 và các khóa trước vào những ngày khác nhau) để giảm tải, nhưng đúng khung giờ của khóa mình thì cổng vẫn nghẽn và lớp đẹp vẫn bay rất nhanh. Auto ĐKMH All-in-One giúp bạn không còn phải “canh me” từng giây bằng tay trên cổng này.",
      },
      {
        type: "h2",
        text: "Vì sao tranh suất trên cổng Thông tin đào tạo của SGU lại căng?",
      },
      {
        type: "ul",
        items: [
          "Dù SGU đã tách lịch theo khóa, cả nghìn sinh viên cùng khóa vẫn đổ vào thongtindaotao.sgu.edu.vn đúng khung ngày của mình (ví dụ K.24 mở trước, rồi tới K.22, K.23…), khiến cổng dồn tải, đăng nhập chập chờn.",
          "Sổ tay đăng ký của Trường khuyên “đăng nhập phải tiến hành nhanh chóng rồi đăng xuất ngay” để tránh nghẽn — nghĩa là bạn chỉ có vài giây thao tác, chậm tay là tuột lớp.",
          "Nếu không vào được, hướng dẫn chính thức bảo “quay lại đăng nhập sau đó 1 giờ”, nên lỡ phút vàng là phải chờ cả tiếng, rủi ro hết slot môn “hot”.",
          "SGU có ba cơ sở (273 An Dương Vương, 105 Bà Huyện Thanh Quan, 04 Tôn Đức Thắng) và hệ thống cho ghép lớp ở hai cơ sở trong cùng buổi, nên phải tính cả thời gian di chuyển khi chọn nhóm — thao tác tay rất dễ rối.",
        ],
      },
      {
        type: "h2",
        text: "Auto ĐKMH chạy đúng nhịp lịch theo khóa của SGU như thế nào?",
      },
      {
        type: "p",
        text: "Vì SGU mở đăng ký theo lịch riêng cho từng khóa, bạn chỉ cần nạp trước mã môn và nhóm lớp mong muốn rồi đặt đúng khung ngày của khóa mình; tiện ích sẽ tự đăng nhập vào thongtindaotao.sgu.edu.vn, tự giải CAPTCHA và giữ phiên sống tới đúng thời điểm mở. Khi cổng bật, công cụ gửi toàn bộ học phần đã chọn chỉ trong mili-giây — kịp “đăng nhập nhanh, đăng xuất nhanh” như Sổ tay khuyến nghị mà không phải bấm tay từng môn. Bạn cũng dễ canh trong mức trần tín chỉ của Trường (Khóa 24 trở về sau tối đa 20 và tối thiểu 7 tín chỉ ở học kỳ chính) và sắp xếp lớp giữa các cơ sở mà không lo lệch giờ. Phần chạy đua tốc độ trên cổng đào tạo, cứ để Auto ĐKMH lo.",
      },
      ...howTo("SGU"),
      ...tips("SGU"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-stu",
    title: "STU: Đăng ký môn học tự động trên daotao1.stu.edu.vn",
    description:
      "Auto ĐKMH giúp sinh viên Trường Đại học Công nghệ Sài Gòn (STU) đăng ký môn học tự động trên Cổng thông tin đào tạo daotao1.stu.edu.vn, giành nhóm môn còn sức chứa.",
    school: "STU",
    date: "2026-06-11",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học tự động STU",
      "Trường Đại học Công nghệ Sài Gòn",
      "daotao1.stu.edu.vn",
      "Cổng thông tin đào tạo STU",
      "đăng ký môn học STU",
      "auto đkmh stu",
      "auto dkmh stu",
      "auto đkmh công nghệ sài gòn",
      "auto dkmh công nghệ sài gòn",
      "đăng ký tín chỉ công nghệ sài gòn",
    ],
    blocks: [
      {
        type: "p",
        text: "Tại Trường Đại học Công nghệ Sài Gòn (STU), mọi đợt đăng ký môn học đều diễn ra trên Cổng thông tin đào tạo daotao1.stu.edu.vn, nơi sinh viên đăng nhập bằng mã số sinh viên cho cả tài khoản lẫn mật khẩu mặc định. Trang đăng ký được chia thành các phần tìm kiếm, lọc môn theo lớp, danh sách môn đã chọn và phần đăng ký ngoài kế hoạch, và bạn chỉ giữ được nhóm môn nào còn sức chứa. Auto ĐKMH All-in-One ra đời để thao tác toàn bộ quy trình đó trong tích tắc, ngay khi cổng vừa mở.",
      },
      {
        type: "h2",
        text: "Vì sao sinh viên STU dễ trượt nhóm môn trên daotao1.stu.edu.vn?",
      },
      {
        type: "ul",
        items: [
          "Cổng daotao1.stu.edu.vn chỉ cho đăng ký những nhóm môn “còn sức chứa”, nên các lớp giờ đẹp hết slot chỉ sau vài giây khi cả khóa cùng đăng nhập một lúc.",
          "Quy trình bắt buộc phải bấm nút “Lưu đăng ký” ở phần danh sách môn đã chọn mới được tính, nhiều bạn chọn xong nhưng quên lưu hoặc bị treo trang nên mất chỗ.",
          "Đăng nhập bằng mã số sinh viên rồi tìm, lọc, chọn môn qua nhiều phần trên trang khiến thao tác tay chậm hơn hẳn so với tốc độ hết chỗ thực tế.",
          "STU vừa thí điểm cổng đào tạo mới, giao diện và đường dẫn thay đổi khiến sinh viên dễ lúng túng, thao tác sai bước trong khung giờ đăng ký ngắn ngủi.",
        ],
      },
      {
        type: "h2",
        text: "Auto ĐKMH xử lý Cổng thông tin đào tạo STU như thế nào?",
      },
      {
        type: "p",
        text: "Extension tự đăng nhập daotao1.stu.edu.vn bằng mã số sinh viên đã lưu, giải CAPTCHA và giữ phiên luôn sống để bạn không bị văng ra ngay trước giờ G. Khi cổng vừa mở đúng khung giờ quy định của trường, công cụ tự chọn đúng các nhóm môn đã đặt sẵn rồi bấm “Lưu đăng ký” ở mức mili-giây, nhắm thẳng vào các lớp còn sức chứa trước khi cả khóa kịp tải xong trang. Nhờ vậy bạn có thể đăng ký nhiều môn cùng lúc, kể cả khi giao diện cổng đào tạo của STU vừa được cập nhật theo bản thí điểm mới.",
      },
      ...howTo("STU"),
      ...tips("STU"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-humg",
    title: "Đăng ký môn học tự động HUMG – hết lo nghẽn daotao.humg.edu.vn",
    description:
      "Auto ĐKMH giúp sinh viên Trường Đại học Mỏ - Địa chất (HUMG) đăng ký môn học tự động trên daotao.humg.edu.vn: tự đăng nhập, giải CAPTCHA, canh giờ và chốt học phần trong tích tắc.",
    school: "HUMG",
    date: "2026-06-13",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học tự động HUMG",
      "đăng ký tín chỉ Đại học Mỏ - Địa chất",
      "tool đăng ký học phần HUMG",
      "daotao.humg.edu.vn đăng ký môn học",
      "đăng ký môn học Trường Đại học Mỏ - Địa chất",
      "auto đkmh humg",
      "auto dkmh humg",
      "auto đkmh mỏ địa chất",
      "auto dkmh mỏ địa chất",
    ],
    blocks: [
      {
        type: "p",
        text: "Cứ đến đợt mở đăng ký học phần, hàng nghìn sinh viên HUMG lại cùng lúc đăng nhập daotao.humg.edu.vn để giành lớp – và đó là lúc trang đào tạo bắt đầu quay vòng vòng, bấm mãi không vào. Chỉ chậm vài giây là lớp đẹp, giờ học hợp lý đã kín chỗ, còn bạn thì phải chấp nhận lịch lệch hoặc chờ đợt sau. Auto ĐKMH All-in-One sinh ra để bạn không còn phải “canh me” bằng tay nữa.",
      },
      {
        type: "h2",
        text: "Vì sao đăng ký tín chỉ ở Trường Đại học Mỏ - Địa chất hay nghẽn?",
      },
      {
        type: "ul",
        items: [
          "Cả khóa cùng vào daotao.humg.edu.vn đúng khung giờ mở đăng ký khiến cổng đào tạo quá tải, đăng nhập chập chờn và trang load chậm hẳn.",
          "Lớp học phần và lớp tự chọn (tối đa 5 học phần dự kiến) có số chỗ giới hạn, vừa mở vài giây là đã hết, thao tác tay không kịp.",
          "Cổng đào tạo dùng tài khoản trực tiếp riêng (không phải tài khoản Microsoft của trường), dễ nhầm lẫn và mất thời gian đăng nhập lại đúng lúc cao điểm.",
          "Phải canh chính xác thời điểm portal mở, nhiều bạn vào sớm bị văng session, vào muộn thì lớp đã đầy.",
        ],
      },
      {
        type: "h2",
        text: "Auto ĐKMH hoạt động ra sao với cổng daotao.humg.edu.vn của HUMG",
      },
      {
        type: "p",
        text: "Tiện ích chạy ngay trên trình duyệt Chrome cùng cổng daotao.humg.edu.vn nên không cần cài phần mềm lạ: nó tự đăng nhập bằng tài khoản trực tiếp của bạn, tự điền và giải CAPTCHA, đồng thời giữ phiên luôn sống để không bị văng trước giờ mở. Thay vì kinh nghiệm truyền tai “nên đăng nhập trước 30–60 phút”, công cụ canh đúng mốc portal mở và gửi yêu cầu đăng ký toàn bộ học phần bạn đã chọn sẵn trong tích tắc. Bạn chỉ cần lập danh sách môn và mã lớp từ trước, phần chạy đua từng mili-giây để giành chỗ cứ để Auto ĐKMH lo.",
      },
      ...howTo("HUMG"),
      ...tips("HUMG"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-eiu",
    title: "Đăng ký môn học tự động EIU – Hết lo nghẽn cổng AAO",
    description:
      "Auto ĐKMH All-in-One giúp sinh viên Trường Đại học Quốc tế Miền Đông (EIU) đăng ký môn học tự động trên cổng AAO: tự đăng nhập, giải CAPTCHA, canh giờ và đăng ký hàng loạt trong tích tắc.",
    school: "EIU",
    date: "2026-06-14",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học tự động EIU",
      "đăng ký môn học EIU",
      "Trường Đại học Quốc tế Miền Đông",
      "cổng AAO EIU",
      "đăng ký tín chỉ EIU",
      "canh giờ đăng ký học phần EIU",
      "auto đkmh eiu",
      "auto dkmh eiu",
      "auto đkmh quốc tế miền đông",
      "auto dkmh quốc tế miền đông",
    ],
    blocks: [
      {
        type: "p",
        text: "Mỗi đợt mở cổng đăng ký học phần ở EIU, cả nghìn sinh viên cùng đổ vào aao.eiu.edu.vn trong một thời điểm, và chỉ vài phút sau những lớp đẹp giờ hay nhóm học bằng tiếng Anh đã kín chỗ. Với lịch 3 học kỳ chính mỗi năm, sinh viên Trường Đại học Quốc tế Miền Đông phải trải qua cảnh tranh suất này thường xuyên hơn các trường khác. Auto ĐKMH All-in-One sinh ra để bạn không còn phải canh F5 mỏi tay rồi vẫn lỡ mất lớp mình cần.",
      },
      {
        type: "h2",
        text: "Vì sao đăng ký học phần trên cổng AAO của EIU hay nghẽn?",
      },
      {
        type: "ul",
        items: [
          "Cổng đào tạo AAO (aao.eiu.edu.vn) bị dồn tải khi hàng nghìn sinh viên cùng truy cập đúng giờ mở đăng ký, dẫn đến quay vòng, đăng xuất hoặc treo trang giữa chừng.",
          "EIU chạy 3 học kỳ chính một năm nên mỗi học kỳ số lớp mở ít, suất các nhóm học “giờ đẹp” hết rất nhanh chỉ sau ít phút.",
          "Nhiều môn chuyên ngành dạy hoàn toàn bằng tiếng Anh (Becamex Business School) chỉ có một, hai nhóm nên cạnh tranh khốc liệt, chậm tay là phải chờ kỳ sau.",
          "Phải tự tay nhập tài khoản, giải CAPTCHA rồi bấm chọn từng học phần khi đường truyền chập chờn khiến thao tác trễ vài giây cũng đủ tuột mất lớp.",
        ],
      },
      {
        type: "h2",
        text: "Auto ĐKMH bám đúng nhịp 3 học kỳ của EIU như thế nào?",
      },
      {
        type: "p",
        text: "Vì EIU mở đăng ký theo từng học kỳ trong năm với khung giờ định sẵn, tiện ích cho phép bạn nạp trước danh sách mã học phần và nhóm lớp mong muốn, rồi tự canh đúng thời điểm cổng AAO mở. Khi tới giờ, công cụ tự đăng nhập, giải CAPTCHA, giữ phiên không bị rớt và gửi đăng ký hàng loạt trong vài mili-giây – nhanh hơn nhiều so với thao tác tay trên đường truyền đông nghẹt. Bạn chỉ cần chuẩn bị kế hoạch học tập một lần, phần tranh suất tốc độ cao trên cổng đào tạo để tiện ích lo.",
      },
      ...howTo("EIU"),
      ...tips("EIU"),
    ],
  },
  {
    slug: "dang-ky-mon-hoc-tu-dong-dhv",
    title: "Đăng ký môn học tự động DHV — Hết cảnh tranh suất ở Hùng Vương",
    description:
      "Hướng dẫn đăng ký môn học tự động cho sinh viên Trường Đại học Hùng Vương TP.HCM (DHV): tự đăng nhập online.dhv.edu.vn, giải CAPTCHA, canh giờ mở cổng và đăng ký tín chỉ tức thì.",
    school: "DHV",
    date: "2026-06-15",
    readingTime: "4 phút đọc",
    keywords: [
      "đăng ký môn học DHV",
      "đăng ký tín chỉ Đại học Hùng Vương TP.HCM",
      "online.dhv.edu.vn đăng ký môn",
      "canh giờ đăng ký môn học DHV",
      "Trường Đại học Hùng Vương TP.HCM đăng ký học phần",
      "auto đkmh dhv",
      "auto dkmh dhv",
      "auto đkmh hùng vương",
      "auto dkmh hùng vương",
    ],
    blocks: [
      {
        type: "p",
        text: "Mỗi khi cổng online.dhv.edu.vn mở đăng ký học phần, sinh viên Trường Đại học Hùng Vương TP.HCM lại bước vào cuộc đua tính bằng giây. Lớp đẹp, giảng viên ‘ruột’ và khung giờ hợp lý thường hết sạch chỉ sau vài phút, còn bạn thì vẫn đang loay hoay nhập CAPTCHA. Đây là lúc một công cụ đăng ký tự động giúp bạn giành suất trước khi lớp kịp đầy.",
      },
      {
        type: "h2",
        text: "Vì sao canh suất môn học ở DHV lại căng đến vậy?",
      },
      {
        type: "ul",
        items: [
          "Cổng đào tạo online.dhv.edu.vn dồn cả nghìn sinh viên 8 khoa vào đăng ký cùng một khung giờ, server dễ nghẽn, văng phiên và loading mãi không xong đúng phút vàng.",
          "Mỗi học kỳ chỉ được đăng ký tối đa 16 tín chỉ và tối thiểu 7, nên ai cũng phải canh để gom đủ môn trong mức trần — chậm tay là lệch cả lộ trình.",
          "DHV chạy 3 học kỳ/năm, riêng học kỳ hè lịch dồn dập khiến thời điểm mở cổng đăng ký đến rất nhanh, dễ bị bỏ lỡ nếu không theo dõi sát thông báo.",
          "Phải tự đăng nhập, nhập CAPTCHA rồi tick từng học phần thủ công khiến mỗi thao tác chậm vài giây — đủ để lớp yêu thích bị người khác giành mất.",
        ],
      },
      {
        type: "h2",
        text: "Auto ĐKMH hoạt động thế nào trên cổng đào tạo DHV?",
      },
      {
        type: "p",
        text: "Extension tự đăng nhập sẵn vào online.dhv.edu.vn, tự điền và giải CAPTCHA, đồng thời giữ phiên không bị đăng xuất trong lúc bạn chờ tới giờ mở cổng. Khi hệ thống đào tạo bật đăng ký học phần, công cụ canh đúng thời điểm và gửi toàn bộ danh sách môn đã chọn chỉ trong mili-giây — kịp chốt cả lớp trước khi vượt mức 16 tín chỉ. Bạn chỉ cần chuẩn bị trước mã môn cho từng khoa (Luật, Ngôn ngữ, Quản trị Kinh doanh – Marketing, Khoa học sức khỏe…) và đặt lịch, phần tốc độ cứ để máy lo.",
      },
      ...howTo("DHV"),
      ...tips("DHV"),
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
