import Image from "next/image";
import { Button } from "@/shared/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image className="dark:invert" src="/next.svg" alt="Next.js logo" width={100} height={20} priority />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">한문철 AI에 오신 것을 환영합니다!</h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            교통사고 영상을 AI가 분석하여 과실비율, 분석이유, 관련 판례를 제공하는 분쟁심의 지원 플랫폼입니다.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto">
            영상 분석하기
          </Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            서비스 소개
          </Button>
        </div>
      </main>
    </div>
  );
}
