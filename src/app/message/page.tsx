import React from 'react'

function Page() {
  return (
    
      <form className="bg-lime-400 text-center font-bold">
        <fieldset>
            <legend>Contact us</legend>

            <br />
            <label className="" >Name</label>
            <input type="text"  placeholder="name"/>

            <br /><br />

            <label>Email</label>
            <input type="text" placeholder="type email" />
        </fieldset>

        <br />

        <button className="border-4 py-2 mr-2   border-double bg-zinc-500 text-green-300"> submit</button>
      </form>

      
    
  )
}

export default Page
