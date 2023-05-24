import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <h1>hello world</h1>
      <Image
        src={'/images/icon.svg'}
        alt="Icon"
        width={500}
        height={500}
      />
    </main>
  )
}
