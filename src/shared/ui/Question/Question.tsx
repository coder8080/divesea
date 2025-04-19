import { container, content, contentWrapper, icon, row, title } from "./styles"

type Props = {
  title: string
  description: string
  isActive: boolean
  onClick: () => void
}

const Question = (props: Props) => (
  <div class={container()} onClick={props.onClick}>
    <div class={row()}>
      <h3 class={title()}>{props.title}</h3>
      <img src="/divesea/icons/expand.svg" class={icon({ active: props.isActive })} />
    </div>
    <div class={contentWrapper({ active: props.isActive })}>
      <p class={content({ active: props.isActive })}>{props.description}</p>
    </div>
  </div>
)

export default Question
