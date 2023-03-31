import AlbumList from '../components/albumlist/AlbumList';
import Album from '../components/album/Album';
import Photo from '../components/photo/Photo';

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