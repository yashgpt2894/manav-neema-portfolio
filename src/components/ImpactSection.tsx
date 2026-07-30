import type { ImpactItem } from "@/types/portfolio";

const impactItems = [
  {
    index: "01",
    context: "Bridgestone Mobility Solutions",
    title: "Fleet intelligence, streamed",
    summary:
      "Kafka and Azure Databricks batch and real-time telemetry pipelines feeding fleet KPI and prediction dashboards.",
    tags: ["Kafka", "Azure Databricks", "PySpark", "ML Ops"],
    tone: "acid",
  },
  {
    index: "02",
    context: "ZS",
    title: "Enterprise data, rebuilt",
    summary:
      "Legacy financial warehouse migration to Databricks and Snowflake, including SQL discovery, transformation logic, orchestration, and CI/CD.",
    tags: ["Snowflake", "Databricks", "SQL", "CI/CD"],
    tone: "violet",
  },
  {
    index: "03",
    context: "UvA × VU research",
    title: "Privacy without blind spots",
    summary:
      "Review of GDPR-compliant anonymisation techniques across differential privacy and synthetic data for ML pipelines.",
    tags: [
      "Responsible AI",
      "GDPR",
      "Differential Privacy",
      "Research",
    ],
    tone: "blue",
  },
] satisfies readonly ImpactItem[];

const cardToneClasses: Record<ImpactItem["tone"], string> = {
  acid:
    "bg-[radial-gradient(circle_at_18%_8%,rgba(248,255,61,0.38),transparent_27%),radial-gradient(circle_at_82%_58%,rgba(248,255,61,0.11),transparent_35%),linear-gradient(145deg,#1a1a15_0%,#080808_72%)]",
  violet:
    "bg-[radial-gradient(circle_at_84%_12%,rgba(165,110,255,0.42),transparent_28%),linear-gradient(145deg,#17121f_0%,#080808_74%)]",
  blue:
    "bg-[radial-gradient(circle_at_16%_90%,rgba(73,153,255,0.38),transparent_31%),linear-gradient(145deg,#101a25_0%,#080808_74%)]",
};

const accentToneClasses: Record<ImpactItem["tone"], string> = {
  acid: "bg-[var(--acid)] text-black",
  violet: "bg-violet-400 text-black",
  blue: "bg-blue-400 text-black",
};

export function ImpactSection() {
  return (
    <section
      id="work"
      aria-labelledby="impact-heading"
      className="section-pad bg-[var(--ink)] text-[var(--paper)]"
    >
      <div className="page-shell">
        <div
          data-reveal
          className="grid gap-8 border-b border-white/20 pb-12 md:pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.4fr)] lg:items-end"
        >
          <div>
            <p className="eyebrow mb-7 text-[var(--acid)]">Selected work</p>
            <h2
              id="impact-heading"
              className="display-heading max-w-[13ch]"
            >
              Selected work, built to hold up in production.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
            Manav bridges platform engineering, analytics, and applied ML to
            turn difficult data systems into dependable products and decisions.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.12fr_0.88fr] lg:grid-rows-2">
          {impactItems.map((item, itemIndex) => (
            <article
              key={item.index}
              data-reveal
              className={`group relative isolate overflow-hidden rounded-[var(--radius)] border border-white/15 p-6 transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:border-white/40 hover:shadow-[0_24px_70px_rgba(0,0,0,0.45)] md:p-8 ${
                cardToneClasses[item.tone]
              } ${
                itemIndex === 0
                  ? "min-h-[34rem] lg:row-span-2 lg:min-h-[46rem]"
                  : "min-h-[24rem]"
              }`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_76%)]"
              />
              <div
                aria-hidden="true"
                className="absolute -right-20 top-20 -z-10 h-52 w-52 rounded-full border border-white/20 md:h-72 md:w-72"
              />
              <div
                aria-hidden="true"
                className="absolute -right-8 top-32 -z-10 h-28 w-28 rotate-45 border border-white/15 md:h-40 md:w-40"
              />

              <div className="flex h-full flex-col">
                <div>
                  <span
                    className={`inline-flex min-h-7 items-center rounded-full px-3 py-1 text-[0.65rem] font-black tracking-[0.11em] ${accentToneClasses[item.tone]}`}
                  >
                    {item.index}
                  </span>
                  <p className="mt-4 text-xs font-bold uppercase leading-relaxed tracking-[0.1em] text-white/55">
                    {item.context}
                  </p>
                </div>

                <div className="mt-auto pt-24">
                  <h3
                    className={
                      itemIndex === 0
                        ? "max-w-[10ch] text-4xl md:text-6xl lg:text-7xl"
                        : "max-w-[13ch] text-3xl md:text-4xl"
                    }
                  >
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
                    {item.summary}
                  </p>
                  <ul
                    aria-label={`${item.title} technologies`}
                    className="mt-7 flex flex-wrap gap-2"
                  >
                    {item.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.08em] text-white/75 backdrop-blur-sm"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
