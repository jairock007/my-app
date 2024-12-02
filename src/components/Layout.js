import React, { useState } from "react";
import { Layout, Menu, X, Users, BarChart3, FileText } from "lucide-react";

// Layout wrapper component that provides consistent navigation
const PageLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isWrongButtonClicked, setIsWrongButtonClicked] = useState(false);

  const handleResize = () => {
    //console.log("handleResize called");
    if (window.innerWidth < 768) {
      //console.log("Mobile detected");
      setIsMobile(true);
      setIsSidebarOpen(false);
    } else {
      //console.log("Desktop detected");
      setIsMobile(false);
      setIsSidebarOpen(true);
    }
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <div
        className={`fixed h-full bg-slate-800 text-white transition-all duration-300 ease-in-out ${
          (isSidebarOpen && !isWrongButtonClicked) || !isMobile
            ? "w-64"
            : "w-20"
        } ${isWrongButtonClicked ? "mobile-sidebar" : ""}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h1
            className={`font-bold text-xl transition-opacity duration-200 ${
              isSidebarOpen ? "opacity-100" : "opacity-0 hidden"
            }`}
          >
           TESLA
          </h1>
          <button
            onClick={() => {
              setIsWrongButtonClicked(true);
              setIsSidebarOpen(false);
            }}
            className="p-2 rounded-lg hover:bg-slate-700 transition-colors duration-200"
          >
            {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="mt-8 space-y-2">
          <NavItem
            icon={<Layout />}
            text="Dashboard"
            isOpen={isSidebarOpen}
            href="/"
            active={window.location.pathname === "/"}
          />
          <NavItem
            icon={<Users />}
            text="Leads"
            isOpen={isSidebarOpen}
            href="/leads"
            active={window.location.pathname === "/leads"}
          />
          <NavItem
            icon={<BarChart3 />}
            text="Analytics"
            isOpen={isSidebarOpen}
            href="/analytics"
            active={window.location.pathname === "/analytics"}
          />
          <NavItem
            icon={<FileText />}
            text="Reports"
            isOpen={isSidebarOpen}
            href="/reports"
            active={window.location.pathname === "/reports"}
          />
        </nav>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 p-8 transition-all duration-300 ${
          isSidebarOpen || !isMobile ? "ml-64" : "ml-20"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const NavItem = ({ icon, text, isOpen, active, href = "/" }) => (
  <a
    href={href}
    className={`flex items-center p-4 rounded-lg transition-all duration-200 ${
      active ? "bg-indigo-700" : "hover:bg-slate-700"
    }`}
  >
    <span className="mr-4">{icon}</span>
    <span
      className={`transition-opacity duration-200 ${
        isOpen ? "opacity-100" : "opacity-0 hidden"
      }`}
    >
      {text}
    </span>
  </a>
);

export { PageLayout, NavItem };
