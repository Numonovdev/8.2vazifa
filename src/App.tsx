import React, { useEffect, useRef, useState } from 'react';

function App() {
  const [data ,setData]= useState<Type[]> ([])
  const nameRef = useRef<HTMLInputElement | null >(null)
  const dateRef = useRef<HTMLInputElement | null> (null)

  interface Type {
    name: string,
    date: number
  }

  useEffect(() =>{
    const locdata = localStorage.getItem('data')
    if (locdata) {
      setData(JSON.parse(locdata))
    }
  },[])

  function addCard(e:React.FormEvent) {
    e.preventDefault()

    if (nameRef.current && dateRef.current) {
      let newData: Type = {
        name: nameRef.current.value,
        date: Date.parse(dateRef.current.value),
      }

      let dataNew = [...data,newData]
      setData(dataNew)

      localStorage.setItem('data',JSON.stringify(dataNew))

      nameRef.current.value = '';
      dateRef.current.value = '';
    }
    
  }

  function deleteCard(index: number) {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
    localStorage.setItem('data', JSON.stringify(updatedData));
  }
  



  return (
    <div className='w-full bg-fuchsia-800 mt-0 min-h-screen'>
      <div className=' mx-auto container  p-5 rounded-md'>
        <h1 className='text-center text-4xl font-bold text-blue-500 mb-5'>TO DO TASK</h1>
        <div className='flex flex-col gap-5 mb-4'>
          <input ref={nameRef} className='py-2 px-2 w-ful  rounded-md bg-transparent border outline-none text-white' placeholder='Enter todo task' type="text" />
          <input ref={dateRef} className='py-2 text-right border bg-transparent outline-none text-white px-2 w-1/4 rounded-md' type="date" />
        </div>
        <button onClick={addCard} className='duration-300 py-2 rounded-md text-white bg-green-600 w-full hover:bg-green-700'>
          ADD
        </button>
        <h2 className='text-2xl text-white font-bold mt-5'>Todo items</h2>
        <div className='flex flex-col gap-2 mt-4'>
          {data.length > 0 &&
            data.map((value, index) => (
              <div className='w-full p-3 bg-white/20 rounded-md flex justify-between' key={index}>
                <h1 className='text-xl text-white max-w-[300px]'>{value.name}</h1>
                <div className='flex items-center gap-3'>
                <p className='text-white'>{new Date(value.date).toLocaleDateString()}</p> 
                <button onClick={() => deleteCard(index)} className='px-5 py-2  bg-red-700 hover:bg-red-800 duration-300 text-white font-bold  rounded-lg'>delete</button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
