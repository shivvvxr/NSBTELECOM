import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Search,
  Twitter,
} from "lucide-react";
import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [servicesSearch, setServicesSearch] = useState("");
  const [productsSearch, setProductsSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: "IT AMC & Maintenance", path: "/services#it-amc" },
    { name: "Network Setup & Configuration", path: "/services#network-setup" },
    { name: "System Integration & Deployment", path: "/services#system-integration" },
    { name: "Manpower Supply / Contract Staffing", path: "/services#manpower" },
    { name: "Car Rental / Vehicle Leasing", path: "/services#car-rental" },
    { name: "CCTV Installation & Surveillance", path: "/services#cctv" },
    { name: "Annual Maintenance Support", path: "/services#maintenance-support" },
    { name: "Server & Data Center Setup", path: "/services#server-setup" },
    { name: "Web Development", path: "/services#web-development" },
    { name: "Software Development", path: "/services#software-development" },
  ];

  const products = [
    { name: "Laptops & Notebooks", path: "/products#laptops" },
    { name: "Desktops & Computers", path: "/products#desktops" },
    { name: "Servers", path: "/products#servers" },
    { name: "Workstations", path: "/products#workstations" },
    { name: "Printers", path: "/products#printers" },
    { name: "CCTV / Surveillance", path: "/products#cctv" },
    { name: "Interactive Panels", path: "/products#interactive-panels" },
    { name: "UPS", path: "/products#ups" },
    { name: "Network Switches", path: "/products#network-switches" },
  ];

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(servicesSearch.toLowerCase())
  );

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(productsSearch.toLowerCase())
  );

  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "ABOUT US", path: "/about" },
    { label: "SERVICES", path: "/services" },
    { label: "PRODUCTS", path: "/products" },
    { label: "CONTACT", path: "/contact" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { label: "Twitter", href: "https://twitter.com", icon: Twitter },
    { label: "Instagram", href: "https://instagram.com", icon: Instagram },
    { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" aria-label="NSB TELECOM Home">
            <img src="https://harmless-tapir-303.convex.cloud/api/storage/b770cec3-3a0c-4c9c-b9e5-d0b64ff562c1" alt="NSB TELECOM Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold tracking-tight">
              <span style={{ color: '#0066CC' }}>N</span>
              <span style={{ color: '#00A651' }}>S</span>
              <span style={{ color: 'rgba(54, 65, 118, 1)' }}>B TELECOM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button
                variant={location.pathname === "/" ? "secondary" : "ghost"}
                className="text-sm"
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant={location.pathname === "/about" ? "secondary" : "ghost"}
                className="text-sm"
                aria-current={location.pathname === "/about" ? "page" : undefined}
              >
                About
              </Button>
            </Link>

            {/* Services & Products Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm" aria-label="Services menu">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 md:w-[500px] glass-card" role="menu" aria-label="Services submenu">
                      <div className="relative mb-3">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        <Input
                          placeholder="Search services..."
                          value={servicesSearch}
                          onChange={(e) => setServicesSearch(e.target.value)}
                          className="pl-9 glass-input focus:ring-2 focus:ring-primary/30"
                          aria-label="Search services"
                          type="search"
                        />
                      </div>
                      <ul className="grid gap-2 md:grid-cols-2" role="list">
                        {filteredServices.length > 0 ? (
                          filteredServices.map((service) => (
                            <li key={service.path} role="none">
                              <NavigationMenuLink asChild>
                                <Link
                                  to={service.path}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-primary/10 hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-primary/20 focus:bg-primary/10 focus:border-primary/30 focus:ring-2 focus:ring-primary/20 animate-in fade-in-50 slide-in-from-top-2"
                                  )}
                                  role="menuitem"
                                >
                                  <div className="text-sm font-medium leading-snug text-foreground">
                                    {servicesSearch && service.name.toLowerCase().includes(servicesSearch.toLowerCase()) ? (
                                      <>
                                        {service.name.split(new RegExp(`(${servicesSearch})`, 'gi')).map((part, i) => 
                                          part.toLowerCase() === servicesSearch.toLowerCase() ? (
                                            <mark key={i} className="bg-primary/30 text-foreground rounded px-0.5">{part}</mark>
                                          ) : (
                                            <span key={i}>{part}</span>
                                          )
                                        )}
                                      </>
                                    ) : (
                                      service.name
                                    )}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))
                        ) : (
                          <li className="col-span-2 text-center text-sm text-muted-foreground py-4" role="status" aria-live="polite">
                            No services found
                          </li>
                        )}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm" aria-label="Products menu">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 md:w-[500px] glass-card" role="menu" aria-label="Products submenu">
                      <div className="relative mb-3">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        <Input
                          placeholder="Search products..."
                          value={productsSearch}
                          onChange={(e) => setProductsSearch(e.target.value)}
                          className="pl-9 glass-input focus:ring-2 focus:ring-secondary/30"
                          aria-label="Search products"
                          type="search"
                        />
                      </div>
                      <ul className="grid gap-2 md:grid-cols-2" role="list">
                        {filteredProducts.length > 0 ? (
                          filteredProducts.map((product) => (
                            <li key={product.path} role="none">
                              <NavigationMenuLink asChild>
                                <Link
                                  to={product.path}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-secondary/10 hover:shadow-md hover:scale-[1.02] border border-transparent hover:border-secondary/20 focus:bg-secondary/10 focus:border-secondary/30 focus:ring-2 focus:ring-secondary/20 animate-in fade-in-50 slide-in-from-top-2"
                                  )}
                                  role="menuitem"
                                >
                                  <div className="text-sm font-medium leading-snug text-foreground">
                                    {productsSearch && product.name.toLowerCase().includes(productsSearch.toLowerCase()) ? (
                                      <>
                                        {product.name.split(new RegExp(`(${productsSearch})`, 'gi')).map((part, i) => 
                                          part.toLowerCase() === productsSearch.toLowerCase() ? (
                                            <mark key={i} className="bg-secondary/30 text-foreground rounded px-0.5">{part}</mark>
                                          ) : (
                                            <span key={i}>{part}</span>
                                          )
                                        )}
                                      </>
                                    ) : (
                                      product.name
                                    )}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))
                        ) : (
                          <li className="col-span-2 text-center text-sm text-muted-foreground py-4" role="status" aria-live="polite">
                            No products found
                          </li>
                        )}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/contact">
              <Button
                variant={location.pathname === "/contact" ? "secondary" : "ghost"}
                className="text-sm"
                aria-current={location.pathname === "/contact" ? "page" : undefined}
              >
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden fixed top-0 right-0 h-16 flex items-center pr-4 z-[60]">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-7 w-7" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[350px] bg-background/95 backdrop-blur-xl border-l border-border p-0">
                <div className="flex flex-col h-full p-6">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center space-x-2">
                      <img src="https://harmless-tapir-303.convex.cloud/api/storage/b770cec3-3a0c-4c9c-b9e5-d0b64ff562c1" alt="NSB TELECOM" className="h-8 w-auto" />
                      <span className="text-lg font-bold tracking-tight">NSB TELECOM</span>
                    </div>
                  </div>
                  
                  <nav className="flex flex-col space-y-6">
                    {menuItems.map((item, index) => (
                      <Link
                        key={item.path}
                        to={item.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl font-bold tracking-tight text-foreground/80 hover:text-primary transition-colors flex items-center justify-between group"
                      >
                        <span>{item.label}</span>
                        <ChevronRight className="h-6 w-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    ))}
                  </nav>

                  <div className="mt-auto pt-8">
                    <div className="flex space-x-6 justify-center">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <social.icon className="h-6 w-6" />
                          <span className="sr-only">{social.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}