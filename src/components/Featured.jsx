import React from 'react'

export const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img src="https://media.gq-magazine.co.uk/photos/64bea21f8651bb7da9ad38c9/master/pass/Dublin_HP.jpg" alt='' className='featuredImg' />
        <div className='featuredTitles'>
            <h1>Dublin</h1>
            <h1>500 properties</h1>
        </div>
      </div>
      <div className='featuredItem'>
        <img src="https://a.cdn-hotels.com/gdcs/production153/d1371/e6c1f55e-51ac-41d5-8c63-2d0c63faf59e.jpg" alt='' className='featuredImg' />
        <div className='featuredTitles'>
            <h1>London</h1>
            <h1>550 properties</h1>
        </div>
      </div>
      <div className='featuredItem'>
        <img src="https://destinationwellknown.com/wp-content/uploads/2022/10/berlin-city.jpg" alt='' className='featuredImg' />
        <div className='featuredTitles'>
            <h1>Berlin</h1>
            <h1>600 properties</h1>
        </div>
      </div>
    </div>
  )
}
