'use client'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navb = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <a className="text-white font-bold text-xl">Inicio</a>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink path="/" currentPath={router.pathname}>
                  Inicio
                </NavLink>
                <NavLink path="/menu" currentPath={router.pathname}>
                  Productos
                </NavLink>
                <NavLink path="/services" currentPath={router.pathname}>
                  Servicios
                </NavLink>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <NavLinkMobile path="/" currentPath={router.pathname} onClick={toggleNavbar}>
            Inicio
          </NavLinkMobile>
          <NavLinkMobile path="/about" currentPath={router.pathname} onClick={toggleNavbar}>
            Acerca de
          </NavLinkMobile>
          <NavLinkMobile path="/contact" currentPath={router.pathname} onClick={toggleNavbar}>
            Contacto
          </NavLinkMobile>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ path, currentPath, children }: { path: string; currentPath: string; children: React.ReactNode }) => {
  const isActive = path === currentPath;

  return (
    <Link href={path}>
      <a
        className={`${
          isActive ? 'text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        } px-3 py-2 rounded-md text-sm font-medium`}
      >
        {children}
      </a>
    </Link>
  );
};

const NavLinkMobile = ({ path, currentPath, children, onClick }: { path: string; currentPath: string; children: React.ReactNode; onClick: () => void }) => {
  const isActive = path === currentPath;

  return (
    <Link href={path}>
      <a
        onClick={onClick}
        className={`${
          isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        } block px-3 py-2 rounded-md text-base font-medium`}
      >
        {children}
      </a>
    </Link>
  );
};

export default Navb;

