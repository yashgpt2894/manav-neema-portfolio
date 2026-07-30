import {
  BrainCircuit,
  Database,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import type { CapabilityGroup } from "@/types/portfolio";

const capabilityGroups = [
  {
    index: "01",
    title: "Data platforms",
    description:
      "Cloud-ready foundations that make large datasets easier to move, model, and trust.",
    skills: [
      "SQL",
      "PySpark",
      "Pandas",
      "Snowflake",
      "Azure Databricks",
      "AWS S3",
      "EC2",
    ],
  },
  {
    index: "02",
    title: "Streaming & orchestration",
    description:
      "Resilient pipelines with the operational signals teams need before something breaks.",
    skills: [
      "Apache Kafka",
      "Databricks Workflows",
      "Airflow",
      "ETL",
      "Data quality",
      "Monitoring",
    ],
  },
  {
    index: "03",
    title: "Analytics & ML",
    description:
      "Decision layers that connect exploration, semantic models, and production intelligence.",
    skills: [
      "EDA",
      "Dimensional modelling",
      "Self-serve analytics",
      "Tableau",
      "SageMaker",
      "Neptune",
      "Stardog",
      "GraphQL",
      "SPARQL",
    ],
  },
] satisfies CapabilityGroup[];

const capabilityIcons: LucideIcon[] = [Database, Workflow, BrainCircuit];

const marqueeSkills = [
  "SQL",
  "PYSPARK",
  "DATABRICKS",
  "SNOWFLAKE",
  "KAFKA",
  "AIRFLOW",
  "TABLEAU",
  "SAGEMAKER",
  "GRAPHQL",
  "SPARQL",
];

function MarqueeTrack() {
  return (
    <div className="flex w-max [animation:marquee_32s_linear_infinite] [will-change:transform]">
      {[false, true].map((isDuplicate) => (
        <div
          aria-hidden={isDuplicate || undefined}
          className="flex shrink-0 items-center"
          key={isDuplicate ? "duplicate" : "primary"}
        >
          {marqueeSkills.map((skill) => (
            <span
              className="flex shrink-0 items-center gap-5 pr-5 text-[clamp(1rem,1.5vw,1.35rem)] font-black tracking-[-0.025em] text-[var(--paper)]"
              key={`${isDuplicate ? "duplicate" : "primary"}-${skill}`}
            >
              {skill}
              <span
                aria-hidden="true"
                className="size-2.5 rounded-full bg-[var(--acid)]"
              />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function CapabilitiesSection() {
  return (
    <section
      aria-labelledby="capabilities-heading"
      className="overflow-hidden bg-[var(--canvas)]"
      id="capabilities"
    >
      <div className="page-shell section-pad">
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.42fr)] lg:items-end">
          <div data-reveal>
            <p className="eyebrow mb-6">Capabilities / 03</p>
            <h2
              className="display-heading max-w-[12ch]"
              id="capabilities-heading"
            >
              A modern data stack, without the fragile hand-offs.
            </h2>
          </div>
          <p
            className="max-w-[34rem] text-base leading-relaxed text-[color:rgb(10_10_10_/_68%)] lg:pb-2 lg:text-lg"
            data-reveal
          >
            From ingestion to the decision layer, Manav connects the tools,
            quality checks, and operating rhythms that keep data useful.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilityGroups.map((group, index) => {
            const Icon = capabilityIcons[index];

            return (
              <article
                className="group flex min-h-[28rem] flex-col rounded-[1.5rem] border border-[color:rgb(10_10_10_/_18%)] bg-[var(--soft-paper)] p-6 transition-[transform,background-color] duration-500 hover:-translate-y-1 hover:bg-[var(--paper)] sm:p-8"
                data-reveal
                key={group.index}
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="inline-flex min-w-12 items-center justify-center rounded-full bg-[var(--acid)] px-3 py-2 text-xs font-black tracking-[0.08em]">
                    {group.index}
                  </span>
                  <Icon
                    aria-hidden="true"
                    className="size-7 stroke-[1.6]"
                  />
                </div>

                <h3 className="max-w-[10ch] text-[clamp(2rem,3vw,3.2rem)]">
                  {group.title}
                </h3>
                <p className="mt-5 max-w-[34rem] text-sm leading-relaxed text-[color:rgb(10_10_10_/_65%)] sm:text-base">
                  {group.description}
                </p>

                <ul
                  aria-label={`${group.title} technologies`}
                  className="mt-auto flex flex-wrap gap-2 pt-10"
                >
                  {group.skills.map((skill) => (
                    <li
                      className="rounded-full border border-[color:rgb(10_10_10_/_20%)] bg-[color:rgb(248_247_243_/_55%)] px-3 py-1.5 text-xs font-bold leading-none"
                      key={skill}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>

      <div
        aria-label={`Technology focus: ${marqueeSkills.join(", ")}`}
        className="overflow-hidden border-y border-[color:rgb(248_247_243_/_18%)] bg-[var(--ink)] py-5"
      >
        <MarqueeTrack />
      </div>
    </section>
  );
}
