import PriceDelta from "../PriceDelta";
import Price from "~/shared/ui/Price";

export type Props = {
  title: string;
  bid: number;
  img: string;
  delta: number;
  index: number;
};

const Row = (props: Props) => {
  return (
    <div class="flex flex-row justify-between">
      <div class="flex flex-row gap-[8px] lg:gap-[16px]">
        <div class="relative">
          <div
            class="aspect-square w-[20px] lg:w-[46px] rounded-full"
            style={{
              "background-image": `url("${props.img}")`,
              "background-position": "center",
              "background-size": "cover",
            }}
          />
          <div class="absolute right-0 bottom-0 aspect-square w-[10px] lg:w-[22px] rounded-full bg-white flex items-center justify-center font-[Poppins] font-bold text-[5px] lg:text-[12px] text-[#141416]">
            {props.index + 1}
          </div>
        </div>
        <div class="flex flex-col gap-[3px] lg:gap-[8px]">
          <h4 class="font-[Poppins] font-medium text-[6px] lg:text-[16px] text-[#141416]">
            {props.title}
          </h4>
          <p class="font-[Poppins] font-normal text-[5px] lg:text-[12px] text-[#64748b]">
            {props.title}
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-[4px] lg:gap-[8px] items-end">
        <Price size={6} sizeLg={16} weight={600} price={props.bid} />
        <PriceDelta size={5} sizeLg={14} weight={400} delta={props.delta} />
      </div>
    </div>
  );
};

export default Row;
