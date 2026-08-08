import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { specialties } from "@/data/specialties";

export const Route = createFileRoute("/lists")({
  head: () => ({
    meta: [
      { title: "Списки поступающих — Приемная комиссия ОмГУ" },
      {
        name: "description",
        content:
          "Списки, подавших на поступление в Омский государственный университет им. Ф.М. Достоевского.",
      },
      { property: "og:title", content: "Списки поступающих — Приемная комиссия ОмГУ" },
      {
        property: "og:description",
        content: "Списки, подавших на поступление в ОмГУ им. Ф.М. Достоевского.",
      },
    ],
  }),
  component: ListsPage,
});

function ListLink() {
  return (
    <a
      href="#"
      className="text-[#4285f4] text-[14px] no-underline transition-colors duration-200 hover:text-[#1a5fd0] hover:underline"
    >
      Список
    </a>
  );
}

function ListsPage() {
  return (
    <div className="min-h-screen bg-white text-[#333] font-[Roboto,Arial,sans-serif]">
      <SiteHeader />
      <main className="w-full max-w-[1140px] mx-auto px-[15px] pt-[26px] pb-16">
        <h1 className="m-0 text-[20px] font-medium text-[#5a5a5a]">
          Списки, подавших на поступление
        </h1>
        <div className="mt-[6px] flex items-center gap-2 text-[14px] text-[#666]">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
            <path d="M12 3 2 12h3v9h6v-6h2v6h6v-9h3z" />
          </svg>
          <span>/ Списки поступающих</span>
        </div>

        <h2 className="mt-[24px] text-center text-[22px] font-medium">
          Омский государственный университет им. Ф.М. Достоевского
        </h2>

        <div className="mt-[26px] flex flex-wrap items-center justify-center gap-6 text-[14px]">
          <label className="flex items-center gap-3">
            <span className="text-[#444]">Форма обучения</span>
            <select className="h-[38px] w-[200px] border border-[#ccc] rounded-[3px] px-2 bg-white outline-none transition-colors duration-200 focus:border-[#4285f4]">
              <option>Очная форма</option>
              <option>Очно-заочная форма</option>
              <option>Заочная форма</option>
            </select>
          </label>
          <label className="flex items-center gap-3">
            <span className="text-[#444]">Уровень образования</span>
            <select className="h-[38px] w-[300px] border border-[#ccc] rounded-[3px] px-2 bg-white outline-none transition-colors duration-200 focus:border-[#4285f4]">
              <option>Бакалавриат/Специалитет</option>
              <option>Магистратура</option>
              <option>Аспирантура</option>
            </select>
          </label>
        </div>

        <table className="mt-[28px] mx-auto w-full max-w-[1110px] border-collapse text-[14px] animate-fade-in">
          <thead>
            <tr>
              <th rowSpan={2} className="border border-[#ddd] w-[70px] py-4 font-normal">
                Код
              </th>
              <th rowSpan={2} className="border border-[#ddd] py-4 font-normal">
                НАПРАВЛЕНИЕ / СПЕЦИАЛЬНОСТЬ
              </th>
              <th colSpan={5} className="border border-[#ddd] py-2 font-normal">
                Условия обучения
              </th>
            </tr>
            <tr>
              <th className="border border-[#ddd] w-[110px] py-2 font-normal">Общие основания</th>
              <th className="border border-[#ddd] w-[110px] py-2 font-normal">Особое право</th>
              <th className="border border-[#ddd] w-[110px] py-2 font-normal">Отдельная квота</th>
              <th className="border border-[#ddd] w-[110px] py-2 font-normal">Целевой прием</th>
              <th className="border border-[#ddd] w-[110px] py-2 font-normal">
                По договорам на обучение
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={7} className="border border-[#ddd] text-center font-medium py-2">
                Омский государственный университет им. Ф.М. Достоевского
              </td>
            </tr>
            {specialties.map(([code, name, cols], i) => (
              <tr
                key={`${code}-${i}`}
                className={`transition-colors duration-200 hover:bg-[#eef4fe] ${
                  i % 2 === 1 ? "bg-[#f7f7f7]" : ""
                }`}
              >
                <td className="border border-[#ddd] text-center py-2 px-2">{code}</td>
                <td className="border border-[#ddd] px-2 py-2">{name}</td>
                {cols.map((c, j) => (
                  <td key={j} className="border border-[#ddd] text-center py-2">
                    {c ? <ListLink /> : null}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}