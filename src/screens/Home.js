import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import SinglePost from "../components/SinglePost";
import { logoutUser } from "../store/slices/user";
import { fetchPosts } from "../store/slices/posts";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const storeState = useSelector((state) => state);
  const { postsData } = storeState.posts;

  useEffect(() => {
    if (!storeState.user.userInfo) {
      navigate("/login");
    }
  }, [navigate, storeState]);

  useEffect(() => {
    if (postsData === null) {
      dispatch(fetchPosts());
    }
  }, [dispatch, postsData]);

  return !storeState.user.userInfo ? (
    <main>
      <LoadingSpinner />
    </main>
  ) : (
    <main>
      <div>
        {postsData.length !== 0 &&
          postsData.slice(0, 10).map((post) => {
            return <SinglePost key={post.id} postData={post} />;
          })}
        <div className="buttonsWrapper">
          <Button
            variant="primary"
            onClick={() => {
              navigate("/addpost");
            }}
          >
            Add Post
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(logoutUser());
              navigate("/login");
            }}
          >
            Log out
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
