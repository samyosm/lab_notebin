import Head from 'next/head'
import Link from "next/link";


export async function getStaticPaths() {
  const rawNotes = await fetch('http://api:8080/note/all')
  const notes = await rawNotes.json();
  const paths = notes.map((note: { id: any }) => ({
    params: {id: note.id},
  }))

  return {paths, fallback: 'blocking'}
}

export async function getStaticProps({ params } : any) {
  const rawNote = await fetch(`http://api:8080/note/get/${params.id}`)
  const note = await rawNote.json()
  return {
    props: {
      note,
    }
  }
}

export default function Note({note}: {note: any}) {

  return (
    <>
      <Head>
        <title>{note.title}</title>
        <meta name="description" content={note.content} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full min-h-[100vh] bg-slate-900 text-slate-200 flex flex-col items-center pt-5 gap-5">
        <Link href="/" className="w-full max-w-3xl p-5 bg-slate-800 rounded-md text-center">Home</Link>
        <div className="w-full max-w-3xl p-7 flex flex-col gap-5 bg-slate-700 rounded-md">
          <p className="text-2xl text-bold">{note.title}</p>
          <p>{note.content}</p>
        </div>
      </main>
    </>
  )
}
