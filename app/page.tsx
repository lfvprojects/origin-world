import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Notifications, Post } from '../public/icons/icons'
import Header from '@/components/sections/header'
import Head from 'next/head'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-offwhite'>
      {/* HEADER COMPONENT */}
      <Header/>
    </main>
  )
}
