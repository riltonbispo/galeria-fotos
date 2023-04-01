import AllAlbums from '../components/all_albums/AllAlbums';
import AlbumDetails from '../components/album_details/AlbumDetails';
import { useRoutes } from 'react-router-dom';
import PhotoDetails from '../components/photo_details/PhotoDetails';


const AllPages = () => {
  const routes = useRoutes([
    { path: '/', element: <AllAlbums />},
    { path: '/album/:albumId', element: <AlbumDetails /> },
    { path: 'album/:idAlbum/photo/:idPhoto', element: <PhotoDetails /> }
  ])
  
  return routes
};

export default AllPages;