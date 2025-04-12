import { ParentProps } from "solid-js";

type Props = {
  onlyLarge?: boolean;
  class?: string;
} & ParentProps;

const GridTitle = (props: Props) => (
  <div
    class={`${props.class ? props.class + " " : ""}capitalize font-[Poppins] font-medium text-[14px] lg:text-[22px] text-[#93989A] mb-[48px] ${props.onlyLarge ? "hidden lg:block" : ""}`}
  >
    {props.children}
  </div>
);

export default GridTitle;
