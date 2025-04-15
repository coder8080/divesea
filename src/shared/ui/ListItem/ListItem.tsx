import { ParentProps } from "solid-js";

const ListItem = (props: ParentProps) => (
  <div class="flex flex-row items-center gap-[4px] xl:gap-[12px]">
    <img src="/divesea/icons/check.svg" class="w-[14px] xl:w-[20px]" />
    <p class="font-[Poppins] font-normal text-[12px] xl:text-[16px] text-[#12141D]">
      {props.children}
    </p>
  </div>
);

export default ListItem;
