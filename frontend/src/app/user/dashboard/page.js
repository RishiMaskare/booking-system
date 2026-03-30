// /user/dashboard page: user sees monthly revenue, notifications, and summary dashboard.
import ProtectedRoute from "@/Components/ProtectedRoute";

export default function UserDashboardPage() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <h1 className="text-center text-3xl font-bold text-text-primary">
          /user/dashboard
        </h1>
      </div>
    </ProtectedRoute>
  );
}
