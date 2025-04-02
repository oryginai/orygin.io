'use client';

import React, { useRef } from 'react';
import { TextEffect } from '@/components/ui/text-effect';
import { Check } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

// Animation variants for timeline elements
const timelineVariants = {
  item: {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        bounce: 0.3,
        duration: 1.2,
      },
    },
  },
  connector: {
    hidden: { height: 0 },
    visible: {
      height: '100%',
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  },
  icon: {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
        delay: 0.2,
      },
    },
  },
};

// Interface for timeline items
interface TimelineItem {
  title: string;
  description: string;
  year?: string;
  highlight?: boolean;
  image?: string;
  stats?: Array<{ value: string; label: string }>;
}

// Timeline data - removed icon from the first item
const timelineItems: TimelineItem[] = [
  {
    // year: '2020',
    title: 'Intelligent AI Agents',
    description: 'From automating workflows to managing operations, our AI agents replace large teams and work with unmatched efficiency.',
    // highlight: true,
    // image: '/features.png'
  },
  {
    // year: '2021',
    title: 'Fully Autonomous Systems',
    description: 'We build AI-driven ecosystems that seamlessly handle business functions—marketing, sales, analytics, and beyond.',
  },
  {
    // year: '2022',
    title: 'Custom AI Solutions',
    description: 'Every business is unique. We create AI solutions tailored to your needs, optimizing performance and driving growth.',
    // stats: [
    //   { value: '95%', label: 'Accuracy' },
    //   { value: '3x', label: 'Faster' },
    //   { value: '50+', label: 'Clients' },
    // ],
  },
  {
    // year: '2023',
    title: 'Scalable & Future-Ready',
    description: 'Our AI adapts and evolves, ensuring that businesses of all sizes can scale effortlessly without limits.',
  },
];

export function TimelineSection() {
  // Create refs to detect when elements come into view
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  // Create refs for each timeline item properly
  const itemRefs = useRef<(React.RefObject<HTMLDivElement>)[]>([]);

  // Initialize refs for timeline items if needed
  if (itemRefs.current.length !== timelineItems.length) {
    itemRefs.current = Array(timelineItems.length)
      .fill(null)
      .map((_, i) => itemRefs.current[i] || React.createRef<HTMLDivElement>());
  }

  // Track when elements are in view
  const sectionInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  // Check if each timeline item is in view
  const itemsInView = itemRefs.current.map((ref) =>
    useInView(ref, { once: true, amount: 0.2, margin: '0px 0px -100px 0px' })
  );

  return (
    <section id="services" ref={sectionRef} className="relative py-24 md:py-36 overflow-hidden">
      {/* Background effects similar to hero section */}
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
      >
        <div className="w-140 h-320 -translate-y-87.5 absolute right-0 top-0 rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(215,98%,85%,.08)_0,hsla(215,98%,55%,.02)_50%,hsla(215,98%,45%,0)_80%)]" />
        <div className="h-320 absolute right-0 bottom-0 w-60 rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_50%]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-24">
          <motion.div
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            variants={timelineVariants.item}
          >
            <span className="text-sm font-medium px-4 py-2 rounded-full bg-muted inline-block mb-4">
              Our Journey
            </span>
          </motion.div>

          {headerInView && (
            <TextEffect
              preset="fade-in-blur"
              speedSegment={0.3}
              as="h2"
              className="text-4xl md:text-5xl mb-6"
            >
              AI Solutions That Power Your Future
            </TextEffect>
          )}

          {headerInView && (
            <TextEffect
              per="line"
              preset="fade-in-blur"
              speedSegment={0.3}
              delay={0.5}
              as="p"
              className="mx-auto mt-4 max-w-2xl text-balance text-lg text-muted-foreground"
            >
              We create custom AI systems that automate, optimize, and scale your business for unstoppable growth.
            </TextEffect>
          )}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <motion.div
            initial="hidden"
            animate={headerInView ? 'visible' : 'hidden'}
            variants={{
              hidden: { scaleY: 0 },
              visible: {
                scaleY: 1,
                transition: {
                  duration: 1.5,
                  ease: 'easeInOut',
                },
              },
            }}
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-border to-transparent z-0 origin-top"
          />

          <div className="relative z-10">
            {timelineItems.map((item, index) => (
              <div key={index} ref={itemRefs.current[index]} className="mb-20 last:mb-0">
                <div
                  className={`flex flex-col ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } gap-8 md:gap-16 items-center`}
                >
                  {/* Timeline content */}
                  <motion.div
                    initial="hidden"
                    animate={itemsInView[index] ? 'visible' : 'hidden'}
                    variants={timelineVariants.item}
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    {item.year && <span className="text-sm font-mono text-muted-foreground">{item.year}</span>}
                    <h3
                      className={`text-2xl md:text-3xl font-bold mt-2 mb-4 ${
                        item.highlight ? 'text-gradient-primary' : ''
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {item.description}
                    </p>

                    {/* Optional statistics */}
                    {item.stats && (
                      <div className="flex gap-6 mt-6 justify-start md:justify-end">
                        {item.stats.map((stat, i) => (
                          <div
                            key={i}
                            className={`text-center ${
                              index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                            }`}
                          >
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Optional image */}
                    {item.image && (
                      <div className="mt-6 overflow-hidden rounded-lg shadow-md">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={500}
                          height={300}
                          className="w-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                  </motion.div>

                  {/* Timeline node */}
                  <div className="relative flex flex-col items-center">
                    <motion.div
                      initial="hidden"
                      animate={itemsInView[index] ? 'visible' : 'hidden'}
                      variants={timelineVariants.icon}
                      className={`z-10 size-12 rounded-full flex items-center justify-center ${
                        item.highlight
                          ? 'bg-[#ff0000] text-white'
                          : 'bg-[#ff0000] text-white'
                      }`}
                    >
                      <Check className="size-5" />
                    </motion.div>

                    {/* Connector lines */}
                    {index < timelineItems.length - 1 && (
                      <motion.div
                        initial="hidden"
                        animate={itemsInView[index] ? 'visible' : 'hidden'}
                        variants={timelineVariants.connector}
                        className="w-0.5 bg-border/50 mt-2"
                        style={{ height: '100px' }}
                      />
                    )}
                  </div>

                  {/* Empty div for alternating layout */}
                  <div className="w-full md:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
