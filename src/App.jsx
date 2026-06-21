import React, { useEffect, useState } from 'react'

function App() {

  const [ArrData, setArrData] = useState([]);
  const [Page, setPage] = useState(1)


  async function getData() {
    let response = await fetch(`https://picsum.photos/v2/list?page=${Page}&limit=20.`);
    let data = await response.json();
    setArrData(data);
  }


  useEffect(function () {
    getData();
  }, [Page])


  return (
    <div className='h-screen  flex pt-20 rounded overflow-hidden items-center flex-col'>

      {/* <div className='p-10'>
        <button onClick={getData} className='py-1 px-5 rounded text-white font-bold active:scale-95 bg-blue-500 shadow-lg shadow-blue-900/50 '>Get Data</button>
      </div> */}


      <div className='w-full sm:w-300 h-150 p-4 sm:p-10 flex flex-wrap gap-5 rounded-2xl overflow-hidden justify-center no-scrollbar overflow-y-auto'>
        {ArrData.map(function (elem, key) {
          return <div key={elem.id} className='rounded-xl overflow-hidden'>
            <img className='h-50' src={elem.download_url}></img>
            <h1 className='font-bold text-gray-500'>{elem.author}</h1>
          </div>
        })}
      </div>

      <div className='flex gap-11 pt-10'>
        <button
          onClick={() => {
            if (Page > 1) { // Only subtract if we are on page 2 or higher
              setPage(Page - 1);
            }
          }}

          style={{ opacity: Page === 1 ? 0.5 : 1 }}
          className=' text-md py-3 active:scale-95 px-10 rounded bg-blue-500 shadow-lg shadow-blue-500/50 text-white font-bold'>Prev</button>

        <h2 className='text-xl font-bold text-gray-700'>
          Page {Page}
        </h2>

        <button onClick={() => {
          setPage(Page + 1);
        }} className='text-md py-3 active:scale-95 px-10 rounded bg-blue-500 shadow-lg shadow-blue-500/50 text-white font-bold'>Next</button>
      </div>


    </div>
  )
}

export default App