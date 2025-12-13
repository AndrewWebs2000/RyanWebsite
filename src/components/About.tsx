import { Award, Users, Heart, Wrench } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export function About({ onNavigate }: AboutProps) {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Ryan Michael Waterworks</h2>
          <p className="text-xl text-blue-100">
            Local, owner-operated plumbing service you can trust
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <p className="text-lg text-gray-700 mb-4">
                Ryan Michael Waterworks was founded on a simple principle: honest, reliable plumbing service at fair prices. With years of hands-on experience and continuous training in the latest plumbing techniques, we bring expertise and integrity to every job.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                As a local, owner-operated business, we take pride in building lasting relationships with our customers. We believe in clear communication, doing the job right the first time, and treating your home with the same care we'd give our own.
              </p>
              <p className="text-lg text-gray-700">
                Whether it's an emergency repair at midnight or a scheduled maintenance visit, we're here to help when you need us most.
              </p>
            </div>
            <div className="bg-blue-50 p-12 rounded-lg">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Award className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Trained & Experienced</h4>
                    <p className="text-gray-700">Continuous training and years of hands-on experience in residential and commercial plumbing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Users className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Strong Communication</h4>
                    <p className="text-gray-700">We keep you informed every step of the way, explaining problems and solutions clearly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Heart className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Quality Workmanship</h4>
                    <p className="text-gray-700">We take pride in doing the job right, with attention to detail and pride in our work.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Wrench className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Local & Honest</h4>
                    <p className="text-gray-700">Owner-operated business that values honesty, reliability, and fair pricing.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to work with a plumbing company you can trust?
          </h3>
          <p className="text-xl text-gray-700 mb-8">
            Contact us today for fast, reliable service and fair pricing.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
