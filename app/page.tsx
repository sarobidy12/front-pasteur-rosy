import Hero from "./Home/Hero";
import Discover from "./Home/Discover";
import Podcast from "./Home/Podcast";
import TeachingFavory from "./Home/TeachingFavory";
import Quote from "./Home/Quote";
import Event from "./Home/Event";
import ImageContent from "./Home/Image";

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
