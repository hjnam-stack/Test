"use client";

import { useState } from "react";

interface MoodboardCard {
  id: string;
  type: "color" | "note" | "material";
  title: string;
  color?: string;
  note?: string;
}

const colorPalettes = [
  { name: "웜 뉴트럴", colors: ["#f5f0eb", "#d4c5b5", "#a89279", "#6b5b4b", "#3d3129"] },
  { name: "쿨 모던", colors: ["#f0f4f8", "#c9d6e3", "#8da4bf", "#4a6b8a", "#1a3550"] },
  { name: "내추럴 그린", colors: ["#f0f5e8", "#c8dba5", "#8fb563", "#5a8930", "#2d5a10"] },
  { name: "어반 그레이", colors: ["#fafafa", "#d4d4d4", "#a3a3a3", "#525252", "#171717"] },
  { name: "블러쉬 핑크", colors: ["#fdf2f4", "#f5c6cf", "#e88fa0", "#c9506b", "#8b1a3a"] },
  { name: "오션 블루", colors: ["#eff8ff", "#b4d9f0", "#5ba7d2", "#2273a5", "#0d3f63"] },
];

const materials = [
  { id: "m1", name: "오크 원목", color: "#c4a77d", texture: "Wood grain" },
  { id: "m2", name: "화이트 대리석", color: "#f0ede8", texture: "Marble veins" },
  { id: "m3", name: "브러싱 브라스", color: "#d4a843", texture: "Brushed metal" },
  { id: "m4", name: "베이지 리넨", color: "#e8dcc8", texture: "Woven fabric" },
  { id: "m5", name: "월넛 원목", color: "#5c3d2e", texture: "Dark wood" },
  { id: "m6", name: "콘크리트", color: "#b0b0b0", texture: "Rough surface" },
  { id: "m7", name: "테라코타", color: "#c67a4b", texture: "Earthy tone" },
  { id: "m8", name: "블랙 메탈", color: "#2d2d2d", texture: "Matte metal" },
];

let idCounter = 0;

export default function MoodboardPage() {
  const [cards, setCards] = useState<MoodboardCard[]>([]);
  const [activeTab, setActiveTab] = useState<"colors" | "materials" | "notes">("colors");
  const [newNote, setNewNote] = useState("");

  const addColorCard = (name: string, color: string) => {
    setCards((prev) => [
      ...prev,
      { id: `card-${++idCounter}`, type: "color", title: name, color },
    ]);
  };

  const addMaterialCard = (name: string, color: string) => {
    setCards((prev) => [
      ...prev,
      { id: `card-${++idCounter}`, type: "material", title: name, color },
    ]);
  };

  const addNote = () => {
    if (!newNote.trim()) return;
    setCards((prev) => [
      ...prev,
      { id: `card-${++idCounter}`, type: "note", title: "메모", note: newNote },
    ]);
    setNewNote("");
  };

  const removeCard = (id: string) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-surface-950">무드보드</h1>
        <p className="text-surface-500 mt-1">
          컬러, 소재, 영감을 모아 디자인 방향을 정리하세요.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Palette Panel */}
        <div className="bg-white border border-surface-200 rounded-xl overflow-hidden">
          <div className="flex border-b border-surface-200">
            <button
              onClick={() => setActiveTab("colors")}
              className={`flex-1 py-3 text-sm font-medium transition ${
                activeTab === "colors"
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-surface-500 hover:text-surface-700"
              }`}
            >
              컬러
            </button>
            <button
              onClick={() => setActiveTab("materials")}
              className={`flex-1 py-3 text-sm font-medium transition ${
                activeTab === "materials"
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-surface-500 hover:text-surface-700"
              }`}
            >
              소재
            </button>
            <button
              onClick={() => setActiveTab("notes")}
              className={`flex-1 py-3 text-sm font-medium transition ${
                activeTab === "notes"
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-surface-500 hover:text-surface-700"
              }`}
            >
              메모
            </button>
          </div>

          <div className="p-4 max-h-[500px] overflow-y-auto">
            {activeTab === "colors" && (
              <div className="space-y-4">
                {colorPalettes.map((palette) => (
                  <div key={palette.name}>
                    <p className="text-xs font-medium text-surface-600 mb-2">
                      {palette.name}
                    </p>
                    <div className="flex gap-1">
                      {palette.colors.map((color) => (
                        <button
                          key={color}
                          onClick={() => addColorCard(palette.name, color)}
                          className="flex-1 h-10 rounded-lg border border-surface-200 hover:ring-2 hover:ring-primary-400 transition"
                          style={{ backgroundColor: color }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "materials" && (
              <div className="grid grid-cols-2 gap-2">
                {materials.map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => addMaterialCard(mat.name, mat.color)}
                    className="p-3 border border-surface-200 rounded-lg hover:border-primary-300 transition text-left"
                  >
                    <div
                      className="w-full h-12 rounded mb-2"
                      style={{ backgroundColor: mat.color }}
                    />
                    <p className="text-xs font-medium text-surface-900">
                      {mat.name}
                    </p>
                    <p className="text-xs text-surface-500">{mat.texture}</p>
                  </button>
                ))}
              </div>
            )}

            {activeTab === "notes" && (
              <div className="space-y-3">
                <textarea
                  rows={4}
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="디자인 아이디어나 메모를 작성하세요..."
                  className="w-full px-3 py-2.5 border border-surface-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <button
                  onClick={addNote}
                  disabled={!newNote.trim()}
                  className="w-full py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 disabled:bg-surface-300 disabled:cursor-not-allowed transition"
                >
                  메모 추가
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Board */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-surface-200 rounded-xl p-6 min-h-[500px]">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-surface-900">
                나의 무드보드{" "}
                <span className="text-surface-400 font-normal text-sm">
                  ({cards.length}개)
                </span>
              </h2>
              {cards.length > 0 && (
                <button
                  onClick={() => setCards([])}
                  className="text-xs text-surface-500 hover:text-red-500 transition"
                >
                  전체 삭제
                </button>
              )}
            </div>

            {cards.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-surface-400">
                <svg
                  className="w-16 h-16 mb-3"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm">
                  왼쪽 패널에서 컬러, 소재, 메모를 추가하세요
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="relative group border border-surface-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => removeCard(card.id)}
                      className="absolute top-1.5 right-1.5 w-6 h-6 bg-surface-900/60 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition text-xs"
                    >
                      x
                    </button>

                    {card.type === "color" && (
                      <>
                        <div
                          className="h-20"
                          style={{ backgroundColor: card.color }}
                        />
                        <div className="p-2">
                          <p className="text-xs font-medium text-surface-700">
                            {card.title}
                          </p>
                          <p className="text-xs text-surface-400">{card.color}</p>
                        </div>
                      </>
                    )}

                    {card.type === "material" && (
                      <>
                        <div
                          className="h-20"
                          style={{ backgroundColor: card.color }}
                        />
                        <div className="p-2">
                          <p className="text-xs font-medium text-surface-700">
                            {card.title}
                          </p>
                        </div>
                      </>
                    )}

                    {card.type === "note" && (
                      <div className="p-3 bg-yellow-50 h-full min-h-[100px]">
                        <p className="text-xs font-medium text-yellow-800 mb-1">
                          메모
                        </p>
                        <p className="text-xs text-yellow-700">{card.note}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
