// /user/manage-booking page: user confirms or cancels booking requests.
import ProtectedRoute from "@/Components/ProtectedRoute";

export default function ManageBookingsPage() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <h1 className="text-center text-3xl font-bold text-text-primary">
          /user/manage-bookings
        </h1>
      </div>
    </ProtectedRoute>
  );
}
