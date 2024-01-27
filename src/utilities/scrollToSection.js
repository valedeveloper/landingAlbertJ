export const scrollToSection = (sectionId, top) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export const handleBackToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
