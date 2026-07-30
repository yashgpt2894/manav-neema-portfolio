import type { JourneyItem } from "@/types/portfolio";

const journeyItems = [
  {
    year: "2021",
    title: "Built the foundation",
    description:
      "Joined ZS and delivered enterprise data ingestion, transformation, semantic models, SPARQL, GraphQL, and Tableau-ready systems.",
    meta: "ZS · Pune",
  },
  {
    year: "2023",
    title: "Trusted with the hard problems",
    description:
      "Promoted to Associate Consultant and led engineers through production incidents, access control, and scaling bottlenecks.",
    meta: "ZS · Data Analytics & Engineering",
  },
  {
    year: "2024",
    title: "Moved closer to the frontier",
    description:
      "Began the joint UvA/VU M.Sc. in Computer Science, specialising in Big Data Engineering.",
    meta: "Amsterdam · MSc",
  },
  {
    year: "2025",
    title: "Mobility data, in motion",
    description:
      "Engineered Kafka and Azure Databricks pipelines and operationalised end-to-end ML workflows for fleet analytics at Bridgestone.",
    meta: "Bridgestone Mobility Solutions",
  },
  {
    year: "2026",
    title: "Responsible AI, made practical",
    description:
      "Researched GDPR-compliant anonymisation across privacy, fairness, and utility trade-offs.",
    meta: "UvA × VU research",
  },
] satisfies readonly JourneyItem[];

export function JourneySection() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="section-pad bg-[var(--soft-paper)]"
    >
      <div className="page-shell">
        <div
          id="about"
          data-reveal
          className="scroll-mt-24 border-b border-black/20 pb-12 md:pb-16"
        >
          <p className="eyebrow mb-7 text-black/60">The journey</p>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] lg:items-end">
            <h2 id="journey-heading" className="display-heading">
              From data foundations to responsible AI.
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-black/65 md:text-lg">
              A path through enterprise platforms, mobility analytics, and
              research—always moving complex data closer to dependable,
              real-world use.
            </p>
          </div>
        </div>

        <ol aria-label="Career milestones">
          {journeyItems.map((item) => (
            <li
              key={item.year}
              data-reveal
              className="grid gap-x-6 gap-y-4 border-b border-black/20 py-8 md:grid-cols-[6rem_1.5rem_minmax(0,1fr)] md:py-10 lg:grid-cols-[7rem_2rem_minmax(0,1fr)_minmax(12rem,0.34fr)] lg:gap-x-8"
            >
              <p className="font-heading text-2xl leading-none tracking-[-0.04em] md:text-3xl">
                {item.year}
              </p>

              <div
                aria-hidden="true"
                className="hidden h-full min-h-20 justify-center md:flex"
              >
                <span className="mt-1.5 h-3 w-3 rotate-45 bg-[var(--acid)] ring-1 ring-black/20" />
              </div>

              <div>
                <h3 className="max-w-2xl text-2xl md:text-3xl lg:text-4xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-black/65 md:text-base">
                  {item.description}
                </p>
              </div>

              <p className="self-start text-xs font-bold uppercase leading-relaxed tracking-[0.09em] text-black/50 md:col-start-3 lg:col-start-4 lg:text-right">
                {item.meta}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
