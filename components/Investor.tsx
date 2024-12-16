const customers = [
  { id: 1, name: "John Doe", rating: 4, review: "Great service and support!" },
  { id: 2, name: "Jane Smith", rating: 5, review: "Amazing experience!" },
  { id: 3, name: "Robert Johnson", rating: 3, review: "Good but room for improvement." },
  { id: 4, name: "Emily Brown", rating: 5, review: "Exceeded expectations!" },
  { id: 5, name: "Michael Lee", rating: 4, review: "Very satisfied with the results." },
  { id: 6, name: "Sarah Davis", rating: 2, review: "Not what I expected." },
  { id: 7, name: "David Wilson", rating: 5, review: "Highly recommended!" },
  { id: 8, name: "Lisa Taylor", rating: 4, review: "Professional and reliable." },
];

export default function CustomerRatings() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Customer Ratings</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="relative group flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {/* Avatar with initials */}
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold mb-4">
              {customer.name.split(" ").map((n) => n[0]).join("")}
            </div>

            {/* Customer details */}
            <h3 className="font-semibold text-lg text-gray-800">{customer.name}</h3>
            
            {/* Star Rating */}
            <div className="flex items-center justify-center mt-2">
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${
                    i < customer.rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927a1 1 0 011.902 0l1.26 3.889a1 1 0 00.95.691h4.1a1 1 0 01.592 1.806l-3.32 2.416a1 1 0 00-.364 1.118l1.26 3.889a1 1 0 01-1.538 1.118L10 13.348l-3.32 2.416a1 1 0 01-1.538-1.118l1.26-3.889a1 1 0 00-.364-1.118L2.72 9.313a1 1 0 01.592-1.806h4.1a1 1 0 00.95-.691l1.26-3.889z" />
                </svg>
              ))}
            </div>

            {/* Review on hover */}
            <div className="absolute inset-0 bg-gray-800 bg-opacity-90 text-white p-4 flex justify-center items-center text-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-sm">{customer.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
