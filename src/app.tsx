import { Meta, MetaProvider, Title } from "@solidjs/meta"
import { Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { Suspense } from "solid-js"
import Nav from "~/shared/ui/Nav"
import Footer from "~/shared/ui/Footer"
import "./app.css"
import "atropos/css"
import "swiper/css"

export default function App() {
  return (
    <Router
      base="/divesea/"
      root={(props) => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <Nav />
          <Suspense>{props.children}</Suspense>
          <Meta name="description" content="Cutting-edge NFT trading startup" />
          <Meta name="keywords" content="Divesea, divesea, NFT, nft, blockchain, ether, ethereum, coder8080" />
          <Meta name="author" content="https://github.com/coder8080" />
          <Footer />
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  )
}
