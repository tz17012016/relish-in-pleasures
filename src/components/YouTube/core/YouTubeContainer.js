import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../../../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import axios from 'axios';
const Container = () => {
  const [state, setState] = React.useState({ videos: [], selectedVideo: null });
  React.useEffect(() => {
    onTermSubmit('hy');
  }, []);

  const onTermSubmit = async (term) => {
    console.log('term from serche', term);
    // const response = await axios.get({
    //   url: 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=buildings&type=video&key=AIzaSyBdL0azc2GRkWAxPfYNvq03zYp2kSGIg7M',
    // });
    const response = await fetch(
      `https://still-cliffs-92252.herokuapp.com/https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${term}&type=video&key=AIzaSyBdL0azc2GRkWAxPfYNvq03zYp2kSGIg7M`
    );
    const data = await response.json();
    // const response = await youtube.get('/search', {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //   },
    //   params: {
    //     q: term,
    //   },
    // });
    console.log(data);
    setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  const onVideoSelect = (video) => {
    setState({ selectedVideo: video });
  };

  return (
    <div className='ui container'>
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={state.selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList onVideoSelect={onVideoSelect} videos={state.videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
