import { getLocalStorage } from '../storage'

const NotesList = () => {
  const data = getLocalStorage();
  return (
    <div className='w-3/4 bg-zinc-400 mx-auto text-center my-20 p-10 rounded-md'>
      <h1 className='text-3xl font-bold'>Notes</h1>
      <div className="w-full sm:p-5 p-2 flex gap-5 flex-wrap justify-evenly">
      {data ? data.map((note,i)=>(
        <div key={i} className='w-[300px] mt-5 bg-gradient-to-r from-stone-500 to-stone-700 text-white min-h-52 text-left rounded-md p-5'>
          <h2 className='text-xl font-bold border-b-2 border-b-blue-200 mb-2 py-2'>{note.title}</h2>
          <p className='text-md'>{note.description}</p>
          </div>
      )) :
      <h2 className='text-xl text-white'>There is no notes currently. Maybe you can add one move to home page</h2> 
      }
      </div>
    </div>
  )
}

export default NotesList