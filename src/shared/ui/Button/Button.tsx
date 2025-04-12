import { ParentProps } from "solid-js";

type ButtonProps = ParentProps & {
  size: "sm" | "md" | "lg";
  fill?: boolean;
  class?: string;
};

const Button = (props: ButtonProps) => (
  <button
    class={`rounded-2xl uppercase whitespace-nowrap font-[Poppins] font-semibold cursor-pointer hover:scale-102 transition active:scale-98 ${props.class || ""}`}
    classList={{
      "text-[14px] px-[26px] py-[16px]": props.size === "sm",
      "text-[16px] px-[30px] py-[18px]": props.size === "md",
      "text-[17px] px-[24px] py-[16px]": props.size === "lg",
      "bg-[#141414] hover:bg-[#555] text-white": props.fill,
      "bg-[#f9f9f9] hover:bg-[#f0f0f0] text-black border": !props.fill,
    }}
  >
    {props.children}
  </button>
);

export default Button;
