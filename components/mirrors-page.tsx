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
import { ExternalLink } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

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

export default function Component() {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center bg-[#1e1e1e] font-mono text-[#c6c6c6]">
      <div className="border border-[#4CAF50] p-12 rounded-lg mb-6">
        <header className="bg-[#2d2d2d] px-4 py-2 mb-6">
          <h1 className="text-lg font-bold text-[#4CAF50]">0xEmma's Mirrors</h1>
        </header>
        <main className="flex-1 overflow-auto px-4 py-6">
          <ul className="space-y-2">
            {mirrors.map((mirror) => (
              <li key={mirror.href}>
                <span className="text-[#9cdcfe]">$</span>
                <a className="text-[#4CAF50] hover:underline" href={mirror.href}>
                  {mirror.name}
                </a>
              </li>
            ))}
          </ul>
        </main>
      </div>
      <div className="flex justify-between items-center w-full max-w-md px-4">
        <Dialog open={isPrivacyPolicyOpen} onOpenChange={setIsPrivacyPolicyOpen}>
          <DialogTrigger asChild>
            <Button variant="link" className="text-[#4CAF50] hover:text-[#45a049] p-0">
              Privacy Policy
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-[#2d2d2d] text-[#c6c6c6] border-[#4CAF50]">
            <DialogHeader>
              <DialogTitle className="text-[#4CAF50]">Privacy Policy</DialogTitle>
              <DialogDescription>
                This privacy policy outlines how we handle your data when you use our mirror services.
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
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
                className="bg-[#4CAF50] text-white hover:bg-[#45a049] border-[#4CAF50]"
                onClick={() => window.open('https://www.buymeacoffee.com/G3TLc5nV9', '_blank')}
              >
                Donate <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-[#2d2d2d] text-[#c6c6c6] border-[#4CAF50] max-w-xs text-center">
              <p>While I run these out of passion, they do cost money - any support is gratefully appreciated but not expected.</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  )
}