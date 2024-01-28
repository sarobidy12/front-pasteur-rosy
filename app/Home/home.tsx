import Hero from "./Hero";
import Discover from "./Discover";
import Podcast from "./Podcast";
import Teachingfavorite from "./Teachingfavorite";
import Quote from "./Quote";
import Event from "./Event";
import ImageContent from "./Image";

export default function Home() {
  return (
    <>
      <Hero />
      <Quote />
      <Discover />
      <Podcast />
      <Teachingfavorite />
      <Event />
      <ImageContent />
    </>
  );
}
