import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <ul className='navbar'>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/blog">Post</Link>
        </li>
        <li>
          <Link href="/contect">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar