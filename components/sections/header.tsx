import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { NotificationsIcon, PostIcon } from '../../public/icons/icons'


export default function Header() {
  return (
    <main className='flex justify-center bg-white py-6 mb-6'>
      <div className='w-[86rem] flex items-center justify-between'>
        {/* LOGO SECTION */}
        <div className='flex space-x-2 w-64'>
          {/* LOGO ICON */}
          <div className='w-10 h-10 rounded-lg bg-originblue flex items-center justify-center'>
            <Image
              src='/icons/Originworldlogo.svg'
              alt='Origin World Logo'
              width={22}
              height={24}
            />
          </div>
          {/* LOGO TEXT */}
          <div className='flex items-center font-bold text-2xl text-gray'>
            Origin World
          </div> 
        </div>
        {/* SEARCH BAR SECTION */}
        <div className='w-[51rem]'>
          <Input type="searchbar" placeholder='What are you looking for...'/>
        </div>
        {/* USER SECTION */}
        <div className='flex space-x-6 w-64 justify-end'>
          {/* POST BUTTON */}
          <Button className='w-10 text-lightgray hover:bg-originblue hover:text-white' size='icon'>
            <PostIcon className='w-5 h-6'/>
          </Button>
          {/* NOTIFICATIONS BUTTON */}
          <Button className='w-10 text-lightgray hover:bg-originblue hover:text-white' size='icon'>
            <NotificationsIcon className='w-5 h-6'/>
          </Button>
          {/* PROFILE BUTTON */}
          <Button className='w-10' size='icon'>
            <Image
              src='https://mc-heads.net/avatar/larsy/40.png'
              alt='User Image'
              width={40}
              height={40}
               className='rounded-lg brightness-normal hover:brightness-110'
            />
          </Button>
        </div>
      </div>
    </main>
  )
}
