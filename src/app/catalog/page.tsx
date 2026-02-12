"use client";

import { useState } from "react";
import { furnitureItems, furnitureCategories } from "@/lib/data";

function formatPrice(price: number) {
  return new Intl.NumberFormat("ko-KR").format(price);
}

export default function CatalogPage() {
  const [category, setCategory] = useState("전체");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "price_asc" | "price_desc" | "rating">("rating");

  const filtered = furnitureItems
    .filter((item) => {
      const matchCat = category === "전체" || item.category === category;
      const matchSearch =
        !search ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.brand.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price_asc":
          return a.price - b.price;
        case "price_desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-surface-950">가구 카탈로그</h1>
        <p className="text-surface-500 mt-1">
          프로젝트에 적합한 가구와 소품을 찾아보세요.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
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
            placeholder="가구 이름 또는 브랜드 검색..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {furnitureCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                category === cat
                  ? "bg-primary-600 text-white"
                  : "bg-surface-100 text-surface-600 hover:bg-surface-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          className="px-3 py-2.5 border border-surface-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="rating">평점순</option>
          <option value="price_asc">가격 낮은순</option>
          <option value="price_desc">가격 높은순</option>
          <option value="name">이름순</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-surface-200 rounded-xl overflow-hidden hover:shadow-md transition group"
          >
            <div className="aspect-[4/3] bg-surface-100 flex items-center justify-center relative">
              <div
                className="w-20 h-16 rounded-lg opacity-60"
                style={{
                  backgroundColor:
                    item.color === "그레이"
                      ? "#9ca3af"
                      : item.color === "블랙"
                        ? "#374151"
                        : item.color === "화이트"
                          ? "#e5e7eb"
                          : item.color === "월넛"
                            ? "#92400e"
                            : item.color === "네이비"
                              ? "#1e40af"
                              : item.color === "내추럴"
                                ? "#d97706"
                                : "#9ca3af",
                }}
              />
              {!item.inStock && (
                <div className="absolute top-2 right-2 px-2 py-1 bg-surface-900/75 text-white text-xs rounded">
                  품절
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-primary-600 font-medium">
                  {item.brand}
                </span>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-3.5 h-3.5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs text-surface-600">{item.rating}</span>
                </div>
              </div>
              <h3 className="font-medium text-surface-900 text-sm mb-1 group-hover:text-primary-600 transition">
                {item.name}
              </h3>
              <p className="text-xs text-surface-500 mb-3">
                {item.dimensions.width}x{item.dimensions.height}x
                {item.dimensions.depth}cm · {item.material}
              </p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-surface-950">
                  {formatPrice(item.price)}원
                </span>
                <button
                  disabled={!item.inStock}
                  className="px-3 py-1.5 text-xs bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-surface-300 disabled:cursor-not-allowed transition font-medium"
                >
                  담기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <svg
            className="w-12 h-12 text-surface-300 mx-auto mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          <p className="text-surface-500">검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  );
}
