const features = [
  {
    title: "룸 디자이너",
    description:
      "직관적인 드래그 앤 드롭 인터페이스로 공간을 디자인하세요. 가구 배치와 색상 조합을 실시간으로 확인할 수 있습니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 8a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zm10 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
    color: "bg-primary-100 text-primary-600",
  },
  {
    title: "가구 카탈로그",
    description:
      "10,000개 이상의 가구와 소품 데이터베이스에서 프로젝트에 맞는 제품을 찾아보세요. 가격, 사이즈, 브랜드별 필터링을 지원합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    color: "bg-accent-100 text-accent-600",
  },
  {
    title: "프로젝트 관리",
    description:
      "진행 상황 추적, 일정 관리, 예산 관리를 한 곳에서. 클라이언트와의 소통도 플랫폼 안에서 해결하세요.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
    color: "bg-green-100 text-green-600",
  },
  {
    title: "무드보드",
    description:
      "영감을 시각적으로 정리하고 클라이언트와 공유하세요. 컬러 팔레트, 소재, 가구를 조합하여 디자인 방향을 제시합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "견적서 자동 생성",
    description:
      "선택한 가구와 시공 항목을 바탕으로 전문적인 견적서를 자동으로 생성합니다. PDF 내보내기를 지원합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "팀 협업",
    description:
      "팀원들과 실시간으로 프로젝트를 공유하고 협업하세요. 역할 기반 권한 관리와 코멘트 기능을 제공합니다.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    color: "bg-blue-100 text-blue-600",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-surface-950 mb-4">
            디자이너에게 필요한 모든 것
          </h2>
          <p className="text-lg text-surface-500 max-w-2xl mx-auto">
            인테리어 디자인 프로세스 전체를 하나의 플랫폼에서 관리하세요.
            복잡한 업무를 간단하게 만들어 드립니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-surface-200 hover:border-primary-200 hover:shadow-lg transition-all group"
            >
              <div
                className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-surface-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-surface-500 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
