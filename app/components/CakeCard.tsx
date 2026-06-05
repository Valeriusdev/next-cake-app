"use client";

import { useState } from "react";
import * as prismic from "@prismicio/client";
import { CakeDocument } from "@/lib/prismic";

export function CakeCard({ cake }: { cake: CakeDocument }) {
  const { cake_name, description, price, photo } = cake.data;
  const salePrice = price != null ? price - 4 : null;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
        onClick={() => setOpen(true)}
      >
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
            <p className="text-gray-600 text-sm line-clamp-3 mb-4">
              {prismic.asText(description)}
            </p>
          )}
          {price != null && salePrice != null && (
            <div className="mt-auto flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-lg text-black line-through">
                  ${price}
                </span>
                <span className="text-lg font-bold text-green-600">
                  Now ${salePrice}
                </span>
              </div>
              <button
                className="text-sm font-semibold bg-blue-600 text-white px-3 py-1.5 rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Add to cart
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-xl max-w-lg w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-2xl font-bold text-black hover:text-gray-600 leading-none"
              onClick={() => setOpen(false)}
            >
              ×
            </button>
            {photo.url && (
              <img
                src={photo.url}
                alt={photo.alt ?? cake_name ?? "Cake photo"}
                className="w-full aspect-square object-cover"
              />
            )}
            <div className="p-6 flex flex-col gap-3">
              <h2 className="text-2xl font-bold">{cake_name}</h2>
              {description && (
                <p className="text-gray-600 text-sm leading-relaxed">
                  {prismic.asText(description)}
                </p>
              )}
              {price != null && salePrice != null && (
                <div className="flex items-center justify-between gap-3 mt-2">
                  <div className="flex items-center gap-3">
                    <span className="text-lg text-black line-through">
                      ${price}
                    </span>
                    <span className="text-lg font-bold text-green-600">
                      Now ${salePrice}
                    </span>
                  </div>
                  <button
                    className="text-sm font-semibold bg-blue-600 text-white px-3 py-1.5 rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
                    onClick={() => {}}
                  >
                    Add to cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
