import Button from "~/shared/ui/Button";
import Stat from "~/shared/ui/Stat/Stat";
import Atropos from "atropos";
import { createEffect } from "solid-js";
import { clientOnly } from "@solidjs/start";

const ScrollReveal = clientOnly(() => import("~/shared/ui/ScrollReveal"));

export default function Home() {
  createEffect(() => {
    Atropos({
      el: ".atropos-img1",
      shadow: false,
    });
  });

  return (
    <main>
      <ScrollReveal />
      <div class="mt-[80px] flex flex-row gap-[48px] justify-center">
        <div class="ml-25 max-w-[568px] w-44/100 mt-[10px]">
          <div class="bg-[#201f1f] h-[1px] w-[195px] reveal-hr" />
          <h1 class="font-[Poppins] font-semibold text-[75px]/[120%] mt-[10px] reveal-title">
            Discover And Create NFTs
          </h1>
          <p class="max-w-[500px] font-[Inter] font-normal text-[#676767] text-[18px] reveal-desc">
            Discover, Create and Sell NFTs On Our NFT Marketplace With Over
            Thousands Of NFTs And Get a $20 bonus.
          </p>
          <div class="flex flex-row gap-[23px] mt-[45px] reveal-buttons">
            <Button size="md" fill>
              Explore More
            </Button>
            <Button size="md">Create NFT</Button>
          </div>
          <div class="flex flex-row gap-[46px] mt-[82px] reveal-stat">
            <Stat count={430} caption="Art Works" class="reveal-stat-1" />
            <Stat count={159} caption="Creators" class="reveal-stat-2" />
            <Stat count={87} caption="Collections" class="reveal-stat-3" />
          </div>
        </div>
        <div class="max-w-[758px] aspect-758/522 w-56/100 flex flex-row gap-[6.3%] relative self-start">
          <img
            src="/arrow.svg"
            class="absolute top-50/522 w-128/758 right-184/758 reveal-arrow"
          />
          <div class="w-390/758 self-start relative">
            <div class="atropos atropos-img1 mt-[20px] mb-[24px] reveal-img1">
              <div class="atropos-scale">
                <div class="atropos-rotate">
                  <div class="atropos-inner">
                    <div
                      class="w-full rounded-2xl aspect-square"
                      style={{
                        "background-image": 'url("/img1.png")',
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
                "background-image": 'url("/img1.png")',
                "background-position": "center",
                "background-size": "cover",
                filter: "blur(50px)",
              }}
            />
          </div>
          <div class="relative w-320/758 flex flex-row">
            <div class="w-full relative self-end reveal-img2">
              <div
                class="w-full rounded-2xl aspect-square mb-[24px]"
                style={{
                  "background-image": 'url("/img2.png")',
                  "background-position": "center",
                  "background-size": "cover",
                }}
              />
              <div
                class="w-full rounded-2xl aspect-square absolute bottom-0 -z-1"
                style={{
                  "background-image": 'url("/img2.png")',
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
              class="absolute right-0 top-0 w-110/320 h-170/522 reveal-grid"
            />
          </div>
        </div>
      </div>
      <div class="mt-[164px] bg-[#f1f1f1] flex flex-col items-center pt-[70px] pb-[90px]">
        <h2 class="font-[Poppins] text-[45px] text-[#c5c5c5] font-semibold">
          Weekly - Top NFT
        </h2>
      </div>
    </main>
  );
}
