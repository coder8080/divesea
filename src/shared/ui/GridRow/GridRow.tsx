import PriceDelta from "../PriceDelta"
import Price from "../Price"

type Props = {
  img: string
  title: string
  bid: number
  delta: number
  owners: number
  items: number
}

const GridRow = (props: Props) => {
  return (
    <>
      <div class="flex flex-row gap-[16px] xl:gap-[24px] h-[46px] lg:h-[60px] xl:h-[84px]">
        <div
          class="rounded-full border-[2px] xl:border-[4px] border-white w-[46px] lg:w-[60px] xl:w-[84px] aspect-square"
          style={{
            "background-image": `url("/divesea/images/${props.img}")`,
            "background-size": "cover",
            "background-position": "center",
          }}
        />
        <div class="flex flex-col items-start justify-between">
          <span class="font-[Poppins] font-medium text-[16px] lg:text-[20px] xl:text-[28px] text-[#141416]">
            {props.title}
          </span>
          <span class="font-[Poppins] font-normal text-[12px] lg:text-[16px] xl:text-[22px] text-[#64748B]">
            {props.title}
          </span>
        </div>
      </div>
      <div class="flex flex-col lg:hidden items-end">
        <Price size="lg" weight="semibold" price={props.bid} />
        <PriceDelta size="lg" weight="medium" delta={props.delta} />
      </div>
      <Price size="lg" weight="semibold" price={props.bid} onlyLarge />
      <PriceDelta size="lg" weight="medium" delta={props.delta} onlyLarge />
      <Price size="lg" weight="semibold" price={props.bid} onlyLarge />
      <span class="font-[Poppins] font-medium lg:text-[18px] xl:text-[24px] text-[#010101] self-center hidden lg:block">
        {props.owners}K
      </span>
      <span class="font-[Poppins] font-medium lg:text-[18px] xl:text-[24px] text-[#010101] self-center hidden lg:block">
        {props.items}
      </span>
      <div class="bg-[#EBE9E9] h-[2px] col-span-2 lg:col-span-6 mb-[40px] mt-[26px]" />
    </>
  )
}

export default GridRow
