import { Button } from "~/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer"

export default function Index() {
  return (
    <div>
      <Button>Click me</Button>
      <Accordion type="single" collapsible className="max-w-[400px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger> Lorem ipsum dolor sit amet.</AccordionTrigger>
          <AccordionContent>
            Lor. It adheres to the WAI-ARIA design pattern.em ipsum dolor sit amet consectetur adipisicing elit. Autem iste ut iure possimus at, maiores, inventore optio soluta laborum ratione vero hic omnis provident commodi rerum fugiat maxime architecto mollitia dicta. Illum veritatis dolores, aliquam expedita animi nobis, debitis fuga ipsam maxime autem, tempora numquam odit unde optio quas libero.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Drawer>
        <DrawerTrigger>Open</DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>


    </div>
  )
}
