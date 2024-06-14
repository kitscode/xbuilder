'use client'
import Image from 'next/image';
import CoinList from "@/app/ui/coinList";
import FixedTop from "@/app/ui/fixedTop";
import Source from "@/app/ui/source";

export default function Home() {
    return (
        <main>
            <div>
                <FixedTop/>
            </div>
            <div style={{display: "flex"}}>
                {/* See How The Value Goes */}
                {/*<Image*/}
                {/*    src="https://alternative.me/crypto/fear-and-greed-index.png"*/}
                {/*    alt="Latest Crypto Fear & Greed Index"*/}
                {/*    width={300}*/}
                {/*    height={300}*/}
                {/*/>*/}
                {/*<CoinList/>*/}
                {/*<Link href="/ahr999">ahr999</Link>*/}
                {/*<Ahr999Chart/>*/}
                <Source name={"Assets By Market Cap"} url={"https://companiesmarketcap.com/assets-by-market-cap"}
                        tag={"Index"} description={"Assets By Market Cap"}/>
                <Source name={"World Stats"} url={"https://tradingeconomics.com/matrix"}
                        tag={"Index"} description={"World Stats"}/>
                <Source name={"Stocks"} url={"https://tradingeconomics.com/stocks"}
                        tag={"Index"} description={"World Main Stocks"}/>
                <Source name={"Central Bank Rates"} url={"https://en.macromicro.me/central_bank/overview"}
                        tag={"Rate"} description={"Central Bank Rates Overview"}/>
                <Source name={"Crypto Fear & Greed Index"} url={"https://alternative.me/crypto/fear-and-greed-index"}
                        tag={"Index"} description={"Crypto Fear & Greed Index"}/>
                <Source name={"Ahr999 Index"} url={"https://www.coinglass.com/pro/i/ahr999"} tag={"Index"}
                        description={"Bitcoin Ahr999 Index"}/>
                <Source name={"Who Runs China"} url={"https://news.cgtn.com/event/2019/whorunschina/index.html"} tag={"graph"} description={"Who Runs China By CGTN"}/>
            </div>
        </main>
    );
}
