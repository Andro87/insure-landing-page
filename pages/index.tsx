import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { useState } from "react";
import Button from "../components/button";
import Detail from "../components/detail";
import Logo from "../svg/logo.svg";
import Hamburger from "../svg/icon-hamburger.svg";
import Close from "../svg/icon-close.svg";
import Snappy from "../svg/icon-snappy-process.svg";
import Price from "../svg/icon-affordable-prices.svg";
import People from "../svg/icon-people-first.svg";
import Facebook from "../svg/icon-facebook.svg";
import Twitter from "../svg/icon-twitter.svg";
import Pintarest from "../svg/icon-pinterest.svg";
import Instagram from "../svg/icon-instagram.svg";

export default function Home() {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.main_container}>
            <Head>
                <title>Frontend Mentor | Insure landing page</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/images/favicon-32x32.png" />
            </Head>
            <header className={styles.header}>
                <Logo />
                <nav
                    className={`${styles.navigation} ${
                        open ? styles.navigation_mobile : null
                    }	`}
                >
                    <a href="#">HOW WE WORK</a>
                    <a href="#">BLOG</a>
                    <a href="#">ACCOUNT</a>

                    <Button title="VIEW PLANS" size="bigger" />
                </nav>
                <button
                    type="button"
                    title="button"
                    className={styles.btn_menu}
                    onClick={() => setOpen(!open)}
                >
                    {!open ? <Hamburger /> : <Close />}
                </button>
            </header>

            <main className={styles.main}>
                <div className={styles.background_container}></div>
                <div className={styles.main_wrap}>
                    <picture className={styles.main_img}>
                        <source
                            srcSet="/images/image-intro-desktop.jpg"
                            media="(min-width:600px)"
                        />
                        <img src="/images/image-intro-mobile.jpg" alt="" />
                    </picture>
                    <div className={styles.main_info}>
                        <h1> Humanizing your insurance.</h1>
                        <p>
                            Get your life insurance coverage easier and faster.
                            We blend our expertise and technology to help you
                            find the plan that’s right for you. Ensure you and
                            your loved ones are protected.
                        </p>
                        <Button title="VIEW PLANS" />
                    </div>
                </div>
            </main>
            <section aria-label="details" className={styles.section_details}>
                <h2>We’re different</h2>
                <div className={styles.container_details}>
                    <Detail
                        icon={<Snappy />}
                        header=" Snappy Process"
                        paragraph="Our application process can be completed in minutes, not hours. Don’t get 
                   stuck filling in tedious forms."
                    />

                    <Detail
                        icon={<Price />}
                        header=" Affordable Prices"
                        paragraph="We don’t want you worrying about high monthly costs. Our prices may be low, 
                        but we still offer the best coverage possible."
                    />
                    <Detail
                        icon={<People />}
                        header=" People First"
                        paragraph="Our plans aren’t full of conditions and clauses to prevent payouts. We make 
                    sure you’re covered when you need it."
                    />
                </div>
            </section>
            <section className={styles.section_more} aria-label="how we work">
                <div className={styles.container_more}>
                    <h3>Find out more about how we work</h3>
                    <Button title="HOW WE WORK" />
                </div>
            </section>
            <footer className={styles.footer}>
                <div className={styles.footer_container}>
                    <div className={styles.icons_wrap}>
                        <Logo />
                        <div className={styles.social_wrap}>
                            <Facebook />
                            <Twitter />
                            <Pintarest />
                            <Instagram />
                        </div>
                        <hr className={styles.hr_line} />
                    </div>
                    <div className={styles.container_link}>
                        <div className={styles.link_box}>
                            <p>Our company</p>

                            <a href="#">How we work</a>
                            <a href="#"> Why Insure?</a>
                            <a href="#">View plans</a>
                            <a href="#"> Reviews</a>
                        </div>

                        <div className={styles.link_box}>
                            <p> Help me</p>

                            <a href="#">FAQ</a>
                            <a href="#"> Terms of use</a>
                            <a href="#">Privacy policy</a>
                            <a href="#"> Cookies</a>
                        </div>

                        <div className={styles.link_box}>
                            <p> Contact</p>

                            <a href="#"> Sales</a>
                            <a href="#"> Support</a>
                            <a href="#"> Live chat</a>
                        </div>
                        <div className={styles.link_box}>
                            <p> Others</p>

                            <a href="#"> Careers</a>
                            <a href="#"> Press</a>
                            <a href="#">Licenses</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}