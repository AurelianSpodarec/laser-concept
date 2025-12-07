import Container from "@/components/_layout/Container";
import Section from "@/components/_layout/Section";
import AccordionBasic from "@/components/molecules/Accordion";

import SectionHeader from "@/components/SectionHeader";
import dataFaq from "./dataFaq";

function SectionFAQ() {

  return (
    <Section id="faq" size="sm">
      <Container size="tiny">

        <SectionHeader
          kicker="FAQ"
          title="Questions founders ask us"
          className="max-w-[850px] mx-auto"
        />

        <AccordionBasic type="single" data={dataFaq} />

      </Container>
    </Section>
  );
}

export default SectionFAQ;
