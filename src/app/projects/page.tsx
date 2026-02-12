"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/data";

const statusLabels: Record<string, { label: string; color: string }> = {
  planning: { label: "기획", color: "bg-yellow-100 text-yellow-700" },
  in_progress: { label: "진행중", color: "bg-blue-100 text-blue-700" },
  review: { label: "검토", color: "bg-purple-100 text-purple-700" },
  completed: { label: "완료", color: "bg-green-100 text-green-700" },
};

const statusFilters = [
  { value: "all", label: "전체" },
  { value: "planning", label: "기획" },
  { value: "in_progress", label: "진행중" },
  { value: "review", label: "검토" },
  { value: "completed", label: "완료" },
];

function formatBudget(amount: number) {
  if (amount >= 100000000) {
    return `${(amount / 100000000).toFixed(1)}억`;
  }
  return `${(amount / 10000).toLocaleString()}만`;
}

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = projects.filter((p) => {
    const matchStatus = filter === "all" || p.status === filter;
    const matchSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.clientName.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-surface-950">프로젝트</h1>
          <p className="text-surface-500 mt-1">모든 인테리어 프로젝트를 관리하세요.</p>
        </div>
        <Link
          href="/projects/new"
          className="px-4 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          새 프로젝트
        </Link>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="프로젝트 또는 고객명 검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
          />
        </div>
        <div className="flex gap-2">
          {statusFilters.map((s) => (
            <button
              key={s.value}
              onClick={() => setFilter(s.value)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                filter === s.value
                  ? "bg-primary-600 text-white"
                  : "bg-surface-100 text-surface-600 hover:bg-surface-200"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filtered.map((project) => {
          const status = statusLabels[project.status];
          return (
            <div
              key={project.id}
              className="bg-white border border-surface-200 rounded-xl p-5 hover:shadow-md transition group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${status.color}`}>
                  {status.label}
                </span>
                <span className="text-xs text-surface-400">{project.updatedAt}</span>
              </div>

              <h3 className="font-semibold text-surface-900 mb-1 group-hover:text-primary-600 transition">
                {project.name}
              </h3>
              <p className="text-sm text-surface-500 mb-4">
                {project.clientName} · {project.roomType}
              </p>

              <div className="flex items-center gap-4 text-xs text-surface-500 mb-4">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  {project.style}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {formatBudget(project.budget)}원
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1 bg-surface-100 rounded-full h-2">
                  <div
                    className="bg-primary-500 h-2 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-surface-600">
                  {project.progress}%
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <svg className="w-12 h-12 text-surface-300 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          <p className="text-surface-500">검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
