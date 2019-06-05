import React, {Component} from 'react';
import Axios from 'axios';

export default class AddCourseComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
           subjectsList:[],
           course:{
               name:'',
               code:'',
               lectureInCharge:'',
               passMark:0,
               subjects:[]
           }
        }
    }

    componentDidMount() {

        Axios.get('http://localhost:3000/api/subjects' ).then((res)=>{

            this.setState({
                subjectsList: res.data
            })


        }).catch((err)=>{
             alert("Error "+err);
        });

    }

    addCourseDetails() {

        Axios.post('http://localhost:3000/api/course', this.state.course).then((res)=>{

            alert("Successfully added");

        }).catch((err)=>{
            alert("Error "+err);
        });


    }

    onChangeCourseName = (e) =>{

        this.setState({

            course:{
                name: e.target.value
            }

        });

    };

    onChangeCourseCode = (e) =>{

        this.setState({

            course:{
                code: e.target.value
            }

        });

    };

    onChangeLectureInCharge = (e) =>{

        this.setState({

            course:{
                lectureInCharge: e.target.value
            }

        });

    };

    onChangePassMark = (e) =>{

        this.setState({

            course:{
                passMark: e.target.value
            }

        });

    };



    render() {
        return(<div>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Course Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter Course Name" onChange={this.onChangeCourseName}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Course Code</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter Course Code" onChange={this.onChangeCourseCode}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Lecturer In Charge</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter Lecturer In Charge" onChange={this.onChangeLectureInCharge}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Pass Mark</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                           placeholder="Enter Pass Mark" onChange={this.onChangePassMark}/>
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="button" className="btn btn-primary" onClick={this.addCourseDetails}>Submit</button>
            </form>
        </div>);
    }
}