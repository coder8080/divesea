import Button from "~/shared/ui/Button";
import Stat from "~/shared/ui/Stat/Stat";

export default function Home() {
  return (
    <main>
      <div class="mt-[80px] flex flex-row gap-[48px] justify-center">
        <div class="ml-25 max-w-[568px] w-44/100 mt-[10px]">
          <div class="bg-[#201f1f] h-[1px] w-[195px]" />
          <h1 class="font-[Poppins] font-semibold text-[75px]/[120%] mt-[10px]">
            Discover And Create NFTs
          </h1>
          <p class="max-w-[500px] font-[Inter] font-normal text-[#676767] text-[18px]">
            Discover, Create and Sell NFTs On Our NFT Marketplace With Over
            Thousands Of NFTs And Get a $20 bonus.
          </p>
          <div class="flex flex-row gap-[23px] mt-[45px]">
            <Button size="md" fill>
              Explore More
            </Button>
            <Button size="md">Create NFT</Button>
          </div>
          <div class="flex flex-row gap-[46px] mt-[82px]">
            <Stat count={430} caption="Art Works" />
            <Stat count={159} caption="Creators" />
            <Stat count={87} caption="Collections" />
          </div>
        </div>
        <div class="max-w-[758px] aspect-758/522 w-56/100 flex flex-row gap-[48px] relative self-start">
          {/* <img src="/arrow.svg" class="absolute left-11/20 top-3/20" /> */}
          {/* <div class="w-390/758 self-start relative">

          </div> */}
          <div class="relative w-320/758 self-end">
            <div class="w-full relative">
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
            {/* <div
              style={{
                "background-image": "radial-gradient(#000 2px, transparent 0)",
                "background-size": "16px 16px",
              }}
              class="absolute right-0 top-[-178px] w-[110px] h-[170px]"
              /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
