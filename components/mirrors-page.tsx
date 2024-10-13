'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ExternalLink } from 'lucide-react'

const mirrors = [
  { name: 'AlmaLinux', href: '/almalinux/' },
  { name: 'Arch', href: '/arch/' },
  { name: 'BlackArch', href: '/blackarch/' },
  { name: 'Fedora EPEL', href: '/epel/' },
  { name: 'Kali ISOs', href: '/kali-images/' },
  { name: 'Kali', href: '/kali/' },
  { name: 'Parrot', href: '/parrot/' },
  { name: 'Ubuntu ISOs', href: '/ubuntu-releases/' },
  { name: 'Ubuntu', href: '/ubuntu/' },
  { name: 'Voidlinux', href: '/voidlinux/' },
  { name: 'Rockylinux', href: '/rockylinux/' },
]

export function MirrorsPage() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center bg-gray-950 font-sans text-gray-200">
      <div className="w-full max-w-4xl p-8">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-100 mb-2">0xEmma's Mirrors</h1>
          <p className="text-gray-400">Fast and reliable Linux distribution mirrors</p>
        </header>
        <main className="bg-gray-900 shadow-lg rounded-lg p-8 mb-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mirrors.map((mirror) => (
              <li key={mirror.href} className="flex items-center">
                <a 
                  href={mirror.href}
                  className="text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-200 flex items-center w-full"
                >
                  <span className="mr-2 text-gray-500">./</span>
                  <span className="flex-grow">{mirror.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </main>
        <footer className="flex justify-between items-center">
          <Dialog open={isPrivacyPolicyOpen} onOpenChange={setIsPrivacyPolicyOpen}>
            <DialogTrigger asChild>
              <Button variant="link" className="text-gray-400 hover:text-gray-200 p-0">
                Privacy Policy
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-900 border-gray-800">
              <DialogHeader>
                <DialogTitle className="text-gray-100">Privacy Policy</DialogTitle>
                <DialogDescription className="text-gray-400">
                  This privacy policy outlines how we handle your data when you use our mirror services.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4 space-y-2 text-sm text-gray-300">
                <p>1. We do not collect personal information.</p>
                <p>2. We may log IP addresses for security and analytics purposes.</p>
                <p>3. We do not share any data with third parties.</p>
                <p>4. By using our services, you agree to this policy.</p>
              </div>
            </DialogContent>
          </Dialog>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  variant="outline"
                  className="bg-blue-600 text-gray-100 hover:bg-blue-700 transition-colors duration-200 border-blue-500"
                  onClick={() => window.open('https://www.buymeacoffee.com/G3TLc5nV9', '_blank')}
                >
                  Donate <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 text-gray-200 border-gray-700 max-w-xs text-center p-2">
                <p>While I run these out of passion, they do cost money - any support is gratefully appreciated but not expected.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </footer>
      </div>
    </div>
  )
}