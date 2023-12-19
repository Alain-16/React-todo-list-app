import {useState,useEffect} from 'react'
import axios from 'axios'

function useData(){
    const [loading,setLoading]=useState(true);
    const [data,setdata]=useState();
    const [error,setError]=useState();

    useEffect(()=>{
        const fetchData = ()=>{
        
            setLoading(true);

            axios.get(`https://api.spoonacular.com/food/products/search?apiKey=b82e4e2a011f432da7c7760440651a36&query=pizza&number=2`)
            .then(response=>{
                setdata(response.data.products);
                console.log(response.data)
            })
            .catch(error=>{
                setLoading(false);
                setError(error.message)
            });
        

        }
        fetchData()
    },[]);

    return[data,loading,error]

}

export default useData