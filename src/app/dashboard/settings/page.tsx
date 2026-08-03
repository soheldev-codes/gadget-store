export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Account Settings
        </h2>

        <p className="mt-2 text-slate-500">
          Update your personal information and account preferences.
        </p>
      </div>

      {/* Form */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

        <form className="space-y-6">

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                defaultValue="Sohel Rana"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>

              <input
                type="email"
                defaultValue="sohel@example.com"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Phone Number
              </label>

              <input
                type="text"
                defaultValue="017XXXXXXXX"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                City
              </label>

              <input
                type="text"
                defaultValue="Dhaka"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
              />
            </div>

          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Address
            </label>

            <textarea
              rows={4}
              defaultValue="Dhamrai, Dhaka, Bangladesh"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>

        </form>

      </div>

      {/* Password */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

        <h3 className="mb-6 text-xl font-semibold">
          Change Password
        </h3>

        <form className="space-y-5">

          <input
            type="password"
            placeholder="Current Password"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

          <input
            type="password"
            placeholder="New Password"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

          <div className="flex justify-end">

            <button
              type="submit"
              className="rounded-xl bg-slate-900 px-8 py-3 font-semibold text-white transition hover:bg-slate-800"
            >
              Update Password
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}