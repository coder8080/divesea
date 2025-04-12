import { ParentProps } from "solid-js";

type Props = {
  onlyLarge?: boolean;
} & ParentProps;

const GridTitle = (props: Props) => (
  <span
    class={`capitalize font-[Poppins] font-medium text-[22px] text-[#93989A] mb-[48px] ${props.onlyLarge ? "hidden lg:block" : ""}`}
  >
    {props.children}
  </span>
);

export default GridTitle;
