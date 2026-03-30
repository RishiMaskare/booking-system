"use client";

import React from 'react';
import { Search, MapPin, Star, Tractor, Settings2, Info } from 'lucide-react';

const AgriShareHome = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* --- HERO SECTION --- */}
      <section className="px-4 py-6">
        <div className="relative max-w-7xl mx-auto h-[500px] rounded-[2.5rem] overflow-hidden group">
          {/* Background Image */}
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000" 
            alt="Farm background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Hero Content */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              Rent Farm Equipment <span className="text-yellow-400">Easily.</span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-white font-medium mb-10 leading-relaxed">
              Find, compare, and book the machinery you need from trusted owners near you. 
              Hassle-free rentals for modern farming.
            </p>

            {/* Search Bar Container */}
            <div className="bg-white p-2 rounded-2xl flex flex-col md:flex-row items-center w-full max-w-3xl shadow-2xl">
              <div className="flex-1 flex items-center px-4 gap-3 w-full border-b md:border-b-0 md:border-r border-slate-100 py-3">
                <Search className="text-slate-400" size={20} />
                <input 
                  type="text" 
                  placeholder="Search for equipment, categories, or location..." 
                  className="w-full outline-none text-slate-700 text-sm font-medium"
                />
              </div>
              <div className="flex items-center gap-4 px-4 py-3 shrink-0">
                <Tractor className="text-slate-400 cursor-pointer hover:text-green-600 transition-colors" size={20} />
                <MapPin className="text-slate-400 cursor-pointer hover:text-green-600 transition-colors" size={20} />
                <button className="bg-[#FFD700] hover:bg-yellow-400 text-slate-900 font-black px-6 py-3 rounded-xl transition-all active:scale-95 shadow-md">
                  Search Equipment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED EQUIPMENT --- */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-black mb-8 text-slate-800">Featured Equipment</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <EquipmentCard 
            title="John Deere 6R Tractor"
            price="180"
            location="Nagpur, Maharashtra (1.2 km)"
            rating="4.9"
            img="./john.png"
          />
          <EquipmentCard 
            title="New Holland CR8.90 Harvester"
            price="650"
            location="Akola, Maharashtra (45 km)"
            rating="4.9"
            img="./holland.png"
          />
          <EquipmentCard 
            title="CLAAS Quadrant Baler"
            price="220"
            location="Wardha, Maharashtra (28 km)"
            rating="4.9"
            img="./class.png"
          />
          <EquipmentCard 
            title="Massey Ferguson MF 8S"
            price="240"
            location="Yavatmal, Maharashtra (32 km)"
            rating="4.9"
            img="./massey.png"
          />
        </div>
      </section>

      {/* --- BROWSE BY CATEGORIES --- */}
      <section className="max-w-7xl mx-auto px-6 py-12 mb-10">
        <h2 className="text-3xl font-black mb-8 text-slate-800">Browse by Categories</h2>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          <CategoryIcon label="Tractors" icon={<Tractor size={32} />} />
          <CategoryIcon label="Harvesters" icon="🚜" />
          <CategoryIcon label="Tillage" icon="⛏️" />
          <CategoryIcon label="Seeding" icon="🌱" />
          <CategoryIcon label="Hay & Forage" icon="🌾" />
          <CategoryIcon label="Trailers" icon="🚛" />
        </div>
      </section>
    </div>
  );
};

/* --- Sub-Components --- */

const EquipmentCard = ({ title, price, location, rating, img }) => (
  <div className="bg-white rounded-4xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden p-3">
    {/* Image Container */}
    <div className="h-44 rounded-2xl overflow-hidden mb-4 relative">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
    </div>
    
    <div className="px-2 pb-2">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-black text-slate-800 text-lg leading-tight w-2/3">{title}</h3>
        <div className="flex items-center gap-1">
          <Star className="fill-yellow-400 text-yellow-400" size={16} />
          <span className="font-bold text-slate-700 text-sm">{rating}</span>
        </div>
      </div>
      
      <div className="mb-4">
        <span className="text-xl font-black text-slate-900">${price}</span>
        <span className="text-slate-400 font-bold text-sm"> / day</span>
      </div>

      <div className="flex items-start gap-1 text-slate-400 text-[11px] font-bold mb-4 uppercase tracking-wider">
        <MapPin size={14} className="shrink-0" />
        <span>{location}</span>
      </div>

      <button className="w-full bg-[#FFD700] hover:bg-yellow-400 text-slate-900 font-black py-3 rounded-xl transition-colors shadow-sm active:scale-95">
        View Details
      </button>
    </div>
  </div>
);

const CategoryIcon = ({ label, icon }) => (
  <div className="flex flex-col items-center gap-3 group cursor-pointer">
    <div className="w-20 h-20 md:w-24 md:h-24 bg-white border border-slate-100 shadow-sm rounded-3xl flex items-center justify-center text-slate-800 text-3xl transition-all group-hover:shadow-md group-hover:bg-slate-50 group-hover:-translate-y-1">
      {icon}
    </div>
    <span className="font-black text-sm text-slate-700 tracking-tight">{label}</span>
  </div>
);

export default AgriShareHome;