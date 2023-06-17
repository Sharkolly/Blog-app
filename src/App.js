import React, { useState, useEffect } from "react";

import "./App.css";
// import Search from "./Search";
import Home from "./Home";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPaage from "./PostPaage";
import About from "./About";
import Missing from "./Missing";
import Footer from "./Footer";
import Header from "./Header";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  Switch,
  // useHistory
} from "react-router-dom";
import Axios from "./Axios";
import Receive from "./Receive";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vel quo in recusandae voluptatum",
      title: "First Post",
      dateTime: "Feb 02 2023 00:00:01",
    },
    {
      id: 2,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vel quo in recusandae voluptatum",
      title: "Second Post",
      dateTime: "Feb 02 2023 00:00:01",
    },
    {
      id: 3,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vel quo in recusandae voluptatum",
      title: "Third Post",
      dateTime: "Feb 02 2023 00:00:01",
    },
    {
      id: 4,
      body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate, vel quo in recusandae voluptatum",
      title: "Fourth Post",
      dateTime: "Feb 02 2023 00:00:01",
    },
  ]);
  // const history = useHistory();

  const addPost = (post) => {
    const save = [...posts, post];
    setPosts(save);
    // history.push("/");
  };
  const [search, setSearch] = useState([]);
  // const [searchResults, setSearchResults] = useState('');
  const [postBody, setPostBody] = useState('');
  const [filteredPosts , setFilteredPosts] = useState([]);

  useEffect(() => {
    const filteredSearch = posts.filter((post) => (post.title).toLowerCase().includes(postBody.toLowerCase()) || (post.body).toLowerCase().includes(postBody.toLowerCase()));
    console.log(filteredSearch);
    setSearch(filteredSearch.reverse());
    
  }, [postBody, posts]);

  const deleteBtn = (idParam) => {
    const deleteB = search.filter((search) => {
      return search.id !== idParam;
    })
    setSearch(deleteB)
    console.log('deleted!')
  }
  
  return (
    <Router>
      <div className="app">
        <Header />
        <Nav posts = {posts} setPosts={setPosts} postBody = {postBody} setPostBody = {setPostBody} />
        {/* <Home posts = {posts} /> */}
        {/* <Receive/> */}

        <Routes>
          <Route path="/" element={<Home filteredPosts={filteredPosts} setFilteredPosts={setFilteredPosts} posts={search} setSearch = {setSearch} search = {search} />}></Route>
        </Routes>
        <Routes>
          <Route path="/post/:id" element={<NewPost deleteBtn = {deleteBtn} search={search} posts={posts} />}   ></Route>
        </Routes>

        <Routes>
          <Route
            path="/postpage"
            element={<PostPaage addPost={addPost} posts={posts} />}
          ></Route>
        </Routes>

        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>

        <Routes>
          <Route path="*/" element={<Missing />}></Route>
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
