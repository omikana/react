import React, { useEffect, useMemo, useRef, useState } from "react";

function App() {

  const slides = [1,2,3,4,5]

  const [index,setIndex] =useState(0)
  const container = useRef<HTMLDivElement | null>(null);
  //DOM 撮ってくる
  // console.log(container.current);

  const width =useMemo(()=>{
    return container.current?.clientWidth ?? 0
  },[container.current])

  return (
    <div className="swiper">
      {index}
      <div className="swiper-container" ref={container}>
        <div className="swiper-wrapper" style={
          {
            transform:`translate3d(${width * index * -1}px, 0, 0)`,
          }
          }>
            {slides.map((slide,slideindex)=>{
              return(
                <div className="swiper-slide" key={`slides_${slide}_${slideindex}`}>
                <div className="content">Slide {slide}</div>
                </div>
              )
            })}
        </div>
        <button type={'button'}
                  disabled={index == 0}
                  onClick={() => {
                    setIndex((prevState) => prevState - 1);
                  }}
        className="swiper-button-prev" />
        <button type={'button'}
                  disabled={index === slides.length-1}
                  onClick={() => {
                    setIndex((prevState) => prevState + 1);
                  }}
        className="swiper-button-next" />
        <div className="swiper-pagination">
          {slides.map((slide,slideindex)=>{
            return(
              <button
              onClick={() => {
                setIndex(slideindex);
              }}
              key={`slides_paginaition_${slide}_${slideindex}`}
              type={'button'}
              className={`swiper-pagination-bullet ${slideindex ===index ? 'is-active': ''}`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App