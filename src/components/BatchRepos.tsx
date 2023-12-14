import {useState,useEffect} from 'react'
import {  useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
type Repo = {
    name: string;
    owner: {
      login: string;
    };
    stargazers_count: number;
    open_issues: number;
    // Add more properties as needed
  };

const BatchRepos:React.FC = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState<Repo[] | null>(null);
    const { count } = useParams<{ count: string }>();   
    const [pageNo, setPageNo] = useState<number>(1); // Initial page number


    useEffect(() => {
        const fetchData = async () => {
          try {
            const apidata = await axios.get(`http://aasmabackend-production.up.railway.app/v1/batch/${count}/${pageNo}`);
            
            if (apidata.data) {
              console.log(apidata.data.items);
              setItems(apidata.data.items);
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, [count, pageNo]);
    

    const goToNextPage = () => {
        setPageNo((prevPageNo) => prevPageNo + 1);
      };
    
      const goToPrevPage = () => {
        if (pageNo > 1) {
          setPageNo((prevPageNo) => prevPageNo - 1);
        }
      };
    return (


        
    <div> 
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
        
        
        <div className="join">
  <button className="join-item btn" onClick={goToPrevPage} disabled={pageNo === 1} >«</button>
  <button className="join-item btn">{pageNo}</button>
  <button className="join-item btn" onClick={goToNextPage}>»</button>
</div>
</div>
  )
}

export default BatchRepos