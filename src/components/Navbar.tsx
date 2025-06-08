import React, { useState, useEffect, useRef } from 'react';
import { Github, ArrowUpRight, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSwipeable } from 'react-swipeable';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const isMobileDevice = useIsMobile();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobile, setIsMobile] = useState(isMobileDevice);
  const [isSmallScreen, setIsSmallScreen] = useState(typeof window !== "undefined" ? window.innerWidth < 750 : false);
  const navbarRef = useRef<HTMLElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  // Track window width for small screens
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 750);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Always use sidebar on small screens
  useEffect(() => {
    if (isSmallScreen) {
      setIsMobile(true);
      setShowSidebar(false);
    } else {
      setIsMobile(isMobileDevice);
    }
  }, [isSmallScreen, isMobileDevice]);

  // Only run overflow logic on desktop and not small screens
  useEffect(() => {
    if (isSmallScreen || isMobileDevice) return;
    const checkNavbarOverflow = () => {
      if (!navbarRef.current || !buttonsRef.current) return;
      const overflow = buttonsRef.current.offsetWidth > navbarRef.current.offsetWidth;
      if (!overflow && isMobile) {
        setShowSidebar(false);
      }
      setIsMobile(overflow);
    };
    checkNavbarOverflow();
    window.addEventListener('resize', checkNavbarOverflow);
    return () => window.removeEventListener('resize', checkNavbarOverflow);
  }, [isMobile, isMobileDevice, isSmallScreen]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const swipeHandlers = useSwipeable({
    onSwipedRight: () => {
      if (isMobile) setShowSidebar(true);
    },
    onSwipedLeft: () => {
      if (isMobile) setShowSidebar(false);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showSidebar && isMobile && !((event.target as HTMLElement).closest('.sidebar'))) {
        setShowSidebar(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showSidebar, isMobile]);

  return (
    <nav className="border-b border-gray-200 py-4 px-4 md:px-8" ref={navbarRef}>
      <div className="max-w-7xl mx-auto flex justify-between items-center" {...swipeHandlers}>
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Fast<span className="text-fastwrite-600">Write</span>
          </h1>
        </div>
        
        {/* Only show horizontal links if not mobile and not small screen and not overflowing */}
        {!isMobile && (
          <div className="flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Features</a>
            <a href="#platforms" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Platforms</a>
            <a href="#examples" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Examples</a>
            <a href="#installation" className="text-gray-600 hover:text-gray-900 text-sm font-medium">Installation</a>
          </div>
        )}

        {/* Show buttons inline if not mobile and not small screen and not overflowing */}
        {!isMobile ? (
          <div className="flex items-center space-x-4" ref={buttonsRef}>
            <Button variant="outline" size="sm" asChild>
              <a href="https://pypi.org/project/FastWrite/" target="_blank" rel="noopener noreferrer">
                PyPI
              </a>
            </Button>
            <Button
              size="sm"
              className="text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 animate-gradient-border"
              asChild
            >
              <a href="https://ui.fastwrite.kjsieit.com" target="_blank" rel="noopener noreferrer">
                Try FastWrite now
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="sm" className="bg-fastwrite-600 hover:bg-fastwrite-700 text-white" asChild>
              <a href="https://github.com/r-g-kjsit/FastWrite" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        ) : (
          // Show menu button if mobile, small screen, or overflowing
          <Button variant="ghost" size="sm" onClick={toggleSidebar}>
            <Menu className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Sidebar: show if mobile, small screen, or overflowing */}
      {isMobile && (
        <div
          className={cn(
            "sidebar fixed top-0 right-0 h-full w-64 shadow-md z-50 p-4 transform transition-transform duration-300 ease-in-out",
            showSidebar ? "translate-x-0" : "translate-x-full",
            "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
          )}
        >
          <div className="flex flex-col space-y-4">
            <a href="#features" className="text-white text-lg font-medium">Features</a>
            <a href="#platforms" className="text-white text-lg font-medium">Platforms</a>
            <a href="#examples" className="text-white text-lg font-medium">Examples</a>
            <a href="#installation" className="text-white text-lg font-medium">Installation</a>
            <Button variant="outline" size="sm" asChild>
              <a href="https://pypi.org/project/FastWrite/" target="_blank" rel="noopener noreferrer">
                PyPI
              </a>
            </Button>
            <Button
              size="sm"
              className="text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 animate-gradient-border"
              asChild
            >
              <a href="https://ui.fastwrite.kjsieit.com" target="_blank" rel="noopener noreferrer">
                Try FastWrite now
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="sm" className="bg-fastwrite-600 hover:bg-fastwrite-700 text-white" asChild>
              <a href="https://github.com/r-g-kjsit/FastWrite" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
