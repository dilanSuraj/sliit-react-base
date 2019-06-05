import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from '../src/component/Home';
import CourseList from '../src/component/CourseList';
import ViewCourse from '../src/component/ViewCourse';
import AddCourse from '../src/component/AddCourse';
import NavBar from '../src/component/Nav';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    componentDidMount() {
        fetch('/api/messages', {method: 'GET'})
            .then(res => res.json())
            .then(jsonRes => {
                this.setState({message: jsonRes.message});
            })
            .catch(err => {
                this.setState({message: 'An error occurred'});
            });
    }

    render() {
        return (
            <Router>
            <div>
                <center> <h1 className="align-content-center">{this.state.message}</h1></center>
                <NavBar className="mt-3"/>
                <Route path="/" exact component={Home}/>
                <Route path="/courses"  exact component={CourseList}/>
                <Route path="/courses/:id"  exact component={ViewCourse}/>
                <Route path="/add"  exact component={AddCourse}/>

            </div>

            </Router>);
    }
}
