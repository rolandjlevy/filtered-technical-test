import React from 'react';
import PreviewAsset from './PreviewAsset';

class AssetsHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            assetsPreviewed: [
                {
                    id: 11,
                    name: '10 Principles of Change Management',
                    type: 'Article',
                    duration: '0.11',
                    durationType: 'min',
                },
                {
                    id: 12,
                    name: 'Overview of change management phases',
                    type: 'Video',
                    duration: '0.06',
                }
            ]
        }
    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.assetsPreviewed.length > 0 &&
                    this.state.assetsPreviewed.map(item => {
                        return (
                            <PreviewAsset 
                                key={item.id}
                                id={item.id}
                                name={item.name} 
                                type={item.type} 
                                classNameType={item.type.replace(/ /g,"-").toLowerCase()}
                                duration={item.duration}
                            />
                        )
                    })
                }
            </React.Fragment>
        )
    }
}

export default AssetsHolder;