import React from 'react';
import { Star, Users, Quote } from 'lucide-react';
import testimonialImage from '@/assets/luxury_mansion_exterior.png';

const ClientTestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Chennai",
      rating: 5,
      testimonial: "Excellent service! Found my dream home through Kavin Real Estate. The team was very professional and helped me throughout the entire buying process. Highly recommended!",
      property: "3BHK Apartment in Anna Nagar"
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Coimbatore",
      rating: 5,
      testimonial: "Smooth and hassle-free experience. They understood my requirements perfectly and showed me properties that matched exactly what I was looking for. Great customer service!",
      property: "2BHK Villa in T Nagar"
    },
    {
      id: 3,
      name: "Mohan Reddy",
      location: "Bangalore",
      rating: 5,
      testimonial: "Professional approach and extensive property portfolio. Sold my commercial property through them at the best price. Transparent dealings and expert guidance throughout.",
      property: "Commercial Space in Whitefield"
    },
    {
      id: 4,
      name: "Ananya Patel",
      location: "Hyderabad",
      rating: 5,
      testimonial: "Found the perfect rental apartment for my family. The team was very patient and showed me multiple options until I found exactly what I wanted. Thank you!",
      property: "2BHK Rental in Jubilee Hills"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Testimonials */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
              Voices of Our
              <span className="text-primary block">Valued Clients</span>
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Hear what our satisfied customers have to say about their experience with us
            </p>

            <div className="space-y-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Client Info */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location} • {testimonial.property}</div>
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      <Quote className="w-4 h-4" />
                      <span className="text-sm font-semibold">Verified</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={testimonialImage}
                alt="Client Testimonials"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none"></div>
              
              {/* Floating Quote Icon */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl">
                <Quote className="w-10 h-10 text-primary" />
              </div>

              {/* Floating Stats */}
              <div className="absolute bottom-8 left-8 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  <div>
                    <div className="text-2xl font-bold text-gray-900">5000+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
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

export default ClientTestimonialsSection;
