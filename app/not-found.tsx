import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="text-center max-w-md">
        <p className="text-sm tracking-widest text-gray-400 mb-4">
          404 — PAGE NOT FOUND
        </p>

        <h1 className="text-4xl font-bold mb-6">
          This page does not exist
        </h1>

        <p className="text-gray-300 mb-8">
          Synergic Intelligent Systems
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-4 rounded font-semibold text-black"
          style={{ backgroundColor: "var(--brand-red)" }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
