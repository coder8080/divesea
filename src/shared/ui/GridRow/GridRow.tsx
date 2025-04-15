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
      <div class="flex flex-row gap-[16px] lg:gap-[24px] h-[46px] lg:h-[84px]">
        <div
          class="rounded-full border-[4px] border-white w-[46px] lg:w-[84px] aspect-square"
          style={{
            "background-image": `url("/divesea/images/${props.img}")`,
            "background-size": "cover",
            "background-position": "center",
          }}
        />
        <div class="flex flex-col items-start justify-between">
          <span class="font-[Poppins] font-medium text-[16px] lg:text-[28px] text-[#141416]">
            {props.title}
          </span>
          <span class="font-[Poppins] font-normal text-[12px] lg:text-[22px] text-[#64748B]">
            {props.title}
          </span>
        </div>
      </div>
      <div class="flex flex-col lg:hidden items-end">
        <Price size={16} sizeLg={24} weight={600} price={props.bid} />
        <PriceDelta size={14} sizeLg={24} weight={500} delta={props.delta} />
      </div>
      <Price
        size={16}
        sizeLg={24}
        weight={600}
        price={props.bid}
        class="self-center"
        onlyLarge
      />
      <PriceDelta
        size={14}
        sizeLg={24}
        weight={500}
        delta={props.delta}
        class="self-center"
        onlyLarge
      />
      <Price
        size={16}
        sizeLg={24}
        weight={600}
        price={props.bid}
        class="self-center"
        onlyLarge
      />
      <span class="font-[Poppins] font-medium text-[24px] text-[#010101] self-center hidden lg:block">
        {props.owners}K
      </span>
      <span class="font-[Poppins] font-medium text-[24px] text-[#010101] self-center hidden lg:block">
        {props.items}
      </span>
      <div class="bg-[#EBE9E9] h-[2px] col-span-2 lg:col-span-6 mb-[40px] mt-[26px]" />
    </>
  );
};

export default GridRow;
