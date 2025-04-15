import Img1 from "~/shared/assets/images/1.png";
import Img2 from "~/shared/assets/images/2.png";
import Img3 from "~/shared/assets/images/3.png";
import Img4 from "~/shared/assets/images/4.png";
import Img5 from "~/shared/assets/images/5.png";
import Img6 from "~/shared/assets/images/6.jpg";
import Img7 from "~/shared/assets/images/7.jpg";
import Img8 from "~/shared/assets/images/8.jpg";
import Img9 from "~/shared/assets/images/9.jpg";
import Img10 from "~/shared/assets/images/10.jpg";
import Img11 from "~/shared/assets/images/11.jpg";
import Img12 from "~/shared/assets/images/12.jpg";
import Img13 from "~/shared/assets/images/13.jpg";
import Img14 from "~/shared/assets/images/14.jpg";
import Img15 from "~/shared/assets/images/15.jpg";
import Img16 from "~/shared/assets/images/16.jpg";
import Img17 from "~/shared/assets/images/17.jpg";
import Img18 from "~/shared/assets/images/18.jpg";
import Img19 from "~/shared/assets/images/19.jpg";
import Img20 from "~/shared/assets/images/20.jpg";
import Img21 from "~/shared/assets/images/21.jpg";
import Img22 from "~/shared/assets/images/22.jpg";

type Nft = {
  id: string;
  title: string;
  timer: string;
  bid: number;
  img: string;
  delta: number;
  owners: number;
  volume: number;
  items: number;
};

