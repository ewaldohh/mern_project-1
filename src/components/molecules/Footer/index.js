import React from 'react'
import { Logo, ICFacebook, ICTwitter, ICInstagram, ICGithub, ICLinkedin } from '../../../assets'
import './footer.scss'

const Icon = ({img}) => {
  return (
    <div className='icon-wrapper'>
        <img className='icon-medsos' src={img} alt = 'icon'/>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
        <div className='footer'>
            <div>
                <img className='logo' src={Logo} alt='logo'/>
            </div>
            <div className='social-wrapper'>
                <Icon img = {ICFacebook}/>
                <Icon img = {ICInstagram}/>
                <Icon img = {ICTwitter}/>
                <Icon img = {ICGithub}/>
                <Icon img = {ICLinkedin}/>
            </div>
        </div>
        <p>Copyright</p>
    </div>
  )
}

export default Footer