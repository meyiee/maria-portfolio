import React, { useState, useRef, useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'
import './Project.css'

// ── THUMBNAIL IMPORTS (card face — arrow baked in) ────────────────────────
import emsThumb    from '../../assets/ems-f.png'
import b5Thumb     from '../../assets/b5-f.png'
import apptThumb   from '../../assets/appointment-f.png'
import confThumb   from '../../assets/confess-f.png'
import crocThumb   from '../../assets/crochet-f.png'
import visThumb    from '../../assets/visitor-f.png'

// ── LIGHTBOX IMAGE IMPORTS ────────────────────────────────────────────────
import emsImg0   from '../../assets/ems.png'
import emsImg1   from '../../assets/ems1.png'
import emsImg2   from '../../assets/ems2.png'
import emsImg3   from '../../assets/ems3.png'

import b5Img0    from '../../assets/b5.png'
import b5Img1    from '../../assets/b51.png'
import b5Img2    from '../../assets/b52.png'
import b5Img3    from '../../assets/b53.png'

import apptImg0  from '../../assets/appointment.png'
import apptImg1  from '../../assets/appointment1.png'
import apptImg2  from '../../assets/appointment2.png'
import apptImg3  from '../../assets/appointment3.png'

import confImg0  from '../../assets/confess.png'
import confImg1  from '../../assets/confess1.png'
import confImg2  from '../../assets/confess2.png'
import confImg3  from '../../assets/confess3.png'

import crocImg0  from '../../assets/crochet.png'
import crocImg1  from '../../assets/crochet1.png'
import crocImg2  from '../../assets/crochet2.png'
import crocImg3  from '../../assets/crochet3.png'

import visImg0   from '../../assets/visitor.png'
import visImg1   from '../../assets/visitor1.png'
import visImg2   from '../../assets/visitor2.png'
import visImg3   from '../../assets/visitor3.png'

// ── PROJECT DATA ──────────────────────────────────────────────────────────
const projectData = [
    {
        title: 'Event Management System',
        description: 'Full-stack capstone for Diabetes Philippines — events, payments & QR attendance.',
        category: 'Capstone Project',
        thumbnail: emsThumb,
        images: [
            { src: emsImg0, caption: 'A bold landing page that invites delegates to register for Diabetes Philippines events — clear CTAs and professional branding set the stage for a seamless experience.' },
            { src: emsImg1, caption: 'The event creation dashboard empowers admins to spin up fully-detailed events — titles, dates, venues, chapters, banners, and PDFs — all in one structured form.' },
            { src: emsImg2, caption: 'A live event management board that tracks ongoing, upcoming, and completed events at a glance — complete with delegate counts and real-time status badges.' },
            { src: emsImg3, caption: 'Integrated PayMongo checkout lets delegates pay securely via GCash, Maya, credit card, or bank transfer — with a full registration summary before confirming.' },
        ],
    },
    {
        title: 'Big Five Personality Test',
        description: 'Laravel-based OJT assessment tool that maps applicants to the Big Five personality traits.',
        category: 'OJT Project',
        thumbnail: b5Thumb,
        images: [
            { src: b5Img0, caption: 'A clean, professional login portal for Magellan Solutions — secure access that sets the right tone for a high-stakes HR assessment platform.' },
            { src: b5Img1, caption: 'The assessment management dashboard lets HR managers build and refine personality questionnaires per trait — with full CRUD control and question count tracking.' },
            { src: b5Img2, caption: 'A scoring interpretation engine that defines what Low, Moderate, and High trait levels mean — giving HR teams consistent, data-backed hiring decisions.' },
            { src: b5Img3, caption: 'A configurable Likert scale matrix that standardizes how applicants respond — from Strongly Disagree to Strongly Agree — ensuring fair and measurable results.' },
        ],
    },
    {
        title: 'Appointment System',
        description: 'OJT project with separate patient and doctor portals for booking and managing appointments.',
        category: 'OJT Project',
        thumbnail: apptThumb,
        images: [
            { src: apptImg0, caption: 'A polished landing page for Diabetes Philippines appointment system — welcoming patients with a clear headline and a prominent call-to-action to book online.' },
            { src: apptImg1, caption: 'A dual-purpose login screen with role selection — patients and doctors enter the same secure gateway but land in their own tailored portals.' },
            { src: apptImg2, caption: 'The doctor\'s portal surfaces a full patient encounter form — vitals, lab results, consultation history, and treatment plans — all in one powerful view.' },
            { src: apptImg3, caption: 'A smart booking interface that lets patients pick a date from an interactive calendar and choose from available time slots — making scheduling effortless.' },
        ],
    },
    {
        title: 'Confess Connect Heal',
        description: 'Anonymous confession platform built with HTML, CSS & Firebase — a safe space to share and be heard.',
        category: 'School Project',
        thumbnail: confThumb,
        images: [
            { src: confImg0, caption: 'A welcoming login screen with a warm illustration — "You\'re Safe Here" sets the tone for a platform designed around honesty, empathy, and emotional safety.' },
            { src: confImg1, caption: 'A striking homepage that leads with "Confess. Connect. Heal." — bold typography and minimal design let the message speak louder than the interface.' },
            { src: confImg2, caption: 'A real-time confession feed where users share anonymously — posts show engagement through likes and comments, building a genuine community of support.' },
            { src: confImg3, caption: 'A full confession detail view that gives readers space to read, reflect, and engage — thoughtful layout that respects the weight of what\'s being shared.' },
        ],
    },
    {
        title: 'Yarnista — Crochet Blog',
        description: 'A personal crochet blog covering tips, patterns, and how-to guides — created as a school project.',
        category: 'School Project',
        thumbnail: crocThumb,
        images: [
            { src: crocImg0, caption: 'A warm and inviting homepage showcasing the latest crochet posts — beautiful yarn photography and clear navigation make it instantly appealing to crafting enthusiasts.' },
            { src: crocImg1, caption: 'The blog section dives deep into topics like mindfulness, stress relief, and the surprising mental health benefits of crocheting — informative and beautifully laid out.' },
            { src: crocImg2, caption: 'A how-to collection page that positions Yarnista as your go-to education destination — step-by-step guides for magic loops, flat circles, and more.' },
            { src: crocImg3, caption: 'A curated free pattern library complete with category filters — from crochet flowers to tulip stitches — helping readers find exactly what they want to make next.' },
        ],
    },
    {
        title: 'Visitor Log System',
        description: 'OJT project for Magellan Solutions — logs visitor details and captures photos in real time.',
        category: 'OJT Project',
        thumbnail: visThumb,
        images: [
            { src: visImg0, caption: 'A bold full-screen login page set against the actual Magellan Solutions office — immersive branding that makes first impressions count for every user.' },
            { src: visImg1, caption: 'A visitor registration form with live camera capture built right in — log ID, name, type, and contact details while snapping a real-time photo in one step.' },
            { src: visImg2, caption: 'A complete visitor log sheet with paginated records, searchable entries, and full audit columns — time in, time out, status, and actions all in one organized table.' },
            { src: visImg3, caption: 'A detailed visitor profile view that surfaces personal info, visit history, and system metadata — giving security staff everything they need at a glance.' },
        ],
    },
]

// ── PAGINATION ────────────────────────────────────────────────────────────
const PROJECTS_PER_PAGE = 3
const pages = []
for (let i = 0; i < projectData.length; i += PROJECTS_PER_PAGE) {
    pages.push(projectData.slice(i, i + PROJECTS_PER_PAGE))
}
const totalPages = pages.length

// ── PROJECT CARD — original UI untouched ─────────────────────────────────
const ProjectCard = ({ title, description, category, thumbnail, onClick }) => (
    <div className="project-card" onClick={onClick} style={{ cursor: 'pointer' }}>
        <div className="project-image">
            <img src={thumbnail} alt={title} />
        </div>
        <div className="project-content">
            <p className="project-category">{category}</p>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
        </div>
    </div>
)

// ── LIGHTBOX — portaled to document.body for true viewport centering ───────
const Lightbox = ({ project, onClose }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const touchStartX = useRef(0)

    const prev = useCallback(() =>
        setActiveIndex(i => (i > 0 ? i - 1 : project.images.length - 1)), [project])
    const next = useCallback(() =>
        setActiveIndex(i => (i < project.images.length - 1 ? i + 1 : 0)), [project])

    // Keyboard navigation
    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape')     onClose()
            if (e.key === 'ArrowLeft')  prev()
            if (e.key === 'ArrowRight') next()
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [onClose, prev, next])

    // Lock scroll + push navbar behind overlay
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        document.body.classList.add('modal-open')
        return () => {
            document.body.style.overflow = ''
            document.body.classList.remove('modal-open')
        }
    }, [])

    const handleTouchStart = (e) => { touchStartX.current = e.changedTouches[0].screenX }
    const handleTouchEnd   = (e) => {
        const diff = touchStartX.current - e.changedTouches[0].screenX
        if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    }

    const currentImage = project.images[activeIndex]

    // ── Portal: mounts directly on document.body ─────────────────────────
    // This escapes any stacking context (backdrop-filter, transform, etc.)
    // caused by parent components, guaranteeing true viewport centering
    // on every device and screen size.
    return ReactDOM.createPortal(
        <div
            className="lightbox-overlay"
            onClick={onClose}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} lightbox`}
        >
            <div className="lightbox-panel" onClick={e => e.stopPropagation()}>

                {/* Header */}
                <div className="lightbox-header">
                    <div className="lightbox-header-info">
                        <span className="lightbox-category">{project.category}</span>
                        <h3 className="lightbox-title">{project.title}</h3>
                    </div>
                    <button className="lightbox-close" onClick={onClose} aria-label="Close lightbox">
                        &#x2715;
                    </button>
                </div>

                {/* Image */}
                <div className="lightbox-image-wrap">
                    <button className="lightbox-arrow lightbox-arrow--left" onClick={prev} aria-label="Previous image">
                        &#8592;
                    </button>
                    <div className="lightbox-img-container">
                        <img
                            key={activeIndex}
                            src={currentImage.src}
                            alt={`${project.title} screenshot ${activeIndex + 1}`}
                            className="lightbox-img"
                        />
                    </div>
                    <button className="lightbox-arrow lightbox-arrow--right" onClick={next} aria-label="Next image">
                        &#8594;
                    </button>
                </div>

                {/* Caption */}
                <div className="lightbox-caption">
                    <span className="lightbox-counter">{activeIndex + 1} / {project.images.length}</span>
                    <p className="lightbox-caption-text">{currentImage.caption}</p>
                </div>

                {/* Thumbnails */}
                <div className="lightbox-thumbs">
                    {project.images.map((img, idx) => (
                        <button
                            key={idx}
                            className={`lightbox-thumb ${idx === activeIndex ? 'lightbox-thumb--active' : ''}`}
                            onClick={() => setActiveIndex(idx)}
                            aria-label={`View image ${idx + 1}`}
                        >
                            <img src={img.src} alt={`Thumbnail ${idx + 1}`} />
                        </button>
                    ))}
                </div>

            </div>
        </div>,
        document.body  // ← renders outside all stacking contexts
    )
}

// ── MAIN COMPONENT ────────────────────────────────────────────────────────
const Project = () => {
    const [currentPage, setCurrentPage]       = useState(1)
    const [activeLightbox, setActiveLightbox] = useState(null)
    const touchStartX = useRef(0)

    const handleTouchStart = (e) => { touchStartX.current = e.changedTouches[0].screenX }
    const handleTouchEnd   = (e) => {
        if (activeLightbox) return
        const diff = touchStartX.current - e.changedTouches[0].screenX
        if (Math.abs(diff) > 50) {
            if (diff > 0) setCurrentPage(p => p < totalPages ? p + 1 : 1)
            else          setCurrentPage(p => p > 1 ? p - 1 : totalPages)
        }
    }

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
                    {pages.map((pageProjects, pageIndex) => (
                        <div
                            key={pageIndex}
                            className={`projects-grid ${currentPage === pageIndex + 1 ? 'active-page' : ''}`}
                        >
                            {pageProjects.map((project, projectIndex) => (
                                <ProjectCard
                                    key={projectIndex}
                                    {...project}
                                    onClick={() => setActiveLightbox(project)}
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
                            onClick={() => setCurrentPage(index + 1)}
                        />
                    ))}
                </div>
            </div>

            {/* Lightbox is portaled — lives outside this section in the DOM */}
            {activeLightbox && (
                <Lightbox
                    project={activeLightbox}
                    onClose={() => setActiveLightbox(null)}
                />
            )}
        </section>
    )
}

export default Project