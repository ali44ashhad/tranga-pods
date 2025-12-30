import React from 'react'
import { motion } from 'framer-motion'

const WantTranga = () => {
  return (
    <div id="find-one" className="py-16 px-6 md:px-12 lg:px-24 bg-white">
       <motion.div 
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#A6D4FA]/20 to-[#FF9178]/10 rounded-2xl p-8 border border-[#A6D4FA]/30">
            <h3 className="text-2xl font-light mb-4 text-[#14132C]">Want a Tranga Pod Near You?</h3>
            <p className="text-[#14132C]/80 mb-6">
              Tell us where you'd like to see a Tranga Pod next. Your suggestions help us choose future locations across the U.S.
            </p>
            
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  required
                  placeholder="City, State or Venue name"
                  className="w-full px-4 py-3 rounded-lg border border-[#A6D4FA] focus:border-[#FF9178] focus:ring-2 focus:ring-[#FF9178]/20 outline-none transition-all bg-white/50"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 rounded-lg border border-[#A6D4FA] focus:border-[#FF9178] focus:ring-2 focus:ring-[#FF9178]/20 outline-none transition-all bg-white/50">
                  <option value="">Venue type (optional)</option>
                  <option value="gym">Gym / Fitness Studio</option>
                  <option value="hotel">Hotel</option>
                  <option value="campus">University / Campus</option>
                  <option value="apartment">Apartment Building</option>
                  <option value="other">Other</option>
                </select>
                
                <input
                  type="email"
                  placeholder="Email for updates (optional)"
                  className="w-full px-4 py-3 rounded-lg border border-[#A6D4FA] focus:border-[#FF9178] focus:ring-2 focus:ring-[#FF9178]/20 outline-none transition-all bg-white/50"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 rounded-lg font-medium text-lg transition-all bg-[#FF9178] text-[#14132C] hover:bg-[#FF9178]/90"
              >
                Submit Location Request
              </motion.button>
              
              <p className="text-sm text-[#14132C]/60 text-center">
                Submissions help guide future partnerships and location planning.
              </p>
            </form>
          </div>
        </motion.div>
    </div>
  )
}

export default WantTranga
