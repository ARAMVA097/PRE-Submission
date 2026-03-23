import { useEffect, useMemo, useRef, useState } from "react";
import "@/App.css";
import { SideNav } from "@/components/thesis/SideNav";
import { BreadcrumbBar } from "@/components/thesis/BreadcrumbBar";
import { HeroSection } from "@/components/thesis/HeroSection";
import { ChallengeTriangle } from "@/components/thesis/ChallengeTriangle";
import { LiteratureGapCards } from "@/components/thesis/LiteratureGapCards";
import { ProblemPipeline } from "@/components/thesis/ProblemPipeline";
import { ObjectiveTriangle } from "@/components/thesis/ObjectiveTriangle";
import { RO1Module } from "@/components/thesis/RO1Module";
import { RO2Module } from "@/components/thesis/RO2Module";
import { RO3Module } from "@/components/thesis/RO3Module";
import { IntegrationCycle } from "@/components/thesis/IntegrationCycle";
import { EvidenceDashboard } from "@/components/thesis/EvidenceDashboard";
import { LimitationsFuturePanel } from "@/components/thesis/LimitationsFuturePanel";
import { FinalContributionPanel } from "@/components/thesis/FinalContributionPanel";

const sectionOrder = [
  { id: "home", label: "Home", stage: "Challenge" },
  { id: "why-this-thesis", label: "Why This Thesis", stage: "Challenge" },
  { id: "literature-gaps", label: "Literature and Gaps", stage: "Gap" },
  { id: "research-objectives", label: "Research Objectives", stage: "Objective" },
  { id: "ro1-access-control", label: "RO1: Access Control", stage: "Method" },
  { id: "ro2-resource-allocation", label: "RO2: Resource Allocation", stage: "Method" },
  { id: "ro3-service-assurance", label: "RO3: Service Assurance", stage: "Outcome" },
  { id: "integration-engine", label: "Integration Engine", stage: "Integration" },
  { id: "evidence-dashboard", label: "Evidence Dashboard", stage: "Outcome" },
  {
    id: "limitations-future-work",
    label: "Limitations and Future Work",
    stage: "Outcome",
  },
  {
    id: "final-thesis-contribution",
    label: "Final Thesis Contribution",
    stage: "Integration",
  },
];

