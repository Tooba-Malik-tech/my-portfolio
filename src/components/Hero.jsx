import { useRef, useEffect } from "react";
import gsap from "gsap";

const heroSkills = ["React","Node.js","FastAPI","CrewAI","LangChain","ChromaDB","FAISS","MongoDB","Next.js","OpenAI"];

function AvatarIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <circle cx="26" cy="20" r="11" fill="rgba(200,220,230,0.15)" stroke="rgba(200,220,230,0.2)" strokeWidth="1.5"/>
      <path d="M6 46c0-11.046 8.954-20 20-20s20 8.954 20 20" stroke="rgba(200,220,230,0.15)" strokeWidth="1.5" strokeLinecap="round" fill="rgba(200,220,230,0.07)"/>
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from(".hero-tag",   { y: 24, opacity: 0, duration: 0.55, ease: "power3.out" })
        .from(".hero-name",  { y: 40, opacity: 0, duration: 0.65, ease: "power3.out" }, "-=0.3")
        .from(".hero-role",  { y: 24, opacity: 0, duration: 0.5,  ease: "power3.out" }, "-=0.35")
        .from(".hero-desc",  { y: 20, opacity: 0, duration: 0.5,  ease: "power3.out" }, "-=0.3")
        .from(".hero-btns > *", { y: 16, opacity: 0, stagger: 0.12, duration: 0.45, ease: "power3.out" }, "-=0.25")
        .from(".hero-stat",  { y: 16, opacity: 0, stagger: 0.1,  duration: 0.4,  ease: "power3.out" }, "-=0.2")
        .from(".hero-card",  { x: 50, opacity: 0, duration: 0.7,  ease: "power3.out" }, "-=0.6");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:"6rem 2rem 3rem",background:"#0a0a0f",position:"relative",overflow:"hidden"}}>
      <style>{`
        .hero-glow {
          position:absolute;top:-200px;right:-200px;width:600px;height:600px;border-radius:50%;
          background:radial-gradient(ellipse,rgba(0,212,170,0.07) 0%,transparent 70%);pointer-events:none;
        }
        .hero-glow2 {
          position:absolute;bottom:-200px;left:-200px;width:500px;height:500px;border-radius:50%;
          background:radial-gradient(ellipse,rgba(0,102,255,0.06) 0%,transparent 70%);pointer-events:none;
        }
        .hero-inner{max-width:1200px;margin:0 auto;width:100%;display:grid;grid-template-columns:1fr 380px;gap:3rem;align-items:center;position:relative;z-index:1;}
        .hero-tag{font-size:13px;color:rgba(200,220,230,0.5);margin-bottom:.5rem;}
        .hero-name{font-size:clamp(3.5rem,7vw,5.5rem);font-weight:700;line-height:1.05;color:#fff;margin-bottom:.4rem;}
        .hero-role{font-size:clamp(.95rem,1.8vw,1.15rem);font-weight:400;color:rgba(200,220,230,0.6);margin-bottom:1rem;display:flex;align-items:center;gap:10px;flex-wrap:wrap;}
        .hero-role-sep{color:rgba(0,212,170,0.7);font-size:.9rem;}
        .hero-desc{font-size:14.5px;color:rgba(200,220,230,0.5);line-height:1.8;margin-bottom:2rem;max-width:480px;}
        .hero-btns{display:flex;gap:12px;flex-wrap:wrap;}
        .hero-stats{display:flex;gap:2rem;flex-wrap:wrap;margin-top:2rem;}
        .stat-num{font-size:1.8rem;font-weight:700;background:linear-gradient(135deg,#00d4aa,#0066ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;line-height:1;}
        .stat-lbl{font-size:11px;color:rgba(200,220,230,0.4);letter-spacing:.08em;text-transform:uppercase;margin-top:2px;}
        .stat-divider{width:1px;background:rgba(255,255,255,0.08);align-self:stretch;}
        .hero-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;padding:1.5rem;}
        .hero-card-top{position:relative;width:120px;height:120px;margin:0 auto 1.5rem;}
        .hero-card-ring{position:absolute;inset:0;border-radius:50%;border:2px solid transparent;background:linear-gradient(#0a0a0f,#0a0a0f) padding-box,linear-gradient(135deg,#00d4aa,#0066ff) border-box;}
        .hero-card-avatar{position:absolute;inset:6px;border-radius:50%;background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;overflow:hidden;}
        .hero-avail{position:absolute;bottom:-10px;left:50%;transform:translateX(-50%);background:#0a0a0f;padding:3px 10px;border-radius:10px;display:flex;align-items:center;gap:5px;white-space:nowrap;font-size:10px;color:#00d4aa;border:1px solid rgba(0,212,170,0.3);}
        .hero-card-name{text-align:center;font-size:15px;font-weight:600;color:#fff;margin-bottom:3px;}
        .hero-card-sub{text-align:center;font-size:11.5px;color:rgba(200,220,230,0.4);margin-bottom:1.2rem;}
        .hero-skill-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:6px;}
        .hsk{font-size:11px;padding:5px 8px;border-radius:6px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.07);color:rgba(200,220,230,0.6);text-align:center;transition:border-color .2s,color .2s;}
        .hsk:hover{border-color:rgba(0,212,170,0.3);color:#00d4aa;}
        @media(max-width:900px){.hero-inner{grid-template-columns:1fr;} .hero-card{display:none;}}
        @media(max-width:480px){section#home{padding:5rem 1.5rem 3rem;}}
      `}</style>

      <div className="hero-glow"/>
      <div className="hero-glow2"/>

      <div className="hero-inner">
        <div>
          <p className="hero-tag">Hello, I'm</p>
          <h1 className="hero-name">Shuaib<br/>Asghar</h1>
          <div className="hero-role">
            <span style={{background:"linear-gradient(135deg,#00d4aa,#0066ff)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:600}}>AI Engineer</span>
            <span className="hero-role-sep">✦</span>
            <span>Fullstack Web Developer</span>
          </div>
          <p className="hero-desc">
            Building intelligent systems & beautiful interfaces.<br/>
            From multi-agent RAG pipelines to production React apps —<br/>
            I craft solutions that think, scale, and perform.
          </p>
          <div className="hero-btns">
            <a href="#hire-me" className="btn-cyan">Hire Me</a>
            <a href="#" className="btn-outline-cyan">Download CV</a>
          </div>
          <div className="hero-stats">
            {[["5+","Projects"],["3+","AI Systems"],["2+","Tech Stacks"],["Open","To Hire"]].map(([n,l],i,a)=>(
              <div key={l} className="hero-stat" style={{display:"flex",alignItems:"center",gap:"2rem"}}>
                <div><div className="stat-num">{n}</div><div className="stat-lbl">{l}</div></div>
                {i<a.length-1&&<div className="stat-divider"/>}
              </div>
            ))}
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <div className="hero-card-ring"/>
            <div className="hero-card-avatar">
              <AvatarIcon />
            </div>
            <div className="hero-avail"><span className="green-dot"/>Available for Freelance</div>
          </div>
          <p className="hero-card-name">Shuaib Asghar</p>
          <p className="hero-card-sub">MS CS @ Sukkur IBA · AI & Fullstack Dev</p>
          <div className="hero-skill-grid">
            {heroSkills.map(s=><div key={s} className="hsk">{s}</div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
