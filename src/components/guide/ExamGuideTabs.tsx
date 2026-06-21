import { FileCheck2, GraduationCap, ShieldCheck, UserRoundCheck } from "lucide-react";
import { examGuideSections, type ExamGuideSection } from "../../data/examGuideContent";
import { Card } from "../ui/Card";

const sectionIcons = [GraduationCap, UserRoundCheck, ShieldCheck, FileCheck2];

type ExamGuideTabsProps = {
  activeSection: ExamGuideSection;
  onSectionChange: (section: ExamGuideSection) => void;
};

export function ExamGuideTabs({ activeSection, onSectionChange }: ExamGuideTabsProps) {
  return (
    <Card className="p-1.5">
      <div aria-label="OPIc 수험 가이드 하위 페이지" className="grid grid-cols-2 gap-1 lg:grid-cols-4" role="tablist">
        {examGuideSections.map((section, index) => {
          const Icon = sectionIcons[index];
          const active = section.id === activeSection;

          return (
            <button
              aria-label={section.label}
              aria-selected={active}
              className={`flex min-h-12 items-center justify-center gap-2 rounded-md px-2 py-2 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 sm:text-sm ${active ? "bg-indigo-600 text-white shadow-sm" : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"}`}
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              role="tab"
              type="button"
            >
              <Icon className="h-4 w-4 shrink-0" />
              <span className="hidden sm:inline">{section.label}</span>
              <span className="sm:hidden">{section.shortLabel}</span>
            </button>
          );
        })}
      </div>
    </Card>
  );
}
