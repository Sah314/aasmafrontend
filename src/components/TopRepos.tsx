import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useParams } from 'react-router-dom';

type Repo = {
    name: string;
    owner: {
      login: string;
    };
    stargazers_count: number;
    open_issues: number;
    // Add more properties as needed
  };
  
const TopRepos:React.FC= () => {
const navigate = useNavigate();
    const { count } = useParams<{ count: string }>(); // Extract the count parameter from the route

const [items,setItems] = useState<Repo[] | null>(null);

//const api =`aasmabackend-production.up.railway.app/v1/top`

useEffect(() => {
const getData=async()=>{
const apidata = await axios.get(`http://aasmabackend-production.up.railway.app/v1/top/${count}`);
try {
    if(apidata.data)
console.log(apidata.data.items);
setItems(apidata.data.items)
} catch (error) {
   console.error(error) 
}
}
getData();  
}, [count])
  
  return (
    <div className=' '>
        <button onClick={()=>navigate('/')} className='btn'>Go Back</button>
        <h2 className=' text-2xl text-[#FFE4FC]'> Top {count} Github repos</h2>
      {items ? (
        <table className='table'>
          <thead className='text-xl text-[#FFE4FC]'>
            <tr>
              <th>Name</th>
              <th>Owner</th>
              <th>Stars</th>
              <th>Open Issues</th>
              <th>Language</th>
              {/* Add more headers as needed */}
            </tr>
          </thead>
          <tbody>
            {items.map((repo: any) => (
              <tr key={repo.id} className='hover text-[#63BAAB]'>
                <td>{repo.name}</td>
                <td>{repo.owner.login}</td>
                <td>{repo.stargazers_count}</td>
                <td>{repo.open_issues}</td>
                <td>{repo.language}</td>
                {/* Add more data cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  
}

export default TopRepos