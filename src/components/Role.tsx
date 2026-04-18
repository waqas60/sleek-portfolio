const headings = ["Full Stack Developer", "Frontend Engineer"];

export default function Role() {
  return (
    <div className="overflow-hidden items-center flex ">
      {headings.map((text, i) => (
        <h1
          key={i}
          className="animate-textCycle text-xs border border-neutral-300 shadow-md dark:text-neutral-200 text-neutral-500 p-1 rounded-md"
          style={{ animationDelay: `${i * (10 / headings.length)}s` }}
        >
          {text}
        </h1>
      ))}
    </div>
  );
}
