type Props = {
  img: string;
  title: string;
  index: number;
};

const Account = (props: Props) => (
  <div class="flex flex-row justify-between items-center">
    <div class="flex flex-row gap-[14px]">
      <div
        class="relative rounded-full w-[48px] aspect-square"
        style={{
          "background-image": `url("/images/${props.img}")`,
          "background-size": "cover",
          "background-position": "center",
        }}
      >
        <span class="absolute top-0 right-0 bg-[#23262F] font-[Poppins] font-[600] text-[10px] text-[#FCFCFD] w-[20px] h-[20px] flex items-center justify-center rounded-full">
          {props.index + 1}
        </span>
      </div>
      <div class="flex flex-col justify-center">
        <span class="font-[Poppins] font-[500] text-[12px] text-[#23262F]">
          {props.title}
        </span>
        <span class="font-[Poppins] font-[400] text-[10px] text-[#777E90]">
          @{props.title}
        </span>
      </div>
    </div>
    <button class="rounded-lg border-[2px] border-[#E6E8EC] font-[DMSans] font-[700] text-[12px] text-[#23262F] px-[14px] py-[6px] cursor-pointer hover:scale-102 active:scale-98 hover:bg-gray-100 transition">
      Follow
    </button>
  </div>
);

export default Account;
