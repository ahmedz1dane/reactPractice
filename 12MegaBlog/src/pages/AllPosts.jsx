import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);

  appwriteService.getPosts([]).then((posts) => {
    // DOUBT: why we are passing  an empty array as
    //        parameter

    // what I understood
    //      :when we check the config we can see that
    //       we are passing some default value to
    //       the parameter named queries
    //       here we are passsing an empty array
    //       as the parameter , therefore the
    //       value of query become an empty array
    //       therefore we will be getting all the posts
    //       instead of the filtered ones...

    if (posts) {
      setPosts(posts.documents);
      // DOUBT : why
    }
  });
  return (
    <div
      className="w-full py-8"
      style={{
        marginTop: "50px",
      }}
    >
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
              {/* DOUBT: why post is
                        given as the prop ? */}

              {/* ANS: cause we are passing
                    the entire post as the 
                    prop it will be containing
                    $id , featuredImage and
                    title that is specified in the 
                    PostCard Component*/}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
