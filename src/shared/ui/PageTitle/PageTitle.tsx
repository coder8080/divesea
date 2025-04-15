import { Title } from "@solidjs/meta";
import { ParentProps } from "solid-js";

const PageTitle = (props: ParentProps) => (
  <Title>{props.children} | DiveSea</Title>
);

export default PageTitle;
