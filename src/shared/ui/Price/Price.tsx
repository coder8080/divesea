import { container, eth, text } from "./styles"

type Props = {
  size: "sm" | "md" | "lg"
  weight: "medium" | "semibold"
  price: number
  onlyLarge?: boolean
}

const Price = (props: Props) => (
  <div class={container({ onlyLarge: props.onlyLarge })}>
    <img src="/divesea/icons/eth.svg" class={eth({ size: props.size })} />
    <div class={text({ size: props.size, weight: props.weight })}>{props.price}</div>
  </div>
)

export default Price
