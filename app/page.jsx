import Image from 'next/image'
import Search from './search.jsx'

export default async function Home() {
  return (
    <main className="bg-cover text-white bg-gradient-radial from-dark-blue from-50% to-dark-purple h-full">
        <Image
          src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/logo/bg.png"
          fill={true}
          alt="star-rail"
          className="opacity-10 absolute object-contain"
        />
        <div className="flex justify-center items-center flex-col h-full relative">
          <h1 className="text-center text-2xl">
            Honkai: Star Rail - Character Stats
          </h1>
          <div className="text-center text-lg">
            Get character data for your account
          </div>
          <Search />
        </div>
    </main>
  )
}