import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "../assets/growlogo.png";
import "./navigationbar.css";

export default function ProductsDropdown() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  const products = [
    {
      name: "Dashboard & AI Command Center",
      features: [
        { icon: "https://www.svgrepo.com/show/507563/chart-bar-alt-square.svg",  text: "KPIs: Orders, Revenue, Products", class: "icon-1" },
        { icon: "https://www.svgrepo.com/show/521818/robot.svg", text: "Predictive graphs & AI insights" , class: "icon-2" },
        { icon: "https://www.svgrepo.com/show/506481/file-export.svg", text: "Export data: CSV / PDF", class: "icon-3" },
      ],
    },

    {
      name: "Task Management",
      features: [
        { icon: "https://www.svgrepo.com/show/332875/board.svg", text: "Kanban, Gantt & Workload views" , class: "icon-4" },
        { icon: "https://www.svgrepo.com/show/510384/automation-4p.svg", text: "AI auto-assign & deadlines" , class: "icon-5" },
        { icon: "https://www.svgrepo.com/show/525594/users-group-two-rounded.svg", text: "Collaboration & activity feed" , class: "icon-6" },
      ],
    },

    {
      name: "Customers & CRM",
      features: [
        { icon: "https://www.svgrepo.com/show/529294/users-group-rounded.svg", text: "Segmentation & profiles" , class: "icon-7" },
        { icon: "https://www.svgrepo.com/show/447866/ai-mi-algorithm.svg", text: "AI churn prediction" , class: "icon-8" },
        { icon: "https://www.svgrepo.com/show/532755/file-chart-column.svg", text: "Reports & quick filters" , class: "icon-9" },
      ],
    },

            {
      name: "SOPs",
      features: [
        { icon: "https://www.svgrepo.com/show/532727/video.svg", text: "Upload & assign SOPs" ,class: "icon-10" },
        { icon: "https://www.svgrepo.com/show/476087/robot.svg", text: "Version control", class: "icon-11" },
        { icon: "https://www.svgrepo.com/show/532105/clock-lines.svg", text: "AI auto-generates SOPs" , class: "icon-12"},
      ],
    },
            {
      name: "Meeting Room",
      features: [
        { icon: "https://www.svgrepo.com/show/533286/phone-call-alt-1.svg", text: "Video calls & recording" ,class: "icon-13" },
        { icon: "https://www.svgrepo.com/show/442015/stack-alt.svg", text: "AI call scripts" ,class: "icon-14"},
        { icon: "https://www.svgrepo.com/show/533352/chart-network.svg", text: "Smart routing & analytics",class: "icon-15" },
      ],
    },
              {
      name: "Document Management",
      features: [
        { icon: "https://www.svgrepo.com/show/532552/search-alt-2.svg", text: "AI search & version control" ,class: "icon-16"},
        { icon: "https://www.svgrepo.com/show/309979/signature.svg", text: "Digital signature workflows" ,class: "icon-17"},
        { icon: "https://www.svgrepo.com/show/532800/file-search-alt.svg", text: "OCR & auto-linking" ,class: "icon-18"},
      ],
    },

   ];

    const solutions = [
    {
      name: "Business Intelligence & Forecasting",
      icon: "https://www.svgrepo.com/show/533348/chart-bar.svg",
      description:
        "Real-time dashboards, predictive graphs, and AI insights to help businesses make data-driven decisions and forecast revenue, sales, and stock needs.",
    },
    {
      name: "Team Productivity & Collaboration",
      icon: "https://www.svgrepo.com/show/310082/tasks-app.svg",
      description:
        "Role-based team management, task boards, and AI-assisted task assignment to boost efficiency, collaboration, and accountability.",
    },
    {
      name: "Commerce & Order Management",
      icon: "https://www.svgrepo.com/show/522664/shopping-cart.svg",
      description:
        "Centralized order tracking, inventory management, and smart shipping/returns workflows to streamline e-commerce operations.",
    },
    {
      name: "Customer Relationship & Engagement",
      icon: "https://www.svgrepo.com/show/521531/bullhorn.svg",
      description:
        "360° customer profiles, AI-driven marketing campaigns, and call center integrations to improve retention, satisfaction, and engagement.",
    },
    {
      name: "Automation & Workflow Optimization",
      icon: "https://www.svgrepo.com/show/375710/sync-alt.svg",
      description:
        "Automated workflows for messaging, ad scaling, stock management, and order fulfillment to save time and reduce manual errors.",
    },
    {
      name: "Knowledge & SOP Management",
      icon: "https://www.svgrepo.com/show/524017/clipboard-list.svg",
      description:
        "Upload, assign, and version-control SOPs, with AI assistance to convert meetings and notes into actionable processes for consistent operations.",
    },
    {
      name: "Document Security & Compliance",
      icon: "https://www.svgrepo.com/show/507851/search-square.svg",
      description:
        "AI-powered document search, OCR, digital signatures, and audit trails to ensure secure, organized, and compliant business records.",
    },
  ];
  
  const resources = [
    {
      name: "University",
      icon: "https://www.svgrepo.com/show/500449/university.svg",
      description: "Learn best practices with our GrowUp University courses and certifications.",
    },
    {
      name: "Webinars",
      icon: "https://www.svgrepo.com/show/533438/presentation-screen.svg",
      description: "Join live sessions and replays from industry experts and GrowUp coaches.",
    },
    {
      name: "Tutorials",
      icon: "https://www.svgrepo.com/show/525166/video-library.svg",
      description: "Step-by-step guides and video walkthroughs to master GrowUp features.",
    },
  ];

  return (
<nav className="growup-navbar">
  {/* LEFT → Logo */}
  <Link to="/" className="growup-navbar-left">
    <img src={logo} alt="GrowUp" className="growup-navbar-logo" />
  </Link>

  {/* CENTER → Navigation */}
  <div className="growup-navbar-center">
    {/* Products */}
    <div className="growup-nav-dropdown">
      <button className="growup-nav-link" onClick={() => setOpen(!open)}>
        Products <ChevronDown size={16} />
      </button>
      {open && (
        <div className="growup-dropdown-menu">
          <div className="growup-products-grid">
            {products.map((product, idx) => (
              <div key={idx} className="growup-product-card">
                <h5>{product.name}</h5>
                <ul>
                  {product.features.map((f, i) => (
                    <li key={i}>
                      <img src={f.icon} alt="" /> {f.text}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

    {/* Solutions */}
    <div className="growup-nav-dropdown">
      <button
        className="growup-nav-link"
        onClick={() => setSolutionsOpen(!solutionsOpen)}
      >
        Solutions <ChevronDown size={16} />
      </button>
      {solutionsOpen && (
        <div className="growup-dropdown-menu2">
          <div className="growup-solutions-grid">
            {solutions.map((sol, idx) => (
              <div key={idx} className="growup-solution-card">
                <h5>
                  <img src={sol.icon} alt="" /> {sol.name}
                </h5>
                <p>{sol.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

    {/* Resources */}
    <div className="growup-nav-dropdown">
      <button
        className="growup-nav-link"
        onClick={() => setResourcesOpen(!resourcesOpen)}
      >
        Resources <ChevronDown size={16} />
      </button>
      {resourcesOpen && (
        <div className="growup-dropdown-menu3">
          <div className="growup-resources-grid">
            {resources.map((res, idx) => (
              <div key={idx} className="growup-resource-card">
                <h5>
                  <img src={res.icon} alt="" /> {res.name}
                </h5>
                <p>{res.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>

    {/* Other links */}
    <NavLink to="/pricing" className="growup-nav-link">
      Pricing
    </NavLink>
  </div>

  {/* RIGHT → Buttons */}
  <div className="growup-navbar-right">
    <button className="growup-btn-login">Login</button>
    <button className="growup-btn-signup">Sign Up</button>
  </div>
</nav>

  );
}
