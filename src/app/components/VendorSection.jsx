'use client';

export default function VendorSection() {
  return (
    <section id="vendor" className="py-20 bg-gradient-to-br from-[#1a0007] via-[#2d0b13] to-[#E60023]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center mb-10">Become a Vendor</h2>
          <div className="bg-[#E60023]/20 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-2xl text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Turn Your Assets into Income</h3>
            <p className="text-lg mb-10 opacity-90">Join thousands of vendors earning extra income by renting out their cars, apartments, equipment, or offering services on RentAll.</p>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              <div className="text-center">
                <div className="text-4xl font-extrabold mb-2 text-white">0%</div>
                <p className="text-base opacity-90">Listing Fees</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold mb-2 text-white">24hr</div>
                <p className="text-base opacity-90">Payment Transfer</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extrabold mb-2 text-white">100%</div>
                <p className="text-base opacity-90">Control Your Pricing</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#E60023] px-7 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors text-lg shadow">Start Earning Today</button>
              <button className="border-2 border-white text-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-[#E60023] transition-all text-lg shadow">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}