"use client";

import { useState } from "react";
import Link from "next/link";
import { roomStyles, roomTypes } from "@/lib/data";

export default function NewProjectPage() {
  const [formData, setFormData] = useState({
    name: "",
    clientName: "",
    roomType: "",
    style: "",
    budget: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("프로젝트가 생성되었습니다! (데모)");
  };

  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <div className="mb-8">
        <Link
          href="/projects"
          className="text-sm text-surface-500 hover:text-surface-700 flex items-center gap-1 mb-4"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          프로젝트 목록
        </Link>
        <h1 className="text-2xl font-bold text-surface-950">새 프로젝트</h1>
        <p className="text-surface-500 mt-1">새 인테리어 프로젝트를 시작합니다.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white border border-surface-200 rounded-xl p-6 space-y-5">
          <h2 className="font-semibold text-surface-900">기본 정보</h2>

          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">
              프로젝트명 *
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="예: 강남 펜트하우스 리모델링"
              className="w-full px-4 py-2.5 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">
              고객명 *
            </label>
            <input
              type="text"
              required
              value={formData.clientName}
              onChange={(e) =>
                setFormData({ ...formData, clientName: e.target.value })
              }
              placeholder="고객 이름"
              className="w-full px-4 py-2.5 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-surface-700 mb-1.5">
                공간 유형 *
              </label>
              <select
                required
                value={formData.roomType}
                onChange={(e) =>
                  setFormData({ ...formData, roomType: e.target.value })
                }
                className="w-full px-4 py-2.5 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm bg-white"
              >
                <option value="">선택하세요</option>
                {roomTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-surface-700 mb-1.5">
                디자인 스타일
              </label>
              <select
                value={formData.style}
                onChange={(e) =>
                  setFormData({ ...formData, style: e.target.value })
                }
                className="w-full px-4 py-2.5 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm bg-white"
              >
                <option value="">선택하세요</option>
                {roomStyles.map((style) => (
                  <option key={style} value={style}>
                    {style}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">
              예산 (원)
            </label>
            <input
              type="number"
              value={formData.budget}
              onChange={(e) =>
                setFormData({ ...formData, budget: e.target.value })
              }
              placeholder="예: 50000000"
              className="w-full px-4 py-2.5 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-surface-700 mb-1.5">
              프로젝트 설명
            </label>
            <textarea
              rows={4}
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              placeholder="프로젝트에 대한 간략한 설명을 입력하세요..."
              className="w-full px-4 py-2.5 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm resize-none"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="px-6 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-medium transition"
          >
            프로젝트 생성
          </button>
          <Link
            href="/projects"
            className="px-6 py-2.5 border border-surface-300 text-surface-700 rounded-lg hover:bg-surface-50 font-medium transition"
          >
            취소
          </Link>
        </div>
      </form>
    </div>
  );
}
