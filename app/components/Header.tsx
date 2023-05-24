'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const mainNavItems = [
  {
    title: 'Customers',
    href: '/customers',
  },
  {
    title: 'Security & Privacy',
    href: '/security',
  },
  {
    title: 'Resources',
    href: '/resources',
    subItems: [
      {
        title: 'All Resources',
        href: '/resources',
        halfWidth: false,
      },
      {
        title: 'Metaview Blog',
        href: '/blog',
        halfWidth: false,
      },
      {
        title: 'Events',
        href: '/events',
        halfWidth: false,
      },
      {
        title: 'Recruiters AI Digest Newsletter',
        href: '/newsletter',
        description:
          'The latest in recruiting intelligence, delivered to your inbox once a month.',
        halfWidth: true,
      },
    ],
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'Careers',
    href: '/careers',
  },
]

export default function Header() {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const headerContainer = {
    initial: {
      paddingLeft: '3rem',
      paddingRight: '3rem',
    },
    animate: {
      paddingLeft: isScrolling ? '2.5rem' : '3rem',
      paddingRight: isScrolling ? '2.5rem' : '3rem',
      transition: { duration: 0.8, ease: 'linear' },
    },
  }

  const navContainer = {
    initial: {
      paddingLeft: '3rem',
      paddingRight: '3rem',
      backgroundColor: 'transparent',
    },
    animate: {
      backgroundColor: isScrolling ? 'white' : 'transparent',
      paddingLeft: isScrolling ? '2.5rem' : '3rem',
      paddingRight: isScrolling ? '2.5rem' : '3rem',
      transition: { duration: 2, ease: 'linear' },
    },
  }

  return (
    <motion.header
      variants={headerContainer}
      initial='initial'
      animate='animate'
      className='container fixed left-0 right-0 h-40 flex items-center z-50'
    >
      <motion.nav
        variants={navContainer}
        className='flex justify-between items-center w-full py-4 rounded-full'
      >
        <Link href={'/'} className='flex items-center gap-2'>
          <Image src={'/logo.svg'} alt='Metaview Logo' width={30} height={30} />
          <span className='font-semibold text-lg hidden xl:block'>
            Metaview
          </span>
        </Link>
        <ul className='flex gap-8 font-medium text-sm xl:text-base'>
          {mainNavItems.map((item) => {
            return item.subItems ? (
              <button key={item.title} className='flex gap-2 items-center'>
                {item.title}
                <ChevronDownIcon className='h-4 w-4' />
              </button>
            ) : (
              <Link href={item.href} key={item.href}>
                {item.title}
              </Link>
            )
          })}
        </ul>
        <div className='flex gap-8 items-center font-medium text-sm xl:text-base'>
          <Link href='/'>Sign in</Link>
          <Link
            className='rounded-3xl bg-green py-2 px-3 border border-blue/10'
            href='/'
          >
            Try for free
          </Link>
        </div>
      </motion.nav>
    </motion.header>
  )
}
