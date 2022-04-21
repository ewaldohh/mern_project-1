import React from 'react';
import { RegisterBg } from '../../assets';
import { Input } from '../../components';
import { Button } from '../../components';
import { Gap } from '../../components';
import { Link } from '../../components';
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
            <Gap height={18}/>
            <Input label='Email' placeholder='Email'/>
            <Gap height={18}/>
            <Input label='Password' placeholder='Password'/>
            <Gap height={20}/>
            <Button title='Register'></Button>
            <Gap height={50}/>
            <Link title='Kembali ke Login' />
        </div>
    </div>
  )
}

export default Register