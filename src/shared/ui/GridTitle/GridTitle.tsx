import { ParentProps } from "solid-js";
import { gridTitle } from "./styles";

type Props = {
  onlyLarge?: boolean;
  textStart?: boolean;
  mobileTextEnd?: boolean;
} & ParentProps;

const GridTitle = (props: Props) => (
  <div
    class={gridTitle({
      onlyLarge: props.onlyLarge,
      textStart: props.textStart,
      mobileTextEnd: props.mobileTextEnd,
    })}
  >
    {props.children}
  </div>
);

export default GridTitle;
