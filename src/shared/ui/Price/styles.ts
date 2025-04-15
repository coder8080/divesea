import { tv } from "tailwind-variants"

export const container = tv({
  base: "flex-row items-center gap-[2px] justify-center",
  variants: {
    onlyLarge: {
      true: "hidden lg:flex",
      false: "flex",
    },
  },
})

export const eth = tv({
  variants: {
    size: {
      sm: "h-[8px] lg:h-[13px] xl:h-[18px]",
      md: "h-[15px] xl:h-[20px]",
      lg: "h-[20px] lg:h-[23px] xl:h-[30px]",
    },
  },
})

export const text = tv({
  base: "font-[Poppins] text-[#141416]",
  variants: {
    size: {
      sm: "text-[6px] lg:text-[10px] xl:text-[14px]",
      md: "text-[12px] xl:text-[16px]",
      lg: "text-[16px] lg:text-[18px] xl:text-[24px]",
    },
    weight: {
      medium: "font-medium",
      semibold: "font-semibold",
    },
  },
})
