import "./App.css";

function App() {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        {/* Header */}
        <header className="border-b border-secondary/20">
          <div className="container flex h-16 items-center justify-between">
            <h1 className="text-lg font-semibold text-primary">
              frontend-template
            </h1>

            <span className="text-sm text-secondary">
              React • Vite • Tailwind
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className="container py-12">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-primary">Welcome 👋</h2>

              <p className="mt-2 text-secondary">
                This is your personal React + Vite + Tailwind starter template.
              </p>
            </div>

            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">What’s included</h3>

              <ul className="mt-4 space-y-2 text-sm text-secondary">
                <li>⚡ Vite dev server</li>
                <li>🎨 Tailwind design tokens</li>
                <li>🧱 Clean starter structure</li>
                <li>🧼 ESLint ready</li>
              </ul>

              <div className="mt-6 flex gap-3">
                <button className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary/90 transition">
                  Get Started
                </button>

                <button className="rounded-md border border-secondary/30 px-4 py-2 text-secondary hover:bg-secondary/10 transition">
                  Docs
                </button>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-secondary/20">
          <div className="container py-4 text-center text-xs text-secondary">
            © {new Date().getFullYear()} frontend-template
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
