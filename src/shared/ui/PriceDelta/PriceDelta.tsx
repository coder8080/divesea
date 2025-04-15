import { createMemo } from "solid-js";
import { priceDelta } from "./styles";

type Props = {
  delta: number;
  size: "sm" | "lg";
  weight: "normal" | "medium";
  onlyLarge?: boolean;
};

const PriceDelta = (props: Props) => {
  const profit = createMemo(() => props.delta >= 0);

  const stringDelta = createMemo(() =>
    profit() ? `+${props.delta}` : props.delta.toString(),
  );
  return (
    <div
      class={priceDelta({
        onlyLarge: props.onlyLarge,
        size: props.size,
        weight: props.weight,
        profit: profit(),
      })}
    >
      {stringDelta()}
    </div>
  );
};

export default PriceDelta;
