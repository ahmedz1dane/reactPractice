import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

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
      <div className="w-full h-screen text-center">
        {" "}
        {/* Assuming you want the image to take the full height of the screen */}
        <div className="flex flex-wrap h-full">
          {" "}
          {/* Ensure the parent div takes the full height */}
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src="https://unsplash.com/photos/pUAM5hPaCRI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mzh8fHJlbmRlciUyMGJsb2d8ZW58MHwwfHx8MTcwNDg5NzE1OXww&force=true&w=2400"
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
        height: "100vh",
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
