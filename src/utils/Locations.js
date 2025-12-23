// Mock location data for development
export const mockLocations = [
  {
    id: 'EQ-ATL-001',
    venueName: 'Equinox Midtown',
    address: '123 Peachtree St',
    city: 'Atlanta',
    state: 'GA',
    zip: '30309',
    latitude: 33.7846,
    longitude: -84.3851,
    distance: 1.2,
    accessType: 'members',
    hours: '24/7',
    venueType: 'gym',
    status: 'active',
    products: ['Fragrance Pod', 'Convenience Pod'],
    lastUpdated: '2024-01-15'
  },
  {
    id: 'MIA-T2-001',
    venueName: 'Miami Airport Terminal D',
    address: '2100 NW 42nd Ave',
    city: 'Miami',
    state: 'FL',
    zip: '33126',
    latitude: 25.7959,
    longitude: -80.2871,
    distance: 0.5,
    accessType: 'public',
    hours: '24/7',
    venueType: 'airport',
    status: 'active',
    products: ['Fragrance Pod'],
    lastUpdated: '2024-01-10'
  },
  {
    id: 'UC-AUS-001',
    venueName: 'University Commons',
    address: '456 College Blvd',
    city: 'Austin',
    state: 'TX',
    zip: '78705',
    latitude: 30.2849,
    longitude: -97.7341,
    distance: 2.1,
    accessType: 'public',
    hours: '6AM-12AM',
    venueType: 'campus',
    status: 'active',
    products: ['Convenience Pod'],
    lastUpdated: '2024-01-05'
  }
];

// Simulate search by ZIP code
export const searchByZipCode = (zipCode) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = mockLocations.filter(location => 
        location.zip.startsWith(zipCode.substring(0, 3))
      );
      resolve(results);
    }, 300);
  });
};

// Get all available states
export const getAvailableStates = () => {
  const states = mockLocations.map(loc => loc.state);
  return [...new Set(states)].sort();
};

// Calculate distance between coordinates (simplified)
export const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 3959; // Earth's radius in miles
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return Math.round(R * c * 10) / 10; // Round to 1 decimal
};

// Get location types for filter dropdown
export const locationTypes = [
  { value: 'all', label: 'All Locations' },
  { value: 'gym', label: 'Gym / Fitness Studio' },
  { value: 'hotel', label: 'Hotel' },
  { value: 'campus', label: 'University / Campus' },
  { value: 'airport', label: 'Airport' },
  { value: 'apartment', label: 'Apartment Building' },
  { value: 'nightlife', label: 'Nightlife / Bar / Lounge' },
  { value: 'office', label: 'Workplace / Office' },
  { value: 'other', label: 'Other' }
];