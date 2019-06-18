import React, { Component } from 'react';
import UploadFirebase from '../../components/uploadFirebase/UploadFirebase';

class ViewFeedback extends Component {
  render() {
    return (
      <div style={{ paddingLeft: '20%', paddingTop: '10%' }}>
        <UploadFirebase />
      </div>
    );
  }
}
export default ViewFeedback;
