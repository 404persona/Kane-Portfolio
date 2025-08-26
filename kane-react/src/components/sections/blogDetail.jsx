import React from "react";
import { useParams } from "react-router-dom";
import { blogsData } from "../../utlits/fackData/blogsData";
import { MDXProvider } from "@mdx-js/react";
import "../../assets/css/blog.css"
import Content from "../../utlits/Content";
const BlogDetails = () => {
    const { slug } = useParams();
    const blog = blogsData.find((item) => item.slug === slug);

    if (!blog) {
        return <h2 className="text-center my-5">Blog not found</h2>;
    }

    return (
        <section className="blog-details">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="blog-content">
                            <img src={blog.src} alt={blog.title} className="w-100 mb-4 rounded" />
                            <h1 className="mb-3">{blog.title}</h1>
                            <p className="text-muted">
                                <i className="far fa-calendar-alt"></i> {blog.date}
                            </p>
                            <hr />
                            <p>{blog.descripation}</p>
                            <div className="mt-4">
                                <MDXProvider>
                                    <Content mdxComponent={blog.content} />
                                </MDXProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
