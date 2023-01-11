import React, { useEffect } from 'react'
import faker from "faker"

function Stories() {
  
   useEffect( () => {
    const suggestions = [...Array(20)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
        //We put the id
        id: i,
    }));

   }, [])


  return (
    <div>
        

    </div>
  )
}

export default Stories