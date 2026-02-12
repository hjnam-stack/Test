import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20 bg-primary-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          지금 바로 시작하세요
        </h2>
        <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
          14일 무료 체험으로 InteriorHub의 모든 기능을 경험해보세요. 카드 등록
          없이 바로 시작할 수 있습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="px-8 py-3.5 bg-white text-primary-700 rounded-xl hover:bg-primary-50 font-semibold transition"
          >
            무료 체험 시작
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-3.5 border-2 border-primary-300 text-white rounded-xl hover:bg-primary-500 font-semibold transition"
          >
            요금제 비교
          </Link>
        </div>
      </div>
    </section>
  );
}
