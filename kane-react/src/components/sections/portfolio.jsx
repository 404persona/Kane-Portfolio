import React, { useState } from 'react';
import { RiArrowRightUpLine } from '@remixicon/react';
import Title from '../ui/title';
import { projectsData } from '../../utlits/fackData/projectsData';
import Lightbox from '../ui/lightbox';
import BrowserMockup from '../BrowserMockup';

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
};

const Portfolio = () => {
  const [majorCategory, setMajorCategory] = useState('All');
  const [animationClass, setAnimationClass] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const handleCategoryClick = (item) => {
    setMajorCategory(item);
    const randomAnimation = getRandomAnimation();
    setAnimationClass(randomAnimation);
  };

  // ------ filter unique major categories
  const filteredCategory = ['All'];
  projectsData.forEach(({ majorCategory }) => {
    if (!filteredCategory.includes(majorCategory)) {
      filteredCategory.push(majorCategory);
    }
  });
  // ------ filter unique major categories

  const filteredProjects =
    majorCategory === 'All'
      ? projectsData
      : projectsData.filter((project) => project.majorCategory === majorCategory);

  return (
    <section id="portfolio" className="projects-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <Title>
              <p>Works</p>
              <h2>Creative Portfolio</h2>
            </Title>
          </div>
        </div>

        {/* ✅ Nav uses majorCategory now */}
        <ul className="project-filter filter-btns-one justify-content-left pb-15 wow fadeInUp delay-0-2s">
          {filteredCategory.map((item, id) => (
            <li
              key={id}
              onClick={() => handleCategoryClick(item)}
              className={item === majorCategory ? 'current' : ''}
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="row project-masonry-active">
          {filteredProjects.map(({ id, src, title, url, category }) => (
            <Card
              key={id}
              category={category} // 👈 still show detailed category
              title={title}
              src={src}
              url={url}
              animationClass={animationClass}
              openLightbox={openLightbox}
            />
          ))}
        </div>
      </div>

      <Lightbox selectedImage={selectedImage} onClose={closeLightbox} />
    </section>
  );
};

export default Portfolio;

// ---- Card Component
const Card = ({ category, title, src, url, animationClass, openLightbox }) => {
  return (
    <div className={`col-lg-4 col-md-6 item branding ${animationClass}`}>
      <div className="project-item style-two wow fadeInUp delay-0-2s">
        <div className="project-image">
          {/* ✅ Wrap image with BrowserMockup */}
          <BrowserMockup url={url} img={src} />

          {/* Button overlay */}
          <div
            onClick={() => openLightbox(src)}
            className="details-btn work-popup"
          >
            <i>
              <RiArrowRightUpLine />
            </i>
          </div>
        </div>
        <div className="project-content">
          <span className="sub-title">{category}</span> {/* 👈 still specific */}
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
};
