import React from 'react'
import './blogItem.scss'
import { RegisterBg } from '../../../assets'

const Blogitem = () => {
  return (
    <div className='blog-item'>
        <img className='image-thumb' src={RegisterBg} alt='post' />
        <div className='content-detail'>
          <p className='title'>Blog Title</p>
          <p className='author'>Author - Date Post</p>
          <p className='body'>Magna esse ipsum proident in officia laboris non consectetur sit.Veniam aliqua anim veniam amet aute reprehenderit velit voluptate laboris anim reprehenderit ipsum qui sunt. Exercitation velit velit magna nostrud ut. Consectetur eu tempor sunt sunt. Enim esse reprehenderit proident sit ad ullamco magna fugiat et ut elit elit sint veniam. Velit adipisicing sunt tempor ut laboris dolor do enim non culpa quis dolor aute. Culpa minim cupidatat minim veniam proident eu amet anim commodo enim ad ad.</p>
        </div>
    </div>
  )
}

export default Blogitem