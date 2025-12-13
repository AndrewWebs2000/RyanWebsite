import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { supabase } from '../utils/supabase';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service_type: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const { error: insertError } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (insertError) {
        setError('Failed to submit form. Please try again.');
        console.error('Supabase error:', insertError);
      } else {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service_type: '',
          message: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error('Error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-blue-100">
            Fast response, honest pricing, 24/7 available for emergencies
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:5551234567" className="text-blue-600 hover:underline text-lg">
                      (555) 123-4567
                    </a>
                    <p className="text-gray-700 mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <a href="mailto:info@ryanmichaelwaterworks.com" className="text-blue-600 hover:underline">
                      info@ryanmichaelwaterworks.com
                    </a>
                    <p className="text-gray-700 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Service Area</h4>
                    <p className="text-gray-700">Local area coverage</p>
                    <p className="text-gray-700 mt-1">Quick response times for all customers</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-4">Business Hours</h4>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Friday: 7am - 6pm</p>
                  <p>Saturday: 8am - 4pm</p>
                  <p className="font-semibold mt-3">Emergencies: 24/7</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Request Service</h3>

              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-semibold">
                    Thank you! We'll contact you shortly to confirm your service request.
                  </p>
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Service Type</label>
                  <select
                    name="service_type"
                    value={formData.service_type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="">Select a service...</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="water-heater">Water Heater Service</option>
                    <option value="pipe-repair">Pipe Repair</option>
                    <option value="slab-leak">Slab Leak Service</option>
                    <option value="toilet">Toilet Repair/Unclog</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-900 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Tell us about your plumbing issue..."
                    rows={4}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  {submitting ? 'Sending...' : 'Request Service'}
                </button>
              </form>

              <p className="text-sm text-gray-600 mt-4 text-center">
                We typically respond within 30 minutes during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
