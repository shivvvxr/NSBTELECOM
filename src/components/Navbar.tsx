import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Menu, Search, X, ChevronRight, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [servicesSearch, setServicesSearch] = useState("");
  const [productsSearch, setProductsSearch] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    { label: 'HOME', link: '/' },
    { label: 'ABOUT US', link: '/about' },
    { label: 'SERVICES', link: '/services' },
    { label: 'PRODUCTS', link: '/products' },
    { label: 'CONTACT', link: '/contact' }
  ];

  const socialItems = [
    { label: 'LinkedIn', link: 'https://linkedin.com', icon: Linkedin },
    { label: 'Twitter', link: 'https://twitter.com', icon: Twitter },
    { label: 'Instagram', link: 'https://instagram.com', icon: Instagram },
    { label: 'Facebook', link: 'https://facebook.com', icon: Facebook }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 supports-[backdrop-filter]:bg-background/60"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group" aria-label="NSB TELECOM Home">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full group-hover:bg-primary/40 transition-all duration-500" />
              <img src="https://harmless-tapir-303.convex.cloud/api/storage/b770cec3-3a0c-4c9c-b9e5-d0b64ff562c1" alt="NSB TELECOM Logo" className="h-12 w-auto relative z-10" />
            </div>
            <span className="text-2xl font-bold tracking-tight hidden sm:block">
              <span className="text-[#0066CC]">N</span>
              <span className="text-[#00A651]">S</span>
              <span className="text-[#364176]">B TELECOM</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/">
              <Button
                variant={location.pathname === "/" ? "secondary" : "ghost"}
                className="text-sm font-medium"
                aria-current={location.pathname === "/" ? "page" : undefined}
              >
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant={location.pathname === "/about" ? "secondary" : "ghost"}
                className="text-sm font-medium"
                aria-current={location.pathname === "/about" ? "page" : undefined}
              >
                About
              </Button>
            </Link>

            {/* Services & Products Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent" aria-label="Services menu">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 md:w-[500px] glass-card border-none shadow-2xl bg-background/95 backdrop-blur-xl" role="menu" aria-label="Services submenu">
                      <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        <Input
                          placeholder="Search services..."
                          value={servicesSearch}
                          onChange={(e) => setServicesSearch(e.target.value)}
                          className="pl-9 bg-muted/50 border-transparent focus:bg-background focus:border-primary/30 transition-all"
                          aria-label="Search services"
                          type="search"
                        />
                      </div>
                      <ul className="grid gap-2 md:grid-cols-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar" role="list">
                        {filteredServices.length > 0 ? (
                          filteredServices.map((service) => (
                            <li key={service.path} role="none">
                              <NavigationMenuLink asChild>
                                <Link
                                  to={service.path}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 group"
                                  )}
                                  role="menuitem"
                                >
                                  <div className="text-sm font-medium leading-snug group-hover:translate-x-1 transition-transform">
                                    {servicesSearch && service.name.toLowerCase().includes(servicesSearch.toLowerCase()) ? (
                                      <span dangerouslySetInnerHTML={{
                                        __html: service.name.replace(new RegExp(`(${servicesSearch})`, 'gi'), '<mark class="bg-primary/30 text-foreground rounded px-0.5">$1</mark>')
                                      }} />
                                    ) : (
                                      service.name
                                    )}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))
                        ) : (
                          <li className="col-span-2 text-center text-sm text-muted-foreground py-8" role="status" aria-live="polite">
                            No services found
                          </li>
                        )}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium bg-transparent" aria-label="Products menu">Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-4 md:w-[500px] glass-card border-none shadow-2xl bg-background/95 backdrop-blur-xl" role="menu" aria-label="Products submenu">
                      <div className="relative mb-4">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                        <Input
                          placeholder="Search products..."
                          value={productsSearch}
                          onChange={(e) => setProductsSearch(e.target.value)}
                          className="pl-9 bg-muted/50 border-transparent focus:bg-background focus:border-secondary/30 transition-all"
                          aria-label="Search products"
                          type="search"
                        />
                      </div>
                      <ul className="grid gap-2 md:grid-cols-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar" role="list">
                        {filteredProducts.length > 0 ? (
                          filteredProducts.map((product) => (
                            <li key={product.path} role="none">
                              <NavigationMenuLink asChild>
                                <Link
                                  to={product.path}
                                  className={cn(
                                    "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-secondary/10 hover:text-secondary focus:bg-secondary/10 group"
                                  )}
                                  role="menuitem"
                                >
                                  <div className="text-sm font-medium leading-snug group-hover:translate-x-1 transition-transform">
                                    {productsSearch && product.name.toLowerCase().includes(productsSearch.toLowerCase()) ? (
                                      <span dangerouslySetInnerHTML={{
                                        __html: product.name.replace(new RegExp(`(${productsSearch})`, 'gi'), '<mark class="bg-secondary/30 text-foreground rounded px-0.5">$1</mark>')
                                      }} />
                                    ) : (
                                      product.name
                                    )}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))
                        ) : (
                          <li className="col-span-2 text-center text-sm text-muted-foreground py-8" role="status" aria-live="polite">
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
                variant={location.pathname === "/contact" ? "default" : "outline"}
                className={cn(
                  "text-sm font-medium ml-2 transition-all hover:shadow-lg hover:scale-105",
                  location.pathname === "/contact" ? "bg-primary text-primary-foreground" : "border-primary/20 hover:border-primary/50"
                )}
                aria-current={location.pathname === "/contact" ? "page" : undefined}
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative z-50 hover:bg-transparent">
                  <Menu className="h-8 w-8" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] p-0 border-l border-border/50 bg-background/95 backdrop-blur-xl">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">Navigation links for mobile devices</SheetDescription>
                
                <div className="flex flex-col h-full relative overflow-hidden">
                  {/* Background Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                  {/* Header */}
                  <div className="p-6 flex items-center justify-between border-b border-border/10">
                    <div className="flex items-center space-x-2">
                      <img src="https://harmless-tapir-303.convex.cloud/api/storage/b770cec3-3a0c-4c9c-b9e5-d0b64ff562c1" alt="Logo" className="h-8 w-auto" />
                      <span className="font-bold tracking-tight">NSB TELECOM</span>
                    </div>
                    {/* Close button is handled by Sheet primitive, but we can add a custom one if needed, 
                        though standard Sheet close is usually sufficient. We'll rely on the default X */}
                  </div>

                  {/* Menu Items */}
                  <div className="flex-1 overflow-y-auto py-8 px-6">
                    <nav className="flex flex-col space-y-6">
                      {menuItems.map((item, index) => (
                        <motion.div
                          key={item.link}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.4, ease: "easeOut" }}
                        >
                          <Link
                            to={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              "group flex items-center justify-between text-3xl font-black tracking-tighter hover:text-primary transition-colors",
                              location.pathname === item.link ? "text-primary" : "text-foreground/80"
                            )}
                          >
                            <span>{item.label}</span>
                            <ChevronRight className="h-6 w-6 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />
                          </Link>
                        </motion.div>
                      ))}
                    </nav>
                  </div>

                  {/* Footer / Socials */}
                  <div className="p-8 border-t border-border/10 bg-muted/20">
                    <div className="flex flex-col space-y-4">
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Connect with us</p>
                      <div className="flex space-x-4">
                        {socialItems.map((social, index) => (
                          <motion.a
                            key={social.label}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + (index * 0.1), duration: 0.4 }}
                            className="p-3 rounded-full bg-background border border-border/50 hover:border-primary/50 hover:text-primary hover:shadow-lg transition-all duration-300"
                            aria-label={social.label}
                          >
                            <social.icon className="h-5 w-5" />
                          </motion.a>
                        ))}
                      </div>
                      <div className="pt-4 text-xs text-muted-foreground">
                        &copy; {new Date().getFullYear()} NSB TELECOM
                      </div>
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