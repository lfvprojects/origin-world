import { Button } from '@/components/ui/button'
import { DiscordIcon, StoreIcon, TwitterIcon} from '../../public/icons/icons'

export default function ServerInfo() {
    return (
        <main className='w-64 bg-white rounded-lg p-4 space-y-4'>
          <div className='font-bold text-base text-gray'>
            Server Info 
          </div>
          <div className='space-y-2'>
            <Button className='rounded-lg flex justify-start bg-white text-lightgray w-full space-x-2 hover:text-white hover:bg-originblue'>
              <StoreIcon className="w-4 h-4"/>
              <div className='font-bold text-base'>
                <a target='_blank' href="https://store.originrealms.com">
                    Store
                </a>
              </div>
            </Button>
            <Button className='rounded-lg flex justify-start bg-white text-lightgray w-full space-x-2 hover:text-white hover:bg-discordblue'>
              <DiscordIcon className="w-5 h-4"/>
              <div className='font-bold text-base'>
                <a target='_blank' href="https://discord.com/invite/originrealms">
                    Discord
                </a>
              </div>
            </Button>
            <Button className='rounded-lg flex justify-start bg-white text-lightgray w-full space-x-2 hover:text-white hover:bg-lightblue'>
              <TwitterIcon className="w-[1.125rem] h-4"/>
              <div className='font-bold text-base'>
                <a target='_blank' href="https://twitter.com/originrealms">
                    Twitter
                </a>
              </div>
            </Button>
          </div>
        </main>
    )
}