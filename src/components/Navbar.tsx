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
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  Search,
  Twitter,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MouseEvent, useEffect, useState } from "react";

const normalizePath = (path: string) =>
  path.startsWith("/") ? path : `/${path}`;

const menuItemVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.07,
      duration: 0.4,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

const socialVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + index * 0.05, duration: 0.3 },
  }),
};

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [servicesSearch, setServicesSearch] = useState("");
  const [productsSearch, setProductsSearch] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  const getBasePath = (path: string) => {
    const [base] = path.split("#");
    return normalizePath(base ?? "/");
  };

  const scrollToSection = (hash?: string) => {
    if (!hash) return;
    const element = document.getElementById(hash);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleMenuNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    setIsMenuOpen(false);
    if (!path.includes("#")) return;
    event.preventDefault();
    const [basePath, hash] = path.split("#");
    const normalizedBasePath = basePath
      ? normalizePath(basePath)
      : location.pathname;
    if (location.pathname === normalizedBasePath) {
      scrollToSection(hash);
      return;
    }
    navigate(`${normalizedBasePath}#${hash}`);
    setTimeout(() => scrollToSection(hash), 160);
  };

  const isActivePath = (path: string) =>
    location.pathname === getBasePath(path);

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
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-foreground"
                  aria-label="Toggle navigation menu"
                  aria-expanded={isMenuOpen}
                >
                  <Menu className="h-7 w-7" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full sm:w-[420px] md:w-[460px] bg-background/90 backdrop-blur-2xl border-l border-primary/20 p-0 overflow-hidden"
              >
                <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
                <SheetDescription className="sr-only">
                  Choose a destination within NSB Telecom.
                </SheetDescription>
                <div className="pointer-events-none absolute inset-0">
                  <div className="absolute -top-32 -right-20 h-64 w-64 rounded-full bg-primary/40 blur-3xl opacity-70" />
                  <div className="absolute bottom-0 -left-16 h-80 w-80 rounded-full bg-secondary/40 blur-[120px] opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background/95" />
                </div>
                <div className="relative z-10 flex h-full flex-col gap-6 p-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src="https://harmless-tapir-303.convex.cloud/api/storage/b770cec3-3a0c-4c9c-b9e5-d0b64ff562c1"
                        alt="NSB TELECOM"
                        className="h-10 w-auto"
                      />
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.5em] text-foreground/60">
                          NSB Telecom
                        </p>
                        <p className="text-lg font-semibold tracking-tight">
                          Future-ready IT partners
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-foreground/60">
                      MENU
                    </span>
                  </div>
                  <p className="text-base text-muted-foreground">
                    Discover services, solutions, and contact options with a
                    fluid, touch-friendly navigation experience.
                  </p>
                  <ScrollArea className="flex-1 -mr-6 pr-6">
                    <nav aria-label="Mobile primary navigation">
                      <motion.ul
                        initial="hidden"
                        animate="visible"
                        className="space-y-6"
                      >
                        {menuItems.map((item, index) => {
                          const active = isActivePath(item.path);
                          return (
                            <motion.li
                              key={item.path}
                              custom={index}
                              variants={menuItemVariants}
                            >
                              <Link
                                to={item.path}
                                onClick={(event) =>
                                  handleMenuNavigation(event, item.path)
                                }
                                className={cn(
                                  "group flex items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-foreground transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 hover:bg-white/10",
                                  active &&
                                    "border-primary/50 bg-primary/10 text-primary",
                                )}
                                aria-current={active ? "page" : undefined}
                              >
                                <div className="flex flex-col">
                                  <span className="text-xs font-semibold uppercase tracking-[0.4em] text-foreground/60">
                                    {String(index + 1).padStart(2, "0")}
                                  </span>
                                  <span className="text-3xl font-black tracking-tight">
                                    {item.label}
                                  </span>
                                </div>
                                <ChevronRight className="h-7 w-7 text-foreground/60 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
                              </Link>
                            </motion.li>
                          );
                        })}
                      </motion.ul>
                    </nav>
                  </ScrollArea>
                  <div className="space-y-4">
                    <Link to="/contact" className="block">
                      <Button
                        size="lg"
                        className="w-full glass-card glass-hover text-base"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Plan a strategy call
                      </Button>
                    </Link>
                    <motion.div
                      className="flex items-center justify-center gap-4"
                      initial="hidden"
                      animate="visible"
                    >
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-foreground/70 transition-colors hover:border-primary/60 hover:text-primary"
                          aria-label={social.label}
                          variants={socialVariants}
                          custom={index}
                        >
                          <social.icon className="h-5 w-5" />
                        </motion.a>
                      ))}
                    </motion.div>
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