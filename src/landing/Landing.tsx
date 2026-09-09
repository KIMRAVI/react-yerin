import { useEffect, useRef, useState, type FormEvent } from "react";
import styles from "./Landing.module.scss";

const NAV_ITEMS = [
  { id: "hero", label: "홈" },
  { id: "features", label: "특징" },
  { id: "how", label: "직관가이드" },
  { id: "contact", label: "소식신청" },
];

const STRENGTHS = [
  {
    n: "01",
    title: "압도적인 마운드",
    desc: "이닝 후반, 흔들리지 않는 불펜진이 경기를 끝까지 지켜냅니다.",
  },
  {
    n: "02",
    title: "다이나믹한 공격",
    desc: "빠른 주루와 정교한 타격으로 순식간에 흐름을 뒤집습니다.",
  },
  {
    n: "03",
    title: "수원의 함성",
    desc: "케이티위즈파크를 가득 채우는 함성이 곧 홈 어드밴티지입니다.",
  },
  {
    n: "04",
    title: "두꺼운 뎁스",
    desc: "신인부터 베테랑까지, 어떤 상황에도 흔들리지 않는 선수층.",
  },
];

const STATS = [
  { value: 100, suffix: "%", label: "마지막 순간까지 전력 질주" },
  { value: 9, suffix: "회", label: "끝까지 흔들리지 않는 집중력" },
  { value: 1, suffix: "", label: "하나 된 팬심, 하나의 팀" },
];

const GUIDE_STEPS = [
  {
    n: "01",
    title: "좌석 예매",
    desc: "구단 홈페이지에서 원하는 좌석을 먼저 확보하세요.",
  },
  {
    n: "02",
    title: "응원 준비",
    desc: "레드 아이템으로 무장하고 응원가를 미리 익혀두세요.",
  },
  {
    n: "03",
    title: "현장 관람",
    desc: "케이티위즈파크에서 마지막 아웃카운트까지 함께하세요.",
  },
];

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}

function StatItem({
  value,
  suffix,
  label,
  active,
}: {
  value: number;
  suffix: string;
  label: string;
  active: boolean;
}) {
  const displayValue = useCountUp(value, active);
  return (
    <div className={styles.statItem}>
      <span className={styles.statValue}>
        {displayValue}
        {suffix}
      </span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [statsActive, setStatsActive] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const statsRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const targets = revealRefs.current.filter((el): el is HTMLElement =>
      Boolean(el),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.isVisible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsActive(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const setRevealRef = (index: number) => (el: HTMLElement | null) => {
    revealRefs.current[index] = el;
  };

  const handleNavClick = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setEmailError("올바른 이메일 주소를 입력해 주세요.");
      setSubmitted(false);
      return;
    }
    setEmailError(null);
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a
            href="#hero"
            className={styles.logo}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("hero");
            }}
          >
            KT <span>WIZ</span>
          </a>

          <nav className={styles.nav} aria-label="주요 내비게이션">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={
                      activeSection === item.id ? styles.navActive : ""
                    }
                    aria-current={
                      activeSection === item.id ? "true" : undefined
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""}`}
            aria-expanded={menuOpen}
            aria-controls="landing-mobile-menu"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </header>

      <nav
        id="landing-mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
        aria-label="모바일 내비게이션"
        aria-hidden={!menuOpen}
      >
        <ul>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                tabIndex={menuOpen ? 0 : -1}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
        <section id="hero" className={styles.hero}>
          <p className={styles.heroWatermark} aria-hidden="true">
            WIZ
          </p>
          <div className={styles.heroInner}>
            <p className={styles.eyebrow}>2026 SEASON</p>
            <h1>
              마법의 시작,
              <br />
              위대한 도약
            </h1>
            <p className={styles.heroDesc}>
              수원을 홈으로 삼은,
              <br />
              한국 프로야구의 ‘10번째 심장’ kt wiz입니다!
            </p>
            <div className={styles.heroActions}>
              <button
                type="button"
                className={styles.primaryButton}
                onClick={() => handleNavClick("features")}
              >
                우리가 강한 이유
              </button>
              <button
                type="button"
                className={styles.secondaryButton}
                onClick={() => handleNavClick("how")}
              >
                직관 가이드 보기
              </button>
            </div>
          </div>
        </section>

        <section
          id="stats"
          className={styles.stats}
          ref={(el) => {
            statsRef.current = el;
          }}
        >
          <div className={styles.statsInner}>
            {STATS.map((stat) => (
              <StatItem key={stat.label} {...stat} active={statsActive} />
            ))}
          </div>
        </section>

        <div className={styles.seam} aria-hidden="true" />

        <section
          id="features"
          className={styles.features}
          ref={setRevealRef(0)}
        >
          <h2 className={styles.sectionTitle}>우리가 강한 이유</h2>
          <p className={styles.sectionDesc}>
            마운드부터 관중석까지, KT WIZ를 강하게 만드는 것들.
          </p>
          <div className={styles.strengthGrid}>
            {STRENGTHS.map((item) => (
              <article key={item.title} className={styles.strengthCard}>
                <span className={styles.strengthNumber}>{item.n}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <div className={styles.seam} aria-hidden="true" />

        <section id="how" className={styles.how} ref={setRevealRef(1)}>
          <h2 className={styles.sectionTitle}>직관 가이드</h2>
          <p className={styles.sectionDesc}>
            케이티위즈파크, 처음 가는 사람도 어렵지 않아요.
          </p>
          <ol className={styles.steps}>
            {GUIDE_STEPS.map((step) => (
              <li key={step.n}>
                <span className={styles.stepNumber}>{step.n}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className={styles.seam} aria-hidden="true" />

        <section id="contact" className={styles.contact} ref={setRevealRef(2)}>
          <h2 className={styles.sectionTitle}>위즈 소식 받기</h2>
          <p className={styles.sectionDesc}>
            이메일을 남기면 새 시즌 소식과 이벤트를 가장 먼저 알려드려요.
          </p>
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formField}>
              <label htmlFor="landing-email">이메일 주소</label>
              <div className={styles.formRow}>
                <input
                  id="landing-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (emailError) setEmailError(null);
                    setSubmitted(false);
                  }}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(emailError)}
                  aria-describedby={
                    emailError ? "landing-email-error" : undefined
                  }
                />
                <button type="submit" className={styles.primaryButton}>
                  소식 받기
                </button>
              </div>
            </div>
            {emailError && (
              <p
                id="landing-email-error"
                className={styles.formError}
                role="alert"
              >
                {emailError}
              </p>
            )}
            {submitted && (
              <p className={styles.formSuccess} role="status">
                신청 완료! 새 소식이 도착하면 가장 먼저 알려드릴게요.
              </p>
            )}
          </form>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} KT WIZ Fan Page</p>
        <p className={styles.footerNote}>
          본 페이지는 프론트엔드 포트폴리오 연습을 위해 제작된 비공식 팬메이드
          페이지입니다.
        </p>
      </footer>
    </div>
  );
}
