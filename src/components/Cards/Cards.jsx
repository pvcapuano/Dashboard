import React from 'react'
import { Card1 } from './Card1'
import { Card2 } from './Card2'
import { Card3 } from './Card3'
import { Card4 } from './Card4'
import './styles.css'


export const Cards = () => {
    return (
        <div className="card">
            <Card1 />
            <Card2 />
            <Card3 />
            <Card4 />
        </div>
    )
  
}
