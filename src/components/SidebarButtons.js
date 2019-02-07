import React from 'react';

class SidebarButtons extends React.Component { 
    constructor(props, context) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.setLoadAssets();
        // console.log(this.props.assets);
    }
    
    handleClick(id, event) {
        event.preventDefault();
        const selectedAsset = this.props.assets.filter(item => item.id === id);
        this.props.setPreviewAssets(selectedAsset);
    }
    
    render(){   
        return (
            <React.Fragment>
                {this.props.assets && this.props.assets.map(item => (
                <li key={item.id} onClick={(event) => this.handleClick(item.id, event)} className={`asset type-${item.type.replace(/ /g,"-").toLowerCase()}`}>
                    <h2>{item.name}</h2>
                    <p>
                        <span className="info">{item.duration} minutes</span>
                        <span className="info">{item.type}</span>
                    </p>
                </li>
                ))}
            </React.Fragment>
        )
    }
}

export default SidebarButtons;