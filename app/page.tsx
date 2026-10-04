"use client"

import { useState } from "react"
import { ArrowDown, CakeSlice, Gift, Heart, PartyPopper, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ThemeToggle } from "@/components/theme-toggle"

const wishes = [
  { title: "More soft days", text: "May life give you more reasons to smile without trying." },
  { title: "Big dreams", text: "May every dream you keep quiet about find its way to you." },
  { title: "Good people", text: "May you always be surrounded by people who make you feel safe and loved." },
]

export default function Home() {
  const [open, setOpen] = useState(false)
  const [wishMade, setWishMade] = useState(false)
  const [confetti, setConfetti] = useState<number[]>([])

  function celebrate() {
    setOpen(true)
  }

  function makeWish() {
    setWishMade(true)
    setConfetti(Array.from({ length: 45 }, (_, i) => i))
    window.setTimeout(() => setConfetti([]), 3500)
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 grain opacity-40" />
      {confetti.map((i) => (
        <i
          key={i}
          className="confetti-piece"
          style={{
            left: `${(i * 37) % 100}%`,
            ["--x" as string]: `${((i * 83) % 220) - 110}px`,
            ["--d" as string]: `${2 + ((i * 17) % 15) / 10}s`,
            opacity: 0.5 + ((i * 13) % 50) / 100,
          }}
        />
      ))}

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
            <span className="grid size-8 place-items-center rounded-xl bg-primary text-primary-foreground"><Heart className="size-4 fill-current" /></span>
            for You Bao
          </a>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="hidden sm:inline-flex"><a href="#letter">Letter</a></Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <section id="top" className="relative mx-auto grid min-h-[calc(100svh-64px)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-[1.15fr_.85fr] md:px-8 md:py-24">
        <div className="relative z-10 max-w-3xl">
          <Badge className="mb-6 gap-2 bg-background/80 px-3 py-1.5"><PartyPopper className="size-3.5 text-primary" /> today is yours</Badge>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-muted-foreground">Happy birthday</p>
          <h1 className="display text-balance text-[clamp(4.5rem,14vw,9.5rem)] font-semibold leading-[.72] tracking-[-.055em]">You<br/><span className="text-primary">Bao.</span></h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-muted-foreground md:text-xl">A small corner of the internet made only for you — because one ordinary birthday message didn’t feel like enough.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" onClick={celebrate}><Gift /> Open your surprise</Button>
            <Button size="lg" variant="outline" asChild><a href="#wishes">Keep scrolling <ArrowDown /></a></Button>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
          <div className="absolute inset-0 rotate-3 rounded-[2.25rem] border border-border bg-card shadow-sm" />
          <div className="absolute inset-0 -rotate-3 overflow-hidden rounded-[2.25rem] border border-border bg-[radial-gradient(circle_at_top_right,var(--accent),transparent_55%),linear-gradient(145deg,var(--card),var(--background))] shadow-xl">
            <div className="absolute left-7 top-7 text-xs uppercase tracking-[.22em] text-muted-foreground">04 Oct 2026</div>
            <div className="absolute inset-x-0 top-[24%] text-center">
              <div className="display float-slow text-[8rem] leading-none text-primary/90">♡</div>
              <p className="mt-2 text-sm text-muted-foreground">a birthday note,<br/>wrapped with love</p>
            </div>
            <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between border-t border-border pt-5">
              <span className="display text-3xl font-semibold">You Bao</span>
              <span className="text-xs text-muted-foreground">one of one</span>
            </div>
          </div>
        </div>
      </section>

      <section id="wishes" className="border-y border-border bg-muted/35">
        <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium text-primary">Three wishes for you</p>
            <h2 className="display text-5xl font-semibold tracking-tight md:text-7xl">For the year ahead.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {wishes.map(({ title, text }, i) => (
              <Card key={title} className="group bg-card/80 transition-transform hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-7 flex items-center justify-end"><span className="text-xs text-muted-foreground">0{i + 1}</span></div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <CardDescription className="text-base leading-7">{text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="letter" className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid gap-10 md:grid-cols-[.65fr_1.35fr]">
          <div><Badge className="mb-4">A little letter</Badge><h2 className="display text-5xl font-semibold tracking-tight md:text-7xl">Dear<br/>You Bao,</h2></div>
          <Card className="overflow-hidden border-primary/15 bg-card shadow-xl shadow-primary/5">
            <CardContent className="p-7 md:p-10">
              <div className="space-y-5 text-[1.05rem] leading-8 text-muted-foreground">
                <p>I’m really sorry this birthday wish is late, and I’m sorry this little surprise came later than it should have. I still wanted to make something special for you, even if I was a little late getting it to you.</p>
                <p>I hope this year gives you more of the things that make your heart feel light: good memories, good people, quiet happiness, and reasons to be proud of yourself.</p>
                <p>No matter how ordinary some days may feel, I hope you never forget that your presence makes them different for the people who care about you.</p>
                <p>Keep being exactly who you are, keep chasing what makes you excited, and don’t rush the beautiful parts of growing into yourself.</p>
              </div>
              <div className="mt-10 border-t border-border pt-6"><p className="display text-3xl font-semibold text-foreground">Happy Birthday ♡</p><p className="mt-1 text-sm text-muted-foreground">Made specially for You Bao, with a little apology for being late.</p></div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 md:grid-cols-2 md:px-8 md:py-28">
          <div><p className="mb-3 text-sm text-primary">One last thing</p><h2 className="display max-w-lg text-5xl font-semibold leading-[.95] tracking-tight text-foreground md:text-7xl">Make a wish before you go.</h2></div>
          <div className="flex flex-col items-start justify-center">
            <button onClick={makeWish} className="group relative mb-6 border-0 bg-transparent p-0 outline-none transition hover:scale-105 focus-visible:ring-2 focus-visible:ring-primary/50" aria-label="Make a birthday wish">
              <CakeSlice className={`size-32 text-primary md:size-40 transition-all ${wishMade ? "scale-95" : "group-hover:rotate-3"}`} strokeWidth={1.5} />
            </button>
            <p className="max-w-md text-muted-foreground">{wishMade ? "Wish made. I hope this one finds you. ✨" : "Tap the cake, close your eyes for a second, and make it a good one."}</p>
            <Button className="mt-7" asChild><a href="https://www.tiktok.com/@xclusv.lozu" target="_blank" rel="noreferrer">TikTok @xclusv.lozu <ExternalLink /></a></Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8"><div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between md:px-8"><span>Made with care for You Bao.</span><span>Happy Birthday · 04 Oct 2026</span></div></footer>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <div className="mb-3 grid size-12 place-items-center rounded-2xl bg-accent text-accent-foreground"><Gift className="size-5" /></div>
            <DialogTitle className="display text-4xl">Surprise, You Bao.</DialogTitle>
            <DialogDescription className="text-base leading-7">I’m sorry this surprise is late. I hope today still feels a little more beautiful than usual. You deserve a birthday full of laughter, peace, good food, silly moments, and people who remind you how loved you are.</DialogDescription>
          </DialogHeader>
          <Button className="mt-6 w-full" onClick={() => setOpen(false)}>Best birthday ever ♡</Button>
        </DialogContent>
      </Dialog>
    </main>
  )
}
