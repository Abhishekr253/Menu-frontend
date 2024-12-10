import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
  return (
    
       <MDBFooter  bgColor='light' className='text-center text-lg-left'>
      <div className='text-center p-3 text-white' style={{ backgroundColor: 'black' }}>
        &copy; {new Date().getFullYear()} © 2024 Deepnetsoft Solutions. :{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
        All rights reserved.:
        </a>
      </div>
    </MDBFooter>
    
  )
}

export default Footer