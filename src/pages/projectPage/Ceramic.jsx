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
        vi: "Xác thực JWT và bảo vệ route",
        en: "JWT authentication and route protection",
      }),
      lang({
        vi: "Giao diện responsive và thân thiện",
        en: "Responsive and user-friendly interface",
      }),
      lang({
        vi: "Quản lý trạng thái đăng nhập",
        en: "Login session management",
      }),
    ],
    dotColor: "bg-blue-500",
    tags: ["React", "ASP.NET Core", "JWT"],
    tagDark: "bg-blue-900/40 text-blue-300 border border-blue-700/40",
    tagLight: "bg-blue-100 text-blue-700 border border-blue-200",
    img: "/CeramicShop/login.png",
  },
  {
    num: "02",
    icon: "LayoutDashboard",
    iconBg: "bg-amber-400/30",
    title: lang({ vi: "Dashboard", en: "Dashboard" }),
    subtitle: lang({
      vi: "Tổng quan cửa hàng và thống kê bán hàng",
      en: "Store overview and sales analytics",
    }),
    features: [
      lang({
        vi: "Thống kê doanh thu theo ngày/tuần/tháng",
        en: "Revenue stats by day/week/month",
      }),
      lang({
        vi: "Hiển thị sản phẩm bán chạy",
        en: "Best-selling products display",
      }),
      lang({
        vi: "Biểu đồ tổng quan đơn hàng",
        en: "Order overview charts",
      }),
      lang({
        vi: "Quick links đến các tính năng quản lý",
        en: "Quick links to management features",
      }),
    ],
    dotColor: "bg-amber-400",
    tags: ["React", "Recharts", "REST API"],
    tagDark: "bg-amber-900/40 text-amber-300 border border-amber-700/40",
    tagLight: "bg-amber-100 text-amber-700 border border-amber-200",
    img: "/CeramicShop/dashboard.png",
  },

  {
    num: "03",
    icon: "ShoppingBag",
    iconBg: "bg-orange-900/30",
    title: lang({ vi: "Trang sản phẩm", en: "Product Page" }),
    subtitle: lang({
      vi: "Danh sách và chi tiết sản phẩm gốm",
      en: "Ceramic product listing and details",
    }),
    features: [
      lang({
        vi: "Hiển thị danh sách sản phẩm gốm theo danh mục",
        en: "Display ceramics by category",
      }),
      lang({
        vi: "Bộ lọc theo giá, loại, chất liệu",
        en: "Filter by price, type, material",
      }),
      lang({
        vi: "Trang chi tiết sản phẩm với hình ảnh gallery",
        en: "Product detail page with image gallery",
      }),
      lang({
        vi: "Thêm vào giỏ hàng và đặt mua",
        en: "Add to cart and purchase",
      }),
    ],
    dotColor: "bg-orange-500",
    tags: ["React", "ASP.NET Core", "MongoDB"],
    tagDark: "bg-orange-900/40 text-orange-300 border border-orange-700/40",
    tagLight: "bg-orange-100 text-orange-700 border border-orange-200",
    img: "/CeramicShop/products.png",
  },

  {
    num: "04",
    icon: "Bot",
    iconBg: "bg-teal-900/30",
    title: lang({ vi: "Chat AI Tư Vấn", en: "AI Product Chatbot" }),
    subtitle: lang({
      vi: "Chatbot MCP hỏi đáp về sản phẩm gốm",
      en: "MCP chatbot for ceramic product Q&A",
    }),
    features: [
      lang({
        vi: "Hỏi đáp thông tin sản phẩm bằng ngôn ngữ tự nhiên",
        en: "Natural language product Q&A",
      }),
      lang({
        vi: "Gợi ý sản phẩm phù hợp theo nhu cầu",
        en: "Personalized product recommendations",
      }),
      lang({
        vi: "Streaming response realtime",
        en: "Real-time streaming responses",
      }),
      lang({
        vi: "Tích hợp MCP protocol với dữ liệu sản phẩm",
        en: "MCP protocol integrated with product data",
      }),
    ],
    dotColor: "bg-teal-500",
    tags: ["MCP", "AI API", "Streaming"],
    tagDark: "bg-teal-900/40 text-teal-300 border border-teal-700/40",
    tagLight: "bg-teal-100 text-teal-700 border border-teal-200",
    img: "/CeramicShop/chatbot.png",
  },

  {
    num: "05",
    icon: "Settings2",
    iconBg: "bg-slate-700/50",
    title: lang({ vi: "Admin Panel", en: "Admin Panel" }),
    subtitle: lang({
      vi: "Quản lý sản phẩm, menu và nội dung hiển thị",
      en: "Manage products, menu and display content",
    }),
    features: [
      lang({
        vi: "CRUD sản phẩm: thêm, sửa, xóa đồ gốm",
        en: "CRUD products: add, edit, delete ceramics",
      }),
      lang({
        vi: "Quản lý menu điều hướng hiển thị",
        en: "Navigation menu display management",
      }),
      lang({
        vi: "Bật/tắt hiển thị từng mục menu linh hoạt",
        en: "Toggle menu item visibility dynamically",
      }),
      lang({
        vi: "Upload và quản lý hình ảnh sản phẩm",
        en: "Upload and manage product images",
      }),
    ],
    dotColor: "bg-slate-400",
    tags: ["Admin", "CRUD", "React"],
    tagDark: "bg-slate-700/50 text-slate-300 border border-slate-600/40",
    tagLight: "bg-slate-100 text-slate-700 border border-slate-200",
    img: "/CeramicShop/menu.png",
  },

  {
    num: "06",
    icon: "Grid2X2",
    iconBg: "bg-purple-900/30",
    title: lang({ vi: "Lucide Icon Explorer", en: "Lucide Icon Explorer" }),
    subtitle: lang({
      vi: "Trang xem toàn bộ icon của lucide-react",
      en: "Browse all lucide-react icons",
    }),
    features: [
      lang({
        vi: "Hiển thị toàn bộ icon từ lucide-react",
        en: "Display all icons from lucide-react",
      }),
      lang({
        vi: "Tìm kiếm icon theo tên nhanh chóng",
        en: "Quick search icons by name",
      }),
      lang({
        vi: "Copy tên icon chỉ với một click",
        en: "One-click copy icon name",
      }),
      lang({
        vi: "Preview size và màu tuỳ chỉnh",
        en: "Preview with custom size and color",
      }),
    ],
    dotColor: "bg-purple-500",
    tags: ["lucide-react", "React", "UI Tool"],
    tagDark: "bg-purple-900/40 text-purple-300 border border-purple-700/40",
    tagLight: "bg-purple-100 text-purple-700 border border-purple-200",
    img: "/CeramicShop/icon.png",
  },
];

