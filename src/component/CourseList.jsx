import React, {Component} from 'react';
import Axios from 'axios';
import {NavLink} from "react-router-dom";

let Coursetableviw = props =>{

    return(
        <tr>
            <td>{props.course.name}</td>
            <td>{props.course.passMark}</td>
            <td>{props.course.lectureInCharge}</td>
            <td><NavLink to={"/courses/"+props.course.code}>View Subjects</NavLink></td>
        </tr>
    );

};

export default class CourseListComponent extends Component{

    constructor(props){
        super(props);

        this.state={
            courses :[]
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:3000/api/courses').then((res)=>{
              this.setState({
                  courses: res.data.message
              })
        }).catch((err)=>{
              console.log("Error occurred "+err);
        })

    }


    componentDidUpdate() {


        Axios.get('http://localhost:3000/api/courses').then((res)=>{
            this.setState({
                courses: res.data.message
            })
        }).catch((err)=>{
            console.log("Error occurred "+err);
        })

    }


    viewCourseDetails(){

        return this.state.courses.map(function (currentCourse, i) {
            return <Coursetableviw course={currentCourse} key={i}/>
        })

    }


    render() {
        return(
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Pass Mark</th>
                    <th scope="col">Lecture In Charge</th>
                    <th scope="col">View Subjects</th>

                </tr>
                </thead>
                <tbody>{this.viewCourseDetails()}</tbody></table>
        );
    }

}