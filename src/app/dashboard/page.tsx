import { dashboardStats, projects } from "@/lib/data";
import Link from "next/link";

function formatCurrency(amount: number) {
  if (amount >= 100000000) {
    return `${(amount / 100000000).toFixed(1)}억`;
  }
  if (amount >= 10000) {
    return `${(amount / 10000).toLocaleString()}만`;
  }
  return amount.toLocaleString();
}

const statusLabels: Record<string, { label: string; color: string }> = {
  planning: { label: "기획", color: "bg-yellow-100 text-yellow-700" },
  in_progress: { label: "진행중", color: "bg-blue-100 text-blue-700" },
  review: { label: "검토", color: "bg-purple-100 text-purple-700" },
  completed: { label: "완료", color: "bg-green-100 text-green-700" },
};

export default function DashboardPage() {
  const recentProjects = projects.slice(0, 5);

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-surface-950">대시보드</h1>
          <p className="text-surface-500 mt-1">프로젝트 현황을 한눈에 확인하세요.</p>
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

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <div className="bg-white border border-surface-200 rounded-xl p-5">
          <p className="text-sm text-surface-500 mb-1">전체 프로젝트</p>
          <p className="text-2xl font-bold text-surface-950">
            {dashboardStats.totalProjects}
          </p>
        </div>
        <div className="bg-white border border-surface-200 rounded-xl p-5">
          <p className="text-sm text-surface-500 mb-1">진행 중</p>
          <p className="text-2xl font-bold text-blue-600">
            {dashboardStats.activeProjects}
          </p>
        </div>
        <div className="bg-white border border-surface-200 rounded-xl p-5">
          <p className="text-sm text-surface-500 mb-1">완료</p>
          <p className="text-2xl font-bold text-green-600">
            {dashboardStats.completedProjects}
          </p>
        </div>
        <div className="bg-white border border-surface-200 rounded-xl p-5">
          <p className="text-sm text-surface-500 mb-1">총 매출</p>
          <p className="text-2xl font-bold text-surface-950">
            {formatCurrency(dashboardStats.totalRevenue)}원
          </p>
        </div>
        <div className="bg-white border border-surface-200 rounded-xl p-5">
          <p className="text-sm text-surface-500 mb-1">고객 만족도</p>
          <p className="text-2xl font-bold text-yellow-600">
            {dashboardStats.clientSatisfaction}/5.0
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Projects */}
        <div className="lg:col-span-2 bg-white border border-surface-200 rounded-xl">
          <div className="p-5 border-b border-surface-200 flex items-center justify-between">
            <h2 className="font-semibold text-surface-900">최근 프로젝트</h2>
            <Link
              href="/projects"
              className="text-sm text-primary-600 hover:text-primary-700 font-medium"
            >
              전체 보기
            </Link>
          </div>
          <div className="divide-y divide-surface-100">
            {recentProjects.map((project) => {
              const status = statusLabels[project.status];
              return (
                <div
                  key={project.id}
                  className="p-5 hover:bg-surface-50 transition"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <Link
                        href={`/projects`}
                        className="font-medium text-surface-900 hover:text-primary-600 transition"
                      >
                        {project.name}
                      </Link>
                      <p className="text-sm text-surface-500 mt-0.5">
                        {project.clientName} · {project.roomType} · {project.style}
                      </p>
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${status.color}`}
                    >
                      {status.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex-1 bg-surface-100 rounded-full h-2">
                      <div
                        className="bg-primary-500 h-2 rounded-full transition-all"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                    <span className="text-xs text-surface-500 w-10 text-right">
                      {project.progress}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Activity & Quick Actions */}
        <div className="space-y-6">
          <div className="bg-white border border-surface-200 rounded-xl p-5">
            <h2 className="font-semibold text-surface-900 mb-4">빠른 작업</h2>
            <div className="space-y-2">
              <Link
                href="/projects/new"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-50 transition"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-surface-900">새 프로젝트 생성</p>
                  <p className="text-xs text-surface-500">새 인테리어 프로젝트 시작</p>
                </div>
              </Link>
              <Link
                href="/room-designer"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-50 transition"
              >
                <div className="w-10 h-10 bg-accent-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-surface-900">룸 디자이너</p>
                  <p className="text-xs text-surface-500">공간 디자인 시작</p>
                </div>
              </Link>
              <Link
                href="/catalog"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-50 transition"
              >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-surface-900">가구 둘러보기</p>
                  <p className="text-xs text-surface-500">카탈로그 검색</p>
                </div>
              </Link>
              <Link
                href="/moodboard"
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-50 transition"
              >
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-surface-900">무드보드 만들기</p>
                  <p className="text-xs text-surface-500">디자인 영감 정리</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-white border border-surface-200 rounded-xl p-5">
            <h2 className="font-semibold text-surface-900 mb-4">프로젝트 현황</h2>
            <div className="space-y-3">
              {Object.entries(statusLabels).map(([key, { label, color }]) => {
                const count = projects.filter((p) => p.status === key).length;
                return (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${color}`}>
                        {label}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-surface-700">
                      {count}건
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
