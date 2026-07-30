import { CapabilitiesSection } from "@/components/CapabilitiesSection";
import { ContactSection } from "@/components/ContactSection";
import { EducationSection } from "@/components/EducationSection";
import { HeroSection } from "@/components/HeroSection";
import { ImpactSection } from "@/components/ImpactSection";
import { JourneySection } from "@/components/JourneySection";
import { RevealObserver } from "@/components/RevealObserver";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { siteUrl } from "@/lib/site";

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": `${siteUrl}/#profile-page`,
  url: siteUrl,
  name: "Manav Neema | Data Engineer & ML Systems Builder",
  description:
    "Professional portfolio for Manav Neema, an Amsterdam-based data engineer building reliable data platforms, streaming systems, analytics, and production ML workflows.",
  dateModified: "2026-07-30",
  mainEntity: {
    "@type": "Person",
    "@id": `${siteUrl}/#manav-neema`,
    name: "Manav Neema",
    url: siteUrl,
    image: `${siteUrl}/images/manav-neema.jpg`,
    email: "neemamanav@gmail.com",
    jobTitle: "Data Engineer and ML Systems Builder",
    description:
      "Amsterdam-based data engineer with experience across Bridgestone Mobility Solutions, ZS, and Vrije Universiteit Amsterdam. Focused on Databricks, Snowflake, Kafka, PySpark, analytics engineering, and applied machine learning.",
    sameAs: ["https://www.linkedin.com/in/manav-neema-4696a71aa/"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Amsterdam",
      addressCountry: "NL",
    },
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "University of Amsterdam",
      },
      {
        "@type": "EducationalOrganization",
        name: "Vrije Universiteit Amsterdam",
      },
      {
        "@type": "EducationalOrganization",
        name: "NMIMS University",
      },
    ],
    knowsAbout: [
      "Data engineering",
      "Analytics engineering",
      "Machine learning systems",
      "SQL",
      "Python",
      "PySpark",
      "Apache Kafka",
      "Azure Databricks",
      "Snowflake",
      "AWS",
      "Data modelling",
      "Data quality",
      "Tableau",
      "GraphQL",
      "SPARQL",
      "Responsible AI",
      "GDPR-compliant data anonymisation",
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteNav />
      <main id="top">
        <HeroSection />
        <JourneySection />
        <ImpactSection />
        <CapabilitiesSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <RevealObserver />
    </>
  );
}
