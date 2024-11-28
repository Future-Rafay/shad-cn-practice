// 'use client'

// import React, { useState } from "react";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";

// const Header: React.FC = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

//   return (
//     <header className="bg-white shadow-md sticky top-0 z-10">
//       <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-gray-800">
//           <a href="/" aria-label="Homepage">
//             shad Cn
//           </a>
//         </div>

//         {/* Desktop Navigation Menu */}
//         <nav className="hidden md:flex space-x-6">
//           <NavigationMenu>
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
//                 <NavigationMenuContent className="w-56 p-4 bg-white border shadow-md">
//                   <ul>
//                     <li>
//                       <NavigationMenuLink href="/item-one/overview">
//                         Overview
//                       </NavigationMenuLink>
//                     </li>
//                     <li>
//                       <NavigationMenuLink href="/item-one/features">
//                         Features
//                       </NavigationMenuLink>
//                     </li>
//                     <li>
//                       <NavigationMenuLink href="/item-one/pricing">
//                         Pricing
//                       </NavigationMenuLink>
//                     </li>
//                     <li>
//                       <NavigationMenuLink href="/item-one/contact">
//                         Contact
//                       </NavigationMenuLink>
//                     </li>
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>

//           <NavigationMenu>
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
//                 <NavigationMenuContent className="w-56 p-4 bg-white border shadow-md">
//                   <p>Quick start guide and basic information.</p>
//                   <ul>
//                     <li>
//                       <NavigationMenuLink href="/getting-started/installation">
//                         Installation
//                       </NavigationMenuLink>
//                     </li>
//                     <li>
//                       <NavigationMenuLink href="/getting-started/setup">
//                         Setup
//                       </NavigationMenuLink>
//                     </li>
//                     <li>
//                       <NavigationMenuLink href="/getting-started/configuration">
//                         Configuration
//                       </NavigationMenuLink>
//                     </li>
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//                 <NavigationMenuContent className="w-56 p-4 bg-white border shadow-md">
//                   <p>Browse available UI components.</p>
//                   <ul>
//                     <li>
//                       <NavigationMenuLink href="/components/buttons">
//                         Buttons
//                       </NavigationMenuLink>
//                     </li>
//                     <li>
//                       <NavigationMenuLink href="/components/cards">Cards</NavigationMenuLink>
//                     </li>
//                     <li>
//                       <NavigationMenuLink href="/components/forms">Forms</NavigationMenuLink>
//                     </li>
//                   </ul>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>

//               <NavigationMenuItem>
//                 <NavigationMenuLink href="/documentation">
//                   Documentation
//                 </NavigationMenuLink>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </nav>

//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <button
//             className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md"
//             aria-label="Open Menu"
//             onClick={toggleMobileMenu}
//           >
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-white shadow-md mt-4">
//           <NavigationMenu>
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <NavigationMenuLink href="/item-one">Item One</NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuLink href="/getting-started">Getting Started</NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuLink href="/components">Components</NavigationMenuLink>
//               </NavigationMenuItem>
//               <NavigationMenuItem>
//                 <NavigationMenuLink href="/documentation">Documentation</NavigationMenuLink>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/" aria-label="Homepage">
            shad Cn
          </a>
        </div>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:flex space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent className="w-56 p-4 bg-white border shadow-md">
                  <ul>
                    <li>
                      <NavigationMenuLink href="/item-one/overview">
                        Overview
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/item-one/features">
                        Features
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/item-one/pricing">
                        Pricing
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/item-one/contact">
                        Contact
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                <NavigationMenuContent className="w-56 p-4 bg-white border shadow-md">
                  <p>Quick start guide and basic information.</p>
                  <ul>
                    <li>
                      <NavigationMenuLink href="/getting-started/installation">
                        Installation
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/getting-started/setup">
                        Setup
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/getting-started/configuration">
                        Configuration
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                <NavigationMenuContent className="w-56 p-4 bg-white border shadow-md">
                  <p>Browse available UI components.</p>
                  <ul>
                    <li>
                      <NavigationMenuLink href="/components/buttons">
                        Buttons
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/components/cards">
                        Cards
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink href="/components/forms">
                        Forms
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink href="/documentation">
                  Documentation
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            className="text-gray-600 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-md"
            aria-label="Open Menu"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black shadow-md mt-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="/item-one">
                  Item One
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/getting-started">
                  Getting Started
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/components">
                  Components
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="/documentation">
                  Documentation
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-800">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-gray-800"
            >
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </nav> */}
        </div>
      )}
    </header>
  );
};

export default Header;
