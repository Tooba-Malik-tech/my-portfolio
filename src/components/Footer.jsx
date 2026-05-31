import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const navLinks = [{l:"Home",h:"#home"},{l:"About",h:"#about"},{l:"Projects",h:"#projects"},{l:"Services",h:"#services"},{l:"Contact",h:"#contact"}];
const services = ["AI & LLM Dev","Fullstack Web Apps","NLP & Research","Data Science","Consulting"];

export default function Footer() {
  const year = new Date().getFullYear();
  const footerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ftr-grid > div", {
        y: 30, opacity: 0, stagger: 0.12, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".ftr-grid", start: "top 90%", once: true }
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} style={{background:"#0a0a0f",borderTop:"1px solid rgba(255,255,255,0.05)",padding:"3.5rem 2rem 0"}}>
      <style>{`
        .ftr-inner{max-width:1200px;margin:0 auto;}
        .ftr-grid{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:2.5rem;padding-bottom:2.5rem;border-bottom:1px solid rgba(255,255,255,0.05);}
        .fl{font-size:13.5px;color:rgba(200,220,230,0.45);text-decoration:none;display:block;padding:4px 0;transition:color .2s;}
        .fl:hover{color:#00d4aa;}
        .ftr-col-title{font-size:10px;font-weight:600;letter-spacing:.15em;text-transform:uppercase;color:rgba(200,220,230,0.3);margin-bottom:1rem;}
        .fsoc{display:flex;align-items:center;gap:9px;padding:8px 10px;border-radius:8px;border:1px solid rgba(255,255,255,0.07);color:rgba(200,220,230,0.55);text-decoration:none;font-size:13px;transition:all .2s;margin-bottom:7px;}
        .fsoc:hover{border-color:rgba(0,212,170,0.3);color:#00d4aa;transform:translateX(3px);}
        .ftr-avail{display:inline-flex;align-items:center;gap:7px;background:rgba(0,212,170,0.07);border:1px solid rgba(0,212,170,0.2);border-radius:20px;padding:4px 12px;font-size:11px;color:#00d4aa;margin-bottom:1rem;}
        @media(max-width:900px){.ftr-grid{grid-template-columns:1fr 1fr;}}
        @media(max-width:480px){.ftr-grid{grid-template-columns:1fr;} footer{padding:3rem 1.5rem 0;}}
      `}</style>
      <div className="ftr-inner">
        <div className="ftr-grid">
          <div>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:"1rem"}}>
              <span style={{color:"rgba(0,212,170,0.6)",fontSize:14,fontWeight:300}}>&lt;</span>
              <span style={{fontSize:16,fontWeight:700,background:"linear-gradient(135deg,#00d4aa,#0066ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>Shuaib.dev/</span>
              <span style={{color:"rgba(0,212,170,0.6)",fontSize:14,fontWeight:300}}>/&gt;</span>
            </div>
            <p style={{fontSize:13,color:"rgba(200,220,230,0.4)",lineHeight:1.8,marginBottom:"1rem",maxWidth:260}}>
              AI Engineer & Fullstack Web Developer. Building for startups, remote work & research collaborations.
            </p>
            <div className="ftr-avail"><span className="green-dot"/>Available for Freelance</div>
          </div>

          <div>
            <p className="ftr-col-title">Navigate</p>
            {navLinks.map(({l,h})=><a key={l} href={h} className="fl">{l}</a>)}
          </div>

          <div>
            <p className="ftr-col-title">Services</p>
            {services.map(s=><a key={s} href="#services" className="fl">{s}</a>)}
          </div>

          <div>
            <p className="ftr-col-title">Connect</p>
            <a href="https://github.com/shuaib-code" className="fsoc" target="_blank" rel="noopener noreferrer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
              GitHub
            </a>
            <a href="mailto:shuaibasghargtk@gmail.com" className="fsoc">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/></svg>
              Email
            </a>
            <a href="#" className="fsoc">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="#" className="fsoc">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              Twitter
            </a>
          </div>
        </div>

        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"1.2rem 0 1.5rem",flexWrap:"wrap",gap:".8rem"}}>
          <p style={{fontSize:12,color:"rgba(200,220,230,0.25)"}}>
            © {year} <span style={{background:"linear-gradient(135deg,#00d4aa,#0066ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:500}}>Shuaib Asghar</span> — All rights reserved.
          </p>
          <p style={{fontSize:12,color:"rgba(200,220,230,0.25)"}}>AI Engineer & Fullstack Web Developer</p>
        </div>
      </div>
    </footer>
  );
}
