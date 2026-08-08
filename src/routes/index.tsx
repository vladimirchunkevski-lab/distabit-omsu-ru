import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import icon1 from "@/assets/distabit/portfolio-icon-1.png";
import icon6 from "@/assets/distabit/portfolio-icon-6.png";
import icon5 from "@/assets/distabit/portfolio-icon-5.png";
import icon4 from "@/assets/distabit/portfolio-icon-4.png";
import locationArrow from "@/assets/distabit/location-arrow.png";
import phoneArrow from "@/assets/distabit/phone-arrow.png";

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

const box =
  "group block rounded-[5px] px-[30px] py-[50px] text-center text-[#333] no-underline " +
  "transition-[transform,box-shadow,background-color] duration-300 translate-y-0 " +
  "hover:-translate-y-[5px] hover:bg-white hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)]";
const iconWrap = "block h-[160px] mb-[15px] flex items-end justify-center";
const iconImg =
  "grayscale transition-[filter] duration-300 group-hover:grayscale-0 max-w-full";
const title = "block text-[24px] leading-[1.1] font-medium mb-[10px]";
const intro = "block text-[16px] leading-[1.8]";

function Index() {
  return (
    <div className="min-h-screen bg-white text-[#333] font-[Roboto,Arial,sans-serif]">
      <SiteHeader />
      <main className="py-10">
        <div className="w-full max-w-[1140px] mx-auto px-[15px] flex flex-wrap">
          <div className="w-1/3 px-[15px] max-md:w-1/2 max-sm:w-full">
            <a className={box} href="https://www.gosuslugi.ru/vuzonline">
              <span className={iconWrap}>
                <img src={icon1} alt="" className={iconImg} />
              </span>
              <span className={title}>Подача заявления через Госуслуги</span>
            </a>
          </div>

          <div className="w-1/3 px-[15px] max-md:w-1/2 max-sm:w-full">
            <div className={box}>
              <span className={iconWrap}>
                <a href="https://distabit.omsu.ru/login">
                  <img src={icon6} alt="" className={iconImg} />
                </a>
              </span>
              <a className={`${title} no-underline text-inherit`} href="https://distabit.omsu.ru/login">
                Оформление договоров на обучение в ОмГУ
              </a>
              <span className={intro}>
                <u>
                  <a
                    className="text-[#515656] no-underline"
                    href="https://omsu.ru/abitur/inst/%D0%98%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F%20%D0%BF%D0%BE%20%D0%B4%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B0%D0%BC.pdf"
                  >
                    Инструкция по заключению договора в ОмГУ
                  </a>
                </u>
              </span>
            </div>
          </div>

          <div className="w-1/3 px-[15px] max-md:w-1/2 max-sm:w-full">
            <div className={box}>
              <span className={iconWrap}>
                <a href="/lists">
                  <img src={icon5} alt="" className={iconImg} />
                </a>
              </span>
              <a className={`${title} no-underline text-inherit`} href="/lists">
                Списки поступающих
              </a>
              <span className={intro}>
                <a className="text-[#515656] no-underline" href="/lists">
                  Информация о ходе приёма
                </a>
                <br />
                <a
                  href="https://distabit.omsu.ru/registration/search"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline"
                >
                  <b className="text-[#4285f4]">Поиск уникального кода</b>
                </a>
                <br />
                <span className="block leading-[1.8]">
                  <b className="text-[#239b56]">
                    Если бы зачисление было сегодня...{" "}
                    <a
                      href="https://omsu.ru/entrance/2026/zk.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-5 text-[#239b56] no-underline"
                    >
                      места по договорам (бак.,спец.)
                    </a>
                    <br />
                    <a
                      href="https://omsu.ru/entrance/2026/zbs.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-5 text-[#239b56] no-underline"
                    >
                      бюджетные места (СПО)
                    </a>
                  </b>
                </span>
              </span>
            </div>
          </div>

          <div className="w-1/3 px-[15px] max-md:w-1/2 max-sm:w-full">
            <a className={box} href="https://distabit.omsu.ru/screen">
              <span className={iconWrap}>
                <img src={icon5} alt="" className={iconImg} />
              </span>
              <span className={title}>Экран подачи заявлений</span>
              <span className={intro}>Плановый и фактический набор по направлениям</span>
            </a>
          </div>

          <div className="w-1/3 px-[15px] max-md:w-1/2 max-sm:w-full">
            <a className={box} target="_blank" rel="noreferrer" href="https://abit.omsu.ru/">
              <span className={iconWrap}>
                <img src={icon4} alt="" className={iconImg} />
              </span>
              <span className={title}>Приемная комиссия</span>
              <span className={intro}>Официальный сайт Приемной комиссии</span>
            </a>
          </div>

          <div className="w-1/3 px-[15px] max-md:w-1/2 max-sm:w-full">
            <address className="block not-italic pt-[50px] text-[16px]">
              <div className="relative mb-[30px] pl-[80px]">
                <div className="absolute left-0 top-0 w-[60px]">
                  <img src={locationArrow} alt="" className="w-[35px]" />
                </div>
                <p className="m-0">
                  <strong className="block mb-[10px] text-[14px]">Веб-сайт: </strong>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://abit.omsu.ru/"
                    className="text-[#515656] no-underline text-[14px]"
                  >
                    https://abit.omsu.ru/
                  </a>
                </p>
              </div>
              <div className="relative mb-[30px] pl-[80px]">
                <div className="absolute left-0 top-0 w-[60px]">
                  <img src={phoneArrow} alt="" className="w-[35px]" />
                </div>
                <p className="m-0">
                  <strong className="block mb-[10px] text-[14px]">Телефон: </strong>
                  <a href="callto:83812229772" className="text-[#515656] no-underline text-[14px]">
                    (3812) 22-97-72
                  </a>
                </p>
              </div>
            </address>
          </div>
        </div>
        <div className="mt-2 text-center text-[80%] text-[#a8a8a8]">
          Электронные сервисы Приемной комиссии ОмГУ - Версия 4.5.70
        </div>
      </main>
    </div>
  );
}
