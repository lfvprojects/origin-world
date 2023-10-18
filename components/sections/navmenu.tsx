import { Button } from '@/components/ui/button'
import { ContestsIcon, EventsIcon, HomeIcon, MarketIcon, WikiIcon } from '../../public/icons/icons'

export default function NavMenu() {
    return (
        <main className='w-64 bg-white rounded-lg p-4 space-y-4'>
          <div className='font-bold text-base text-gray'>
            Navigation 
          </div>
          <div className='space-y-2'>
            <Button className='rounded-lg flex justify-start bg-originblue text-white w-full space-x-2 hover:text-white'>
              <HomeIcon className="w-4 h-4"/>
              <div className='font-bold text-base'>
                Home
              </div>
            </Button>
            <Button className='rounded-lg flex justify-start bg-white text-lightgray w-full space-x-2 hover:text-lightgray hover:bg-offwhite'>
              <MarketIcon className="w-4 h-4"/>
              <div className='font-bold text-base'>
                Market
              </div>
            </Button>
            <Button className='rounded-lg flex justify-start bg-white text-lightgray w-full space-x-2 hover:text-lightgray hover:bg-offwhite'>
              <WikiIcon className="w-4 h-4"/>
              <div className='font-bold text-base'>
                Wiki
              </div>
            </Button>
            <Button className='rounded-lg flex justify-start bg-white text-lightgray w-full space-x-2 hover:text-lightgray hover:bg-offwhite'>
              <EventsIcon className="w-[1.375rem] h-4"/>
              <div className='font-bold text-base'>
                Events
              </div>
            </Button>
            <Button className='rounded-lg flex justify-start bg-white text-lightgray w-full space-x-2 hover:text-lightgray hover:bg-offwhite'>
              <ContestsIcon className="w-4 h-4"/>
              <div className='font-bold text-base'>
                Contests
              </div>
            </Button>
          </div>
        </main>
    )
}