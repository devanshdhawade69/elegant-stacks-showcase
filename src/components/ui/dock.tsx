"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export function Dock({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto flex h-16 items-end gap-4 rounded-2xl bg-background/70 backdrop-blur-md border border-border px-4 pb-2 shadow-sm",
        className
      )}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement, { mouseX } as any)
          : child
      )}
    </motion.div>
  );
}

export function DockCard({
  children,
  className,
  mouseX,
  id,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  mouseX?: any;
  id?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef<HTMLDivElement>(null);

  const distanceCalc = useTransform(mouseX ?? useMotionValue(Infinity), (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distanceCalc, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={cn(
        "flex aspect-square cursor-pointer items-center justify-center rounded-full bg-background border border-border shadow-sm overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function DockCardInner({
  children,
  src,
  className,
  id,
}: {
  children?: React.ReactNode;
  src?: string;
  className?: string;
  id?: string;
}) {
  return (
    <div className={cn("relative flex h-full w-full items-center justify-center rounded-full overflow-hidden group", className)}>
      {src && (
        <img
          src={src}
          alt={`Dock icon ${id || ""}`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      )}
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export function DockDivider() {
  return <div className="h-[60%] w-[1px] bg-border/50 mx-2 self-center rounded-full" />;
}
