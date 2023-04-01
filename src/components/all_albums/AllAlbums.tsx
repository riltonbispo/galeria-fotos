import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../api'

interface Album {
  id: number,
  title: string
}

const AlbumList = () => {

  const [albums, setAlbums] = useState<Album[]>([])

  useEffect(() =>{
    const fetchData = async () => {
      const result = await api.getAllAlbums()
      setAlbums(result)
    }
    fetchData()
  },[])

  return (
    <div>
      {albums.map((album) => (
        <div key={album.id}>
          <Link to={`/album/${album.id}`} >{album.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default AlbumList;