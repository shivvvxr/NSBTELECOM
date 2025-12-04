import { Link } from "react-router";
import { motion } from "framer-motion";
import DesktopNav from "./navbar/DesktopNav";
import MobileNav from "./navbar/MobileNav";

export default function Navbar() {
  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/50 supports-[backdrop-filter]:bg-white/40"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group" aria-label="NSB TELECOM Home">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img src="https://harmless-tapir-303.convex.cloud/api/storage/b770cec3-3a0c-4c9c-b9e5-d0b64ff562c1" alt="NSB TELECOM Logo" className="h-10 w-auto relative z-10" />
              </div>
              <span className="text-xl font-bold tracking-tight flex flex-col leading-none">
                <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">The Future of</span>
                <span>
                    <span style={{ color: '#0066CC' }}>N</span>
                    <span style={{ color: '#00A651' }}>S</span>
                    <span style={{ color: 'rgba(54, 65, 118, 1)' }}>B TELECOM</span>
                </span>
              </span>
            </Link>

            <DesktopNav />
            <MobileNav />
          </div>
        </div>
      </motion.nav>
    </>
  );
}