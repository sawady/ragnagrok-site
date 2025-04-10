import Link from "next/link";
import Image from "next/image"; // Import the Next.js Image component
import { NavLink } from "./NavLink";

export function Navbar() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Title */}
          <div className="flex-shrink-0">
            {/* Wrap logo and title in a flex container for alignment */}
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-white-600 dark:text-white-400 hover:text-white-700 dark:hover:text-white-300 transition-colors"
              aria-label="Ragnagrok Home" // Add aria-label for accessibility
            >
              {/* Use Next.js Image component for optimization */}
              <Image
                src="/logo.png" // Replace with your actual logo file path in /public
                alt="Ragnagrok Logo"
                width={32} // Set desired width (adjust as needed)
                height={32} // Set desired height (adjust as needed)
                className="h-8 w-auto" // Tailwind classes for size (adjust h-8 if needed)
              />
              <span>Ragnagrok</span> {/* Keep the title text */}
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="/learning">Learning</NavLink>
            <NavLink href="/community">Community</NavLink>
            <NavLink href="/live-sessions">Live Sessions</NavLink>
            <NavLink href="/consulting">Consulting</NavLink>
          </div>

          {/* Placeholder for potential mobile menu button */}
          <div className="sm:hidden">
            {/* Mobile menu button can be added here later */}
          </div>
        </div>
      </div>
    </nav>
  );
}
