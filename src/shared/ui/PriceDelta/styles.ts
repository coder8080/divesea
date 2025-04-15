import { tv } from "tailwind-variants"

export const priceDelta = tv({
  base: "font-[Poppins]",
  variants: {
    onlyLarge: {
      true: "hidden lg:block",
    },
    size: {
      sm: "text-[6px] lg:text-[10px] xl:text-[14px]",
      lg: "text-[14px] lg:text-[18px] xl:text-[24px]",
    },
    profit: {
      true: "text-[#10c352]",
      false: "text-[#e23333]",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
    },
  },
})
