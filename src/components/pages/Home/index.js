// Import Modules
import React, { useEffect } from 'react'

const Home = ({
  home,
  getUsers
}) => {
  useEffect(() => {
    getUsers()
  }, [getUsers])
  console.log(home)
  return (
    <div className='home'>
      {
        home.users && (
          <div className='home-container'>
            <table>
              <thead>
                <tr>
                  <th>Mail</th>
                  <th>Fisrt Name</th>
                  <th>Last Name</th>
                  <th>Avatar</th>
                </tr>
              </thead>
              <tbody>
                {
                  home.users.map(user => (
                    <tr key={user.id}>
                      <th>{user.email}</th>
                      <th>{user.first_name}</th>
                      <th>{user.last_name}</th>
                      <th>
                        <img src={user.avatar} alt={user.name} />
                      </th>
                    </tr>
                  )
                  )
                }
              </tbody>
            </table>
          </div>
        )
      }
    </div>
  )
}

export default Home
