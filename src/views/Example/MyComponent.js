import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";
class MyComponent extends React.Component {

    // state = {
    //     name: 'tin',
    //     channel: 'React js'
    // }

    // handleOnChangeName = (event) => {
    //     this.setState(
    //         {
    //             name: event.target.value
    //         }
    //     )
    // }

    // handleClickButton = () => {

    //     alert('Click me')
    // }
    state = {
        arrJobs: [
            {
                id: 'Job1',
                title: 'developer',
                salary: '500'
            },
            {
                id: 'Job2',
                title: 'tester',
                salary: '100'
            },
            {
                id: 'Job3',
                title: 'project manager',
                salary: '1000'
            }
        ]
    }



    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        // this.setState({
        //     arrJobs: [...this.state.arrJobs, job]
        // })

        let currentJobs = this.state.arrJobs;
        currentJobs.push(job)
        this.setState({
            arrJobs: currentJobs
        })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })


        //delete by index
        // let currentJobs = this.state.arrJobs
        // currentJobs.splice(index, 1)
        // this.setState({
        //     arrJobs: currentJobs
        // })
    }


    render() {
        console.log(' call render', this.state)
        return (

            <>
                <AddComponent
                    addNewJob={this.addNewJob}

                />


                <ChildComponent
                    a={this.state.arrJobs}
                    deleteJob={this.deleteJob}
                />
            </>

            // <div className="abc">
            //     <div className="1">
            //         <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />
            //         my name is {this.state.name}
            //     </div>
            //     <div className="2">
            //         my youtube channel : {this.state.channel}
            //     </div>

            //     <div className="3">
            //         <button onClick={() => { this.handleClickButton() }}>Click me</button>
            //     </div>
            // </div>

        )
    }
}
export default MyComponent;