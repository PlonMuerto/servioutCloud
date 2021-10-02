import React, {useCallback} from 'react'
import { useEmblaCarousel } from 'embla-carousel/react'
import Image from 'next/image'

import { ArrowBackIos } from '@material-ui/icons' 

export default function EmblaCarousel ({images}){
  const [emblaRef,emblaApi] = useEmblaCarousel({ loop: false })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
 

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {
            images.map((image,i)=>{return(<Image key={i} alt="imagenes index" layout="responsive" width={700} height={475} className="embla__slide" src={image}  />)})
        }
      </div>
      <span className="embla__prev" onClick={scrollPrev}>
        <ArrowBackIos />
      </span>
      <span className="embla__next" onClick={scrollNext}>
        <ArrowBackIos />
      </span>
      <style jsx>{
          `
          .embla {
            overflow: hidden;
            position:relative;
            color:crimson;
            
          }
          .embla__prev{
            cursor:pointer;
            position:absolute;
            top:45%;
            left:10px;
            display:flex;
            align-items:center;
            justify-content:center;
            
          }
          .embla__next{
            cursor:pointer;
            position:absolute;
            top:45%;
            right:10px;
            transform:rotate(180deg);
            display:flex;
            align-items:center;
            justify-content:center;
          }
          .embla__container {
            display: grid;
            grid-auto-flow: column;
            grid-auto-columns: 100%;
          }
          .embla__slide {
            position: relative;
            flex: 0 0 80%;
            
          }
          
          `
      }</style>
    </div>
  )
}