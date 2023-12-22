import Search from './search.jsx'

export default async function Home() {
  return (
    <main className="h-full flex items-center justify-center">
        <div className="flex justify-center items-center flex-col relative bg-dark-grey/[0.6] p-5 rounded-lg">
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