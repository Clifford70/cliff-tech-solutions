import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-white px-6">

      <div className="text-center">

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-gray-400">
          404
        </p>

        <h1 className="mt-5 text-5xl font-bold tracking-tight">
          Page not found
        </h1>

        <p className="mx-auto mt-5 max-w-md leading-7 text-gray-600">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-black px-7 py-4 text-sm font-bold text-white"
        >
          Back to Home
        </Link>

      </div>

    </main>
  );
}