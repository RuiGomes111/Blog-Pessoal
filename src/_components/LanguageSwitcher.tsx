"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lang: string) => {
    router.push(`/${lang}${pathname?.replace(/^\/(pt|en)/, "")}`);
  };

  return (
    <div className="flex font-bold mr-10 text-[#3178C6] pointer">
      <button
        onClick={() => changeLanguage("pt")}
        className="px-3 py-1 rounded text-[#3178C6]"
      >
        PT
      </button>
      |
      <button
        onClick={() => changeLanguage("en")}
        className="px-3 py-1 rounded text-[#E6E6E6] "
      >
        EN
      </button>
    </div>
  );
}
