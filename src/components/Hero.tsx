import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-500 font-display mb-6">
              Enterprise CFO Services for 
              <span className="text-gradient"> African SMEs</span>
            </h1>
            <p className="text-xl text-dark-600 mb-8 leading-relaxed">
              Access professional financial expertise with swift, reliable CFO services. 
              Get financial statements, performance reporting, tax preparation, and strategic guidance 
              tailored for Small and Medium Enterprises across Africa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-started" className="btn-primary text-center">
                Get Started Today
              </Link>
              <Link href="/services" className="btn-outline text-center">
                Explore Services
              </Link>
            </div>
            <div className="mt-8 flex items-center space-x-6 text-sm text-dark-500">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Nigeria Focus
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Enterprise Grade
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Swift Delivery
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right">
            <div className="relative">
              {/* Hero Image Placeholder */}
              <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-large overflow-hidden mb-6">
                <Image 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Professional team working on financial analysis" 
                  width={800}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Dashboard Preview */}
              <div className="bg-white rounded-2xl shadow-large p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-primary-500">Financial Dashboard</h3>
                    <span className="text-success-500 text-sm font-medium">Live</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary-50 p-3 rounded-lg">
                      <p className="text-sm text-dark-600">Revenue</p>
                      <p className="text-xl font-bold text-primary-500">₦2.4M</p>
                    </div>
                    <div className="bg-secondary-50 p-3 rounded-lg">
                      <p className="text-sm text-dark-600">Profit</p>
                      <p className="text-xl font-bold text-secondary-500">₦480K</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;