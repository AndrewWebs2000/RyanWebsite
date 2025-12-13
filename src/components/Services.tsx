import { CheckCircle } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      title: 'Emergency Plumbing Repairs',
      description: 'We respond fast to burst pipes, major leaks, and other urgent plumbing emergencies. Available 24/7.',
      details: ['Burst pipe repair', 'Major leak detection', 'Quick response time', 'Same-day solutions'],
    },
    {
      title: 'Pipe Repairs & Rerouting',
      description: 'From small leaks to complete rerouting projects, we handle all pipe issues with precision.',
      details: ['Leak repair', 'Pipe rerouting', 'Corrosion solutions', 'Code compliance'],
    },
    {
      title: 'Slab Leak Solutions',
      description: 'Specialized slab leak detection and repair services to protect your foundation.',
      details: ['Leak detection', 'Trenchless repair', 'Overhead rerouting', 'Minimal disruption'],
    },
    {
      title: 'Water Heater Service',
      description: 'Professional repair and replacement of traditional and tankless water heaters.',
      details: ['Tank repair', 'Tankless installation', 'Maintenance service', 'Energy-efficient options'],
    },
    {
      title: 'Toilet Repair & Unclogging',
      description: 'From running toilets to stubborn clogs, we fix them quickly and efficiently.',
      details: ['Toilet repair', 'Clog removal', 'Drain cleaning', 'Prevention tips'],
    },
    {
      title: 'Residential Plumbing Maintenance',
      description: 'Regular maintenance to keep your plumbing system running smoothly and prevent costly repairs.',
      details: ['Routine inspections', 'Preventive care', 'System optimization', 'Problem identification'],
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-blue-100">
            Complete plumbing solutions for residential and light commercial needs
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Need Help With Your Plumbing?
          </h3>
          <p className="text-xl text-gray-700 mb-8">
            Contact us for a consultation or to schedule your service today.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
          >
            Request Service
          </button>
        </div>
      </section>
    </div>
  );
}
