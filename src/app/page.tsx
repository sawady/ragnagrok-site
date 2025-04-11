function HeroSection() {
  return (
    <section className="text-center sm:text-left">
      <h1 className="text-4xl font-bold mb-4">Welcome to Ragnagrok!</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Courses, careers, and community for advanced developers. Dive into deep
        technical content, join rich discussions, and build impactful projects.
      </p>
    </section>
  );
}

function Careers() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Careers & Learning Paths</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-2">
        Want to become a Technical Leader or simply learn advanced topics? There
        is a way. Explore some of our top courses:
      </p>
      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-2">
        <li>
          Rust, Golang, Python, Java, PHP, Node.js and Haskell for Advanced
          Backend Developers
        </li>
        <li>Master System Design</li>
        <li>Advanced topics on Databases</li>
        <li>High-Performance Web Architectures</li>
      </ul>
      <p className="text-gray-700 dark:text-gray-300">
        We also offer a learning path designed to bridge the gap for
        intermediate developers, ensuring everyone feels prepared to join.
      </p>
    </section>
  );
}

function CommunityForum() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Community Forum</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Ask questions, share insights, or support fellow developers. Discussion
        threads coming soon!
      </p>
    </section>
  );
}

function LiveSessions() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Inspiring Live Sessions</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Tune into live sessions on real-world engineering challenges. Our
        schedule will be announced soon.
      </p>
    </section>
  );
}

function DemoProjects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Demo Projects</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Discover real-world projects built with cutting-edge tools. Learn by
        exploring production-level code.
      </p>
    </section>
  );
}

function ExpertHelp() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Get Expert Help</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Facing a complex technical problem? Submit it and get tailored advice
        from seasoned professionals.
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[64px] row-start-2 items-center sm:items-start w-full max-w-4xl">
        <HeroSection />
        <Careers />
        <CommunityForum />
        <LiveSessions />
        <DemoProjects />
        <ExpertHelp />
      </main>
    </div>
  );
}
