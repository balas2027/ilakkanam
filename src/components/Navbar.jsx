import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import logo from "./logo.png";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Careers", href: "/careers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contactus" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// Function to instantly scroll to top
const scrollInstantlyToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "instant",
  });
};

function Example() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Handle navigation with delay and preloader
  const handleNavigation = (href, event, close) => {
    event.preventDefault();

    // Don't navigate if already on the same page
    if (location.pathname === href) {
      // Close mobile menu if provided
      if (close) close();
      return;
    }

    // Close mobile menu if provided
    if (close) close();

    // Show preloader
    setIsLoading(true);

    // Navigate after 1 second delay, then scroll to top
    setTimeout(() => {
      navigate(href);
      // Ensure we're at the top of the new page
      setTimeout(() => {
        scrollInstantlyToTop();
        setIsLoading(false);
      }, 100); // Small delay to ensure page loads
    }, 1000);
  };

  return (
    <>
      {/* Preloader Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] backdrop-blur-3xl bg-opacity-75 flex items-center justify-center">
          <div className="text-center">
            {/* Enhanced spinning loader */}
            <div className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-gradient-to-r from-purple-500 via-pink-500 to-red-500 border-t-transparent shadow-2xl motion-reduce:animate-[spin_1.5s_linear_infinite] relative">
              <div className="absolute inset-2 rounded-full border-2 border-white/20 animate-pulse"></div>
            </div>
            <div className="mt-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-xl animate-bounce font-bold tracking-wide">
              Loading...
            </div>
          </div>
        </div>
      )}

      <Disclosure
        as="nav"
        className="bg-black fixed overflow-x-hidden left-0 right-0 z-50 top-0 "
      >
        {({ close }) => (
          <>
            <div className="2xl:mx-15 xl:mx-10 mx-5 ">
              <div className="mx-auto w-full px-2  lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon
                        aria-hidden="true"
                        className="block size-6 group-data-open:hidden"
                      />
                      <XMarkIcon
                        aria-hidden="true"
                        className="hidden size-6 group-data-open:block"
                      />
                    </DisclosureButton>
                  </div>
                  <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                    <div className="flex gap-x-3 items-center">
                      <img
                        alt="Your Company"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                        className="h-8 sm:block hidden w-auto"
                      />
                      <div className="lg:text-lg sm:hidden block lg:block  text-white sm:font-medium lg:font-bold">
                        ILAKKANAM PRIVATE LIMITED
                      </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:block">
                      <div className="flex xl:space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => handleNavigation(item.href, e)}
                            className={classNames(
                              location.pathname === item.href
                                ? "underline underline-offset-4 bg-white text-black"
                                : "text-gray-300 ",
                              "rounded-md px-3 group py-2 text-sm font-medium cursor-pointer hover:bg-white transition-all duration-300  hover:text-black"
                            )}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavigation(item.href, e, close)}
                      className={classNames(
                        location.pathname === item.href
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium cursor-pointer"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </DisclosurePanel>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default Example;