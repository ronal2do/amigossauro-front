import React from 'react';

export default class Video extends React.Component {
  render() {
    const { video } = this.props;

    return (
	      <div className="text-center">
		       	<div className="embed-responsive embed-responsive-16by9">
				    <iframe
				    	className="embed-responsive-item"
				    	src={'//www.youtube.com/embed/' + video.id}
				    ></iframe>
				</div>
	      </div>
    );
  }
}
