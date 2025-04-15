import { tv } from "tailwind-variants";

export const gridTitle = tv({
  base: "capitalize font-[Poppins] font-medium text-[14px] lg:text-[16px] xl:text-[22px] text-[#93989A] mb-[48px]",
  variants: {
    onlyLarge: {
      true: "hidden lg:block",
    },
    textStart: {
      true: "text-start self-start",
    },
    mobileTextEnd: {
      true: "self-end text-end lg:self-center lg:text-center",
    },
  },
});
