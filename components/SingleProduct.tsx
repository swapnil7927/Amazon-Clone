import React from 'react'
import Image from 'next/image'
import Ratings from './shared/Ratings'
import AddToCardContainer from './AddToCardContainer'

const SingleProduct = ({singleProduct}:{singleProduct:any}) => {
  return (
    <div className='w-[80%] mx-auto mt-10'>
     <div className='flex justify-between'>
        
        {
            singleProduct.map((product:any)=>{
                return(
                    <div key={product.id} className='flex'>
                <div className='flex'>
                    <div className='bg-gray-100'>
                    <Image className='mix-blend-multiply' src={product.image} width={300} height={200} alt={product.title}/>

                    </div>
                    <div className='mx-4 w-[70%]'>
                    <h1 className='font-bold text-lg'>{product.title}</h1>
                    <p>{product.description}</p>
                    <Ratings ratings = {product.rating}/>
                    <h1 className='font-bold text-2xl'>{`$${product.price}`}</h1>
                    <div>
                        <h1>About this item</h1>
                    </div>
                    </div>
                </div>
                <AddToCardContainer product={product}/>
                    </div>
                )
            })
        }
        </div>
     </div>
  )
}

export default SingleProduct
