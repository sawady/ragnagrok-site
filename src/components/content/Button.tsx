"use client";

export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 bg-amber-800 text-white rounded">
      {children}
    </button>
  );
}
