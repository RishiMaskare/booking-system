import React from "react";
import ProtectedRoute from "@/Components/ProtectedRoute";
import { MapPin, ChevronDown } from "lucide-react";

const BookingCard = ({
  id,
  name,
  dateRange,
  price,
  location,
  buttonText,
  img,
}) => (
  <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col gap-4">
    <img
      src={img}
      alt={name}
      className="w-full h-40 object-cover rounded-lg"
    />
    <div className="text-lg font-bold text-slate-800">{id}</div>
    <div className="text-sm text-slate-500">{dateRange}</div>
    <div className="text-lg font-bold text-slate-800">{price}</div>
    <div className="text-sm text-slate-500 flex items-center gap-1">
      <MapPin size={16} /> {location}
    </div>
    <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg">
      {buttonText}
    </button>
  </div>
);

export default function ManageBookingsPage() {
  return (
    <ProtectedRoute>
      <div className="bg-[#F8FAFC] min-h-screen p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-black text-slate-900">My Bookings</h1>
              <p className="text-slate-500">View and Manage Your Rental Bookings.</p>
            </div>
            <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
              <MapPin size={16} />
              <span>Nagpur | March 22, 2026</span>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <button className="bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg">
              Active & Upcoming
            </button>
            <button className="bg-white text-slate-800 font-bold py-2 px-4 rounded-lg border border-slate-300">
              Past Bookings
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <BookingCard
              id="BK-100234"
              name="John Deere 6R Tractor"
              dateRange="March 25 - April 10, 2026"
              price="$180 / day"
              location="Nagpur, Maharashtra"
              buttonText="Manage Booking"
              img="/john.png"
            />
            <BookingCard
              id="BK-100235"
              name="Mahindra 475 DI XP Plus"
              dateRange="March 25 - April 10, 2026"
              price="$180 / day"
              location="Nagpur, Maharashtra"
              buttonText="View Details"
              img="/mah-475.png"
            />
            <BookingCard
              id="BK-100236"
              name="Main Tractor"
              dateRange="March 25 - April 10, 2026"
              price="$180 / day"
              location="Nagpur, Maharashtra"
              buttonText="Manage Booking"
              img="/main-tractor.png"
            />
            <BookingCard
              id="BK-100237"
              name="Sonalika DI 745 III"
              dateRange="March 25 - April 10, 2026"
              price="$180 / day"
              location="Nagpur, Maharashtra"
              buttonText="View Details"
              img="/sonalika.png"
            />
            <BookingCard
              id="BK-100238"
              name="Tractor 2"
              dateRange="March 25 - April 10, 2026"
              price="$140 / day"
              location="Nagpur, Maharashtra"
              buttonText="Manage Booking"
              img="/tractor-2.png"
            />
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
