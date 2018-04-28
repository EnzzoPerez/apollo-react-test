import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

import Course from "../components/course";

class Courses extends Component {
    render() {
        return (
            <Query query={
                gql`{
                    allCourses{
                      id
                      title
                      author
                      description
                    }
                  }`
            }>
            {({data, error, loading})=>{
                console.log('yay', data);
                if (error) {return <p>Error al traer datos</p>}
                if (loading) {return <p>Loading...</p>}
                
                return (
                    data.allCourses.map(currentCourse=>{
                        return(
                            <Course course={currentCourse}/>
                        )
                    })
                )
            }}

            </Query>
        );
    }
}

export default Courses;