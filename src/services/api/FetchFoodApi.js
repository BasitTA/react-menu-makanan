import { useEffect, useState } from "react"

const FetchFoodApi = ()=>{
   
   const [menus, setMenus] = useState([])

   const beefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef'

   useEffect(()=>{
      const fetchData = async ()=>{
            const data = await fetch(beefURL)
            const dataJson = await data.json()
            setMenus(dataJson.meals)
      }
      fetchData()
   },[])
}

export default FetchFoodApi