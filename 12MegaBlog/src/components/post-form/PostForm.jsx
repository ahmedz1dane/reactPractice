import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        // 1. DOUBT:wheter these defaultValue and
        //       and title are keywords or not ?

        //       why . is used after the question mark?

        // what I understand :
        // defaultValues is keyword and others
        // are the name of the different inputBox
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    // if post is already there then we need to
    // update that post
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;
      // 2 DOUBT: what upload file will be returning ?
      // 3 DOUBT : what is the difference between feaatured
      //         image and image[0]

      if (file) {
        appwriteService.deleteFile(post.featuredimage);
      }

      const dbpost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredimage: file ? file.$id : undefined,
      });

      if (dbpost) {
        navigate(`/post/${dbpost.$id}`);
      }
    }

    // 4 DOUBT: find the use of $id that is used above

    // 5 DOUBT: why need to upload into image and then
    //        to post , why cant we do it directly ?
    else {
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        // 6 DOUBT : from where does we got  this file.$id and what is it ?

        data.featuredimage = fileId;
        const dbPost = await appwriteService.createPost({
          ...data,
          userid: userData.$id,
          // 7 DOUBT : what is the $id that is specified above
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  // usage of useCallBack
  // --------------------

  // by using the useCallback in the following , we are
  // actually increasing the perfomance of our code
  // by using useCallback we are actually memorizing the
  // particular result of this function and we doesnt run
  // this each renders and this function will be only runned
  // when any of  the dependency changes

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
      // here in this case 'g' means all the occurences
      // are replaced instead of just the first occurence
    }

    return "";
  }, []);

  // 8 DOUBT: what is happening here ?
  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
    // 9 DOUBT : why call back function is used in the return
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />
        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredimage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
