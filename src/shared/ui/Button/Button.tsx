import { ParentProps } from "solid-js"
import { button } from "./styles"
import { A } from "@solidjs/router"

type ButtonProps = ParentProps & {
  size: "sm" | "md" | "lg" | "xl" | "xl2"
  fill?: boolean
  white?: boolean
  href?: string
}

const Button = (props: ButtonProps) => (
  <A href={props.href || "/#"} class={button({ size: props.size, fill: props.fill, white: props.white })}>
    {props.children}
  </A>
)

export default Button
