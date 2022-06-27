import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../../../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import axios from 'axios';
const Container = () => {
  const [state, setState] = React.useState({ videos: [], selectedVideo: null });
  React.useEffect(() => {
    onTermSubmit('');
  }, []);

  const onTermSubmit = async (term) => {
    console.log('term from serche', term);

    const response = await fetch(
      `https://still-cliffs-92252.herokuapp.com/https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyBQgcodgMw4TUSYB5sFmaoe7nFBYVmZREw&q=${term}`
    );
    const data = await response.json();

    console.log(data);
    setState({
      videos: data.items,
      selectedVideo: data.items[0],
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
