import Link from "next/link";
import Image from 'next/image';

export default function Home() {
    return (
        <main>
            <Image
                src="https://alternative.me/crypto/fear-and-greed-index.png" // Adjust the path based on your image location
                alt="Latest Crypto Fear & Greed Index" // Provide a meaningful description for accessibility
                width={300}
                height={300}
            />
            <Link href="/ahr999">ahr999</Link>
        </main>
    );
}
