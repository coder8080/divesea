import { tv } from "tailwind-variants";

export const recent = tv({
  base: "bg-white rounded-2xl flex-col gap-[12px] gap-[20px] xl:gap-[28px] w-[150px] lg:w-[230px] xl:w-[365px] px-[10px] lg:px-[15px] xl:px-[24px] py-[11px] lg:py-[17px] xl:py-[26px]",
  variants: {
    onlyLarge: {
      true: "hidden lg:flex",
    },
    position: {
      left: "flex absolute left-0 bottom-0 translate-y-1/3 -translate-x-1/2 shadow-xl border border-[#EDF2F7]",
      right:
        "absolute right-[60px] xl:right-[80px] bottom-0 translate-y-1/2 hidden lg:flex",
    },
  },
});
