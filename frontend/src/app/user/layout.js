"use client";
import { useRouter, usePathname } from "next/navigation";
import { BarChart2, LayoutGrid, Calendar, CreditCard, Settings, Menu } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: BarChart2, href: "/user/dashboard" },
  { label: "Manage Equipments", icon: LayoutGrid, href: "/user/manage-equipments" },
  { label: "My Bookings", icon: Calendar, href: "/user/manage-bookings" },
  { label: "Payments", icon: CreditCard, href: "/user/payments" },
  { label: "Settings", icon: Settings, href: "/user/settings" },
];

export default function UserLayout({ children }) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="flex">
      <aside className="fixed top-0 left-0 h-full z-40 flex flex-col items-center bg-white border-r border-border-light shadow w-16">
        <button
          className="mt-4 mb-8 p-2 rounded hover:bg-gray-100"
          aria-label="Open menu"
          tabIndex={-1}
          style={{ pointerEvents: "none" }}
        >
          <Menu size={28} />
        </button>
        <nav className="flex flex-col gap-4 flex-1 w-full items-center">
          {navItems.map(({ label, icon: Icon, href }) => {
            const active = pathname === href;
            return (
              <button
                key={label}
                onClick={() => router.push(href)}
                className={`flex items-center w-12 h-12 justify-center rounded-xl transition-all duration-150 ${active ? "bg-primary-accent/20 text-primary-accent" : "text-gray-500 hover:bg-gray-100"}`}
                title={label}
              >
                <Icon size={24} />
              </button>
            );
          })}
        </nav>
        <div className="flex-1" />
      </aside>
      <main className="grow ml-16 pt-0 md:pt-0">{children}</main>
    </div>
  );
}