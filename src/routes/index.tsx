import Button from "~/shared/ui/Button";
import Stat from "~/shared/ui/Stat";
import Card from "~/shared/ui/Card";
import NFTS from "~/shared/data/nfts";
import Atropos from "atropos";
import Swiper from "swiper";
import ScrollReveal from "~/shared/ui/ScrollReveal";
import Recent from "~/shared/ui/Recent";
import GridTitle from "~/shared/ui/GridTitle";
import { Navigation } from "swiper/modules";
import { createEffect, createMemo, For } from "solid-js";
import GridRow from "~/shared/ui/GridRow";
import ListItem from "~/shared/ui/ListItem";
import Account from "~/shared/ui/Account";

export default function Home() {
  createEffect(() => {
    Atropos({
      el: ".atropos-img1",
      shadow: false,
    });

    new Swiper(".swiper", {
      modules: [Navigation],
      loop: true,
      slidesPerView: "auto",
      spaceBetween: 40,
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

  const gridRows = createMemo(() => NFTS.slice(0, 4));
  const accounts = createMemo(() => NFTS.slice(0, 6));

  return (
    <main>
      <ScrollReveal />
      <div class="mt-[80px] flex flex-row gap-[48px] justify-center">
        <div class="ml-25 max-w-[568px] w-44/100 mt-[10px]">
          <div class="bg-[#201f1f] h-[1px] w-[195px] reveal-hr invisible" />
          <h1 class="font-[Poppins] font-semibold text-[75px]/[120%] mt-[10px] reveal-title invisible">
            Discover And Create NFTs
          </h1>
          <p class="max-w-[500px] font-[Inter] font-normal text-[#676767] text-[18px] reveal-desc invisible">
            Discover, Create and Sell NFTs On Our NFT Marketplace With Over
            Thousands Of NFTs And Get a $20 bonus.
          </p>
          <div class="flex flex-row gap-[23px] mt-[45px] reveal-buttons invisible">
            <Button size="md" fill>
              Explore More
            </Button>
            <Button size="md" border>
              Create NFT
            </Button>
          </div>
          <div class="flex flex-row gap-[46px] mt-[82px]">
            <Stat
              count={430}
              caption="Art Works"
              class="reveal-stat-1 invisible"
            />
            <Stat
              count={159}
              caption="Creators"
              class="reveal-stat-2 invisible"
            />
            <Stat
              count={87}
              caption="Collections"
              class="reveal-stat-3 invisible"
            />
          </div>
        </div>
        <div class="max-w-[758px] aspect-758/522 w-56/100 flex flex-row gap-[6.3%] relative self-start">
          <img
            src="/arrow.svg"
            class="absolute top-50/522 w-128/758 right-184/758 reveal-arrow invisible"
          />
          <div class="w-390/758 self-start relative">
            <div class="atropos atropos-img1 mt-[20px] mb-[24px] reveal-img1 invisible">
              <div class="atropos-scale">
                <div class="atropos-rotate">
                  <div class="atropos-inner">
                    <div
                      class="w-full rounded-2xl aspect-square"
                      style={{
                        "background-image": 'url("/images/1.png")',
                        "background-position": "center",
                        "background-size": "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="w-full rounded-2xl aspect-square absolute bottom-0 -z-1"
              style={{
                "background-image": 'url("/images/1.png")',
                "background-position": "center",
                "background-size": "cover",
                filter: "blur(50px)",
              }}
            />
          </div>
          <div class="relative w-320/758 flex flex-row">
            <div class="w-full relative self-end reveal-img2 invisible">
              <div
                class="w-full rounded-2xl aspect-square mb-[24px]"
                style={{
                  "background-image": 'url("/img-source.png")',
                  "background-position": "center",
                  "background-size": "cover",
                }}
              />
              <div
                class="w-full rounded-2xl aspect-square absolute bottom-0 -z-1"
                style={{
                  "background-image": 'url("/img-source.png")',
                  "background-position": "center",
                  "background-size": "cover",
                  filter: "blur(50px)",
                }}
              />
            </div>
            <div
              style={{
                "background-image": "radial-gradient(#000 2px, transparent 0)",
                "background-size": "16px 16px",
              }}
              class="absolute right-0 top-0 w-110/320 h-170/522 reveal-grid invisible"
            />
          </div>
        </div>
      </div>
      <div class="mt-[164px] bg-[#f1f1f1] flex flex-col items-center pt-[70px] pb-[90px] max-w-screen relative">
        <h2 class="font-[Poppins] text-[45px] text-[#c5c5c5] font-semibold">
          Weekly - Top NFT
        </h2>
        <div class="swiper mt-[100px] max-w-full transform-none">
          <div class="swiper-wrapper max-w-full transform-none">
            <For each={NFTS}>
              {(item) => (
                <div class="swiper-slide w-[280px] max-w-[280px]">
                  <Card {...item} />
                </div>
              )}
            </For>
          </div>
          <div class="flex flex-row bg-white h-[68px] w-[166px] rounded-2xl mx-auto mt-[60px] relative">
            <button class="swiper-button-prev flex flex-row items-center justify-center grow cursor-pointer">
              <img src="/icons/arrow-left.svg" />
            </button>
            <button class="swiper-button-next flex flex-row items-center justify-center grow cursor-pointer">
              <img src="/icons/arrow-right.svg" />
            </button>
            <div class="absolute left-1/2 top-1/2 -translate-1/2 bg-[#e6e8ec] w-[2px] h-[26px] rounded-full" />
          </div>
        </div>
        <Recent class="absolute right-[80px] bottom-0 translate-y-1/2" />
      </div>
      <div class="mt-[240px] flex flex-col items-center px-[100px] max-w-[1440px] mx-auto">
        <h2 class="capitalize font-[Poppins] font-semibold text-[44px] text-[#141416]">
          Top Collection
        </h2>
        <div class="grid grid-cols-[1fr_auto_auto_auto_auto_auto] grid-rows-[repeat(5, 84px, 1px)] w-full gap-x-[80px] mt-[90px]">
          <GridTitle>Collection</GridTitle>
          <GridTitle>Volume</GridTitle>
          <GridTitle>24h %</GridTitle>
          <GridTitle>Floor Price</GridTitle>
          <GridTitle>Owners</GridTitle>
          <GridTitle>Items</GridTitle>
          <For each={gridRows()}>{(item) => <GridRow {...item} />}</For>
        </div>
        <a class="font-[Poppins] font-[500] text-[17px] text-[#ACADB9] inline-flex flex-row items-center gap-[16px] capitalize self-end mt-[40px]">
          Explore All
          <img src="/icons/link-arrow.svg" />
        </a>
      </div>
      <div class="grid grid-cols-[auto_1fr] px-[100px] mt-[140px] max-w-[1245px] mx-auto">
        <div class="flex flex-col items-start">
          <h2 class="capitalize font-[Poppins] font-[600] text-[45px] text-[#C5C5C5]">
            Just Unleash -
          </h2>
          <h2 class="capitalize font-[Poppins] font-[600] text-[45px] text-[#18181B]">
            Your Inner Collector
          </h2>
          <div class="flex flex-col items-start gap-[18px] mt-[50px]">
            <ListItem>Best Seller All Around World</ListItem>
            <ListItem>$2M+ Transections Every Day</ListItem>
            <ListItem>Secure Transactions</ListItem>
            <ListItem>Exclusive Collections From Sellers</ListItem>
            <ListItem>Easy Buying and Selling</ListItem>
            <ListItem>Join Our Community</ListItem>
          </div>
        </div>
        <div class="relative mx-auto bg-white rounded-3xl flex flex-col gap-[24px] px-[22px] py-[26px] w-[320px]">
          <h3 class="capitalize font-[Poppins] font-[600] text-[16px] text-[#1A202C]">
            Best Sellers
          </h3>
          <div class="flex flex-col gap-[18px]">
            <For each={accounts()}>
              {(item, index) => <Account {...item} index={index()} />}
            </For>
          </div>
          <Recent class="absolute left-0 bottom-0 translate-y-1/3 -translate-x-1/2 shadow-xl border border-[#EDF2F7]" />
          <div class="absolute top-0 right-0 -translate-y-1/2 translate-x-3/5 w-[325px] p-[12px] grid grid-cols-[auto_auto_auto_1fr_auto] gap-x-[12px] bg-white shadow-xl rounded-2xl">
            <div class="rounded-full w-[7.6px] aspect-square bg-[#141416] self-center" />
            <div
              class="rounded-full w-[40px] aspect-square relative"
              style={{
                "background-image": `url("/images/1.png")`,
                "background-size": "cover",
                "background-position": "center",
              }}
            >
              <img
                src="/icons/verified.svg"
                class="aspect-square w-[17px] absolute top-0 right-0 translate-x-1/4"
              />
            </div>
            <div class="flex flex-col">
              <div class="flex flex-row gap-[5.7px]">
                <span class="font-[Poppins] font-[500] text-[13.29px] text-[#949494] block">
                  New bid
                </span>
                <span class="font-[Poppins] font-[500] text-[13.29px] text-[#141416] block">
                  Rotation
                </span>
              </div>
              <span class="block font-[Poppins] font-[600] text-[11.39px] text-[#141416]">
                0.002 ETH
              </span>
            </div>
            <div />
            <div
              class="row-span-2 rounded-xl w-[60.76px] aspect-square"
              style={{
                "background-image": `url("/images/1.png")`,
                "background-position": "center",
                "background-size": "cover",
              }}
            ></div>
            <div class="col-span-2" />
            <div class="font-[Poppins] font-[600] text-[11.39px] text-[#949494]">
              6 Oct 2022, 11:44 PM
            </div>
          </div>
        </div>
      </div>
      <div class="px-[97px] mt-[200px] w-full">
        <div class="w-full max-w-[1245px] rounded-2xl bg-[#141416] flex justify-between p-[31px] mx-auto">
          <div class="flex flex-col mt-[13.22px] ml-[35px]">
            <h2 class="font-[Poppins] font-[600] text-[45px] text-white">
              Create and Sell NFTs
            </h2>
            <p class="font-[Poppins] font-[500] text-[20.27px] text-[#a4a4a4] mt-[12.48px]">
              World’s Largest NFT Place
            </p>
            <div class="flex flex-row justify-start gap-[30.51px] mt-auto">
              <Button size="xl" white>
                Explore More
              </Button>
              <Button size="xl2" fill border>
                Sell Artwork
              </Button>
            </div>
          </div>
          <div class="relative w-[369px] h-[249px]">
            <div
              class="absolute inset-0 rounded-xl z-2"
              style={{
                "background-image": `url("/images/1.png")`,
                "background-position": "center",
                "background-size": "cover",
              }}
            />
            <div
              class="absolute top-[15px] left-[-12px] right-[-9px] bottom-[-15px] z-1"
              style={{
                "background-image": `url("/images/1.png")`,
                "background-position": "center",
                "background-size": "cover",
                filter: "blur(52.87px)",
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
