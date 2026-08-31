import type React from "react"
import type { Metadata } from "next"
import { Big_Shoulders_Display, Bitter, Courier_Prime, Noto_Serif_Thai, Noto_Sans_Thai } from "next/font/google"
import "./globals.css"
import PageTransition from "./components/PageTransition"
import DawnLight from "./components/DawnLight"
import { Providers } from "./providers"

const display = Big_Shoulders_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  variable: "--font-display-latin",
})
const body = Bitter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body-latin",
})
const mono = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-latin",
})
const displayThai = Noto_Serif_Thai({
  subsets: ["thai"],
  weight: ["600", "700", "800"],
  variable: "--font-display-thai",
})
const bodyThai = Noto_Serif_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600"],
  variable: "--font-body-thai",
})
const monoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "700"],
  variable: "--font-mono-thai",
})

export const metadata: Metadata = {
  title: "Tirawat Pongpratisonthi - Portfolio",
  description:
    "Computer Science student and Full Stack Developer portfolio showcasing projects, skills, and experience",
  keywords: "developer, portfolio, full stack, react, next.js, web development, computer science, Tirawat",
  authors: [{ name: "Tirawat Pongpratisonthi" }],
  openGraph: {
    title: "Tirawat Pongpratisonthi - Portfolio",
    description: "Computer Science Student & Full Stack Developer Portfolio",
    type: "website",
  },
}

const directionContract = `
THESIS: The site as a hand-set broadside, one deliberate sheet pulled from
the press per section, refusing the dark-navy blue-cyan glassmorphism hero
every dev portfolio ships (seed key c25098d5).
OWN-WORLD: cream press stock ground, near-black ink body, terracotta accent
reserved for active/CTA elements, olive hairline rules; Big Shoulders
Display wood-type caps for headings, Bitter for reading text, Courier Prime
for stamped labels and dates.
STORY: a recruiter or visitor reads a careful, crafted full-stack engineer's
work within seconds, moves through pressed sections, and can act via
ink-stamped contact CTAs.
FIRST VIEWPORT: full-bleed cream masthead, name in bold wood-type caps, a
hand-set role line beneath, one terracotta rule anchoring the layout, a
deckle-edged portrait plate, an ink-stamped primary CTA.
FORM: Letterpress Broadside Print Shop, assigned index 3 of 7 grounded
candidates, raised by five donations: hand-cut ornament warmth, a single
held hero moment, a dawn-to-day scroll light shift, axial registration-mark
navigation, and tactile ink-impression press states.
FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying
its provenance.
`

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${display.variable} ${body.variable} ${mono.variable} ${displayThai.variable} ${bodyThai.variable} ${monoThai.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="overflow-x-hidden" suppressHydrationWarning>
        <div aria-hidden style={{ display: "none" }} dangerouslySetInnerHTML={{ __html: `<!--${directionContract}-->` }} />
        <DawnLight />
        <Providers>
          <PageTransition>{children}</PageTransition>
        </Providers>
      </body>
    </html>
  )
}
