import React from 'react';
import './Detail.css';

class Detail extends React.Component {
    componentDidMount() {
        const {location,history} = this.props;
        if (location.state === undefined){
            history.push('/');
        }
    }

    render() {
        const {location} = this.props;
        if (location.state) {
            return (
                <div className="detail">
                    <h2>Title : {location.state.title}</h2>
                    <h4>Year : {location.state.year}</h4>
                    <h4>Rating : {location.state.rating}</h4>
                    <h4>Summary</h4>
                    <p>
                        {location.state.summary}
                    </p>
                </div>
            );
        } else {
            return null;
        }
        
    }
}

export default Detail;