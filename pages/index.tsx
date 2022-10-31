import type { NextPage } from "next";
import Head from "next/head";
import Button from "../components/ui/button/button";
import styles from "../styles/home.module.scss";
import Image from "next/image";
import logo from "../public/images/Logo.png";
import cube from "../public/images/cube.png";
import triangle from "../public/images/triangle.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Archify</title>
        <meta
          name="description"
          content="The intelligent diagramming application to create model-based architectures"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.logo}>
        <Image src={logo} alt="Archify" />
        <h4>Archify</h4>
      </div>

      <main className={styles.main}>
        <div className={styles.description}>
          <h1 className="title">Where architecture becomes real</h1>
          <p>
            Archify is an intelligent diagramming application that allows you to
            design and deploy an architecture effortlessly.
          </p>
        </div>

        <div className={styles.login}>
          <h2 className="title">Sign up</h2>
          <form className={styles.login__form}>
            <input
              className={styles.login__input}
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className={styles.login__input}
              type="email"
              name="email"
              placeholder="Email"
            />
            <input
              className={styles.login__input}
              type="password"
              name="password"
              placeholder="Password"
            />
            <input
              className={styles.login__input}
              type="password"
              name="password"
              placeholder="Confirm password"
            />
            <Button link="/projects/1">Join</Button>
            <p className={styles.login__footer}>
              Already have an account? <span>Log in</span>
            </p>
          </form>
        </div>

        <div className={styles.main__cube}>
          <Image src={cube} alt="" />
        </div>
        <div className={styles.main__triangle}>
          <Image src={triangle} alt="" />
        </div>
      </main>
    </div>
  );
};

export default Home;
