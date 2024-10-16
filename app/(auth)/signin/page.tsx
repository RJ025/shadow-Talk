'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Component() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button 
        onClick={() => signIn()}
        className="border border-black p-2 rounded-lg  text-white bg-gradient-to-t from-indigo-800 to-blue-500 ml-3"
      >
        Sign in
      </button>
    </>
  )
}