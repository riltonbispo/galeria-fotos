import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import api from "../../api";
import ButtonBack from "../buttuns/ButtonBack";
import "./album-datails.css";

interface AlbumDetails {
  id: number;
  title: string;
}

interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

const Album = () => {
  const { albumId } = useParams<{ albumId: string }>();

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

  return (
    <div>
      <h1 className="album-title">{albumDetails?.title}</h1>
      <ButtonBack />
      <div className="all-card">
        {photos.map((photo) => (
          <Link to={`photo/${photo.id}`}>
            <div className="card-photo">
              <img src={photo.thumbnailUrl} alt="" />
              <h5>{photo.title}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Album;
