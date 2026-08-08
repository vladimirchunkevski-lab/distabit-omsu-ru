import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="w-full h-16 bg-[#4186f5] flex items-center shadow-[0_5px_12px_rgba(0,0,0,0.22)]">
      <div className="w-[1200px] h-full mx-auto flex items-center px-4">
        <Link to="/" className="flex items-center gap-3 text-white no-underline whitespace-nowrap text-[18px] font-semibold leading-none">
          <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
            <path d="M12 3 2 12h3v9h6v-6h2v6h6v-9h3z" />
          </svg>
          <span>Электронные сервисы Приемной комиссии ОмГУ</span>
        </Link>

        <nav className="ml-auto flex items-center h-full">
          <a href="#" className="text-white no-underline text-[14px] font-semibold leading-none whitespace-nowrap cursor-pointer hover:opacity-85">
            Конкурсные списки
          </a>
          <Link to="/lists" className="ml-8 text-white no-underline text-[14px] font-semibold leading-none whitespace-nowrap cursor-pointer hover:opacity-85">
            Списки поступающих
          </Link>
          <a href="#" className="ml-8 text-white no-underline text-[14px] font-semibold leading-none whitespace-nowrap cursor-pointer hover:opacity-85">
            Списки зачисленных
          </a>
          <a href="#" aria-label="Язык" className="ml-8 text-white hover:opacity-85">
            <svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <ellipse cx="12" cy="12" rx="4" ry="9" />
              <path d="M3 12h18" />
            </svg>
          </a>
          <a href="#" className="ml-8 flex items-center gap-3 text-white no-underline text-[14px] font-semibold hover:opacity-85">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M10 17l5-5-5-5" />
              <path d="M15 12H3" />
              <path d="M15 3h6v18h-6" />
            </svg>
            <span>Вход</span>
          </a>
        </nav>
      </div>
    </header>
  );
}