import React from 'react';

class Asset extends React.Component {
    render() {
        return (
            <React.Fragment>
                <li className={`asset type-${this.props.classNameType}`}>
                    <h2>{this.props.name}</h2>
                    <p>
                        <span className="info">{this.props.duration} minutes</span>
                        <span className="info">{this.props.type}</span>
                    </p>
                    <button className="remove-asset">x</button>
                </li>
            </React.Fragment>
        )
    }
}

export default Asset;