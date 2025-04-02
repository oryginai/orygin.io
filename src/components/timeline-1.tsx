import React from 'react'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { TextEffect } from '@/components/ui/text-effect'

const timelineVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: 'blur(12px)',
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
}

export function TimelineSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
      <div className="mx-auto max-w-7xl px-6">
        <TextEffect
          preset="fade-in-blur"
          speedSegment={0.3}
          as="h2"
          className="text-balance text-center text-4xl md:text-5xl xl:text-[3.5rem]"
        >
          Our Development Timeline
        </TextEffect>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3,
                },
              },
            },
            ...timelineVariants,
          }}
          className="relative mt-16 space-y-8 md:mt-24"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border/50" />

          {[1, 2, 3].map((item) => (
            <div 
              key={item}
              className="relative z-10 flex w-full items-center justify-between gap-8 md:odd:flex-row-reverse"
            >
              {/* Date */}
              <div className="hidden w-1/2 text-right md:block">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  className="text-lg font-medium text-muted-foreground"
                >
                  202
                </TextEffect>
              </div>

              {/* Timeline dot */}
              <div className="relative flex size-8 items-center justify-center">
                <div className="absolute size-4 rounded-full bg-border" />
                <div className="animate-ping-slow absolute size-8 rounded-full bg-border/20" />
              </div>

              {/* Content */}
              <div className="w-full rounded-xl border bg-background p-6 shadow-lg md:w-1/2">
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h3"
                  className="text-2xl font-semibold"
                >
                  Hi
                </TextEffect>
                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.2}
                  className="mt-4 text-muted-foreground"
                >
                  Lorem ipsum dolor sit amet, damn bro adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </TextEffect>

                {/* Mobile date */}
                <div className="mt-4 md:hidden">
                  <TextEffect
                    preset="fade-in-blur"
                    speedSegment={0.3}
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Ok
                  </TextEffect>
                </div>
              </div>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  )
}