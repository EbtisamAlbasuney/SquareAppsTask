import React,{useEffect,useState} from "react";
import TabbleForm from './TableForm'
import TableCom from './TableCom'
import axios from "axios";


function App() {
  const[statedata,Setstatedata]= useState ({
    data:{ 
      "id": 1,
      "name": "نموذج 1",
       feilds:[]}
  })
  console.log(statedata)
  
  
    const getFeilds = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/feilds`);
        const res = await response.data;
        console.log(res);
          Setstatedata((state) => ({
            data: {
              ...state.data,
              feilds: res,
            },
          }));
        
        // console.log(statedata)
          
      } catch (error) {
          console.log(error)
          
      }
    
    };
    const addFeild = async(_data)=>{
      try {
        const response = await axios.post(`http://localhost:3000/feilds`,_data);
        const res = await response.data;
        console.log(res);
        // Setstatedata((state) => ({
        //   data: {
        //     ...state.data,
        //     feilds: res,
        //   },
        // }));
        getFeilds()
          
      } catch (error) {
          console.log(error)
          
      }
    }

    useEffect(()=>{
      getFeilds()
    },[]
      )
  


  return (
    <div>
         <TabbleForm addFeild = {addFeild}/>
         <TableCom feilds={statedata?.data?.feilds} />

    </div>
  );
  }
export default App;
