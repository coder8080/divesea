import RECENTS from "~/shared/data/recents"
import NFTS from "~/shared/data/nfts"
import Row from "./Row"
import { createMemo, For } from "solid-js"
import { recent } from "./styles"

type Props = {
  onlyLarge?: boolean
  position: "left" | "right"
}

const Recent = (props: Props) => {
  const recents = createMemo(() => NFTS.filter((item) => RECENTS.includes(item.id)))

  return (
    <div class={recent({ onlyLarge: props.onlyLarge, position: props.position })}>
      <div class="flex flex-row justify-between">
        <p class="font-[Poppins] font-semibold text-[8px] lg:text-[14px] xl:text-[22px] text-[#1a202c] capitalize">
          Recently Viewed
        </p>
        <img loading="lazy" src="/divesea/icons/menu.svg" class="w-[10px]" alt="Dots" />
      </div>
      <div class="flex flex-col gap-[14px] lg:gap-[20px]">
        <For each={recents()}>{(item, index) => <Row {...item} index={index()} />}</For>
      </div>
    </div>
  )
}

export default Recent
