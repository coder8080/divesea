import Search from "./Search";
import Button from "~/shared/ui/Button";
import "./styles.css";

const Nav = () => (
  <nav class="flex flex-row justify-center pt-[45px] pb-[20px]">
    <div class="max-w-[1200px] flex flex-row items-center gap-[118px] h-[58px]">
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
);

export default Nav;
