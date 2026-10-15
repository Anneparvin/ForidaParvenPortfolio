import React from 'react'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { MenuIcon } from 'lucide-react'
import { HEADER_ITEMS } from '@/const'
import { ThemeToggle } from '../custom/theme-toggle'
import Image from "next/image";
import Link from 'next/link'


const AppHeader = () => {
  const headerList = HEADER_ITEMS
  return (
    <header className="py-5 flex items-center justify-between app-container sticky top-0 bg-background  z-50">
      {/* <div className="text-primary font-extrabold text-2xl uppercase"> */}
     <Link href="/">
          <Image
         src={'/images/user/mylogo-removebg-preview.png'}
        alt="My Profile"
        width={150}
        height={80}
      className="w-20 h-auto sm:w-14 md:w-28 lg:w-45 object-contain rounded"
      />
      </Link>
      <ul className="space-x-5 lg:space-x-10 items-center hidden md:flex">
        {headerList.map((item) => (
          <li
            key={item.id}
            className="hover:text-primary font-semibold transition duration-300 text-sm cursor-pointer"
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
        <li>
          <Button size={'sm'} className="bg-orange-500 hover:bg-orange-600 font-semibold"  asChild>
                <a href="/Forida-Parven-Annie-CV.pdf" download>
                  Download CV
                </a>
          </Button>
        </li>
        <li>
          <ThemeToggle />
        </li>
      </ul>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="md:hidden" variant={'ghost'}>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="px-4 w-max">
            <ul className="flex flex-col items-end  space-y-5 mt-10 p-4">
              {headerList.map((item) => (
                <li
                  key={item.id}
                  className="w-max hover:text-primary font-bold transition duration-300 text-sm cursor-pointer"
                >
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
              <li>
                <Button
                  size={'sm'}
                  className="min-w-32 md:min-w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                >
                  Download CV
                </Button>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export default AppHeader
