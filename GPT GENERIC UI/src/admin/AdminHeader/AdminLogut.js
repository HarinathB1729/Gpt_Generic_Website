import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function AdminLogout() {
  const navigate = useNavigate();
  
  //DESTROY SESSION HERE
  useEffect(() => {
    localStorage.clear();
    navigate("/auth");
  }, []);

  return;
}

export default AdminLogout;

