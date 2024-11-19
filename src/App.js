import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar'
import Filter from './component/Filter'
import Cards from './component/Cards'
import {filterData, apiUrl} from './data'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Card from './component/Card'
import loader from './component/loader';



const App = ( {filterData}) => {

  // let filterData = props.filterData;
  const [courses , setcourses] = useState();
  const [loading, setloading] = useState(false);

  async function fetchdata() {

    setloading(true);


    try{

      const res = await fetch(apiUrl);
      const output = res.json();
      console.log(output);

      setcourses(output.data);

    }catch(err){
      toast.err("error");

    }
    
    setloading(false);
  }

  useEffect( ()=>{
    fetchdata();
  })
  return (
    <div>

      <div>
        <Navbar/>
      </div>

      <div>
      <div>
        <Filter filterData = {filterData}/>
      </div>

      <div>
       {
        loading ? (<loader/>):(<Card filterData = {filterData}/>)
       }
      </div>
      </div>
      
    </div>
  )
}

export default App;