const NFTS: Nft[] = [
  {
    id: "1b6f4fc1-2fc9-4d1d-a3d1-7188c8143e39",
    title: "Sun Glass",
    timer: "04h 17m 38s",
    bid: 6.28,
    delta: 14.52,
    owners: 6.7,
    items: 500,
    volume: 2.194,
    img: Img1,
  },
  {
    id: "69fc15a0-12f1-44c8-a6a2-6c3142d7aabb",
    title: "Silent Echo",
    timer: "11h 02m 14s",
    bid: 3.59,
    delta: -7.33,
    owners: 2.3,
    items: 800,
    volume: 7.512,
    img: Img2,
  },
  {
    id: "c2a19cc9-6fc0-4dbf-bad5-c0983659f275",
    title: "Fractal Dream",
    timer: "00h 26m 05s",
    bid: 8.74,
    delta: 22.14,
    owners: 9.0,
    items: 700,
    volume: 6.803,
    img: Img3,
  },
  {
    id: "7255f96e-f924-4976-a403-3d99efb58ed3",
    title: "Liquid Horizon",
    timer: "09h 58m 41s",
    bid: 4.2,
    delta: -15.09,
    owners: 3.2,
    items: 1000,
    volume: 1.928,
    img: Img4,
  },
  {
    id: "b26c6ee8-f91f-4b2c-9614-e4b25aaac7a0",
    title: "Velvet Chaos",
    timer: "06h 35m 49s",
    bid: 2.96,
    delta: 9.87,
    owners: 7.8,
    items: 600,
    volume: 4.476,
    img: Img5,
  },
  {
    id: "9e1d02cb-6e41-4a2b-a53c-369ddcb7cd2b",
    title: "Crimson Whispers",
    timer: "01h 50m 32s",
    bid: 7.63,
    delta: -3.44,
    owners: 4.1,
    items: 400,
    volume: 9.871,
    img: Img6,
  },
  {
    id: "aef0bff3-f49c-4f84-817c-6c876ee0f617",
    title: "Electric Veil",
    timer: "10h 09m 00s",
    bid: 9.88,
    delta: 5.76,
    owners: 5.5,
    items: 300,
    volume: 6.543,
    img: Img7,
  },
  {
    id: "157b4cd1-c7ec-4b26-9251-d7e33d255df6",
    title: "Frozen Mirage",
    timer: "05h 03m 21s",
    bid: 0.17,
    delta: -28.93,
    owners: 2.8,
    items: 900,
    volume: 8.339,
    img: Img8,
  },
  {
    id: "da90b729-1fa7-4a5d-8056-1fcbbf2ea7a8",
    title: "Velvet Signal",
    timer: "12h 40m 12s",
    bid: 5.42,
    delta: 2.15,
    owners: 3.6,
    items: 600,
    volume: 5.123,
    img: Img9,
  },
  {
    id: "1086678a-e67f-4302-a9f2-346f9cf31947",
    title: "Twilight Bloom",
    timer: "03h 18m 07s",
    bid: 1.36,
    delta: 11.6,
    owners: 8.4,
    items: 700,
    volume: 3.087,
    img: Img10,
  },
  {
    id: "d88dc1a7-8b4e-4261-a56c-f1ef5e22c1f3",
    title: "Echo Dust",
    timer: "07h 27m 59s",
    bid: 6.94,
    delta: -19.72,
    owners: 1.9,
    items: 200,
    volume: 1.274,
    img: Img11,
  },
  {
    id: "4d637df0-cbcb-48c7-bb6c-f3556e4ad2b0",
    title: "Liquid Dusk",
    timer: "08h 46m 55s",
    bid: 3.1,
    delta: 0.46,
    owners: 9.9,
    items: 300,
    volume: 2.681,
    img: Img12,
  },
  {
    id: "07bfb24f-07b7-4cf8-bd3e-8350b75a09c4",
    title: "Hidden Pulse",
    timer: "02h 13m 18s",
    bid: 0.63,
    delta: -12.88,
    owners: 2.4,
    items: 800,
    volume: 9.621,
    img: Img13,
  },
  {
    id: "4f54b4d7-56c5-4de0-bc2c-6d62231591d2",
    title: "Neon Silence",
    timer: "10h 22m 40s",
    bid: 7.49,
    delta: 29.37,
    owners: 7.2,
    items: 600,
    volume: 4.831,
    img: Img14,
  },
  {
    id: "b74f0e51-8e52-4325-95d0-8e16ebfbc24d",
    title: "Shattered Light",
    timer: "04h 58m 01s",
    bid: 2.85,
    delta: -6.05,
    owners: 6.3,
    items: 400,
    volume: 3.934,
    img: Img15,
  },
  {
    id: "d53bc391-441a-460e-b7be-4f3367b6d4dc",
    title: "Obsidian Drift",
    timer: "06h 09m 46s",
    bid: 9.01,
    delta: -0.92,
    owners: 3.0,
    items: 500,
    volume: 7.11,
    img: Img16,
  },
  {
    id: "a4e2933f-8797-4937-b89c-7f5fdce71f20",
    title: "Celestial Fade",
    timer: "00h 45m 28s",
    bid: 4.79,
    delta: 17.88,
    owners: 8.7,
    items: 1000,
    volume: 1.583,
    img: Img17,
  },
  {
    id: "96b66f7b-b683-4133-a8d1-4b1e5dd7b1fa",
    title: "Glitch Flower",
    timer: "03h 36m 11s",
    bid: 1.94,
    delta: -22.13,
    owners: 5.9,
    items: 200,
    volume: 2.797,
    img: Img18,
  },
  {
    id: "edb96de5-1b17-4b7d-bb51-708c3e2b36c4",
    title: "Lunar Static",
    timer: "02h 08m 52s",
    bid: 8.31,
    delta: 3.28,
    owners: 4.4,
    items: 600,
    volume: 9.002,
    img: Img19,
  },
  {
    id: "e43d8b4a-8f90-41ae-a393-ef61df18555f",
    title: "Blurred Gravity",
    timer: "12h 59m 37s",
    bid: 3.76,
    delta: -5.74,
    owners: 6.6,
    items: 900,
    volume: 3.328,
    img: Img20,
  },
  {
    id: "17878b26-e1a5-4e29-bdf0-6a8e2d3b377c",
    title: "Synthetic Maze",
    timer: "01h 14m 06s",
    bid: 5.57,
    delta: 26.79,
    owners: 2.6,
    items: 100,
    volume: 6.663,
    img: Img21,
  },
  {
    id: "0fe2a6e4-768e-4e36-80b1-e4217cdef345",
    title: "Chrome Petals",
    timer: "09h 51m 33s",
    bid: 0.45,
    delta: -17.27,
    owners: 1.1,
    items: 500,
    volume: 8.104,
    img: Img22,
  },
];

export default NFTS;
