import { AiOutlineSearch } from "react-icons/ai";
const BlogFeed = () => {
  return (
    <div>
      {/* wrapper */}
      <div>
        {/* search */}
        <div>
          <form>
            <input type="text" placeholder="Search" />
            <AiOutlineSearch />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogFeed;
