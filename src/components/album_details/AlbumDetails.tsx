import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import api from "../../api";

interface AlbumDetails {
  id: number;
  title: string;
}

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string
}

const Album = () => {
  const { albumId } = useParams<{ albumId: string }>();
  const navigate = useNavigate()

  const [albumDetails, setAlbumDeails] = useState<AlbumDetails>();
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (albumId !== undefined) {
        const albumResult = await api.getAlbumDetails(albumId);
        setAlbumDeails(albumResult);

        const photosResult = await api.getAllPhotos(albumId);
        setPhotos(photosResult);
      }
    };
    fetchData();
  }, []);

  const handleBackButton = () =>{
    navigate(-1)
  }

  return (
    <div>
      <h1>{albumDetails?.title}</h1>
      <button onClick={handleBackButton} >voltar</button>
      {photos.map((photo) => (
        <Link to={`photo/${photo.id}`} >
          <h5>{photo.title}</h5>
          <img src={photo.thumbnailUrl} alt="" />
        </Link>
      ))}
    </div>
  );
};

export default Album;
