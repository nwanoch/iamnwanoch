import Head from "next/head";
import Particles from "react-particles-js";
import Articles from "../components/Home/Articles";
import Hero from "../components/Home/Hero";
import HeroContent from "../components/Home/HeroContent";
import Projects from "../components/Home/Projects";
import Header from "../components/navbar/Nav";
import React, { useRef } from "react";
import { scroller } from "react-scroll";
import { Box } from "@chakra-ui/layout";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@nwanoch"
  );

  const data = await res.json();

  return {
    props: {
      posts: data.items,
    },
  };
};

// get props from client side

export default function Home({ posts }) {
  const validPosts = posts.filter((post) => {
    return post.content !== "";
  });

  const recentPosts = validPosts.slice(0, 6);

  return (
    <>
      <Head>
        <title>
          Wenoch | Emmanuel Nwanochie, Software Engineer, on a mission to create
          a change.{" "}
        </title>{" "}
        <meta
          name="description"
          content="Personal website of Nwanochie Emmanuel, a software developer from nigeria, exploring the power of the web"
        />
        <link rel="icon" href="/fav.png" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Nwanochie, Emmanuel, Nwanochie Emmanuel, software developer, wenotchm nwanoch, big nwanoch, nwanochie"
        />
        <meta name="author" content="Nwanochie Emmanuel" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>{" "}
      </Head>{" "}
      <Box className="home"> </Box> <Header />
      <Hero>
        <HeroContent />
      </Hero>{" "}
      <Projects />
      <Articles articles={recentPosts} />{" "}
    </>
  );
}
