import { tv } from "tailwind-variants";

export const recent = tv({
  base: "bg-white rounded-2xl flex-col gap-[12px] lg:gap-[28px] w-[150px] lg:w-[365px] px-[10px] lg:px-[24px] py-[11px] lg:py-[26px]",
  variants: {
    onlyLarge: {
      true: "hidden lg:flex",
    },
    position: {
      left: "flex absolute left-0 bottom-0 translate-y-1/3 -translate-x-1/2 shadow-xl border border-[#EDF2F7]",
      right: "absolute right-[80px] bottom-0 translate-y-1/2 hidden lg:flex",
    },
  },
});
