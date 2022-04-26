import React from 'react'
import './Nav.css'
import {ImHome3} from 'react-icons/im'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {IoMdContacts} from 'react-icons/io'
import {BsFillPersonFill} from 'react-icons/bs'
import {MdLibraryBooks} from 'react-icons/md'
import {useState} from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href ='#home' classname={activeNav=== '#home' ? 'active' : ''}><ImHome3 /></a>
      <a href ='#about' onClick={() => setActiveNav('#about')} classname={activeNav=== '#about' ? 'active' : ''}><BsFillPersonFill /></a>
      <a href ='#skills' onClick={() => setActiveNav('#skills')} classname={activeNav=== '#skills' ? 'active' : ''}><MdLibraryBooks /></a>
      <a href ='#projects' onClick={() => setActiveNav('#projects')} classname={activeNav=== '#projects' ? 'active' : ''}><AiOutlineFundProjectionScreen /></a>
      <a href ='#contacts' onClick={() => setActiveNav('#contacts')} classname={activeNav=== '#contacts' ? 'active' : ''}><IoMdContacts /></a>
    </nav>
  )
}

export default Nav