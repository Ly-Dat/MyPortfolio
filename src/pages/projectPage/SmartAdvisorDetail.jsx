import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { SkyBackground } from "@/components/SkyBackground";

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

// ── Tags có 2 variant riêng light/dark ───────────────────────────────────────
const PAGES = [
  {
    num: "01",
    icon: "🔐",
    iconBg: "bg-blue-900/40",
    title: "Login Page",
    subtitle: "Xác thực sinh viên qua hệ thống EIU",
    features: [
      "Xác thực email EIU (@eiu.edu.vn)",
      "Session management với Express Session",
      "Bảo vệ route với middleware xác thực",
      "Giao diện Bootstrap responsive",
    ],
    dotColor: "bg-blue-500",
    tags: ["Express Session", "Middleware", "Bootstrap"],
    tagDark: "bg-blue-900/50 text-blue-300 border border-blue-700/40",
    tagLight: "bg-blue-100 text-blue-700 border border-blue-200",
    img: "/projects/login.png",
  },
  {
    num: "02",
    icon: "📊",
    iconBg: "bg-yellow-900/30",
    title: "Dashboard",
    subtitle: "Tổng quan GPA và thông tin sinh viên",
    features: [
      "Hiển thị GPA trung bình theo hệ 4.0",
      "Thống kê tổng số môn & môn đã hoàn thành",
      "Thông tin sinh viên: ID, email, chuyên ngành",
      "Hành động nhanh: điểm, lộ trình, tư vấn",
    ],
    dotColor: "bg-yellow-500",
    tags: ["EJS Template", "MongoDB", "REST API"],
    tagDark: "bg-yellow-900/40 text-yellow-300 border border-yellow-700/40",
    tagLight: "bg-yellow-100 text-yellow-700 border border-yellow-200",
    img: "/projects/dashboard.png",
  },
  {
    num: "03",
    icon: "📈",
    iconBg: "bg-green-900/30",
    title: "Xem điểm",
    subtitle: "Bảng điểm chi tiết theo kỳ học",
    features: [
      "Hiển thị điểm số theo thang 10 và hệ 4.0",
      "Phân loại màu sắc: A / B / C / D / F trực quan",
      "Lọc và tìm kiếm môn học theo kỳ",
      "Tính GPA tổng hợp và theo từng học kỳ",
    ],
    dotColor: "bg-green-500",
    tags: ["EJS", "MongoDB Aggregate", "Bootstrap Table"],
    tagDark: "bg-green-900/40 text-green-300 border border-green-700/40",
    tagLight: "bg-green-100 text-green-700 border border-green-200",
    img: "/projects/scores.png",
  },
  {
    num: "04",
    icon: "🗺️",
    iconBg: "bg-sky-900/30",
    title: "Lộ trình học",
    subtitle: "Flowchart · Đề xuất môn · Xuất PDF · Chat AI",
    features: [
      "Flowchart động với mũi tên tiên quyết",
      "Màu sắc phân biệt: hoàn thành / đang học / chưa học",
      "Đề xuất môn học phù hợp kỳ tiếp theo",
      "Xuất lộ trình ra file PDF",
      "Chat với AI ngay trong trang lộ trình",
    ],
    dotColor: "bg-sky-500",
    tags: ["D3.js / SVG", "PDFKit", "Gemini API"],
    tagDark: "bg-sky-900/40 text-sky-300 border border-sky-700/40",
    tagLight: "bg-sky-100 text-sky-700 border border-sky-200",
    img: "/projects/roadmap.png",
  },
  {
    num: "05",
    icon: "🤖",
    iconBg: "bg-orange-900/30",
    title: "Tư vấn AI",
    subtitle: "Tư vấn học tập thông minh với Gemini",
    features: [
      "Tích hợp Google Gemini API",
      "Nhận diện ngữ cảnh GPA & lộ trình cá nhân",
      "Trả lời bằng tiếng Việt và tiếng Anh",
      "Streaming response thời gian thực",
      "Lịch sử hội thoại trong phiên",
    ],
    dotColor: "bg-orange-500",
    tags: ["Gemini API", "Node.js", "Streaming"],
    tagDark: "bg-orange-900/40 text-orange-300 border border-orange-700/40",
    tagLight: "bg-orange-100 text-orange-700 border border-orange-200",
    img: "/projects/ai.png",
  },
  {
    num: "06",
    icon: "💬",
    iconBg: "bg-emerald-900/30",
    title: "Nhắn tin Advisor",
    subtitle: "Kênh trao đổi sinh viên — cố vấn học tập",
    features: [
      "Danh sách cố vấn theo ngành học",
      "Trạng thái online / offline thời gian thực",
      "Giao diện chat trực quan, thân thiện",
      "Lưu lịch sử hội thoại vào database",
    ],
    dotColor: "bg-emerald-500",
    tags: ["Socket.io", "MongoDB", "Real-time"],
    tagDark: "bg-emerald-900/40 text-emerald-300 border border-emerald-700/40",
    tagLight: "bg-emerald-100 text-emerald-700 border border-emerald-200",
    img: "/projects/advisor.png",
  },
];

