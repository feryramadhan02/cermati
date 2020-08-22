import React from 'react'
import { data } from '../data/data'


import '../assets/style/card.scss'
import '../assets/style/responsive.scss'

const Cards = () => {
    return (
        <div>
            <div className="base">
                {data.map(item => (
                    <div key={item.id} className="base__card">
                        <div className="base__card__icon">
                            <h4>{item.title}</h4>
                            <img src={item.image} alt="" />
                        </div>
                        <p>{item.desc}</p>
                    </div>
                )
                )}
            </div>
        </div>
    );
}

export default Cards;