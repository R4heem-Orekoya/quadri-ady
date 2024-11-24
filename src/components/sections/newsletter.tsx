import { Button } from "../ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"

const Newsletter = () => {
   return (
      <section>
         <Card className="max-w-[550px] mx-auto">
            <CardHeader>
               <CardTitle>Let's Connect</CardTitle>
            </CardHeader>
            <CardContent>
               <form className="flex max-sm:flex-col sm:items-center gap-4">
                  <Input placeholder="youremail@example.com" type="email" className="h-10"/>
                  <Button className="h-10">Join Newsletter</Button>
               </form>
            </CardContent>
         </Card>
      </section>
   )
}

export default Newsletter
