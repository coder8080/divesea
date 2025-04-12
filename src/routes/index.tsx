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
            <Button size="md">Create NFT</Button>
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
        <Recent />
      </div>
      <div class="mt-[240px] flex flex-col items-center gap-[90px]">
        <h2 class="capitalize font-[Poppins] font-semibold text-[44px] text-[#141416]">
          Top Collection
        </h2>
        <div class="grid grid-cols-[1fr_auto_auto_auto_auto_auto] grid-rows-[repeat(5, 84px, 1px)] w-full gap-x-[80px] px-[100px] max-w-[1440px]">
          <GridTitle>Collection</GridTitle>
          <GridTitle>Volume</GridTitle>
          <GridTitle>24h %</GridTitle>
          <GridTitle>Floor Price</GridTitle>
          <GridTitle>Owners</GridTitle>
          <GridTitle>Items</GridTitle>
          <For each={gridRows()}>{(item) => <GridRow {...item} />}</For>
        </div>
      </div>
    </main>
  );
}
