import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


const View = () => {

  let { id } = useParams()

  const [users, setUsers] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  })
  const { name, username, email, phone, website } = users

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3002/users/${id}`)
    setUsers(result.data)

  }

  return (
    <div className='container'>
      <div className='py-4'>
        {/* <Link className='btn btn-primary' to='/'>Back To Home</Link> */}
        <div className='py-4'>
          <div className='display-4'>User Id:{id}</div>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <ul className="list-group ">
              <li className="list-group-item ">Name : {name}</li>
              <li className="list-group-item">Username : {username}</li>
              <li className="list-group-item">Email : {email}</li>
              <li className="list-group-item">Phone : {phone}</li>
              <li className="list-group-item">Website : {website}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default View