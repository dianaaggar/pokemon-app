import React from 'react'

function Create() {
  return (
    <div>
        <form action="/create" method='post'>
        <a href="../">Go back</a> <br />
        <label htmlFor="name">Pokemon Name:</label>
        <input type="text" name="name" id="name" required/>
        <input type="submit" value="submit pokemon" />
    </form>
      
    </div>
  )
}

export default Create
