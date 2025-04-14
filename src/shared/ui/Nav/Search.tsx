import SearchIcon from "~/assets/icons/search.svg";

const Search = () => (
  <div class="flex flex-row w-[348px] h-[57px] bg-[#ededed] rounded-2xl items-center p-[22px] gap-[22px]">
    <img src={SearchIcon} class="h-[22px] w-[22px]" />
    <input
      placeholder="Search Art Work / Creator"
      class="placeholder:text-[#c2c3cb] outline-none font-[Poppins] font-medium grow"
    />
  </div>
);

export default Search;
