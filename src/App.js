import React, { Suspense } from "react";
import { data } from "./data";
import LazyLoad from "react-lazyload";

const Loading = () => (
  <div className="post loading">
    <h5>Loading...</h5>
  </div>
);

const Post = ({ post }) => {
  const { id, title, body } = post;

  return (
    <div className="post">
      <LazyLoad once={true} placeholder={<Loading />}>
        <div className="post-img">
          <img src={`https://picsum.photos/id/${id}/200/200`} alt="...." />
        </div>
      </LazyLoad>
      <div className="post-body">
        <h4>{title}</h4>
        <p>{body}</p>
      </div>
    </div>
  );
};

const App = () => (
  <div className="App" style={{ width: "500px", height: "400px" }}>
    {data.map((post) => (
      <Post post={post} />
    ))}
  </div>
);

export default App;
