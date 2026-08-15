/* GlobeSpark multipage foundation
 * Style reminder: every route keeps the warm paper canvas, graphite contrast, Signal Cobalt actions,
 * citrus proof accents, editorial numbering, and evidence-safe content rules of the homepage.
 */
import { ReactNode, useState } from "react";
import { ArrowRight, Check, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { Link } from "wouter";

const mark = "/manus-storage/globespark-mark_372af6ee.png";
const featureImage = "/manus-storage/globespark-growth_0452b5a1.jpg";
const processImage = "/manus-storage/globespark-process_aded526a.jpg";

const navItems = [
  ["Services", "/services"],
  ["Our approach", "/approach"],
  ["About", "/about"],
  ["Work", "/work"],
  ["Insights", "/insights"],
];

const serviceCards = [
  ["01", "Search visibility", "Technical foundations, intent mapping, local discovery, and content architecture.", "/services/search-visibility"],
  ["02", "Content & messaging", "Sharper pages, useful editorial systems, and campaign language.", "/services/content-and-messaging"],
  ["03", "Social & paid", "Distribution and acquisition built around a clear business objective.", "/services/social-and-paid"],
  ["04", "Measurement", "Reporting that turns activity into a conversation about what to do next.", "/services/measurement"],
];

const detailData: Record<string, { eyebrow: string; title: string; lead: string; bullets: string[]; image: string }> = {
  "search-visibility": { eyebrow: "Service / 01", title: "Make your best demand easier to find.", lead: "Search work should connect technical clarity, audience intent, useful pages, and the local moments where people compare their options.", bullets: ["Technical foundations and crawlability", "Intent mapping for high-value questions", "Local search and listing consistency", "Content architecture that supports decisions"], image: featureImage },
  "content-and-messaging": { eyebrow: "Service / 02", title: "Give your message a sharper job to do.", lead: "Content is more useful when every page, post, and campaign has a clear role in helping the right audience understand what to do next.", bullets: ["Positioning and message hierarchy", "Landing pages and editorial systems", "Campaign copy and creative direction", "Content plans your team can sustain"], image: processImage },
  "social-and-paid": { eyebrow: "Service / 03", title: "Turn good ideas into useful distribution.", lead: "Social and paid work should not be a noisy afterthought. We connect creative, targeting, landing pages, and learning into a focused campaign rhythm.", bullets: ["Channel and audience planning", "Paid campaign structure and testing", "Social editorial rhythm", "Landing-page and creative alignment"], image: featureImage },
  measurement: { eyebrow: "Service / 04", title: "Make reporting useful again.", lead: "A good measurement system gives the team a shared view of what moved, what is stuck, and what deserves attention next.", bullets: ["Analytics and event planning", "Reporting structures for real decisions", "Campaign and channel readouts", "Learning loops for the next experiment"], image: processImage },
};

function Brand() {
  return <Link className="reference-brand" href="/"><span className="brand-mark"><img src={mark} alt="" /></span><span>Globe<span>Spark</span><b>.</b></span></Link>;
}

function PageNav() {
  const [open, setOpen] = useState(false);
  return <header className="multipage-nav"><Brand /><button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={21} /> : <Menu size={21} />}</button><nav className={open ? "multipage-menu is-open" : "multipage-menu"}>{navItems.map(([label, href]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="green-button multipage-cta" href="/contact" onClick={() => setOpen(false)}>Request a review <ArrowRight size={15} /></Link></nav></header>;
}

function PageFooter() {
  return <footer className="multipage-footer"><div className="content-container"><div className="multipage-footer-top"><div><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> Start with the bottleneck</p><h2>Make the next move<br /><span>more useful.</span></h2></div><Link className="green-button" href="/contact">Talk it through <ArrowRight size={16} /></Link></div><div className="multipage-footer-grid"><div><Brand /><p>Practical digital marketing for businesses ready to become easier to find, easier to trust, and easier to choose.</p></div><div><strong>Explore</strong>{navItems.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</div><div><strong>Contact</strong><a href="tel:+9182197895"><Phone size={13} /> +91 82197 895</a><a href="mailto:globespark@gmail.com"><Mail size={13} /> globespark@gmail.com</a><span><MapPin size={13} /> Lagru, Kangra,<br />Himachal Pradesh</span></div><div><strong>Useful signal</strong><p>Short notes on search, content, distribution, and decisions.</p><Link className="text-button" href="/insights">Visit insights <ArrowRight size={15} /></Link></div></div></div><div className="legal-bar"><div className="content-container"><span>© 2026 GlobeSpark Digital Agency. All rights reserved.</span><span>Terms & conditions&nbsp; | &nbsp;Privacy policy</span></div></div></footer>;
}

function PageShell({ children }: { children: React.ReactNode }) {
  return <div className="multipage"><PageNav />{children}<PageFooter /></div>;
}

function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead: string }) {
  return <section className="multipage-hero"><div className="dot-cluster dot-cluster-top" /><div className="content-container multipage-hero-grid"><div><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> {eyebrow}</p><h1>{title}</h1><p>{lead}</p></div><div className="multipage-hero-index">01 <span>/</span> GlobeSpark</div></div></section>;
}

export function ServicesPage() {
  return <PageShell><PageHero eyebrow="Services / The toolkit" title={<>Build the system<br /><em>behind the signal.</em></>} lead="Choose the bottleneck that matters most right now. GlobeSpark connects search, content, distribution, acquisition, and measurement into practical work your team can use." /><main className="multipage-main"><section className="directory-section"><div className="content-container"><div className="directory-intro"><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> Service pathways</p><h2>One clear entry point.<br /><span>More ways to move.</span></h2></div><div className="directory-grid">{serviceCards.map(([number, title, body, href]) => <article className="directory-card" key={href}><span>{number}</span><h3>{title}</h3><p>{body}</p><Link href={href}>Explore pathway <ArrowRight size={15} /></Link></article>)}</div></div></section><section className="multipage-callout"><div className="content-container"><p className="eyebrow"><span className="eyebrow-mark" /> Not sure where to start?</p><h2>Bring the bottleneck.<br />We’ll help name the move.</h2><Link className="green-button" href="/contact">Request a focused review <ArrowRight size={15} /></Link></div></section></main></PageShell>;
}

export function ServiceDetailPage({ slug }: { slug: string }) {
  const data = detailData[slug] ?? detailData["search-visibility"];
  return <PageShell><PageHero eyebrow={data.eyebrow} title={data.title} lead={data.lead} /><main className="multipage-main"><section className="detail-intro-section"><div className="content-container detail-intro-grid"><img src={data.image} alt="GlobeSpark team working on a marketing system" /><div><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> What this pathway covers</p><h2>Useful work with<br /><span>a clear role.</span></h2><p className="section-description">We shape the work around your starting point, your team, and the decision the marketing system needs to support. The output is a focused sequence, not a pile of disconnected deliverables.</p><div className="detail-bullets">{data.bullets.map((bullet) => <div key={bullet}><Check size={14} /> {bullet}</div>)}</div><Link className="green-button" href="/contact">Talk through this pathway <ArrowRight size={15} /></Link></div></div></section><section className="detail-loop"><div className="content-container"><p className="eyebrow"><span className="eyebrow-mark" /> The loop</p><div className="detail-loop-grid"><div><strong>01</strong><span>Understand</span><p>Find the signal and the friction.</p></div><div><strong>02</strong><span>Prioritize</span><p>Choose the move with a clear role.</p></div><div><strong>03</strong><span>Improve</span><p>Make the system more useful.</p></div><div><strong>04</strong><span>Learn</span><p>Use evidence to choose what comes next.</p></div></div></div></section></main></PageShell>;
}

export function ApproachPage() { return <PageShell><PageHero eyebrow="Our approach" title={<>From first signal<br /><em>to useful momentum.</em></>} lead="A simple four-step loop keeps the work grounded: understand the opportunity, choose the priority, make the change, then learn from what moves." /><main className="multipage-main"><section className="approach-section"><div className="content-container approach-grid">{[["01", "Find the signal", "We look at your market, audience, search demand, current presence, and the friction between attention and action."], ["02", "Choose the move", "We turn the findings into a focused roadmap with priorities your team can understand, approve, and ship."], ["03", "Make it useful", "We improve the pages, messages, campaigns, and measurement loops that make the next decision easier."], ["04", "Learn and scale", "We review what moved, what did not, and what the evidence says to test next."]].map(([number, title, body]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{body}</p></article>)}</div></section></main></PageShell>; }

export function AboutPage() { return <PageShell><PageHero eyebrow="About / Point of view" title={<>Useful over loud.<br /><em>Evidence over theatre.</em></>} lead="GlobeSpark is a practical digital-marketing studio for businesses that want better signal, clearer choices, and work that survives contact with the real team." /><main className="multipage-main"><section className="about-page-section"><div className="content-container about-page-grid"><img src={processImage} alt="Marketing team collaborating around a planning table" /><div><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> How we think</p><h2>Strategy should make<br /><span>delivery easier.</span></h2><p className="section-description">We work in the messy middle between the plan and the next shipped improvement. That means clear language, practical sequencing, and reporting people can use in a meeting.</p><Link className="green-button" href="/contact">Start a conversation <ArrowRight size={15} /></Link></div></div></section></main></PageShell>; }

export function WorkPage() { return <PageShell><PageHero eyebrow="Work / Evidence" title={<>Proof makes<br /><em>the decision easier.</em></>} lead="This is a home for approved case studies showing the starting point, the work, the timeline, and the verified result in plain language." /><main className="multipage-main"><section className="work-placeholder"><div className="content-container"><div className="empty-proof"><span className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> Evidence library</span><strong>Real work belongs here.</strong><p>We will publish case studies when the work, context, and outcomes are approved. Until then, GlobeSpark will not fill this page with invented testimonials, ratings, logos, or performance numbers.</p><Link className="green-button" href="/contact">Discuss a future case study <ArrowRight size={15} /></Link></div></div></section></main></PageShell>; }

export function InsightsPage() { return <PageShell><PageHero eyebrow="Insights / Useful notes" title={<>Better questions make<br /><em>better moves.</em></>} lead="Short, practical notes on search, content, distribution, and the decisions that connect them." /><main className="multipage-main"><section className="insights-page-section"><div className="content-container insights-page-grid">{[["Search", "What makes a page easier to find and easier to choose?"], ["Content", "How to build an editorial rhythm your team can actually sustain."], ["Decisions", "The difference between a marketing report and a useful next move."]].map(([topic, title], index) => <article key={topic}><span>0{index + 1} / {topic}</span><h2>{title}</h2><p>Coming soon: a practical note from the GlobeSpark studio.</p><Link className="text-button" href="/contact">Get the useful signal <ArrowRight size={15} /></Link></article>)}</div></section></main></PageShell>; }

export function ContactPage() { return <PageShell><PageHero eyebrow="Contact / Start here" title={<>Bring the bottleneck.<br /><em>We’ll name the move.</em></>} lead="Share the visibility, messaging, distribution, or reporting challenge you are working through. We’ll use the context to suggest a focused next step." /><main className="multipage-main"><section className="contact-page-section"><div className="content-container contact-page-grid"><div><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> What happens next</p><h2>A focused reply,<br /><span>not a generic pitch.</span></h2><div className="contact-next"><span>01 / We read the brief</span><span>02 / We clarify the bottleneck</span><span>03 / We suggest a useful next move</span></div></div><form className="contact-page-form" onSubmit={(event) => event.preventDefault()}><label>Name<input required placeholder="Your name" /></label><label>Email<input required type="email" placeholder="you@company.com" /></label><label>What are you trying to improve?<textarea required rows={6} placeholder="Tell us what is working, what is stuck, and what a useful next step would look like..." /></label><button className="green-button" type="submit">Send enquiry <ArrowRight size={15} /></button></form></div></section></main></PageShell>; }
