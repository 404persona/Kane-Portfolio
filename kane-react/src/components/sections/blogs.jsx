import React from 'react'
import { RiBookReadLine } from '@remixicon/react'
import Title from '../ui/title'

import ZoomIn from '../animations/zoomIn'
import { blogsData } from '../../utlits/fackData/blogsData'
import { Link } from 'react-router-dom'


const Blogs = () => {
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
                    {blogsData.map(({ date, descripation, id, src, title, slug }) => <Card key={id} date={date} src={src} descripation={descripation} title={title} id={id} slug={slug} />)}
                </div>
                <div className="blog-btn text-center mt-5 rounded">
                    <Link className='theme-btn'>View More</Link>
                </div>
            </div>
        </section>
    )
}

export default Blogs


const Card = ({ date, src, title, descripation, id, slug }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <ZoomIn id={id}>
                <div className="blog-item">
                    <div className="image">
                        <img src={src} alt="Blog" />
                    </div>
                    <div className="content">
                        <div className="blog-meta mt-15">
                            <a className="date" href="#"><i className="far fa-calendar-alt"></i>{date}</a>
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
    )
}