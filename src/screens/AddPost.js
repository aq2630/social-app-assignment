import React, { useEffect } from "react";
import AddPostForm from "../components/AddPostForm";
import LoadingSpinner from "../components/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddPost = ({ history }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeState = useSelector((state) => state);

  useEffect(() => {
    console.log(storeState);
    if (!storeState.user.userInfo) {
      navigate("/login");
    }
  }, [dispatch, navigate, storeState]);

  return !storeState.user.userInfo ? (
    <main>
      <LoadingSpinner />
    </main>
  ) : (
    <div className="loginWrapper">
      <AddPostForm />
    </div>
  );
};

export default AddPost;
