import * as prismic from "@prismicio/client";
import { CakeDocument } from "@/lib/prismic";

export function CakeCard({ cake }: { cake: CakeDocument }) {
  const { cake_name, description, price, photo } = cake.data;
  const salePrice = price != null ? price - 4 : null;

  return (
    <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {photo.url && (
        <div className="overflow-hidden aspect-square">
          <img
            src={photo.url}
            alt={photo.alt ?? cake_name ?? "Cake photo"}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      )}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-semibold">{cake_name}</h2>
        {description && (
          <p className="text-gray-600 text-sm line-clamp-3">
            {prismic.asText(description)}
          </p>
        )}
        {price != null && salePrice != null && (
          <div className="mt-auto flex items-center gap-3">
            <span className="text-lg text-black line-through">${price}</span>
            <span className="text-lg font-bold text-green-600">
              Now ${salePrice}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
