import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
import {BsFacebook, BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <Typography variant='h5'>About Me</Typography>
            <Typography>
                To provide our clients with everything they need from A to Z relating to their website. The web services we offer are a comprehensive portfolio of products you will need including quality web design

                <Link to='/contact' className='footerContactBtn'>
                    <Typography>Contact Us</Typography>
                </Link>
            </Typography>
        </div>

        <div>
            <Typography variant='h6'>Social Media</Typography>
            <a href='https://www.instagram.com/shubham___danecha/' target='blank'>
                <BsInstagram className='footerIcon'/>
            </a>
            <a href='https://www.facebook.com/danecha.shubham.3' target='blank'>
                <BsFacebook className='footerIcon'/>
            </a>
        </div>
    </div>
  )
}

export default Footer