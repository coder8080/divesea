import { tv } from "tailwind-variants"

export const button = tv({
  base: "rounded-xl lg:rounded-2-xl whitespace-nowrap font-semibold cursor-pointer hover:scale-102 transition active:scale-98",
  variants: {
    size: {
      xs: "capitalize font-[Poppins] font-medium text-[12px] px-[16px] py-[12px] lg:text-[10px] lg:px-[16px] lg:py-[12px] xl:text-[14px] xl:px-[22px] xl:py-[18px]",
      sm: "uppercase font-[Poppins] text-[10px] px-[18px] py-[10px] xl:text-[14px] xl:px-[26px] xl:py-[16px]",
      md: "uppercase font-[Poppins] text-[12px] px-[21px] py-[15px] xl:text-[16px] xl:px-[30px] xl:py-[18px]",
      lg: "uppercase font-[Poppins] lg:text-[17px] lg:px-[24px] lg:py-[16px]",
      xl: "capitalize font-[Outfit] text-[12px] px-[14px] py-[10px] lg:text-[16px] lg:px-[18px] lg:py-[14px] xl:text-[22px] xl:px-[26px] xl:py-[20px]",
      xl2: "capitalize font-[Outfit] text-[12px] px-[14px] py-[10px] lg:text-[16px] lg:px-[22px] lg:py-[14px] xl:text-[22px] xl:px-[30px] xl:py-[20px]",
    },
    fill: { true: "" },
    white: { true: "" },
  },
  compoundVariants: [
    {
      fill: true,
      white: false,
      class: "bg-[#141414] hover:bg-[#555] text-white",
    },
    {
      fill: true,
      white: true,
      class: "bg-white hover:bg-[#ccc] text-[#141416]",
    },
    {
      fill: false,
      white: true,
      class: "bg-[#f9f9f9] hover:bg-[#f0f0f0] text-black border",
    },
    {
      fill: false,
      white: false,
      class: "bg-[#141416] hover:bg-[#333] text-white border border-white",
    },
  ],
})
