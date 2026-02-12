"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-surface-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-surface-900">
              Interior<span className="text-primary-600">Hub</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/dashboard"
              className="text-surface-600 hover:text-surface-900 font-medium transition"
            >
              대시보드
            </Link>
            <Link
              href="/projects"
              className="text-surface-600 hover:text-surface-900 font-medium transition"
            >
              프로젝트
            </Link>
            <Link
              href="/catalog"
              className="text-surface-600 hover:text-surface-900 font-medium transition"
            >
              카탈로그
            </Link>
            <Link
              href="/moodboard"
              className="text-surface-600 hover:text-surface-900 font-medium transition"
            >
              무드보드
            </Link>
            <Link
              href="/pricing"
              className="text-surface-600 hover:text-surface-900 font-medium transition"
            >
              요금제
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-surface-700 hover:text-surface-900 font-medium transition">
              로그인
            </button>
            <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition">
              무료 시작
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link
              href="/dashboard"
              className="block px-3 py-2 text-surface-600 hover:bg-surface-50 rounded-lg"
            >
              대시보드
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 text-surface-600 hover:bg-surface-50 rounded-lg"
            >
              프로젝트
            </Link>
            <Link
              href="/catalog"
              className="block px-3 py-2 text-surface-600 hover:bg-surface-50 rounded-lg"
            >
              카탈로그
            </Link>
            <Link
              href="/moodboard"
              className="block px-3 py-2 text-surface-600 hover:bg-surface-50 rounded-lg"
            >
              무드보드
            </Link>
            <Link
              href="/pricing"
              className="block px-3 py-2 text-surface-600 hover:bg-surface-50 rounded-lg"
            >
              요금제
            </Link>
            <div className="pt-2 border-t border-surface-200 space-y-2">
              <button className="block w-full text-left px-3 py-2 text-surface-600">
                로그인
              </button>
              <button className="block w-full px-3 py-2 bg-primary-600 text-white rounded-lg text-center">
                무료 시작
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
