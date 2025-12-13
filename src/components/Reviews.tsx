interface ReviewsProps {
  onNavigate: (page: string) => void;
}

export function Reviews({ onNavigate }: ReviewsProps) {
  const reviews = [
    {
      name: 'Troy Briggs',
      rating: 5,
      text: 'Had pipe break underneath the slab rerouted all piping overhead. Fantastic job, very timely, done efficiently, and priced great compared to others. Would highly recommend.',
    },
    {
      name: 'Jonathan Nathanson',
      rating: 5,
      text: 'Ryan did an excellent job replacing our home water heater. He was very communicative throughout the process and even found us a great deal on an upgraded professional-grade unit. His experience really shows.',
    },
    {
      name: 'Debbie Clark',
      rating: 5,
      text: 'I submitted a request for help with a clogged toilet and Ryan contacted me within minutes and arrived within half an hour. Even though his day was done, he still came out and fixed the issue.',
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h2>
          <p className="text-xl text-blue-100">
            Real feedback from homeowners we've helped
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-gray-50 p-10 rounded-lg border-l-4 border-blue-600">
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{review.name}</h3>
                    <div className="flex gap-1 mt-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-2xl text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-blue-50 p-12 rounded-lg text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Experience the Difference
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              Join hundreds of satisfied homeowners who trust Ryan Michael Waterworks for their plumbing needs.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors"
            >
              Request Service Today
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Customers Choose Us</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <p className="text-gray-700">Available for emergencies anytime</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30 Min</div>
              <p className="text-gray-700">Average response time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">Fair</div>
              <p className="text-gray-700">Competitive, transparent pricing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
