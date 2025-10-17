import { useEffect } from "react";

export default function useScrollFade() {
  useEffect(() => {
    const elements = document.querySelectorAll(".skill-item, .project-item");
    
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // animate only once
          }
        });
      },
      {
        threshold: 0.2 // trigger when 20% visible
      }
    );

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
}
