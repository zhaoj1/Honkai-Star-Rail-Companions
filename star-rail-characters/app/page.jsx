import Search from './search.jsx'

export default async function Home() {
  return (
    <main className="h-full text-white bg-gradient-radial from-dark-purple from-20% to-dark-blue">
        <img src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/logo/bg.png" className="h-full opacity-10 absolute object-contain" />
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