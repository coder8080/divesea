import RECENTS from "~/shared/data/recents";
import NFTS from "~/shared/data/nfts";
import Row from "./Row";
import { createMemo, For } from "solid-js";

const Recent = () => {
  const recents = createMemo(() =>
    NFTS.filter((item) => RECENTS.includes(item.id)),
  );

  return (
    <div class="bg-white rounded-2xl flex flex-col gap-[28px] w-[365px] absolute right-[80px] bottom-0 px-[24px] py-[26px] translate-y-1/2">
      <div class="flex flex-row justify-between">
        <p class="font-[Poppins] font-semibold text-[22px] text-[#1a202c] capitalize">
          Recently Viewed
        </p>
        <img src="/icons/menu.svg" />
      </div>
      <div class="flex flex-col gap-[20px]">
        <For each={recents()}>
          {(item, index) => <Row {...item} index={index()} />}
        </For>
      </div>
    </div>
  );
};

export default Recent;
