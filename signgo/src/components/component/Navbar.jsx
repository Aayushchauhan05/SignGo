
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    (<header className="sticky top-0 z-50 w-full bg-background border-b">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}>
          <MountainIcon className="w-6 h-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="px-2 py-1 rounded-md transition-colors hover:bg-muted hover:text-muted-foreground"
            prefetch={false}>
            Home
          </Link>
          <Link
            href="/communication"
            className="px-2 py-1 rounded-md transition-colors hover:bg-muted hover:text-muted-foreground"
            prefetch={false}>
            communication
          </Link>
          <Link
            href="/manager"
            className="px-2 py-1 rounded-md transition-colors hover:bg-muted hover:text-muted-foreground"
            prefetch={false}>
            Manager Dashboard
          </Link>
          <Link
            href="/teacher"
            className="px-2 py-1 rounded-md transition-colors hover:bg-muted hover:text-muted-foreground"
            prefetch={false}>
            Teacher Dashboard
          </Link>
          <Link
            href="/student"
            className="px-2 py-1 rounded-md transition-colors hover:bg-muted hover:text-muted-foreground"
            prefetch={false}>
            Student Dashboard
          </Link>
          <Link
            href="/parent"
            className="px-2 py-1 rounded-md transition-colors hover:bg-muted hover:text-muted-foreground"
            prefetch={false}>
            Parent Dashboard
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="md:hidden">
            <div className="grid gap-4 p-4">
              <Link
                href="#"
                className="flex items-center gap-2 px-2 py-1 rounded-md transition-colors hover:bg-muted hover:text-muted-foreground"
                prefetch={false}>
                Home
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 px-2 py-1 rounded-md transition-colors hover:bg-muted hover:text-muted-foreground"
                prefetch={false}>
                Manager Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 px-2 py-1 rounded-md transition-colors hover:bg-muted hover:text-muted-foreground"
                prefetch={false}>
                Teacher Dashboard
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 px-2 py-1 rounded-md transition-colors hover:bg-muted hover:text-muted-foreground"
                prefetch={false}>
                Admin Dashboard
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>)
  );
}

function MenuIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>)
  );
}


function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}
