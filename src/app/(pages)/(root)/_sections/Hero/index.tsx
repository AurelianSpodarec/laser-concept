import Link from "next/link";
// import Image from "next/image";

import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
import SocialProof from "./_components/SocialProof";

function SectionHero() {
  return (
    <Section className="pt-16 lg:pt-40 pb-10" size="clean">
      <Container size="fluid">
        <div className="flex flex-col items-center justify-center">

          <div className="text-center mb-4">
            <h1 className="font-semibold mx-auto mb-4 max-w-[1080px]">Websites that reflect your brand — and convert to more customers</h1>
            <p className="text-body-lg max-w-[800px] mx-auto">We restore confidence in your web presence by fixing brand disconnects, broken launches, and conversion leaks — turning your site into a reliable growth engine that showcases your business and delivers results that last.</p>
          </div>

          <div className="flex flex-col space-y-2">
            <Link href="https://cal.link/15-min-call" target="_blank"
              className="mb-7 shadow shadow-[#d4ff4c] hover:shadow-lg text-[#d4ff4c] inline-flex items-center 
                  bg-black justify-center rounded-full
                  p-3.5 lg:p-4  px-4 lg:px-10 text-body-lg  tracking-tight
                  cursor-pointer hover:scale-105 hover:rotate-1 transition duration-300 ease-out
                  w-fit mx-auto
                  h-[60px]  

           ">
              {/* <Image className="mr-4 rounded-full size-10" height={40} width={40} src="/images/aurelian.jpg" alt="Aurelian Spodarec" /> */}
              Book a Strategy Call
            </Link>

            <SocialProof />
          </div>

        </div>
      </Container>
    </Section>
  );
}

export default SectionHero
