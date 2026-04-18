const headings = ["Full Stack Developer", "Frontend Engineer"];

export default function Role() {
  return (
    <div className="relative h-7 w-48">
      {headings.map((text, i) => (
        <h1
          key={i}
          className="animate-textCycle absolute text-[10px] border border-neutral-300 shadow-xs dark:text-neutral-200 text-neutral-500 p-1 rounded-md whitespace-nowrap"
          style={{ animationDelay: `${i * (6 / headings.length)}s` }}
        >
          {text}
        </h1>
      ))}
    </div>
  );
}
