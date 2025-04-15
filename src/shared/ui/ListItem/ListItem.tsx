import { ParentProps } from "solid-js";
import CheckIcon from "~/shared/assets/icons/check.svg";

const ListItem = (props: ParentProps) => (
  <div class="flex flex-row items-center gap-[12px]">
    <img src={CheckIcon} class="w-[20px]" />
    <p class="font-[Poppins] font-[400] text-[16px] text-[#12141D]">
      {props.children}
    </p>
  </div>
);

export default ListItem;
