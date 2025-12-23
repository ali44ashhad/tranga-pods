// components/sections/shared/SectionTitle.jsx
const SectionTitle = ({ children, className = '' }) => {
  return (
    <h2 className={`text-3xl md:text-4xl font-light text-center mb-8 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;