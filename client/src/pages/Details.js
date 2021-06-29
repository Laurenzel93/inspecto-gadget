import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "../components/Nav";
import API from "../utils/API"




function Details() {
    const {id} = useParams()
   
   console.log(id)
  
    const [inspection, setInspection] = useState([]);
   
    
    useEffect(() => {
        loadInspections()
    }, [])

    async  function loadInspections() {  
       await API.getInspection(id)
       .then(res => {
         setInspection(res.data)
        }).catch(err => console.log(err));
    };

    return (
        <div>
            <Helmet>
                <title>Details</title>
            </Helmet>
            <Nav />
           
           

        </div>
    )
};

export default Details;