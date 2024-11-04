import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'

const LoginPage = () => {
  const {userName} = useContext(AppContext)
  return (
    <div>
        <div>
            <h1>Your details are requide in this LoginPage</h1>
            <p>in times of </p>
            <p>Name</p>
            <p>PhoneNumber</p>
            <p>Address</p>
            <p>Email</p>
            <a href="https://www.w3schools.com"> this is a link</a>
            <h3>world best Frontend Developer and Forest
               trading is {userName} </h3>
        </div>
    </div>
  )
}

export default LoginPage