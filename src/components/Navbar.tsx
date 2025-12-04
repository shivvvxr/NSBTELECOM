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
        className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b overflow-visible"
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

            <DesktopNav />
            <MobileNav />
          </div>
        </div>
      </motion.nav>
    </>
  );
}