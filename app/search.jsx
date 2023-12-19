'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation';

export default function Search() {
  const [uid, setUid] = useState(0)
  const { push } = useRouter();

  async function handleSubmit(event){
    event.preventDefault();
    localStorage.setItem("uid", uid)
    push(`/uid/${uid}`)
  }

  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setUid(e.target.value)} className="py-1 px-3 rounded-md text-black focus:border-2 focus:border-light-purple focus:outline-none" name="idInput" placeholder="UID" />
        <button className="m-4 py-1 px-3 rounded-md bg-light-purple hover:bg-medium-purple" type="submit">Search</button>
      </form>
    </div>
  )
}

