import { useEffect, useState } from 'react';
import { LuArrowUp } from 'react-icons/lu';

/** Floating button, fixed at the bottom-right, that scrolls back to the top. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      className={`fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-full bg-accent text-on-accent shadow-lg shadow-accent/30 transition-all duration-300 hover:-translate-y-1 hover:opacity-90 sm:bottom-8 sm:right-8 ${
        visible ? 'opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <LuArrowUp className="size-5" aria-hidden="true" />
    </a>
  );
}
