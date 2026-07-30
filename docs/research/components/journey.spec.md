# JourneySection Specification

## Overview

- Target file: `src/components/JourneySection.tsx`
- Interaction model: scroll-driven reveal

## Structure

- Intro label and display heading
- Short positioning paragraph
- Five editorial milestone rows

## Content

- 2021: `Built the foundation` - joined ZS and delivered enterprise data ingestion, transformation, semantic models, SPARQL, GraphQL, and Tableau-ready systems.
- 2023: `Trusted with the hard problems` - promoted to Associate Consultant and led engineers through production incidents, access control, and scaling bottlenecks.
- 2024: `Moved closer to the frontier` - began the joint UvA/VU M.Sc. in Computer Science, specialising in Big Data Engineering.
- 2025: `Mobility data, in motion` - engineered Kafka and Azure Databricks pipelines and operationalised end-to-end ML workflows for fleet analytics at Bridgestone.
- 2026: `Responsible AI, made practical` - researched GDPR-compliant anonymisation across privacy, fairness, and utility trade-offs.

## Layout

- Desktop milestone grid: year / marker / content
- Hairline separators and one acid marker per row
- Mobile: year and content stack; marker becomes a short horizontal rule

## States

- Each row begins at `opacity: 0; transform: translateY(28px)`.
- `IntersectionObserver` toggles visible state.
- Transition: `700ms cubic-bezier(.2,.7,.2,1)`.

