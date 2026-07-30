import { Award, GraduationCap } from "lucide-react";

import type { EducationItem } from "@/types/portfolio";

const educationItems = [
  {
    period: "2024—2026",
    institution: "University of Amsterdam × Vrije Universiteit Amsterdam",
    qualification: "M.Sc. Computer Science",
    detail: "Specialisation in Big Data Engineering",
  },
  {
    period: "2017—2021",
    institution: "NMIMS University",
    qualification: "B.Tech Information Technology",
    detail: "Mumbai, India",
  },
  {
    period: "2025",
    institution: "Vrije Universiteit Amsterdam",
    qualification: "Teaching Assistant, Requirements Engineering",
    detail:
      "Mentored undergraduates in elicitation, analysis, and UML modelling.",
  },
  {
    period: "Credential",
    institution: "Issued 2023",
    qualification: "Certified SAFe 5 Practitioner",
    detail:
      "Plus Databricks and Snowflake training. The SAFe credential was issued in 2023.",
  },
] satisfies EducationItem[];

export function EducationSection() {
  return (
    <section
      aria-labelledby="education-heading"
      className="bg-[var(--paper)]"
      id="education"
    >
      <div className="page-shell section-pad">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] xl:gap-16 2xl:gap-24">
          <div className="xl:sticky xl:top-28 xl:self-start" data-reveal>
            <p className="eyebrow mb-6">Education / Practice</p>
            <h2
              className="max-w-[12ch] font-heading text-[clamp(2.85rem,5.6vw,5.5rem)] font-black leading-[0.9] tracking-[-0.055em] text-balance"
              id="education-heading"
            >
              Depth in the theory. Comfortable in the messy middle.
            </h2>
            <p className="mt-8 max-w-[30rem] border-l-2 border-[var(--acid)] pl-5 text-base leading-relaxed text-[color:rgb(10_10_10_/_65%)]">
              Formal computer science, hands-on teaching, and platform training
              meet in a practical approach to complex data work.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {educationItems.map((item, index) => {
              const Icon = index === 3 ? Award : GraduationCap;

              return (
                <article
                  className="flex min-h-[21rem] flex-col rounded-[1.35rem] border border-[color:rgb(10_10_10_/_18%)] bg-[var(--soft-paper)] p-6 sm:p-8"
                  data-reveal
                  key={`${item.period}-${item.qualification}`}
                >
                  <div className="flex items-start justify-between gap-4 border-b border-[color:rgb(10_10_10_/_14%)] pb-5">
                    <p className="text-xs font-black uppercase tracking-[0.1em] text-[color:rgb(10_10_10_/_60%)]">
                      {item.period}
                    </p>
                    <Icon
                      aria-hidden="true"
                      className="size-6 shrink-0 stroke-[1.6]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col pt-8">
                    <p className="text-sm font-bold leading-snug text-[color:rgb(10_10_10_/_65%)]">
                      {item.institution}
                    </p>
                    <h3 className="mt-4 text-[clamp(1.85rem,3vw,3rem)]">
                      {item.qualification}
                    </h3>
                    <p className="mt-auto pt-8 text-sm leading-relaxed text-[color:rgb(10_10_10_/_62%)] sm:text-base">
                      {item.detail}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
