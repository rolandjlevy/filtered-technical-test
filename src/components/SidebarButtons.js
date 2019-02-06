import React from 'react';

function SidebarButtons({ setReceiveId, setLoadAssets, assets }) {  
    setLoadAssets();
    function handleClick(id, event) {
        event.preventDefault();
        setReceiveId(id);
    }
    return (
        <React.Fragment>
            {assets.map(item => (
            <li key={item.id} onClick={(event) => handleClick(item.id, event)} className={`asset type-${item.type.replace(/ /g,"-").toLowerCase()}`}>
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

export default SidebarButtons;