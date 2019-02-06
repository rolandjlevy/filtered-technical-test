import React from 'react';

class SidebarButton extends React.Component { 
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this); 
    }
    
    handleChange(id, event) {
        console.log(id, event);
    }

    render() {
        return (
            <React.Fragment>
                <li onClick={event => this.handleChange(this.props.id, event)} className={`asset type-${this.props.classNameType}`}>
                    <h2>{this.props.name}</h2>
                    <p>
                        <span className="info">{this.props.duration} minutes</span>
                        <span className="info">{this.props.type}</span>
                    </p>
                </li>
            </React.Fragment>
        )
    }
};

export default SidebarButton;