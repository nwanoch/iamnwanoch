import Head from "next/head";
import Particles from "react-particles-js";
import Articles from "../components/Home/Articles";
import Hero from "../components/Home/Hero";
import HeroContent from "../components/Home/HeroContent";
import Projects from "../components/Home/Projects";
import Header from "../components/navbar/Nav";
import React, { useRef } from "react";
import { scroller } from "react-scroll";

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
export default function Home({ posts }) { 
  
 
  
  const validPosts = posts.filter((post) => {
    return post.content !== "";
  });

  const recentPosts = validPosts.slice(0, 4);

  return (
    <>
      <Head>
        <title>Wenoch | Project Work of Emmanuel Nwanochie.</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/fav.png" />
      </Head>{" "}
      <Header
        // scrollProject={scrollToProjects}
        // scrollArticle={scrollToArticles}
        // scrollHome={scrollToHome}
      />
      <Hero>
        <HeroContent />
      </Hero>
      <Projects />
      <Articles articles={recentPosts} />
    </>
  );
}
