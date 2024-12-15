const investors = [
  { id: 1, name: "John Doe", company: "Tech Ventures" },
  { id: 2, name: "Jane Smith", company: "Green Investments" },
  { id: 3, name: "Robert Johnson", company: "Urban Developers" },
  { id: 4, name: "Emily Brown", company: "Future Cities Fund" },
  { id: 5, name: "Michael Lee", company: "Innovation Capital" },
  { id: 6, name: "Sarah Davis", company: "Sustainable Growth" },
  { id: 7, name: "David Wilson", company: "Smart City Investments" },
  { id: 8, name: "Lisa Taylor", company: "Community Builders" },
];

export default function Investors() {
  return (
    <section className="py-20 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Investors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
        {investors.map((investor) => (
          <div
            key={investor.id}
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {/* Avatar with fallback */}
            <div className="w-24 h-24 flex items-center justify-center rounded-full bg-blue-500 text-white text-2xl font-bold mb-4">
              {investor.name.split(" ").map((n) => n[0]).join("")}
            </div>
            {/* Investor details */}
            <h3 className="font-semibold text-lg text-gray-800">{investor.name}</h3>
            <p className="text-sm text-gray-500">{investor.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
