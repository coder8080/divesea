import Button from "~/shared/ui/Button";
import Search from "./Search";
import "./styles.css";

const Nav = () => (
  <>
    <nav class="flex flex-row justify-center sticky top-0 pt-[20px] mt-[25px] bg-[#f9f9f9]/40 backdrop-blur-3xl z-3">
      <div class="max-w-[1200px] flex flex-row items-center gap-[118px] h-[78px] pb-[20px]">
        <div class="flex flex-row gap-[57px] items-center">
          <img src="/logo.svg" class="w-[53px] h-[53px]" />
          <div class="flex flex-row gap-[24px]">
            <a class="nav-link">Discover</a>
            <a class="nav-link">Creators</a>
            <a class="nav-link">Sell</a>
            <a class="nav-link">Stats</a>
          </div>
        </div>
        <div class="flex flex-row gap-[30px] items-center">
          <Search />
          <Button size="lg" fill>
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
    {/* <div class="h-[123px]" /> */}
  </>
);

export default Nav;
