import * as React from 'react'
import fetch from 'isomorphic-fetch'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      users: []
    }

    this.fetchUsers()
  }
  render () {
    return (
      <div>
        <div className='container'>
          <h1>This is an awesome application !</h1>
          <ul>
            {this.state.users.map((user) => {
              return (
                <li key={user.id}>
                  {user.firstName} {user.lastName}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }

  fetchUsers () {
    fetch('/api/person')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('Bad response from server')
        }

        return response.json()
      })
      .then((users) => {
        this.setState({
          users: users
        })
      })
  }
}
