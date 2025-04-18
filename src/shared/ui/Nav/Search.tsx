const Search = () => (
  <div class="flex flex-row w-[250px] h-[40px] xl:w-[348px] xl:h-[57px] bg-[#ededed] rounded-2xl items-center p-[22px] gap-[22px]">
    <img loading="lazy" src="/divesea/icons/search.svg" class="w-[16px] xl:w-[22px] aspect-square" alt="Search" />
    <input
      placeholder="Search Art Work or Creator"
      class="placeholder:text-[#c2c3cb] outline-none font-[Poppins] font-medium grow text-[12px] xl:text-[16px] xl:w-[220px] tracking-[-2%]"
    />
  </div>
)

export default Search
