import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import NotePreview from "../components/NotePreview";

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const rawNotes = await fetch('http://localhost:8080/note/all')
  const notes = await rawNotes.json()
  return {
    props: {
      notes,
    }
  }
}

export default function Home({notes}: {notes: Array<any>}) {
  const handleCreateNote = () => {
    const title = prompt('Note title');
    const content = prompt('Note content');
    fetch('http://localhost:8080/note/add', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({title, content}),
      mode: "cors"
    })
      .then((content) => content.text())
      .then((id) => alert("Note created with id: " + id))
  }

  return (
    <>
      <Head>
        <title>Notebin</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-full bg-slate-900 p-5 flex flex-col gap-5 items-center">
        <button onClick={handleCreateNote} className="bg-slate-700 text-slate-200 p-5 rounded-md w-full max-w-md font-bold">Add note</button>
        <div className="flex flex-col gap-5 w-full items-center">
          {notes.map((note) => (<NotePreview key={note.id} note={note}/>))}
        </div>
      </main>
    </>
  )
}
