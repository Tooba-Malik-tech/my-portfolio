import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon:"🤖", title:"AI & LLM Development", desc:"Custom RAG systems, multi-agent pipelines, AI automation using LangChain, CrewAI, AutoGen, OpenAI.", price:"From $500", accent:"#00d4aa" },
  { icon:"🌐", title:"Fullstack Web Apps", desc:"End-to-end apps: React/Next.js frontend + FastAPI/Node.js backend + MongoDB/PostgreSQL database.", price:"From $300", accent:"#0066ff" },
  { icon:"📚", title:"NLP & Research", desc:"Text classification, semantic search, NLP pipelines, BLEU/ROUGE evaluation, academic paper support.", price:"From $200", accent:"#a855f7" },
  { icon:"📊", title:"Data Science & ML", desc:"ML pipelines, data analysis, anomaly detection, visual dashboards, BI tools & visualization.", price:"From $400", accent:"#00d4aa" },
];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".svc-heading", {
        y: 30, opacity: 0, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".svc-heading", start: "top 85%", once: true }
      });
      gsap.from(".svc-card", {
        y: 40, opacity: 0, stagger: 0.12, duration: 0.65, ease: "power3.out",
        scrollTrigger: { trigger: ".svc-grid", start: "top 85%", once: true }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const go = () => document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"});

  return (
    <section ref={sectionRef} id="services" style={{padding:"6rem 2rem",background:"#0d0d14"}}>
      <style>{`
        .svc-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:16px;}
        .svc-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;padding:1.4rem;transition:transform .3s,border-color .3s;position:relative;overflow:hidden;}
        .svc-card:hover{transform:translateY(-4px);}
        .svc-after{position:absolute;bottom:0;left:0;right:0;height:2px;transform:scaleX(0);transition:transform .3s;transform-origin:left;}
        .svc-card:hover .svc-after{transform:scaleX(1);}
        .svc-icon-wrap{width:44px;height:44px;border-radius:10px;margin-bottom:.9rem;display:flex;align-items:center;justify-content:center;font-size:1.2rem;}
        .svc-check li{font-size:12px;color:rgba(200,220,230,0.5);list-style:none;padding:3px 0;display:flex;align-items:center;gap:6px;}
        .svc-check li::before{content:'✓';font-size:10px;}
        .svc-price{font-size:17px;font-weight:700;margin-bottom:.9rem;}
        .svc-btn{width:100%;padding:9px;border:none;border-radius:8px;cursor:pointer;color:#fff;font-size:13px;font-weight:500;font-family:'Inter',sans-serif;transition:opacity .2s,transform .2s;}
        .svc-btn:hover{opacity:0.85;transform:translateY(-1px);}
        @media(max-width:1024px){.svc-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:480px){.svc-grid{grid-template-columns:1fr;} section#services{padding:4rem 1.5rem;}}
      `}</style>

      <div className="svc-heading" style={{maxWidth:1200,margin:"0 auto 3rem"}}>
        <div className="section-label">Freelance Services</div>
        <h2 style={{fontSize:"clamp(2rem,4vw,2.8rem)",fontWeight:700,color:"#fff"}}>Available for Hire</h2>
        <p style={{fontSize:14,color:"rgba(200,220,230,0.45)",marginTop:".5rem"}}>
          Currently Open — Taking New Projects, Freelance & Contracts
        </p>
      </div>

      <div className="svc-grid">
        {services.map(({icon,title,desc,price,accent})=>(
          <div key={title} className="svc-card"
            onMouseEnter={e=>e.currentTarget.style.borderColor=accent+"44"}
            onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.07)"}>
            <div className="svc-after" style={{background:`linear-gradient(90deg,${accent},#0066ff)`}}/>
            <div className="svc-icon-wrap" style={{background:`${accent}15`,border:`1px solid ${accent}30`}}>{icon}</div>
            <p style={{fontSize:15,fontWeight:600,color:"#fff",marginBottom:".5rem"}}>{title}</p>
            <p style={{fontSize:12.5,color:"rgba(200,220,230,0.5)",lineHeight:1.7,marginBottom:"1rem"}}>{desc}</p>
            <ul className="svc-check" style={{marginBottom:"1.1rem"}}>
              {["Quality Deliverables","On-Time Delivery","Post-Launch Support"].map(li=>(
                <li key={li} style={{color:`${accent}cc`}}>{li}</li>
              ))}
            </ul>
            <p className="svc-price" style={{background:`linear-gradient(135deg,${accent},#0066ff)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}}>{price}</p>
            <button className="svc-btn" style={{background:`linear-gradient(135deg,${accent},#0066ff)`}} onClick={go}>Get a Quote</button>
          </div>
        ))}
      </div>
    </section>
  );
}
