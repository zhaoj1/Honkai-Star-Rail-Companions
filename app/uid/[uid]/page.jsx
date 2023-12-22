'use client'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from 'next/navigation';

import Player from './player.jsx'
import CharacterList from './characterList.jsx'
import CharacterDetails from './characterDetails.jsx'

export default function Page() {
  const asset_base_url = 'https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/'

  const [player, setPlayer] = useState(null)
  const [characters, setCharacters] = useState(null)
  const [currentChar, setCurrentChar] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { push } = useRouter();

  useEffect(() => {
    if(typeof window != 'undefined'){
      const uid = localStorage.getItem("uid")
      const getData = async () => {
        const res = await fetch(`../api/uid/${uid}?lang=en`)
        if(res.ok){
          const data = await res.json()
          setPlayer(data.player)
          setCharacters(data.characters)
          setCurrentChar(data.characters[0].id)
          setIsLoading(false)
        } else {
          toast.error(
            <div>Error fetching, please try again.<br></br><a className="text-blue-500 underline" href="https://github.com/zhaoj1/Honkai-Star-Rail-Companions/issues" target="_blank">Let us know</a> if the issue persists.</div>
          )
          setTimeout(() => {
            push(`/`)
          }, 2500);
        }
      }
      getData();
    }
  }, [])

  function createAssetUrl(asset){
    return asset_base_url + asset
  }

  return (
    <main className="min-h-full">
      <div className={`flex items-center flex-col h-full w-full ${isLoading? "absolute" : "relative"} py-10`}>
        <ToastContainer
          position="top-center"
          limit={1}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover
          theme="dark"
        />
        {isLoading?
          <div className="flex flex-col h-full w-full justify-center items-center">
            <div className="inline-block h-20 w-20 animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
            <span className="pt-5 text-lg font-semibold">
              Loading...
            </span>
          </div>
          :
          <>
          {player && <Player player={player} createAssetUrl={createAssetUrl} />}
          {characters && 
            <div className="flex flex-col w-11/12">
              <CharacterList 
                characters={characters} 
                createAssetUrl={createAssetUrl} 
                currentChar={currentChar}
                setCurrentChar={setCurrentChar}
              />
              {currentChar && <CharacterDetails character={characters.find((char) => char.id == currentChar)} createAssetUrl={createAssetUrl} />}
            </div>
          }
          </>
        }
      </div>
    </main>
  )
}