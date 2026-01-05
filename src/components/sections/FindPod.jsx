import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const FindPod = () => {
  const navigate = useNavigate();
  const testimonialGradients = [
  "from-[#FF9178] via-[#FF9178] to-[#FF9178]",
  "from-[#ffffff] via-[#ffffff] to-[#ffffff]",
  "from-[#FFFD3A] via-[#FFFD3A] to-[#FFFD3A]",
  "from-[#DB2A2A] via-[#DB2A2A] to-[#DB2A2A]",
  "from-[#ffffff] via-[#ffffff] to-[#ffffff]",
  "from-[#FFFD3A] via-[#FFFD3A] to-[#FFFD3A]",
];

 const reviews = [
    {
      text: "Super easy to use and smells incredible.",
      location: "Gym Member, Atlanta",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      text: "Found exactly what I needed after hours.",
      location: "Traveler, Miami",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "Game changer for late night needs.",
      location: "Hotel Guest, Austin",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      text: "Simple, fast, and premium quality.",
      location: "Student, NYC",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      text: "Love the convenience at my gym!",
      location: "Fitness Member, LA",
      avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    },
  ];
  const [zipCode, setZipCode] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);

  const mockLocations = [
    {
      id: 1,
      name: 'Equinox Midtown',
      city: 'Atlanta',
      state: 'GA',
      zipCode: '30309',
      access: 'members',
      hours: '24/7',
      image:
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2340&auto=format&fit=crop'
    },
    {
      id: 2,
      name: 'Miami Airport Terminal D',
      city: 'Miami',
      state: 'FL',
      zipCode: '33126',
      access: 'public',
      hours: '24/7',
      image:
        'https://i.ytimg.com/vi/gkQDhqX2jx8/maxresdefault.jpg'
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (zipCode.length !== 5) return;

    const results = mockLocations.filter(
      (location) => location.zipCode === zipCode
    );

    setSearchResults(results);
    setShowNoResults(results.length === 0);
  };

  const otherLocations = mockLocations.filter(
    (location) => location.zipCode !== zipCode
  );

  useEffect(() => {
    setSearchResults([]);
    setShowNoResults(false);
  }, [zipCode]);

  const LocationCard = ({ location }) => {
    const mapQuery = encodeURIComponent(
      `${location.name}, ${location.city}, ${location.state}`
    );

    return (
      <motion.div
        whileHover={{ y: -4 }}
        className="bg-white rounded-2xl overflow-hidden shadow"
      >
        <div className="grid md:grid-cols-4">
          {/* Image */}
          <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(${location.image})` }}
          />

          {/* Info */}
          <div className="p-6 text-left md:col-span-2">
            <h4 className="text-xl font-semibold text-[#14132C]">
              {location.name}
            </h4>
            <p className="text-[#14132C]/70">
              {location.city}, {location.state}
            </p>

            <div className="flex gap-2 mt-3">
              <span className="flex items-center gap-1 px-3 py-1 bg-[#A6D4FA]/30 rounded-full text-sm">
                <MapPin size={12} />
                {location.access === 'public' ? 'Public' : 'Members'}
              </span>
              <span className="flex items-center gap-1 px-3 py-1 bg-[#FFFD3A]/40 rounded-full text-sm">
                <Clock size={12} /> {location.hours}
              </span>
            </div>
          </div>

          {/* Map */}
          <div className="h-48 md:h-auto">
            <iframe
              title={`${location.name} map`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <motion.section
      id="find-pod"
      className="py-20 bg-[#A6D4FA]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
         
 <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight" style={{ color: '#14132C' }}>
                            Find a <span style={{ color: '#FF9178' }}>Tranga Pod.</span>
                        </h2>
                        <p className="mt-6 text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#14132C' }}>
                              Tranga Pods are placed in trusted, community-loved venues so you can access what you need, when you need it.
                        </p>
                    </motion.div>
        {/* Use-case Framing */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-xl italic text-[#14132C]">
            "Whether you're in town for the night, post-gym, or between plans, Tranga Pods give you access to products you won't find anywhere else."
          </p>
        </motion.div>
        <div className="max-w-2xl mx-auto mt-12">
          <form onSubmit={handleSearch} className="flex gap-2 mb-10">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#14132C]/40" />
              <input
                type="text"
                maxLength="5"
                placeholder="Enter ZIP code"
                value={zipCode}
                onChange={(e) =>
                  setZipCode(e.target.value.replace(/\D/g, ''))
                }
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-[#FF9178]"
              />
            </div>
            <button className="px-8 py-4 bg-[#FF9178] rounded-full font-medium">
              Find a Pod
            </button>
          </form>

          {/* Exact Results */}
          {searchResults.length > 0 && (
            <div className="space-y-6">
              {searchResults.map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          )}

          {/* No Results + Other Locations */}
          {showNoResults && (
            <div className="mt-12 space-y-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                
              >
                <h3 className="text-2xl mb-4">
                  Can't find a Tranga Pod near you?
                </h3>
          
                <Link to="find-one" smooth duration={500} offset={-80}
                                  className="px-8 py-3 bg-[#14132C] text-white rounded-full">
                              Suggest a Location
                                </Link>
              </motion.div>

              {/* ✅ HEADING ADDED HERE */}
              <h3 className="text-3xl font-semibold text-[#14132C] text-left">
                Other Tranga Pod locations
              </h3>

              <div className="space-y-6">
                {otherLocations.map((location) => (
                  <LocationCard key={location.id} location={location} />
                ))}
              </div>
            </div>
            
          )}
        </div>
         
      </div>
      <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      viewport={{ once: true }}
      className="overflow-hidden mb-12"
    >
      <div className="flex animate-marquee gap-6 whitespace-nowrap pt-16">
        {[...reviews, ...reviews].map((review, idx) => (
          <div
  className={`
    inline-flex items-center gap-4
    px-6 py-3 rounded-full
    bg-gradient-to-r ${testimonialGradients[idx % testimonialGradients.length]}
    shadow-md border border-white/40
    w-max
    shrink-0
  `}
>

            <img
              src={review.avatar}
              alt={review.location}
              className="w-10 h-10 rounded-full object-cover border border-white shrink-0"
            />

            <p className="text-sm md:text-base text-[#14132C]/80 leading-snug whitespace-nowrap">
              {review.text} —{" "}
              <span className="opacity-70">{review.location}</span>
            </p>
          </div>
        ))}
      </div>
    </motion.div>
    </motion.section>
  );
};

export default FindPod;
