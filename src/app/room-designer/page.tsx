"use client";

import { useState, useRef, useCallback } from "react";
import type { RoomItem } from "@/lib/types";

const furniturePalette = [
  { id: "sofa", name: "소파", width: 180, height: 80, color: "#93c5fd" },
  { id: "table", name: "테이블", width: 100, height: 60, color: "#fca5a5" },
  { id: "chair", name: "의자", width: 50, height: 50, color: "#86efac" },
  { id: "bed", name: "침대", width: 160, height: 200, color: "#c4b5fd" },
  { id: "desk", name: "책상", width: 120, height: 60, color: "#fcd34d" },
  { id: "cabinet", name: "수납장", width: 80, height: 40, color: "#fdba74" },
  { id: "lamp", name: "조명", width: 30, height: 30, color: "#fde68a" },
  { id: "rug", name: "러그", width: 200, height: 140, color: "#d8b4fe" },
  { id: "plant", name: "화분", width: 35, height: 35, color: "#6ee7b7" },
  { id: "tv", name: "TV", width: 120, height: 10, color: "#475569" },
];

let itemCounter = 0;

export default function RoomDesignerPage() {
  const [items, setItems] = useState<RoomItem[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [dragging, setDragging] = useState<{
    id: string;
    offsetX: number;
    offsetY: number;
  } | null>(null);
  const [roomSize, setRoomSize] = useState({ width: 800, height: 600 });
  const canvasRef = useRef<HTMLDivElement>(null);

  const addItem = (
    templateId: string,
    name: string,
    width: number,
    height: number,
    color: string
  ) => {
    const newItem: RoomItem = {
      id: `item-${++itemCounter}`,
      furnitureId: templateId,
      name,
      x: roomSize.width / 2 - width / 2,
      y: roomSize.height / 2 - height / 2,
      width,
      height,
      rotation: 0,
      color,
    };
    setItems((prev) => [...prev, newItem]);
    setSelectedId(newItem.id);
  };

  const handleMouseDown = (e: React.MouseEvent, itemId: string) => {
    e.stopPropagation();
    const item = items.find((i) => i.id === itemId);
    if (!item || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    setDragging({
      id: itemId,
      offsetX: e.clientX - rect.left - item.x,
      offsetY: e.clientY - rect.top - item.y,
    });
    setSelectedId(itemId);
  };

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!dragging || !canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left - dragging.offsetX, roomSize.width));
      const y = Math.max(0, Math.min(e.clientY - rect.top - dragging.offsetY, roomSize.height));

      setItems((prev) =>
        prev.map((item) =>
          item.id === dragging.id ? { ...item, x, y } : item
        )
      );
    },
    [dragging, roomSize]
  );

  const handleMouseUp = () => {
    setDragging(null);
  };

  const deleteSelected = () => {
    if (!selectedId) return;
    setItems((prev) => prev.filter((i) => i.id !== selectedId));
    setSelectedId(null);
  };

  const rotateSelected = () => {
    if (!selectedId) return;
    setItems((prev) =>
      prev.map((item) =>
        item.id === selectedId
          ? { ...item, rotation: (item.rotation + 90) % 360 }
          : item
      )
    );
  };

  const selectedItem = items.find((i) => i.id === selectedId);

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Furniture Panel */}
      <div className="w-64 bg-white border-r border-surface-200 overflow-y-auto shrink-0">
        <div className="p-4 border-b border-surface-200">
          <h2 className="font-semibold text-surface-900">가구 팔레트</h2>
          <p className="text-xs text-surface-500 mt-1">
            클릭하여 캔버스에 추가하세요
          </p>
        </div>
        <div className="p-3 grid grid-cols-2 gap-2">
          {furniturePalette.map((f) => (
            <button
              key={f.id}
              onClick={() => addItem(f.id, f.name, f.width, f.height, f.color)}
              className="p-3 border border-surface-200 rounded-lg hover:border-primary-300 hover:bg-primary-50 transition text-center"
            >
              <div
                className="w-10 h-10 rounded mx-auto mb-1.5"
                style={{ backgroundColor: f.color }}
              />
              <span className="text-xs font-medium text-surface-700">
                {f.name}
              </span>
            </button>
          ))}
        </div>

        {/* Room Size */}
        <div className="p-4 border-t border-surface-200">
          <h3 className="text-sm font-semibold text-surface-900 mb-3">
            방 크기
          </h3>
          <div className="space-y-2">
            <div>
              <label className="text-xs text-surface-500">가로 (px)</label>
              <input
                type="number"
                value={roomSize.width}
                onChange={(e) =>
                  setRoomSize({ ...roomSize, width: Number(e.target.value) })
                }
                className="w-full px-2 py-1.5 border border-surface-300 rounded text-sm mt-0.5"
              />
            </div>
            <div>
              <label className="text-xs text-surface-500">세로 (px)</label>
              <input
                type="number"
                value={roomSize.height}
                onChange={(e) =>
                  setRoomSize({ ...roomSize, height: Number(e.target.value) })
                }
                className="w-full px-2 py-1.5 border border-surface-300 rounded text-sm mt-0.5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="flex-1 bg-surface-100 overflow-auto flex flex-col">
        {/* Toolbar */}
        <div className="bg-white border-b border-surface-200 px-4 py-2 flex items-center gap-2 shrink-0">
          <button
            onClick={rotateSelected}
            disabled={!selectedId}
            className="px-3 py-1.5 text-sm border border-surface-300 rounded-lg hover:bg-surface-50 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1.5"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            회전
          </button>
          <button
            onClick={deleteSelected}
            disabled={!selectedId}
            className="px-3 py-1.5 text-sm border border-red-300 text-red-600 rounded-lg hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed transition flex items-center gap-1.5"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
            삭제
          </button>
          <button
            onClick={() => {
              setItems([]);
              setSelectedId(null);
            }}
            className="px-3 py-1.5 text-sm border border-surface-300 rounded-lg hover:bg-surface-50 transition"
          >
            전체 초기화
          </button>
          <div className="ml-auto text-xs text-surface-500">
            가구 {items.length}개 배치됨
            {selectedItem && (
              <span className="ml-2">
                | 선택: {selectedItem.name} ({Math.round(selectedItem.x)},{" "}
                {Math.round(selectedItem.y)})
              </span>
            )}
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 overflow-auto p-8 flex items-start justify-center">
          <div
            ref={canvasRef}
            className="relative bg-white border-2 border-surface-300 shadow-sm cursor-crosshair select-none"
            style={{
              width: roomSize.width,
              height: roomSize.height,
              backgroundImage:
                "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onClick={() => setSelectedId(null)}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className={`absolute cursor-move flex items-center justify-center text-xs font-medium select-none ${
                  selectedId === item.id
                    ? "ring-2 ring-primary-500 ring-offset-1"
                    : "hover:ring-2 hover:ring-surface-400"
                }`}
                style={{
                  left: item.x,
                  top: item.y,
                  width: item.width,
                  height: item.height,
                  backgroundColor: item.color,
                  transform: `rotate(${item.rotation}deg)`,
                  borderRadius: 4,
                  zIndex: selectedId === item.id ? 10 : 1,
                }}
                onMouseDown={(e) => handleMouseDown(e, item.id)}
              >
                <span
                  className="text-surface-800 pointer-events-none"
                  style={{ transform: `rotate(-${item.rotation}deg)` }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Properties Panel */}
      {selectedItem && (
        <div className="w-56 bg-white border-l border-surface-200 p-4 shrink-0 overflow-y-auto">
          <h3 className="font-semibold text-surface-900 mb-4">속성</h3>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-surface-500">이름</label>
              <p className="text-sm font-medium text-surface-900">
                {selectedItem.name}
              </p>
            </div>
            <div>
              <label className="text-xs text-surface-500">위치 (X, Y)</label>
              <p className="text-sm text-surface-700">
                {Math.round(selectedItem.x)}, {Math.round(selectedItem.y)}
              </p>
            </div>
            <div>
              <label className="text-xs text-surface-500">크기 (W x H)</label>
              <p className="text-sm text-surface-700">
                {selectedItem.width} x {selectedItem.height}
              </p>
            </div>
            <div>
              <label className="text-xs text-surface-500">회전</label>
              <p className="text-sm text-surface-700">{selectedItem.rotation}°</p>
            </div>
            <div>
              <label className="text-xs text-surface-500">색상</label>
              <div className="flex items-center gap-2 mt-0.5">
                <div
                  className="w-6 h-6 rounded border border-surface-200"
                  style={{ backgroundColor: selectedItem.color }}
                />
                <span className="text-sm text-surface-700">
                  {selectedItem.color}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
