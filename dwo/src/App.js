import React from "react";
import Sidebar from "./components/Sidebar";
import TopPage from "./components/TopPage";
import ContentsPage from "./components/ContentsPage";
import VisionPage from "./components/VisionPage";
import PartA from "./components/PartA";
import PartB from "./components/PartB";
import Integration from "./components/Integration";
import BusinessImpact from "./components/BusinessImpact";
import FeasibilityStudy from "./components/FeasibilityStudy";
import MarketingBudgetTimeline from "./components/MarketingBudgetTimeline";
import KeyStakeholders from "./components/KeyStakeholders";
import ImplementationPlan from "./components/ImplementationPlan";
import Conclusion from "./components/Conclusion";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      {/* TOP LANDING PAGE */}
      <TopPage />

      {/* FLOATING NAVIGATION & BACK TO TOP */}
      <Sidebar />

      {/* CONTENTS OVERVIEW PAGE */}
      <div id="contents">
        <ContentsPage />
      </div>

      {/* MAIN SECTIONS WITH NAVIGABLE IDs */}
      <div id="vision"><VisionPage /></div>
      <div id="part-a"><PartA /></div>
      <div id="part-b"><PartB /></div>
      <div id="integration"><Integration /></div>
      <div id="business-impact"><BusinessImpact /></div>
      <div id="budget-timeline"><MarketingBudgetTimeline /></div>
      <div id="stakeholders"><KeyStakeholders /></div>
      <div id="implementation"><ImplementationPlan /></div>
      <Footer />
    </div>
  );
}

export default App;
