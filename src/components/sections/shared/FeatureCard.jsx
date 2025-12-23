// components/sections/shared/FeatureCard.jsx
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-sm">
      <div className="text-4xl mb-6">{icon}</div>
      <h3 className="text-xl font-light mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;