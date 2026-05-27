import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { SkyBackground } from "@/components/SkyBackground";
import * as Icons from "lucide-react";
import { lang } from "@/helper/lang";

// ── Theme hook ────────────────────────────────────────────────────────────────
function useTheme() {
  const [isLight, setIsLight] = useState(() =>
    document.documentElement.classList.contains("light"),
  );
  useEffect(() => {
    setIsLight(document.documentElement.classList.contains("light"));
    const observer = new MutationObserver(() => {
      setIsLight(document.documentElement.classList.contains("light"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return isLight;
}

// ── Pages ─────────────────────────────────────────────────────────────────────
const PAGES = [
  {
    num: "01",
    icon: "LockOpen",
    iconBg: "bg-blue-400/40",
    title: lang({ vi: "Trang đăng nhập", en: "Login Page" }),
    subtitle: lang({
      vi: "Xác thực và phân quyền người dùng",
      en: "User authentication and authorization",
    }),
    features: [
      lang({
        vi: "Đăng nhập bằng tài khoản người dùng",
        en: "User account authentication",
      }),
      lang({
        vi: "Session & middleware bảo vệ route",
        en: "Session & middleware route protection",
      }),
      lang({
        vi: "Giao diện responsive với Bootstrap",
        en: "Responsive UI with Bootstrap",
      }),
      lang({
        vi: "Quản lý trạng thái đăng nhập",
        en: "Login session management",
      }),
    ],
    dotColor: "bg-blue-200",
    tags: ["Express Session", "Bootstrap", "Middleware"],
    tagDark: "bg-blue-900/50 text-blue-300 border border-blue-200/40",
    tagLight: "bg-blue-100 text-blue-700 border border-blue-200",
    img: "/QuizPlatform/login.png",
  },

  {
    num: "02",
    icon: "LayoutDashboard",
    iconBg: "bg-green-900/40",
    title: lang({ vi: "Dashboard", en: "Dashboard" }),
    subtitle: lang({
      vi: "Tổng quan hệ thống học tập",
      en: "Learning system overview",
    }),
    features: [
      lang({
        vi: "Hiển thị quiz theo độ khó",
        en: "Display quizzes by difficulty",
      }),
      lang({
        vi: "Bộ lọc tìm kiếm thông minh",
        en: "Smart filtering system",
      }),
      lang({
        vi: "Theo dõi tiến trình học tập",
        en: "Track learning progress",
      }),
      lang({
        vi: "Quick action bắt đầu quiz",
        en: "Quick action to start quiz",
      }),
    ],
    dotColor: "bg-green-500",
    tags: ["React", "Spring Boot", "MongoDB"],
    tagDark: "bg-green-900/40 text-green-300 border border-green-700/40",
    tagLight: "bg-green-100 text-green-700 border border-green-200",
    img: "/QuizPlatform/dashboard.png",
  },

  {
    num: "03",
    icon: "Bot",
    iconBg: "bg-orange-900/30",
    title: lang({ vi: "AI Quiz Generator", en: "AI Quiz Generator" }),
    subtitle: lang({
      vi: "Tạo quiz tự động bằng AI",
      en: "AI-powered quiz generation",
    }),
    features: [
      lang({
        vi: "Sinh quiz theo chủ đề IT",
        en: "Generate quizzes by IT topic",
      }),
      lang({
        vi: "Tạo câu hỏi động bằng AI",
        en: "Dynamic AI-generated questions",
      }),
      lang({
        vi: "Hỗ trợ nhiều độ khó",
        en: "Support multiple difficulty levels",
      }),
      lang({
        vi: "Tạo quiz nhanh theo yêu cầu",
        en: "Instant quiz generation",
      }),
    ],
    dotColor: "bg-orange-500",
    tags: ["AI API", "MCP", "Streaming"],
    tagDark: "bg-orange-900/40 text-orange-300 border border-orange-700/40",
    tagLight: "bg-orange-100 text-orange-700 border border-orange-200",
    img: "/QuizPlatform/AIquiz.png",
  },

  {
    num: "04",
    icon: "MessageSquare",
    iconBg: "bg-cyan-900/30",
    title: lang({ vi: "Feedback", en: "Feedback" }),
    subtitle: lang({
      vi: "Phản hồi kết quả làm bài",
      en: "Quiz answer feedback system",
    }),
    features: [
      lang({
        vi: "Hiển thị đáp án đúng/sai",
        en: "Display correct/incorrect answers",
      }),
      lang({
        vi: "Giải thích chi tiết từng câu",
        en: "Detailed answer explanations",
      }),
      lang({
        vi: "Lưu lịch sử feedback",
        en: "Store feedback history",
      }),
      lang({
        vi: "Đánh giá chất lượng feedback",
        en: "Feedback rating system",
      }),
    ],
    dotColor: "bg-cyan-500",
    tags: ["REST API", "React", "Spring Boot"],
    tagDark: "bg-cyan-900/40 text-cyan-300 border border-cyan-700/40",
    tagLight: "bg-cyan-100 text-cyan-700 border border-cyan-200",
    img: "/QuizPlatform/feedback.png",
  },

  {
    num: "05",
    icon: "ClipboardList",
    iconBg: "bg-yellow-900/30",
    title: lang({ vi: "Feedback Management", en: "Feedback Management" }),
    subtitle: lang({
      vi: "Quản lý feedback từ người dùng",
      en: "Manage user feedback",
    }),
    features: [
      lang({
        vi: "Xem feedback theo quiz",
        en: "View feedback by quiz",
      }),
      lang({
        vi: "Chỉnh sửa và xóa feedback",
        en: "Edit and delete feedback",
      }),
      lang({
        vi: "Thống kê đánh giá trung bình",
        en: "Average feedback analytics",
      }),
      lang({
        vi: "Tìm kiếm và phân trang",
        en: "Search and pagination",
      }),
    ],
    dotColor: "bg-yellow-500",
    tags: ["Admin", "MongoDB", "React"],
    tagDark: "bg-yellow-900/40 text-yellow-300 border border-yellow-700/40",
    tagLight: "bg-yellow-100 text-yellow-700 border border-yellow-200",
    img: "/QuizPlatform/feedbackManage.png",
  },

  {
    num: "06",
    icon: "BarChart2",
    iconBg: "bg-purple-900/30",
    title: lang({ vi: "Result", en: "Result" }),
    subtitle: lang({
      vi: "Kết quả bài làm người dùng",
      en: "User quiz results",
    }),
    features: [
      lang({
        vi: "Hiển thị điểm số chi tiết",
        en: "Detailed score display",
      }),
      lang({
        vi: "Thời gian hoàn thành quiz",
        en: "Quiz completion time",
      }),
      lang({
        vi: "Tỷ lệ câu đúng/sai",
        en: "Correct/incorrect statistics",
      }),
      lang({
        vi: "Lưu lịch sử kết quả",
        en: "Save result history",
      }),
    ],
    dotColor: "bg-purple-500",
    tags: ["React", "Spring Boot", "MongoDB"],
    tagDark: "bg-purple-900/40 text-purple-300 border border-purple-700/40",
    tagLight: "bg-purple-100 text-purple-700 border border-purple-200",
    img: "/QuizPlatform/result.png",
  },

  {
    num: "07",
    icon: "PieChart",
    iconBg: "bg-pink-900/30",
    title: lang({ vi: "Result Management", en: "Result Management" }),
    subtitle: lang({
      vi: "Quản lý kết quả và phân tích",
      en: "Result analytics and management",
    }),
    features: [
      lang({
        vi: "Theo dõi kết quả người dùng",
        en: "Track user performance",
      }),
      lang({
        vi: "Biểu đồ thống kê kết quả",
        en: "Result analytics charts",
      }),
      lang({
        vi: "Export CSV báo cáo",
        en: "CSV export reports",
      }),
      lang({
        vi: "Phân tích hiệu suất học tập",
        en: "Learning performance analysis",
      }),
    ],
    dotColor: "bg-pink-500",
    tags: ["Analytics", "MongoDB", "React"],
    tagDark: "bg-pink-900/40 text-pink-300 border border-pink-700/40",
    tagLight: "bg-pink-100 text-pink-700 border border-pink-200",
    img: "/QuizPlatform/resultManage.png",
  },

  {
    num: "08",
    icon: "UserCircle",
    iconBg: "bg-sky-900/30",
    title: lang({ vi: "User Profile", en: "User Profile" }),
    subtitle: lang({
      vi: "Trang cá nhân người dùng",
      en: "Personal user profile",
    }),
    features: [
      lang({
        vi: "Thông tin cá nhân và avatar",
        en: "Personal information and avatar",
      }),
      lang({
        vi: "Lịch sử làm quiz",
        en: "Quiz history tracking",
      }),
      lang({
        vi: "Thống kê học tập cá nhân",
        en: "Personal learning analytics",
      }),
      lang({
        vi: "Cập nhật thông tin tài khoản",
        en: "Update account information",
      }),
    ],
    dotColor: "bg-sky-500",
    tags: ["JWT", "React", "Spring Boot"],
    tagDark: "bg-sky-900/40 text-sky-300 border border-sky-700/40",
    tagLight: "bg-sky-100 text-sky-700 border border-sky-200",
    img: "/QuizPlatform/profile.png",
  },

  {
    num: "09",
    icon: "Users",
    iconBg: "bg-indigo-900/30",
    title: lang({ vi: "User Management", en: "User Management" }),
    subtitle: lang({
      vi: "Quản lý tài khoản người dùng",
      en: "Manage user accounts",
    }),
    features: [
      lang({
        vi: "Danh sách người dùng",
        en: "User listing system",
      }),
      lang({
        vi: "Chỉnh sửa và khóa tài khoản",
        en: "Edit and lock accounts",
      }),
      lang({
        vi: "Phân quyền admin/user",
        en: "Role-based authorization",
      }),
      lang({
        vi: "Tìm kiếm và lọc dữ liệu",
        en: "Search and filter users",
      }),
    ],
    dotColor: "bg-indigo-500",
    tags: ["Admin", "JWT", "MongoDB"],
    tagDark: "bg-indigo-900/40 text-indigo-300 border border-indigo-700/40",
    tagLight: "bg-indigo-100 text-indigo-700 border border-indigo-200",
    img: "/QuizPlatform/userManage.png",
  },

  {
    num: "10",
    icon: "FileQuestion",
    iconBg: "bg-red-900/30",
    title: lang({ vi: "Question Management", en: "Question Management" }),
    subtitle: lang({
      vi: "Quản lý ngân hàng câu hỏi",
      en: "Question bank management",
    }),
    features: [
      lang({
        vi: "CRUD câu hỏi và đáp án",
        en: "CRUD questions and answers",
      }),
      lang({
        vi: "Phân loại theo chủ đề",
        en: "Categorize by topic",
      }),
      lang({
        vi: "Quản lý độ khó câu hỏi",
        en: "Manage question difficulty",
      }),
      lang({
        vi: "Tìm kiếm nhanh câu hỏi",
        en: "Quick question search",
      }),
    ],
    dotColor: "bg-red-500",
    tags: ["CRUD", "MongoDB", "Spring Boot"],
    tagDark: "bg-red-900/40 text-red-300 border border-red-700/40",
    tagLight: "bg-red-100 text-red-700 border border-red-200",
    img: "/QuizPlatform/questionManage.png",
  },

  {
    num: "11",
    icon: "FolderKanban",
    iconBg: "bg-emerald-900/30",
    title: lang({ vi: "Category Management", en: "Category Management" }),
    subtitle: lang({
      vi: "Quản lý danh mục quiz",
      en: "Quiz category management",
    }),
    features: [
      lang({
        vi: "Tạo và chỉnh sửa category",
        en: "Create and edit categories",
      }),
      lang({
        vi: "Phân loại quiz theo chủ đề",
        en: "Categorize quizzes by topic",
      }),
      lang({
        vi: "Tìm kiếm và lọc category",
        en: "Search and filter categories",
      }),
      lang({
        vi: "Quản lý dữ liệu tập trung",
        en: "Centralized category management",
      }),
    ],
    dotColor: "bg-emerald-500",
    tags: ["Admin", "CRUD", "React"],
    tagDark: "bg-emerald-900/40 text-emerald-300 border border-emerald-700/40",
    tagLight: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    img: "/QuizPlatform/categoryManage.png",
  },

  {
    num: "12",
    icon: "BookOpenCheck",
    iconBg: "bg-teal-900/30",
    title: lang({ vi: "Quiz Management", en: "Quiz Management" }),
    subtitle: lang({
      vi: "Quản lý bộ quiz hệ thống",
      en: "Quiz system management",
    }),
    features: [
      lang({
        vi: "CRUD quiz và cấu hình",
        en: "CRUD quiz configuration",
      }),
      lang({
        vi: "Thiết lập thời gian làm bài",
        en: "Configure quiz timer",
      }),
      lang({
        vi: "Gắn category và độ khó",
        en: "Assign category and difficulty",
      }),
      lang({
        vi: "Quản lý trạng thái quiz",
        en: "Manage quiz visibility",
      }),
    ],
    dotColor: "bg-teal-500",
    tags: ["CRUD", "Spring Boot", "MongoDB"],
    tagDark: "bg-teal-900/40 text-teal-300 border border-teal-700/40",
    tagLight: "bg-teal-100 text-teal-700 border border-teal-200",
    img: "/QuizPlatform/quizManage.png",
  },

  {
    num: "13",
    icon: "Map",
    iconBg: "bg-lime-900/30",
    title: lang({ vi: "Roadmap", en: "Roadmap" }),
    subtitle: lang({
      vi: "Lộ trình học tập IT",
      en: "IT learning roadmap",
    }),
    features: [
      lang({
        vi: "Theo dõi tiến độ học tập",
        en: "Track learning roadmap",
      }),
      lang({
        vi: "Định hướng kỹ năng IT",
        en: "IT skill orientation",
      }),
      lang({
        vi: "Roadmap theo từng lĩnh vực",
        en: "Roadmaps by specialization",
      }),
      lang({
        vi: "Gợi ý quiz phù hợp",
        en: "Recommend suitable quizzes",
      }),
    ],
    dotColor: "bg-lime-500",
    tags: ["Roadmap", "React", "AI"],
    tagDark: "bg-lime-900/40 text-lime-300 border border-lime-700/40",
    tagLight: "bg-lime-100 text-lime-700 border border-lime-200",
    img: "/QuizPlatform/roadmap.png",
  },

  {
    num: "14",
    icon: "Video",
    iconBg: "bg-rose-900/30",
    title: lang({ vi: "Meeting", en: "Meeting" }),
    subtitle: lang({
      vi: "Họp nhóm và trao đổi realtime",
      en: "Realtime online meetings",
    }),
    features: [
      lang({
        vi: "Tạo phòng họp trực tuyến",
        en: "Create online meeting rooms",
      }),
      lang({
        vi: "Video call và chat realtime",
        en: "Realtime video call and chat",
      }),
      lang({
        vi: "Screen sharing hỗ trợ học nhóm",
        en: "Screen sharing for collaboration",
      }),
      lang({
        vi: "Lưu lịch sử meeting",
        en: "Meeting history tracking",
      }),
    ],
    dotColor: "bg-rose-500",
    tags: ["WebRTC", "WebSocket", "React"],
    tagDark: "bg-rose-900/40 text-rose-300 border border-rose-700/40",
    tagLight: "bg-rose-100 text-rose-700 border border-rose-200",
    img: "/QuizPlatform/meet.png",
  },
];

const TECH = [
  { icon: "Layers", name: "React", role: "Frontend" },
  { icon: "Server", name: "Spring Boot", role: "Backend" },
  { icon: "Database", name: "MongoDB", role: "Database" },
  { icon: "Bot", name: "AI API", role: "AI Integration" },
  { icon: "Cpu", name: "MCP", role: "Chatbot Protocol" },
  { icon: "Shield", name: "JWT", role: "Authentication" },
  { icon: "Radio", name: "WebRTC", role: "Video Meeting" },
  { icon: "Flame", name: "WebSocket", role: "Real-time" },
  { icon: "Wind", name: "Tailwind", role: "Styling" },
];

const ARCH = [
  {
    icon: "Monitor",
    title: "Frontend",
    dark: "border-sky-500/30 bg-sky-900/10",
    light: "border-sky-200 bg-sky-50",
    titleColor: "text-sky-500",
    desc: "React · Tailwind CSS · Lucide Icons · Real-time Chat UI · Streaming Response",
  },
  {
    icon: "Settings",
    title: "Backend",
    dark: "border-orange-500/30 bg-orange-900/10",
    light: "border-orange-200 bg-orange-50",
    titleColor: "text-orange-500",
    desc: "Spring Boot · REST API · JWT Auth · MCP Chatbot · AI Quiz Generation · WebRTC Signaling",
  },
  {
    icon: "Database",
    title: "Database",
    dark: "border-emerald-500/30 bg-emerald-900/10",
    light: "border-emerald-200 bg-emerald-50",
    titleColor: "text-emerald-600",
    desc: "MongoDB Atlas · Users, Quizzes, Questions, Results, Feedback, Messages",
  },
];

const MY_ROLE_STEPS = [
  {
    icon: "Server",
    color: "text-orange-500",
    dot: "bg-orange-500",
    ringDark: "ring-orange-500/20",
    ringLight: "ring-orange-200",
    title: lang({ vi: "Phát triển Backend", en: "Backend Development" }),
    items: [
      lang({
        vi: "Xây dựng REST API với Spring Boot theo mô hình MVC",
        en: "Built REST APIs with Spring Boot following MVC architecture",
      }),
      lang({
        vi: "Thiết kế schema MongoDB cho quizzes, questions, results, feedback",
        en: "Designed MongoDB schemas for quizzes, questions, results, and feedback",
      }),
      lang({
        vi: "Triển khai JWT authentication và phân quyền user/admin",
        en: "Implemented JWT authentication and role-based access control",
      }),
      lang({
        vi: "Xây dựng API quản lý kết quả với MongoDB Aggregation Pipeline",
        en: "Built result management APIs using MongoDB Aggregation Pipeline",
      }),
    ],
  },
  {
    icon: "LayoutDashboard",
    color: "text-green-500",
    dot: "bg-green-500",
    ringDark: "ring-green-500/20",
    ringLight: "ring-green-200",
    title: lang({ vi: "Phát triển Frontend", en: "Frontend Development" }),
    items: [
      lang({
        vi: "Xây dựng Dashboard với bộ lọc quiz theo độ khó và danh mục",
        en: "Built Dashboard with quiz filter by difficulty and category",
      }),
      lang({
        vi: "Phát triển trang Feedback, Feedback Management và Result Management",
        en: "Developed Feedback, Feedback Management, and Result Management pages",
      }),
      lang({
        vi: "Xây dựng trang User Profile với lịch sử và thống kê cá nhân",
        en: "Built User Profile page with history and personal statistics",
      }),
    ],
  },
  {
    icon: "Bot",
    color: "text-purple-500",
    dot: "bg-purple-500",
    ringDark: "ring-purple-500/20",
    ringLight: "ring-purple-200",
    title: lang({ vi: "AI & Chatbot MCP", en: "AI & MCP Chatbot" }),
    items: [
      lang({
        vi: "Tích hợp chatbot AI sử dụng MCP protocol",
        en: "Integrated AI chatbot using the MCP protocol",
      }),
      lang({
        vi: "Xây dựng tính năng tự động tạo quiz bằng AI từ chủ đề IT",
        en: "Built dynamic quiz generation feature using AI for IT topics",
      }),
      lang({
        vi: "Phát triển giao diện chat với streaming response realtime",
        en: "Developed chat UI with real-time streaming responses",
      }),
    ],
  },
  {
    icon: "Video",
    color: "text-rose-500",
    dot: "bg-rose-500",
    ringDark: "ring-rose-500/20",
    ringLight: "ring-rose-200",
    title: lang({ vi: "Meeting & Realtime", en: "Meeting & Real-time" }),
    items: [
      lang({
        vi: "Xây dựng tính năng họp nhóm trực tuyến với WebRTC",
        en: "Built online group meeting feature using WebRTC",
      }),
      lang({
        vi: "Tích hợp WebSocket cho chat realtime trong phòng họp",
        en: "Integrated WebSocket for real-time chat in meeting rooms",
      }),
    ],
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function Pill({ label, isLight }) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-[11px] tracking-widest uppercase border mb-3 font-semibold ${
        isLight
          ? "bg-green-50 border-green-200 text-green-700"
          : "bg-green-900/30 border-green-400/25 text-green-400"
      }`}
    >
      {label}
    </span>
  );
}

function SectionTitle({ pre, accent, desc, isLight }) {
  return (
    <>
      <h2
        className={`text-3xl font-black mb-2 ${isLight ? "text-slate-800" : "text-white"}`}
      >
        {pre} <span className="text-green-500">{accent}</span>
      </h2>
      <p
        className={`text-sm leading-relaxed mb-10 max-w-xl mx-auto text-center ${
          isLight ? "text-slate-500" : "text-slate-400"
        }`}
      >
        {desc}
      </p>
    </>
  );
}

// ── Page Card ─────────────────────────────────────────────────────────────────
function PageCard({ page, isLight }) {
  const IconComponent = Icons[page.icon];

  return (
    <div
      className={`rounded-2xl overflow-hidden border transition-all duration-300 mb-14 ${
        isLight
          ? "border-slate-200 bg-white shadow-md hover:shadow-xl hover:border-green-300"
          : "border-white/10 hover:border-green-400/30 hover:shadow-[0_0_40px_rgba(34,197,94,0.10)]"
      }`}
      style={!isLight ? { background: "hsl(var(--card))" } : undefined}
    >
      {/* Header */}
      <div
        className={`flex items-center gap-4 px-7 py-5 border-b ${
          isLight
            ? "border-slate-100 bg-slate-50"
            : "border-white/5 bg-white/[0.02]"
        }`}
      >
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${page.iconBg}`}
        >
          {IconComponent && <IconComponent />}
        </div>
        <div>
          <h3
            className={`font-bold text-base ${isLight ? "text-slate-800" : "text-white"}`}
          >
            {page.title}
          </h3>
          <p
            className={`text-xs mt-0.5 ${isLight ? "text-slate-500" : "text-slate-400"}`}
          >
            {page.subtitle}
          </p>
        </div>
        <span
          className={`ml-auto font-black text-5xl select-none ${
            isLight ? "text-slate-200" : "text-white/5"
          }`}
        >
          {page.num}
        </span>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Screenshot */}
        <div
          className={`border-b md:border-b-0 md:border-r overflow-hidden ${
            isLight ? "border-slate-100" : "border-white/5"
          }`}
        >
          <img
            src={page.img}
            alt={page.title}
            className="w-full h-full object-cover object-top"
            style={{ maxHeight: "260px" }}
          />
        </div>

        {/* Info */}
        <div className="p-7">
          <ul className="flex flex-col gap-3 mb-5">
            {page.features.map((f) => (
              <li
                key={f}
                className={`flex items-start gap-2.5 text-sm leading-relaxed ${
                  isLight ? "text-slate-600" : "text-slate-400"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${page.dotColor}`}
                />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {page.tags.map((t) => (
              <span
                key={t}
                className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                  isLight ? page.tagLight : page.tagDark
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
function ITQuizzDetail() {
  const isLight = useTheme();
  const Rocket = Icons["Rocket"];
  const Zap = Icons["Zap"];

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
        isLight ? "bg-white text-slate-800" : "bg-background text-foreground"
      }`}
    >
      {isLight ? <SkyBackground /> : <StarBackground />}
      <Navbar />

      <div className="relative z-10 max-w-5xl mx-auto px-4 mt-[100px] pb-20">
        {/* ── Hero ── */}
        <div
          className={`rounded-2xl overflow-hidden border mb-16 ${
            isLight ? "border-slate-200 bg-white shadow-lg" : "border-white/10"
          }`}
          style={!isLight ? { background: "hsl(var(--card))" } : undefined}
        >
          <div className="p-8">
            <div
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs mb-4 border font-semibold ${
                isLight
                  ? "bg-green-50 border-green-200 text-green-700"
                  : "bg-green-900/30 border-green-400/30 text-green-300"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              EIU · CIT · SWE 2023
            </div>

            <h1
              className={`text-3xl font-black mb-3 leading-tight ${isLight ? "text-slate-800" : "text-white"}`}
            >
              IT<span className="text-green-500">Quizz</span> — Online IT
              Interview Prep Platform
            </h1>

            <p
              className={`mb-8 leading-relaxed max-w-2xl mx-auto text-center ${
                isLight ? "text-slate-600" : "text-slate-400"
              }`}
            >
              {lang({
                vi: "Nền tảng luyện tập phỏng vấn IT trực tuyến, giúp người học củng cố kiến thức kỹ thuật qua các bài quiz theo chủ đề, tạo quiz AI động, feedback tức thì có giải thích và phân tích hiệu suất để theo dõi tiến trình liên tục.",
                en: "An online IT interview preparation and practice platform designed to help learners strengthen technical knowledge through topic-based quizzes, dynamic AI quiz generation, instant feedback with explanations, and performance analytics for continuous progress tracking.",
              })}
            </p>

            <div className="flex gap-8 mb-8 flex-wrap justify-center">
              {[
                { n: "7+", l: lang({ vi: "Tính năng", en: "Features" }) },
                { n: "AI", l: lang({ vi: "Tạo Quiz", en: "Quiz Gen" }) },
                { n: "MCP", l: lang({ vi: "Chatbot", en: "Chatbot" }) },
                { n: "RT", l: lang({ vi: "Meeting", en: "Meeting" }) },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl font-black text-green-500">
                    {s.n}
                  </div>
                  <div
                    className={`text-xs mt-0.5 ${
                      isLight ? "text-slate-500" : "text-slate-500"
                    }`}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
              {/* ── User pass ── */}
            <div
              className={`mt-6 mb-6 rounded-xl border px-5 py-4 text-s ${
                isLight
                  ? "bg-slate-50 border-slate-200 text-slate-700"
                  : "border-white/10 text-slate-300"
              }`}
            >
              <div className="font-semibold mb-2 text-green-500">
                Demo Account
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <span className="font-bold">Name:</span>{" "}
                  <span className="font-mono">datly</span>
                </div>
                <div>
                  <span className="font-bold">Password:</span>{" "}
                  <span className="font-mono">123456</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://interview-quizz-software.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(34,197,94,0.35)]"
              >
                {Rocket && <Rocket />}{" "}
                {lang({ vi: "Xem demo", en: "Live Demo" })}
              </a>
              <a
                href="https://github.com/Hung1510/Capstone_Project_Quizz"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5 border ${
                  isLight
                    ? "border-slate-300 text-slate-700 hover:border-green-400 hover:text-green-600"
                    : "border-white/20 text-white hover:border-green-400 hover:text-green-400"
                }`}
              >
                {Zap && <Zap />} GitHub
              </a>
            </div>
          </div>
        </div>

        {/* ── My Role ── */}
        <div className="mb-12">
          <Pill label={lang({ vi: "Vai trò", en: "Role" })} isLight={isLight} />

          <SectionTitle
            pre={lang({ vi: "Vai trò của", en: "My" })}
            accent={lang({ vi: "bản thân", en: "Role" })}
            desc={lang({
              vi: "Đảm nhận phát triển Backend (Spring Boot), Frontend (React) cho nhiều module, tích hợp AI chatbot MCP, tính năng tạo quiz tự động và meeting.",
              en: "Responsible for Backend (Spring Boot) and Frontend (React) development across multiple modules, AI MCP chatbot integration, dynamic quiz generation, and meeting features.",
            })}
            isLight={isLight}
          />

          {/* Role badge */}
          <div className="flex justify-center mb-8">
            <span
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold border ${
                isLight
                  ? "bg-green-50 border-green-200 text-green-700"
                  : "bg-green-900/30 border-green-400/30 text-green-300"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              {lang({
                vi: "Lập trình viên Fullstack",
                en: "Fullstack Developer",
              })}
            </span>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div
              className={`absolute left-5 top-2 bottom-2 w-px ${
                isLight ? "bg-slate-200" : "bg-white/10"
              }`}
            />

            {MY_ROLE_STEPS.map((step, i) => {
              const IconComponent = Icons[step.icon];
              return (
                <div key={i} className="relative pl-14 mb-8 last:mb-0">
                  <div
                    className={`absolute left-0 w-10 h-10 rounded-full flex items-center justify-center ring-4 ${
                      isLight ? step.ringLight : step.ringDark
                    } ${
                      isLight
                        ? "bg-white border border-slate-200 shadow-sm"
                        : "bg-[#0f172a] border border-white/10"
                    }`}
                  >
                    <span className={`text-base ${step.color}`}>
                      {IconComponent && <IconComponent size={18} />}
                    </span>
                  </div>

                  <div
                    className={`rounded-xl border p-5 transition-all duration-200 ${
                      isLight
                        ? "bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-green-200"
                        : "border-white/10 hover:border-green-400/30"
                    }`}
                    style={
                      !isLight ? { background: "hsl(var(--card))" } : undefined
                    }
                  >
                    <h4 className={`font-bold text-sm mb-3 ${step.color}`}>
                      {step.title}
                    </h4>
                    <ul className="flex flex-col gap-2">
                      {step.items.map((item) => (
                        <li
                          key={item}
                          className={`flex items-start gap-2 text-sm leading-relaxed ${
                            isLight ? "text-slate-600" : "text-slate-400"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2 ${step.dot}`}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Pages ── */}
        <Pill
          label={lang({ vi: "Các tính năng", en: "Features" })}
          isLight={isLight}
        />
        <SectionTitle
          pre={lang({ vi: "Mô tả từng", en: "Explore" })}
          accent={lang({ vi: "tính năng", en: "Features" })}
          desc={lang({
            vi: "Hệ thống gồm 14 tính năng chính, từ luyện quiz theo chủ đề, feedback thông minh đến họp nhóm và chatbot AI.",
            en: "The platform consists of 14 core features — from topic-based quiz practice and smart feedback to group meetings and AI chatbot.",
          })}
          isLight={isLight}
        />
        {PAGES.map((page) => (
          <PageCard key={page.num} page={page} isLight={isLight} />
        ))}

        {/* ── Tech Stack ── */}
        <div className="mb-10">
          <Pill
            label={lang({ vi: "Công nghệ", en: "Tech Stack" })}
            isLight={isLight}
          />

          <SectionTitle
            pre={lang({ vi: "Công nghệ", en: "Technologies" })}
            accent={lang({ vi: "sử dụng", en: "Used" })}
            desc={lang({
              vi: "Xây dựng trên React + Spring Boot với MongoDB, tích hợp AI MCP chatbot, JWT auth và WebRTC cho meeting realtime.",
              en: "Built on React + Spring Boot with MongoDB, integrating AI MCP chatbot, JWT authentication, and WebRTC for real-time meetings.",
            })}
            isLight={isLight}
          />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {TECH.map((t) => {
              const IconComponent = Icons[t.icon];

              return (
                <div
                  key={t.name}
                  className={`rounded-2xl p-4 flex flex-col items-center gap-2 text-center border transition-all duration-200 hover:-translate-y-1 ${
                    isLight
                      ? "bg-white border-slate-200 shadow-sm hover:border-green-300 hover:shadow-md"
                      : "border-white/10 hover:border-green-400/40"
                  }`}
                  style={
                    !isLight ? { background: "hsl(var(--card))" } : undefined
                  }
                >
                  <span className="text-2xl">
                    {IconComponent && <IconComponent />}
                  </span>

                  <span
                    className={`text-xs font-semibold ${
                      isLight ? "text-slate-700" : "text-white"
                    }`}
                  >
                    {t.name}
                  </span>

                  <span
                    className={`text-[10px] ${
                      isLight ? "text-slate-500" : "text-slate-500"
                    }`}
                  >
                    {t.role}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Architecture ── */}
        <div className="mb-4">
          <Pill
            label={lang({ vi: "Kiến trúc", en: "Architecture" })}
            isLight={isLight}
          />

          <SectionTitle
            pre={lang({ vi: "Kiến trúc", en: "System" })}
            accent={lang({ vi: "hệ thống", en: "Architecture" })}
            desc={lang({
              vi: "Kiến trúc 3 tầng: React Frontend → Spring Boot Backend → MongoDB, với AI layer và WebRTC tích hợp ở tầng dịch vụ.",
              en: "3-tier architecture: React Frontend → Spring Boot Backend → MongoDB, with an AI layer and WebRTC integrated at the service level.",
            })}
            isLight={isLight}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ARCH.map((layer) => {
              const IconComponent = Icons[layer.icon];

              return (
                <div
                  key={layer.title}
                  className={`border rounded-2xl p-6 text-center ${
                    isLight ? layer.light : layer.dark
                  }`}
                >
                  <div className="text-3xl mb-3 flex justify-center">
                    {IconComponent && <IconComponent size={28} />}
                  </div>

                  <h4
                    className={`font-bold text-base mb-2 ${layer.titleColor}`}
                  >
                    {layer.title}
                  </h4>

                  <p
                    className={`text-xs leading-relaxed ${
                      isLight ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    {layer.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ITQuizzDetail;
