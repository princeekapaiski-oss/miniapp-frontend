import "./MainScreen.css";
import { useEffect, useRef } from "react";
import Header from "../components/Header/Header";

function MainScreen({ go }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const fitTitle = () => {
      const el = titleRef.current;
      if (!el) return;

      const parent = el.parentElement;
      const style = getComputedStyle(parent);

      const availableWidth =
        parent.clientWidth -
        parseFloat(style.paddingLeft) -
        parseFloat(style.paddingRight);

      el.style.fontSize = "62px";

      const textWidth = el.scrollWidth;
      if (textWidth > 0) {
        const ratio = availableWidth / textWidth;
        const newSize = Math.floor(62 * ratio);
        el.style.fontSize = `${newSize}px`;
      }
    };

    fitTitle();
    window.addEventListener("resize", fitTitle);
    return () => window.removeEventListener("resize", fitTitle);
  }, []);

  return (
    <div className="main-screen">

      <Header title="НЛО / ГЛАВНАЯ /" />

      <div className="main-content">
        <div className="section-path">
          НЛО / ГЛАВНАЯ /
        </div>

        <div className="ufo-wrapper">
          <img src="/images/ufo.png" alt="UFO" />
        </div>

        <div className="main-title-wrapper">
          <div className="main-title" ref={titleRef}>
            МОЙ ХАБ
          </div>
        </div>

        <div className="main-actions">

          <button
            className="action-btn action-btn--wide"
            onClick={() => go("schedule")}
          >
            <img src="/icons/schedule.svg" alt="" />
            <span>РАСПИСАНИЕ<br />ВСТРЕЧ</span>
          </button>

          <div className="actions-row">
            <button
              className="action-btn action-btn--vertical"
              onClick={() => go("profile")}
            >
              <img src="/icons/profile.svg" alt="" />
              <span>ПРОФИЛЬ</span>
            </button>

            <button
              className="action-btn action-btn--vertical"
              onClick={() => go("achievements")}
            >
              <img src="/icons/achievements.svg" alt="" />
              <span>ДОСТИЖЕНИЯ</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default MainScreen;

// /icons/achievements.svg   /icons/profile.svg    /icons/schedule.svg