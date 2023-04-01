import AlbumList from '../components/all_albums/AllAlbums';
import Album from '../components/album_details/AlbumDetails';
import Photo from '../components/photo_details/PhotoDetails';

import { useRoutes } from 'react-router-dom';


const AllPages = () => {
  const routes = useRoutes([
    { path: '/', element: <AlbumList />},
    { path: '/album/:albumId', element: <Album /> },
    { path: '/photo/:photoId', element: <Photo /> }
  ])
  
  return routes
};

export default AllPages;