import React from 'react';
import { RegisterBg } from '../../assets';
import './register.scss';

const Register = () => {
  return (
    <div className='main-page'>
        <div className='left'>
            <img src={RegisterBg} className='bg-img'/>
        </div>
        <div className='right'>
            <p>Form Registrasi</p>
        </div>
    </div>
  )
}

export default Register