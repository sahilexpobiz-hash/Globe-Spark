/*
 * GlobeSpark service-details page
 * Style reminder: Signal Cobalt + graphite editorial service page with a warm paper canvas, citrus proof highlights,
 * grayscale documentary imagery, offset content rails, restrained motion, and evidence-led hierarchy.
 */
import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Phone,
  Play,
  Plus,
  Send,
  Twitter,
  X,
  Youtube,
} from "lucide-react";

const asset = {
  hero: "/manus-storage/globespark-growth_0452b5a1.jpg",
  galleryOne: "/manus-storage/globespark-growth_0452b5a1.jpg",
  galleryTwo: "/manus-storage/globespark-process_aded526a.jpg",
  mark: "/manus-storage/globespark-mark_372af6ee.png",
};

const tickerItems = [
  "Content Marketing",
  "Social Media Marketing",
  "Search Engine Optimization",
  "Brand Strategy",
  "Local SEO",
];

const serviceChecks = [
  "A technical foundation built for crawlability",
  "Content mapped to real search intent",
  "Campaigns that make the brand easier to choose",
  "Reporting that connects activity to demand",
  "Local visibility for high-intent moments",
  "A clear next action after every review",
  "Practical recommendations your team can ship",
  "A senior partner who keeps the signal clear",
];

const expertise = [
  ["01", "Search strategy", "Find the demand already moving through your category and turn it into an operating plan."],
  ["02", "Content creation & design", "Build useful pages, posts, and campaigns that earn attention without sounding like filler."],
  ["03", "Social media management", "Give your team a consistent editorial rhythm across the channels that matter."],
  ["04", "Paid acquisition", "Pair strong creative with disciplined targeting, landing pages, and measurement."],
  ["05", "Influencer campaigns", "Coordinate credible voices and partnerships around a clear business objective."],
  ["06", "Analytics & reporting", "See what is moving, what is stuck, and where the next useful experiment sits."],
];

const benefits = [
  "A sharper message for every stage of the buyer journey.",
  "A search presence that keeps working between campaigns.",
  "A marketing system your team can understand, measure, and improve.",
];

const servicePathways = [
  ["01", "Search visibility", "Technical foundations, intent mapping, local discovery, and content architecture that help the right people find you.", "SEO / Local / Intent"],
  ["02", "Content & messaging", "Sharper pages, useful editorial systems, and campaign language that make the next decision easier.", "Strategy / Copy / Design"],
  ["03", "Social distribution", "A consistent point of view and channel rhythm that gives good ideas somewhere useful to travel.", "Editorial / Social / Community"],
  ["04", "Paid acquisition", "Focused campaigns with clear landing-page roles, disciplined targeting, and a measurement loop behind them.", "Creative / Media / Testing"],
  ["05", "Local growth", "A more complete local presence for high-intent moments across search, maps, and the places customers compare you.", "Maps / Listings / Reviews"],
  ["06", "Measurement", "Reporting that turns activity into a conversation about what moved, what did not, and what to do next.", "Analytics / Reporting / Decisions"],
];

const growthBenefits = [
  ["01", "Sharper direction", "Know which audience, message, and channel deserves attention before the work gets noisy.", "Decision-ready"],
  ["02", "A stronger foundation", "Make the important pages, pathways, and measurement points easier for people and teams to use.", "Built to last"],
  ["03", "Consistent momentum", "Turn isolated campaigns into a repeatable rhythm of useful publishing, distribution, and learning.", "Less stop-start"],
  ["04", "Clearer decisions", "See the link between the work and the next practical move without hiding behind vanity metrics.", "Evidence-led"],
];

const principles = [
  ["01", "Useful over loud", "We prefer a clear point of view, a helpful page, and a measurable next step over more noise."],
  ["02", "Evidence over theatre", "We show the starting point, the work, and the signal that supports the next decision."],
  ["03", "Senior thinking, practical delivery", "The strategy should survive contact with the real team, timeline, and tools doing the work."],
];

const insightTopics = [
  ["Search", "What makes a page easier to find and easier to choose?"],
  ["Content", "How to build an editorial rhythm your team can actually sustain."],
  ["Decisions", "The difference between a marketing report and a useful next move."],
];

