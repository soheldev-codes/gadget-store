import Container from "@/components/shared/Container";
import Logo from "@/components/shared/Logo";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import NavActions from "./NavActions";
import TopBar from "./TopBar";

export default function Header() {
  return (
    <> 
    <TopBar />
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Logo />
            <DesktopNav />
          </div>

          <div className="flex items-center gap-4">
            <NavActions />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
    </>
  );
}