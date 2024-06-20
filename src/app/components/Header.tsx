import React, { FC } from 'react'
import { Header } from '../data/interfaces'

const Header: FC<Header> = ({ title, description }) => {
    return (
        <div className="border-b border-gray-200 pb-10">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">{title}</h1>
            <p className='mt-4 text-base text-gray-500'>{description}</p>
        </div>
    
  )
}

export default Header