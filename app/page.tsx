import { prismicClient } from "@/lib/prismic";
import { CakeCard } from "./components/CakeCard";

export default async function Home() {
  const cakes = await prismicClient.getAllByType("cake");

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Our Cakes</h1>
      {cakes.length === 0 ? (
        <p className="text-center text-gray-500">No cakes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cakes.map((cake) => (
            <CakeCard key={cake.uid} cake={cake} />
          ))}
        </div>
      )}
    </main>
  );
}
