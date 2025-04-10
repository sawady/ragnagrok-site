function HeroSection() {
  return (
    <section className="text-center sm:text-left">
      <h1 className="text-4xl font-bold mb-4">¡Bienvenido a Ragnagrok!</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Cursos, carreras y comunidad para desarrolladores avanzados. Explora
        temas técnicos profundos, únete a discusiones y construye proyectos
        reales.
      </p>
    </section>
  );
}

function LearningPaths() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Rutas de Aprendizaje</h2>
      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300">
        <li>Rust para Desarrolladores Backend</li>
        <li>Maestría en Diseño de Sistemas</li>
        <li>Arquitecturas Web de Alto Rendimiento</li>
      </ul>
    </section>
  );
}

function CommunityForum() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Foro de la Comunidad</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Haz preguntas, comparte ideas o ayuda a otros. ¡Hilos disponibles
        próximamente!
      </p>
    </section>
  );
}

function LiveSessions() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">
        Sesiones en Vivo Inspiradoras
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        Únete a nuestras próximas transmisiones en vivo sobre temas del mundo
        real. Pronto compartiremos el cronograma.
      </p>
    </section>
  );
}

function DemoProjects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Proyectos de Demostración</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Explora proyectos reales construidos con herramientas avanzadas. Aprende
        con ejemplos.
      </p>
    </section>
  );
}

function ExpertHelp() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-2">Obtén Ayuda de Expertos</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Envía tus problemas técnicos complejos y conéctate con expertos para
        obtener ayuda personalizada.
      </p>
    </section>
  );
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[64px] row-start-2 items-center sm:items-start w-full max-w-4xl">
        <HeroSection />
        <LearningPaths />
        <CommunityForum />
        <LiveSessions />
        <DemoProjects />
        <ExpertHelp />
      </main>
    </div>
  );
}
