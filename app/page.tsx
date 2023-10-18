import Header from '@/components/sections/header'
import { Button } from '@/components/ui/button'
import { ContestsIcon, EventsIcon, HomeIcon, MarketIcon, WikiIcon } from '../public/icons/icons'
import NavMenu from '@/components/sections/navmenu'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-offwhite'>
      {/* HEADER COMPONENT */}
      <Header/>
      {/* CONTENT SECTION */}      
      <div className='flex justify-center space-x-6'>
        {/* NAVMENU COMPONENT */}  
        <NavMenu/>
        <div className='w-[51rem]'>
          MAIN
        </div>
        <div className='w-64 bg-white rounded-lg'>
          LISTING
        </div>
      </div>  
    </main>
  )
}
