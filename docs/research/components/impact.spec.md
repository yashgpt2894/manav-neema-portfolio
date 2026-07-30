# ImpactSection Specification

## Overview

- Target file: `src/components/ImpactSection.tsx`
- Interaction model: scroll reveal and hover

## Structure

- Black full-width section
- Label, display heading, and short introduction
- Three large case-study cards

## Cards

1. `Fleet intelligence, streamed`
   - Context: Bridgestone Mobility Solutions
   - Summary: Kafka and Azure Databricks batch/real-time telemetry pipelines feeding fleet KPI and prediction dashboards.
   - Tags: Kafka, Azure Databricks, PySpark, ML Ops
2. `Enterprise data, rebuilt`
   - Context: ZS
   - Summary: Legacy financial warehouse migration to Databricks and Snowflake, including SQL discovery, transformation logic, orchestration, and CI/CD.
   - Tags: Snowflake, Databricks, SQL, CI/CD
3. `Privacy without blind spots`
   - Context: UvA × VU research
   - Summary: Review of GDPR-compliant anonymisation techniques across differential privacy and synthetic data for ML pipelines.
   - Tags: Responsible AI, GDPR, Differential Privacy, Research

## Style

- Ink background: `#0a0a0a`
- Paper copy: `#f8f7f3`
- Acid labels and markers: `#f8ff3d`
- Cards use large radius, thin white border, layered technical line patterns, and gradient accents.

## States

- Hover: `translateY(-6px)`, brighter border, accent arrow shift.
- Scroll reveal matches the Journey section.

## Responsive behavior

- Desktop: first card spans two rows; supporting cards stack.
- Mobile: all cards stack with no fixed height.

