"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3 max-w-screen-xl mx-auto">
          <h1 className="text-2xl font-bold text-pink-600">Doce Essência</h1>
          <button
            onClick={toggleSidebar}
            className="text-pink-600 hover:text-pink-800 transition-colors"
            aria-label="Abrir menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <button
            onClick={toggleSidebar}
            className="self-end p-3 text-indigo-600 hover:text-indigo-800 transition-colors"
            aria-label="Fechar menu"
          >
            ✕
          </button>
          <nav className="flex-grow px-4 py-6">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/produtos"
                  className="text-gray-800 hover:text-indigo-600 transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link
                  href="/produtos/favoritos"
                  className="text-gray-800 hover:text-indigo-600 transition-colors"
                >
                  Favoritos
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-800 hover:text-indigo-600 transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
        ></div>
      )}
    </>
  );
};

export default Header;
