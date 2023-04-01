import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api'
import './all-albums.css'

interface Album {
  id: number,
  title: string
}

interface Photo {
  albumId: number,
  thumbnailUrl: string
}

const AllAlbums = () => {

  const [albums, setAlbums] = useState<Album[]>([])
  const [photos, setPhotos] = useState<Photo[]>([])

  useEffect(() =>{
    const fetchData = async () => {
      const resultAlbums = await api.getAllAlbums()
      const resultPhotos = await api.getPhotos()
      setAlbums(resultAlbums)
      setPhotos(resultPhotos)
    }
    fetchData()
  },[])

  return (
    <div>
      {albums.map((album, index) => (
        <div key={album.id}>
          <Link to={`/album/${album.id}`} >
            <div className='card'>
              {album.title}
              <span>{index+1}</span>
              <img src={photos[index].thumbnailUrl} alt="" />
            </div>
          </Link>
        </div>
      ))} 
    </div>
  );
};

export default AllAlbums;