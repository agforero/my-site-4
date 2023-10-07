import PageHeader from "@/components/global/pageHeader";
import Head from "next/head";
import ReactConfetti from "react-confetti";

export default function HappyBirthdayZeke() {
    return (
        <>
            <Head>
                <title>HAPPY BIRTHDAY ZEKE</title>
                <meta name="description" content="HAPPY BIRTHDAY ZEKE" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <ReactConfetti />
                <PageHeader>HAPPY BIRTHDAY ZEKE</PageHeader>
                <p className="lead">Wow! It's your birthday! That's so exhilarating. What are you now, 21? 34? 69? Lol!</p>
                <p>Anyways, happy birthday, Zeke. You are now 24 years old. Some fun facts about the number 24:</p>
                <ul>
                    <li>24 is the smallest 5-hemiperfect number. Wow!</li>
                    <li>The modular discriminant Δ(τ) is proportional to the 24th power of the Dedekind eta function η(τ): Δ(τ) = (2π)<sup>12</sup>η(τ)<sup>24</sup>. Awesome!</li>
                    <li>24 is the only number whose divisors are exactly those numbers <i>n</i> for which every invertible element of the commutative ring Z/<i>n</i>Z is a square root of 1. In other words, the multiplicative group of invertible elements (Z/24Z)<sup>×</sup> = {'{'}±1, ±5, ±7, ±11{'}'} is isomorphic to the additive group (Z/2Z)<sup>3</sup>. Exciting!</li>
                    <li>24 is the number of books in the Tanakh. Mazel tov!</li>
                    <li>In apocalyptic literature, 24 is the number symbolizing the completeness of the Church, being the sum of the 12 tribes of Israel and the 12 Apostles of the Lamb of God. To quote the Book of Revelation: "Surrounding the throne were twenty-four other thrones, and seated on them were twenty-four elders. They were dressed in white and had crowns of gold on their heads." Our doom is foretold in the Holy Scriptures!</li>
                    <li>24 karat gold is 100% pure gold. Shiny!</li>
                </ul>
                <p>I'm glad to be your roommate in our strange duct-tape-and-silly-putty apartment, complete with (still) no hot water and a Jeff Goldblum shower curtain. I knew you were an excellent roommate at St. Olaf, and that I could bet on you being an amazing roommate here, and I bet correctly. You're an incredible friend and a stand-up guy, and you're someone who, honestly, is too good for this stupid dumb world. I'm glad I could look over my blind rage and hatred for you freshman year at St. Olaf, and that we've developed the friendship we have over the years. You've been there for me during tough times, and I am lucky that I can be there for you, too, whenever you need it.</p>
                <p>I'm wishing you an amazing 24, much better than the last year, and your first full year living as a working man in New York City. The people around you are proud of you and who you are; you're a beautiful soul who deserves the world.</p>
                <p className="text-end d-flex flex-column">
                    <span>Your roommate,</span>
                    <span>Agustin</span>
                </p>
            </main>
        </>
    );
}
