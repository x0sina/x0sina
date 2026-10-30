import React, { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import { ArrowUpRight, ArrowDown, ArrowRight, Check, Copy, Github, Menu, Moon, Sun, Shield, Link2, Globe2, Code2, ExternalLink } from "lucide-react"
import { Button } from "./components/ui/button"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "./components/ui/dialog"
import { projects, links, type Project } from "./data"
import "./styles.css"

function Mark() {return <svg viewBox="0 0 40 40" fill="none" aria-hidden="true"><path d="m6 10 10 10L6 30m13-20 10 10-10 10M34 8v24" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" /></svg>}

function NetworkArt() {
  const meridians = [-70,-45,-22,0,22,45,70]
  return <div className="network-art" aria-hidden="true">
    <span className="art-coordinate art-top">FIG. 001 / THE OPEN NETWORK</span>
    <svg viewBox="0 0 520 500" className="globe-art">
      <defs><radialGradient id="glow"><stop stopColor="#b4f5cc" stopOpacity=".16"/><stop offset="1" stopColor="#b4f5cc" stopOpacity="0"/></radialGradient><linearGradient id="orbit" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#b4f5cc" stopOpacity=".1"/><stop offset=".55" stopColor="#b4f5cc"/><stop offset="1" stopColor="#b4f5cc" stopOpacity=".1"/></linearGradient></defs>
      <circle cx="260" cy="245" r="220" fill="url(#glow)" />
      <g transform="rotate(-24 260 245)" className="globe-wire">
        <circle cx="260" cy="245" r="155" />
        {meridians.map((v,i)=><ellipse key={i} cx="260" cy="245" rx={Math.max(4,155*Math.abs(Math.sin(v*Math.PI/180)))} ry="155" />)}
        {[-110,-70,0,70,110].map(y=><ellipse key={y} cx="260" cy={245+y} rx={Math.sqrt(155**2-y**2)} ry={Math.max(10,32*(1-Math.abs(y)/180))} />)}
      </g>
      <ellipse className="orbit" cx="260" cy="245" rx="242" ry="71" transform="rotate(-30 260 245)" stroke="url(#orbit)" />
      <ellipse className="orbit orbit-secondary" cx="260" cy="245" rx="226" ry="190" transform="rotate(24 260 245)" />
      <g className="network-points"><circle cx="82" cy="350" r="5"/><circle cx="429" cy="133" r="5"/><circle cx="336" cy="327" r="4"/><circle cx="148" cy="156" r="4"/></g>
      <circle className="network-halo" cx="429" cy="133" r="13" fill="none" />
      <path d="M429 133h36v-28M82 350H46v33" className="art-leader" />
      <text x="442" y="94" className="art-label">OPEN</text><text x="24" y="403" className="art-label">CONNECTED</text>
      <g className="globe-center"><rect x="228" y="213" width="64" height="64" rx="17"/><path d="m243 232 13 13-13 13m21-26 13 13-13 13" /></g>
    </svg>
    <div className="art-bottom"><span className="status-dot"/> BUILT TO CONNECT. DESIGNED TO EMPOWER.</div>
  </div>
}

function ProjectDetail({project}: {project: Project}) {
  return <DialogContent className="project-dialog"><span className="eyebrow">SELECTED WORK / {project.number}</span><DialogTitle className="dialog-title">{project.name}</DialogTitle><DialogDescription className="dialog-description">{project.summary}</DialogDescription>
    {project.image&&<figure className="detail-figure"><img src={project.image} alt="PasarGuard subscription template's English dashboard showing subscription status, connection links, and usage information." width="1920" height="1497" /><figcaption>Screenshot from the project repository; example values are part of the original image.</figcaption></figure>}
    <h3 className="detail-subtitle">Inside the project</h3><ul className="detail-list">{project.details.map(d=><li key={d}><Check size={16}/><span>{d}</span></li>)}</ul>
    <div className="tags">{project.tags.map(t=><span key={t}>{t}</span>)}</div>
    <div className="dialog-actions"><Button asChild><a href={project.url} target="_blank" rel="noreferrer">Explore repository <ArrowUpRight size={17}/></a></Button><a className="text-link" href={project.source} target="_blank" rel="noreferrer">Read documentation <ExternalLink size={14}/></a></div>
  </DialogContent>
}

function App() {
  const [theme,setTheme]=useState(()=>document.documentElement.dataset.theme||"dark")
  const [copied,setCopied]=useState(false)
  const [copyError,setCopyError]=useState(false)
  useEffect(()=>{document.documentElement.dataset.theme=theme;try{localStorage.setItem("sina-theme",theme)}catch{}},[theme])
  useEffect(()=>{if(!copied)return;const id=setTimeout(()=>setCopied(false),2500);return ()=>clearTimeout(id)},[copied])
  async function copyHandle(){try{await navigator.clipboard.writeText("@x0sina");setCopied(true);setCopyError(false)}catch{setCopyError(true)}}
  const navItems=[["Work","#work"],["Approach","#approach"],["About","#about"]]
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="site-shell">
      <header className="header"><a className="brand" href="#" aria-label="Sina home"><Mark/><span>sina<span className="brand-dot">.</span></span><span className="brand-handle">/ x0sina</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(([name,href])=><a href={href} key={name}>{name}</a>)}</nav>
        <div className="header-actions"><Button size="icon" variant="ghost" aria-label={`Switch to ${theme==="dark"?"light":"dark"} theme`} onClick={()=>setTheme(theme==="dark"?"light":"dark")}>{theme==="dark"?<Sun size={18}/>:<Moon size={18}/>}</Button><a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={17}/></a>
          <Dialog><DialogTrigger asChild><Button className="mobile-menu" size="icon" variant="ghost" aria-label="Open navigation"><Menu size={22}/></Button></DialogTrigger><DialogContent className="mobile-navigation"><DialogTitle className="dialog-title">Explore</DialogTitle><DialogDescription className="sr-only">Navigate Sina’s portfolio.</DialogDescription><nav aria-label="Mobile navigation">{[...navItems,["Contact","#contact"]].map(([name,href])=><DialogClose asChild key={name}><a href={href}>{name}<ArrowUpRight/></a></DialogClose>)}</nav></DialogContent></Dialog>
        </div>
      </header>
      <main id="main">
        <section className="hero" aria-labelledby="hero-title"><div className="hero-copy"><div className="eyebrow hero-eyebrow"><span className="status-dot"/> DEVELOPER. MAKER. OPEN-SOURCE MIND.</div><h1 id="hero-title">Interfaces for<br/>a <span className="hero-freer">freer<svg viewBox="0 0 220 16" aria-hidden="true"><path d="M3 11Q110 0 216 7"/></svg></span> internet<span className="mint">.</span></h1><p className="hero-description">I’m Sina, a TypeScript developer turning complex systems into thoughtful digital experiences. Built with purpose. Shared with everyone.</p><div className="hero-actions"><Button asChild><a href="#work">Explore my work <ArrowDown size={17}/></a></Button><Button asChild variant="outline"><a href={links.github} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={15}/></a></Button></div><div className="hero-note"><span>FOCUS</span> TypeScript <i/> Open source <i/> Digital freedom</div></div><NetworkArt/></section>
        <div className="manifesto-strip"><span>THOUGHTFUL INTERFACES</span><span className="strip-asterisk">✳</span><span>OPEN BY DESIGN</span><span className="strip-asterisk">✳</span><span>BUILT FOR PEOPLE</span><span className="strip-asterisk">✳</span><span>LESS FRICTION. MORE FREEDOM.</span></div>
        <section className="work-section" id="work" aria-labelledby="work-title"><div className="section-heading"><div><span className="eyebrow">01 / SELECTED WORK</span><h2 id="work-title">Purpose, put into pixels<span className="mint">.</span></h2></div><span className="section-aside">A few projects from my<br/>open-source corner of the internet.</span></div>
          <Dialog><article className="featured-project"><div className="project-visual"><div className="visual-topline"><span><span className="status-dot"/> INTERFACE IN FOCUS</span><span>01 / 03</span></div><div className="screenshot-frame"><div className="window-bar"><div><i/><i/><i/></div><span>PasarGuard / Subscription</span><Globe2 size={13}/></div><img src="/assets/subscription.png" width="1920" height="1497" alt="PasarGuard subscription dashboard with account status, connection links, and usage statistics." loading="lazy"/></div><span className="visual-caption">ENGLISH UI · ORIGINAL PROJECT SCREENSHOT</span></div><div className="featured-copy"><span className="eyebrow">{projects[0].type}</span><h3>{projects[0].name}</h3><p>{projects[0].summary}</p><div className="tags">{projects[0].tags.map(t=><span key={t}>{t}</span>)}</div><DialogTrigger asChild><Button variant="outline" className="project-trigger">Inside the project <ArrowUpRight size={18}/></Button></DialogTrigger><span className="project-index">01</span></div></article><ProjectDetail project={projects[0]}/></Dialog>
          <div className="secondary-projects">{projects.slice(1).map(project=><Dialog key={project.id}><article className={`secondary-project ${project.id}`}><div className="project-card-top"><span className="eyebrow">PROJECT {project.number}</span><span className="project-symbol">{project.id==="panel"?<Shield size={25} strokeWidth={1.3}/>:<Link2 size={25} strokeWidth={1.3}/>}</span></div><span className="project-type">{project.type}</span><h3>{project.name}</h3><p>{project.summary}</p><div className="secondary-bottom"><div className="tags">{project.tags.map(t=><span key={t}>{t}</span>)}</div><DialogTrigger asChild><Button size="icon" variant="outline" aria-label={`Explore ${project.name}`}><ArrowUpRight size={21}/></Button></DialogTrigger></div></article><ProjectDetail project={project}/></Dialog>)}</div>
          <a className="all-projects text-link" href={links.github+"?tab=repositories"} target="_blank" rel="noreferrer">More experiments live on GitHub <ArrowUpRight size={17}/></a>
        </section>
        <section className="approach-section" id="approach" aria-labelledby="approach-title"><div className="approach-intro"><span className="eyebrow">02 / THE APPROACH</span><h2 id="approach-title">Complex underneath.<br/><span className="muted">Simple in your hands.</span></h2><p>I care about the space between a powerful system and the person using it. That’s where thoughtful design makes the difference.</p><div className="small-mark"><Mark/><span>SIMPLICITY IS A FEATURE.</span></div></div><div className="principles">{[{n:"01",title:"Clarity over clutter",body:"A clear hierarchy. A useful interaction. One less thing to figure out. Every detail should earn its place."},{n:"02",title:"Open is a starting point",body:"Tools that can be explored, adapted, and improved. Sharing the process is part of building something useful."},{n:"03",title:"Freedom through good tools",body:"Privacy, access, and control belong in the conversation from the first line of code."}].map(p=><div className="principle" key={p.n}><span className="eyebrow">{p.n}</span><div><h3>{p.title}</h3><p>{p.body}</p></div><ArrowUpRight size={20}/></div>)}</div></section>
        <section className="about-section" id="about" aria-labelledby="about-title"><div className="about-title"><span className="eyebrow">03 / BEHIND THE CODE</span><h2 id="about-title">Hey, I’m Sina<span className="mint">.</span></h2><span className="about-handle"><Code2 size={16}/> @x0sina</span></div><div className="about-copy"><p>I build at the intersection of <strong>TypeScript, open source, and network freedom.</strong> I’m drawn to tools that give people more control, and interfaces that make powerful things feel simple.</p><p>My toolkit spans the interface and the infrastructure behind it. The common thread: clear thinking, purposeful design, and code that’s worth sharing.</p><div className="toolkit"><span className="eyebrow">IN THE TOOLKIT</span><div className="toolkit-list">{["TypeScript","React","Next.js","Tailwind CSS","shadcn/ui","Vite","Node.js","Docker"].map(t=><span key={t}>{t}</span>)}</div></div></div></section>
        <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="contact-top"><span className="eyebrow">04 / START A CONVERSATION</span><span className="contact-spark" aria-hidden="true">✳</span></div><h2 id="contact-title">Good things start<br/>with a <span>hello.</span></h2><div className="contact-bottom"><p>Have an idea, a question, or something<br/>interesting to build? Let’s connect.</p><a className="contact-cta" href={links.telegram} target="_blank" rel="noreferrer">Say hello on Telegram <span><ArrowUpRight size={27}/></span></a></div><div className="contact-handle"><Button variant="ghost" size="sm" onClick={copyHandle}>{copied?<Check size={15}/>:<Copy size={15}/>} {copied?"Copied @x0sina":"Copy @x0sina"}</Button><span role="status" className="copy-status">{copyError?"You can reach me at @x0sina on Telegram.":copied?"Telegram handle copied to clipboard.":""}</span></div></section>
      </main>
      <footer><a className="footer-brand" href="#" aria-label="Back to top"><Mark/><span>sina.</span></a><span className="footer-note">Thoughtfully built. Open by design.</span><div className="footer-links"><a href={links.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a><a href={links.telegram} target="_blank" rel="noreferrer">Telegram <ArrowUpRight size={13}/></a><a href="#main" aria-label="Back to top"><ArrowRight className="back-top" size={19}/></a></div><span className="copyright">© {new Date().getFullYear()} Sina</span></footer>
    </div>
  </>
}

createRoot(document.getElementById("root")!).render(<React.StrictMode><App/></React.StrictMode>)
