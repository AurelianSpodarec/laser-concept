import { IFaq } from "@/app/(pages)/(root)/_sections/FAQ/dataFaq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

function AccordionBasic({ type, data }: { type: "single" | "multiple"; data: IFaq[]; }) {
  return (
    <Accordion type={type} className="space-y-4">
      {data.map((item, index) => (
        <AccordionItem value={item.question} key={index}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionBasic
