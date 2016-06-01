import React from 'react'
import './category.styl'

export default () => {
  var array = [1,2,3,4,5,6,7,8,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  var array2 = array.map(f => <Category />)
  return (<div className='container'>
    { array2 }
  </div>
  )
}


var Category = () => {
  return (
    <div className='category'>
      <div className='overlay'></div>
      <div className='details'>
        <h1>The Caffeinator</h1>
        <p><i>For the one that drinks the most coffee in a day</i></p>
      </div>
    </div>
  )
}
