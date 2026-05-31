import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const navLinks = ["Home","About","Projects","Services","Hire Me","Contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".logo-wrap", { y: -30, opacity: 0, duration: 0.7, ease: "power3.out", delay: 0.1 });
      gsap.from(".nav-ul li", { y: -20, opacity: 0, stagger: 0.07, duration: 0.5, ease: "power3.out", delay: 0.2 });
    }, headerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .hdr {
          position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
          padding: 0 2rem; transition: all 0.3s;
        }
        .hdr.scrolled {
          background: rgba(10,10,15,0.92);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .hdr-inner {
          max-width: 1200px; margin: 0 auto; height: 64px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .logo-text {
          font-size: 16px; font-weight: 700; letter-spacing: 0.04em;
          background: linear-gradient(135deg, #00d4aa, #0066ff);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .logo-wrap { display: flex; align-items: center; gap: 8px; text-decoration: none; }
        .logo-bracket { color: rgba(0,212,170,0.6); font-size: 15px; font-weight: 300; }
        .nav-ul { display: flex; list-style: none; gap: 6px; margin: 0; padding: 0; }
        .nav-a {
          padding: 6px 14px; font-size: 13.5px; font-weight: 400;
          color: rgba(200,220,230,0.65); text-decoration: none;
          border-radius: 6px; transition: all 0.2s;
        }
        .nav-a:hover { color: #fff; background: rgba(255,255,255,0.06); }
        .nav-a.hire {
          background: linear-gradient(135deg,#00d4aa,#0066ff);
          color: #fff; font-weight: 500;
        }
        .nav-a.hire:hover { opacity: 0.88; }
        .burger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 6px; }
        .burger span { display: block; width: 22px; height: 2px; background: #00d4aa; border-radius: 2px; transition: all 0.3s; }
        .burger.open span:nth-child(1){transform:translateY(7px) rotate(45deg);}
        .burger.open span:nth-child(2){opacity:0;}
        .burger.open span:nth-child(3){transform:translateY(-7px) rotate(-45deg);}
        .mob-menu {
          display: none; position: fixed; top: 64px; left: 0; right: 0;
          background: rgba(10,10,15,0.97); backdrop-filter: blur(20px);
          padding: 1.5rem 2rem 2rem; z-index: 999;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          opacity: 0; transform: translateY(-8px); pointer-events: none; transition: all 0.3s;
        }
        .mob-menu.open { opacity: 1; transform: translateY(0); pointer-events: all; display: block; }
        .mob-menu a { display: block; padding: 12px 0; font-size: 15px; color: rgba(200,220,230,0.7); text-decoration: none; border-bottom: 1px solid rgba(255,255,255,0.04); }
        .mob-menu a:hover { color: #00d4aa; }
        @media(max-width:768px){ .nav-ul,.hire-btn-wrap{display:none!important;} .burger{display:flex!important;} }
      `}</style>

      <header ref={headerRef} className={`hdr${scrolled ? " scrolled" : ""}`}>
        <div className="hdr-inner">
          <a href="#home" className="logo-wrap">
            <span className="logo-bracket">&lt;</span>
            <span className="logo-text">Shuaib.dev/</span>
            <span className="logo-bracket">/&gt;</span>
          </a>

          <nav>
            <ul className="nav-ul">
              {navLinks.map(n => (
                <li key={n}>
                  <a href={`#${n.toLowerCase().replace(" ","-")}`}
                    className={`nav-a${n === "Hire Me" ? " hire" : ""}`}>{n}</a>
                </li>
              ))}
            </ul>
          </nav>

          <button className={`burger${menuOpen?" open":""}`} onClick={() => setMenuOpen(!menuOpen)}>
            <span/><span/><span/>
          </button>
        </div>
      </header>

      <div className={`mob-menu${menuOpen?" open":""}`}>
        {navLinks.map(n => (
          <a key={n} href={`#${n.toLowerCase().replace(" ","-")}`}
            onClick={() => setMenuOpen(false)}>{n}</a>
        ))}
      </div>
    </>
  );
}
