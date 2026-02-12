import { pricingPlans } from "@/lib/data";

function formatPrice(price: number) {
  return new Intl.NumberFormat("ko-KR").format(price);
}

export default function Pricing() {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-surface-950 mb-4">
            합리적인 요금제
          </h2>
          <p className="text-lg text-surface-500">
            비즈니스 규모에 맞는 플랜을 선택하세요. 모든 플랜에 14일 무료 체험이
            포함됩니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-8 border-2 transition ${
                plan.highlighted
                  ? "border-primary-600 shadow-xl shadow-primary-600/10 relative"
                  : "border-surface-200 hover:border-surface-300"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                  가장 인기
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-surface-900 mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-surface-500">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold text-surface-950">
                  {formatPrice(plan.price)}
                </span>
                <span className="text-surface-500 ml-1">원/{plan.period}</span>
              </div>
              <button
                className={`w-full py-3 rounded-xl font-semibold transition mb-8 ${
                  plan.highlighted
                    ? "bg-primary-600 text-white hover:bg-primary-700"
                    : "bg-surface-100 text-surface-700 hover:bg-surface-200"
                }`}
              >
                시작하기
              </button>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className={`w-5 h-5 shrink-0 ${
                        plan.highlighted
                          ? "text-primary-600"
                          : "text-surface-400"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-surface-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
