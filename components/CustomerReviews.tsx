// "use client"
// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// const reviews = [
//   {
//     id: 1,
//     name: "Ramnath Rai",
//     rating: 5,
//     comment: "Absolutely amazing service! The quality exceeded my expectations. Will definitely be coming back for more.",
//     avatar: "https://res.cloudinary.com/dgm05pdx1/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1736967522/Untitled_design_8_ccvreh.png"
//   },
//   {
//     id: 2,
//     name: "Ashish Jain",
//     rating: 4,
//     comment: "Great experience overall. The team was very professional and responsive to my needs.",
//     avatar: "https://res.cloudinary.com/dtezihsb8/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1738876093/Screenshot_2025-02-07_023625_yyuflk.png"
//   },
//   {
//     id: 3,
//     name: "Anshul Goel",
//     rating: 5,
//     comment: "I couldn't be happier with the results. The attention to detail was impressive!",
//     avatar: "https://res.cloudinary.com/dtezihsb8/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1738876271/Screenshot_2025-02-07_024047_tkkfgc.png"
//   },
//   {
//     id: 4,
//     name: "Manav Kumawat",
//     rating: 5,
//     comment: "Outstanding quality and customer service. They went above and beyond to meet my requirements.",
//     avatar: "/api/placeholder/40/40"
//   },
//   {
//     id: 5,
//     name: "Jayveer Singh",
//     rating: 4,
//     comment: "Very pleased with my purchase. The shipping was fast and the product is excellent.",
//     avatar: "https://res.cloudinary.com/dtezihsb8/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1738877261/Screenshot_2025-02-07_025706_e0w67l.png"
//   },
//   {
//     id: 6,
//     name: "Shivam Rai",
//     rating: 5,
//     comment: "Best service I've experienced in years. The team is knowledgeable and friendly.",
//     avatar: "https://res.cloudinary.com/dgm05pdx1/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1736967222/Untitled_design_6_u8rvkk.png"
//   },
//   {
//     id: 7,
//     name: "Karan Choudhry",
//     rating: 5,
//     comment: "Incredible value for money. The quality is outstanding and the service is top-notch.",
//     avatar: "https://res.cloudinary.com/dtezihsb8/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1738877484/Screenshot_2025-02-07_030051_l3p7wn.png"
//   },
//   {
//     id: 8,
//     name: "Rishabh Jain",
//     rating: 4,
//     comment: "Very satisfied with my experience. Would highly recommend to others!",
//     avatar: "/api/placeholder/40/40"
//   }
// ];

// const CustomerReviews = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);
  
//   const scroll = (direction:string) => {
//     const container = document.getElementById('reviews-container');
//     const scrollAmount = 300;
//     if (container) {
//       if (direction === 'left') {
//         container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
//       } else {
//         container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//       }
//     }
//   };

//   return (
//     <div className="w-full max-w-6xl mx-auto py-12 px-4 relative">
//       <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      
//       <div className="relative">
//         <button
//           onClick={() => scroll('left')}
//           className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-50"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
        
//         <div
//           id="reviews-container"
//           className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory hide-scrollbar"
//           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//         >
//           {reviews.map((review) => (
//             <div
//               key={review.id}
//               className="flex-none w-80 bg-white rounded-lg p-6 shadow-md snap-center"
//             >
//               <div className="flex items-center mb-4">
//                 <img
//                   src={review.avatar}
//                   alt={review.name}
//                   className="w-10 h-10 rounded-full mr-4"
//                 />
//                 <div>
//                   <h3 className="font-semibold">{review.name}</h3>
//                   <div className="flex">
//                     {[...Array(review.rating)].map((_, i) => (
//                       <Star
//                         key={i}
//                         className="w-4 h-4 fill-yellow-400 text-yellow-400"
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-600">{review.comment}</p>
//             </div>
//           ))}
//         </div>
        
//         <button
//           onClick={() => scroll('right')}
//           className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-50"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomerReviews;
"use client"
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const reviews = [
  {
    id: 1,
    name: "Ramnath Rai",
    rating: 5,
    comment: "Absolutely amazing service! The quality exceeded my expectations. Will definitely be coming back for more.",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 2,
    name: "Ashish Jain",
    rating: 4,
    comment: "Great experience overall. The team was very professional and responsive to my needs.",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 3,
    name: "Anshul Goel",
    rating: 5,
    comment: "I couldn't be happier with the results. The attention to detail was impressive!",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 4,
    name: "Manav Kumawat",
    rating: 5,
    comment: "Outstanding quality and customer service. They went above and beyond to meet my requirements.",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 5,
    name: "Jayveer Singh",
    rating: 4,
    comment: "Very pleased with my purchase. The shipping was fast and the product is excellent.",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 6,
    name: "Shivam Rai",
    rating: 5,
    comment: "Best service I've experienced in years. The team is knowledgeable and friendly.",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 7,
    name: "Karan Choudhry",
    rating: 5,
    comment: "Incredible value for money. The quality is outstanding and the service is top-notch.",
    avatar: "/api/placeholder/40/40"
  },
  {
    id: 8,
    name: "Rishabh Jain",
    rating: 4,
    comment: "Very satisfied with my experience. Would highly recommend to others!",
    avatar: "/api/placeholder/40/40"
  }
];

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStart) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchStart - currentTouch;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
      setTouchStart(0);
    }
  };

  const visibleReviews = isMobile 
    ? [reviews[currentIndex]]
    : [
        reviews[(currentIndex - 1 + reviews.length) % reviews.length],
        reviews[currentIndex],
        reviews[(currentIndex + 1) % reviews.length]
      ];

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-600">Real feedback from real customers</p>
        </div>

        <div className="relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}>
          <div className="flex justify-center items-center gap-4 transition-all duration-500">
            {visibleReviews.map((review, idx) => (
              <Card key={review.id} 
                className={`transform transition-all duration-500 ${
                  idx === (isMobile ? 0 : 1) 
                    ? 'scale-100 opacity-100 z-20' 
                    : 'scale-90 opacity-50 z-10'
                }`}>
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-blue-500 mb-4" />
                  <p className="text-gray-700 text-lg mb-6">{review.comment}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-xl font-bold text-gray-600">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.name}</h3>
                      <div className="flex gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg z-30 hover:bg-gray-50 transition-colors duration-200"
            aria-label="Previous review">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg z-30 hover:bg-gray-50 transition-colors duration-200"
            aria-label="Next review">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsAutoPlaying(false);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-blue-500 w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;