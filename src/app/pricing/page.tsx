import PricingSection from "@/components/landing/Pricing";

export default function PricingPage() {
  return (
    <div className="py-8">
      <PricingSection />

      {/* FAQ */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-surface-950 text-center mb-10">
          자주 묻는 질문
        </h2>
        <div className="space-y-4">
          {[
            {
              q: "무료 체험 기간은 얼마인가요?",
              a: "모든 플랜에 14일 무료 체험이 포함되어 있습니다. 체험 기간 동안 해당 플랜의 모든 기능을 사용할 수 있으며, 카드 등록 없이 시작할 수 있습니다.",
            },
            {
              q: "플랜을 변경하거나 해지할 수 있나요?",
              a: "네, 언제든지 플랜을 업그레이드하거나 다운그레이드할 수 있습니다. 해지도 설정 페이지에서 간편하게 진행할 수 있으며, 현재 결제 주기가 끝날 때까지 서비스를 이용할 수 있습니다.",
            },
            {
              q: "팀 협업은 어떻게 작동하나요?",
              a: "엔터프라이즈 플랜에서는 최대 20명의 팀원을 초대할 수 있습니다. 각 팀원에게 역할(관리자, 디자이너, 뷰어)을 부여하여 프로젝트 접근 권한을 관리할 수 있습니다.",
            },
            {
              q: "데이터는 안전하게 보관되나요?",
              a: "모든 데이터는 암호화되어 안전하게 보관됩니다. AWS 인프라를 사용하며, 정기적인 백업과 보안 감사를 진행하고 있습니다.",
            },
            {
              q: "API 연동을 지원하나요?",
              a: "엔터프라이즈 플랜에서 REST API를 제공합니다. 기존 업무 시스템이나 ERP와 연동하여 프로젝트 데이터를 동기화할 수 있습니다.",
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group border border-surface-200 rounded-xl overflow-hidden"
            >
              <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-surface-50 transition">
                <span className="font-medium text-surface-900">{faq.q}</span>
                <svg
                  className="w-5 h-5 text-surface-400 group-open:rotate-180 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="px-5 pb-5 text-sm text-surface-600 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
