import { Droplet, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'About', id: 'about' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplet className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Ryan Michael Waterworks</h1>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>

          <nav className="hidden md:flex gap-8">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-medium transition-colors ${
                  currentPage === link.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-3">
            {links.map(link => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left py-2 font-medium transition-colors ${
                  currentPage === link.id
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
