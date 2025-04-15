type Props = {
  size: number;
  sizeLg: number;
  weight: number;
  price: number;
  class?: string;
  onlyLarge?: boolean;
};

const Price = (props: Props) => (
  <div
    class={`${props.onlyLarge ? "hidden lg:flex" : "flex"} flex-row items-center gap-[4px] ${props.class || ""}`}
  >
    <img
      src="/divesea/icons/eth.svg"
      class={`h-[${props.size}px] lg:h-[${props.sizeLg}px]`}
    />
    <span
      class={`font-[Poppins] font-[${props.weight}] text-[#141416] text-[${props.size}px] lg:text-[${props.sizeLg}px]`}
    >
      {props.price}
    </span>
  </div>
);

export default Price;
