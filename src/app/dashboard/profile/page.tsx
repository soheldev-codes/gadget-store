import Image from "next/image";
import { FiEdit2 } from "react-icons/fi";

export default function ProfilePage() {
  return (
    <div className="space-y-8">

      {/* Page Header */}

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          My Profile
        </h2>

        <p className="mt-2 text-slate-500">
          Manage your personal information.
        </p>
      </div>

      {/* Profile Card */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="flex flex-col items-center gap-6 md:flex-row">

          <div className="relative">

            <Image
              src="/images/avatar.png"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full border-4 border-slate-200 object-cover"
            />

            <button
              type="button"
              className="absolute bottom-1 right-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
            >
              <FiEdit2 size={18} />
            </button>

          </div>

          <div>

            <h3 className="text-2xl font-bold text-slate-900">
              Sohel Rana
            </h3>

            <p className="mt-1 text-slate-500">
              sohel@example.com
            </p>

            <span className="mt-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
              Customer
            </span>

          </div>

        </div>

      </div>

      {/* Information */}

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h4 className="mb-4 text-lg font-semibold">
            Personal Information
          </h4>

          <div className="space-y-4">

            <div>
              <p className="text-sm text-slate-500">
                Full Name
              </p>

              <p className="font-medium">
                Sohel Rana
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Email
              </p>

              <p className="font-medium">
                sohel@example.com
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Phone
              </p>

              <p className="font-medium">
                017XXXXXXXX
              </p>
            </div>

          </div>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <h4 className="mb-4 text-lg font-semibold">
            Shipping Address
          </h4>

          <div className="space-y-4">

            <div>
              <p className="text-sm text-slate-500">
                Address
              </p>

              <p className="font-medium">
                Dhamrai, Dhaka
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                City
              </p>

              <p className="font-medium">
                Dhaka
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Country
              </p>

              <p className="font-medium">
                Bangladesh
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}