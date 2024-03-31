import 'bootstrap/dist/css/bootstrap.css'
// import ApiContextProvider from './UserContext'
import Cart from './Cart'
import { ApiContext } from './UserContext'
import { useState,useEffect } from 'react'


function App() {
  const [dataApi,setDataApi] = useState(["data"])
  useEffect(()=>{  
    const fetchData = async () => {
      try {
        const response = await fetch("product.json");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const contentType = response.headers.get('Content-Type');
        if (!contentType || !contentType.includes('application/json')) {
          throw new Error('Response did not contain JSON data');
        }
        const data = await response.json();
        setDataApi(data.products) 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  fetchData()
}
,[])    

return(
  
  <div className="container">
    <div className="row">
      <h3 className='text-center'>REACT USECONTEXT TASK</h3>
      <ApiContext.Provider value={{dataApi,setDataApi}}>
        <Cart/>
      </ApiContext.Provider>
    </div>
  </div> 
)
}

export default App
