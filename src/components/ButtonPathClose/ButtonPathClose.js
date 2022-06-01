//created by Irina Shushkevych
import { ButtonClose } from "./ButtonClose.styled";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";

export default function ButtonPathClose() {
  const location = useLocation();
  const navigate = useNavigate();

  const onClose = () => {
    // const path = location.pathname.split('/')
    // path.length -= 1
    // console.log(location)
    // navigate(path.join('/'))
    navigate("/contacts");
  };

  return (
    <ButtonClose onClick={onClose}>
      <CloseIcon fontSize="large" />
    </ButtonClose>
  );
}
