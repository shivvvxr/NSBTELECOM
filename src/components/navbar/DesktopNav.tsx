import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { services, products } from "./NavConfig";

export default function DesktopNav() {
  const location = useLocation();
  const [servicesSearch, setServicesSearch] = useState("");
  const [productsSearch, setProductsSearch] = useState("");

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(servicesSearch.toLowerCase())
  );

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(productsSearch.toLowerCase())
  );

  return (
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
  );
}
