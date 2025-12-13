import { Phone, Zap, ThumbsUp, Clock } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Fast & Reliable Plumbing Service
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Emergency repairs, installations, and maintenance. Experienced, fair pricing, quick response.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:5551234567"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
            >
              Call Now: (555) 123-4567
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors"
            >
              Request Service
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Zap className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Fast Response</h4>
              <p className="text-gray-700">Quick arrival times, even for emergencies</p>
            </div>
            <div className="text-center">
              <ThumbsUp className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Experienced</h4>
              <p className="text-gray-700">Trained professionals with proven expertise</p>
            </div>
            <div className="text-center">
              <Clock className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Fair Pricing</h4>
              <p className="text-gray-700">Competitive rates without surprises</p>
            </div>
            <div className="text-center">
              <Phone className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">24/7 Available</h4>
              <p className="text-gray-700">Emergency service anytime you need it</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Emergency Repairs</h4>
              <p className="text-gray-700">Burst pipes, leaks, and urgent plumbing problems fixed fast.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Water Heater Service</h4>
              <p className="text-gray-700">Repair and replacement of water heaters, tankless options available.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-blue-600 mb-3">Slab Leaks</h4>
              <p className="text-gray-700">Professional detection and rerouting for slab leak solutions.</p>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={() => onNavigate('services')}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Customers Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Had pipe break underneath the slab rerouted all piping overhead. Fantastic job, very timely, done efficiently, and priced great compared to others."
              </p>
              <p className="font-bold text-gray-900">- Troy Briggs</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Ryan did an excellent job replacing our home water heater. Very communicative and found us a great deal on an upgraded unit."
              </p>
              <p className="font-bold text-gray-900">- Jonathan Nathanson</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => onNavigate('reviews')}
              className="text-blue-600 font-bold hover:underline"
            >
              Read More Reviews
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
