import CreatePost from "../components/CreatePost";

const Post = () => {
  return (
    <div className="w-full bg-[#f0f2f5] min-h-screen">
      <div className=" xl:px-[250px] px-4 md:px-10 mx-auto py-4 md:py-8">
        <CreatePost />
      </div>
    </div>
  );
};

export default Post;
