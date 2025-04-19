"use client";

import Link from "next/link";
import Image from "next/image"; // Import the Next.js Image component
import { NavLink } from "./NavLink";
import { useState } from "react";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
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
            <NavLink href="/streaming">Streaming</NavLink>
            <NavLink href="/community">Community</NavLink>
            <NavLink href="/consulting">Consulting</NavLink>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="sm:hidden absolute top-16 left-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
              <div className="w-auto px-2 pt-2 pb-3 flex flex-col gap-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 space-x-4">
                <NavLink href="/learning">Learning</NavLink>
                <NavLink href="/streaming">Streaming</NavLink>
                <NavLink href="/community">Community</NavLink>
                <NavLink href="/consulting">Consulting</NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
