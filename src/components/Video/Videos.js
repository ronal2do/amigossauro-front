import React from 'react';

import OwlCarousel from 'react-owl-carousel';

import Item from './Item';
import Video from './Video';

// const AUTOPLAY = "?autoplay=1";

export default class Videos extends React.Component {
  state = {
      video: '',
      videos: [],
      isLoading: true,
  };

  async componentDidMount() {
     try {
       await this.getVideos();

       const { videos } = this.state;

       this.setState({
         video: videos[0],
       });

     } catch (e) {
       console.warn('Err ', e);
     }

   }

  onChangeVideo = (video) => {
  	this.setState({
      video
    })
  }


  getVideos = async () => {
    this.setState({
      isLoading: true,
    });

    try {
      const videos = [
        {'id': '_7qCxuBylK4' },
        {'id': '_yoR5hE8y4Y' },
        {'id': 'uzAilH_UT1A' },
        {'id': 'bgVz5fJeI40' },
        {'id': 'hsfA4kTdltE' },
        {'id': 'WIksma_8Ka4' },
        {'id': 'c_yomf6U35A' },
        {'id': 'VVS2tqpXiZ0' },
        {'id': 'VadjvlvBDxE' },
      ]

      this.setState({
        videos,
      });
    } catch(err) {
      console.log('Videos err:', err);
    }

    this.setState({
      isLoading: false,
    });
  };

  render() {
    const { titulo, children } = this.props;
    const { video, videos } = this.state;

    return (
	    <div className="col-sm-12 text-center Azul">
	    	<h2>{titulo}</h2>
	     	   {children}
			  <Video video={video} />

        <OwlCarousel
          slideSpeed={300}
          items={4}
          navigation
          navigationText={['<', '>']}
          style={{padding:'35px 25px 0px'}}
          autoPlay
          >
            {videos.map((video, key) => {
              return (
                <div className="Itens" key={video.id}>
     			       	 	<Item
                      key={video.id}
   			            	nome="Hora de dormir"
   							      video={video}
                      onClick={this.onChangeVideo}
     			       	 	/>
   		       	</div>)
            })}
        </OwlCarousel>
  			{/* </div> */}
	    </div>
    );
  }
}
