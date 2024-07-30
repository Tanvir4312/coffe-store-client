import { useLoaderData } from "react-router-dom"
import CoffeeCart from "./Pages/CoffeeCart"
import { useState } from "react"



function App() {
  const loadedCoffees = useLoaderData()
  const [coffees, setCoffees] = useState(loadedCoffees)

  return (
    <>

      <h1 className='text-6xl text-purple-500 text-center py-10'>Hot And Cold Coffee: {coffees.length}</h1>

      <div className="grid md:grid-cols-2 gap-7">
        {
          coffees.map(coffee => <CoffeeCart
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCart>)
        }
      </div>

    </>
  )
}

export default App
