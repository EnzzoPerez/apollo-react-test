import React, { Component } from 'react';

class Course extends Component {
    render() {
        const {id, title, author, description} = this.props.course
        return (
            <div key={id} className="card" style={{'width': '100%', 'marginTop': '10px'}}>
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">by {author}</h6>
                <p className="card-text">{description}</p>
                </div>
            </div>
        );
    }
}

export default Course;