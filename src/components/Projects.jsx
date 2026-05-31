import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { icon:"🤖", title:"Multi-Agent RAG Study Assistant", desc:"CrewAI + OpenAI + ChromaDB with F1/BLEU/ROUGE evaluation with React UI & Flask backend.", tags:["CrewAI","ChromaDB","React"], accent:"#00d4aa" },
  { icon:"🏛️", title:"IBA AI Analytics Portal", desc:"FastAPI + Next.js + LangChain + CrewAI-powered intelligent analytics dashboard.", tags:["FastAPI","Next.js","MongoDB"], accent:"#0066ff" },
  { icon:"🧠", title:"AutoGen Research Assistant", desc:"Multi-agent AI assistant using AutoGen + ChromaDB for academic research & knowledge retrieval.", tags:["AutoGen","Python","ChromaDB"], accent:"#a855f7" },
  { icon:"📊", title:"NLP Evaluation Pipeline", desc:"HuggingFace + Transformers + FAISS semantic search + flan-t5-base RAG pipeline.", tags:["FAISS","Sentence-Transformers","RAG"], accent:"#00d4aa" },
  { icon:"✍️", title:"AI Essay Scoring System", desc:"Automated Essay Scoring using fine-tuned T5/BERT/RoBERTa. MDPI-targeted SLR.", tags:["NLP","BERT","MDPI"], accent:"#0066ff" },
  { icon:"🎙️", title:"Audio Transcription API", desc:"Node.js audio transcription with AssemblyAI + JWT auth + ffmpeg chunking + MongoDB.", tags:["Node.js","AssemblyAI","MongoDB"], accent:"#a855f7" },
];

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".proj-heading", {
        y: 30, opacity: 0, duration: 0.6, ease: "power3.out",
        scrollTrigger: { trigger: ".proj-heading", start: "top 85%", once: true }
      });
      gsap.from(".proj-card", {
        y: 50, opacity: 0, stagger: 0.1, duration: 0.65, ease: "power3.out",
        scrollTrigger: { trigger: ".proj-grid", start: "top 85%", once: true }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" style={{padding:"6rem 2rem",background:"#0a0a0f"}}>
      <style>{`
        .proj-grid{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
        .proj-card{background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:12px;overflow:hidden;transition:transform .3s,box-shadow .3s;cursor:pointer;}
        .proj-card:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(0,0,0,0.3);}
        .proj-thumb{height:130px;display:flex;align-items:center;justify-content:center;font-size:2.2rem;position:relative;border-bottom:1px solid rgba(255,255,255,0.06);}
        .proj-thumb-lbl{position:absolute;top:10px;right:10px;font-size:9px;padding:3px 8px;border-radius:4px;background:rgba(255,255,255,0.07);color:rgba(200,220,230,0.5);letter-spacing:.06em;}
        .ptag{font-size:10.5px;padding:3px 9px;border-radius:4px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);color:rgba(200,220,230,0.6);}
        .proj-link{padding:5px 14px;border-radius:6px;font-size:12px;font-weight:500;text-decoration:none;transition:opacity .2s,transform .2s;}
        .proj-link:hover{opacity:0.8;transform:translateY(-1px);}
        @media(max-width:1024px){.proj-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:580px){.proj-grid{grid-template-columns:1fr;} section#projects{padding:4rem 1.5rem;}}
      `}</style>

      <div className="proj-heading" style={{maxWidth:1200,margin:"0 auto 3rem"}}>
        <div className="section-label">Featured Projects</div>
        <h2 style={{fontSize:"clamp(2rem,4vw,2.8rem)",fontWeight:700,color:"#fff"}}>Things I've Built</h2>
        <p style={{fontSize:14,color:"rgba(200,220,230,0.45)",marginTop:".5rem"}}>Hover on cards to preview project demos & details.</p>
      </div>

      <div className="proj-grid">
        {projects.map(({icon,title,desc,tags,accent})=>(
          <div key={title} className="proj-card"
            onMouseEnter={e=>e.currentTarget.style.borderColor=accent+"55"}
            onMouseLeave={e=>e.currentTarget.style.borderColor="rgba(255,255,255,0.07)"}>
            <div className="proj-thumb" style={{background:`linear-gradient(135deg,${accent}12,${accent}06)`}}>
              {icon}
              <span className="proj-thumb-lbl">Hover to Preview</span>
            </div>
            <div style={{padding:"1.1rem"}}>
              <p style={{fontSize:14.5,fontWeight:600,color:"#fff",marginBottom:".5rem",lineHeight:1.35}}>{title}</p>
              <p style={{fontSize:12.5,color:"rgba(200,220,230,0.5)",lineHeight:1.7,marginBottom:".9rem"}}>{desc}</p>
              <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:".9rem"}}>
                {tags.map(t=><span key={t} className="ptag">{t}</span>)}
              </div>
              <div style={{display:"flex",gap:8}}>
                <a href="#" className="proj-link" style={{background:`linear-gradient(135deg,${accent},#0066ff)`,color:"#fff"}}>View Project →</a>
                <a href="#" className="proj-link" style={{border:"1px solid rgba(255,255,255,0.12)",color:"rgba(200,220,230,0.6)"}}>Source ↗</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
