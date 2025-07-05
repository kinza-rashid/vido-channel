import React, { useEffect, useRef } from 'react'
import './TitleCard.css'
import cards_data from '../../card/Cards_data'



const TitleCard = ({title, category}) => {
  const cardsRef = useRef ();
  const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += deltaY ;
}


return (
        <div className="titleCards">
        <h2>
          {title?title: "Popular on netflix"}
        </h2>

        <div className="cardList" ref={cardsRef} >

        {cards_data.map((card,index) => {
          console.log(card)
        return (
        <div className="card" key={index}>
          <img src={card.image} className='images' />
          <p>{card.name}</p>
        </div> 
)
})} 

</div>
</div>
  )
}

export default TitleCard ;
