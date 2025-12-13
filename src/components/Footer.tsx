import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>info@ryanmichaelwaterworks.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Local service area</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Emergency Repairs</li>
              <li>Water Heater Service</li>
              <li>Pipe Repairs</li>
              <li>Slab Leak Solutions</li>
              <li>Maintenance</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Friday: 7am - 6pm</li>
              <li>Saturday: 8am - 4pm</li>
              <li>Emergency: 24/7 Available</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ryan Michael Waterworks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
