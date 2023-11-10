import Search from './search.jsx'

export default async function Home() {
  return (
    <main className="h-full text-white bg-gradient-radial from-dark-purple from-20% to-dark-blue">
      <div className="flex justify-center items-center flex-col h-full">
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