"use client"

import { useEffect, useState } from "react"
import {
  Home,
  User,
  Briefcase,
  Mail,
  Sun,
  Moon,
} from "lucide-react"

import {
  Dock,
  DockCard,
  DockCardInner,
  DockDivider,
} from "@/components/ui/dock"

let gradients = [
  "https://products.ls.graphics/mesh-gradients/images/03.-Snowy-Mint_1-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/04.-Hopbush_1-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/06.-Wisteria-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/09.-Light-Sky-Blue-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/12.-Tumbleweed-p-130x130q80.jpeg",
  "https://products.ls.graphics/mesh-gradients/images/15.-Perfume_1-p-130x130q80.jpeg",
]

function ThemeIcon({ src }: { src: string }) {
  const [theme, setTheme] = useState("light")
  const isDark = theme === "dark"

  useEffect(() => {
    const stored = window.localStorage.getItem("theme")
    const initial =
      stored ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
    setTheme(initial)
    document.documentElement.classList.toggle("dark", initial === "dark")
  }, [])

  function toggle(e: React.MouseEvent) {
    e.preventDefault()
    const next = theme === "dark" ? "light" : "dark"
    setTheme(next)
    document.documentElement.classList.toggle("dark", next === "dark")
    window.localStorage.setItem("theme", next)
  }

  return (
    <button onClick={toggle} className="block h-full w-full focus:outline-none">
      <DockCardInner src={src}>
        {isDark ? <Sun className="h-6 w-6 text-black stroke-black" /> : <Moon className="h-6 w-6 text-black stroke-black" />}
      </DockCardInner>
    </button>
  )
}

const tabs = [
  { name: "Home", icon: Home, href: "/", src: gradients[0] },
  { name: "About Me", icon: User, href: "/#about", src: gradients[1] },
  { name: "Projects", icon: Briefcase, href: "/#projects", src: gradients[2] },
  { name: "Contact", icon: Mail, href: "/#contact", src: gradients[3] },
]

export function Nav() {
  return (
    <header className="fixed inset-x-0 bottom-6 sm:bottom-10 z-50">
      <div className="flex w-full items-center justify-center">
        <Dock>
          {tabs.map((tab) => (
            <DockCard key={tab.name}>
              <a href={tab.href} className="block h-full w-full" aria-label={tab.name}>
                <DockCardInner src={tab.src}>
                  <tab.icon className="h-6 w-6 text-black stroke-black" />
                </DockCardInner>
              </a>
            </DockCard>
          ))}
          
          <DockCard>
             <ThemeIcon src={gradients[4]} />
          </DockCard>

          <DockDivider />

          <DockCard>
            <a href="/" className="block h-full w-full">
              <DockCardInner src={gradients[5]}>
                <span className="font-display font-semibold tracking-tight text-black text-xs sm:text-sm">
                  dev<span className="text-black/70">.d</span>
                </span>
              </DockCardInner>
            </a>
          </DockCard>
        </Dock>
      </div>
    </header>
  )
}
