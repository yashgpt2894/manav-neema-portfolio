"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  ArrowUpRight,
  Download,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "About", href: "#about", tablet: true },
  { label: "Experience", href: "#journey", tablet: false },
  { label: "Work", href: "#work", tablet: true },
  { label: "Stack", href: "#capabilities", tablet: false },
  { label: "Contact", href: "#contact", tablet: true },
] as const;

export function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    function closeMenuAndRestoreFocus() {
      setIsOpen(false);
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenuAndRestoreFocus();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-black/15 bg-[color:rgb(213_207_190_/_84%)] backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="page-shell flex h-[61px] items-center justify-between gap-3 md:h-[76px]"
      >
        <a
          href="#about"
          aria-label="Manav Neema, go to introduction"
          className="group flex shrink-0 items-center gap-2.5"
          onClick={closeMenu}
        >
          <span className="grid size-8 place-items-center bg-[var(--acid)] font-heading text-[0.72rem] font-black tracking-[-0.08em] text-[var(--ink)] transition-transform duration-300 group-hover:-rotate-3 md:size-9">
            MN
          </span>
          <span className="hidden flex-col leading-none min-[360px]:flex">
            <span className="font-heading text-[0.8rem] font-black tracking-[-0.04em]">
              MANAV NEEMA
            </span>
            <span className="mt-1 hidden text-[0.55rem] font-bold tracking-[0.14em] text-black/55 uppercase sm:block">
              Data + ML systems
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${link.tablet ? "inline-flex" : "hidden xl:inline-flex"} rounded-md px-3 py-2 text-[0.72rem] font-extrabold tracking-[0.04em] uppercase transition-colors hover:bg-black hover:text-[var(--paper)]`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href="https://www.linkedin.com/in/manav-neema-4696a71aa/"
            target="_blank"
            rel="me noreferrer"
            aria-label="Visit Manav Neema on LinkedIn"
            className="grid size-10 place-items-center rounded-full border border-black/20 transition-transform duration-300 hover:-translate-y-0.5 hover:bg-[var(--paper)]"
          >
            <ArrowUpRight
              aria-hidden="true"
              className="size-4"
              strokeWidth={2.25}
            />
          </a>
          <a
            href="/downloads/manav-neema-resume.pdf"
            download
            className="group inline-flex min-h-10 items-center gap-2 rounded-lg bg-[var(--ink)] px-4 text-[0.72rem] font-extrabold tracking-[0.04em] text-[var(--paper)] uppercase transition-transform duration-300 hover:-translate-y-0.5"
          >
            Resume
            <Download
              aria-hidden="true"
              className="size-3.5 transition-transform duration-300 group-hover:translate-y-0.5"
              strokeWidth={2.5}
            />
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/downloads/manav-neema-resume.pdf"
            download
            className="inline-flex h-9 items-center rounded-md border border-black/25 bg-[color:rgb(248_247_243_/_42%)] px-3 text-[0.65rem] font-black tracking-[0.04em] uppercase"
          >
            Resume
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls={menuId}
            className="grid size-9 place-items-center rounded-md bg-[var(--ink)] text-[var(--paper)]"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? (
              <X aria-hidden="true" className="size-4" strokeWidth={2.5} />
            ) : (
              <Menu aria-hidden="true" className="size-4" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </nav>

      {isOpen ? (
        <div
          id={menuId}
          className="fixed inset-0 top-[61px] z-[-1] flex min-h-[calc(100dvh-61px)] flex-col overflow-y-auto bg-[var(--ink)] px-5 pb-8 pt-10 text-[var(--paper)] md:hidden"
        >
          <p className="eyebrow text-[var(--acid)]">Navigate</p>
          <div className="mt-9 flex flex-col">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                aria-label={`Go to ${link.label} section`}
                className="group flex items-center justify-between border-b border-white/15 py-4 font-heading text-[clamp(2.35rem,12vw,3.6rem)] font-black leading-none tracking-[-0.055em]"
                onClick={closeMenu}
              >
                <span>
                  <span className="mr-3 align-top font-sans text-[0.58rem] font-bold tracking-[0.1em] text-white/45">
                    0{index + 1}
                  </span>
                  {link.label}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-6 text-[var(--acid)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            ))}
          </div>

          <div className="mt-auto flex items-end justify-between gap-6 pt-10">
            <p className="max-w-[16rem] text-[0.78rem] leading-relaxed text-white/55">
              Data platforms, streaming intelligence, and production ML — built
              in Amsterdam.
            </p>
            <a
              href="https://www.linkedin.com/in/manav-neema-4696a71aa/"
              target="_blank"
              rel="me noreferrer"
              aria-label="Visit Manav Neema on LinkedIn"
              className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--acid)] text-[var(--ink)]"
            >
              <ArrowUpRight
                aria-hidden="true"
                className="size-5"
                strokeWidth={2.25}
              />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
