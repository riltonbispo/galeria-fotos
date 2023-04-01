import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api";

import ButtonBack from "../buttuns/ButtonBack";

interface Photo {
  title: string,
  url: string
}

const PhotoDetails = () => {
  const { idPhoto } = useParams<{ idPhoto: string }>();
  const [Photo, setPhoto] = useState<Photo>()

  useEffect(()=>{
    const fetchData = async () => {
      if (idPhoto !== undefined){
        const result = await api.getPhotoDetails(idPhoto)
        setPhoto(result)
      }
    }
    fetchData()
  },[])

  return (
    <div>
      <ButtonBack />
      <h3>{Photo?.title}</h3>
      <img src={Photo?.url} alt="" />
    </div>
  );
};

export default PhotoDetails;