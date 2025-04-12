import { createMemo } from "solid-js";

type Props = { delta: number; size: number; weight: number; class?: string };

const PriceDelta = (props: Props) => {
  const profit = createMemo(() => props.delta >= 0);

  const stringDelta = createMemo(() =>
    profit() ? `+${props.delta}` : props.delta.toString(),
  );
  return (
    <p
      class={`font-[Poppins] font-[${props.weight}] text-[${props.size}px] ${props.class || ""}`}
      classList={{
        "text-[#10c352]": profit(),
        "text-[#e23333]": !profit(),
      }}
    >
      {stringDelta()}
    </p>
  );
};

export default PriceDelta;
