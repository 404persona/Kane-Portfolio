import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../../assets/css/blog.css";

const BlogDetails = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogPost = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://portfolio-cms-sand-eight.vercel.app/api/blog?where[slug][equals]=${slug}`);

                if (response.data.docs.length === 0) {
                    setError('Blog not found');
                    return;
                }

                setBlog(response.data.docs[0]);
                setError(null);
            } catch (err) {
                console.error('Error fetching blog post:', err);
                setError('Failed to load blog post');
            } finally {
                setLoading(false);
            }
        };

        if (slug) {
            fetchBlogPost();
        }
    }, [slug]);

    if (loading) {
        return <h2 className="text-center my-5">Loading...</h2>;
    }

    if (error) {
        return <h2 className="text-center my-5">{error}</h2>;
    }

    if (!blog) {
        return <h2 className="text-center my-5">Blog not found</h2>;
    }

    return (
        <section className="blog-details">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="blog-content">
                            {/* Featured Image */}
                            {blog.featuredImage?.cloudinary?.secure_url && (
                                <img
                                    src={blog.featuredImage.cloudinary.secure_url}
                                    alt={blog.featuredImage.alt || blog.title}
                                    className="w-100 mb-4 rounded"
                                />
                            )}

                            {/* Blog Title */}
                            <h1 className="mb-3">{blog.title}</h1>

                            {/* Date */}
                            <p className="text-muted">
                                <i className="far fa-calendar-alt"></i>{" "}
                                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </p>

                            <hr />

                            {/* Description */}
                            <p>{blog.description}</p>

                            {/* Main Content */}
                            <div className="mt-4">
                                {renderLexicalContent(blog.content)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Helper function to render Lexical content (replacing MDX)
const renderLexicalContent = (content) => {
    if (!content || !content.root || !content.root.children) return null;

    return content.root.children.map((node, index) => {
        switch (node.type) {
            case 'paragraph':
                return (
                    <p key={index} className="mb-3">
                        {node.children?.map((child, childIndex) => {
                            if (child.type === 'text') {
                                // Handle basic text formatting
                                let textElement = child.text;
                                if (child.format & 1) textElement = <strong key={childIndex}>{textElement}</strong>;
                                if (child.format & 2) textElement = <em key={childIndex}>{textElement}</em>;
                                if (child.format & 4) textElement = <u key={childIndex}>{textElement}</u>;
                                return textElement;
                            }
                            return null;
                        })}
                    </p>
                );

            case 'heading':
                const HeadingTag = `h${node.tag?.replace('h', '') || '2'}`;
                const headingClass = `mb-3 ${node.tag === 'h2' ? 'mt-5' : node.tag === 'h3' ? 'mt-4' : 'mt-3'}`;

                return React.createElement(
                    HeadingTag,
                    {
                        key: index,
                        className: headingClass
                    },
                    node.children?.map((child, childIndex) => {
                        if (child.type === 'text') return child.text;
                        return null;
                    }).join('')
                );

            case 'list':
                const ListTag = node.listType === 'bullet' ? 'ul' : 'ol';
                return (
                    <ListTag key={index} className="mb-3">
                        {node.children?.map((listItem, itemIndex) => (
                            <li key={itemIndex}>
                                {listItem.children?.map((child, childIndex) => {
                                    if (child.type === 'text') return child.text;
                                    return null;
                                })}
                            </li>
                        ))}
                    </ListTag>
                );

            default:
                return null;
        }
    });
};

export default BlogDetails;