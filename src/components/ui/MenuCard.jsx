import drinksData from "../../services/api/drinksData"
import DetailMenuCard from "./DetailMenuCard"
import { useEffect, useState } from "react"

const MenuCard = (props)=>{
   const { type, filterName } = props
   const beefURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=beef'
   const seafoodURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood'
   const dessertURL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert'
   const drinks = drinksData

   const [foods, setFoods] = useState(null)

   // filter foods by name
   const handleFilter = (beef, seafood, dessert, all)=>{
      // set food menus based on filter name
      if(filterName==='Beef'){
         setFoods(beef)
      }else if(filterName==='Seafood'){
         setFoods(seafood)
      }else if(filterName==='Dessert'){
         setFoods(dessert)
      }else{
         setFoods(all)
      }
   }

   useEffect(()=>{
      const fetchData = async ()=>{
         const dataBeef = await fetch(beefURL)
         const dataSeafood = await fetch(seafoodURL)
         const dataDessert = await fetch(dessertURL)

         const dataBeefJSON = await dataBeef.json()
         const dataSeafoodJSON = await dataSeafood.json()
         const dataDessertJSON = await dataDessert.json()

         // save all food menus
         const dataMenuAll = [...dataBeefJSON.meals, ...dataSeafoodJSON.meals, ...dataDessertJSON.meals ]
         
         // handle filter btn
         handleFilter(dataBeefJSON.meals, dataSeafoodJSON.meals, dataDessertJSON.meals, dataMenuAll)
      }
      fetchData() //run fetching & filtering data
   },[filterName])

   // display food datas (jsx display)
   const foodMenus = foods && foods.map((menu)=>{
      return <DetailMenuCard type='food' id={menu.idMeal} key={menu.idMeal} name={menu.strMeal} imgUrl={menu.strMealThumb}/>
   })

   // display drink datas (jsx display)
   const drinkMenus = drinks && drinks.map((drink)=>{
      return <DetailMenuCard type='drink' id={drink.idMeal} key={drink.idMeal} name={drink.strMeal} imgUrl={drink.strMealThumb}/>
   })
   
   return(
      <>
         { 
            foodMenus && drinkMenus?
               <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1 justify-items-center my-1'>
                  { type === 'food' ? foodMenus : drinkMenus }
               </div> :
            <div> Tunggu yaa menu lagi disiapin :) </div>
         }
      </>
   )
}

export default MenuCard