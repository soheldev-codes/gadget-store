"use client";

import Link from "next/link";
import { useState } from "react";

import {
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

export default function LoginForm() {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">
          Sign In
        </h1>

        <p className="mt-2 text-slate-500">
          Login to your account to continue shopping.
        </p>
      </div>

      <form className="space-y-6">

        {/* Email */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />
        </div>

        {/* Password */}

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>

          <div className="relative">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Enter your password"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-12 outline-none transition focus:border-blue-600"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
            >
              {showPassword ? (
                <FiEyeOff size={20} />
              ) : (
                <FiEye size={20} />
              )}
            </button>

          </div>
        </div>

        {/* Remember */}

        <div className="flex items-center justify-between">

          <label className="flex items-center gap-2 text-sm text-slate-600">

            <input
              type="checkbox"
              className="accent-blue-600"
            />

            Remember Me

          </label>

          <Link
            href="/forgot-password"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Forgot Password?
          </Link>

        </div>

        {/* Login Button */}

        <button
          type="submit"
          className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Sign In
        </button>

      </form>

      {/* Register */}

      <p className="mt-8 text-center text-sm text-slate-600">

        Don't have an account?{" "}

        <Link
          href="/register"
          className="font-semibold text-blue-600 hover:underline"
        >
          Create Account
        </Link>

      </p>

    </div>
  );
}