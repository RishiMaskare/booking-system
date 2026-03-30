"use client";

import React, { useState } from 'react';
import ProtectedRoute from "@/Components/ProtectedRoute";
import { 
  User, Bell, CreditCard, History, ShieldCheck, 
  Search, Calendar, Menu, Trash2, LogOut, 
  Home, BarChart2, LayoutGrid, Settings, MapPin, AlertTriangle
} from 'lucide-react';

export default function UserSettingsPage() {
  // Example user data (replace with real data from context/api)
  const [email, setEmail] = useState("currentrenter@gmail.com");
  const [phone, setPhone] = useState("+90 12234567899");
  const [notif, setNotif] = useState({
    booking: true,
    payment: true,
    status: true,
    marketing: false,
  });

  return (
    <ProtectedRoute>
      <div className="bg-[#f9fafb] min-h-screen py-8 px-2 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="w-full md:w-64 shrink-0">
              <div className="bg-white rounded-2xl shadow border border-gray-100 p-4 flex flex-col gap-2">
                <button className="text-left px-4 py-2 rounded-xl font-medium text-gray-700 hover:bg-primary-accent-light transition">My Profile</button>
                <button className="text-left px-4 py-2 rounded-xl font-medium text-gray-700 hover:bg-primary-accent-light transition">Notification Settings</button>
                <button className="text-left px-4 py-2 rounded-xl font-medium text-gray-700 hover:bg-primary-accent-light transition">Payment Methods</button>
                <button className="text-left px-4 py-2 rounded-xl font-medium text-gray-700 hover:bg-primary-accent-light transition">Bookings History</button>
                <button className="text-left px-4 py-2 rounded-xl font-bold text-white bg-primary-accent hover:bg-primary-accent-dark transition flex items-center gap-2">
                  <span>Account & Security</span>
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 space-y-8">
              {/* Tabs & Header */}
              <div className="flex flex-col md:flex-row md:items-end gap-4">
                <div className="flex-1">
                  <div className="flex gap-2 mb-2">
                    <span className="font-bold text-lg text-gray-800">User Settings</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="px-4 py-2 rounded-t-xl bg-gray-100 font-medium text-gray-700">Profile & Security</button>
                    <button className="px-4 py-2 rounded-t-xl bg-primary-accent text-white font-bold">Account & Security</button>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <span role="img" aria-label="location">📍</span> Nagpur
                  <span>|</span>
                  <span>March 22, 2026</span>
                </div>
                <div className="text-2xl font-bold text-gray-800 whitespace-nowrap">$180 / day</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Account Management */}
                <section className="md:col-span-2 bg-white rounded-2xl border border-gray-100 shadow p-6 space-y-6">
                  <h2 className="font-bold text-lg text-gray-800 mb-2">Account Management</h2>
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <input type="password" placeholder="Old Password" className="flex-1 px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm" />
                      <input type="text" placeholder="New Password" className="flex-1 px-3 py-2 rounded-lg border border-gray-200 bg-gray-50 text-sm" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-700">Email Address</span>
                      <span className="text-gray-500 flex-1">{email}</span>
                      <button className="bg-primary-accent hover:bg-primary-accent-dark text-white font-bold px-4 py-1.5 rounded-lg text-sm">Change</button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-700">Phone Number</span>
                      <span className="text-gray-500 flex-1">{phone}</span>
                      <button className="bg-primary-accent hover:bg-primary-accent-dark text-white font-bold px-4 py-1.5 rounded-lg text-sm">Change</button>
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Connected Accounts</span>
                      <div className="flex gap-3 mt-1">
                        <span className="flex items-center gap-1 text-sm text-gray-600"><span className="text-blue-500" role="img" aria-label="google">🔗</span> Google</span>
                        <span className="flex items-center gap-1 text-sm text-gray-600"><span className="text-blue-700" role="img" aria-label="facebook">🔗</span> Facebook</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Notification Management */}
                <section className="bg-white rounded-2xl border border-gray-100 shadow p-6 space-y-6">
                  <h2 className="font-bold text-lg text-gray-800 mb-2">Notification Management</h2>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>New Booking Alerts</span>
                      <input type="checkbox" checked={notif.booking} onChange={() => setNotif(n => ({ ...n, booking: !n.booking }))} className="accent-primary-accent w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Payment Confirmations</span>
                      <input type="checkbox" checked={notif.payment} onChange={() => setNotif(n => ({ ...n, payment: !n.payment }))} className="accent-primary-accent w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Equipment Status Updates</span>
                      <input type="checkbox" checked={notif.status} onChange={() => setNotif(n => ({ ...n, status: !n.status }))} className="accent-primary-accent w-5 h-5" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Marketing Emails</span>
                      <input type="checkbox" checked={notif.marketing} onChange={() => setNotif(n => ({ ...n, marketing: !n.marketing }))} className="accent-primary-accent w-5 h-5" />
                    </div>
                  </div>
                </section>
              </div>

              {/* Reviews */}
              <section className="bg-white rounded-2xl border border-gray-100 shadow p-6 mt-4">
                <h2 className="font-bold text-lg text-gray-800 mb-2">Reviews</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400 text-xl">★</span>
                    <span className="font-bold text-gray-800">Customer Reviews</span>
                  </div>
                  <p className="text-gray-500 text-sm">This equipment is listed grow to ...</p>
                </div>
              </section>

              {/* Data & Account Control */}
              <section className="bg-yellow-50 border border-yellow-200 rounded-2xl shadow p-6 mt-4 flex flex-col md:flex-row items-center gap-4">
                <div className="flex-1 flex flex-col md:flex-row gap-4">
                  <button className="bg-primary-accent hover:bg-primary-accent-dark text-white font-bold px-6 py-3 rounded-xl transition">Logout</button>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold px-6 py-3 rounded-xl transition">Delete All Equipment</button>
                  <button className="bg-error hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition">Delete Account</button>
                </div>
                <div className="text-xs text-gray-500 mt-2 md:mt-0">
                  <div>Permanently remove all your equipment listings.</div>
                  <div>Permanently delete your account and all associated data. This action cannot be undone.</div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}