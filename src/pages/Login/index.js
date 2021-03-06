import React from 'react';
import { LoginBg } from '../../assets';
import { Input, Button, Gap, Link } from '../../components';

const Login = () => {
  return (
    <div className='main-page'>
        <div className='left'>
            <img src={LoginBg} className='bg-img' alt='imageBg'/>
        </div>
        <div className='right'>
            <p className='title'>Login</p>
            <Input label='Email' placeholder='Email'/>
            <Gap height={18}/>
            <Input label='Password' placeholder='Password'/>
            <Gap height={20}/>
            <Button title='Login'></Button>
            <Gap height={50}/>
            <Link title='Klik disini untuk daftar' />
        </div>
    </div>
  )
}

export default Login