const TECH = [
  { icon: "⚡", name: "Node.js", role: "Runtime" },
  { icon: "🚂", name: "Express.js", role: "Framework" },
  { icon: "📄", name: "EJS", role: "Template Engine" },
  { icon: "🍃", name: "MongoDB", role: "Database" },
  { icon: "🤖", name: "Gemini API", role: "AI Integration" },
  { icon: "🎨", name: "Bootstrap", role: "UI Framework" },
  { icon: "📊", name: "D3.js", role: "Flowchart" },
  { icon: "📡", name: "Socket.io", role: "Real-time" },
  { icon: "📄", name: "PDFKit", role: "PDF Export" },
];

const ARCH = [
  {
    icon: "🖥️",
    title: "Frontend",
    dark: "border-sky-500/30 bg-sky-900/10",
    light: "border-sky-200 bg-sky-50",
    titleColor: "text-sky-500",
    desc: "EJS Templates · Bootstrap · D3.js · Socket.io Client · Responsive UI",
  },
  {
    icon: "⚙️",
    title: "Backend",
    dark: "border-orange-500/30 bg-orange-900/10",
    light: "border-orange-200 bg-orange-50",
    titleColor: "text-orange-500",
    desc: "Express.js · Node.js · MVC Pattern · Gemini API · PDFKit · Socket.io Server",
  },
  {
    icon: "🍃",
    title: "Database",
    dark: "border-emerald-500/30 bg-emerald-900/10",
    light: "border-emerald-200 bg-emerald-50",
    titleColor: "text-emerald-600",
    desc: "MongoDB Atlas · Mongoose ODM · Users, Courses, Scores, Messages",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function Pill({ label, isLight }) {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-[11px] tracking-widest uppercase border mb-3 font-semibold ${
        isLight
          ? "bg-blue-50 border-blue-200 text-blue-600"
          : "bg-blue-900/30 border-blue-400/25 text-sky-400"
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
        {pre} <span className="text-sky-500">{accent}</span>
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
  return (
    <div
      className={`rounded-2xl overflow-hidden border transition-all duration-300 mb-14 ${
        isLight
          ? "border-slate-200 bg-white shadow-md hover:shadow-xl hover:border-blue-300"
          : "border-white/10 bg-white/[0.03] hover:border-blue-400/30 hover:shadow-[0_0_40px_rgba(21,101,192,0.12)]"
      }`}
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
          {page.icon}
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

          {/* Tags — dùng tagLight / tagDark riêng */}
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
function SmartAdvisorDetail() {
  const isLight = useTheme();

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
            isLight
              ? "border-slate-200 bg-white shadow-lg"
              : "border-white/10 bg-white/[0.03]"
          }`}
        >
          {/* <img
            src="/projects/smartadvisor.png"
            alt="Smart Learning Advisor"
            className="w-full h-72 object-cover"
          /> */}
          <div className="p-8">
            <div
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs mb-4 border font-semibold ${
                isLight
                  ? "bg-blue-50 border-blue-200 text-blue-600"
                  : "bg-blue-900/30 border-blue-400/30 text-blue-300"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              EIU · CIT · SWE 2023
            </div>

            <h1
              className={`text-3xl font-black mb-3 leading-tight ${isLight ? "text-slate-800" : "text-white"}`}
            >
              EIU/CIT{" "}
              <span className="text-sky-500">Smart Learning Advisor</span>
            </h1>

            <p
              className={`mb-8 leading-relaxed max-w-2xl mx-auto text-center ${
                isLight ? "text-slate-600" : "text-slate-400"
              }`}
            >
              Nền tảng tư vấn học tập thông minh tích hợp AI — giúp sinh viên
              EIU theo dõi GPA, trực quan hóa lộ trình học và nhận tư vấn học
              thuật cá nhân hóa theo thời gian thực.
            </p>

            <div className="flex gap-8 mb-8 flex-wrap justify-center">
              {[
                { n: "6", l: "Trang chính" },
                { n: "31", l: "Môn học" },
                { n: "AI", l: "Tư vấn thông minh" },
                { n: "PDF", l: "Xuất lộ trình" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl font-black text-sky-500">{s.n}</div>
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

            <div className="flex gap-3 flex-wrap">
              <a
                href="https://smartlearning.onrender.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(21,101,192,0.4)]"
              >
                🚀 Live Demo
              </a>
              <a
                href="https://github.com/Ly-Dat/SmartLearning"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5 border ${
                  isLight
                    ? "border-slate-300 text-slate-700 hover:border-sky-400 hover:text-sky-600"
                    : "border-white/20 text-white hover:border-sky-400 hover:text-sky-400"
                }`}
              >
                ⚡ GitHub
              </a>
            </div>
          </div>
        </div>

        {/* ── Pages ── */}
        <Pill label="Các trang" isLight={isLight} />
        <SectionTitle
          pre="Mô tả từng"
          accent="trang"
          desc="Hệ thống gồm 6 trang chính, mỗi trang giải quyết một nhu cầu cụ thể trong hành trình học tập của sinh viên."
          isLight={isLight}
        />
        {PAGES.map((page) => (
          <PageCard key={page.num} page={page} isLight={isLight} />
        ))}

        {/* ── Tech Stack ── */}
        <div className="mb-10">
          <Pill label="Tech Stack" isLight={isLight} />
          <SectionTitle
            pre="Công nghệ"
            accent="sử dụng"
            desc="Xây dựng trên nền tảng Node.js với kiến trúc MVC, tích hợp AI và database NoSQL để đảm bảo hiệu suất và khả năng mở rộng."
            isLight={isLight}
          />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {TECH.map((t) => (
              <div
                key={t.name}
                className={`rounded-2xl p-4 flex flex-col items-center gap-2 text-center border transition-all duration-200 hover:-translate-y-1 ${
                  isLight
                    ? "bg-white border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md"
                    : "bg-white/[0.03] border-white/10 hover:border-blue-400/40"
                }`}
              >
                <span className="text-2xl">{t.icon}</span>
                <span
                  className={`text-xs font-semibold ${isLight ? "text-slate-700" : "text-white"}`}
                >
                  {t.name}
                </span>
                <span
                  className={`text-[10px] ${isLight ? "text-slate-500" : "text-slate-500"}`}
                >
                  {t.role}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Architecture ── */}
        <div className="mb-4">
          <Pill label="Kiến trúc" isLight={isLight} />
          <SectionTitle
            pre="Kiến trúc"
            accent="hệ thống"
            desc="Mô hình MVC 3 tầng rõ ràng: Client → Server → Database với AI layer tích hợp ở tầng dịch vụ."
            isLight={isLight}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ARCH.map((layer) => (
              <div
                key={layer.title}
                className={`border rounded-2xl p-6 text-center ${
                  isLight ? layer.light : layer.dark
                }`}
              >
                <div className="text-3xl mb-3">{layer.icon}</div>
                <h4 className={`font-bold text-base mb-2 ${layer.titleColor}`}>
                  {layer.title}
                </h4>
                <p
                  className={`text-xs leading-relaxed ${isLight ? "text-slate-600" : "text-slate-400"}`}
                >
                  {layer.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SmartAdvisorDetail;
