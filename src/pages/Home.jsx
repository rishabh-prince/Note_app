import { useState } from 'react'
import { toast } from 'react-toastify';
import { updateLocalStorage } from '../storage';

const Home = () => {
  // use state is used to store input information from user
  const [formData, setFormData] = useState({
    title: "",
    description: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      toast.error("Fields can not be empty")
      return;
    } else {
      // using try catch block for handling the error.
      try {

        setFormData({ ...formData, title: formData.title.trim(), description: formData.description.trim() })
        updateLocalStorage(formData)
        toast.success("Details updated successfully");

        setFormData((prev) => ({ ...prev, title: "", description: "" }))
      } catch (err) {
        console.log(err);
        toast.error(err.message)
      }
    }


  }
  return (
    <div className='sm:2/3 md:w-1/2 w-5/6 bg-gradient-to-r from-blue-200 to-cyan-200 mx-auto mt-20'>

      <form className='text-center flex flex-col gap-5 w-full p-5' onSubmit={handleSubmit}>
        <h1 className='text-2xl font-bold w-5/6 mx-auto'>✍️ Write your thoughts</h1>

        <input type="text" className='md:w-3/4 sm:w-5/6 w-full border-2 border-zinc-500 mx-auto h-10 p-4 rounded-full outline-0'
          placeholder='Title goes here..' value={formData.title ?? ""} onChange={(e) => setFormData({ ...formData, title: e.target.value })} />

        <textarea type="text" className='md:w-3/4 sm:w-5/6 w-full border-2 border-zinc-500 mx-auto h-10 px-4 py-2 outline-0 rounded-md'
          placeholder=' 💬 Description goes here...' rows={10} value={formData.description ?? ""} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />

        <button className='text-xl font-bold text-white bg-black px-5 py-3  mx-auto mt-5 rounded-full cursor-pointer'>Submit</button>
      </form>
    </div>
  )
}

export default Home