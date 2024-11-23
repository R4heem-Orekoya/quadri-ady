import { cn } from "@/lib/utils"

interface SectionHeadingProps {
   children: React.ReactNode
   clasName?: string
}

const SectionHeading = ({ children, clasName }: SectionHeadingProps) => {
   return (
      <h2 className={cn("text-xl font-semibold tracking-tight", clasName)}>{children}</h2>
   )
}

export default SectionHeading
