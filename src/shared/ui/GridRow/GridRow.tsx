import { createMemo } from "solid-js";
import PriceDelta from "../PriceDelta";
import Price from "../Price";

type Props = {
  img: string;
  title: string;
  bid: number;
  delta: number;
  owners: number;
  items: number;
};

const GridRow = (props: Props) => {
  return (
    <>
      <div class="flex flex-row gap-[24px] h-[84px]">
        <div
          class="rounded-full border-[4px] border-white w-[84px]"
          style={{
            "background-image": `url("/images/${props.img}")`,
            "background-size": "cover",
            "background-position": "center",
          }}
        />
        <div class="flex flex-col items-start justify-between">
          <span class="font-[Poppins] font-medium text-[28px] text-[#141416]">
            {props.title}
          </span>
          <span class="font-[Poppins] font-normal text-[22px] text-[#64748B]">
            {props.title}
          </span>
        </div>
      </div>
      <Price
        size={16}
        sizeLg={24}
        weight={600}
        price={props.bid}
        class="self-center"
      />
      <PriceDelta
        size={24}
        weight={500}
        delta={props.delta}
        class="self-center"
      />
      <Price
        size={16}
        sizeLg={24}
        weight={600}
        price={props.bid}
        class="self-center"
      />
      <span class="font-[Poppins] font-medium text-[24px] text-[#010101] self-center">
        {props.owners}K
      </span>
      <span class="font-[Poppins] font-medium text-[24px] text-[#010101] self-center">
        {props.items}
      </span>
      <div class="bg-[#EBE9E9] h-[2px] col-span-6 mb-[40px] mt-[26px]" />
    </>
  );
};

export default GridRow;
