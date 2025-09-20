import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import "./pricing.css";
import logo from "../assets/growlogo.png";
import { FiAlertTriangle } from "react-icons/fi"; // import alert icon

// Import images from /assets
import slackImg from "../assets/slack.png";
import asanaImg from "../assets/asana.png";
import zoomImg from "../assets/zoom.jpg";
import googleMeetImg from "../assets/googlemeet.png";
import hubspotImg from "../assets/hubspot.png";
import salesforceImg from "../assets/salesforce.png";
import googleDriveImg from "../assets/googledrive.png";
import zapierImg from "../assets/zapier.png";
import makeImg from "../assets/make.png";
import mailchimpImg from "../assets/mailchimp.jpg";
import klaviyoImg from "../assets/klaviyo.png";
import notionImg from "../assets/notion.png";
import clickupImg from "../assets/clickup.png";

type Plan = {
  id: string;
  title: string;
  tagline: string;
  monthly: number | string;
  yearly: number | string;
  highlights: string[];
  featured?: boolean;
  perUser?: boolean;
};

const PLANS: Plan[] = [
  {
    id: "starter",
    title: "Starter",
    tagline: "For solopreneurs / freelancers starting out.",
    monthly: 10,
    yearly: 7,
    perUser: true,
    highlights: [
      "1 Workspace",
      "Up to 3 Team Members",
      "Core Dashboard (Orders, Revenue, Products)",
      "Basic Task Management (Kanban)",
      "Simple Break-Even Calculator (1 product)",
      "Basic Inventory Tracking (manual updates)",
      "Email Support",
    ],
  },
  {
    id: "growth",
    title: "Growth",
    tagline: "For small teams scaling fast.",
    monthly: 17,
    yearly: 14,
    perUser: true,
    featured: true,
    highlights: [
      "Everything in Starter, plus:",
      "3 Workspaces",
      "Up to 10 Team Members",
      "All Task Views (Kanban, Timeline, Calendar, Workload)",
      "Role-Based Permissions",
      "AI Task Assignment",
      "Customer CRM + Analytics",
      "Cash Flow & Expense Tracker",
      "Low Stock Alerts",
      "Smart Reordering Suggestions",
      "Weekly Report Exports (CSV, PDF)",
      "Priority Support",
      "Shopify, WooCommerce, Stripe, PayPal Integrations",
    ],
  },
  {
    id: "business",
    title: "Business",
    tagline: "For agencies & larger teams.",
    monthly: 25,
    yearly: 22,
    perUser: true,
    highlights: [
      "Everything in Growth, plus:",
      "Unlimited Workspaces",
      "Up to 50 Team Members",
      "OKR & Goal Tracking",
      "Shift Scheduling & Time Tracking",
      "Gamification (leaderboards, badges)",
      "Automated Profit & Loss Reports",
      "Multi-Currency + Tax Reports",
      "Advanced Inventory Management (Batch, Expiry, Bundles)",
      "Supplier Performance Analytics",
      "Integrated Call Center (Dialer, Click-to-Call, Call Recording)",
      "Omnichannel Inbox (WhatsApp, SMS, Email)",
      "AI Call Summaries & Sentiment Analysis",
      "Full Automation Suite",
      "API Access & Webhooks",
      "Dedicated Account Manager",
    ],
  },
  {
    id: "enterprise",
    title: "Enterprise (Customized)",
    tagline: "For large companies that want full control.",
    monthly: "Custom",
    yearly: "Custom",
    perUser: false,
    highlights: [
      "Everything in Business, plus:",
      "Unlimited Users",
      "White-Label Platform",
      "Private Cloud Deployment",
      "SLA Guarantee (99.9% uptime)",
      "Custom Finance & Investor Reports",
      "Commission Tracking",
      "Warehouse Management (multi-location)",
      "Advanced Call Routing & IVR",
      "24/7 Dedicated Success Team",
      "Custom Integrations (ERP, Logistics, DHL, FedEx, Aramex, etc.)",
      "Onboarding & Training Sessions",
    ],
  },
];

// TOOL COSTS
const TOOL_COSTS: Record<string, number> = {
  Slack: 18,
  Asana: 25,
  Zoom: 13.33,
  "Google Meet": 10,
  HubSpot: 110,
  Salesforce: 296,
  "Google Drive": 20,
  Zapier: 17.45,
  Make: 9,
  Mailchimp: 10,
  Klaviyo: 60,
  Notion: 8,
  ClickUp: 12,
};

// TOOL IMAGES
const TOOL_IMAGES: Record<string, string> = {
  Slack: slackImg,
  Asana: asanaImg,
  Zoom: zoomImg,
  "Google Meet": googleMeetImg,
  HubSpot: hubspotImg,
  Salesforce: salesforceImg,
  "Google Drive": googleDriveImg,
  Zapier: zapierImg,
  Make: makeImg,
  Mailchimp: mailchimpImg,
  Klaviyo: klaviyoImg,
  Notion: notionImg,
  ClickUp: clickupImg,
};

const TOOL_LIST = Object.keys(TOOL_COSTS);

// FAQ Component
type FAQItemProps = {
  question: string;
  answer: string;
};

function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        {question}
        <span>{open ? "-" : "+"}</span>
      </button>
      {open && <p className="faq-answer">{answer}</p>}
    </div>
  );
}

