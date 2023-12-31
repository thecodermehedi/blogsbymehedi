import Blogs from "./components/Blogs";
import Bookmark from "./components/Bookmark";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {useState} from "react";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const addToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };
  const addReadingTime = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    removeFromBookmark(id);
  };

  const removeFromBookmark = (id) => {
    const remainingBookmarks = bookmarks.filter((blog) => blog.id !== id);
    setBookmarks(remainingBookmarks);
  };

  return (
    <>
      <div className="font-poppins min-h-screen mx-5 md:mx-10 lg:mx-52 py-5 text-gray-300">
        <div className="container ">
          <Navbar />
          <hr className="my-5 border-2 border-gray-700" />
          <main className="flex w-fit gap-5">
            <Blogs
              addToBookmark={addToBookmark}
              addReadingTime={addReadingTime}
            />
            <Bookmark bookmarks={bookmarks} readingTime={readingTime} />
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
