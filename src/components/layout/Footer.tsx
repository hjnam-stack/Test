import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-950 text-surface-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold text-white">
                Interior<span className="text-primary-400">Hub</span>
              </span>
            </div>
            <p className="text-sm text-surface-400">
              인테리어 디자이너를 위한 올인원 플랫폼.
              <br />
              디자인부터 프로젝트 관리까지.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">제품</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/room-designer" className="hover:text-white transition">
                  룸 디자이너
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="hover:text-white transition">
                  가구 카탈로그
                </Link>
              </li>
              <li>
                <Link href="/moodboard" className="hover:text-white transition">
                  무드보드
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition">
                  요금제
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">지원</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="hover:text-white transition cursor-pointer">
                  고객센터
                </span>
              </li>
              <li>
                <span className="hover:text-white transition cursor-pointer">
                  사용 가이드
                </span>
              </li>
              <li>
                <span className="hover:text-white transition cursor-pointer">
                  API 문서
                </span>
              </li>
              <li>
                <span className="hover:text-white transition cursor-pointer">
                  문의하기
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">회사</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="hover:text-white transition cursor-pointer">
                  소개
                </span>
              </li>
              <li>
                <span className="hover:text-white transition cursor-pointer">
                  채용
                </span>
              </li>
              <li>
                <span className="hover:text-white transition cursor-pointer">
                  블로그
                </span>
              </li>
              <li>
                <span className="hover:text-white transition cursor-pointer">
                  이용약관
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-surface-800 text-sm text-surface-500 text-center">
          &copy; 2026 InteriorHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