export default function PricingPage(): React.ReactElement {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const [teamMembers, setTeamMembers] = useState<number>(5);
  const [selectedTools, setSelectedTools] = useState<string[]>(["Slack", "Zoom"]);

  const keyRanges = [1, 5, 50, 100, 200];

  const toggleTool = (tool: string) => {
    setSelectedTools((prev) =>
      prev.includes(tool) ? prev.filter((t) => t !== tool) : [...prev, tool]
    );
  };

  // Calculate current expenses
  const totalPerUser = selectedTools.reduce((sum, tool) => {
    if (
      ["Slack", "Asana", "Zoom", "Google Meet", "HubSpot", "Salesforce", "Google Drive", "Notion", "ClickUp"].includes(tool)
    ) {
      return sum + TOOL_COSTS[tool] * teamMembers;
    }
    return sum;
  }, 0);

  const totalFlat = selectedTools.reduce((sum, tool) => {
    if (["Zapier", "Make", "Mailchimp", "Klaviyo"].includes(tool)) return sum + TOOL_COSTS[tool];
    return sum;
  }, 0);

  const totalCurrentExpense = totalPerUser + totalFlat;

  // Recommended plan logic based only on teamMembers
  const ENTERPRISE_ESTIMATE = 50; // for example

  let growUpPrice: number;
  let recommendedPlan: string = "";

  if (teamMembers <= 5) {
    growUpPrice = PLANS[0][billing] as number;
    recommendedPlan = PLANS[0].title;
  } else if (teamMembers <= 10) {
    growUpPrice = PLANS[1][billing] as number;
    recommendedPlan = PLANS[1].title;
  } else if (teamMembers <= 50) {
    growUpPrice = PLANS[2][billing] as number;
    recommendedPlan = PLANS[2].title;
  } else {
    growUpPrice = ENTERPRISE_ESTIMATE; // use numeric estimate
    recommendedPlan = PLANS[3].title;
  }

  const savings = totalCurrentExpense - growUpPrice;

  return (
    <div className="pricing-page">
      <header>
        <h1>One Price. Everything You Need to Scale Without Chaos.</h1>
        <p>No hidden fees. No extra tools. Just plug in and grow.</p>
        <div className="billing-toggle">
          <button
            onClick={() => setBilling("monthly")}
            className={billing === "monthly" ? "active" : ""}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={billing === "yearly" ? "active" : ""}
          >
            Yearly
            <span className="badge">Save 30%</span>
          </button>
        </div>
      </header>

      {/* Pricing Plans */}
      <main>
        {PLANS.map((plan) => (
          <section key={plan.id} className="plan-card">
            <h2>{plan.title}</h2>
            <p>{plan.tagline}</p>
            <div className="price">
              {billing === "monthly"
                ? typeof plan.monthly === "number"
                  ? `$${plan.monthly}/month`
                  : plan.monthly
                : typeof plan.yearly === "number"
                ? `$${plan.yearly}/month`
                : plan.yearly}
              {plan.perUser && <span> per user</span>}
            </div>
            <button>
              {plan.id === "enterprise" ? "Contact Sales" : `Start ${plan.title}`}
            </button>
            <div className="divider"></div>

            <ul>
              {plan.highlights.map((h, i) => (
                <li key={i}>
                  <FaCheck /> {h}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>

      {/* Simulator */}
      <section className="simulator">
        <div className="simulator-left">
          <h3>Your apps today</h3>
          <p>Which apps do you use?</p>
          {selectedTools.length < 2 && (
            <div className="warning-msg">
              <FiAlertTriangle className="warning-icon" />
              <span>Please select at least 2 apps for the calculator.</span>
            </div>
          )}
          <div className="tools">
            {TOOL_LIST.map((tool) => (
              <div
                key={tool}
                className={`tool-option ${selectedTools.includes(tool) ? "checked" : ""}`}
                onClick={() => toggleTool(tool)}
              >
                <img src={TOOL_IMAGES[tool]} alt={tool} />
              </div>
            ))}
          </div>

          <label>
            How many people work at your company? {teamMembers}
            <input
              type="range"
              min={1}
              max={200}
              step={1}
              value={teamMembers}
              onChange={(e) => setTeamMembers(Number(e.target.value))}
              list="teamMarks"
            />
          </label>

          <datalist id="teamMarks">
            {keyRanges.map((val) => (
              <option
                key={val}
                value={val}
                label={val === 200 ? "200+" : val.toString()}
              />
            ))}
          </datalist>
        </div>

        <div className="simulator-right">
          <img src={logo} alt="ClickUp" width={80} />
          <h2>Replace {selectedTools.length} app{selectedTools.length > 1 ? "s" : ""}</h2>

          <p>
            It is estimated that GrowUp can replace at least {selectedTools.length} of your existing business apps.
          </p>

          <p className="save-amount">
            Save ${savings.toLocaleString()}/month
          </p>

          <p>
            GrowUp can save your company ${savings.toLocaleString()} per year compared to the non-Enterprise price of your apps.
          </p>

          <button>Start saving with GrowUp today →</button>
          <p className="recommended-plan">Recommended Plan: {recommendedPlan}</p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <FAQItem
          question="Can I switch plans later?"
          answer="Yes! You can upgrade, downgrade, or cancel your plan anytime directly from your dashboard."
        />
        <FAQItem
          question="Do you offer a free trial?"
          answer="Absolutely. You get 14 days of free access to test all features before committing."
        />
        <FAQItem
          question="Is support included in all plans?"
          answer="Yes, email support is included in all plans. Growth and higher tiers also get priority support."
        />
        <FAQItem
          question="What if I need more than 50 team members?"
          answer="That’s where our Enterprise plan comes in. Contact our sales team and we’ll customize a solution for you."
        />
      </section>
    </div>
  );
}
