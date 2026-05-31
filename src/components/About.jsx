import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skillBoxes = [
  { title:"AI / ML", color:"#00d4aa", pills:["CrewAI","AutoGen","LangChain","ChromaDB","FAISS","OpenAI"] },
  { title:"Backend",  color:"#0066ff", pills:["FastAPI","Node.js","Express","MongoDB","PostgreSQL","REST"] },
  { title:"Frontend", color:"#00d4aa", pills:["React","Next.js","Vite","Tailwind","TypeScript"] },
  { title:"Research", color:"#0066ff", pills:["NLP","BLEU","ROUGE","RAG","Transformers"] },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-left > *", {
        y: 40, opacity: 0, stagger: 0.15, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ".about-inner", start: "top 80%", once: true }
      });
      gsap.from(".skill-box", {
        y: 30, opacity: 0, stagger: 0.12, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".skill-box-grid", start: "top 85%", once: true }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" style={{padding:"6rem 2rem",background:"#0d0d14"}}>
      <style>{`
        .about-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:start;}
        .skill-box-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
        .skill-box{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:10px;padding:1rem;transition:border-color .3s,transform .3s;}
        .skill-box:hover{border-color:rgba(0,212,170,0.25);transform:translateY(-3px);}
        .skill-box-title{font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;margin-bottom:.7rem;}
        .spill{font-size:11px;padding:3px 8px;border-radius:5px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);color:rgba(200,220,230,0.65);}
        @media(max-width:768px){.about-inner{grid-template-columns:1fr;gap:2.5rem;} .skill-box-grid{grid-template-columns:1fr 1fr;} section#about{padding:4rem 1.5rem;}}
      `}</style>

      <div className="about-inner">
        <div className="about-left">
          <div className="section-label">About Me</div>
          <h2 style={{fontSize:"clamp(2rem,4vw,2.8rem)",fontWeight:700,color:"#fff",lineHeight:1.2,marginBottom:"1.2rem"}}>
            Crafting the Future with<br/>Code & Intelligence
          </h2>
          <p style={{fontSize:14.5,color:"rgba(200,220,230,0.55)",lineHeight:1.85,marginBottom:"1rem"}}>
            I'm an MS CS student at Sukkur IBA University specializing in Advanced NLP & Agentic AI. I build multi-agent systems, RAG pipelines & fullstack apps that bridge research and real-world production.
          </p>
          <p style={{fontSize:14.5,color:"rgba(200,220,230,0.55)",lineHeight:1.85,marginBottom:"1.5rem"}}>
            Researcher · Builder · Problem Solver
          </p>
          <div style={{display:"flex",flexWrap:"wrap",gap:7}}>
            {["Researcher","Builder","Problem Solver"].map(t=>(
              <span key={t} className="tag-pill">{t}</span>
            ))}
          </div>
        </div>

        <div className="skill-box-grid">
          {skillBoxes.map(({title,color,pills})=>(
            <div key={title} className="skill-box">
              <div className="skill-box-title" style={{color}}>{title}</div>
              <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
                {pills.map(p=><span key={p} className="spill">{p}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
