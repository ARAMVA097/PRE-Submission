export const thesisMeta = {
  title:
    "Trust and Quality of Service-aware efficient resource management strategies for services in cloud computing environments",
  subline:
    "A dimensional thesis integrating Access Control, Resource Allocation stability, and proactive Service Assurance.",
  anchor:
    "Trust and Quality of Service in cloud computing are emergent properties of coordinated governance, stability, and assurance mechanisms.",
};

export const heroKeywords = [
  "Trust",
  "QoS",
  "Access Control",
  "Multitenancy",
  "Discrepancy",
  "SLA Assurance",
  "Cloud Services",
];

export const challengeNodes = [
  {
    id: "loss-control",
    title: "Loss of Control",
    micro:
      "Encrypted and heterogeneous interactions weaken conventional access governance.",
    detail:
      "Cloud services increasingly operate over encrypted and protocol-diverse interactions, limiting semantic visibility and reducing confidence in identity-dependent governance models.",
  },
  {
    id: "allocation-imbalance",
    title: "Allocation Imbalance",
    micro:
      "QoS degradation often comes from hotspots and temporal imbalance.",
    detail:
      "Performance degradation is frequently caused by discrepancy, localized overload, and instability under multitenancy, not by absolute resource scarcity alone.",
  },
  {
    id: "sla-violations",
    title: "SLA Violations",
    micro: "Reactive handling is too late for high-impact trust-breaking events.",
    detail:
      "Threshold-based and reactive SLA handling often misses early warning opportunities and weakens trust between providers and consumers.",
  },
];

export const literatureStreams = [
  {
    id: "stream-a",
    objective: "RO1",
    title: "Access Control and Governance",
    tendency: "DAC, MAC, RBAC, ABAC extensions to cloud",
    weakness:
      "Scalability, semantic dependence, and encrypted/protocol-diverse limitations.",
    gap: "Lack of low-overhead scalable access control under encryption and heterogeneity.",
  },
  {
    id: "stream-b",
    objective: "RO2",
    title: "Resource Allocation and Performance Management",
    tendency: "Scheduling, heuristics, load balancing, and metaheuristics.",
    weakness: "Utilization maximization dominates over stability-oriented reliability.",
    gap: "Lack of discrepancy-aware stability-oriented allocation for long-term QoS preservation.",
  },
  {
    id: "stream-c",
    objective: "RO3",
    title: "SLA Monitoring and Service Assurance",
    tendency: "SLA specification, threshold-based monitoring, and ML prediction.",
    weakness: "Reactive orientation, weak trust integration, and class imbalance issues.",
    gap: "Inadequate predictive and trust-centric SLA assurance.",
  },
];

export const objectiveCards = [
  {
    id: "RO1",
    route: "ro1-access-control",
    title: "RO1 — Access Control Dimension",
    summary:
      "Design a secure, scalable, and fine-grained access control mechanism under privacy and heterogeneity constraints.",
  },
  {
    id: "RO2",
    route: "ro2-resource-allocation",
    title: "RO2 — Resource Allocation Dimension",
    summary:
      "Ensure efficient and reliable sharing by reducing imbalance, contention, and instability in multitenant settings.",
  },
  {
    id: "RO3",
    route: "ro3-service-assurance",
    title: "RO3 — Service Assurance Dimension",
    summary:
      "Maintain trust by tracking, recognizing, and predicting SLA violations with QoS-driven intelligent monitoring.",
  },
];

export const publicationItems = [
  {
    id: "pub-slr",
    objective: "Foundational",
    status: "Published",
    title: "Foundational SLR and Five-Perspective Taxonomy",
    venue: "Scopus Journal (World Scientific)",
    role: "Established the evidence base and structured problem derivation.",
  },
  {
    id: "pub-ro1-1",
    objective: "RO1",
    status: "Published",
    title: "BLAC and DFACC evaluation",
    venue: "IEEE IATMSI 2024",
    role: "Demonstrated protocol-agnostic access governance feasibility.",
  },
  {
    id: "pub-ro1-2",
    objective: "RO1",
    status: "Published",
    title: "Fine-grained cloud access extensions",
    venue: "IEEE INDIACom 2025",
    role: "Validated adaptation and latency tradeoffs for cloud governance.",
  },
  {
    id: "pub-ro1-3",
    objective: "RO1",
    status: "Revision Under Review",
    title: "Scientific Reports extension",
    venue: "Scientific Reports (Nature)",
    role: "Extends BLAC evidence toward broader scientific validation.",
  },
  {
    id: "pub-ro2-1",
    objective: "RO2",
    status: "Presented",
    title: "Discrepancy-aware resource balancing",
    venue: "FIAM-2024",
    role: "Introduced discrepancy minimization as a stability objective.",
  },
  {
    id: "pub-ro2-2",
    objective: "RO2",
    status: "Published",
    title: "LSBGO for multitenant cloud stability",
    venue: "IEEE Access 2025",
    role: "Showed low SLA violations with high utilization and fast recovery.",
  },
  {
    id: "pub-ro2-3",
    objective: "RO2",
    status: "Accepted",
    title: "Routing extension",
    venue: "Life Cycle Reliability & Safety Engineering (Springer)",
    role: "Expanded allocation logic beyond single-layer optimization.",
  },
  {
    id: "pub-ro3-1",
    objective: "RO3",
    status: "Under Review",
    title: "Cross-layer SLA prediction framework",
    venue: "IEEE TDSC",
    role: "Evaluates high-recall predictive assurance with trust framing.",
  },
  {
    id: "pub-ro3-2",
    objective: "RO3",
    status: "Under Review",
    title: "Economic utility-aware SLA analytics",
    venue: "JIKM (World Scientific)",
    role: "Links technical prediction quality with provider profit impact.",
  },
];

export const glossaryTerms = {
  QoS: "Quality of Service: measurable service performance properties such as latency and reliability.",
  SLA: "Service Level Agreement: contractual service-performance commitments between provider and consumer.",
  multitenancy:
    "Multiple tenants share the same cloud infrastructure and can influence one another's performance.",
  discrepancy: "Imbalance or unevenness in workload distribution across resources and time slots.",
  DFACC:
    "Dynamic Finite Automata Cloud Control: state-transition logic used for protocol-agnostic access decisions.",
  SMOTE:
    "Synthetic Minority Oversampling Technique: class imbalance handling method for rare-event detection tasks.",
  "FAR / FRR": "False Acceptance Rate / False Rejection Rate for access-control quality measurement.",
  "stacking ensemble": "A model-combination method where a meta-model learns from multiple base predictors.",
};
