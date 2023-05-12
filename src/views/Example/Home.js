import React from 'react'
import { withRouter } from "react-router";
import Color from '../HOC/Color';
import logo from '../../assets/images/wallhaven-643375.png'
class Home extends React.Component {

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('./todo')
    //     }, 3000)
    // }
    render() {
        console.log('check props', this.props)
        return (
            <>
                <div>
                    Hello from hompage
                </div>
                <div>
                    <img width='600px' src={logo} />
                </div>
            </>

        )
    }
}
//HOC: higher order component
export default Color(Home)
