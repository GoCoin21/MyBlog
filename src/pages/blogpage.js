import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { selectUserInput,setBlogData } from "../features/userSlice";
import { Container } from "../components/Blog/styles/style";
import { BlogPage } from "../components";
import "../components/Blog/styles/blog.css";
export default function Blog(){
	const searchInput = useSelector(selectUserInput)
	const blog_url = ` https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=e582ef175a694a97af890e20e44bd3b7`
	const dispatch = useDispatch()
	const [blogs,setBlogs] = useState(true)

	const [loading,setLoading] = useState(true)

	useEffect(() => {
		axios.get(blog_url)
		.then((response) => {
			dispatch(setBlogData(response.data))
			setBlogs(response.data)
			setLoading(false)
		})
		.catch((error) => {
			console.log(error);
		});
	},[searchInput])
	return (
		<Container>
			<BlogPage.Header>Blogs</BlogPage.Header>
             {loading ? <h1>Loading...</h1> : ""}
			 <BlogPage.Blog>
				 {blogs?.articles?.map((blog) => (
					 <a className="blog" target="_blank" rel="noreferrer" href={blog_url}>
                          <img src={blog.urlToImage} alt="blog"/>
						  <div>
							  <h3 className="sourceName">
								  <span>{blog.author}</span>
								  <p>{blog.publishedAt}</p>
							  </h3>
							  <h1>{blog.title}</h1>
							  <p>{blog.description}</p>
						  </div>
					 </a>
				 ))}
				 {blogs?.totalArticles === 0 && (
					 <h1 className="no_blogs">
						 No blogs available 😞. Search else to read blogs on the greatest platform.
					 </h1>
				 )}
			 </BlogPage.Blog>
		</Container>
	)
}