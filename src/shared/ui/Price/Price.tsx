type Props = {
  size: number;
  weight: number;
  price: number;
  class?: string;
};

const Price = (props: Props) => (
  <div class={`flex flex-row items-center gap-[4px] ${props.class || ""}`}>
    <img src="/icons/eth.svg" class={`h-[${props.size}px]`} />
    <span
      class={`font-[Poppins] font-[${props.weight}] text-[${props.size}px] text-[#141416]`}
    >
      {props.price}
    </span>
  </div>
);

export default Price;
