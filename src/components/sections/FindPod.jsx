// components/sections/FindPod.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Search, X } from 'lucide-react';

const FindPod = () => {
  const [zipCode, setZipCode] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const [showLocationForm, setShowLocationForm] = useState(false);
  const [formData, setFormData] = useState({
    city: '',
    state: '',
    venueType: '',
    venueName: '',
    note: ''
  });

  // Mock location data
  const mockLocations = [
    {
      id: 1,
      name: "Equinox Midtown",
      city: "Atlanta",
      state: "GA",
      distance: 1.2,
      access: "members",
      hours: "24/7",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2340&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Miami Airport Terminal D",
      city: "Miami",
      state: "FL",
      distance: 0.5,
      access: "public",
      hours: "24/7",
      image: "https://images.unsplash.com/photo-1564023098657-1ee4ec7f7fc1?q=80&w=2340&auto=format&fit=crop"
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (zipCode.length === 5) {
      setSearchResults(mockLocations);
      setShowNoResults(mockLocations.length === 0);
    }
  };

  const handleSubmitLocation = (e) => {
    e.preventDefault();
    console.log('Location submitted:', formData);
    setShowLocationForm(false);
    setFormData({
      city: '',
      state: '',
      venueType: '',
      venueName: '',
      note: ''
    });
  };

  return (
    <motion.section
      id="find-pod"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-b from-[#A6D4FA]/20 to-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-4 text-[#14132C]">
            Find a Tranga Pod
          </h2>
          <p className="text-lg text-[#14132C]/80 max-w-2xl mx-auto">
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

        {/* Search Interface */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <form onSubmit={handleSearch} className="flex gap-2 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#14132C]/40 w-5 h-5" />
              <input
                type="text"
                pattern="[0-9]{5}"
                maxLength="5"
                placeholder="Enter ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-[#A6D4FA] focus:border-[#FF9178] focus:ring-2 focus:ring-[#FF9178]/20 outline-none transition-all"
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-[#FF9178] text-[#14132C] font-medium hover:bg-[#FF9178]/90 transition-all"
            >
              Find a Pod
            </motion.button>
          </form>

          {/* Results Display */}
          <AnimatePresence>
            {searchResults.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-light mb-6 text-[#14132C]">Nearby Locations</h3>
                {searchResults.map((location) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#A6D4FA]/20"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div 
                        className="h-48 md:h-auto bg-cover bg-center"
                        style={{ backgroundImage: `url(${location.image})` }}
                      />
                      <div className="md:col-span-2 p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="text-xl font-medium text-[#14132C] mb-1">{location.name}</h4>
                            <p className="text-[#14132C]/70">{location.city}, {location.state}</p>
                          </div>
                          <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#A6D4FA]/20 text-[#14132C]">
                            {location.distance} miles away
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {location.access === 'public' ? (
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#A6D4FA]/30 text-[#14132C] text-sm rounded-full">
                              <MapPin size={12} /> Public access
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF9178]/30 text-[#14132C] text-sm rounded-full">
                              <MapPin size={12} /> Members venue
                            </span>
                          )}
                          {location.hours === '24/7' && (
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFD3A]/30 text-[#14132C] text-sm rounded-full">
                              <Clock size={12} /> 24/7 location
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* No Results Fallback */}
          <AnimatePresence>
            {showNoResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-12 rounded-2xl bg-gradient-to-br from-white to-[#A6D4FA]/10 border-2 border-dashed border-[#A6D4FA]"
              >
                <h3 className="text-2xl font-light mb-4 text-[#14132C]">
                  Can't find a Tranga Pod near you?
                </h3>
                <p className="text-[#14132C]/80 mb-8 max-w-md mx-auto">
                  We place pods based on where people actually want them. Tell us where you'd like to see Tranga next.
                </p>
                <motion.button
                  onClick={() => setShowLocationForm(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-[#14132C] text-white hover:bg-[#14132C]/90 transition-all"
                >
                  Suggest a Location
                </motion.button>
                <p className="text-sm text-[#14132C]/60 mt-4">
                  Your suggestion helps us choose our next locations.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Location Form Modal */}
      <AnimatePresence>
        {showLocationForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setShowLocationForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-md w-full p-6 md:p-8"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-light text-[#14132C]">
                  Where should Tranga go next?
                </h3>
                <button
                  onClick={() => setShowLocationForm(false)}
                  className="p-2 hover:bg-[#A6D4FA]/10 rounded-full"
                >
                  <X size={20} className="text-[#14132C]" />
                </button>
              </div>
              
              <p className="text-[#14132C]/80 mb-6">
                We install pods where there's real demand. Share a location and help shape where Tranga appears next.
              </p>
              
              <form onSubmit={handleSubmitLocation} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="City *"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-[#A6D4FA] focus:border-[#FF9178] focus:ring-2 focus:ring-[#FF9178]/20 outline-none"
                    />
                  </div>
                  <div>
                    <select
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-[#A6D4FA] focus:border-[#FF9178] focus:ring-2 focus:ring-[#FF9178]/20 outline-none"
                    >
                      <option value="">State *</option>
                      <option value="CA">California</option>
                      <option value="NY">New York</option>
                      <option value="TX">Texas</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <select
                    value={formData.venueType}
                    onChange={(e) => setFormData({...formData, venueType: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-[#A6D4FA] focus:border-[#FF9178] focus:ring-2 focus:ring-[#FF9178]/20 outline-none"
                  >
                    <option value="">Venue Type (Optional)</option>
                    <option value="gym">Gym / Fitness studio</option>
                    <option value="hotel">Hotel</option>
                    <option value="campus">University / Campus</option>
                    <option value="apartment">Apartment building</option>
                    <option value="nightlife">Nightlife / Bar / Lounge</option>
                    <option value="office">Workplace / Office</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Venue name (if known)"
                    value={formData.venueName}
                    onChange={(e) => setFormData({...formData, venueName: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-[#A6D4FA] focus:border-[#FF9178] focus:ring-2 focus:ring-[#FF9178]/20 outline-none"
                  />
                </div>
                
                <div>
                  <textarea
                    placeholder="Why would Tranga work well here? (Optional)"
                    value={formData.note}
                    onChange={(e) => setFormData({...formData, note: e.target.value})}
                    rows="3"
                    className="w-full px-4 py-3 rounded-lg border border-[#A6D4FA] focus:border-[#FF9178] focus:ring-2 focus:ring-[#FF9178]/20 outline-none"
                  />
                </div>
                
                <div className="flex gap-3 pt-4">
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setShowLocationForm(false)}
                    className="flex-1 border-2 border-[#A6D4FA] text-[#14132C] py-3 rounded-lg hover:bg-[#A6D4FA]/10 transition-all"
                  >
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-[#FF9178] text-[#14132C] py-3 rounded-lg hover:bg-[#FF9178]/90 transition-all font-medium"
                  >
                    Submit Location
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default FindPod;