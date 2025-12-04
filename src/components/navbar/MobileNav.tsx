import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronRight, Menu } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { MouseEvent, useEffect, useState } from "react";
import { menuItems, socialLinks } from "./NavConfig";

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

const normalizePath = (path: string) =>
  path.startsWith("/") ? path : `/${path}`;

export default function MobileNav() {
  const location = useLocation();
  const navigate = useNavigate();
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

  return (
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
  );
}
