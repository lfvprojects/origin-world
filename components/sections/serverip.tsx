'use client'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react';

export default function ServerIp() {

    // Copy IP to clipboard function
    const copyToClipboard = () => {
        const serverIp = "play.originrealms.com";

        // Create a temporary input element to copy the text
        const tempInput = document.createElement("input");
        tempInput.value = serverIp;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);
    };

    const [playerCount, setPlayerCount] = useState(null);

    const fetchPlayerCount = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/3/play.originrealms.com`);
        const data = await response.json();
        const onlinePlayers = data.players.online;
        setPlayerCount(onlinePlayers);
      } catch (error) {
        console.error('Error fetching player count:', error);
      }
    };
  
    useEffect(() => {
      // Fetch player count initially
      fetchPlayerCount();
  
      // Fetch player count every 30 seconds
      const intervalId = setInterval(fetchPlayerCount, 30000);
  
      // Clear the interval when the component unmounts
      return () => clearInterval(intervalId);
    }, []);



    return (
        <main>
            <Button className='w-64 bg-lightorange rounded-lg p-2 text-base font-semibold text-darkorange space-x-1 flex justify-center items-center hover:text-darkorange' onClick={copyToClipboard}>
                <div>
                    play.originrealms.com
                </div>
                <div className='text-orange'>
                    {playerCount !== null ? playerCount : '• • •'} 
                </div> 
            </Button>
        </main>
    )
}