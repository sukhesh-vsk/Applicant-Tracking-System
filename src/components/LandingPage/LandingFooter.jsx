import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import './styles/LandingFooter.css'
import { Grid } from '@mui/material';

function LandingFooter() {
  return (
    <div className='__1'>
    <div>
      <Grid container className='footer__container'>
      <div className='footer__1'>
        <Grid item className='footer__social-media'>
          <div>
            <h2>Todo Hub</h2>
          </div>
          <div>
            <ul>
              <li className='footer__logo'>
                <a href=""><FaInstagram /> </a>
              </li>
              <li className='footer__logo'>
                <a href=""><FaTwitter /></a>
              </li>
              <li className='footer__logo'>
                <a href=""><FaFacebook /> </a>
              </li>
              <li className='footer__logo'>
                <a href=""><FaLinkedinIn /> </a>
              </li>
              <li className='footer__logo'>
                <a href=""><FaYoutube /></a>
              </li>
            </ul>
          </div>
        </Grid>
      </div>
      <div className='footer__columns'>
        <Grid item className='footer__content'>
          <div>
            <h2 className='footer__head'>Product</h2>
          </div>
          <div>
            <ul>
              <li className='footer__product footer__text'>
                <a href=""><span>Wikis</span></a>
                <a href=""><span>Projects</span></a>
                <a href=""><span>Docs</span></a>
                <a href=""><span>What's New</span></a>
              </li>
            </ul>
          </div>
        </Grid>
        <Grid item className='footer__content'>
          <div>
            <h2 className='footer__head'>Download</h2>
          </div>
          <div>
            <ul>
              <li className='footer__download footer__text'>
                <a href=""><span>iOS & Android</span></a>
                <a href=""><span>Mac & Windows</span></a>
                <a href=""><span>Web Clipper</span></a>
              </li>
            </ul>
          </div>
        </Grid>
        </div>
      </Grid>
    </div>
    <div>
      <p className='foot' color=''>© 2023 Todo Hub, git.</p>
    </div>
    </div>
  )
}

export default LandingFooter