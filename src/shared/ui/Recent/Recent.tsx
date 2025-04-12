import RECENTS from "~/shared/data/recents";
import NFTS from "~/shared/data/nfts";
import Row from "./Row";
import { createMemo, For } from "solid-js";

type Props = {
  class?: string;
};

const Recent = (props: Props) => {
  const recents = createMemo(() =>
    NFTS.filter((item) => RECENTS.includes(item.id)),
  );

  return (
    <div
      class={`bg-white rounded-2xl flex-col gap-[12px] lg:gap-[28px] w-[150px] lg:w-[365px] px-[10px] lg:px-[24px] py-[11px] lg:py-[26px] ${props.class || ""}`}
    >
      <div class="flex flex-row justify-between">
        <p class="font-[Poppins] font-semibold text-[8px] lg:text-[22px] text-[#1a202c] capitalize">
          Recently Viewed
        </p>
        <img src="/icons/menu.svg" class="w-[10px]" />
      </div>
      <div class="flex flex-col gap-[14px] lg:gap-[20px]">
        <For each={recents()}>
          {(item, index) => <Row {...item} index={index()} />}
        </For>
      </div>
    </div>
  );
};

export default Recent;
