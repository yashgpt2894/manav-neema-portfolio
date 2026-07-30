import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import "./globals.css";

const bodyFont = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manav Neema | Data Engineer & ML Systems Builder",
  description:
    "Amsterdam-based data engineer building reliable data platforms, streaming systems, and production ML workflows across Databricks, Snowflake, Kafka, and cloud.",
  keywords: [
    "Manav Neema",
    "Data Engineer Amsterdam",
    "Analytics Engineer",
    "Machine Learning Engineer",
    "Databricks",
    "Snowflake",
    "Apache Kafka",
    "PySpark",
  ],
  authors: [{ name: "Manav Neema" }],
  creator: "Manav Neema",
  openGraph: {
    title: "Manav Neema | Data Engineer & ML Systems Builder",
    description:
      "Reliable data platforms, streaming intelligence, and production ML systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manav Neema | Data Engineer & ML Systems Builder",
    description:
      "Reliable data platforms, streaming intelligence, and production ML systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
