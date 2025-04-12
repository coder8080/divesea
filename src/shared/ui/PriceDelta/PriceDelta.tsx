import { createMemo } from "solid-js";

type Props = {
  delta: number;
  size: number;
  sizeLg: number;
  weight: number;
  class?: string;
  onlyLarge?: boolean;
};

const PriceDelta = (props: Props) => {
  const profit = createMemo(() => props.delta >= 0);

  const stringDelta = createMemo(() =>
    profit() ? `+${props.delta}` : props.delta.toString(),
  );
  return (
    <span
      class={`${props.onlyLarge ? "hidden lg:block " : ""}${props.class ? props.class + " " : ""}font-[${props.weight}] font-[Poppins] lg:text-[${props.sizeLg}px] text-[${props.size}px]`}
      // class="text-7px"
      classList={{
        "text-[#10c352]": profit(),
        "text-[#e23333]": !profit(),
      }}
    >
      {stringDelta()}
    </span>
  );
};

export default PriceDelta;
