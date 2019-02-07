import React from 'react';
import assets from '../assets';

class SidebarButtons extends React.Component { 
    constructor(props, context) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        // const reduxState = this.props.store.getState();
    }

    // componentDidMount(){
    //     const { store } = this.props;
    //     store.subscribe( () => {
    //         this.updateFromStore();
    //     });
    // }

    // updateFromStore(){
    //     const { store } = this.props;
    //     const reduxState = store.getState();
    //     this.props.setLoadAssets();
    // }
    
    handleClick(id, event) {
        event.preventDefault();
        // this.props.setReceiveId(id);
        const selectedAsset = assets.filter(item => item.id === id);
        this.props.setPreviewAssets(selectedAsset);
    }
    
    render(){
        return (
            <React.Fragment>
                {assets.map(item => (
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