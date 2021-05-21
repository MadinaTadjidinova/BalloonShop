import { useEffect } from "react"
import { logout } from "../../store/action/auth";
import { useDispatch } from "react-redux";

export default function Logout({ history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    logout(dispatch);
    history.replace("/");
  }, [dispatch, history]);

  return null;
}