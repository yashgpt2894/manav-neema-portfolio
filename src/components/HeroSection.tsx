import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="about"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[var(--canvas)] pb-14 pt-[5.6rem] text-[var(--ink)] md:pb-20 md:pt-[7rem] lg:min-h-screen"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.18] [background-image:linear-gradient(to_right,rgb(10_10_10_/_18%)_1px,transparent_1px),linear-gradient(to_bottom,rgb(10_10_10_/_18%)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_70%)]"
      />

      <div className="page-shell">
        <div className="flex items-center justify-between gap-6">
          <p className="eyebrow">Data Engineer · ML Systems · Amsterdam</p>
          <p className="hidden items-center gap-2 text-[0.66rem] font-extrabold tracking-[0.08em] uppercase sm:flex">
            <span className="size-2 animate-pulse rounded-full bg-[var(--acid)] ring-1 ring-black" />
            Open to ambitious systems
          </p>
        </div>

        <div className="relative min-h-[31.5rem] sm:min-h-[34rem] lg:min-h-[35.5rem]">
          <p
            aria-hidden="true"
            className="absolute left-1/2 top-8 z-0 -translate-x-1/2 whitespace-nowrap font-heading text-[clamp(5.15rem,20vw,18rem)] font-black leading-[0.72] tracking-[-0.085em] text-[var(--acid)]"
          >
            MANAV
          </p>

          <div className="absolute left-1/2 top-[6.15rem] z-10 h-[21.75rem] w-[min(72vw,17.7rem)] -translate-x-1/2 sm:top-[6.8rem] sm:h-[24.5rem] sm:w-[20rem] lg:top-[5.85rem] lg:h-[28.75rem] lg:w-[23.5rem]">
            <div
              aria-hidden="true"
              className="absolute -inset-x-2 -bottom-2 top-2 translate-x-3 bg-[var(--ink)]"
            />
            <div className="relative h-full overflow-hidden border-2 border-[var(--ink)] bg-[var(--soft-paper)]">
              <Image
                src="/images/manav-neema.jpg"
                alt="Manav Neema standing beside a rocky stream in a forest landscape"
                fill
                preload
                sizes="(max-width: 639px) 72vw, (max-width: 1023px) 320px, 376px"
                className="object-cover object-center saturate-[0.82] contrast-[1.04]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/75 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-[var(--paper)] lg:p-5">
                <div>
                  <p className="text-[0.58rem] font-bold tracking-[0.13em] text-white/65 uppercase">
                    Portfolio / 2026
                  </p>
                  <p className="mt-1 font-heading text-xl font-black tracking-[-0.04em]">
                    Manav Neema
                  </p>
                </div>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--acid)] text-[0.58rem] font-black text-[var(--ink)]">
                  MN
                </span>
              </div>
            </div>
            <span className="absolute -top-3 left-3 bg-[var(--ink)] px-2.5 py-1 text-[0.55rem] font-black tracking-[0.1em] text-[var(--acid)] uppercase">
              Profile / 01
            </span>
          </div>

          <div className="absolute left-0 top-[4.6rem] z-20 w-[7.7rem] -rotate-2 border border-black bg-[var(--acid)] p-3 shadow-[4px_4px_0_#0a0a0a] sm:left-[7%] sm:top-[8rem] lg:left-[4%] lg:top-[10rem] lg:w-[10rem] lg:p-4">
            <p className="font-heading text-[1.8rem] font-black leading-none tracking-[-0.06em] lg:text-[2.4rem]">
              3+
            </p>
            <p className="mt-1.5 text-[0.62rem] font-extrabold leading-tight tracking-[0.04em] uppercase lg:text-[0.68rem]">
              years in data
            </p>
          </div>

          <div className="absolute right-0 top-[15.5rem] z-20 w-[8.45rem] rotate-2 border border-black/30 bg-[var(--paper)] p-3 shadow-[4px_4px_0_#0a0a0a] sm:right-[5%] sm:top-[18rem] lg:right-[3%] lg:top-[12rem] lg:w-[12.5rem] lg:p-4">
            <p className="text-[0.54rem] font-black tracking-[0.12em] text-black/50 uppercase">
              Foundation
            </p>
            <p className="mt-2 font-heading text-base font-black leading-[0.95] tracking-[-0.045em] lg:text-xl">
              M.Sc. Computer Science
            </p>
          </div>

          <div className="absolute bottom-[1.4rem] left-0 z-20 flex -rotate-1 items-center gap-2.5 bg-[var(--ink)] px-3 py-2.5 text-[var(--paper)] sm:bottom-[1rem] sm:left-[9%] lg:bottom-[3.5rem] lg:left-[9%] lg:px-4 lg:py-3">
            <span className="size-2 rounded-full bg-[var(--acid)]" />
            <span className="text-[0.62rem] font-extrabold tracking-[0.08em] uppercase lg:text-[0.7rem]">
              Amsterdam, NL
            </span>
          </div>

          <div className="absolute bottom-[2.4rem] right-0 hidden w-[10rem] border-t border-black/35 pt-2 text-[0.6rem] font-bold leading-relaxed text-black/55 uppercase lg:block">
            Reliable by design.
            <br />
            Useful in production.
          </div>
        </div>

        <div className="relative grid gap-8 border-t border-black/25 pt-8 md:grid-cols-12 md:gap-x-10 md:pt-10 lg:pt-12">
          <div
            aria-hidden="true"
            className="absolute -top-[1px] left-0 h-[3px] w-20 bg-[var(--ink)]"
          />
          <div className="md:col-span-7 lg:col-span-8">
            <p className="mb-4 text-[0.64rem] font-black tracking-[0.12em] text-black/50 uppercase">
              Data engineering · Machine learning
            </p>
            <h1
              id="hero-heading"
              className="max-w-[11ch] font-heading text-[2.7275rem] font-black leading-[1.03] tracking-[-0.06em] text-balance md:text-[4.77rem] md:leading-[1.03]"
            >
              Data systems, engineered for{" "}
              <span className="relative inline-block">
                <span
                  aria-hidden="true"
                  className="absolute inset-x-[-0.06em] bottom-[0.03em] -z-10 h-[0.34em] -rotate-1 bg-[var(--acid)]"
                />
                real decisions.
              </span>
            </h1>
          </div>

          <div className="flex flex-col justify-end md:col-span-5 lg:col-span-4">
            <p className="max-w-[34rem] text-[1rem] leading-[1.55] text-black/70 md:text-[1.04rem]">
              I build reliable data platforms and production ML workflows —
              from streaming telemetry to governed enterprise analytics.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row md:flex-col xl:flex-row">
              <a href="#work" className="button-primary group">
                Explore my work
                <ArrowDownRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  strokeWidth={2.4}
                />
              </a>
              <a
                href="/downloads/manav-neema-resume.pdf"
                download
                className="button-secondary group"
              >
                Download resume
                <Download
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-y-1"
                  strokeWidth={2.4}
                />
              </a>
            </div>
            <a
              href="https://www.linkedin.com/in/manav-neema-4696a71aa/"
              target="_blank"
              rel="noreferrer"
              className="group mt-5 inline-flex w-fit items-center gap-1.5 text-[0.68rem] font-extrabold tracking-[0.08em] uppercase underline decoration-black/25 underline-offset-4 transition-colors hover:decoration-black"
            >
              Connect on LinkedIn
              <ArrowUpRight
                aria-hidden="true"
                className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
