import React from 'react'
import heroImage from '../assets/images/pexels-andrea-piacquadio-972804.jpg'

const Carousel = () => {

  const hero = [
    {
      image_url: heroImage,
      header: 'Explicit Elegance',
      text: 'Exclusive Fashion store for Women',
    },
    {
      image_url: heroImage,
      header: 'Up to 50% Sale',
      text: 'Do not miss out',
    },
    {
      image_url: heroImage,
      header: 'Free Delivery',
      text: 'Do not miss out',
    },
  ]

  const [CarouselIndex, setCarouselIndex] = React.useState<number>(0)
  const [autoSlide, setAutoSlide] = React.useState<boolean>(true)

//   const prevSlide = () =>{
//     const targetIndex = CarouselIndex === 0 ? hero.length - 1 : CarouselIndex - 1
//     setCarouselIndex(targetIndex)
//   }

  

  React.useEffect(()=>{
    let timeOut:number;

    const nextSlide = () =>{
    const targetIndex = CarouselIndex === hero.length - 1 ? 0 : CarouselIndex + 1
    setCarouselIndex(targetIndex)
  }

    if (autoSlide){
      timeOut = window.setTimeout(() => {
      nextSlide();
    }, 3500);} 

  return () =>{
    clearTimeout(timeOut)
  }
 },[CarouselIndex, autoSlide, hero.length]);

  const jumpToImage = (imageIndex:number) =>{
    setCarouselIndex(imageIndex)
  }

  return (
    <div className='h-[68vh] 2xl:h-[58vh]'>
      <div
        style={{ backgroundImage: `url(${hero[CarouselIndex].image_url})`}}
        className='w-full h-full bg-left bg-cover relative transition-opacity duration-500 ease-in-out cursor-pointer group'
        onMouseEnter={()=>{setAutoSlide(false)}}
        onMouseLeave={()=>{setAutoSlide(true)}}
      >
        <div className='absolute left-0 top-0 w-full h-full bg-[#3333334d]'>
          <div className="absolute top-[50%] left-[25%] translate-x-[-25%] translate-y-[-50%] w-fit h-fit ">
            <h2 className="text-6xl relative w-fit capitalize text-skin-pry_text font-bold mb-4">{hero[CarouselIndex].header}</h2>
            <p className="text-xl text-skin-pry_text mt-2 mb-8">
              {hero[CarouselIndex].text}
            </p>
            <button className="font-medium uppercase text-sm text-center bg-skin-button_bg hover:bg-skin-button_bg_hover text-skin-button_text hover:text-skin-button_text_hover px-8 py-4">shop now</button>
          </div>
        </div>
        <span className='flex flex-col absolute left-[10%] top-[50%] translate-x-[-10%] translate-y-[-50%] '>
            {hero.map((_, imageIndex) =>
            (<span key={imageIndex} onClick={() =>jumpToImage(imageIndex)} className='cursor-pointer flex flex-col text-center'>{imageIndex === CarouselIndex ? <span className='p-2 bg-transparent border-r-2 border-[#5d3877] text-skin-sec_text'>{`0${imageIndex + 1}`}</span> : <span className='p-2 bg-transparent text-transparent border-r-2 border-white'>{`0${imageIndex + 1}`}</span>}</span>)
          )}
        </span>
      </div>
      
    </div>
  )
}

export default Carousel;