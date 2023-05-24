import Image from 'next/image'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { motion, useScroll } from 'framer-motion'

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
  return (
    <motion.header className='container fixed left-0 right-0 h-40 flex items-center z-50 pr-10 pl-10'>
      <motion.nav className='bg-light flex justify-between items-center container py-2 border pr-10 pl-10 rounded-full'>
        <Link href={'/'} className='flex items-center gap-2'>
          <Image src={'/logo.svg'} alt='Metaview Logo' width={30} height={30} />
          <span className='font-semibold text-lg'>Metaview</span>
        </Link>
        <ul className='flex gap-8 font-medium'>
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
        <div className='flex gap-8 items-center font-medium'>
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
