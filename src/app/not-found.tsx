import { buttonVariants } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
   return (
      <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4">
         <div className="max-w-md w-full text-center space-y-8">
            <h1 className="text-6xl md:text-9xl font-bold opacity-20">404</h1>
            <p className="text-2xl font-semibold">Page Not Found</p>
            <p className="text-muted-foreground">
               Oops! It seems this artwork is not in our gallery.
            </p>
            <Link
               href="/"
               className={buttonVariants({ className: "rounded-3xl h-10" })}
            >
               <ChevronLeft className="w-5 h-5" />
               <span>Back to Home</span>
            </Link>
         </div>
      </div>
   )
}

export default NotFound
