import { tv } from "tailwind-variants"

export const container = tv({ base: "cursor-pointer max-w-[315px] select-none border-b border-[#ADADAD]" })

export const row = tv({
  base: "flex flex-row justify-between group py-[12px]",
})

export const title = tv({
  base: "font-[Poppins] font-semibold text-[12px] text-[#323142]",
})

export const icon = tv({
  base: "w-[16px] aspect-square transition",
  variants: {
    active: {
      true: "rotate-45",
    },
  },
})

export const contentWrapper = tv({
  base: "grid grid-rows-[0fr] overflow-hidden transition-all",
  variants: {
    active: {
      true: "grid-rows-[1fr]",
    },
  },
})

export const content = tv({
  base: "font-[Poppins] font-normal text-[12px] text-[#12141D] invisible min-h-[0px] transition-all pb-[0]",
  variants: {
    active: {
      true: "visible pb-[12px]",
    },
  },
})
