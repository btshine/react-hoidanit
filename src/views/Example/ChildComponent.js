import React from "react";

class ChildComponent extends React.Component {


    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        this.props.deleteJob(job)
    }
    render() {
        console.log(' check props', this.props)
        let { a } = this.props
        let { showJobs } = this.state
        let check = showJobs ? 'showJobs : true' : 'showJobs : false'
        console.log('check conditional: ', check)

        return (
            <>
                {!showJobs ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                a.map((item, index) => {
                                    return (
                                        <div key={item.id}> {item.title} - {item.salary}
                                            <></> <span onClick={() => this.handleOnClickDelete(item)}> X</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                    </>
                }
            </>

        )
    }
}

// const ChildComponent = (props) => {

//     let { a } = props
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     a.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}> {item.title} - {item.salary}$</div>
//                             )
//                         }

//                     })
//                 }
//             </div>
//         </>
//     )
// }
export default ChildComponent;