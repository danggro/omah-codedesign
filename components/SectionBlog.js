import CardBlogMain from "./CardBlogMain";
import CardBlogSubMain from "./CardBlogSubMain";
import Container from "./Container";
import ViewAll from "./ViewAll";

export default function SectionBlog() {
  return (
    <div className="mt-[128px]">
      <Container>
        <div className="flex items-center">
          <div className="w-4/12">
            <h2 className="text-[40px] font-medium text-primary">
              Always check our latest blog
            </h2>
          </div>
          <div className="w-8/12">
            <div className="flex justify-end">
              <ViewAll />
            </div>
          </div>
        </div>
        <div className="mt-[50px] flex space-x-[30px]">
          <div className="w-6/12">
            <CardBlogMain
              name="Yusuf Firdaus"
              pos="admin"
              title="Tips and tricks in choosing a house"
              description="tips and tricks to buy a house easily here is to buy at a low price"
              image="/img-blog-1.png"
              avatarAuthor="/author-blog-1.png"
            />
          </div>
          <div className="w-6/12">
            <CardBlogSubMain
              title="Creating a clean and elegant home"
              name="Albert Firdaus"
              image="/img-blog-2.png"
            />
            <CardBlogSubMain
              title="Good paint color for home"
              name="Rusy Firdaus"
              image="/img-blog-3.png"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
