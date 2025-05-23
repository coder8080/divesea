type Props = {
  img: string
  title: string
  index: number
}

const Account = (props: Props) => (
  <div class="flex flex-row justify-between items-center">
    <div class="flex flex-row gap-[6px] lg:gap-[14px]">
      <div class="relative w-[24px] lg:w-[34px] xl:w-[48px] aspect-square">
        <img
          loading="lazy"
          src={`/divesea/images/${props.img}`}
          class="object-cover w-full h-full rounded-full"
          alt={`NFT: ${props.title}`}
        />
        <span class="absolute top-0 right-0 bg-[#23262F] font-[Poppins] font-[600] text-[5px] lg:text-[8px] xl:text-[10px] text-[#FCFCFD] w-[10px] lg:w-[14px] xl:w-[20px] aspect-square flex items-center justify-center rounded-full">
          {props.index + 1}
        </span>
      </div>
      <div class="flex flex-col justify-center">
        <span class="font-[Poppins] font-[500] text-[6px] lg:text-[8px] xl:text-[12px] text-[#23262F]">
          {props.title}
        </span>
        <span class="font-[Poppins] font-[400] text-[5px] lg:text-[8px] xl:text-[10px] text-[#777E90]">
          @{props.title}
        </span>
      </div>
    </div>
    <button class="rounded lg:rounded-lg border xl:border-[2px] border-[#E6E8EC] font-[DMSans] font-bold text-[6px] lg:text-[8px] xl:text-[12px] text-[#23262F] px-[6px] py-[3px] lg:px-[10px] lg:py-[5px] xl:px-[14px] xl:py-[6px] cursor-pointer hover:scale-102 active:scale-98 hover:bg-gray-100 transition">
      Follow
    </button>
  </div>
)

export default Account
