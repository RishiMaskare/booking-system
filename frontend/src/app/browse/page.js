// /browse page: users see search results by query, e.g. /browse?q=tractor.
export default function BrowsePage({ searchParams }) {
  const query = searchParams?.q || "";

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <h1 className="text-center text-3xl font-bold text-text-primary">
        /browse{query ? `?q=${query}` : ""}
      </h1>
    </div>
  );
}
