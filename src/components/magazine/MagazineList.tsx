import { ArrowRight, Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import { magazineArticles } from "../../data/magazine";
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";

export function MagazineList() {
  return (
    <div className="space-y-7">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600 dark:text-indigo-300">OOM Magazine</p>
        <h1 className="mt-2 text-balance text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">외우는 답에서, 나답게 이어 말하는 답으로</h1>
        <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">시험 직전에도 다시 펼쳐 볼 수 있도록, 오픽 학습을 장면·구조·발화로 나누어 정리합니다. 읽고 바로 한 가지씩 말해 보세요.</p>
      </header>

      <div className="grid gap-5 lg:grid-cols-2">
        {magazineArticles.map((article) => (
          <Card className="group overflow-hidden rounded-xl transition hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md dark:hover:border-indigo-800" key={article.id}>
            <img alt={article.imageAlt} className="aspect-[16/8] w-full object-cover" loading="lazy" src={article.image} />
            <div className="space-y-4 p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="indigo">{article.category}</Badge>
                <span className="inline-flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400"><Clock3 aria-hidden="true" className="h-3.5 w-3.5" />{article.readMinutes}</span>
              </div>
              <div>
                <h2 className="text-balance text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">{article.title}</h2>
                <p className="mt-2 text-sm font-medium leading-6 text-zinc-500 dark:text-zinc-400">{article.subtitle}</p>
              </div>
              <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">{article.summary}</p>
              <div className="flex items-center justify-between gap-3 border-t border-zinc-100 pt-4 dark:border-zinc-800">
                <span className="text-xs text-zinc-500 dark:text-zinc-400">{article.date}</span>
                <Link className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 transition group-hover:gap-2.5 hover:text-indigo-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:text-indigo-300 dark:hover:text-indigo-200 dark:focus-visible:ring-offset-zinc-900" to={`/magazine/${article.id}`}>
                  기사 읽기 <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
