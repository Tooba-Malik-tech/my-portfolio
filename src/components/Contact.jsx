import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon:"✉️", label:"Email", val:"shuaibasghargtk@gmail.com", href:"mailto:shuaibasghargtk@gmail.com" },
  { icon:"🐙", label:"GitHub", val:"github.com/shuaib-code", href:"https://github.com/shuaib-code" },
  { icon:"💼", label:"LinkedIn", val:"linkedin.com/in/shuaib-asghar", href:"#" },
  { icon:"📍", label:"Location", val:"Sukkur, Pakistan", href:"#" },
];

export default function Contact() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-heading", {
        y: 30, opacity: 0, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-heading", start: "top 85%", once: true }
      });
      gsap.from(".contact-form", {
        x: -40, opacity: 0, duration: 0.75, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-inner", start: "top 80%", once: true }
      });
      gsap.from(".contact-info", {
        x: 40, opacity: 0, duration: 0.75, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-inner", start: "top 80%", once: true }
      });
      gsap.from(".ci-card", {
        y: 20, opacity: 0, stagger: 0.1, duration: 0.5, ease: "power3.out",
        scrollTrigger: { trigger: ".contact-inner", start: "top 75%", once: true }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" style={{padding:"6rem 2rem",background:"#0a0a0f"}}>
      <style>{`
        .contact-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1.4fr 1fr;gap:4rem;align-items:start;}
        .form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px;}
        .fi{background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;padding:10px 14px;font-size:13.5px;color:#e2e8f0;font-family:'Inter',sans-serif;outline:none;width:100%;transition:border-color .25s;resize:none;}
        .fi:focus{border-color:rgba(0,212,170,0.4);}
        .fi option{background:#0d0d14;}
        .fsubmit{width:100%;padding:12px;border:none;border-radius:8px;cursor:pointer;background:linear-gradient(135deg,#00d4aa,#0066ff);color:#fff;font-size:14px;font-weight:500;font-family:'Inter',sans-serif;transition:opacity .2s,transform .2s;}
        .fsubmit:hover{opacity:0.88;transform:translateY(-1px);}
        .ci-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:1rem 1.2rem;display:flex;align-items:center;gap:12px;transition:all .25s;text-decoration:none;}
        .ci-card:hover{border-color:rgba(0,212,170,0.3);transform:translateX(4px);}
        .ci-icon{width:38px;height:38px;border-radius:8px;background:rgba(0,212,170,0.08);border:1px solid rgba(0,212,170,0.15);display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:1rem;}
        @media(max-width:768px){.contact-inner{grid-template-columns:1fr;} .form-row{grid-template-columns:1fr;} section#contact{padding:4rem 1.5rem;}}
      `}</style>

      <div className="contact-heading" style={{maxWidth:1200,margin:"0 auto 3rem"}}>
        <div className="section-label">Connect With Me</div>
        <h2 style={{fontSize:"clamp(2rem,4vw,2.8rem)",fontWeight:700,color:"#fff"}}>Tell Me About Your Project</h2>
        <p style={{fontSize:14,color:"rgba(200,220,230,0.45)",marginTop:".5rem"}}>
          Let's build something amazing. Share your requirements and I'll get back within 24h.
        </p>
      </div>

      <div className="contact-inner">
        <form className="contact-form" style={{display:"flex",flexDirection:"column",gap:14}} onSubmit={e=>e.preventDefault()}>
          <div className="form-row">
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              <label style={{fontSize:12,color:"rgba(200,220,230,0.45)"}}>Full Name</label>
              <input className="fi" type="text" placeholder="Your Name"/>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              <label style={{fontSize:12,color:"rgba(200,220,230,0.45)"}}>Email Address</label>
              <input className="fi" type="email" placeholder="you@example.com"/>
            </div>
          </div>
          <div className="form-row">
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              <label style={{fontSize:12,color:"rgba(200,220,230,0.45)"}}>Project Type</label>
              <select className="fi">
                <option>Web App / AI Solution / Research</option>
                <option>AI & LLM Development</option>
                <option>Fullstack Web App</option>
                <option>NLP & Research</option>
                <option>Data Science & ML</option>
              </select>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:6}}>
              <label style={{fontSize:12,color:"rgba(200,220,230,0.45)"}}>Budget</label>
              <select className="fi">
                <option>$100 – $500</option>
                <option>$500 – $1000</option>
                <option>$1000 – $3000</option>
                <option>$3000+</option>
              </select>
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:6}}>
            <label style={{fontSize:12,color:"rgba(200,220,230,0.45)"}}>Project Description</label>
            <textarea className="fi" rows={5} placeholder="Describe your project goals, timeline and technical requirements..."/>
          </div>
          <button className="fsubmit" type="submit">Send Requirements →</button>
        </form>

        <div className="contact-info" style={{display:"flex",flexDirection:"column",gap:12}}>
          <p style={{fontSize:14,fontWeight:600,color:"#fff",marginBottom:".5rem"}}>Get In Touch</p>
          <p style={{fontSize:13,color:"rgba(200,220,230,0.45)",marginBottom:"1rem"}}>Building for startups, remote work & research collaborations.</p>
          {contactInfo.map(({icon,label,val,href})=>(
            <a key={label} href={href} className="ci-card" target={href.startsWith("http")?"_blank":"_self"} rel="noopener noreferrer">
              <div className="ci-icon">{icon}</div>
              <div>
                <div style={{fontSize:10,color:"rgba(200,220,230,0.35)",textTransform:"uppercase",letterSpacing:".1em"}}>{label}</div>
                <div style={{fontSize:13,color:"rgba(200,220,230,0.75)",marginTop:2}}>{val}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
