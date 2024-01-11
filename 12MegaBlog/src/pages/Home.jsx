import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
import bg from "../img/1.png";

function Home() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.auth.userData);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
        // DOUBT: what is post.documents ?
      }
    });
  }, []);

  if (posts.length === 0 || userData === null) {
    return (
      <div
        className="w-full h-screen text-center"
        style={{
          height: "95vh",
        }}
      >
        {" "}
        {/* Assuming you want the image to take the full height of the screen */}
        <div className="flex flex-wrap h-full">
          {" "}
          {/* Ensure the parent div takes the full height */}
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Placeholder"
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className="w-full py-8"
      style={{
        marginTop: "50px",
      }}
    >
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) =>
            post.userid === userData.$id ? (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ) : null
          )}
        </div>
      </Container>
    </div>
  );
}

export default Home;
