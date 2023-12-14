import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
type Props = {}

const Home = (props: Props) => {
    
    return (
        <div className='flex flex-col'>
            <div>
            <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-1">Get top repos</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 grow-out">    <li><Link to={'/top-repos/10'}>Get-top-10</Link></li>
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

        </div>
        

      ); 
}

export default Home