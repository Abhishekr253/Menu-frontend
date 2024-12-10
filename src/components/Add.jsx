import React from 'react'
import './styles.css'


function Add() {
  return (
    <div className='row'>
      
      <div className='col'>
        <h5><span  className='color1'>CONNECT WITH US</span></h5><br />
        <p className='p1'><i class="fa-solid fa-phone"></i>7826633637</p>
        <p className='p1'>info@deepnetsoft.com</p>


      </div>
      <div className='col'>
      <h5><span className='blue'>DEEP</span> <span className='white'>NET</span> SOFT</h5><br />
        <p className='p1'>Project for</p>
        <p className='p1' >The Company</p>
      </div>
      <div  className='col'>
      <h5 className='text-info'>FIND US</h5><br />
        <p className='p1'>First floor, Geo infopark,</p>
        <p className='p1'>Infopark EXPY, Kakkanad</p>
      </div>
    </div>
  )
}

export default Add