import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import { cn, constructMetadata } from '@/lib/utils'
import { Inter } from 'next/font/google'
import './globals.css'

import "@uploadthing/react/styles.css"
import 'react-loading-skeleton/dist/skeleton.css'
import 'simplebar-react/dist/simplebar.min.css'

import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='light'>
      <head>
        <!-- ConveyThis: https://www.conveythis.com/   -->
        <script src="//cdn.conveythis.com/javascript/conveythis-initializer.js"></script>
        <script type="text/javascript">
        	document.addEventListener("DOMContentLoaded", function(e) {
        		ConveyThis_Initializer.init({
        			api_key: "pub_4bee391bdd7872d07d4a74fed6d2b59e"
        		});
        	});
        </script>
      </head>
      <Providers>
        <body
          className={cn(
            'min-h-screen font-sans antialiased grainy',
            inter.className
          )}>
          <Toaster />
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  )
}
