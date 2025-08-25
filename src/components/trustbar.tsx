export default function Trustbar() {
  const icons = [
    { name: "React", className: "devicon-react-original colored" },
    { name: "Next.js", className: "devicon-nextjs-original" },
    { name: "Express", className: "devicon-express-original" },
    { name: "Node.js", className: "devicon-nodejs-plain colored" },
    { name: "Tailwind CSS", className: "devicon-tailwindcss-original colored" },
    { name: "TypeScript", className: "devicon-typescript-plain colored" },
    { name: "Laravel", className: "devicon-laravel-plain colored" },
    { name: "Flutter", className: "devicon-flutter-plain colored" },
    { name: "JavaScript", className: "devicon-javascript-plain colored" },
    { name: "Python", className: "devicon-python-plain colored" },
    { name: "Go", className: "devicon-go-plain colored" },
    { name: "PHP", className: "devicon-php-plain colored" },
    { name: "MongoDB", className: "devicon-mongodb-plain colored" },
    { name: "MySQL", className: "devicon-mysql-plain colored" },
    { name: "Redis", className: "devicon-redis-plain colored" },
    { name: "Docker", className: "devicon-docker-plain colored" },
  ];

  // duplicate for seamless marquee loop
  const loop = [...icons, ...icons];

  return (
    <section aria-label="Trusted by" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
            Dipercaya brand & dibangun dengan stack populer
          </p>
        </div>

        <div className="mt-8 relative group">
          <div className="overflow-hidden">
            <div className="flex flex-nowrap items-center gap-12 py-3 will-change-transform animate-[scroll-right_28s_linear_infinite] group-hover:[animation-play-state:paused]">
              {loop.map((it, idx) => (
                <span
                  key={it.name + idx}
                  className="inline-flex h-16 w-36 md:h-20 md:w-44 items-center justify-center opacity-80 transition hover:opacity-100"
                  title={it.name}
                >
                  <i className={`${it.className} text-5xl md:text-6xl`} aria-hidden="true" />
                  <span className="sr-only">{it.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}