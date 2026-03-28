import React, { useState, useRef } from 'react'
import './Project.css'
import project1 from '../../assets/mobilever.png'
import project2 from '../../assets/landing.png'
import project3 from '../../assets/webver.png'

const projectData = [
    {
        title: 'Sign in/Sign up Page',
        description: 'Mobile app authentication interface',
        category: 'Mobile Design',
    },
    {
        title: 'Landing Page',
        description: 'Modern healthcare landing page design',
        category: 'Web Design',
    },
    {
        title: 'Web Design',
        description: 'Clean and modern web application',
        category: 'UI/UX Design',
    },
];

// Image mapping for each page
const pageImages = [
    [project1, project2, project3], // Page 1
    [project3, project2, project1], // Page 2
    [project2, project3, project1], // Page 3
    [project1, project3, project2], // Page 4
];

const totalPages = pageImages.length;

const ProjectCard = ({ title, description, category, imageSrc, alt }) => (
    <div className="project-card">
        <div className="project-content">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <p className="project-category">{category}</p>
        </div>
        <div className="project-image">
            <img src={imageSrc} alt={alt} />
        </div>
    </div>
);

const Project = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const touchStartX = useRef(0);

    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        handleSwipe(touchEndX);
    };

    const handleSwipe = (touchEndX) => {
        const threshold = 50;
        if (touchStartX.current - touchEndX > threshold) {
            // Swiped left
            setCurrentPage(currentPage < totalPages ? currentPage + 1 : 1);
        } else if (touchEndX - touchStartX.current > threshold) {
            // Swiped right
            setCurrentPage(currentPage > 1 ? currentPage - 1 : totalPages);
        }
    };

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="projects-header">
                    <h2 className="section-title">Latest <span className="gradient-text">Projects</span></h2>
                    <div className="gradient-line"></div>
                    <p>Projects that made big waves. Here are some of my recent projects</p>
                </div>

                <div
                    className="projects-container"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {pageImages.map((images, pageIndex) => (
                        <div
                            key={pageIndex}
                            className={`projects-grid ${currentPage === pageIndex + 1 ? 'active-page' : ''}`}
                            data-page={pageIndex + 1}
                        >
                            {projectData.map((project, projectIndex) => (
                                <ProjectCard
                                    key={projectIndex}
                                    {...project}
                                    imageSrc={images[projectIndex]}
                                    alt={`Project ${projectIndex + 1}`}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                <div className="pagination-dots">
                    {[...Array(totalPages)].map((_, index) => (
                        <div
                            key={index}
                            className={`dot ${currentPage === index + 1 ? 'active' : ''}`}
                            data-page={index + 1}
                            onClick={() => setCurrentPage(index + 1)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Project