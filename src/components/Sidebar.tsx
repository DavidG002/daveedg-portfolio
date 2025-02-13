import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'CV', href: '#cv' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 h-full w-64 bg-gray-900 z-50"
        initial="closed"
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-white"
        >
          <X size={24} />
        </button>
        <div className="mt-16">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 px-4 text-white hover:bg-gray-800"
              onClick={toggleSidebar}
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.nav>
      <button
        onClick={toggleSidebar}
        className={`fixed top-4 left-4 z-40 text-white transition-opacity duration-300 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Menu size={24} />
      </button>
    </>
  );
};

export default Sidebar;