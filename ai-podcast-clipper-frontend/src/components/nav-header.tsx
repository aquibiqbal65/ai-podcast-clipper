"use client";

import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { signOut } from "next-auth/react";
import { Moon, Sun } from "lucide-react";
import { toast } from "sonner";

const NavHeader = ({ credits, email }: { credits: number; email: string }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-background sticky top-0 z-10 flex justify-center border-b">
      <div className="container flex h-16 items-center justify-between px-4 py-2">
        <Link href="/dashboard" className="flex items-center">
          <div className="font-sans text-xl font-medium tracking-tight">
            <span className="text-primary font-bold">PodCut</span>
            <span className="font-light text-gray-500">-</span>
            <span className="text-gray-500 font-medium">AI</span>
          </div>
        </Link>

        <div className="flex items-center gap-4">
         {mounted && (
  <button
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    className={`relative flex h-8 w-14 items-center rounded-full transition-colors duration-300 ${
      theme === "dark" ? "bg-gray-800" : "bg-gray-200"
    }`}
  >
    <span
      className={`absolute top-1 left-1 h-6 w-6 rounded-full bg-primary flex items-center justify-center transition-transform duration-300 ${
        theme === "dark" ? "translate-x-6" : "translate-x-0"
      }`}
    >
      {theme === "dark" ? (
        <Moon className="h-3.5 w-3.5 text-white" />
      ) : (
        <Sun className="h-3.5 w-3.5 text-white" />
      )}
    </span>
  </button>
)}


          <div className="flex items-center gap-2">
            <Badge
              variant="secondary"
              className="h-8 px-3 py-1.5 text-xs font-medium"
            >
              {credits} credits
            </Badge>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="h-8 text-xs font-medium  hidden sm:inline-flex"
            >
              <Link href="/dashboard/billing">Buy more</Link>
            </Button>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="relative h-8 w-8 rounded-full p-0"
              >
                <Avatar>
                  <AvatarFallback>{email.charAt(0)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <p className="text-muted-foreground text-xs">{email}</p>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/billing">Billing</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => signOut({ redirectTo: "/login" })}
                className="text-destructive cursor-pointer"
              >
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default NavHeader;
