import React from "react"
import useResize from "./useResize"

function Trial(){

   const windowSize = useResize();
   console.log(windowSize);

    return (
        <>
        <div>
            <h1>width:{windowSize.width}px</h1>
            <h1>height:{windowSize.height}px</h1>
        </div>
        </>
    )
}

export default Trial