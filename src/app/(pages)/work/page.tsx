import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
import Link from "next/link";

const dataWork = [
  {
    name: "MyEnergi",
    // thumbnail: "https://i.ibb.co/gbXWTYV7/image.png",
    thumbnail: "https://images.teamtailor-cdn.com/images/s3/teamtailor-production/gallery_picture-v6/image_uploads/f235667e-b685-400c-a73c-0fb96a879865/original.jpeg?outputFormat=webp",
  },
  {
    name: "Laughing Food Dog",
    thumbnail: "https://i.ibb.co/wN6W1JrJ/image.png"
  }
]


function PageWork() {
  return (
    <>
      <div className="my-32">

        <Section>
          <Container size="fluid">
            <h1 className="max-w-[950px]">World-class e-commerce products, idea to execution.</h1>
          </Container>
        </Section>

        <Section>
          <Container size="fluid">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {dataWork.map((item, i) => {
                const isFull = i % 3 === 0; // every 3rd item (0,3,6,...)

                return (
                  <div
                    key={item.id}
                    className={`h-[900px] w-full ${i % 3 === 0 ? "md:col-span-2" : ""}`}
                  >

                    <picture>
                      <img
                        src={item.thumbnail}
                        className="h-full w-full rounded-md object-cover"
                      />
                    </picture>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        <Section>
          <Container>
            <h2>Laser cut projects </h2>
            <Link href="/contact">
              Start your project
            </Link>
          </Container>
        </Section>

      </div>
    </>
  );
}

export default PageWork
