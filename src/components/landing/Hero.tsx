import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
              새로운 3D 룸 디자이너 출시
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-surface-950 leading-tight mb-6">
              인테리어 디자인의
              <br />
              <span className="text-primary-600">새로운 기준</span>
            </h1>
            <p className="text-lg text-surface-600 mb-8 max-w-lg">
              디자인 컨셉부터 프로젝트 관리, 고객 소통까지. InteriorHub 하나로
              인테리어 비즈니스의 모든 것을 관리하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/dashboard"
                className="px-8 py-3.5 bg-primary-600 text-white rounded-xl hover:bg-primary-700 font-semibold text-center transition shadow-lg shadow-primary-600/25"
              >
                무료로 시작하기
              </Link>
              <Link
                href="/room-designer"
                className="px-8 py-3.5 border-2 border-surface-300 text-surface-700 rounded-xl hover:border-surface-400 font-semibold text-center transition"
              >
                룸 디자이너 체험
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-surface-500">
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                무료 체험 14일
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                카드 등록 불필요
              </div>
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-4 h-4 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                언제든 해지 가능
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-surface-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full" />
                <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                <div className="w-3 h-3 bg-green-400 rounded-full" />
              </div>
              <div className="bg-surface-100 rounded-xl p-4 h-72 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-px opacity-20">
                  {Array.from({ length: 48 }).map((_, i) => (
                    <div key={i} className="bg-surface-400" />
                  ))}
                </div>
                <div className="relative z-10 space-y-3 w-full px-4">
                  <div className="flex gap-3">
                    <div className="w-32 h-20 bg-primary-200 rounded-lg flex items-center justify-center text-xs text-primary-700 font-medium">
                      소파
                    </div>
                    <div className="w-16 h-16 bg-accent-200 rounded-lg flex items-center justify-center text-xs text-accent-700 font-medium">
                      테이블
                    </div>
                  </div>
                  <div className="flex gap-3 justify-end">
                    <div className="w-24 h-14 bg-yellow-200 rounded-lg flex items-center justify-center text-xs text-yellow-700 font-medium">
                      수납장
                    </div>
                    <div className="w-10 h-10 bg-green-200 rounded-full flex items-center justify-center text-xs text-green-700 font-medium">
                      조명
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-20 h-24 bg-purple-200 rounded-lg flex items-center justify-center text-xs text-purple-700 font-medium">
                      침대
                    </div>
                    <div className="w-12 h-12 bg-blue-200 rounded-lg flex items-center justify-center text-xs text-blue-700 font-medium">
                      의자
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-surface-900">
                    거실 디자인 A안
                  </p>
                  <p className="text-xs text-surface-500">
                    모던 미니멀 스타일
                  </p>
                </div>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-surface-800" />
                  <div className="w-6 h-6 rounded-full bg-primary-400" />
                  <div className="w-6 h-6 rounded-full bg-accent-300" />
                  <div className="w-6 h-6 rounded-full bg-yellow-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