const TECH = [
  { icon: "Layers", name: "React", role: "Frontend" },
  { icon: "Server", name: "ASP.NET Core", role: "Backend" },
  { icon: "Database", name: "MongoDB", role: "Database" },
  { icon: "Bot", name: "AI API", role: "AI Integration" },
  { icon: "Cpu", name: "MCP", role: "Chatbot Protocol" },
  { icon: "Wind", name: "Tailwind", role: "Styling" },
  { icon: "Image", name: "Cloudinary", role: "Image Storage" },
  { icon: "Shield", name: "JWT", role: "Authentication" },
];

const ARCH = [
  {
    icon: "Monitor",
    title: "Frontend",
    dark: "border-sky-500/30 bg-sky-900/10",
    light: "border-sky-200 bg-sky-50",
    titleColor: "text-sky-500",
    desc: "React · Tailwind CSS · Lucide Icons · MCP Chat UI · Streaming Response",
  },
  {
    icon: "Settings",
    title: "Backend",
    dark: "border-orange-500/30 bg-orange-900/10",
    light: "border-orange-200 bg-orange-50",
    titleColor: "text-orange-500",
    desc: "ASP.NET Core · REST API · JWT Auth · MCP Chatbot · Product & Menu Management",
  },
  {
    icon: "Database",
    title: "Database",
    dark: "border-emerald-500/30 bg-emerald-900/10",
    light: "border-emerald-200 bg-emerald-50",
    titleColor: "text-emerald-600",
    desc: "MongoDB Atlas · Products, Categories, Orders, Users, Menu Config",
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
        vi: "Xây dựng REST API với ASP.NET Core cho quản lý sản phẩm gốm",
        en: "Built REST APIs with ASP.NET Core for ceramic product management",
      }),
      lang({
        vi: "Thiết kế MongoDB schema cho products, categories, orders",
        en: "Designed MongoDB schemas for products, categories, and orders",
      }),
      lang({
        vi: "Triển khai JWT authentication và phân quyền admin/user",
        en: "Implemented JWT authentication and admin/user role-based access",
      }),
      lang({
        vi: "API quản lý menu động: bật/tắt hiển thị từng mục",
        en: "Dynamic menu management API: toggle visibility per item",
      }),
    ],
  },
  {
    icon: "LayoutDashboard",
    color: "text-amber-500",
    dot: "bg-amber-500",
    ringDark: "ring-amber-500/20",
    ringLight: "ring-amber-200",
    title: lang({ vi: "Phát triển Frontend", en: "Frontend Development" }),
    items: [
      lang({
        vi: "Xây dựng toàn bộ UI: Dashboard, Product, Admin Panel",
        en: "Built full UI: Dashboard, Product Page, Admin Panel",
      }),
      lang({
        vi: "Trang sản phẩm với bộ lọc, gallery ảnh và giỏ hàng",
        en: "Product page with filters, image gallery, and cart",
      }),
      lang({
        vi: "Trang Admin quản lý menu hiển thị linh hoạt",
        en: "Admin panel with flexible menu display management",
      }),
      lang({
        vi: "Xây dựng Lucide Icon Explorer: tìm kiếm và copy icon",
        en: "Built Lucide Icon Explorer with search and copy features",
      }),
    ],
  },
  {
    icon: "Bot",
    color: "text-teal-500",
    dot: "bg-teal-500",
    ringDark: "ring-teal-500/20",
    ringLight: "ring-teal-200",
    title: lang({ vi: "AI Chatbot MCP", en: "AI MCP Chatbot" }),
    items: [
      lang({
        vi: "Tích hợp chatbot AI dùng MCP protocol kết nối dữ liệu sản phẩm",
        en: "Integrated AI chatbot via MCP protocol connected to product data",
      }),
      lang({
        vi: "Hỗ trợ khách hỏi đáp về sản phẩm gốm bằng ngôn ngữ tự nhiên",
        en: "Natural language Q&A about ceramic products for customers",
      }),
      lang({
        vi: "Giao diện chat với streaming response realtime",
        en: "Chat UI with real-time streaming responses",
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
          ? "bg-amber-50 border-amber-200 text-amber-700"
          : "bg-amber-900/30 border-amber-400/25 text-amber-400"
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
        {pre} <span className="text-amber-500">{accent}</span>
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
          ? "border-slate-200 bg-white shadow-md hover:shadow-xl hover:border-amber-300"
          : "border-white/10 hover:border-amber-400/30 hover:shadow-[0_0_40px_rgba(251,191,36,0.10)]"
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
function CeramicShopDetail() {
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
            {/* Badges */}
            <div
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs mb-4 border font-semibold ${
                isLight
                  ? "bg-amber-50 border-amber-200 text-amber-700"
                  : "bg-amber-900/30 border-amber-400/30 text-amber-300"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              {lang({
                vi: "Dự án cá nhân - EIU - CIT",
                en: "Personal Project - EIU - CIT",
              })}
            </div>

            <h1
              className={`text-3xl font-black mb-3 leading-tight text-center ${
                isLight ? "text-slate-800" : "text-white"
              }`}
            >
              <span className="text-amber-500">Tân Chí Tài</span> Ceramic
              Platform
            </h1>

            <p
              className={`mb-8 leading-relaxed max-w-2xl mx-auto text-center ${
                isLight ? "text-slate-600" : "text-slate-400"
              }`}
            >
              {lang({
                vi: "Nền tảng thương mại điện tử chuyên biệt cho đồ gốm thủ công, tích hợp chatbot AI MCP tư vấn sản phẩm theo thời gian thực, hệ thống admin quản lý menu linh hoạt và công cụ tra cứu icon lucide-react.",
                en: "A specialized e-commerce platform for handcrafted ceramics, featuring an AI MCP chatbot for real-time product consultation, a flexible admin menu management system, and a built-in lucide-react icon explorer tool.",
              })}
            </p>

            {/* Stats */}
            <div className="flex gap-8 mb-8 flex-wrap justify-center">
              {[
                { n: "5", l: lang({ vi: "Tính năng", en: "Features" }) },
                { n: "AI", l: lang({ vi: "Chatbot", en: "Chatbot" }) },
                { n: "MCP", l: lang({ vi: "Protocol", en: "Protocol" }) },
                { n: "Solo", l: lang({ vi: "Dev", en: "Dev" }) },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <div className="text-2xl font-black text-amber-500">
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
              <div className="font-semibold mb-2 text-amber-400">
                Demo Account
              </div>
              <div className="flex flex-col gap-1">
                <div>
                  <span className="font-bold">Name:</span>{" "}
                  <span className="font-mono">customer</span>
                </div>
                <div>
                  <span className="font-bold">Password:</span>{" "}
                  <span className="font-mono">123</span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 flex-wrap justify-center">
              <a
                href="https://web-ceramic-wunm.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(251,191,36,0.35)]"
              >
                {Rocket && <Rocket />}{" "}
                {lang({ vi: "Xem demo", en: "Live Demo" })}
              </a>
              <a
                href="https://github.com/Ly-Dat/web_ceramic"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all hover:-translate-y-0.5 border ${
                  isLight
                    ? "border-slate-300 text-slate-700 hover:border-amber-400 hover:text-amber-600"
                    : "border-white/20 text-white hover:border-amber-400 hover:text-amber-400"
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
              vi: "Tự thiết kế và phát triển toàn bộ hệ thống từ Backend ASP.NET Core, Frontend React, đến tích hợp AI chatbot MCP — hoàn toàn một mình.",
              en: "Independently designed and built the entire system — from ASP.NET Core backend and React frontend to AI MCP chatbot integration.",
            })}
            isLight={isLight}
          />

          {/* Role badge */}
          <div className="flex justify-center mb-8">
            <span
              className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold border ${
                isLight
                  ? "bg-amber-50 border-amber-200 text-amber-700"
                  : "bg-amber-900/30 border-amber-400/30 text-amber-300"
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              {lang({
                vi: "Fullstack Developer (Cá nhân)",
                en: "Fullstack Developer (Solo)",
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
                        ? "bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-amber-200"
                        : "border-white/10 hover:border-amber-400/30"
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
            vi: "Hệ thống gồm 5 tính năng chính: từ cửa hàng gốm trực tuyến, chatbot AI tư vấn đến admin quản lý menu và công cụ icon explorer.",
            en: "The platform includes 5 core features: from an online ceramic shop and AI chatbot to admin menu management and an icon explorer tool.",
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
              vi: "Xây dựng trên React + ASP.NET Core với MongoDB, tích hợp AI MCP chatbot và JWT authentication.",
              en: "Built on React + ASP.NET Core with MongoDB, integrating AI MCP chatbot and JWT authentication.",
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
                      ? "bg-white border-slate-200 shadow-sm hover:border-amber-300 hover:shadow-md"
                      : "border-white/10 hover:border-amber-400/40"
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
              vi: "Kiến trúc 3 tầng: React Frontend → ASP.NET Core Backend → MongoDB, với AI MCP layer tích hợp ở tầng dịch vụ.",
              en: "3-tier architecture: React Frontend → ASP.NET Core Backend → MongoDB, with AI MCP layer integrated at the service level.",
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

export default CeramicShopDetail;
