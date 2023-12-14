import {useEffect} from 'react';
import axios from "axios";
import './App.css';

function App() {


useEffect(() => {
  

  return () => {
    
  }
}, [])


  return (
   <>
   <div className="App" >
   <details className="dropdown fixed top-80 right-1/2">
  <summary className="m-1 btn border-none text-[#63BAAB] text-center ml-10">open or close</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] rounded-box w-52 text-[#63BAAB] bg-slate-800 mt-3 mr-3 pr-3">
    <button>get top 10 repos</button>
    <button>get top 50 repos</button>
    <button>get top 100 repos</button>
  </ul>
</details>
   </div>
   </>
  );
}

export default App;
