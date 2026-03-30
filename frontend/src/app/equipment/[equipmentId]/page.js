import React from "react";
export default function EquipmentDetailPage({ params }) {
  // In a real app, you would use params.equipmentId to fetch data from an API/Database
  const id = params.equipmentId;

  return (
    <div className="min-h-screen bg-[#FDFCF9] p-4 md:p-8 text-slate-800">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 max-w-6xl mx-auto">
        <span className="text-yellow-300">⬢</span> Home
        <span>›</span> Browse Equipment
        <span>›</span>{" "}
        <span className="text-gray-800 font-medium">
          John Deere 5050D Tractor
        </span>
      </nav>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content (Left + Center) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Top Section: Image & Basic Info */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden aspect-4/3 bg-gray-100">
                <img src="../main-tractor.png" alt="Main Tractor" />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {/* Left Side View */}
                <div className="aspect-square rounded-lg bg-gray-200 overflow-hidden border-2 border-transparent hover:border-yellow-500 cursor-pointer">
                  <img
                    src="../tractor-1.png"
                    alt="Left side view"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Front View */}
                <div className="aspect-square rounded-lg bg-gray-200 overflow-hidden border-2 border-transparent hover:border-yellow-500 cursor-pointer">
                  <img
                    src="../tractor-2.png"
                    alt="Front view"
                    className="object-cover h-full w-full"
                  />
                </div>

                {/* Tilted Back View */}
                <div className="aspect-square rounded-lg bg-gray-200 overflow-hidden border-2 border-transparent hover:border-yellow-500 cursor-pointer">
                  <img
                    src="../tractor-3.png"
                    alt="Back view"
                    className="object-cover h-full w-full"
                  />
                </div>
              </div>
            </div>

            {/* Price & Primary CTA */}
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-2xl font-bold mb-4">
                  John Deere 5050D Tractor
                </h1>
                <div className="space-y-3 text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <span className="text-yellow-500">📍</span> Location:
                    Varanasi, UP
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-yellow-500">👤</span> Owner: Farmer A
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-yellow-500">✉️</span> Manufactured:
                    2018
                  </p>
                </div>
                <div className="mt-6 text-2xl font-bold">
                  ₹ 750{" "}
                  <span className="text-sm text-gray-400 font-normal">
                    / hour
                  </span>
                </div>
              </div>

              <div className="space-y-4 mt-6">
                <button className="w-full bg-primary-accent hover:bg-primary-accent-dark text-text-primary font-bold py-3 rounded-xl transition-all shadow-md">
                  Book Now
                </button>
                <div className="bg-[#FFF9E5] border border-yellow-100 p-3 rounded-xl">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-800">
                    <span className="text-green-600 bg-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] border border-green-200">
                      ✓
                    </span>
                    Verified on Blockchain
                  </div>
                  <p className="text-[10px] text-gray-400 mt-1">
                    Transaction ID: 0x39a1...f72d
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Equipment Analyzer Card */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="bg-[#FFB800] px-6 py-3 font-bold text-slate-900 flex items-center gap-2">
              <span className="text-xl">›</span> AI Equipment Analyzer
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Price Analysis</h3>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-500 bg-green-50 rounded-full p-1 text-xs">
                    ✓
                  </span>
                  <span className="font-semibold">Fair Price.</span> Matches
                  average market rate
                </div>
              </div>
              <div className="h-px bg-gray-100 w-full" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">
                  Condition Estimate
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <span className="text-green-500 bg-green-50 rounded-full p-1 text-xs">
                    ✓
                  </span>
                  <span className="font-semibold">Good Condition.</span>{" "}
                  Estimated usage: 1200 hours
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Details Table */}
<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
  <h3 className="font-bold text-gray-800 mb-4">Equipment Details</h3>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t pt-4">
    
    {/* Type */}
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <div className="w-5 h-5 bg-yellow-400 rounded flex items-center justify-center text-[10px] text-white font-bold">
        □ {/* Replace with <LayoutGrid size={14} /> if using Lucide */}
      </div>
      <span>
        Type: <span className="text-gray-900 font-medium">Tractor</span>
      </span>
    </div>

    {/* Power */}
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-[10px] text-white">
        ⚡ {/* Replace with <Zap size={14} /> if using Lucide */}
      </div>
      <span>
        Power: <span className="text-gray-900 font-medium">50 HP</span>
      </span>
    </div>

    {/* Usage */}
    <div className="flex items-center gap-2 text-sm text-gray-500">
      <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center text-[10px] text-white">
        🕒 {/* Replace with <Clock size={14} /> if using Lucide */}
      </div>
      <span>
        Usage Hours: <span className="text-gray-900 font-medium">1200 Hrs</span>
      </span>
    </div>

  </div>
</div>
        </div>

        {/* Sidebar: Owner Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-8">
            <h3 className="font-bold text-gray-800 mb-6">Owner Info</h3>
            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://i.pravatar.cc/150?u=farmerA"
                className="w-14 h-14 rounded-full border-2 border-yellow-100"
              />
              <div>
                <div className="font-bold text-lg text-gray-800">Farmer A</div>
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <span className="text-yellow-500">4.8 ★</span> (32 Reviews)
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <button className="w-full border border-gray-200 text-gray-600 font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition">
                View Profile
              </button>
              <button className="w-full bg-primary-accent text-text-primary font-bold py-2.5 rounded-xl hover:bg-primary-accent-dark transition">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Similar Equipment Footer */}
      <div className="max-w-6xl mx-auto mt-12 pb-12 px-4">
        <h3 className="text-xl font-bold text-gray-800 mb-6">
          Similar Equipment
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Mahindra 475 DI",
              price: 700,
              img: "../mah-475.png",
            },
            {
              name: "Sonalika RX 47",
              price: 750,
              img: "../sonalika.png",
            },
            {
              name: "New Holland 3630",
              price: 800,
              img: "../holland.png",
            },
          ].map((tractor, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow"
            >
              <div className="rounded-xl overflow-hidden h-40 bg-gray-100 mb-4">
                <img
                  src={tractor.img}
                  alt={tractor.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="font-bold text-gray-800">{tractor.name}</h4>
              <p className="text-lg font-bold text-gray-900 mt-1 mb-4">
                ₹ {tractor.price}{" "}
                <span className="text-xs text-gray-400 font-normal">
                  / hour
                </span>
              </p>
              <button className="w-full bg-primary-accent hover:bg-primary-accent-dark text-text-primary py-2 rounded-xl font-bold text-sm transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
