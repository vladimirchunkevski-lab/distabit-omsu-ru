import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import {
  DocIllustration,
  ScreensIllustration,
  PhoneGearIllustration,
  GlobeIllustration,
} from "@/components/illustrations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Приемная комиссия 2026 — Электронные сервисы ОмГУ" },
      {
        name: "description",
        content:
          "Электронные сервисы Приемной комиссии ОмГУ: подача заявления, договоры, списки поступающих и контакты.",
      },
      { property: "og:title", content: "Приемная комиссия 2026 — Электронные сервисы ОмГУ" },
      {
        property: "og:description",
        content: "Подача заявления, договоры на обучение, списки поступающих ОмГУ.",
      },
    ],
  }),
  component: Index,
});

const imgArea = "h-[175px] flex justify-center items-start";

function Index() {
  return (
    <div className="min-h-screen bg-white text-[#292929] font-[Arial,Roboto,sans-serif]">
      <SiteHeader />
      <main className="w-full">
        <div className="w-[1140px] mx-auto pt-[107px] grid grid-cols-[repeat(3,380px)]">
          <section className="w-[380px] text-center">
            <div className={imgArea}>
              <DocIllustration className="w-[165px] h-[150px]" />
            </div>
            <a href="#" className="block cursor-pointer hover:opacity-85 no-underline text-inherit">
              <h2 className="m-0 text-[24px] leading-[24px] font-medium">
                Подача заявления через
                <br />
                Госуслуги
              </h2>
            </a>
          </section>

          <section className="w-[380px] text-center">
            <div className={imgArea}>
              <ScreensIllustration className="w-[175px] h-[135px]" />
            </div>
            <h2 className="m-0 text-[24px] leading-[24px] font-medium">
              Оформление договоров
              <br />
              на обучение в ОмГУ
            </h2>
            <a
              href="#"
              className="inline-block mt-3 text-[#444] text-[16px] leading-[27px] underline cursor-pointer hover:opacity-85"
            >
              Инструкция по заключению
              <br />
              договора в ОмГУ
            </a>
          </section>

          <section className="w-[380px] text-center">
            <div className={imgArea}>
              <PhoneGearIllustration className="w-[175px] h-[135px]" />
            </div>
            <h2 className="m-0 text-[24px] leading-[24px] font-medium">Списки поступающих</h2>
            <p className="mt-[10px] mb-0 text-[16px] leading-[27px]">Информация о ходе приёма</p>
            <a
              href="#"
              className="block text-[#4186f5] text-[16px] leading-[29px] font-semibold no-underline cursor-pointer hover:opacity-85"
            >
              Поиск уникального кода
            </a>
            <a
              href="#"
              className="block mt-[9px] text-[#27895c] text-[16px] leading-[28px] font-semibold no-underline cursor-pointer hover:opacity-85"
            >
              Если бы зачисление было сегодня...
            </a>
            <a
              href="#"
              className="block text-[#27895c] text-[16px] leading-[28px] font-semibold no-underline cursor-pointer hover:opacity-85"
            >
              места по договорам (бак.,спец.)
            </a>
            <a
              href="#"
              className="block text-[#27895c] text-[16px] leading-[28px] font-semibold no-underline cursor-pointer hover:opacity-85"
            >
              бюджетные места (СПО)
            </a>
          </section>

          <section className="w-[380px] text-center mt-[86px]">
            <div className={imgArea}>
              <PhoneGearIllustration className="w-[175px] h-[135px]" />
            </div>
            <a href="#" className="block cursor-pointer hover:opacity-85 no-underline text-inherit">
              <h2 className="m-0 text-[24px] leading-[24px] font-medium">Экран подачи заявлений</h2>
            </a>
            <p className="mt-[10px] mb-0 text-[16px] leading-[27px]">
              Плановый и фактический набор по
              <br />
              направлениям
            </p>
          </section>

          <section className="w-[380px] text-center mt-[86px]">
            <div className={imgArea}>
              <GlobeIllustration className="w-[175px] h-[135px]" />
            </div>
            <a href="#" className="block cursor-pointer hover:opacity-85 no-underline text-inherit">
              <h2 className="m-0 text-[24px] leading-[24px] font-medium">Приемная комиссия</h2>
            </a>
            <p className="mt-[10px] mb-0 text-[16px] leading-[27px]">
              Официальный сайт Приемной
              <br />
              комиссии
            </p>
          </section>

          <aside className="w-[380px] mt-[86px] pt-[10px] pl-[34px]">
            <div className="flex items-start gap-7">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="#4186f5" aria-hidden="true">
                <path d="M2 12l20-8-8 20-2.5-8z" />
              </svg>
              <div>
                <div className="mb-[14px] text-[14px] font-bold">Веб-сайт:</div>
                <a
                  href="https://abit.omsu.ru/"
                  className="text-[#333] text-[14px] no-underline cursor-pointer hover:opacity-85"
                >
                  https://abit.omsu.ru/
                </a>
              </div>
            </div>
            <div className="flex items-start gap-7 mt-8">
              <svg viewBox="0 0 24 24" width="28" height="28" fill="#4186f5" aria-hidden="true">
                <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11 11 0 003.5.56 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11 11 0 00.56 3.5 1 1 0 01-.25 1z" />
              </svg>
              <div>
                <div className="mb-[14px] text-[14px] font-bold">Телефон:</div>
                <a
                  href="tel:+73812229772"
                  className="text-[#333] text-[14px] no-underline cursor-pointer hover:opacity-85"
                >
                  (3812) 22-97-72
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
