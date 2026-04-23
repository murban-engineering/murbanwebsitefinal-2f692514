const App = () => {
  return (
    <main className="h-screen overflow-hidden bg-white">
      <div className="flex h-full flex-col px-4 py-4 sm:px-8 sm:py-6 lg:px-12 lg:py-8">
        <header className="flex-shrink-0">
          <img
            src="/murbanlogo.ico"
            alt="Murban logo"
            className="h-12 w-auto sm:h-14"
          />
        </header>

        <section className="flex min-h-0 flex-1 items-center gap-6 pt-4 sm:gap-10 sm:pt-6 lg:gap-14 lg:pt-8">
          <div className="w-full max-w-xl space-y-4 sm:space-y-6 lg:space-y-8">
            <h1 className="text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Murban ENGINEERING
            </h1>
            <p className="max-w-md text-base text-gray-600 sm:text-lg">
              Website under development.
            </p>
          </div>

          <div className="hidden min-w-0 flex-1 self-stretch md:block">
            <img
              src="/construction-concept-image-helmet-rolled-blueprints-wooden-boards-retro-style.jpg"
              alt="Murban Engineering project preview"
              className="h-full w-full rounded-2xl object-cover shadow-lg"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
