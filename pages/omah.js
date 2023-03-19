import Container from "@/components/Container";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import SectionBlog from "@/components/SectionBlog";
import SectionHero from "@/components/SectionHero";
import SectionLastest from "@/components/SectionLastest";
import SectionReview from "@/components/SectionReview";
import SectionSubscribe from "@/components/SectionSubscribe";

export default function omah() {
  return (
    <>
      <Container>
        <NavBar />
      </Container>
      <SectionHero />
      <SectionLastest />
      <SectionReview />
      <SectionBlog />
      <SectionSubscribe />
      <Footer />
    </>
  );
}
