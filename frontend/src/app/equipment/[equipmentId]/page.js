// /equipment/{equipmentId} page: users view a single equipment detail.
export default function EquipmentDetailPage({ params }) {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <h1 className="text-center text-3xl font-bold text-text-primary">
        /equipment/{params.equipmentId}
      </h1>
    </div>
  );
}
