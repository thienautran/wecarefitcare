import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { twMerge } from 'tailwind-merge';

/* ─── shadcn-style Tabs built on Radix ─── */

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={twMerge(
      'inline-flex w-full items-center gap-1 rounded-xl bg-slate-100 p-1',
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={twMerge(
      'inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 py-2.5 font-heading text-sm font-medium text-slate-500 transition-all duration-200',
      'hover:text-slate-700',
      'data-[state=active]:bg-white data-[state=active]:text-brand-700 data-[state=active]:shadow-sm data-[state=active]:font-semibold',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2',
      'cursor-pointer select-none',
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ComponentRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={twMerge(
      'mt-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2',
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
