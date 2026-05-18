// app/page.tsx
import Image from 'next/image';
import {
  PaintBrushIcon,
  TruckIcon,
  ShieldCheckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              5 Star Auto Paints
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Premium Quality Automotive Paints & Supplies for Professional Garages
            </p>
            <a
              href="#contact"
              className="bg-yellow-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition duration-300 inline-block"
            >
              Get a Quote Today
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose 5 Star Auto Paints?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <PaintBrushIcon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality Paints</h3>
              <p className="text-gray-600">High-grade automotive paints that deliver perfect finishes every time</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TruckIcon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable delivery to garages across the city</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheckIcon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Grade</h3>
              <p className="text-gray-600">Trusted by leading garages and body shops for consistent results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Our Premium Products</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Complete range of automotive painting supplies for professional garages
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={"/image1.png"}
                  alt="Premium Base Coat Paint"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Premium Base Coat</h3>
                <p className="text-gray-600 text-sm">High-quality base coat paints in various colors</p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={"/image2.png"}
                  alt="Clear Coat Paint"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Premium Clear Coat</h3>
                <p className="text-gray-600 text-sm">High-gloss clear coat for lasting protection</p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={"/image3.png"}
                  alt="Automotive Primer"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Professional Primer</h3>
                <p className="text-gray-600 text-sm">High-build primer for perfect surface preparation</p>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={"/image4.png"}
                  alt="Body Filler"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Body Filler</h3>
                <p className="text-gray-600 text-sm">Premium body filler for perfect surface repair</p>
              </div>
            </div>
          </div>

          {/* Accessories */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-center mb-8">Painting Accessories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-medium">Sandpaper</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-medium">Masking Tape</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-medium">Spray Guns</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <p className="font-medium">Polishing Compounds</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-white">Watch Our Work in Action</h2>
          <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            See how our premium paints and supplies deliver perfect finishes for professional garages
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%]">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  controls
                  poster="/video-thumbnail-1.jpg"
                  muted={true}
                >
                  <source src="/videos/video-1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4 bg-gray-800">
                <h3 className="text-white font-semibold text-lg">Professional Paint Application</h3>
                <p className="text-gray-300 text-sm">Expert paint application technique for flawless finish</p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%]">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  controls
                  poster="/video-thumbnail-2.jpg"
                  muted={true}
                >
                  <source src="/videos/video-2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4 bg-gray-800">
                <h3 className="text-white font-semibold text-lg">Precision Color Matching</h3>
                <p className="text-gray-300 text-sm">Advanced color matching technology for perfect results</p>
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%]">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  controls
                  poster="/video-thumbnail-3.jpg"
                  muted={true}
                >
                  <source src="/videos/video-4.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4 bg-gray-800">
                <h3 className="text-white font-semibold text-lg">High-Gloss Clear Coat</h3>
                <p className="text-gray-300 text-sm">Applying premium clear coat for lasting shine and protection</p>
              </div>
            </div>

            {/* Video 4 */}
            <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
              <div className="relative pb-[56.25%]">
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  controls
                  poster="/video-thumbnail-4.jpg"
                  muted={true}
                >
                  <source src="/videos/video-3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4 bg-gray-800">
                <h3 className="text-white font-semibold text-lg">Perfect Final Finish</h3>
                <p className="text-gray-300 text-sm">Showcasing the stunning final results after completion</p>
              </div>
            </div>
          </div>

          {/* Video Note */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              📱 Videos captured in real workshop conditions using mobile devices
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About 5 Star Auto Paints</h2>
              <p className="text-gray-600 mb-4">
                With over 15 years of experience in the automotive paint industry, 5 Star Auto Paints has been the trusted supplier for garages and body shops across the region. We understand the importance of quality paints and supplies in delivering perfect finishes.
              </p>
              <p className="text-gray-600 mb-4">
                Our extensive inventory includes all major brands and color formulations, ensuring that your garage never has to turn away a job due to lack of supplies. We pride ourselves on our quick delivery service and technical expertise.
              </p>
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-3">Our Commitment:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> 100% Genuine Products
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Same Day Delivery
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Color Matching Service
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Technical Support
                  </li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src={"/image.png"}
                alt="5 Star Auto Paints Shop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <PhoneIcon className="h-8 w-8 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-blue-200">+971 52 7761 643</p>
            </div>

            <div className="text-center">
              <EnvelopeIcon className="h-8 w-8 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-blue-200">fivestarautopaint.ae@gmail.com</p>
            </div>

            <div className="text-center">
              <MapPinIcon className="h-8 w-8 mx-auto mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-blue-200">M5 Musaffah - Abu Dhabi</p>
              <p className="text-blue-200">United Arab Emirates</p>
            </div>
          </div>

          {/* Business Hours */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">Business Hours</h3>
            <div className="inline-block bg-blue-800 rounded-lg p-6">
              <p className="mb-2">Monday - Thursday: 8:00 AM - 7:00 PM</p>
              <p className="mb-2">Saturday - Sunday: 8:00 AM - 7:00 PM</p>
              <p>Friday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="h-96 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM0DCsDAnMCI!5e0!3m2!1sen!2sus!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="absolute inset-0"
          title="Map location"
        ></iframe>
      </section> */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">© 2024 5 Star Auto Paints. All rights reserved.</p>
          <p className="text-gray-400 text-sm">
            Premium automotive paints and supplies for professional garages
          </p>
        </div>
      </footer>
    </>
  );
}