'use client';

import React from 'react';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Icon } from '@iconify/react';

import { FaRegArrowAltCircleDown } from "react-icons/fa";


import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all `,
        // {
        //   'border-b border-gray-200 bg-white/75 backdrop-blur-lg': scrolled,
        //   'border-b border-gray-200 bg-white': selectedLayout,
        // },
      )}
    >


      <div className="flex h-[47px] items-center justify-between px-4 bg-[#2f2b43]">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex flex-row space-x-3 items-center justify-center md:hidden"
          >
            <span className="h-7 w-7 bg-zinc-300 rounded-lg" />
            <span className="font-bold text-xl flex "></span>
          </Link>
          <button
          
                    type="button"
                    className="bg-[#ad3de1]   px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                     <FaRegArrowAltCircleDown className='mr-2' />
                 Innovator
     




                  </button>
        </div>

 

        <div className="hidden md:block">
          <div className="  flex items-center justify-center gap-5 text-center">
          <Icon icon="lucide:help-circle" width="24" height="24" color="white" />
        
          <Icon icon="lucide:shopping-bag" width="24" height="24" color="white" /> 


      <Icon icon="lucide:shopping-cart" width="24" height="24" color="white" /> 
      <Icon icon="lucide:bell" width="24" height="24" color="white" /> 
      <Icon icon="lucide:square-Icon" width="24" height="24"  color="white" /> 
      

          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
