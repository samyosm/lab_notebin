import Link from "next/link";
export default function NotePreview({note}: {note: any}) {

  return (
    <Link href={`/${note.id}`} className="w-full max-w-md bg-slate-800 text-slate-300 rounded-md p-5 flex flex-col text-left">
      <p className="font-bold">{note.title}</p>
      <p className="line-clamp-1">{note.content}</p>
    </Link>
  )
}
