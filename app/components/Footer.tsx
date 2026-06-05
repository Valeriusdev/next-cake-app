export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-gray-100 mt-auto px-8 py-6 text-center text-sm text-gray-500">
      <div className="flex items-center justify-center gap-3">
        <span className="font-medium">{new Date().getFullYear()}</span>
        <span className="text-gray-300">•</span>
        <span>
          Built with{" "}
          <span className="font-semibold text-blue-600">Next.js</span>
        </span>
      </div>
    </footer>
  );
}
