import React, { useEffect, useMemo } from "react";
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

  const reversedPosts = useMemo(() => {
    return postsData.slice().reverse();
  }, [postsData]);

  useEffect(() => {
    console.log(storeState);
    if (!storeState.user.userInfo) {
      navigate("/login");
    }
    if (storeState.posts.postsData.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, navigate, storeState]);

  return !storeState.user.userInfo ? (
    <main>
      <LoadingSpinner />
    </main>
  ) : (
    <main>
      <div>
        {reversedPosts.length !== 0 &&
          reversedPosts.slice(0, 10).map((post) => {
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
