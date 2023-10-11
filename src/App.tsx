import { useEffect, useState } from 'react'
import Tours from './components/Tours.tsx'
import Loading from './components/Loading.tsx';
import { Tour } from './types.tsx';

const url = "https://course-api.com/react-tours-project"


function App() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  
  
  const fetchTours = async() => {
    
    setIsLoading(true);

    try{
      //Fetch the tours information from the server
        const response= await fetch(url);
      //convert data and return it
        const toursData = await response.json();

        console.log(toursData);

      setIsLoading(false);
      setTours(toursData);
    }catch(error){
      setIsLoading(false);
      console.error(error);
    }

  };

  useEffect(()=>{
    fetchTours();
  },[]);

  if(isLoading){
    return(
      <main>
        <Loading />
      </main>
    );
  }


  return (
    <main>
      <Tours tours={tours}/>
    </main>
  )
}

export default App
