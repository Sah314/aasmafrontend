import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
type Props = {}

const Home = (props: Props) => {
    
    return (
        <div className='flex flex-col'>
<h1 className='text-4xl font-extrabold mb-6 mt-6'>Welcome to Github Ranger</h1>
            <div>
            <div className="dropdown dropdown-hover ">
  <div tabIndex={0} role="button" className="btn m-1 bg-[#88709F] text-slate-700">Get repos</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow-gray-600 rounded-box w-52 grow-out bg-[#EBE2F2] text-[#FF00B6] text-md font-semibold shadow-inner ">    <li><Link to={'/top-repos/10'}>Get-top-10</Link></li>
    <li><Link to={'/top-repos/50'}>Get-top-50</Link></li>
    <li><Link to={'/top-repos/100'}>Get-top-100</Link></li>
    <li><Link to={'/batch/10'}>Get-batchof-10</Link></li>
    <li><Link to={'/batch/50'}>Get-batchof-50</Link></li>
    <li><Link to={'/batch/100'}>Get-batchof-100</Link></li>
  </ul>
</div>
            </div>
           

{/* <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">Get Repos</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 grow-out">    <li><Link to={'/batch/10'}>Get-top-10</Link></li>
    <li><Link to={'/batch/50'}>Get-top-50</Link></li>
    <li><Link to={'/batch/100'}>Get-top-100</Link></li>
  </ul>
</div> */}
<h3 className='fixed bottom-14 left-10'>By: Sahil Khadayate</h3>
        </div>
        

      ); 
}

export default Home