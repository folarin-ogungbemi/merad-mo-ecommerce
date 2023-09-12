import React, {ReactNode} from 'react'
import Layout from '../components/Layout'
import { Link } from "react-router-dom";
import {LuSettings2} from 'react-icons/lu'
import {ImSpinner9} from 'react-icons/im'
import {TfiLayoutGrid2Alt} from 'react-icons/tfi'
import {BiSortDown} from 'react-icons/bi'
import {BsPlusLg, BsFillHeartFill, BsStarFill, BsStar, BsStarHalf} from 'react-icons/bs'
import {FaRegEye} from 'react-icons/fa'


import AsideProductsFilter from '../components/AsideProductsFilter'

import {useAppDispatch, useAppSelector} from '../app/hooks'
import { fetchProducts } from '../features/products/productsSlice';
// import {addProduct} from '../features/products/productsSlice'


const ProductPage:React.FC = () => {
    const {productsList, loading, error } = useAppSelector((state) => state.products)
    const dispatch = useAppDispatch();
    

    React.useEffect(() =>{
        dispatch(fetchProducts());
    }, [dispatch])

    const [showFilter, setShowFilter] = React.useState<boolean>(true)

    const handleClick = ()=>{
        setShowFilter(prevState => !prevState)
    }

     type productStarT = (value:number) => Array<ReactNode>;

    const productStar:productStarT = (value) => {
        const maxStar = 5
        const stars:Array<ReactNode> = [];
        
        const filledStars = Math.floor(value);

        for (let i = 0; i < maxStar; i++) {
        if (i < filledStars) {
        stars.push(<BsStarFill key={i} className='ml-1 my-auto text-[#734f96] text-sm'/>);
        } else if (i === filledStars && value > filledStars ) {
        stars.push(<BsStarHalf key='half' className='ml-1 my-auto text-[#734f96] text-sm'/>);
        } else {
        stars.push(<BsStar key={`none-${i}`} className='ml-1 my-auto text-[#734f96] text-sm'/>);
        }}
        return stars;
    }

    if (loading) {
    return (
        <Layout title='Merad & Mo | Products' content='Merad & Mo Products Page'>
            <div className='h-[70dvh] w-full flex justify-center text-center'>
                <ImSpinner9 className="animate-spin text-skin-sec_text h-20 w-20 my-auto"/>
            </div>
        </Layout>
    )
  }

  if (error) {
    return (
        <Layout title='Merad & Mo | Products' content='Merad & Mo Products Page'>
            <div className='h-[100dvh] w-full flex justify-center text-center'>
                <p className='text-5xl font-medium my-auto'>Error: {error}</p>
        </div>
        </Layout>
    )
  }

  return (
    <>
      <Layout title='Merad & Mo | Products' content='Merad & Mo Products Page'>
      <section className='container mx-auto my-5 text-skin-text_col px-4'>
        <h2 className='text-5xl font-bold my-5'>Products</h2>
        <div className="flex gap-5 my-5 sticky">
            {showFilter && <div className='w-[20%] text-sm text-[#666]'>Filter</div>}
            <div className={`h-full flex justify-between text-sm text-[#666] ${showFilter ? 'lg:w-[80%]' : 'w-full'}`}>
                <div className=' flex gap-3'>
                    <TfiLayoutGrid2Alt className='text-skin-sec_text my-auto'/>
                    <span>{productsList.length} products</span>
                </div>
                <div className='flex gap-5 cursor-pointer'>
                    <span  onClick={handleClick} className='flex hover:text-[#333]'>{showFilter? 'Hide' : 'Show'} Filter <LuSettings2 className='my-auto ml-1'/></span>
                    <Link to='sort' className='flex hover:text-[#333]'>Sort Products<BiSortDown className='my-auto ml-1'/></Link>
                </div>
            </div>
        </div>
        <div className='w-full flex gap-5'>
            {showFilter && <AsideProductsFilter/>}
            <div className={`h-full ${showFilter ? 'lg:w-[80%]' : 'w-full'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 md:gap-4 lg:gap-10">
                    {productsList.map((product, productIndex) => 
                    <div key={productIndex} className="w-full">
                        <div className="w-full relative group border border-skin-section_divide">
                            <div className="max-w-80 h-80 relative overflow-y-hidden ">
                                <img className="w-full h-full" src={product.image} alt={product.title}/>
                            </div>
                            <div className="group-hover:flex flex-col gap-2 absolute top-[5%] right-[5%] hidden cursor-pointer">
                                <Link to='product_details' className='flex justify-center text-center p-3 bg-skin-sec_bg'><FaRegEye className='my-auto text-white'/></Link>
                                <Link to='add_to_cart' className='flex justify-center text-center p-3 bg-skin-sec_bg'><BsPlusLg className='my-auto text-white'/></Link>
                                <Link to='add_to_wishlist' className='flex justify-center text-center p-3 bg-skin-sec_bg'><BsFillHeartFill className='my-auto text-white'/></Link>
                            </div>
                        </div>
                        <div className={` grid grid-rows-4 ${!showFilter ? 'text-md' : 'text-sm'}`}>
                            <p className='underline'>{product.category}</p>
                            <p className='font-medium'>{product.title.length > 35 ? `${product.title.substring(0, 35)}...` : product.title}</p>
                            <p className='font-medium'>{product.price}€</p>
                            <p className='flex my-auto'>({product.rating.count}) {productStar(product.rating.rate)}</p>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
      </section>
    </Layout>
    </>
  )
}

export default ProductPage;