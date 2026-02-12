import React from 'react'
import './footer.css'

const Footer = () => {
  let footerStyle = {
      //  position: "absolute", 
      //  top: "90vh" ,
      //  position: "relative",
        // bottom: 0,
        // width: "100%",
       marginBottom: '-25px',
       minHeight:'20vh'
    
    }
  return (
    <footer className='bg-dark text-light text-center py-3' style={footerStyle}>
     <p className='' style={{marginTop: '40px'}}>
        Copyright &copy; TodoList.com
     </p>
    </footer>
  )
}

export default Footer
