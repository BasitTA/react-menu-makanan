

const LayoutingDisplay = ()=>{
   return(
      <>
         <h1 className='text-center text-red-400/100'>Menu Makanan</h1>
         <div className='text-center grid grid-cols-4 bg-orange-400'>
            <aside className="col-span-4 md:col-span-1">Side Bar</aside>
            <div className="col-span-4 md:col-span-3">
               {/* using flex */}
               <div className='flex flex-col space-y-1 bg-slate-200'>
                  <div className='self-center'>a</div>
                  <div className='self-center'>b</div>
                  <div className='self-center'>c</div>
               </div>

               {/* using grid */}
               <div className='grid justify-center space-y-1 bg-slate-300'>
                  <div>a</div>
                  <div>b</div>
                  <div>c</div>
               </div>

               {/* using grid with 3 cols centered */}
               <div className='grid grid-cols-3 justify-items-center space-y-1 bg-slate-500'>
                  <div>a</div>
                  <div>a</div>
                  <div>a</div>
               </div>
            </div>
         </div>

         

      </>
   )
}

export default LayoutingDisplay