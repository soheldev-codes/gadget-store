"use client";

import { useState } from "react";

const tabs = [
  "Description",
  "Specifications",
  "Reviews",
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <section className="mt-20">
      {/* Tabs */}

      <div className="flex flex-wrap gap-3 border-b border-slate-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`border-b-2 px-6 py-4 text-sm font-semibold transition ${
              activeTab === tab
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-slate-500 hover:text-blue-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}

      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8">

        {activeTab === "Description" && (
          <div className="space-y-4 leading-8 text-slate-600">
            <p>
              Experience premium quality with this high-performance gadget,
              designed for speed, durability and everyday productivity.
            </p>

            <p>
              Built with premium materials and backed by official warranty,
              it's an excellent choice for professionals, gamers and daily users.
            </p>
          </div>
        )}

        {activeTab === "Specifications" && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>

                <tr className="border-b">
                  <td className="py-4 font-semibold">
                    Brand
                  </td>

                  <td className="py-4 text-slate-600">
                    Logitech
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 font-semibold">
                    Category
                  </td>

                  <td className="py-4 text-slate-600">
                    Mouse
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 font-semibold">
                    Connectivity
                  </td>

                  <td className="py-4 text-slate-600">
                    Wireless
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-4 font-semibold">
                    Warranty
                  </td>

                  <td className="py-4 text-slate-600">
                    1 Year Official Warranty
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        )}

        {activeTab === "Reviews" && (
          <div className="space-y-6">

            <div className="rounded-2xl bg-slate-50 p-6">
              <h4 className="font-semibold">
                Abdullah Al Mamun
              </h4>

              <p className="mt-2 text-slate-600">
                Excellent product. Delivery was fast and the quality is
                outstanding.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-6">
              <h4 className="font-semibold">
                Rakib Hasan
              </h4>

              <p className="mt-2 text-slate-600">
                Original product with official warranty. Highly recommended.
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}