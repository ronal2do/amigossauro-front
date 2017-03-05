import React from 'react';

class Item extends React.Component {
  render() {
    const { video } = this.props;

    return (
      <div style={{cursor: 'pointer'}} onClick={() => this.props.onClick(video)}>
        <img
    			src={'//img.youtube.com/vi/' + video.id + '/mqdefault.jpg'}
    			alt={ video.id }
    			width="100%"
    		/>
      </div>

    );
  }

}

export default (Item);
