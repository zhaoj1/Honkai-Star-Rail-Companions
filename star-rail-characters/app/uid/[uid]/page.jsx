'use client'
import { useState, useEffect } from 'react'
import Player from './player.jsx'
import CharacterList from './characterList.jsx'
import CharacterDetails from './characterDetails.jsx'

export default function Page() {
  const uid = localStorage.getItem("uid")
  const asset_base_url = 'https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/'

  const [player, setPlayer] = useState(null)
  const [characters, setCharacters] = useState(null)
  const [currentChar, setCurrentChar] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`../api/uid/${uid}?lang=en`)
      const data = await res.json()
      setPlayer(data.player)
      setCharacters(data.characters)
      setCurrentChar(data.characters[0].id)
    }
    getData();
  }, [])

  function createAssetUrl(asset){
    return asset_base_url + asset
  }

  return (
    <main className="min-h-full text-white bg-gradient-radial from-dark-blue from-50% to-dark-purple">
      <div className="flex items-center flex-col h-full relative py-10">
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
      </div>
    </main>
  )
}