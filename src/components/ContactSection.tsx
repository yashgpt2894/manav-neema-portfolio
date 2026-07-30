import { ArrowUpRight, Download, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section
      aria-labelledby="contact-heading"
      className="bg-[var(--acid)] text-[var(--ink)]"
      id="contact"
    >
      <div className="page-shell section-pad">
        <div data-reveal>
          <p className="eyebrow mb-7">Contact / Amsterdam</p>
          <h2
            className="max-w-[13ch] text-[clamp(3.35rem,9vw,9.25rem)]"
            id="contact-heading"
          >
            Let&apos;s build the data layer your next decision deserves.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 border-t border-[color:rgb(10_10_10_/_24%)] pt-8 lg:mt-16 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16 lg:pt-10">
          <p
            className="max-w-[39rem] text-base leading-relaxed text-[color:rgb(10_10_10_/_72%)] sm:text-lg"
            data-reveal
          >
            Manav is based in Amsterdam and open to data engineering, analytics
            engineering, and applied ML opportunities.
          </p>

          <div className="flex min-w-0 flex-col items-start gap-7" data-reveal>
            <a
              className="group flex max-w-full items-center gap-3 rounded-full border-2 border-[var(--ink)] bg-[var(--ink)] px-5 py-4 text-[var(--paper)] transition-[transform,background-color,color] duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-[var(--ink)] focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)] sm:gap-4 sm:px-7 sm:py-5"
              href="mailto:neemamanav@gmail.com"
            >
              <Mail
                aria-hidden="true"
                className="size-5 shrink-0 stroke-[2.2] sm:size-6"
              />
              <span className="min-w-0 break-all text-[clamp(1.05rem,2.5vw,1.8rem)] font-black tracking-[-0.035em] sm:break-normal">
                neemamanav@gmail.com
              </span>
              <ArrowUpRight
                aria-hidden="true"
                className="hidden size-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:block"
              />
            </a>

            <div className="flex flex-wrap gap-x-7 gap-y-4">
              <a
                className="group inline-flex items-center gap-2 border-b-2 border-[var(--ink)] pb-1 text-sm font-black uppercase tracking-[0.06em] transition-opacity hover:opacity-55 focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)]"
                href="https://www.linkedin.com/in/manav-neema-4696a71aa/"
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                className="group inline-flex items-center gap-2 border-b-2 border-[var(--ink)] pb-1 text-sm font-black uppercase tracking-[0.06em] transition-opacity hover:opacity-55 focus-visible:outline-[3px] focus-visible:outline-offset-4 focus-visible:outline-[var(--ink)]"
                download
                href="/downloads/manav-neema-resume.pdf"
              >
                Download resume
                <Download
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
