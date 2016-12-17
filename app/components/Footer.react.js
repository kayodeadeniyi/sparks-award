import React from 'react'

import './footer.styl'

export default () => {
  return(
    <div className='footer'>
      <div>Copyright © {new Date().getFullYear()}</div>
        <span className='made-by'>
          Made with <i className="fa fa-heart" aria-hidden="true"></i> by
          <span className='title'>
            <img className='rotate' src='http://res.cloudinary.com/kaybaba/image/upload/v1481858974/sparks_zea9t3.png' />
            Sparks
          </span>
           @ Andela
       </span>
    </div>
  )
}
