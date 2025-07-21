'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#1a0007] via-[#2d0b13] to-[#E60023]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">Empowering Access Through Rentals</h2>
          <p className="text-lg text-white/80 mb-10">RentAll is a proudly African-built platform bringing flexible access to everyday needs — from transportation to housing and services. We're here to support local businesses, unlock income, and simplify life through smart rentals.</p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-[#E60023] mb-2">5</div>
              <p className="text-white/70">Countries Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-[#E60023] mb-2">50K+</div>
              <p className="text-white/70">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-[#E60023] mb-2">10K+</div>
              <p className="text-white/70">Listings</p>
            </div>
          </div>
          <a href="#" className="inline-block mt-10 bg-[#E60023] hover:bg-[#b8001a] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition text-lg">
            Learn more →
          </a>
        </div>
      </div>
    </section>
  );
}
