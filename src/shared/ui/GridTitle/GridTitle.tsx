import { ParentProps } from "solid-js";

const GridTitle = (props: ParentProps) => (
  <span class="capitalize font-[Poppins] font-medium text-[22px] text-[#93989A] mb-[48px]">
    {props.children}
  </span>
);

export default GridTitle;
