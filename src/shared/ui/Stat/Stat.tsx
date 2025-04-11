type StatProps = {
  count: number;
  caption: string;
  class?: string;
};

const Stat = (props: StatProps) => (
  <div class={props.class}>
    <p class="font-[PublicSans] font-semibold text-[36px] text-[#141416]">
      {props.count}K+
    </p>
    <p class="font-[Inter] fond-medium text-[12px] text-[#848586] mt-[6px]">
      {props.caption}
    </p>
  </div>
);

export default Stat;
