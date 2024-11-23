"use client"

import { cn } from "@/lib/utils";
import { AlignJustify } from "lucide-react";
import { AnimatePresence, MotionValue, motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
   items,
   desktopClassName,
   mobileClassName,
}: {
   items: { title: string; icon: React.ReactNode; href: string }[];
   desktopClassName?: string;
   mobileClassName?: string;
}) => {
   return (
      <>
         <FloatingDockDesktop items={items} className={desktopClassName} />
         <FloatingDockMobile items={items} className={mobileClassName} />
      </>
   );
};

const FloatingDockMobile = ({
   items,
   className,
}: {
   items: { title: string; icon: React.ReactNode; href: string }[];
   className?: string;
}) => {
   const [open, setOpen] = useState(false);
   return (
      <div className={cn("fixed bottom-4 right-6 z-[9999] block md:hidden", className)}>
         <AnimatePresence>
            {open && (
               <motion.div
                  layoutId="nav"
                  className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
               >
                  {items.map((item, idx) => (
                     <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                           opacity: 1,
                           y: 0,
                        }}
                        exit={{
                           opacity: 0,
                           y: 10,
                           transition: {
                              delay: idx * 0.05,
                           },
                        }}
                        transition={{ delay: (items.length - 1 - idx) * 0.05 }}
                     >
                        <Link
                           href={item.href}
                           key={item.title}
                           className="h-10 w-10 rounded-full bg-primary-foreground flex items-center justify-center"
                        >
                           {item.icon}
                        </Link>
                     </motion.div>
                  ))}
               </motion.div>
            )}
         </AnimatePresence>
         <button
            onClick={() => setOpen(!open)}
            className="h-10 w-10 rounded-full bg-primary-foreground flex items-center justify-center"
         >
            <AlignJustify className={cn("w-5 h-5 transition duration-300", { "rotate-90": open })} strokeWidth={1.5}/>
         </button>
      </div>
   );
};

const FloatingDockDesktop = ({
   items,
   className,
}: {
   items: { title: string; icon: React.ReactNode; href: string }[];
   className?: string;
}) => {
   const mouseX = useMotionValue(Infinity);
   return (
      <motion.div
         onMouseMove={(e) => mouseX.set(e.pageX)}
         onMouseLeave={() => mouseX.set(Infinity)}
         className={cn(
            "fixed z-[9999] bottom-4 left-1/2 -translate-x-1/2 mx-auto hidden md:flex h-16 gap-4 items-end rounded-full bg-primary-foreground/50 backdrop-blur-md border px-2 py-3",
            className
         )}
      >
         {items.map((item) => (
            <IconContainer mouseX={mouseX} key={item.title} {...item} />
         ))}
      </motion.div>
   );
};

function IconContainer({
   mouseX,
   title,
   icon,
   href,
}: {
   mouseX: MotionValue;
   title: string;
   icon: React.ReactNode;
   href: string;
}) {
   const ref = useRef<HTMLDivElement>(null);

   const distance = useTransform(mouseX, (val) => {
      const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

      return val - bounds.x - bounds.width / 2;
   });

   const widthTransform = useTransform(distance, [-150, 0, 150], [40, 65, 40]);
   const heightTransform = useTransform(distance, [-150, 0, 150], [40, 65, 40]);

   const widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 30, 20]);
   const heightTransformIcon = useTransform(
      distance,
      [-150, 0, 150],
      [20, 30, 20]
   );

   const width = useSpring(widthTransform, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
   });
   const height = useSpring(heightTransform, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
   });

   const widthIcon = useSpring(widthTransformIcon, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
   });
   const heightIcon = useSpring(heightTransformIcon, {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
   });

   const [hovered, setHovered] = useState(false);

   return (
      <Link href={href}>
         <motion.div
            ref={ref}
            style={{ width, height }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="aspect-square rounded-full bg-primary-foreground border flex items-center justify-center relative"
         >
            <AnimatePresence>
               {hovered && (
                  <motion.div
                     initial={{ opacity: 0, y: 10, x: "-50%" }}
                     animate={{ opacity: 1, y: 0, x: "-50%" }}
                     exit={{ opacity: 0, y: 2, x: "-50%" }}
                     className="px-2 py-0.5 whitespace-pre rounded-md bg-primary-foreground border absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
                  >
                     {title}
                  </motion.div>
               )}
            </AnimatePresence>
            <motion.div
               style={{ width: widthIcon, height: heightIcon }}
               className="flex items-center justify-center"
            >
               {icon}
            </motion.div>
         </motion.div>
      </Link>
   );
}