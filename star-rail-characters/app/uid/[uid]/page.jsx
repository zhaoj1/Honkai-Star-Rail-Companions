'use client'
import { useState, useEffect } from 'react'

export default function Page() {
  // const uid = localStorage.getItem("uid")
  const uid = 601038074
  const [player, setPlayer] = useState({})
  const [characters, setCharacters] = useState([])
  const [currentChar, setCurrentChar] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`../api/uid/${uid}?lang=en`)
      const data = await res.json()
      setPlayer(data.player)
      setCharacters(data.characters)
    }
    getData();
  }, [])

  return (
    <main className="h-full text-white bg-gradient-to-bl from-dark-purple from-65% to-dark-blue">
      <div className="flex justify-center items-center flex-col h-full">
        <div>
          {player.nickname} - UID{player.uid} - Lv. {player.level} 
        </div>
        <div>
          {characters.length > 0 && 
            characters.map((char) => 
              char.id
            )
          }
        </div>
        {currentChar && 
          <div>
            <Character character={currentChar} />
          </div>
        }
      </div>
    </main>
  )
}