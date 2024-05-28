import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <div className="container">
        <header className='header'>掲示板</header>
        <p>
          <Link to="/threads">
            スレッドを立てる
          </Link>
        </p>
      </div>
    </>
  )
}

export default Header
