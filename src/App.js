
  import React, { useEffect } from 'react'
  import Mavbar from './component/Mavbar'
  import Filter from './component/Filter'
  import Card from './component/Card'
  import Cards from './component/Cards'
  import { apiUrl, filterData } from './data'
import { toast } from 'react-toastify'

  
  const App = ({filterData}) => {

    useEffect(()=>{

    const fetchdata = async()=>{

      try{

        const res = await fetch(apiUrl);
        const data =  res.json();
        //save
        console.log(data);


      }
      catch(error){
        toast.error("error");

      }
    }
    })
    return (
      <div>


        <Mavbar/>
        <Filter  filterData = {filterData}/>
        <Card/>
      </div>
    )
  }
  
  export default App
 

