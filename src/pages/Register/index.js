import React from 'react';
import { RegisterBg } from '../../assets';
import { Input } from '../../components';
import './register.scss';

const Register = () => {
  return (
    <div className='main-page'>
        <div className='left'>
            <img src={RegisterBg} className='bg-img' alt='imageBg'/>
        </div>
        <div className='right'>
            <p className='title'>Form Registrasi</p>
            <Input label='Full Name' placeholder='Full Name'/>
            <Input label='Email' placeholder='Email'/>
            <Input label='Password' placeholder='Password'/>
        </div>
    </div>
  )
}

export default Register