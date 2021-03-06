import React from 'react';
import '../App.css';
import SidebarContainer from '../containers/SidebarContainer';
import AssetsHolder from './AssetsHolder';

export default () => (
  <div className="wrapper">

    <div className="asset-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 asset-summary-left">
            <span>4 assets</span>
          </div>
          <div className="col-6 asset-summary-right">
            2x<span className="info">Articles</span>
            1x<span className="info">Documents</span>
            1x<span className="info">Video</span>
          </div>
        </div>
      </div>
    </div>
    <div className="container asset-builder">
      <div className="row">
        <div className="col-4">
          <ul className="asset-picker">

            <SidebarContainer />
            
          </ul>
        </div>
        <div className="col-8">
          <h2>Learning Assets Preview</h2>
          <ul className="asset-preview">

            <AssetsHolder />

          </ul>
        </div>
      </div>
    </div>
  </div>
);
