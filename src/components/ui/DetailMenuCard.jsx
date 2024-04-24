const DetailMenuCard = (props)=>{
   const {key,imgUrl,name,price,desc} = props

   return(
      <>
         <img key={key} src={imgUrl} className='size-16 rounded-md'/>
         <h2>{name}</h2>
         <p>Harga</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quasi.</p>
      </>
   )
}
export default DetailMenuCard