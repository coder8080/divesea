import { ParentProps } from "solid-js"
import { button } from "./styles"

type ButtonProps = ParentProps & {
  size: "sm" | "md" | "lg" | "xl" | "xl2"
  fill?: boolean
  white?: boolean
}

const Button = (props: ButtonProps) => (
  <button class={button({ size: props.size, fill: props.fill, white: props.white })}>{props.children}</button>
)

export default Button
