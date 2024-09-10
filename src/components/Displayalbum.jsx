import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';

const Displayalbum = () => {
    const {id}=useParams();
    const albumdata=albumsData[id];
    
  return (
    <>
    <Navbar/>
    <div className='mt-10 flex gap-8  md:flex-row md:items-end'>
       
       <img className='w-48 rounded ' src={albumdata.image}/>
        <div className='flex flex-col'>
            <p>Playlist</p>
            <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumdata.name}</h2>
            <h4>{albumdata.desc}</h4>
            <p className='mt-1'>
                <img className='inline-block w-5' src={assets.spotify_logo}/>
                <b>Spotify</b>
                .1,345,567likes.
                <b>50 Songs,</b>about 3h 24mins

            </p>
        </div>
    </div>
    <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
      <p><b className='mr-4 '>#</b>Title</p>
      <p>Album</p>
      <p className='hidden sm:block'>Date Added</p>
      <img className='m-auto w-4' src={assets.clock_icon}/>
    </div>
    <hr/>
    {
        songsData.map((item,index)=>(
               <div key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer'>
                   <p className='text-white'>
                    <b className='mr-4 text-{#a7a7a7}'>{index+1}</b>
                    <img className='inline w-10 mr-5' src={item.image}/>
                    {item.name}
                   </p>
                   <p className='text-[15px]'>{albumdata.name}</p>
                   <p>10 days ago</p>
               </div>
        ))
    }
    </>
  )
}

export default Displayalbum