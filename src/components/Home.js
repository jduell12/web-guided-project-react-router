import React from 'react'
// We'll need React Router's own version of the History API
import { useHistory } from 'react-router-dom'

export default function Home() {
  // 👉 STEP 5 - Build a click handler that will imperatively
  // navigate us to <website base URL>/items-list
  const history = useHistory(); //react router replacement for the native JS history in the browser

  const routeToShop = () => {
    //handle navigation with code 
    //can't do history.pushState(null, null, '/') bc react components wouldn't notice the change
    history.push('/items-list');
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://source.unsplash.com/F6-U5fGAOik'
        alt=''
      />
      <button
        onClick={routeToShop}
        className='md-button shop-button'
      >
        Shop now!
      </button>
    </div>
  )
}
