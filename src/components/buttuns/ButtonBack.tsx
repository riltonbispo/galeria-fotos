import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate()

  const handleBackButton = () =>{
    navigate(-1)
  }

  return (
    <div>
      <button onClick={handleBackButton}>voltar</button>
    </div>
  );
};

export default ButtonBack;