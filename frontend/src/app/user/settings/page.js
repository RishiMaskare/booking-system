// /user/settings page: user account settings, payment id settings, logout, and delete account.
import ProtectedRoute from "@/Components/ProtectedRoute";

export default function UserSettingsPage() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <h1 className="text-center text-3xl font-bold text-text-primary">
          /user/settings
        </h1>
      </div>
    </ProtectedRoute>
  );
}
