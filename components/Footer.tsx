'use client'

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center sm:flex-row sm:justify-between">
        {/* Portfolio Link */}
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-lg font-semibold text-gray-800">
            Made with ❤️ by{' '}
            <Link href="https://my-portfolio-animated-abdul-rafays-projects-87eac4f7.vercel.app/" className="text-blue-400 hover:underline" target="_blank">
              Abdul Rafay
            </Link>
          </p>
        </div>

        {/* Copyright Notice */}
        <div className="text-center sm:text-right">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Shad Cn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
