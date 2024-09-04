
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Managerdash() {
  return (
    (<div className="flex min-h-screen w-full flex-col bg-muted/40">
      <header
        className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="sm:hidden">
              <MenuIcon className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="sm:max-w-xs">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                prefetch={false}>
                <HomeIcon className="h-5 w-5 transition-all group-hover:scale-110" />
                <span className="sr-only">Home</span>
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}>
                <BookIcon className="h-5 w-5" />
                Learning Modules
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}>
                <ClipboardIcon className="h-5 w-5" />
                Exercises
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                prefetch={false}>
                <MessageCircleIcon className="h-5 w-5" />
                Communication
              </Link>
              <Link
                href="#"
                className="flex items-center gap-4 px-2.5 text-foreground"
                prefetch={false}>
                <UserIcon className="h-5 w-5" />
                Profile
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex-1 md:grow-0">
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-4">
              <li>
                <Link
                  href="#"
                  className="font-medium text-muted-foreground hover:text-foreground"
                  prefetch={false}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-medium text-muted-foreground hover:text-foreground"
                  prefetch={false}>
                  Learning Modules
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-medium text-muted-foreground hover:text-foreground"
                  prefetch={false}>
                  Exercises
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="font-medium text-muted-foreground hover:text-foreground"
                  prefetch={false}>
                  Communication
                </Link>
              </li>
              <li>
                <Link href="#" className="font-medium text-foreground" prefetch={false}>
                  Profile
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
              <img
                src="/placeholder.svg"
                width={36}
                height={36}
                alt="Avatar"
                className="overflow-hidden rounded-full"
                style={{ aspectRatio: "36/36", objectFit: "cover" }} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <aside
          className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
          <div className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <Avatar className="h-9 w-9 shrink-0">
              <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-sm font-medium">John Doe</div>
          </div>
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    prefetch={false}>
                    <BarChartIcon className="h-5 w-5" />
                    <span className="sr-only">Child's Progress</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Child's Progress</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                    prefetch={false}>
                    <LightbulbIcon className="h-5 w-5" />
                    <span className="sr-only">Learning Suggestions</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Learning Suggestions</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </aside>
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="flex-1">
            <Card>
              <CardHeader>
                <CardTitle>Learning Modules</CardTitle>
                <CardDescription>Explore the latest learning modules and complete assignments.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>Module 1</CardTitle>
                        <CardDescription>Introduction to JavaScript</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">
                            <ClockIcon className="mr-1 inline-block h-4 w-4" />
                            2 hours
                          </div>
                          <Badge variant="secondary">In Progress</Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Continue</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Module 2</CardTitle>
                        <CardDescription>Fundamentals of React</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">
                            <ClockIcon className="mr-1 inline-block h-4 w-4" />
                            3 hours
                          </div>
                          <Badge variant="outline">Not Started</Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Start</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Module 3</CardTitle>
                        <CardDescription>Advanced CSS Techniques</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">
                            <ClockIcon className="mr-1 inline-block h-4 w-4" />
                            4 hours
                          </div>
                          <Badge variant="outline">Not Started</Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Start</Button>
                      </CardFooter>
                    </Card>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>Module 4</CardTitle>
                        <CardDescription>Data Structures and Algorithms</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">
                            <ClockIcon className="mr-1 inline-block h-4 w-4" />
                            5 hours
                          </div>
                          <Badge variant="outline">Not Started</Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Start</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Module 5</CardTitle>
                        <CardDescription>Introduction to SQL</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">
                            <ClockIcon className="mr-1 inline-block h-4 w-4" />
                            3 hours
                          </div>
                          <Badge variant="outline">Not Started</Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Start</Button>
                      </CardFooter>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Module 6</CardTitle>
                        <CardDescription>Responsive Web Design</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">
                            <ClockIcon className="mr-1 inline-block h-4 w-4" />
                            4 hours
                          </div>
                          <Badge variant="outline">Not Started</Badge>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Start</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="w-full max-w-xs">
            
          </div>
        </main>
      </div>
    </div>)
  );
}

function BarChartIcon(props) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>)
  );
}


function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>)
  );
}


function ClipboardIcon(props) {
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
      <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
      <path
        d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    </svg>)
  );
}


function ClockIcon(props) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>)
  );
}


function HomeIcon(props) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>)
  );
}


function LightbulbIcon(props) {
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
      <path
        d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>)
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


function MessageCircleIcon(props) {
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
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>)
  );
}


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}
