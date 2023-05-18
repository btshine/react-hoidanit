import React from 'react'
import axios from 'axios'
import './ListUser.scss'
import { withRouter } from 'react-router-dom'
class ListUser extends React.Component {
    state = {
        ListUsers: []
    }
    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(res => {
        //         console.log('>>>check res: ', res.data.data)
        //     })

        let res = await axios.get('https://reqres.in/api/users?page=2')
        //let res = await axios.get('https://localhost:7269/api/Employees')
        this.setState({
            ListUsers: res && res.data && res.data.data ? res.data.data : []
            //ListUsers: res.data
        })
    }

    handleDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
        //this.props.history.push(`/user/${user.employeeId}`)
    }
    render() {
        let { ListUsers } = this.state
        return (
            <div className='list-user-container'>
                <div className='title'>
                    Fetch all list users
                </div>
                <div className='list-user-content'>
                    {ListUsers && ListUsers.length > 0 &&
                        ListUsers.map((item, index) => {
                            return (
                                <div className='child' key={item.id}
                                    onClick={() => this.handleDetailUser(item)}>
                                    {index + 1} - {item.first_name} {item.last_name}
                                    {/* {index + 1} - {item.empployeeName}- {item.address} - {item.city} - {item.city} */}
                                </div>
                            )
                        })

                    }

                </div>
            </div>
        )
    }
}

export default withRouter(ListUser)
