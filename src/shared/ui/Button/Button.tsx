import { ParentProps } from "solid-js";

type ButtonProps = ParentProps & {
  size: "sm" | "md" | "lg" | "xl" | "xl2";
  fill?: boolean;
  class?: string;
  border?: boolean;
  white?: boolean;
};

const Button = (props: ButtonProps) => (
  <button
    class={`rounded-2xl whitespace-nowrap font-semibold cursor-pointer hover:scale-102 transition active:scale-98 ${props.class || ""}`}
    classList={{
      "uppercase font-[Poppins] text-[14px] px-[26px] py-[16px]":
        props.size === "sm",
      "uppercase font-[Poppins] text-[16px] px-[30px] py-[18px]":
        props.size === "md",
      "uppercase font-[Poppins] text-[17px] px-[24px] py-[16px]":
        props.size === "lg",
      "capitalize font-[Outfit] text-[21.36px] px-[25.53px] py-[19.83px]":
        props.size === "xl",
      "capitalize font-[Outfit] text-[21.36px] px-[30.53px] py-[19.83px]":
        props.size === "xl2",
      "bg-[#141414] hover:bg-[#555] text-white": props.fill,
      "hover:bg-[#f0f0f0] text-black": !props.fill,
      "bg-white": props.white,
      "bg-[#f9f9f9]": !props.fill && !props.white,
      border: props.border && !props.fill,
      "border-[2.29px] border-white": props.border && props.fill,
    }}
  >
    {props.children}
  </button>
);

export default Button;
