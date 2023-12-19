import useData from "./useData";


function Trial(){

    const [data,loading,error]=useData();
   
    
    return(
       
        <>
            
            <h1>React app</h1>
            {loading && <p>Loading...</p>}
            {data &&
            <div>
             {data.map(item=>(
                <p key={item.id}>Data:{item.title}</p>
            ))}   
            </div>
            }
            {error && <p>Error: {error}</p>}  
         </>
    )

}

export default Trial