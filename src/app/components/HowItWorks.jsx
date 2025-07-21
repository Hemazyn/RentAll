'use client';

export default function HowItWorks() {
  const guestSteps = ['Browse & search what you need near you', 'Book instantly or send a request', 'Pay securely with mobile money or bank transfer', 'Enjoy, return, and rate the experience'];

  const vendorSteps = ['List your item or service in minutes', 'Set your price, schedule, and availability', 'Accept bookings and receive payments directly'];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-[#1a0007] via-[#2d0b13] to-[#E60023]/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-14">How RentAll Works</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-[#E60023]">
              Guest Mode <span className="text-white/70">(Renting)</span>
            </h3>
            <ol className="space-y-6">
              {guestSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-9 h-9 bg-[#E60023] text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg shadow-lg">{index + 1}</span>
                  <span className="text-white/90 text-base">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-6 text-[#E60023]">
              Vendor Mode <span className="text-white/70">(Earning)</span>
            </h3>
            <ol className="space-y-6">
              {vendorSteps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-9 h-9 bg-[#E60023] text-white rounded-full flex items-center justify-center font-bold mr-4 text-lg shadow-lg">{index + 1}</span>
                  <span className="text-white/90 text-base">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <p className="text-center mt-12 text-lg text-white/90">✅ Switch between Guest and Vendor modes anytime.</p>
      </div>
    </section>
  );
}