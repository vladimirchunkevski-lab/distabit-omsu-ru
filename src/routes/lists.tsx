import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";

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

const rows = [
  { code: "27.03.05", name: "Инноватика", extra: false },
  { code: "37.03.01", name: "Психология", extra: false },
  { code: "38.03.01", name: "Экономика", extra: false },
  { code: "38.03.02", name: "Менеджмент", extra: false },
  { code: "38.03.03", name: "Управление персоналом", extra: false },
  { code: "38.03.04", name: "Государственное и муниципальное управление", extra: false },
  { code: "40.03.01", name: "Юриспруденция", extra: true },
];

function ListLink() {
  return (
    <a href="#" className="text-[#4186f5] text-[14px] no-underline cursor-pointer hover:opacity-85">
      Список
    </a>
  );
}

function ListsPage() {
  return (
    <div className="min-h-screen bg-white text-[#292929] font-[Arial,Roboto,sans-serif]">
      <SiteHeader />
      <main className="w-[1140px] mx-auto pt-[26px]">
        <h1 className="m-0 text-[20px] font-semibold text-[#5a5a5a]">
          Списки, подавших на поступление
        </h1>
        <div className="mt-[6px] flex items-center gap-2 text-[14px] text-[#666]">
          <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" aria-hidden="true">
            <path d="M12 3 2 12h3v9h6v-6h2v6h6v-9h3z" />
          </svg>
          <span>/ Списки поступающих</span>
        </div>

        <h2 className="mt-[24px] text-center text-[22px] font-bold">
          Омский государственный университет им. Ф.М. Достоевского
        </h2>

        <div className="mt-[26px] flex items-center justify-center gap-6 text-[14px]">
          <label className="flex items-center gap-3">
            <span className="text-[#444]">Форма обучения</span>
            <select className="h-[38px] w-[200px] border border-[#ccc] rounded-[3px] px-2 bg-white">
              <option>Очно-заочная форма</option>
              <option>Очная форма</option>
              <option>Заочная форма</option>
            </select>
          </label>
          <label className="flex items-center gap-3">
            <span className="text-[#444]">Уровень образования</span>
            <select className="h-[38px] w-[300px] border border-[#ccc] rounded-[3px] px-2 bg-white">
              <option>Бакалавриат/Специалитет</option>
              <option>Магистратура</option>
              <option>Аспирантура</option>
            </select>
          </label>
        </div>

        <table className="mt-[28px] mx-auto w-[1110px] border-collapse text-[14px]">
          <thead>
            <tr>
              <th rowSpan={2} className="border border-[#ddd] w-[120px] py-4">
                Код
              </th>
              <th rowSpan={2} className="border border-[#ddd] py-4">
                НАПРАВЛЕНИЕ / СПЕЦИАЛЬНОСТЬ
              </th>
              <th colSpan={4} className="border border-[#ddd] py-2 font-normal">
                Условия обучения
              </th>
            </tr>
            <tr>
              <th className="border border-[#ddd] w-[110px] py-2 font-normal">Общие основания</th>
              <th className="border border-[#ddd] w-[110px] py-2 font-normal">Особое право</th>
              <th className="border border-[#ddd] w-[110px] py-2 font-normal">Отдельная квота</th>
              <th className="border border-[#ddd] w-[110px] py-2 font-normal">
                По договорам на обучение
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={6} className="border border-[#ddd] text-center font-bold py-2">
                Омский государственный университет им. Ф.М. Достоевского
              </td>
            </tr>
            {rows.map((r, i) => (
              <tr key={r.code} className={i % 2 === 1 ? "bg-[#f7f7f7]" : undefined}>
                <td className="border border-[#ddd] text-center py-2">{r.code}</td>
                <td className="border border-[#ddd] px-2 py-2">{r.name}</td>
                <td className="border border-[#ddd] text-center py-2">{r.extra && <ListLink />}</td>
                <td className="border border-[#ddd] text-center py-2">{r.extra && <ListLink />}</td>
                <td className="border border-[#ddd] text-center py-2">{r.extra && <ListLink />}</td>
                <td className="border border-[#ddd] text-center py-2">
                  <ListLink />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}