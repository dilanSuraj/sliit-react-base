import React, {Component} from 'react';
import Axios from 'axios';

export default class ViewCourseComponent extends Component{

    constructor(props){
        super(props);
        this.state={
            subjects:[],
            courseId: ''
        }

        this.showTotalAmt = this.showTotalAmt.bind(this);
    }

    componentDidMount() {

        console.log(this.props);

        Axios.get("http://localhost:3000/api/courses/"+this.props.match.params.id).then(res=>{

              this.setState({

                  courseId: this.props.match.params.id

              });
              var subjectArr = [];
              for(let course of res.data){
                  if(course != null){
                      for(let subject of course.subjects){
                          subjectArr.push(subject.name);
                      }
                  }
              }
              this.setState({
                 subjects:subjectArr
              });
        }).catch(err=>{
            console.log(err);
        })
    }

    subjectList(){
        return this.state.subjects.map(function (currentSubject, i) {
            return <li>{currentSubject}</li>
        })
    }

    componentDidUpdate() {

        Axios.get("http://localhost:3000/api/courses/"+this.props.match.params.id).then(res=>{

            var subjectArr = [];
            for(course of res.data){
                if(course != null){
                    for(subject of course.subjects){
                        subjectArr.push(subject.name);
                    }
                }
            }
            this.setState({
                subjects:subjectArr
            });
        }).catch(err=>{
            console.log(err);
        })

    }

    showTotalAmt(){

        Axios.get("http://localhost:8080/courses/coursefee/"+this.state.courseId).then(res=>{
            alert("Total Course Fee "+ res.data);
        }).catch(err=>{
            alert("Error "+ err);
        })


    };

    render() {
        return(<div>
            <ul>{this.subjectList()}</ul>
            <button onClick={this.showTotalAmt}>View Total Amount</button>
        </div>);
    }
}