import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const [langMode, setLangMode] = useState("en");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsLightMode(true);
      document.documentElement.classList.add("light");
    } else {
      setIsLightMode(false);
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }

    const storedLang = localStorage.getItem("language") || "en";
    setLangMode(storedLang);
  }, []);

  const toggleTheme = () => {
    if (isLightMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsLightMode(false);
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsLightMode(true);
    }
  };

  const toggleLang = () => {
    const newLang = langMode === "en" ? "vi" : "en";
    localStorage.setItem("language", newLang);
    setLangMode(newLang);
    window.location.reload();
  };

  const Buttons = ({ className }) => (
    <div className={cn("flex items-center gap-1", className)}>
      <button
        onClick={toggleLang}
        className={cn(
          "p-1 rounded-full transition-all duration-300 hover:scale-105",
          isLightMode ? "hover:bg-gray-100" : "hover:bg-white/10",
        )}
      >
        <img
          src={langMode === "vi" ? "/icons/flag-vi.png" : "/icons/flag-en.png"}
          alt="Language"
          className="w-6 h-6 object-cover rounded-full"
        />
      </button>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full focus:outline-hidden"
      >
        {isLightMode ? (
          <Moon className="h-6 w-6 text-blue-900" />
        ) : (
          <Sun className="h-6 w-6 text-yellow-300" />
        )}
      </button>
    </div>
  );

  return (
    <>
      {/* Mobile */}
      <Buttons className="md:hidden" />

      {/* Desktop */}
      <Buttons className="hidden md:flex fixed top-5 right-5 z-50" />
    </>
  );
};
