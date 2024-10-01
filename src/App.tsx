import { useEffect, useState } from "react"
import { Card } from "./components/card"
import { FoodData } from "./interface/FoodData"
import { fetchData } from "./hooks/useFoodData";
import './App.css'
import { CreateModal } from "./create-modal/create-modal";


 function App() {
  const [data, setData] = useState<FoodData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false)


  useEffect(() => {

    const fetchFoodData = async () => {
      const responseData = await fetchData();
      setData(responseData)
    }
    fetchFoodData()

  }, [])

  const HandleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }


  return (
    <div className="container">
      <h1>Cardapio</h1>
      <div className="card-grid">
        {data ? data.map(foodData => <Card price={foodData.price} title={foodData.title} image={foodData.image} />) : <p></p>}
      </div>
      {isModalOpen && <CreateModal />}
      <button onClick={HandleOpenModal}>Novo</button>
    </div>
  )

}

export default App