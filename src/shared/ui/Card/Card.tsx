import Button from "~/shared/ui/Button";
import Price from "~/shared/ui/Price";

export type Props = { title: string; timer: string; bid: number; img: string };

const Card = (props: Props) => {
  return (
    <div class="p-[10px] lg:p-[14px] flex flex-col bg-white w-[200px] lg:w-[280px] rounded-3xl gap-[18px]">
      <div class="relative aspect-square w-full">
        <img
          src={`/divesea/images/${props.img}`}
          class="object-cover w-full aspect-square rounded-3xl"
          loading="lazy"
        />
        <div class="swiper-lazy-preloader"></div>
        <div class="absolute top-[10px] right-[8px] lg:top-[14px] lg:right-[10px] bg-[#1C1D2059]/65 rounded-xl px-[10px] py-[6px] lg:px-[14px] lg:py-[8px] text-white text-[14px] font-[Poppins] font-medium text-nowrap">
          {props.timer}
        </div>
      </div>
      <div class="flex flex-col gap-[14px]">
        <h3 class="text-[14.95px] lg:text-[22px] font-semibold font-[Poppins] text-nowrap self-start text-[#141416]">
          {props.title}
        </h3>
        <div class="flex flex-row justify-between">
          <div class="flex flex-col gap-[4px]">
            <span class="font-[Poppins] font-normal text-[10px] lg:text-[14px] text-nowrap text-[#94a3b8]">
              Current bid
            </span>
            <Price size={12} sizeLg={16} weight={400} price={props.bid} />
          </div>
          <Button size="sm" fill>
            Place Bid
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Card;