const processSteps = [
  { number: "01", title: "Find the signal", summary: "Discovery & audit", detail: "We look at your market, audience, search demand, current presence, and the friction between attention and action." },
  { number: "02", title: "Choose the move", summary: "Strategy planning", detail: "We turn the findings into a focused roadmap with priorities your team can understand, approve, and actually ship." },
  { number: "03", title: "Make it useful", summary: "Execute & optimize", detail: "We improve the pages, messages, campaigns, and measurement loops that make the next decision easier for your audience." },
  { number: "04", title: "Learn and scale", summary: "Report & refine", detail: "We review what moved, what did not, and what the evidence says to test next—without hiding behind vanity metrics." },
];

const faqs = [
  ["How soon should we expect to see movement?", "The first improvements usually come from technical fixes, clearer messaging, and quick-win opportunities. Compounding search visibility takes longer, so we set expectations around the starting point, the work, and the signals we can measure."],
  ["Do you work with an existing marketing team?", "Yes. GlobeSpark can plug into an in-house team, support a founder-led marketing function, or own a focused workstream. We make responsibilities and next actions clear from the start."],
  ["What does the first review include?", "We review your current visibility, audience intent, messaging, and the most practical opportunities in front of you. The output is a focused conversation about priorities—not a generic scorecard."],
  ["Can you support more than SEO?", "Yes. Search is one part of the system. We also support content and messaging, social distribution, paid acquisition, local visibility, and reporting when those pieces help the business move forward."],
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Ticker() {
  return (
    <div className="ticker" aria-label="GlobeSpark service areas">
      <div className="ticker-track">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span className="ticker-item" key={`${item}-${index}`}>
            {item}
            <span className="ticker-spark" aria-hidden="true">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social media links">
      <a href="https://www.facebook.com" aria-label="Facebook"><Facebook size={15} /></a>
      <a href="https://twitter.com" aria-label="Twitter"><Twitter size={15} /></a>
      <a href="https://www.instagram.com" aria-label="Instagram"><Instagram size={15} /></a>
      <a href="https://www.youtube.com" aria-label="YouTube"><Youtube size={15} /></a>
    </div>
  );
import { ModernHero } from "../components/ModernHero";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [processOpen, setProcessOpen] = useState(false);
  const [activeProcess, setActiveProcess] = useState(0);
  const [faqOpen, setFaqOpen] = useState(0);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function navigate(id: string) {
    setMenuOpen(false);
    scrollToId(id);
  }

  return (
    <div className="reference-page">
      <div className="top-strip">
        <div className="top-strip-inner">
          <div className="top-contact"><a href="tel:+918219797895"><Phone size={14} /> +91 82197 97895</a><a href="mailto:globeespark@gmail.com"><Mail size={14} /> globeespark@gmail.com</a><span><MapPin size={14} /> Lagru, Kangra, Himachal Pradesh</span></div>
          <SocialLinks />
        </div>
      </div>

      <header className="reference-nav">
        <a className="reference-brand" href="#top" onClick={() => navigate("top")} aria-label="GlobeSpark home"><span className="brand-mark"><img src={asset.mark} alt="" /></span><span>Globe<span>Spark</span><b>.</b></span></a>
        <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        <nav className={menuOpen ? "reference-menu is-open" : "reference-menu"} aria-label="Primary navigation">
          <button onClick={() => navigate("services")}>Services</button>
          <button onClick={() => navigate("process")}>Our approach</button>
          <button onClick={() => navigate("metrics")}>Results</button>
          <button onClick={() => navigate("case-studies")}>Case Studies</button>
          <button onClick={() => navigate("faq")}>FAQ</button>
          <button className="quote-nav-button" onClick={() => navigate("contact")}>Request a review <ArrowRight size={15} /></button>
        </nav>
      </header>

      <main id="top">
        {/* Modern Hero & Seamless Marquee */}
        <ModernHero />

        <section className="service-detail-section" id="service-details">
          <div className="content-container">
            <div className="feature-image-wrap">
              <img src={asset.galleryTwo} alt="A marketing team reviewing a growth strategy" />
              <button className="image-play" onClick={() => setProcessOpen(true)} aria-label="Open GlobeSpark process overview"><Play size={22} fill="currentColor" /></button>
              {processOpen && <div className="image-process-note"><button onClick={() => setProcessOpen(false)} aria-label="Close process overview"><X size={16} /></button><strong>How we work</strong><span>Strategy, content, distribution, and measurement in one clear loop.</span></div>}
            </div>

            <div className="service-copy-block">
              <div className="copy-heading"><span className="copy-letter">G</span><div><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> Built for useful growth</p><h2>A clearer system for<br />turning attention into action</h2></div></div>
              <p className="lead-copy">GlobeSpark makes ambitious businesses easier to find, easier to trust, and easier to choose. We bring search strategy, useful content, social distribution, and practical measurement into one clear marketing system.</p>
              <p>Every engagement starts with the signal: what your audience is looking for, where your market is moving, and what your current presence is making harder than it needs to be. From there, we build a focused sequence of improvements your team can understand and use.</p>
              <h3 className="subsection-heading">What we help with:</h3>
              <p>Our work flexes around the real bottleneck, whether that is discoverability, conversion, consistency, or reporting. The goal is not more activity; it is a more useful path from attention to action.</p>
              <div className="check-grid">{serviceChecks.map((item) => <div className="check-item" key={item}><span><Check size={12} strokeWidth={3} /></span>{item}</div>)}</div>
            </div>

            <div className="gallery-grid" aria-label="GlobeSpark marketing team imagery"><img src={asset.galleryOne} alt="Team members collaborating around a marketing plan" /><img src={asset.galleryTwo} alt="Marketing team discussing campaign performance" /></div>

            <div className="pathways-block" id="pathways">
              <div className="pathways-heading"><div><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> Choose the useful path</p><h2>Services that connect<br /><span>the signal to the move.</span></h2></div><p className="section-description">Start with the bottleneck, not a pre-packaged bundle. Each pathway can stand alone or connect into a fuller growth system.</p></div>
              <div className="pathways-grid">{servicePathways.map(([number, title, body, tags]) => <article className="pathway-card" key={number}><span className="pathway-number">{number}</span><div><h3>{title}</h3><p>{body}</p><small>{tags}</small></div><button onClick={() => navigate("quote")} aria-label={`Ask about ${title}`}><ArrowRight size={17} /></button></article>)}</div>
            </div>

            <div className="expertise-block" id="expertise">
              <p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> The GlobeSpark toolkit</p>
              <h2>One partner across<br /><span>the full growth loop</span></h2>
              <p className="section-description">From search visibility to campaign distribution, we help teams make the next marketing move clearer, more consistent, and easier to measure.</p>
              <div className="expertise-grid">{expertise.map(([number, title, body]) => <article className="expertise-card" key={number}><span className="number-badge">{number}</span><h3>{title}</h3><p>{body}</p><ArrowRight className="expertise-arrow" size={17} /></article>)}</div>
            </div>

            <div className="benefits-block">
              <div className="benefits-heading"><div><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> The value of a better system</p><h2>Less scattered effort.<br /><span>More useful momentum.</span></h2></div><p className="section-description">The point is not more marketing activity. It is a stronger operating system: clearer priorities, a better foundation, a repeatable rhythm, and decisions grounded in evidence.</p></div>
              <div className="benefit-system">{growthBenefits.map(([number, title, body, label]) => <article className="benefit-card" key={number}><div className="benefit-card-top"><span>{number}</span><small>{label}</small></div><h3>{title}</h3><p>{body}</p><div className="benefit-card-line" /></article>)}</div>
              <div className="benefit-compare"><div><span>Before</span><strong>Disconnected activity</strong><p>Different channels, different priorities, no shared view of what matters.</p></div><div className="benefit-compare-arrow"><ArrowRight size={19} /></div><div><span>After</span><strong>A connected growth loop</strong><p>One clearer message, a useful sequence of work, and a next move your team can explain.</p></div></div>
            </div>
          </div>
        </section>

        <section className="process-section" id="process">
          <div className="content-container">
            <div className="process-heading"><div><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> How we work</p><h2>From first signal<br /><span>to useful momentum.</span></h2></div><p className="section-description">A simple four-step loop keeps the work grounded: understand the opportunity, choose the priority, make the change, then learn from what moves.</p></div>
            <div className="process-layout"><div className="process-list">{processSteps.map((step, index) => <button className={activeProcess === index ? "process-step is-active" : "process-step"} key={step.number} onClick={() => setActiveProcess(index)}><span className="process-number">{step.number}</span><span className="process-step-copy"><strong>{step.title}</strong><small>{step.summary}</small></span><ChevronDown size={17} /></button>)}</div><div className="process-feature"><span className="process-feature-label">Now in focus / {processSteps[activeProcess].number}</span><h3>{processSteps[activeProcess].title}</h3><p>{processSteps[activeProcess].detail}</p><div className="process-feature-line"><span /><span /><span /><span /></div><button className="green-button" onClick={() => navigate("quote")}>Talk through your goals <ArrowRight size={16} /></button></div></div>
          </div>
        </section>

        <section className="proof-section" id="proof">
          <div className="content-container">
            <div className="section-split-heading"><div><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> Proof before polish</p><h2>Proof should make<br /><span>the decision easier.</span></h2></div><div><p className="section-description">When a case study is approved, we show the starting point, the work, the timeline, and the evidence in plain language.</p><button className="green-button" onClick={() => navigate("quote")}>Plan the next proof point <ArrowRight size={16} /></button></div></div>
            <div className="proof-grid">
              <div className="proof-score-card"><span className="proof-label">Case study framework</span><strong>01</strong><h3>clear story</h3><p>Every strong outcome needs a starting point, a defined intervention, and enough context to make the result believable.</p><div className="proof-mini-row"><span>Before</span><span>During</span><span>After</span></div></div>
              <div className="proof-detail-card"><div className="proof-evidence-head"><span>Evidence model</span><span>01 → 02 → 03</span></div><h3>Make the next case study easy to trust.</h3><p>When a client outcome is ready, this is where GlobeSpark can show the before, the intervention, the timeline, and the verified result without leaning on vague superlatives.</p><div className="proof-evidence-grid"><div><strong>01</strong><small>Starting point</small></div><div><strong>02</strong><small>Intervention</small></div><div><strong>03</strong><small>Verified result</small></div></div><div className="proof-author"><span className="proof-avatar">GS</span><span><strong>GlobeSpark</strong><small>Digital marketing studio</small></span></div><div className="proof-controls"><button aria-label="Previous proof item"><ArrowRight size={17} className="flip-arrow" /></button><button aria-label="Next proof item"><ArrowRight size={17} /></button></div></div>
            </div>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="content-container about-grid"><div><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> A point of view</p><h2>Marketing should make<br /><span>the next decision clearer.</span></h2></div><div><p className="about-lead">GlobeSpark is a practical digital-marketing studio for businesses that want better signal, not louder activity.</p><p className="section-description">We bring senior thinking to the messy middle between strategy and execution: the pages that need clarity, the channels that need a rhythm, and the reporting that needs to become useful again.</p><button className="text-button" onClick={() => navigate("quote")}>Meet the studio through a conversation <ArrowRight size={16} /></button></div></div>
          <div className="content-container principles-grid">{principles.map(([number, title, body]) => <article className="principle-card" key={number}><span>{number}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
        </section>

        <section className="faq-section" id="faq">
          <div className="content-container"><div className="faq-heading"><div><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> Good to know</p><h2>Clear answers for<br /><span>the next decision.</span></h2></div><p className="section-description">A good partnership starts with the practical questions answered early. If yours is not here, bring it to the first conversation.</p></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className={faqOpen === index ? "faq-item is-open" : "faq-item"} key={question}><button onClick={() => setFaqOpen(faqOpen === index ? -1 : index)} aria-expanded={faqOpen === index}><span className="faq-index">0{index + 1}</span><strong>{question}</strong><ChevronDown size={19} /></button>{faqOpen === index && <p>{answer}</p>}</div>)}</div></div>
        </section>

        <section className="quote-section" id="quote">
          <div className="content-container">
            <div className="centered-heading"><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> Contact us</p><h2>Tell us what you’re<br /><span>trying to improve.</span></h2><p className="section-description centered-copy">Share the visibility, messaging, or campaign challenge you are working through. We’ll use the context to suggest a focused next step—not a one-size-fits-all package.</p></div>
            <div className="quote-grid">
              {submitted ? <div className="quote-success"><span className="success-mark"><Check size={26} /></span><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> Brief received</p><h3>We’ll get back to you with a clearer next step.</h3><p>Your message has been captured locally for this prototype. Connect the form to your CRM or inbox when you are ready to make it live.</p><button className="green-button" onClick={() => setSubmitted(false)}>Send another message <ArrowRight size={16} /></button></div> : <form className="quote-form" onSubmit={handleSubmit}><div className="form-row"><label>Your name *<input required placeholder="e.g. Priya Mehta" /></label><label>Email *<input required type="email" placeholder="you@company.com" /></label></div><div className="form-row"><label>Phone *<input required type="tel" placeholder="+91" /></label><label>What do you need help with? *<select required defaultValue=""><option value="" disabled>Select a service</option><option>Search visibility</option><option>Content and messaging</option><option>Social media distribution</option><option>Paid acquisition</option><option>Measurement and reporting</option></select></label></div><label>What are you trying to improve? *<textarea required rows={7} placeholder="Tell us what is working, what is stuck, and what a useful next step would look like..." /></label><button className="green-button" type="submit">Request a focused review <Send size={15} /></button></form>}
              <div className="quote-image-wrap"><img src={asset.galleryTwo} alt="A focused marketing team working together" /><div className="image-label">01 / Your next useful move</div></div>
            </div>
            <div className="next-step-strip"><div><span>What happens next</span><strong>A focused reply, not a generic sales sequence.</strong></div><div className="next-step-list"><span>01 / We read the brief</span><span>02 / We clarify the bottleneck</span><span>03 / We suggest a useful next move</span></div></div>
          </div>
        </section>

        <Ticker />

        <section className="insights-section" id="insights"><div className="content-container"><div className="insights-heading"><div><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> Notes for the next move</p><h2>Useful thinking for<br /><span>better decisions.</span></h2></div><p className="section-description">A future home for practical notes on search, content, distribution, and the decisions that connect them.</p></div><div className="insights-grid">{insightTopics.map(([topic, title], index) => <article className="insight-card" key={topic}><span className="insight-index">0{index + 1} / {topic}</span><h3>{title}</h3><button onClick={() => navigate("newsletter")} aria-label={`Subscribe for ${topic} insights`}>Join the useful signal <ArrowRight size={15} /></button></article>)}</div></div></section>

        <section className="newsletter-section" id="newsletter"><div className="content-container"><div className="centered-heading"><p className="eyebrow eyebrow-dark"><span className="eyebrow-mark" /> Our newsletter</p><h2>Useful notes for<br /><span>better digital decisions</span></h2></div>{newsletterSubmitted ? <p className="newsletter-success"><Check size={16} /> You’re on the list for the next useful signal.</p> : <form className="newsletter-form" onSubmit={(event) => { event.preventDefault(); setNewsletterSubmitted(true); }}><label className="newsletter-input"><Mail size={17} /><input required type="email" placeholder="Enter email address" aria-label="Email address" /></label><button className="green-button" type="submit">Subscribe <ArrowRight size={16} /></button></form>}</div></section>
      </main>

      <footer className="reference-footer">
        <div className="content-container">
          <div className="footer-heading"><h2>Let’s make the next move clear.</h2><button className="green-button" onClick={() => navigate("quote")}>Talk it through <ArrowRight size={16} /></button></div>
          <div className="footer-columns"><div className="footer-brand-column"><a className="reference-brand" href="#top" onClick={() => navigate("top")}><span className="brand-mark"><img src={asset.mark} alt="" /></span><span>Globe<span>Spark</span><b>.</b></span></a><p>Practical digital marketing for businesses ready to become easier to find, easier to trust, and easier to choose.</p><SocialLinks /></div><div><h3>Explore</h3><a href="#service-details" onClick={() => navigate("service-details")}>Services</a><a href="#process" onClick={() => navigate("process")}>Our approach</a><a href="#proof" onClick={() => navigate("proof")}>Proof framework</a><a href="#faq" onClick={() => navigate("faq")}>FAQ</a></div><div><h3>Contact</h3><a href="tel:+9182197895">+91 82197 895</a><a href="mailto:globespark@gmail.com">globespark@gmail.com</a><span>Lagru, Kangra,<br />Himachal Pradesh</span></div><div className="footer-newsletter"><h3>Get the useful signal</h3><form onSubmit={(event) => { event.preventDefault(); setNewsletterSubmitted(true); }}><input required type="email" placeholder="Email address" aria-label="Footer email address" /><button aria-label="Subscribe"><Send size={15} /></button></form></div></div>
        </div>
        <div className="legal-bar"><div className="content-container"><span>© 2026 GlobeSpark Digital Agency. All rights reserved.</span><span>User terms & conditions&nbsp; | &nbsp;Privacy policy</span></div></div>
      </footer>
    </div>
  );
}
