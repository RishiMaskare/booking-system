// /user/manage-equipment page: user manages equipment info, price, availability, and edits.
import ProtectedRoute from "@/Components/ProtectedRoute";

export default function ManageEquipmentsPage() {
  return (
    <ProtectedRoute>
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <h1 className="text-center text-3xl font-bold text-text-primary">
          /user/manage-equipments
        </h1>
      </div>
    </ProtectedRoute>
  );
}
