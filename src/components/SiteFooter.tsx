import { ArrowUp, MapPin } from "lucide-react";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--ink)] text-[var(--paper)]">
      <div className="page-shell py-8 sm:py-10">
        <div className="grid gap-8 border-b border-[color:rgb(248_247_243_/_18%)] pb-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <a
            className="w-fit text-xl font-black tracking-[-0.04em] transition-colors hover:text-[var(--acid)]"
            href="#top"
          >
            MANAV NEEMA
          </a>

          <p className="flex items-center gap-2 text-sm font-bold text-[color:rgb(248_247_243_/_70%)] md:justify-self-center">
            <MapPin aria-hidden="true" className="size-4 stroke-[1.8]" />
            Amsterdam
          </p>

          <a
            className="group inline-flex w-fit items-center gap-2 text-sm font-black uppercase tracking-[0.06em] transition-colors hover:text-[var(--acid)] md:justify-self-end"
            href="#top"
          >
            Back to top
            <ArrowUp
              aria-hidden="true"
              className="size-4 transition-transform duration-300 group-hover:-translate-y-1"
            />
          </a>
        </div>

        <div className="flex flex-col gap-3 pt-7 text-xs font-bold uppercase tracking-[0.07em] text-[color:rgb(248_247_243_/_52%)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Manav Neema</p>
          <p>Data engineering · Analytics · ML systems</p>
        </div>
      </div>
    </footer>
  );
}
