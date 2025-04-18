import Button from "~/shared/ui/Button"
import Search from "./Search"
import "./styles.css"
import { createSignal } from "solid-js"
import { A } from "@solidjs/router"

const Nav = () => {
  const [show, setShow] = createSignal<boolean>(false)
  const toggle = () => setShow(!show())

  return (
    <>
      <nav class="flex justify-center sticky top-0 w-full bg-[#f9f9f9]/40 backdrop-blur-3xl z-3 px-[28px] lg:px-0 lg:pt-[20px] lg:mt-[25px]">
        <div class="lg:flex flex-row items-center gap-[80px] xl:gap-[100px] pb-[20px] hidden">
          <div class="flex flex-row gap-[40px] xl:gap-[50px] items-center">
            <A href="/#">
              <img src="/divesea/icons/logo.svg" class="w-[40px] xl:w-[50px] aspect-square" alt="Logo" />
            </A>
            <div class="flex flex-row gap-[24px]">
              <a class="nav-link" href="#weekly">
                Weekly
              </a>
              <a class="nav-link" href="#collection">
                Collection
              </a>
              <a class="nav-link" href="#community">
                Community
              </a>
              <a class="nav-link" href="#sell">
                Sell
              </a>
            </div>
          </div>
          <div class="flex flex-row gap-[20px] xl:gap-[30px] items-center">
            <Search />
            <Button size="lg" fill>
              Connect Wallet
            </Button>
          </div>
        </div>
        <div class="flex flex-row lg:hidden w-full py-[16px] justify-between">
          <div class="flex flex-row gap-[7px] items-center">
            <img src="/divesea/icons/wave_black.svg" alt="Logo" />
            <span class="font-[Poppins] font-semibold text-[21.36px] text-black">DiveSea</span>
          </div>
          <button onClick={toggle} aria-label="open navigation">
            <img src="/divesea/icons/burger.svg" alt="Menu" />
          </button>
        </div>
      </nav>
      <div
        class="z-4 fixed top-0 left-0 right-0 bottom-0 translate-x-1/1 bg-[#f9f9f9]/40 backdrop-blur-2xl flex flex-col items-center justify-center gap-[30px] transition"
        classList={{
          "translate-x-0/1!": show(),
        }}
        onClick={toggle}
      >
        <a class="uppercase font-[Inter] font-medium text-[#606060] text-[24px]" href="#weekly">
          Weekly
        </a>
        <a class="uppercase font-[Inter] font-medium text-[#606060] text-[24px]" href="#collection">
          Collection
        </a>
        <a class="uppercase font-[Inter] font-medium text-[#606060] text-[24px]" href="#community">
          Community
        </a>
        <a class="uppercase font-[Inter] font-medium text-[#606060] text-[24px]" href="#sell">
          Sell
        </a>
      </div>
    </>
  )
}

export default Nav
