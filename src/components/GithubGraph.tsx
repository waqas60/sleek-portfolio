import { GitHubCalendar } from "react-github-calendar";

export default function GithubGraph() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="">
      <h1 className="text-md font-semibold mb-4">Github</h1>
      <div className="overflow-x-auto md:overflow-hidden flex justify-center w-full rounded-2xl border border-neutral-200 p-4 dark:border-neutral-600 select-none">
        <GitHubCalendar
          username="waqas60"
          year={currentYear}
          blockSize={8}
          blockMargin={3}
          fontSize={10}
          showWeekdayLabels={false}
        />
      </div>
    </section>
  );
}
