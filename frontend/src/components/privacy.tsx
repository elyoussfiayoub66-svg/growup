import { useState } from "react";
import "./privacy.css";

// ---- Types ---- //
type SectionKey =
  | "privacy"
  | "security"
  | "cookie"
  | "terms"
  | "developer"
  | "dpa"
  | "subprocessors"
  | "ai"
  | "integration";

type Section = {
  id: SectionKey;
  label: string;
};

type ContentEntry = {
  title: string;
  effective: string;
  body:React.ReactNode;
};

// ---- Sidebar Sections ---- //
const sections: Section[] = [
  { id: "privacy", label: "Privacy Policy" },
  { id: "security", label: "Security Policy" },
  { id: "cookie", label: "Cookie Policy" },
  { id: "terms", label: "Terms of Service" },
  { id: "developer", label: "Developer Terms" },
  { id: "dpa", label: "Data Protection Addendum" },
  { id: "subprocessors", label: "Subprocessors" },
  { id: "ai", label: "AI Additional Terms" },
  { id: "integration", label: "Integration Manager Terms" },
];

// ---- Policy Content ---- //
const content: Record<SectionKey, ContentEntry> = {
  privacy: {
    title: "Privacy Policy",
    effective: "Effective as of: September 19, 2025",
    body: `<p>
  Your privacy is <strong style="color:#6A0DAD;">extremely important</strong> to us. 
  To better protect you, we provide this notice explaining our online information practices 
  and the choices you can make about the way your information is collected and used.
</p>

<p>
  This Privacy Policy relates to information collected by 
  <strong style="color:#6A0DAD;">GrowUp Technologies, Inc.</strong> 
  (referred to in this Privacy Policy as "GrowUp," "we," "us," or "our") 
  through your use of our website, products, and services, including but not limited to our SaaS platform, 
  features, browser extensions, integrations, APIs, mobile and desktop applications, and other interactions with GrowUp 
  (collectively, the “GrowUp Services”).
</p>

<p>
  If you do not agree to our use of your personal data in line with this policy, 
  please do not use the GrowUp Services.
</p>

<h2>Scope of this Privacy Policy</h2>
<p><em>Please note:</em></p>
<ul>
  <li>This Privacy Policy does not govern all information that GrowUp may process. 
      Our commitments to enterprise customers and service providers may be governed by 
      separate agreements such as our Data Protection Addendum (DPA).</li>
  <li>This Privacy Policy is incorporated into and governed by our Terms of Use.</li>
  <li>Capitalized terms used but not defined in this Privacy Policy shall have the same meaning as in our Terms of Use.</li>
  <li>Employee data is governed by separate internal policies.</li>
</ul>

<p>
  We are committed to transparency with our customers, employees, and partners, and to protecting your data privacy.
</p>

<h2>Information We Collect</h2>
<p>
  Depending on how you interact with the GrowUp Services, we collect two types of information: 
  <strong>Personally Identifiable Information (PII)</strong> and 
  <strong>Non-Personally Identifiable Information (Non-PII)</strong>.
</p>

<h3>1. Personally Identifiable Information (PII)</h3>
<p>This is data that identifies you or can be used to contact you directly. Examples include:</p>
<ul>
  <li>Full name, job title, company name, and contact details (email, phone, billing address).</li>
  <li>Login credentials and account preferences.</li>
  <li>Payment and billing information (credit card numbers are processed securely by third-party providers).</li>
  <li>Communications sent to us (emails, support requests, surveys).</li>
  <li>Any content you voluntarily upload or submit through the GrowUp Services.</li>
</ul>

<h3>2. Non-Personally Identifiable Information (Non-PII)</h3>
<p>This type of data does not directly identify you. Examples include:</p>
<ul>
  <li>Browser type, device type, operating system, and language.</li>
  <li>IP address and approximate location data.</li>
  <li>Usage statistics, referring and exit pages, and error logs.</li>
  <li>Aggregated analytics (e.g., feature usage, click patterns, session duration).</li>
</ul>

<h2>Why We Collect Your Data</h2>
<p>We do <strong style="color:#E63946;">not sell</strong> your personal data. 
We collect and process data only in accordance with applicable privacy laws (GDPR, CCPA, etc.).</p>
<ul>
  <li>Provide and improve the GrowUp Services.</li>
  <li>Enable account registration, authentication, and personalization.</li>
  <li>Process payments and subscription billing.</li>
  <li>Communicate with you regarding updates, service changes, and promotions.</li>
  <li>Respond to support requests and technical inquiries.</li>
  <li>Detect and prevent fraudulent or unauthorized use of our platform.</li>
  <li>Comply with applicable laws and contractual obligations.</li>
</ul>

<h2>Information We Collect Automatically</h2>
<ul>
  <li><strong>Usage Data:</strong> Features you use, projects created, files uploaded.</li>
  <li><strong>Device & Connection Data:</strong> Browser, OS, device identifiers, crash reports.</li>
  <li><strong>Cookies & Tracking:</strong> For details, see our <a href="/cookies-policy">Cookies Policy</a>.</li>
  <li><strong>Log Data:</strong> IP addresses, request details, timestamps, and error messages.</li>
</ul>

<h2>Information We Receive from Other Sources</h2>
<ul>
  <li><strong>Other GrowUp Users:</strong> e.g., when a teammate adds you to a workspace.</li>
  <li><strong>Third-Party Integrations:</strong> Data shared when you connect external services.</li>
  <li><strong>Business Partners:</strong> Market research, advertising, or channel partners.</li>
  <li><strong>Public Sources:</strong> Professional directories, business websites.</li>
</ul>

<h2>How We Use Your Data</h2>
<ul>
  <li>Operate, maintain, and secure the GrowUp Services.</li>
  <li>Improve platform features and develop new services.</li>
  <li>Personalize your user experience.</li>
  <li>Provide customer support and resolve disputes.</li>
  <li>Send onboarding, service, and promotional communications (opt-out available).</li>
  <li>Conduct analytics, usage research, and performance testing.</li>
  <li>Enforce our Terms of Use and other agreements.</li>
</ul>

<h2>Sharing & Disclosure of Information</h2>
<p>We only share your data under the following circumstances:</p>
<ul>
  <li><strong>Service Providers:</strong> Hosting, payments, analytics, customer support.</li>
  <li><strong>Business Transactions:</strong> In case of merger, acquisition, or sale.</li>
  <li><strong>Legal Compliance:</strong> If required by law or government authority.</li>
  <li><strong>With Your Consent:</strong> When you authorize integrations or services.</li>
</ul>

<h2>Data Retention</h2>
<p>We retain your data only as long as necessary to provide services, comply with law, and resolve disputes.</p>

<h2>International Data Transfers</h2>
<p>
  Your information may be processed outside your country of residence. 
  We use lawful mechanisms (e.g., Standard Contractual Clauses) to protect your data.
</p>

<h2>Security</h2>
<p>
  We use industry-standard measures to safeguard your data (encryption, firewalls, access controls). 
  However, no system is 100% secure.
</p>

<h2>Your Rights</h2>
<ul>
  <li>Access, update, or correct your data.</li>
  <li>Request deletion ("Right to be Forgotten").</li>
  <li>Object to or restrict processing.</li>
  <li>Port your data to another provider.</li>
  <li>Opt out of marketing communications.</li>
  <li>File a complaint with a supervisory authority.</li>
</ul>
<p>
  You can exercise these rights by contacting us at 
  <a href="mailto:privacy@growup.com">privacy@growup.com</a>.
</p>

<h2>Children’s Privacy</h2>
<p>
  GrowUp Services are not intended for children under 16. 
  We do not knowingly collect data from children. If discovered, we will delete it promptly.
</p>

<h2>California Privacy Rights (CCPA/CPRA)</h2>
<p>If you are a California resident, you may request:</p>
<ul>
  <li>Disclosure of categories and specific pieces of data collected.</li>
  <li>Deletion of your personal data (with exceptions).</li>
  <li>Information about data sharing practices.</li>
</ul>
<p>
  GrowUp does <strong style="color:#E63946;">not sell</strong> personal data. 
  Contact us at <a href="mailto:privacy@growup.com">privacy@growup.com</a>.
</p>

<h2>Changes to This Policy</h2>
<p>
  We may update this Privacy Policy periodically. 
  If material changes occur, we will notify you by email or within the GrowUp Services.
</p>

<h2>Contact Us</h2>
<p>
  <strong>GrowUp Technologies, Inc.</strong><br/>
  Attn: Privacy Officer<br/>
  Email: <a href="mailto:privacy@growup.com">privacy@growup.com</a><br/>
  Website: <a href="https://www.growup.com">www.growup.com</a><br/>
  Address: [Insert Business Address]
</p>
`,
  },
  security: {
    title: "Security Policy",
    effective: "Effective as of: September 19, 2025",
    body: `<p>
    At <strong>GrowUp Technologies, Inc.</strong> (“GrowUp,” “we,” “our,” or “us”), 
    the <strong style="color:#6A0DAD;">security of your data</strong> is one of our highest priorities. 
    We are committed to safeguarding your information using industry best practices, 
    layered security measures, and continuous monitoring. 
    This <strong>Security Policy</strong> describes how we protect the 
    confidentiality, integrity, and availability of the data entrusted to us 
    through the GrowUp Services.
  </p>

  <h2>1. Security Principles</h2>
  <ul>
    <li><strong>Confidentiality</strong> – Your data is accessible only to authorized personnel.</li>
    <li><strong>Integrity</strong> – We protect against unauthorized modifications, corruption, or tampering of your data.</li>
    <li><strong>Availability</strong> – Our infrastructure and services are designed to ensure high uptime and resilience.</li>
    <li><strong>Accountability</strong> – We continuously monitor, audit, and improve our security practices.</li>
  </ul>

  <h2>2. Infrastructure & Hosting</h2>
  <ul>
    <li>GrowUp’s infrastructure is hosted on leading cloud service providers (such as AWS, GCP, or Azure) that are ISO 27001, SOC 2, and GDPR compliant.</li>
    <li>Data is stored in secure data centers with redundant power, network, and cooling systems.</li>
    <li>All production systems are separated from testing/development environments.</li>
  </ul>

  <h2>3. Data Security</h2>
  <ul>
    <li><strong>Encryption in Transit</strong>: All communications between your device and GrowUp are protected using TLS 1.2+ (HTTPS/SSL).</li>
    <li><strong>Encryption at Rest</strong>: All sensitive data (including backups) is encrypted using AES-256.</li>
    <li><strong>Data Segregation</strong>: Customer data is logically separated to prevent cross-access.</li>
    <li><strong>Backups</strong>: Encrypted backups are performed regularly and stored securely.</li>
  </ul>

  <h2>4. Access Control</h2>
  <ul>
    <li><strong>Role-Based Access Control (RBAC)</strong> ensures employees only access data required for their job functions.</li>
    <li><strong>Multi-Factor Authentication (MFA)</strong> is required for administrative access.</li>
    <li><strong>Least Privilege Principle</strong>: Access is granted on a need-to-know basis and reviewed regularly.</li>
    <li>All access is logged, monitored, and audited.</li>
  </ul>

  <h2>5. Application Security</h2>
  <ul>
    <li>We follow secure software development lifecycle (SDLC) practices, including peer code reviews, automated testing, and dependency scanning.</li>
    <li>Applications are regularly tested for vulnerabilities (static and dynamic analysis).</li>
    <li>External penetration tests are conducted by independent security firms.</li>
    <li>We monitor for vulnerabilities in open-source dependencies and apply security patches promptly.</li>
  </ul>

  <h2>6. Network Security</h2>
  <ul>
    <li>Firewalls, intrusion detection/prevention systems (IDS/IPS), and DDoS protection are in place.</li>
    <li>Network traffic is continuously monitored for anomalies.</li>
    <li>Segmented networks isolate sensitive workloads.</li>
  </ul>

  <h2>7. Incident Response</h2>
  <p>
    GrowUp maintains an <strong>Incident Response Plan (IRP)</strong> that outlines detection, response, 
    communication, and remediation steps. Customers will be notified of any data breach affecting 
    their information in accordance with applicable law. 
    Incidents are documented, reviewed, and used to improve our security posture.
  </p>

  <h2>8. Vulnerability Management</h2>
  <ul>
    <li>Regular vulnerability scanning and patching are performed across infrastructure and applications.</li>
    <li>Security updates are applied promptly upon release.</li>
    <li>A responsible disclosure program is in place for security researchers to report vulnerabilities safely.</li>
  </ul>

  <h2>9. Compliance & Standards</h2>
  <p>GrowUp’s security program is aligned with international best practices and frameworks, including:</p>
  <ul>
    <li>ISO/IEC 27001 (Information Security Management)</li>
    <li>SOC 2 Type II (Security, Availability, and Confidentiality)</li>
    <li>GDPR & CCPA compliance for data protection</li>
    <li>OWASP Top 10 application security standards</li>
  </ul>

  <h2>10. Customer Responsibilities</h2>
  <p>
    While GrowUp is committed to securing our platform, customers also share responsibility:
  </p>
  <ul>
    <li>Use strong, unique passwords and enable MFA where available.</li>
    <li>Manage access rights for team members responsibly.</li>
    <li>Report suspicious activity or security concerns to GrowUp immediately.</li>
  </ul>

  <h2>11. Reporting Security Issues</h2>
  <p>
    If you believe you’ve discovered a vulnerability or security issue in the GrowUp Services, please contact us immediately:
  </p>
  <p>
    <a href="mailto:security@growup.com">security@growup.com</a><br />
    GrowUp Technologies, Inc.<br />
    [Insert Business Address]
  </p>
  <p>
    We will acknowledge your report promptly and work with you to resolve the issue.
  </p>

  <h2>12. Updates to This Security Policy</h2>
  <p>
    We may update this Security Policy from time to time to reflect improvements in our security program. 
    Updates will be posted on this page with an updated Effective Date.
  </p>
  <p>
    By using the GrowUp Services, you trust us with your data. 
    We take that responsibility seriously and continuously work to strengthen our security practices.
  </p>`,
  },
  cookie: {
    title: "Cookie Policy",
    effective: "Effective as of: September 19, 2025",
    body: `<p>
    This <strong>Cookie Policy</strong> explains how <strong>GrowUp Technologies, Inc.</strong> (“GrowUp,” “we,” “our,” or “us”) 
    uses cookies and similar technologies to recognize you when you visit our website, applications, or services (“Services”). 
    It explains what these technologies are, why we use them, and your choices regarding their use.
  </p>

  <h2>1. What Are Cookies?</h2>
  <p>
    Cookies are small text files that are stored on your device when you visit a website. 
    They help us make our Services work properly, remember your preferences, and improve your experience.
  </p>
  <p>We also use related technologies such as pixels, web beacons, and local storage.</p>

  <h2>2. Types of Cookies We Use</h2>
  <ul>
    <li>
      <strong>Strictly Necessary Cookies</strong><br />
      Essential for core website functionality (e.g., login, account access, security). 
      These cannot be disabled.
    </li>
    <li>
      <strong>Performance &amp; Analytics Cookies</strong><br />
      Collect anonymous data about how users interact with our site. 
      Help us improve usability, speed, and content (e.g., Google Analytics).
    </li>
    <li>
      <strong>Functionality Cookies</strong><br />
      Remember your preferences (language, region, theme, etc.). 
      Provide enhanced, personalized experiences.
    </li>
    <li>
      <strong>Advertising &amp; Targeting Cookies</strong><br />
      Used by GrowUp and third-party partners to deliver relevant ads. 
      Track browsing activity across websites to show you tailored content.
    </li>
  </ul>

  <h2>3. Why We Use Cookies</h2>
  <p>We use cookies to:</p>
  <ul>
    <li>Authenticate users and maintain sessions.</li>
    <li>Remember preferences and settings.</li>
    <li>Understand how our platform is used.</li>
    <li>Improve performance, security, and reliability.</li>
    <li>Deliver personalized marketing and advertising.</li>
  </ul>

  <h2>4. Third-Party Cookies</h2>
  <p>
    Some cookies are placed by trusted third-party services we integrate with, such as:
  </p>
  <ul>
    <li>Analytics providers (e.g., Google Analytics, Mixpanel).</li>
    <li>Advertising networks (e.g., Google Ads, LinkedIn, Meta).</li>
    <li>Payment processors (to facilitate checkout).</li>
  </ul>
  <p>
    These third parties may collect information about your browsing activity 
    over time and across different websites.
  </p>

  <h2>5. Managing Your Cookie Preferences</h2>
  <p>You have the right to decide whether to accept or reject cookies.</p>
  <ul>
    <li><strong>Cookie Banner/Consent Tool</strong>: On your first visit, you can choose your cookie preferences.</li>
    <li><strong>Browser Settings</strong>: Most browsers allow you to block or delete cookies.</li>
    <li>
      <strong>Opt-Out Tools:</strong><br />
      <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Add-on</a><br />
      <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">Network Advertising Initiative Opt-Out</a>
    </li>
  </ul>
  <p>
    If you disable cookies, some parts of our Services may not function properly.
  </p>

  <h2>6. Updates to This Policy</h2>
  <p>
    We may update this Cookie Policy to reflect changes in technology, legal requirements, 
    or our practices. Any updates will be posted on this page with a revised Effective Date.
  </p>

  <h2>7. Contact Us</h2>
  <p>
    If you have questions about our use of cookies, please contact us:
  </p>
  <p>
    <a href="mailto:privacy@growup.com">privacy@growup.com</a><br />
    <a href="https://www.growup.com" target="_blank" rel="noopener noreferrer">www.growup.com</a><br />
    GrowUp Technologies, Inc.<br />
    [Insert Address]
  </p>`,
  },
  terms: {
    title: "Terms of Service",
    effective: "Effective as of: September 19, 2025",
    body: `<p>
    Welcome to <strong>GrowUp Technologies, Inc.</strong> (“GrowUp,” “we,” “our,” or “us”). 
    These <strong>Terms of Service</strong> (“Terms”) govern your access to and use of our website, 
    applications, products, and services (collectively, the “Services”).
  </p>
  <p>
    By using our Services, you agree to these Terms. 
    If you do not agree, you may not use the Services.
  </p>

  <h2>1. Eligibility</h2>
  <ul>
    <li>You must be at least 18 years old or the age of majority in your jurisdiction to use our Services.</li>
    <li>By using the Services, you represent that you have the legal authority to enter into this agreement.</li>
  </ul>

  <h2>2. Accounts</h2>
  <ul>
    <li>To access certain features, you must create an account.</li>
    <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
    <li>You agree to notify us immediately of any unauthorized use of your account.</li>
  </ul>

  <h2>3. Acceptable Use</h2>
  <p>You agree not to:</p>
  <ul>
    <li>Use the Services for unlawful, harmful, or fraudulent purposes.</li>
    <li>Interfere with or disrupt the Services, servers, or networks.</li>
    <li>Attempt to gain unauthorized access to other accounts, systems, or networks.</li>
    <li>Reverse engineer, decompile, or disassemble any part of the Services.</li>
  </ul>
  <p><em>We reserve the right to suspend or terminate accounts that violate these rules.</em></p>

  <h2>4. Subscription &amp; Payment</h2>
  <ul>
    <li>Some Services require a paid subscription.</li>
    <li>Fees, billing cycles, and payment terms will be disclosed at checkout.</li>
    <li>Payments are processed securely through third-party providers.</li>
    <li>All fees are non-refundable unless otherwise stated.</li>
  </ul>

  <h2>5. Intellectual Property</h2>
  <p>
    All content, trademarks, software, and technology provided through the Services are 
    owned by GrowUp or our licensors.
  </p>
  <ul>
    <li>You are granted a limited, non-exclusive, non-transferable license to use the Services solely for your business or personal purposes.</li>
    <li>You may not copy, modify, distribute, or create derivative works of our content without written permission.</li>
  </ul>

  <h2>6. Third-Party Services</h2>
  <p>
    The Services may integrate with or link to third-party tools (e.g., payment processors, analytics, integrations). 
    We are not responsible for the availability, accuracy, or practices of those third parties.
  </p>

  <h2>7. Termination</h2>
  <ul>
    <li>We may suspend or terminate your account if you violate these Terms or misuse the Services.</li>
    <li>You may cancel your account at any time through your account settings.</li>
    <li>Upon termination, your right to use the Services ends immediately.</li>
  </ul>

  <h2>8. Disclaimers</h2>
  <p>
    The Services are provided <strong>“as is”</strong> and <strong>“as available”</strong> without warranties of any kind.
  </p>
  <ul>
    <li>We do not guarantee uninterrupted, secure, or error-free service.</li>
    <li>Your use of the Services is at your own risk.</li>
  </ul>

  <h2>9. Limitation of Liability</h2>
  <p>To the maximum extent permitted by law:</p>
  <ul>
    <li>GrowUp is not liable for any indirect, incidental, consequential, or punitive damages.</li>
    <li>Our total liability for any claim related to the Services will not exceed the amount you paid us in the last 12 months.</li>
  </ul>

  <h2>10. Indemnification</h2>
  <p>
    You agree to indemnify and hold harmless GrowUp and its officers, employees, and partners from any claims, 
    damages, or expenses arising from your use of the Services or violation of these Terms.
  </p>

  <h2>11. Governing Law &amp; Dispute Resolution</h2>
  <p>
    These Terms are governed by the laws of <em>[Insert Country/State]</em>, without regard to conflict of law rules.
    Any disputes will be resolved in the courts of <em>[Insert Jurisdiction]</em>, unless otherwise required by law.
  </p>

  <h2>12. Changes to These Terms</h2>
  <p>
    We may update these Terms from time to time. 
    If we make material changes, we will notify you (e.g., by email or through the Services). 
    Continued use of the Services after changes means you accept the new Terms.
  </p>

  <h2>13. Contact Us</h2>
  <p>If you have questions about these Terms, please contact us:</p>
  <p>
    <a href="mailto:legal@growup.com">legal@growup.com</a><br />
    <a href="https://www.growup.com" target="_blank" rel="noopener noreferrer">www.growup.com</a><br />
    GrowUp Technologies, Inc.<br />
    [Insert Business Address]
  </p>`,
  },
  developer: {
    title: "Developer Terms",
    effective: "Effective as of: September 19, 2025",
    body: ` <p>
    These <strong>Developer Terms</strong> (“Developer Terms”) govern your access to and use of 
    <strong>GrowUp Technologies, Inc.</strong> (“GrowUp,” “we,” “our,” or “us”) developer resources, 
    including but not limited to APIs, SDKs, documentation, developer tools, and integrations 
    (collectively, the “Developer Platform”).
  </p>
  <p>
    By accessing or using the Developer Platform, you (“Developer,” “you,” or “your”) agree to these 
    Developer Terms, in addition to the GrowUp <strong>Terms of Service</strong> and 
    <strong>Privacy Policy</strong>. If you do not agree, you may not use the Developer Platform.
  </p>

  <h2>1. Eligibility</h2>
  <ul>
    <li>You must have a valid GrowUp account to use the Developer Platform.</li>
    <li>If you are using the Developer Platform on behalf of an organization, you represent that you have authority to bind that organization.</li>
  </ul>

  <h2>2. API Access &amp; Usage</h2>
  <ul>
    <li>GrowUp provides APIs and SDKs to enable integrations with third-party applications.</li>
    <li>You must use our APIs only as documented and in accordance with rate limits and usage guidelines.</li>
  </ul>
  <p>You may not:</p>
  <ul>
    <li>Reverse engineer or circumvent API restrictions.</li>
    <li>Misuse API keys or share them with unauthorized parties.</li>
    <li>Use the APIs in a way that degrades GrowUp Services or harms other users.</li>
  </ul>

  <h2>3. Data &amp; Privacy</h2>
  <ul>
    <li>Developers must handle all data received through the Developer Platform in compliance with applicable laws (including GDPR and CCPA) and the GrowUp Privacy Policy.</li>
    <li>You may not collect, store, or share personal data obtained via the API without proper consent.</li>
    <li>If your integration transmits personal data, you must implement reasonable security measures to protect it.</li>
  </ul>

  <h2>4. Intellectual Property</h2>
  <ul>
    <li>All rights in the Developer Platform belong to GrowUp.</li>
    <li>You are granted a limited, non-exclusive, non-transferable license to use the APIs and SDKs solely to build integrations with GrowUp.</li>
    <li>You retain ownership of your applications, but by publishing them, you grant GrowUp a license to display, promote, and distribute your integration.</li>
  </ul>

  <h2>5. Branding &amp; Attribution</h2>
  <ul>
    <li>If you use GrowUp APIs in your app, you must clearly identify GrowUp as the provider of the underlying service.</li>
    <li>You may not use GrowUp trademarks or branding without prior written approval, except as permitted under our Brand Guidelines.</li>
  </ul>

  <h2>6. Security &amp; Compliance</h2>
  <ul>
    <li>You are responsible for maintaining the security of your app and its interactions with GrowUp.</li>
    <li>Apps must not contain malware, spyware, or security vulnerabilities.</li>
    <li>You must comply with applicable laws, regulations, and industry standards when handling data.</li>
  </ul>

  <h2>7. Prohibited Uses</h2>
  <p>You may not use the Developer Platform to:</p>
  <ul>
    <li>Build competing services to GrowUp.</li>
    <li>Misrepresent your relationship with GrowUp.</li>
    <li>Engage in abusive, fraudulent, or illegal activities.</li>
    <li>Resell or sublicense API access without written permission.</li>
  </ul>

  <h2>8. Monitoring &amp; Enforcement</h2>
  <ul>
    <li>GrowUp reserves the right to monitor API usage for compliance.</li>
    <li>We may suspend or revoke your access to the Developer Platform if you violate these terms.</li>
    <li>We may also impose rate limits or technical restrictions at our discretion.</li>
  </ul>

  <h2>9. Liability &amp; Indemnification</h2>
  <ul>
    <li>Your use of the Developer Platform is at your own risk.</li>
    <li>GrowUp is not responsible for damages caused by your app.</li>
    <li>You agree to indemnify and hold GrowUp harmless from claims related to your integration, including data misuse or intellectual property infringement.</li>
  </ul>

  <h2>10. Termination</h2>
  <ul>
    <li>You may stop using the Developer Platform at any time.</li>
    <li>GrowUp may suspend or terminate your access if you violate these terms or if continued access poses a risk to GrowUp or its users.</li>
  </ul>

  <h2>11. Changes to Developer Platform</h2>
  <ul>
    <li>GrowUp may update, modify, or discontinue APIs or SDKs at any time.</li>
    <li>We will provide reasonable notice for changes that materially affect your integration.</li>
  </ul>

  <h2>12. Governing Law</h2>
  <p>
    These Developer Terms are governed by the laws of <em>[Insert Country/State]</em>, and disputes 
    will be resolved in the courts of <em>[Insert Jurisdiction]</em>, unless otherwise required by law.
  </p>

  <h2>13. Contact Us</h2>
  <p>If you have questions about these Developer Terms, please contact us:</p>
  <p>
    <a href="mailto:developers@growup.com">developers@growup.com</a><br />
    <a href="https://www.growup.com/developers" target="_blank" rel="noopener noreferrer">www.growup.com/developers</a><br />
    GrowUp Technologies, Inc.<br />
    [Insert Address]
  </p>`,
  },
  dpa: {
    title: "Data Protection Addendum",
    effective: "Effective as of: September 19, 2025",
    body: `<p>
    This <strong>Data Protection Addendum</strong> (“DPA”) forms part of the GrowUp 
    <strong>Terms of Service</strong> (“Agreement”) between 
    <strong>GrowUp Technologies, Inc.</strong> (“GrowUp,” “Processor,” “we,” or “us”) and the 
    customer (“Customer,” “Controller,” or “you”) and reflects the parties’ agreement on the 
    processing of personal data in compliance with applicable data protection laws.
  </p>

  <h2>1. Definitions</h2>
  <ul>
    <li><strong>“Personal Data”</strong> means any information relating to an identified or identifiable natural person.</li>
    <li><strong>“Processing”</strong> means any operation performed on Personal Data (e.g., collection, storage, use, transfer).</li>
    <li><strong>“Controller”</strong> means the entity that determines the purposes and means of processing Personal Data.</li>
    <li><strong>“Processor”</strong> means the entity that processes Personal Data on behalf of the Controller.</li>
    <li><strong>“Sub-processor”</strong> means any third party engaged by GrowUp to process Personal Data.</li>
    <li><strong>“Applicable Data Protection Laws”</strong> means all laws relating to the protection of personal data, 
      including the EU General Data Protection Regulation (GDPR), the UK GDPR, and the California Consumer Privacy Act (CCPA).</li>
  </ul>

  <h2>2. Roles of the Parties</h2>
  <ul>
    <li>Customer acts as Controller.</li>
    <li>GrowUp acts as Processor when processing Customer Personal Data.</li>
    <li>Each party will comply with its obligations under Applicable Data Protection Laws.</li>
  </ul>

  <h2>3. Scope of Processing</h2>
  <ul>
    <li><strong>Subject Matter:</strong> Provision of the GrowUp Services.</li>
    <li><strong>Duration:</strong> For as long as the Customer uses the Services.</li>
    <li><strong>Nature &amp; Purpose:</strong> Processing Personal Data to provide, maintain, and improve the Services.</li>
    <li><strong>Types of Data:</strong> Contact details, account information, billing data, user activity, and other Personal Data uploaded by the Customer.</li>
    <li><strong>Data Subjects:</strong> Customer employees, contractors, end-users, and other individuals whose data is provided through the Services.</li>
  </ul>

  <h2>4. Processor Obligations</h2>
  <ul>
    <li>Process Personal Data only on documented instructions from Customer.</li>
    <li>Ensure that personnel authorized to process Personal Data are bound by confidentiality.</li>
    <li>Implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk.</li>
    <li>Assist Customer in responding to data subject rights requests (access, deletion, portability, etc.).</li>
    <li>Notify Customer without undue delay after becoming aware of a Personal Data Breach.</li>
    <li>Make available all information necessary to demonstrate compliance and allow for audits (subject to reasonable confidentiality).</li>
  </ul>

  <h2>5. Sub-processors</h2>
  <ul>
    <li>Customer authorizes GrowUp to engage Sub-processors to deliver the Services.</li>
    <li>GrowUp will maintain an up-to-date list of Sub-processors at 
      <a href="https://www.growup.com/subprocessors" target="_blank" rel="noopener noreferrer">www.growup.com/subprocessors</a>.
    </li>
    <li>GrowUp will ensure Sub-processors are bound by data protection obligations no less protective than this DPA.</li>
    <li>Customer may object to a new Sub-processor on reasonable grounds.</li>
  </ul>

  <h2>6. International Data Transfers</h2>
  <ul>
    <li>GrowUp may transfer and process Personal Data outside the EEA, UK, or Customer’s jurisdiction, provided adequate safeguards are in place.</li>
    <li>Such safeguards may include Standard Contractual Clauses (SCCs) or other mechanisms recognized under Applicable Data Protection Laws.</li>
  </ul>

  <h2>7. Data Subject Rights</h2>
  <p>GrowUp will assist Customer in fulfilling obligations regarding:</p>
  <ul>
    <li>Right of access, rectification, and erasure.</li>
    <li>Right to restriction of processing.</li>
    <li>Right to data portability.</li>
    <li>Right to object to processing.</li>
  </ul>
  <p>Requests will be directed to <a href="mailto:privacy@growup.com">privacy@growup.com</a>.</p>

  <h2>8. Security Measures</h2>
  <p>GrowUp will implement security measures consistent with industry best practices, including:</p>
  <ul>
    <li>Encryption of data in transit and at rest.</li>
    <li>Access controls and authentication measures.</li>
    <li>Regular vulnerability assessments and penetration tests.</li>
    <li>Incident response procedures for handling security breaches.</li>
  </ul>
  <p>Details of GrowUp’s security practices are outlined in our Security Policy.</p>

  <h2>9. Data Breach Notification</h2>
  <ul>
    <li>In the event of a Personal Data Breach, GrowUp will notify Customer without undue delay.</li>
    <li>The notification will include: nature of the breach, categories of affected data, measures taken, and potential consequences.</li>
  </ul>

  <h2>10. Return or Deletion of Data</h2>
  <p>Upon termination of the Agreement, GrowUp will delete or return all Customer Personal Data, unless retention is required by law.</p>

  <h2>11. Liability</h2>
  <p>Liability under this DPA is subject to the limitations of liability set forth in the Agreement.</p>

  <h2>12. Governing Law</h2>
  <p>
    This DPA is governed by the laws of <em>[Insert Country/State]</em>, unless otherwise required by Applicable Data Protection Laws.
  </p>

  <h2>13. Contact Information</h2>
  <p>For any data protection inquiries, please contact:</p>
  <p>
    <a href="mailto:privacy@growup.com">privacy@growup.com</a><br />
    <a href="https://www.growup.com" target="_blank" rel="noopener noreferrer">www.growup.com</a><br />
    GrowUp Technologies, Inc.<br />
    [Insert Address]
  </p>`,
  },
  subprocessors: {
    title: "Subprocessors",
    effective: "Effective as of: September 19, 2025",
    body: `
      <p>
        <strong>GrowUp Technologies, Inc.</strong> (“GrowUp,” “we,” or “our”) uses a select
        group of third-party service providers (“Subprocessors”) to support the delivery
        of our Services. These Subprocessors may process customer data on our behalf
        to help us provide, secure, and improve our platform.
      </p>

      <p>
        This page outlines the categories of Subprocessors we use, why we use them, and
        where they are located.
      </p>

      <h2>1. Infrastructure Subprocessors</h2>
      <p>
        These vendors host and store customer data, provide networking, and deliver
        essential infrastructure.
      </p>
      <table>
        <thead>
          <tr>
            <th>Subprocessor</th>
            <th>Purpose</th>
            <th>Location(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Amazon Web Services (AWS)</td>
            <td>Cloud hosting, storage, networking</td>
            <td>United States, EU</td>
          </tr>
          <tr>
            <td>Google Cloud Platform (GCP)</td>
            <td>Cloud infrastructure, backup services</td>
            <td>United States, EU</td>
          </tr>
          <tr>
            <td>Cloudflare, Inc.</td>
            <td>Content delivery network (CDN), DDoS protection, security</td>
            <td>Global</td>
          </tr>
        </tbody>
      </table>

      <h2>2. Business &amp; Communication Tools</h2>
      <p>
        These vendors help us provide customer support, notifications, and internal
        communication.
      </p>
      <table>
        <thead>
          <tr>
            <th>Subprocessor</th>
            <th>Purpose</th>
            <th>Location(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zendesk, Inc.</td>
            <td>Customer support ticketing</td>
            <td>United States</td>
          </tr>
          <tr>
            <td>Intercom, Inc.</td>
            <td>Customer chat and engagement</td>
            <td>United States, EU</td>
          </tr>
          <tr>
            <td>SendGrid (Twilio, Inc.)</td>
            <td>Transactional and marketing email delivery</td>
            <td>United States</td>
          </tr>
        </tbody>
      </table>

      <h2>3. Payment &amp; Billing Providers</h2>
      <p>These vendors help us securely process payments and manage billing.</p>
      <table>
        <thead>
          <tr>
            <th>Subprocessor</th>
            <th>Purpose</th>
            <th>Location(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stripe, Inc.</td>
            <td>Payment processing</td>
            <td>United States, EU</td>
          </tr>
          <tr>
            <td>PayPal, Inc.</td>
            <td>Payment processing (optional)</td>
            <td>Global</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Analytics &amp; Monitoring</h2>
      <p>
        These vendors help us analyze usage, monitor performance, and improve the
        platform.
      </p>
      <table>
        <thead>
          <tr>
            <th>Subprocessor</th>
            <th>Purpose</th>
            <th>Location(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Google Analytics</td>
            <td>Product and website analytics</td>
            <td>Global</td>
          </tr>
          <tr>
            <td>Mixpanel, Inc.</td>
            <td>User behavior analytics</td>
            <td>United States</td>
          </tr>
          <tr>
            <td>Sentry (Functional Software, Inc.)</td>
            <td>Error tracking &amp; monitoring</td>
            <td>United States</td>
          </tr>
        </tbody>
      </table>

      <h2>5. Optional Integrations</h2>
      <p>
        Depending on your configuration, GrowUp may interact with the following
        third-party integrations:
      </p>
      <table>
        <thead>
          <tr>
            <th>Subprocessor</th>
            <th>Purpose</th>
            <th>Location(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Slack Technologies, Inc.</td>
            <td>Team messaging integrations</td>
            <td>United States</td>
          </tr>
          <tr>
            <td>Microsoft Corporation</td>
            <td>Office 365 / Teams integrations</td>
            <td>Global</td>
          </tr>
          <tr>
            <td>Atlassian, Inc.</td>
            <td>Jira, Confluence integrations</td>
            <td>Global</td>
          </tr>
        </tbody>
      </table>

      <h2>6. Updates to this List</h2>
      <p>
        We may update this Subprocessor list from time to time as we expand or improve
        our Services. Customers will be notified in advance of any new Subprocessors,
        as required by our <strong>Data Protection Addendum (DPA)</strong>.
      </p>
      <p>
        Continued use of the Services after notification constitutes acceptance of the
        new Subprocessor.
      </p>

      <h2>7. Questions</h2>
      <p>If you have any questions about our Subprocessors or data handling practices, please contact us:</p>
      <p>
        <a href="mailto:privacy@growup.com">privacy@growup.com</a>
        <br />
        <a href="https://www.growup.com/legal" target="_blank" rel="noopener noreferrer">
          www.growup.com/legal
        </a>
        <br />
        GrowUp Technologies, Inc.
        <br />
        [Insert Address]
      </p>
    `,
  },
  ai: {
    title: "AI Additional Terms",
    effective: "Effective as of: September 19, 2025",
    body: `<p>These AI Additional Terms (“<strong>AI Terms</strong>”) govern your access to and use of GrowUp’s artificial intelligence-powered features (“<strong>AI Services</strong>”). By enabling or using AI Services, you agree to these AI Terms, which supplement and form part of GrowUp’s Terms of Service.</p>

  <p>If you do not agree, you must not use the AI Services.</p>

  <h2>1. Scope of AI Services</h2>
  <p>AI Services may include automated text generation, summarization, task recommendations, data insights, and other machine learning capabilities.</p>
  <p>AI Services are provided for business productivity purposes only and are not intended for use in high-risk environments (e.g., medical, legal, financial advice, safety-critical operations).</p>

  <h2>2. Customer Responsibilities</h2>
  <p>You agree not to use the AI Services to:</p>
  <ul>
    <li>Generate unlawful, harmful, misleading, or discriminatory content.</li>
    <li>Violate the intellectual property, privacy, or other rights of third parties.</li>
    <li>Develop or train competing AI models.</li>
    <li>Misrepresent AI-generated content as human-created when disclosure is legally required.</li>
  </ul>
  <p>You remain solely responsible for any decisions, actions, or reliance based on AI outputs.</p>

  <h2>3. Data Usage &amp; Training</h2>
  <p>Customer data processed by AI Services is handled in accordance with GrowUp’s <a href="https://www.growup.com/privacy" target="_blank">Privacy Policy</a> and Data Protection Addendum.</p>
  <ul>
    <li>Unless explicitly agreed otherwise, GrowUp does not use your proprietary data to train or improve its AI models.</li>
    <li>GrowUp may use aggregated, anonymized, and de-identified data to enhance and maintain AI functionality.</li>
  </ul>

  <h2>4. Accuracy &amp; Limitations</h2>
  <p>AI outputs are generated based on patterns and statistical models.</p>
  <ul>
    <li>GrowUp does not guarantee the accuracy, completeness, or reliability of AI outputs.</li>
    <li>AI Services may occasionally produce incorrect, biased, or inappropriate results.</li>
    <li>You are responsible for reviewing outputs before relying on them.</li>
  </ul>

  <h2>5. Intellectual Property</h2>
  <p>To the extent permitted by law, you own the rights to AI-generated outputs created from your prompts, subject to third-party IP rights.</p>
  <p>GrowUp retains ownership of all underlying AI models, algorithms, and system-generated enhancements.</p>

  <h2>6. Compliance with Laws</h2>
  <p>You represent and warrant that your use of AI Services will comply with:</p>
  <ul>
    <li>GDPR, CCPA, and other data protection laws</li>
    <li>AI Act (EU) (once effective)</li>
    <li>Export control, anti-discrimination, and consumer protection regulations</li>
  </ul>

  <h2>7. Service Availability</h2>
  <p>AI Services may be provided via third-party AI providers (e.g., OpenAI, Anthropic, Google AI).</p>
  <p>GrowUp does not guarantee uninterrupted or error-free access to AI Services.</p>
  <p>Certain features may be subject to usage limits or additional fees.</p>

  <h2>8. Liability Disclaimer</h2>
  <p>AI Services are provided on an “<strong>AS IS</strong>” and “<strong>AS AVAILABLE</strong>” basis.</p>
  <p>GrowUp disclaims liability for damages arising from reliance on AI outputs.</p>
  <p>To the maximum extent permitted by law, GrowUp’s liability for AI Services is limited in accordance with the Terms of Service.</p>

  <h2>9. Suspension &amp; Termination</h2>
  <p>GrowUp may suspend or terminate your access to AI Services if:</p>
  <ul>
    <li>You breach these AI Terms, or</li>
    <li>Continued use poses a legal, security, or ethical risk.</li>
  </ul>

  <h2>10. Changes to AI Terms</h2>
  <p>GrowUp may update these AI Terms from time to time. Continued use of AI Services after notice of changes constitutes acceptance.</p>

  <h2>11. Contact</h2>
  <p>For questions regarding AI Services or these AI Terms, please contact:</p>
  <ul>
    <li>Email: <a href="mailto:ai-legal@growup.com">ai-legal@growup.com</a></li>
    <li>Website: <a href="https://www.growup.com/legal" target="_blank">www.growup.com/legal</a></li>
    <li>GrowUp Technologies, Inc. – [Insert Address]</li>
  </ul>`,
  },
  integration: {
    title: "Integration Manager Terms",
    effective: "Effective as of: September 19, 2025",
    body: `<p>These Integration Manager Terms (“<strong>Integration Terms</strong>”) govern your use of the Integration Manager feature within GrowUp’s Services. By enabling or managing an integration with a third-party service, you agree to these Integration Terms, which supplement and form part of GrowUp’s Terms of Service.</p>

  <h2>1. Scope of Integrations</h2>
  <p>GrowUp’s Integration Manager enables customers to connect third-party applications and services to the GrowUp platform.</p>
  <p>Integrations may include, but are not limited to: communication tools, project management platforms, CRMs, billing and payment systems, and analytics services.</p>
  <p>GrowUp may add, modify, or discontinue integrations at any time.</p>

  <h2>2. Third-Party Services</h2>
  <p>Integrations may connect you to services provided by third parties (“<strong>Third-Party Services</strong>”).</p>
  <ul>
    <li>Third-Party Services are governed solely by the terms and policies of their respective providers.</li>
    <li>GrowUp does not control, endorse, or assume liability for Third-Party Services, their availability, or their performance.</li>
  </ul>

  <h2>3. Customer Responsibilities</h2>
  <p>You agree to:</p>
  <ul>
    <li>Ensure that your use of integrations complies with both GrowUp’s Terms of Service and the terms of any connected Third-Party Services.</li>
    <li>Obtain all necessary rights, licenses, and permissions before connecting any Third-Party Service.</li>
    <li>Accept full responsibility for the security of any credentials (API keys, tokens, passwords) used to establish integrations.</li>
    <li>Remain responsible for all data you choose to transmit to and from Third-Party Services.</li>
  </ul>

  <h2>4. Data Sharing &amp; Processing</h2>
  <p>By enabling an integration, you instruct GrowUp to share, transmit, and process data between GrowUp and the selected Third-Party Service.</p>
  <p>Data transferred through integrations is subject to GrowUp’s <a href="https://www.growup.com/privacy" target="_blank">Privacy Policy</a> and Data Protection Addendum, as well as the applicable policies of the Third-Party Service.</p>
  <p>GrowUp is not responsible for how Third-Party Services use or secure your data once shared.</p>

  <h2>5. Availability &amp; Support</h2>
  <ul>
    <li>Integrations may depend on the continued availability of APIs and services from Third-Party providers.</li>
    <li>If a Third-Party Service becomes unavailable or discontinues its integration, GrowUp may suspend or remove the integration without liability.</li>
    <li>GrowUp provides integration support for setup and troubleshooting within its control, but does not provide support for the Third-Party Service itself.</li>
  </ul>

  <h2>6. Security</h2>
  <p>GrowUp implements appropriate technical and organizational measures to protect integration data within its control.</p>
  <p>You are responsible for reviewing and accepting the security practices of any Third-Party Services you choose to integrate with GrowUp.</p>

  <h2>7. Fees</h2>
  <p>Some integrations may be provided at no additional cost, while others may require premium subscriptions, usage-based fees, or third-party licensing fees.</p>
  <p>GrowUp reserves the right to charge additional fees for certain integrations with prior notice.</p>

  <h2>8. Suspension &amp; Termination</h2>
  <p>GrowUp may suspend or disable integrations if:</p>
  <ul>
    <li>You violate these Integration Terms,</li>
    <li>Continued use poses a security, compliance, or legal risk, or</li>
    <li>A Third-Party Service materially changes its functionality or terms.</li>
  </ul>

  <h2>9. Limitation of Liability</h2>
  <p>Integrations are provided “<strong>AS IS</strong>” and “<strong>AS AVAILABLE</strong>.”</p>
  <p>GrowUp disclaims all liability for damages or losses arising from Third-Party Services.</p>
  <p>To the fullest extent permitted by law, GrowUp’s liability for issues relating to integrations is limited in accordance with the Terms of Service.</p>

  <h2>10. Changes to Integration Terms</h2>
  <p>GrowUp may update these Integration Terms from time to time. Continued use of the Integration Manager after notice of changes constitutes acceptance.</p>

  <h2>11. Contact</h2>
  <p>For questions regarding integrations or these Integration Terms, please contact:</p>
  <ul>
    <li>Email: <a href="mailto:integrations@growup.com">integrations@growup.com</a></li>
    <li>Website: <a href="https://www.growup.com/legal" target="_blank">www.growup.com/legal</a></li>
    <li>GrowUp Technologies, Inc. – [Insert Address]</li>
  </ul>`,
  },
};

// ---- Components ---- //
function Sidebar({
  active,
  onSelect,
}: {
  active: SectionKey;
  onSelect: (id: SectionKey) => void;
}) {
  return (
    <aside className="policies-sidebar">
      <h3>Policies</h3>
      <ul>
        {sections.map((s) => (
          <li
            key={s.id}
            className={active === s.id ? "active" : ""}
            onClick={() => onSelect(s.id)}
          >
            {s.label}
          </li>
        ))}
      </ul>
    </aside>
  );
}

function PolicyContent({ entry }: { entry: ContentEntry }) {
  return (
    <main className="policies-content">
  <h1>{entry.title}</h1>
  <p className="effective">{entry.effective}</p>

  <div
    className="body-text"
    dangerouslySetInnerHTML={{ __html: entry.body || "" }}
  ></div>
</main>

  );
}

// ---- Page ---- //
export default function PoliciesPage() {
  const [active, setActive] = useState<SectionKey>("privacy");

  return (
    <div className="policies-container">
      <Sidebar active={active} onSelect={setActive} />
      <PolicyContent entry={content[active]} />
    </div>
  );
}
