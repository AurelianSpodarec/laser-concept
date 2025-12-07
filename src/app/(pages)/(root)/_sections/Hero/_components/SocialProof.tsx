import Image from "next/image";
import IconStar2 from "@/components/icons/Star2";

function SocialProof() {
  return (
    <div className="flex space-x-2 items-center align-center mb-4">
      <div className="flex flex-none -space-x-4 overflow-hidden">
        <Image width="40" height="40" src="/images/testimonials/vladmir.jpg" alt="" className="border-2 border-[#ffeda4]/50 backdrop-blur-[10px] inline-block object-cover size-10 rounded-full" />
        <Image width="40" height="40" src="/images/testimonials/ivan.png" alt="" className="border-2 border-[#ffeda4]/50 backdrop-blur-[10px] inline-block object-cover size-10 rounded-full" />
        <Image width="40" height="40" src="/images/testimonials/maks.jpeg" alt="" className="border-2 border-[#ffeda4]/50 backdrop-blur-[10px] inline-block object-cover size-10 rounded-full" />
        <Image width="40" height="40" src="/images/testimonials/ashish.jpeg" alt="" className="border-2 border-[#ffeda4]/50 backdrop-blur-[10px] inline-block object-cover size-10 rounded-full" />
        <Image width="40" height="40" src="/images/testimonials/mike.jpeg" alt="" className="border-2 border-[#ffeda4]/50 backdrop-blur-[10px] inline-block object-cover size-10 rounded-full" />
      </div>
      <div>
        <div className="flex">
          <IconStar2 />
          <IconStar2 />
          <IconStar2 />
          <IconStar2 />
          <IconStar2 />
        </div>
        <p className="text-sm">
          Loved by founders globally
        </p>
      </div>
    </div>
  )
}

export default SocialProof
