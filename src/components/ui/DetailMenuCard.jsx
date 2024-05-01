const DetailMenuCard = (props)=>{
   const { key,imgUrl,name,price,desc } = props

   return(
      <>
         <img key={key} src={imgUrl} className='size-16 rounded-md'/>
         <h2>{name}</h2>
         <p>{price ? price : ''}</p>
         <p>{desc ? desc : ''}</p>
      </>
   )
}
export default DetailMenuCard