const keywordToSection = {
  Trust: "integration-engine",
  QoS: "integration-engine",
  "Access Control": "ro1-access-control",
  Multitenancy: "ro2-resource-allocation",
  Discrepancy: "ro2-resource-allocation",
  "SLA Assurance": "ro3-service-assurance",
  "Cloud Services": "why-this-thesis",
};

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedObjective, setSelectedObjective] = useState("RO1");
  const sectionRefs = useRef({});

  useEffect(() => {
    document.body.classList.add("dark");
    return () => document.body.classList.remove("dark");
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -50% 0px", threshold: [0.2, 0.45, 0.7] },
    );

    const currentRefs = sectionRefs.current;
    sectionOrder.forEach(({ id }) => {
      if (currentRefs[id]) observer.observe(currentRefs[id]);
    });

    return () => {
      sectionOrder.forEach(({ id }) => {
        if (currentRefs[id]) observer.unobserve(currentRefs[id]);
      });
    };
  }, []);

  const activeIndex = useMemo(
    () => sectionOrder.findIndex((section) => section.id === activeSection),
    [activeSection],
  );

  const progressValue = Math.max(
    0,
    ((activeIndex + 1) / sectionOrder.length) * 100,
  );

  const onNavigate = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onKeywordClick = (keyword) => {
    const target = keywordToSection[keyword];
    if (target) onNavigate(target);
  };

  const currentSectionLabel = sectionOrder.find((s) => s.id === activeSection)?.label ?? "Home";
  const currentStage = sectionOrder.find((s) => s.id === activeSection)?.stage ?? "Challenge";

  return (
    <div className="thesis-app" data-testid="thesis-app-root">
      <SideNav
        sections={sectionOrder}
        activeSection={activeSection}
        onNavigate={onNavigate}
      />

      <div className="content-shell" data-testid="main-content-shell">
        <BreadcrumbBar
          currentSectionLabel={currentSectionLabel}
          currentStage={currentStage}
          progressValue={progressValue}
        />

        <main className="section-canvas" data-testid="section-canvas">
          <section
            id="home"
            ref={(el) => {
              sectionRefs.current.home = el;
            }}
            className="thesis-section"
            data-testid="section-home"
          >
            <HeroSection
              onKeywordClick={onKeywordClick}
              onEnter={() => onNavigate("why-this-thesis")}
            />
          </section>

          <section
            id="why-this-thesis"
            ref={(el) => {
              sectionRefs.current["why-this-thesis"] = el;
            }}
            className="thesis-section"
            data-testid="section-why-this-thesis"
          >
            <ChallengeTriangle />
          </section>

          <section
            id="literature-gaps"
            ref={(el) => {
              sectionRefs.current["literature-gaps"] = el;
            }}
            className="thesis-section"
            data-testid="section-literature-gaps"
          >
            <LiteratureGapCards
              selectedObjective={selectedObjective}
              setSelectedObjective={setSelectedObjective}
            />
          </section>

          <section
            id="research-objectives"
            ref={(el) => {
              sectionRefs.current["research-objectives"] = el;
            }}
            className="thesis-section"
            data-testid="section-research-objectives"
          >
            <ProblemPipeline
              selectedObjective={selectedObjective}
              setSelectedObjective={setSelectedObjective}
              onJump={onNavigate}
            />
            <ObjectiveTriangle
              selectedObjective={selectedObjective}
              setSelectedObjective={setSelectedObjective}
            />
          </section>

          <section
            id="ro1-access-control"
            ref={(el) => {
              sectionRefs.current["ro1-access-control"] = el;
            }}
            className="thesis-section"
            data-testid="section-ro1-access-control"
          >
            <RO1Module
              selectedObjective={selectedObjective}
              setSelectedObjective={setSelectedObjective}
            />
          </section>

          <section
            id="ro2-resource-allocation"
            ref={(el) => {
              sectionRefs.current["ro2-resource-allocation"] = el;
            }}
            className="thesis-section"
            data-testid="section-ro2-resource-allocation"
          >
            <RO2Module
              selectedObjective={selectedObjective}
              setSelectedObjective={setSelectedObjective}
            />
          </section>

          <section
            id="ro3-service-assurance"
            ref={(el) => {
              sectionRefs.current["ro3-service-assurance"] = el;
            }}
            className="thesis-section"
            data-testid="section-ro3-service-assurance"
          >
            <RO3Module
              selectedObjective={selectedObjective}
              setSelectedObjective={setSelectedObjective}
            />
          </section>

          <section
            id="integration-engine"
            ref={(el) => {
              sectionRefs.current["integration-engine"] = el;
            }}
            className="thesis-section"
            data-testid="section-integration-engine"
          >
            <IntegrationCycle selectedObjective={selectedObjective} />
          </section>

          <section
            id="evidence-dashboard"
            ref={(el) => {
              sectionRefs.current["evidence-dashboard"] = el;
            }}
            className="thesis-section"
            data-testid="section-evidence-dashboard"
          >
            <EvidenceDashboard selectedObjective={selectedObjective} />
          </section>

          <section
            id="limitations-future-work"
            ref={(el) => {
              sectionRefs.current["limitations-future-work"] = el;
            }}
            className="thesis-section"
            data-testid="section-limitations-future-work"
          >
            <LimitationsFuturePanel />
          </section>

          <section
            id="final-thesis-contribution"
            ref={(el) => {
              sectionRefs.current["final-thesis-contribution"] = el;
            }}
            className="thesis-section"
            data-testid="section-final-thesis-contribution"
          >
            <FinalContributionPanel />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
