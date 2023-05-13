import React from 'react'
import { withRouter } from "react-router";
import Color from '../HOC/Color';
import logo from '../../assets/images/wallhaven-643375.png'

import { connect } from 'react-redux'
class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('./todo')
    //     }, 3000)
    // }

    handleDeleteUser = (user) => {
        console.log('>>> check user delete', user)
        this.props.deleteUserRedux(user)
    }
    handleCreateUser = () => {
        this.props.addUserRedux()
    }
    render() {
        console.log('check props', this.props.dataRedux)
        let listUsers = this.props.dataRedux
        return (
            <>
                <div>
                    Hello from hompage
                </div>
                <div>
                    <img width='600px' src={logo} />
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    <span onClick={() => this.handleDeleteUser(item)}> X</span>


                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add New</button>
                </div>


            </>

        )
    }
}
//HOC: higher order component

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home))
