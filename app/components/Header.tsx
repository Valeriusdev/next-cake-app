export default function Header() {
  return (
    <header className="bg-white shadow flex items-center justify-between px-8 py-6">
      <a href="/" className="text-blue-700 text-2xl font-bold">
        Next.js Cake Shop
      </a>
      <nav className="flex gap-8 text-sm text-gray-500">
        {["Home", "Cakes", "About", "Contact"].map((item) => (
          <span key={item} className="cursor-pointer hover:text-blue-700 transition-colors">
            {item}
          </span>
        ))}
      </nav>
    </header>
  );
}
