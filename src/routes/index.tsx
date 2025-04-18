import Button from "~/shared/ui/Button"
import Stat from "~/shared/ui/Stat"
import Card from "~/shared/ui/Card"
import NFTS from "~/shared/data/nfts"
import Atropos from "atropos"
import Swiper from "swiper"
import ScrollReveal from "~/shared/ui/ScrollReveal"
import Recent from "~/shared/ui/Recent"
import GridTitle from "~/shared/ui/GridTitle"
import { Navigation } from "swiper/modules"
import { createEffect, createMemo, For } from "solid-js"
import GridRow from "~/shared/ui/GridRow"
import ListItem from "~/shared/ui/ListItem"
import Account from "~/shared/ui/Account"
import PageTitle from "~/shared/ui/PageTitle"
import Faq from "~/shared/ui/Faq"

export default function Home() {
  createEffect(() => {
    Atropos({
      el: ".atropos-img1",
      shadow: false,
      rotateTouch: "scroll-y",
    })

    new Swiper(".swiper", {
      modules: [Navigation],
      loop: true,
      slidesPerView: "auto",
      centeredSlides: true,
      lazyPreloadPrevNext: 2,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    })
  })

  const gridRows = createMemo(() => NFTS.slice(0, 4))
  const accounts = createMemo(() => NFTS.slice(0, 6))

  return (
    <>
      <PageTitle>Home</PageTitle>
      <main class="max-w-full overflow-hidden">
        <ScrollReveal />
        <div class="mt-[20px] lg:mt-[80px] flex flex-col lg:flex-row gap-[60px] lg:gap-[48px] justify-center">
          <div class="flex flex-col items-center lg:items-start lg:text-start text-center px-[32px] lg:px-0 lg:ml-[60px] xl:ml-25 lg:max-w-[568px] lg:w-38/100 xl:w-44/100 mt-[10px]">
            <div class="bg-[#201f1f] h-[1px] w-[195px] reveal-hr invisible hidden lg:block" />
            <h1 class="font-[Poppins] font-semibold text-[47.4px]/[120%] lg:text-[54px]/[120%] xl:text-[75px]/[120%] tracking-[-1.9px] lg:mt-[10px] reveal-title invisible">
              Discover And Create NFTs
            </h1>
            <p class="mt-[10px] lg:mt-[12px] max-w-[500px] font-[Inter] font-normal text-[#676767] text-[12px] xl:text-[18px] reveal-desc invisible">
              Discover, Create and Sell NFTs On Our NFT Marketplace With Over Thousands Of NFTs And Get a{" "}
              <span class="font-semibold text-[#141416]">$20&nbsp;bonus</span>.
            </p>
            <div class="flex flex-row gap-[23px] mt-[40px] lg:mt-[30px] xl:mt-[45px] reveal-buttons invisible">
              <Button href="/#weekly" size="md" fill>
                Explore More
              </Button>
              <Button href="/#weekly" size="md" white>
                Create NFT
              </Button>
            </div>
            <img
              src="/divesea/icons/trust.svg"
              class="w-[240px] mx-auto mt-[20px] lg:hidden reveal-trust invisible"
              alt="Trustpilot 5-star"
            />
            <div class="hidden lg:flex flex-row gap-[46px] mt-[60px] lg:mt-[82px]" id="stats">
              <Stat count={430} caption="Art Works" class="reveal-stat-1 invisible" />
              <Stat count={159} caption="Creators" class="reveal-stat-2 invisible" />
              <Stat count={87} caption="Collections" class="reveal-stat-3 invisible" />
            </div>
          </div>
          <div class="w-full pl-[30px] lg:pl-0 lg:max-w-[758px] lg:w-62/100 xl:w-56/100 flex self-start">
            <div class="w-[calc(100%+55px)] mr-[-55px] lg:w-full lg:mr-0 aspect-758/522 flex gap-[6.3%] relative ">
              <img
                src="/divesea/icons/arrow.svg"
                alt="Arrow"
                class="absolute top-50/522 w-128/758 right-184/758 reveal-arrow invisible"
              />
              <div class="w-390/758 self-start relative">
                <div class="atropos atropos-img1 mt-[calc(20/390*100)%] mb-[cal(24/390*100)] reveal-img1 invisible">
                  <div class="atropos-scale">
                    <div class="atropos-rotate">
                      <div class="atropos-inner">
                        <img
                          src="/divesea/images/1.webp"
                          class="object-cover w-full rounded-2xl aspect-square"
                          alt="NFT"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src="/divesea/images/1.webp"
                  class="w-full rounded-2xl aspect-square absolute bottom-0 -z-1 object-cover blur-[50px]"
                  alt="Blurred Shadow"
                />
              </div>
              <div class="relative w-320/758 flex flex-row">
                <div class="w-full relative self-end reveal-img2 invisible">
                  <img
                    src="/divesea/images/img-source.webp"
                    alt="NFT"
                    class="w-full rounded-2xl aspect-square mb-[24px] object-cover"
                  />
                  <img
                    class="w-full rounded-2xl aspect-square absolute bottom-0 -z-1 blur-[50px]"
                    alt="Blurred Shadow"
                    src="/divesea/images/img-source.webp"
                  />
                </div>
                <div class="absolute right-[55px] lg:right-0 top-0 w-110/320 h-170/522 reveal-grid invisible bg-size-[8px_8px] lg:bg-size-[16px_16px] -z-1 bg-[radial-gradient(#000_1px,_transparent_0)] lg:bg-[radial-gradient(#000_2px,_transparent_0)]" />
              </div>
            </div>
          </div>
        </div>
        <div
          class="text-center lg:text-start mt-[80px] lg:mt-[100px] xl:mt-[164px] bg-[#f1f1f1] flex flex-col items-center pt-[70px] pb-[55px] lg:pb-[90px] max-w-screen relative"
          id="weekly"
        >
          <h2 class="font-[Poppins] text-[30px] lg:text-[32px] xl:text-[45px] text-[#c5c5c5] font-semibold">
            Weekly - Top NFT
          </h2>
          <div class="swiper mt-[60px] lg:mt-[70px] xl:mt-[100px] w-full transform-none">
            <div class="swiper-wrapper max-w-full transform-none">
              <For each={NFTS}>
                {(item) => (
                  <div class="swiper-slide flex flex-col max-w-[230px] xl:max-w-[320px] px-[15px] xl:px-[20px]">
                    <Card {...item} />
                  </div>
                )}
              </For>
            </div>
            <div class="flex flex-row bg-white w-[102px] h-[42px] xl:h-[68px] xl:w-[166px] rounded-2xl mx-auto mt-[60px] relative">
              <button
                class="swiper-button-prev flex flex-row items-center justify-center grow cursor-pointer"
                aria-label="move left"
              >
                <img
                  loading="lazy"
                  src="/divesea/icons/arrow-left.svg"
                  class="w-[16px] xl:w-[26px] aspect-square"
                  alt="Move Left"
                />
              </button>
              <button
                class="swiper-button-next flex flex-row items-center justify-center grow cursor-pointer"
                aria-label="move right"
              >
                <img
                  loading="lazy"
                  src="/divesea/icons/arrow-right.svg"
                  class="w-[16px] xl:w-[26px] aspect-square"
                  alt="Move Right"
                />
              </button>
              <div class="absolute left-1/2 top-1/2 -translate-1/2 bg-[#e6e8ec] w-[2px] h-[16px] xl:h-[26px] rounded-full" />
            </div>
          </div>
          <Recent onlyLarge position="right" />
        </div>
        <div
          class="mt-[78px] lg:mt-[240px] flex flex-col items-center px-[30px] lg:px-[60px] xl:px-[100px] max-w-[1440px] mx-auto"
          id="collection"
        >
          <h2 class="capitalize font-[Poppins] font-semibold text-[30px] xl:text-[44px] text-[#141416]">
            Top Collection
          </h2>
          <div class="grid grid-cols-[1fr_auto] grid-rows-6 lg:grid-cols-[1fr_auto_auto_auto_auto_auto] w-full lg:gap-x-[60px] xl:gap-x-[80px] mt-[40px] lg:mt-[90px] justify-center text-center items-center">
            <GridTitle textStart>Collection</GridTitle>
            <GridTitle mobileTextEnd>Volume</GridTitle>
            <GridTitle onlyLarge>24h %</GridTitle>
            <GridTitle onlyLarge>Floor Price</GridTitle>
            <GridTitle onlyLarge>Owners</GridTitle>
            <GridTitle onlyLarge>Items</GridTitle>
            <For each={gridRows()}>{(item) => <GridRow {...item} />}</For>
          </div>
          <a
            class="font-[Poppins] font-medium text-[#ACADB9] text-[12px] xl:text-[17px] inline-flex flex-row items-center gap-[12px] lg:gap-[16px] capitalize lg:self-end lg:mt-[40px]"
            href="#"
          >
            Explore All
            <img loading="lazy" src="/divesea/icons/link-arrow.svg" alt="Link" />
          </a>
        </div>
        <div class="grid grid-cols-[1fr] lg:grid-cols-[auto_1fr] gap-[80px] lg:gap-0 px-[30] lg:px-[100px] mt-[140px] max-w-[1245px] mx-auto">
          <div class="flex flex-col items-center lg:items-start">
            <h2 class="capitalize font-[Poppins] font-semibold text-[30px] xl:text-[45px] text-[#C5C5C5]">
              Just Unleash -<br />
              <span class="text-[#18181B]">Your Inner Collector</span>
            </h2>
            <div class="hidden lg:flex flex-col items-start gap-[12px] xl:gap-[18px] mt-[30px] xl:mt-[50px]">
              <ListItem>Best Seller All Around World</ListItem>
              <ListItem>$2M+ Transections Every Day</ListItem>
              <ListItem>Secure Transactions</ListItem>
              <ListItem>Exclusive Collections From Sellers</ListItem>
              <ListItem>Easy Buying and Selling</ListItem>
              <ListItem>Join Our Community</ListItem>
            </div>
          </div>
          <div class="relative mx-auto bg-white rounded-3xl flex flex-col gap-[16px] xl:gap-[24px] px-[10px] lg:px-[22px] py-[12px] lg:py-[26px] w-[150px] lg:w-[230px] xl:w-[320px]">
            <h3 class="capitalize font-[Poppins] font-semibold text-[8px] lg:text-[14px] xl:text-[16px] text-[#1A202C]">
              Best Sellers
            </h3>
            <div class="flex flex-col gap-[8px] lg:gap-[10px] xl:gap-[18px]">
              <For each={accounts()}>{(item, index) => <Account {...item} index={index()} />}</For>
            </div>
            <Recent position="left" />
            <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-3/5 w-[155px] lg:w-[230px] xl:w-[325px] p-[6px] lg:p-[8px] xl:p-[12px] grid grid-cols-[auto_auto_auto_1fr_auto] gap-x-[6px] lg:gap-x-[8px] xl:gap-x-[12px] bg-white shadow-xl rounded-lg lg:rounded-2xl">
              <div class="rounded-full w-[4px] lg:w-[5px] xl:w-[8px] aspect-square bg-[#141416] self-center" />
              <div class="w-[20px] lg:w-[30px] xl:w-[40px] aspect-square relative">
                <img
                  loading="lazy"
                  src="/divesea/images/1.webp"
                  class="object-cover rounded-full w-full h-full"
                  alt="NFT with new BID"
                />
                <img
                  loading="lazy"
                  src="/divesea/icons/verified.svg"
                  class="aspect-square w-[8px] lg:w-[12px] xl:w-[17px] absolute top-0 right-0 translate-x-1/4"
                  alt="Verified"
                />
              </div>
              <div class="flex flex-col">
                <div class="flex flex-row gap-[3px] lg:gap-[4px] xl:gap-[5.7px]">
                  <span class="font-[Poppins] font-medium text-[6px] lg:text-[10px] xl:text-[13.29px] text-[#949494] block">
                    New bid
                  </span>
                  <span class="font-[Poppins] font-medium text-[6px] lg:text-[10px] xl:text-[13.29px] text-[#141416] block">
                    Rotation
                  </span>
                </div>
                <span class="block font-[Poppins] font-semibold text-[6px] lg:text-[8px] xl:text-[12px] text-[#141416]">
                  0.002 ETH
                </span>
              </div>
              <div />
              <img
                class="row-span-2 rounded-lg lg:rounded-xl w-[30px] lg:w-[43px] xl:w-[60px] aspect-square object-cover"
                src="/divesea/images/1.webp"
                alt="NFT with new BID preview"
              />
              <div class="col-span-2" />
              <div class="font-[Poppins] font-semibold text-[6px] lg:text-[8px] xl:text-[12px] text-[#949494]">
                6 Oct 2022, 11:44 PM
              </div>
            </div>
          </div>
        </div>
        <div
          class="mt-[140px] lg:mt-[180px] xl:mt-[300px] mb-[30px] w-[520px] ml-[calc((100vw-520px)/2)] lg:ml-auto lg:w-full lg:max-w-[754px] xl:max-w-[1060px] mr-auto aspect-square flex justify-center items-center rounded-full border-[2px] border-[#d2d2d2] relative"
          id="community"
        >
          <img
            src="/divesea/images/2.webp"
            class="object-cover rounded-full aspect-square w-52/1060 border-[2px] border-white absolute top-120/1060 left-657/1060"
          />
          <img
            src="/divesea/images/3.webp"
            class="object-cover rounded-full aspect-square w-52/1060 border-[2px] border-white absolute top-102/1060 left-854/1060"
          />
          <img
            src="/divesea/images/4.webp"
            class="object-cover rounded-full aspect-square w-65/1060 border-[2px] border-white absolute top-566/1060 left-905/1060"
          />
          <img
            src="/divesea/images/12.webp"
            class="object-cover rounded-full aspect-square w-65/1060 border-[2px] border-white absolute top-820/1060 left-914/1060"
          />
          <img
            src="/divesea/images/14.webp"
            class="object-cover rounded-full aspect-square w-52/1060 border-[2px] border-white absolute top-1034/1060 left-530/1060"
          />
          <img
            src="/divesea/images/1.webp"
            class="object-cover rounded-full aspect-square w-52/1060 border-[2px] border-white absolute top-782/1060 left-55/1060"
          />
          <img
            src="/divesea/images/21.webp"
            class="object-cover rounded-full aspect-square w-52/1060 border-[2px] border-white absolute top-326/1060 left-130/1060"
          />
          <img
            src="/divesea/images/11.webp"
            class="object-cover rounded-full aspect-square w-65/1060 border-[2px] border-white absolute top-50/1060 left-217/1060"
          />
          <div class="w-830/1060 aspect-square flex flex-col items-center justify-center rounded-full border-[2px] border-[#d2d2d2]">
            <h2 class="capitalize font-[Poppins] font-bold text-[22px]/[26px] lg:text-[32px]/[38px] xl:text-[45px]/[54px] text-[#18181b] text-center">
              Join The
              <br />
              <span class="text-[#c5c5c5]">Community</span>
            </h2>
            <p class="text-center font-[Poppins] font-normal text-[12px]/[22px] xl:text-[18px]/[32px] text-[#12141d] mt-[14px] lg:mt-[22px] xl:mt-[30px] max-w-75/100">
              Our vibrant community is full of collectors, artists, and enthusiasts who share a passion for
              one-of-a-kind digital.
            </p>
            <div class="mt-[24px] lg:mt-[34px] xl:mt-[50px]">
              <Button size="xs" fill>
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
        <div class="mt-[100px]" id="faq">
          <h1 class="text-center mx-auto font-[Poppins] font-semibold text-[24px]/[120%] lg:text-[34px]/[120%] xl:text-[48px]/[140%] text-[#18181B] mb-[60px] xl:mb-[80px]">
            Frequently Asked
            <br />
            <span class="text-[#D3D2D2]">Questions</span>
          </h1>
          <Faq />
        </div>
        <div class="px-[27px] lg:px-[70px] xl:px-[100px] mt-[100px] lg:mt-[120px] w-full" id="sell">
          <div class="w-full max-w-[1245px] rounded-2xl bg-[#141416] flex flex-col lg:flex-row gap-[36px] lg:gap-0 justify-between px-[40px] py-[22px] lg:px-[31px] lg:py-[31px] mx-auto">
            <div class="flex flex-col lg:mt-[13.22px] lg:ml-[35px] items-center text-center lg:items-start lg:text-start">
              <h2 class="font-[Poppins] font-semibold text-[22px] lg:text-[32px] xl:text-[45px] text-white">
                Create and Sell NFTs
              </h2>
              <p class="font-[Poppins] font-medium text-[11px] lg:text-[14px] xl:text-[20px] text-[#a4a4a4] mt-[6px] lg:mt-[12.48px]">
                World’s Largest NFT Place
              </p>
              <div class="flex flex-row justify-center lg:justify-start gap-[15px] lg:gap-[22px] xl:gap-[30px] mt-[25px] lg:mt-[35px] xl:mt-[auto]">
                <Button size="xl" href="/#weekly" white fill>
                  Explore More
                </Button>
                <Button size="xl2" href="/#sell">
                  Sell Artwork
                </Button>
              </div>
            </div>
            <div class="relative w-full lg:w-[260px] xl:w-[369px] aspect-369/249">
              <img class="h-full absolute inset-0 rounded-xl z-2 object-cover" src="/divesea/images/1.webp" alt="NFT" />
              <img
                class="absolute top-0 lg:top-[15px] left-[-8px] lg:left-[-12px] right-[-6px] lg:right-[-9px] bottom-[-8px] lg:bottom-[-15px] z-1 object-cover blur-[50px]"
                src="/divesea/images/1.webp"
                alt="Blurred Shadow"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
