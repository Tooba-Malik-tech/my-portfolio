import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const techs = ["Python","JavaScript","TypeScript","React","Next.js","Node.js","FastAPI","Express","MongoDB","PostgreSQL","LangChain","CrewAI","AutoGen","ChromaDB","FAISS","OpenAI","Tailwind CSS","REST APIs","NLP","Docker"];

export default function TechStrip() {
  const stripRef = useRef(null);
  const doubled = [...techs, ...techs];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(stripRef.current, {
        opacity: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: stripRef.current, start: "top 90%", once: true }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={stripRef} style={{background:"#0d0d14",borderTop:"1px solid rgba(255,255,255,0.05)",borderBottom:"1px solid rgba(255,255,255,0.05)",padding:"1.8rem 0",overflow:"hidden"}}>
      <style>{`
        .ts-scroll{display:flex;gap:2.5rem;animation:tsMove 28s linear infinite;width:max-content;}
        @keyframes tsMove{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .ts-item{font-size:13px;color:rgba(200,220,230,0.3);letter-spacing:.05em;white-space:nowrap;display:flex;align-items:center;gap:8px;transition:color .2s;}
        .ts-item:hover{color:rgba(0,212,170,0.7);}
        .ts-item::before{content:'✦';font-size:8px;color:rgba(0,212,170,0.4);}
      `}</style>
      <div className="ts-scroll">
        {doubled.map((t,i)=><span key={i} className="ts-item">{t}</span>)}
      </div>
    </div>
  );
}
