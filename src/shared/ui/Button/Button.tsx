import { ParentProps } from "solid-js";

type ButtonProps = ParentProps & { size: "sm" | "md" | "lg"; fill?: boolean };

const Button = (props: ButtonProps) => (
  <button
    class="rounded-2xl  uppercase whitespace-nowrap font-semibold cursor-pointer"
    classList={{
      "text-[14px]": props.size === "sm",
      "text-[16px] px-[30px] py-[18px]": props.size === "md",
      "text-[17px] px-[24px] py-[16px]": props.size === "lg",
      "bg-[#141416] text-white": props.fill,
      "bg-[#f9f9f9] text-black border": !props.fill,
    }}
  >
    {props.children}
  </button>
);

export default Button;
