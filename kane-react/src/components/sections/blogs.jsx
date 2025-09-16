import React, { useEffect, useState } from "react";
import axios from 'axios';
import { RiBookReadLine } from '@remixicon/react';
import Title from '../ui/title';
import ZoomIn from '../animations/zoomIn';
import { Link, useLocation } from 'react-router-dom';

const Blogs = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();

    // Check if we're on the homepage
    const isHomepage = location.pathname === '/';

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://portfolio-cms-sand-eight.vercel.app/api/blog");
                setPosts(response.data.docs);
                setError(null);
            } catch (error) {
                console.log(error);
                setError("Failed to load blog posts");
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) {
        return (
            <section id="blog" className="blog-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <p>...loading</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="blog" className="blog-area">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <p>Error: {error}</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="blog" className="blog-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12">
                        <Title>
                            <p>blog</p>
                            <h2>Latest Blog</h2>
                        </Title>
                    </div>
                </div>
                <div className="row">
                    {posts.length === 0 ? (
                        <div className="col-12">
                            <p>No Blogs found</p>
                        </div>
                    ) : (
                        posts.map((post) => (
                            <Card
                                key={post.id}
                                date={new Date(post.createdAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: 'numeric'
                                })}
                                src={post.featuredImage?.cloudinary?.secure_url || post.featuredImage?.thumbnailURL || '/default-image.jpg'}
                                descripation={limitWords(post.description || extractTextFromContent(post.content), 40)}
                                title={post.title}
                                id={post.id}
                                slug={post.slug}
                            />
                        ))
                    )}
                </div>

                {/* Conditionally render the "View More" button only on homepage */}
                {isHomepage && (
                    <div className="blog-btn text-center mt-5 rounded">
                        <Link to="/blogs" className='theme-btn'>View More</Link>
                    </div>
                )}
            </div>
        </section>
    );
};

// Helper function to extract text from Lexical content
const extractTextFromContent = (content) => {
    if (!content || !content.root || !content.root.children) return '';

    let text = '';
    const extractTextFromNode = (node) => {
        if (node.text) {
            text += node.text + ' ';
        }
        if (node.children) {
            node.children.forEach(extractTextFromNode);
        }
    };

    content.root.children.forEach(extractTextFromNode);
    return text.trim();
};

// Helper function to limit text to a specific number of words
const limitWords = (text, wordLimit) => {
    if (!text) return '';

    const words = text.trim().split(/\s+/);
    if (words.length <= wordLimit) {
        return text;
    }

    return words.slice(0, wordLimit).join(' ') + '...';
};

const Card = ({ date, src, title, descripation, id, slug }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <ZoomIn id={id}>
                <div className="blog-item">
                    <div className="image">
                        <img src={src} alt={title} />
                    </div>
                    <div className="content">
                        <div className="blog-meta mt-15">
                            <a className="date" href="#">
                                <i className="far fa-calendar-alt"></i>{date}
                            </a>
                        </div>
                        <h5>
                            <Link to={`/blogs/${slug}`}>{title}</Link>
                        </h5>
                        <p>{descripation}</p>
                        <hr />
                        <Link to={`/blogs/${slug}`} className="theme-btn">
                            Read More <i><RiBookReadLine size={15} /></i>
                        </Link>
                    </div>
                </div>
            </ZoomIn>
        </div>
    );
};

export default Blogs;