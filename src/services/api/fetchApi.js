const fetchApi = async (url)=>{
  const data = await fetch(url)
  const dataJSON = await data.json()
  const dataMenu = await dataJSON.meals
  return dataMenu
}

export default fetchApi