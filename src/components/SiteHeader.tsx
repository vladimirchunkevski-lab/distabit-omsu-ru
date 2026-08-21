import { Link, useNavigate } from "@tanstack/react-router";
import { ImagePlus, Menu, X } from "lucide-react";
import { useId, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function SiteHeader() {
  const navigate = useNavigate();
  const photoInputId = useId();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPhotoSelected, setIsPhotoSelected] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDialogChange = (open: boolean) => {
    setIsDialogOpen(open);
    if (!open) setIsPhotoSelected(false);
  };

  const handleConfirm = () => {
    if (!isPhotoSelected) return;
    setIsDialogOpen(false);
    setIsPhotoSelected(false);
    void navigate({ to: "/lists" });
  };

  return (
    <header className="w-full min-h-16 bg-[#4186f5] flex items-center shadow-[0_5px_12px_rgba(0,0,0,0.22)]">
      <div className="w-[1200px] min-h-16 mx-auto flex items-center px-4">
        <Link to="/" className="flex items-center gap-3 text-white no-underline whitespace-nowrap text-[18px] font-semibold leading-none">
          <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
            <path d="M12 3 2 12h3v9h6v-6h2v6h6v-9h3z" />
          </svg>
          <span>Электронные сервисы Приемной комиссии ОмГУ</span>
        </Link>

        <nav className="ml-auto flex items-center h-full">
          <Dialog open={isDialogOpen} onOpenChange={handleDialogChange}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="border-0 bg-transparent p-0 ml-2 text-white text-[14px] font-semibold leading-none whitespace-nowrap cursor-pointer hover:opacity-85"
              >
                Получить предварительные списки
              </button>
            </DialogTrigger>
            <DialogContent className="w-[calc(100%-2rem)] max-w-[520px] gap-0 border-0 p-0 overflow-hidden rounded-[6px] bg-white text-[#333]">
              <DialogHeader className="px-7 pt-7 pb-5 pr-12">
                <DialogTitle className="text-[20px] leading-snug font-medium">
                  Подтверждение личности
                </DialogTitle>
                <DialogDescription className="pt-2 text-[15px] leading-relaxed text-[#555]">
                  Прикрепите фотографию паспорта, для подтверждения личности
                </DialogDescription>
              </DialogHeader>

              <div className="px-7 pb-7">
                <input
                  id={photoInputId}
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={(event) => {
                    const hasSelectedPhoto = Boolean(event.currentTarget.files?.length);
                    event.currentTarget.value = "";
                    setIsPhotoSelected(hasSelectedPhoto);
                  }}
                />
                <label
                  htmlFor={photoInputId}
                  className={`flex min-h-[138px] cursor-pointer flex-col items-center justify-center rounded-[5px] border-2 border-dashed px-5 text-center transition-colors ${
                    isPhotoSelected
                      ? "border-[#239b56] bg-[#f1fbf5] text-[#1d8248]"
                      : "border-[#cfd3d8] bg-[#fafafa] text-[#666] hover:border-[#4285f4] hover:bg-[#f6f9ff]"
                  }`}
                >
                  <ImagePlus className="mb-3 h-8 w-8" strokeWidth={1.7} aria-hidden="true" />
                  <span className="text-[14px] font-medium">
                    {isPhotoSelected ? "Фотография выбрана" : "Выберите фотографию"}
                  </span>
                  <span className="mt-1 text-[12px] opacity-75">
                    {isPhotoSelected ? "Можно подтвердить и продолжить" : "Нажмите, чтобы выбрать файл"}
                  </span>
                </label>
              </div>

              <DialogFooter className="border-t border-[#e5e5e5] bg-[#fafafa] px-7 py-4">
                <button
                  type="button"
                  disabled={!isPhotoSelected}
                  onClick={handleConfirm}
                  className={`h-[40px] min-w-[130px] rounded-[4px] border-0 px-5 text-[14px] font-semibold text-white transition-colors ${
                    isPhotoSelected
                      ? "cursor-pointer bg-[#239b56] hover:bg-[#1d8248]"
                      : "cursor-not-allowed bg-[#aeb4ba]"
                  }`}
                >
                  Подтвердить
                </button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
