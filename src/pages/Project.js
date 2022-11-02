import React from 'react'
import { useLocation } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './project.module.css';
import Caro1 from '../components/Caro1';
import Caro2 from '../components/Caro2';
import Sugg1 from '../components/Sugg1';
import Sugg2 from '../components/Sugg2';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};


function Project(props) {

    const location = useLocation()
    const { itemTitle, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, no, head, cdate, loc, area, category, scope } = location.state


    return (
        <div>
            project: {itemTitle}

            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                // removeArrowOnDeviceType={["tablet", "mobile"]}
                // deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                height='10rem'
            >

                <div className={styles.pimg} >
                    <img className={styles.img1} src={img1} />
                </div>
                <div className={styles.pimg} >
                    <img className={styles.img1} src={img2} />
                </div>
                <div className={styles.pimg} >
                    <img className={styles.img1} src={img3} />
                </div>
                <div className={styles.pimg} >
                    <img className={styles.img1} src={img4} />
                </div>
                <div className={styles.pimg} >
                    <img className={styles.img1} src={img5} />
                </div>
                <div className={styles.pimg} >
                    <img className={styles.img1} src={img6} />
                </div>
                <div className={styles.pimg} >
                    <img className={styles.img1} src={img7} />
                </div>
                <div className={styles.pimg} >
                    <img className={styles.img1} src={img8} />
                </div>
                <div className={styles.pimg} >
                    <img className={styles.img1} src={img9} />
                </div>
                <div className={styles.pimg} >
                    <img className={styles.img1} src={img10} />
                </div>
                <div className={styles.pimg} >
                    <img className={styles.img1} src={img11} />
                </div>
                <div className={styles.pimg} >
                    <img className={styles.img1} src={img12} />
                </div>
                <div className={styles.pimg} >
                    <img className={styles.img1} src={img13} />
                </div>
                <div className={styles.pimg} >
                    <img className={styles.img1} src={img14} />
                </div>
                <div className={styles.pimg} >
                    <img className={styles.img1} src={img15} />
                </div>
                <div className={styles.pimg} >
                    <img className={styles.img1} src={img16} />
                </div>


            </Carousel >

            <br />

            <div className={styles.pdetail}>
                <span className={styles.phead} >
                    {head}
                </span>
                <br />
                <span className={styles.cdate}>
                    Date of Completion: <b>{cdate}</b>
                </span>
                <br />
                <span className={styles.cdate}>
                    Locality: <b>{loc}</b>
                </span>
                <br />
                <span className={styles.cdate}>
                    Area: <b>{area}</b>
                </span>
                <br />
                <span className={styles.cdate}>
                    Category: <b>{category}</b>
                </span>
                <br />
                <span className={styles.cdate}>
                    Scope of work: <b>{scope}</b>
                </span>


            </div>


            {
                `${no}` == 1 || `${no}` == 2 || `${no}` == 3 ? <Sugg2 /> : <Sugg1 />
            }

            console.log('${no}');
        </div>
    )
};


export default Project;