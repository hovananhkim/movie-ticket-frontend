import { useNavigate } from "react-router-dom";

function NavigateTo(path) {
  const navigate = useNavigate();
  if (path) {
    navigate(path);
  }
}
export default NavigateTo;
