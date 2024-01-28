import Hero from "./Hero";
import Discover from "./Discover";
import Podcast from "./Podcast";
import TeachingFavory from "./TeachingFavory";
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
      <TeachingFavory />
      <Event />
      <ImageContent />
    </>
  );
}
