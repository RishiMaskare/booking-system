"use client";

import React from 'react';
import ProtectedRoute from "@/Components/ProtectedRoute";
import { 
  BarChart2, Calendar, Settings, 
  MapPin, CheckCircle2, XCircle, 
  TrendingUp, Trash2, LogOut, MinusCircle, AlertTriangle, 
  ChevronDown, History
} from 'lucide-react';

export default function ManageEquipmentsPage() {
  return (
    <ProtectedRoute>
      <div className="max-w-350 mx-auto w-full">
            
            {/* Page Title & Meta */}
            <div className="flex justify-between items-end">
              <div>
                <h1 className="text-3xl font-black text-slate-900 tracking-tight">Manage Your Equipment</h1>
                <p className="text-slate-400 font-bold mt-1 text-lg">My Listed Equipment</p>
              </div>
              <div className="flex items-center gap-2 text-slate-400 font-bold text-sm">
                <MapPin size={16} />
                <span>Nagpur | March 22, 2026</span>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-8 items-start">
              
              {/* --- LEFT COLUMN: OVERVIEW --- */}
              <div className="col-span-12 lg:col-span-3 space-y-6">
                <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 p-8">
                  <h3 className="text-xl font-black text-slate-800 mb-6">Overview</h3>
                  
                  <div className="space-y-4">
                    {/* Active Card */}
                    <div className="bg-[#ECFDF5] p-5 rounded-3xl border border-green-100 relative overflow-hidden group cursor-pointer">
                      <div className="flex items-center gap-2 text-green-700 font-black mb-1">
                        <CheckCircle2 size={18} /> Active Equipment
                      </div>
                      <div className="text-3xl font-black text-slate-900">20</div>
                      <p className="text-[10px] text-slate-500 font-bold mt-1 uppercase tracking-wider">Summary of 7 euhdays</p>
                    </div>

                    {/* Unavailable Card */}
                    <div className="bg-[#F8FAFC] p-5 rounded-3xl border border-slate-100 cursor-pointer">
                      <div className="flex items-center gap-2 text-red-500 font-black mb-1">
                        <XCircle size={18} /> Unavailable Items
                      </div>
                      <div className="text-3xl font-black text-slate-900">10</div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 space-y-6">
                    <div className="flex items-center gap-3 font-bold text-slate-600 cursor-pointer hover:text-slate-900">
                      <Calendar size={20} className="text-slate-400" /> Maintenance Calendar
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3 font-bold text-slate-600">
                        <BarChart2 size={20} className="text-slate-400" /> Listing Analytics
                      </div>
                      <div className="flex justify-between items-center px-2">
                        <div>
                          <div className="text-xl font-black text-slate-900 tracking-tight">1438</div>
                          <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest">Performance</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xl font-black text-slate-900 tracking-tight">39%</div>
                          <div className="text-[10px] text-slate-400 font-black uppercase tracking-widest text-right">Uttrirmance</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- RIGHT COLUMN: EQUIPMENT MANAGEMENT --- */}
              <div className="col-span-12 lg:col-span-9 space-y-6">
                <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden p-8">
                  <h3 className="text-2xl font-black text-slate-800 mb-8">Equipment Management</h3>
                  
                  {/* Table Header */}
                  <div className="grid grid-cols-12 px-6 py-3 bg-slate-50 rounded-2xl text-[11px] font-black text-slate-500 uppercase tracking-widest mb-6">
                    <div className="col-span-5 flex items-center gap-1">Item Name <ChevronDown size={14}/></div>
                    <div className="col-span-3">Status</div>
                    <div className="col-span-4 text-right pr-4">Manage Status</div>
                  </div>

                  {/* List Container */}
                  <div className="space-y-4">
                    <EquipmentRow 
                      name="John Deere 6R Tractor" 
                      status="Active" 
                      price="180" 
                      booking="7"
                      img="../john.png"
                    />
                    <div className="h-px bg-slate-100 mx-4" />
                    <EquipmentRow 
                      name="John Deere 6R Tractor" 
                      status="Rented" 
                      price="180" 
                      booking="7"
                      img="../john.png"
                    />
                  </div>
                </div>

                {/* --- FOOTER: DATA CONTROL --- */}
                <div className="bg-[#FEFCE8] border-2 border-yellow-200 p-8 rounded-[2.5rem] shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="text-orange-500" size={28} />
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">Data & Listing Control</h3>
                  </div>
                  
                  <div className="flex flex-wrap items-end gap-6">
                    <button className="bg-[#FFD700] hover:bg-yellow-400 text-slate-900 font-black px-10 py-4 rounded-2xl transition-all shadow-sm active:scale-95">
                      Logout
                    </button>
                    <button className="bg-[#FFD700] hover:bg-yellow-400 text-slate-900 font-black px-8 py-4 rounded-2xl flex items-center gap-2 transition-all shadow-sm active:scale-95">
                      <MinusCircle size={20} /> Deactivate All Listings
                    </button>
                    
                    <div className="flex flex-col gap-2">
                       <button className="bg-[#E11D48] hover:bg-red-700 text-white font-black px-8 py-4 rounded-2xl flex items-center gap-2 transition-all shadow-lg shadow-red-200 active:scale-95">
                        <Trash2 size={20} /> Delete All Equipment
                      </button>
                      <p className="text-[11px] text-slate-500 font-bold leading-tight max-w-55">
                        Permanently remove all your listed equipment. <span className="underline">This action cannot be undone.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ProtectedRoute>
  );
}

// --- ROW COMPONENT (Fixed for page.js) ---
function EquipmentRow({ name, status, price, booking, img }) {
  const isActive = status === "Active";

  return (
    <div className="grid grid-cols-12 items-center gap-6 p-4 rounded-[2rem] transition-all hover:bg-slate-50 group">
      {/* Product Image & Title */}
      <div className="col-span-5 flex gap-5">
        <div className="w-40 h-24 rounded-3xl overflow-hidden bg-slate-200 flex-shrink-0 shadow-md border-4 border-white">
          <img src={img} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="flex flex-col justify-center gap-1">
          <h4 className="font-black text-lg text-slate-800 leading-tight">{name}</h4>
          <span className={`text-[11px] w-fit px-3 py-1 rounded-full font-black uppercase tracking-wider ${
            isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {status}
          </span>
        </div>
      </div>

      {/* Pricing/Booking Metadata */}
      <div className="col-span-3">
        <div className="text-2xl font-black text-slate-900 tracking-tighter">${price} / day</div>
        <div className="text-[11px] text-slate-400 font-bold uppercase tracking-widest mt-1">Upcoming Booking: {booking} ...</div>
      </div>

      {/* Manage Status Actions */}
      <div className="col-span-4 flex flex-col gap-2">
        <button className="bg-[#FFD700] hover:bg-yellow-400 py-2.5 rounded-2xl font-black text-xs shadow-sm transition-colors">
          Delete Listing
        </button>
        
        <div className="relative group/input">
          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-hover/input:text-slate-600 transition-colors" size={14} />
          <input 
            type="text" 
            placeholder={isActive ? "Set Unavailable Period" : "Mark Unavailable:"}
            className="w-full pl-10 pr-10 py-2.5 border border-slate-200 rounded-2xl text-[11px] font-bold outline-none bg-white focus:border-yellow-400 transition-all shadow-inner"
          />
          <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={14} />
        </div>

        <button className="w-full border-2 border-slate-100 py-2.5 rounded-2xl text-xs font-black text-slate-600 hover:bg-white hover:border-slate-200 transition-all">
          View Details
        </button>
      </div>
    </div>
  );
}