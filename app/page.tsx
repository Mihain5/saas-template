export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center lg:text-left">
          Welcome to SaaS Template
        </h1>
      </div>
      <div className="mt-8 text-center">
        <p className="text-lg text-muted-foreground">
          A production-ready multi-tenant SaaS template with authentication, database, and payment integration.
        </p>
      </div>
    </main>
  )
} 