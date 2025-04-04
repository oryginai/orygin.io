"use client"
import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { ReactNode } from 'react'
import { Component } from "@/components/chart-1";


// Define custom animation variants
const fadeInVariants = {
    container: {
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
            },
        },
    },
    item: {
        hidden: {
            opacity: 0,
            y: 20,
            filter: 'blur(8px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

const imageVariants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        filter: 'blur(12px)',
    },
    visible: {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 1.8,
            delay: 0.6,
        },
    },
}

// Define props interface for ScrollTriggeredSection
interface ScrollTriggeredSectionProps {
  children: ReactNode;
  threshold?: number;
}

// Create a ScrollTriggeredSection component that only renders its children when in view
function ScrollTriggeredSection({ children, threshold = 0.2 }: ScrollTriggeredSectionProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { 
        once: true, 
        amount: threshold 
    });
    
    return (
        <div ref={ref} className="transition-opacity duration-500" style={{ opacity: isInView ? 1 : 0 }}>
            {isInView && children}
        </div>
    );
}

export default function ContentSection() {
    return (
        <section className="py-16 md:py-32">
            <ScrollTriggeredSection>
                <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                    <TextEffect
                        preset="fade-in-blur"
                        speedSegment={0.3}
                        as="h2"
                        className="relative z-10 max-w-xxl text-4xl font-medium lg:text-5xl">
                        The Orygin AI ecosystem revolutionizes business automation.
                    </TextEffect>
                    
                    <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                        <AnimatedGroup
                            variants={fadeInVariants}
                            className="relative space-y-4">
                            <p className="text-muted-foreground">
                                We don&apos;t just build AI. <span className="text-accent-foreground font-bold" style={{ color: '#FF0000' }}>We create an ecosystem</span> — where intelligent systems work together, replacing inefficiency with automation.
                            </p>
                            <p className="text-muted-foreground">It&apos;s more than just AI—it&apos;s a powerhouse of automation, decision-making, and optimization designed to help businesses scale effortlessly.</p>

                            <AnimatedGroup 
                                preset="blur-slide"
                                className="grid grid-cols-2 gap-3 pt-4 sm:gap-10">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Zap className="size-4" />
                                        <h3 className="text-sm font-medium" style={{ color: '#FF0000' }}>Autonomous</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">AI that thinks and acts so your business runs on autopilot.</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Cpu className="size-4" />
                                        <h3 className="text-sm font-medium" style={{ color: '#FF0000' }}>Scalable</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">From startups to enterprises, our AI adapts & grows with you.</p>
                                </div>
                            </AnimatedGroup>

                            {/* <AnimatedGroup 
                                preset="blur-slide"
                                className="grid grid-cols-3 items-center gap-1 pt-6 sm:gap-8">

                                
                                <div className="space-y-3 text-left">
                                    <div className="flex items-center gap-2">
                                        <Zap className="size-4" />
                                        <h3 className="text-sm font-medium text-red-500">Autonomous</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">
                                        AI that thinks, learns, and acts—so your business runs on autopilot.
                                    </p>
                                </div>

                                <div className="w-[1px] h-12 bg-gray-500 opacity-50 mx-auto"></div>

                                <div className="space-y-3 text-left">
                                    <div className="flex items-center gap-2">
                                        <Cpu className="size-4" />
                                        <h3 className="text-sm font-medium text-red-500">Scalable</h3>
                                    </div>
                                    <p className="text-muted-foreground text-sm">
                                        From startups to enterprises, our AI adapts and grows with you.
                                    </p>
                                </div>

                            </AnimatedGroup> */}


                        </AnimatedGroup>
                        
                        <AnimatedGroup
                            variants={{
                                container: {},
                                item: imageVariants
                            }}
                            className="relative mt-6 sm:mt-0">
                            <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                                <Image src="/graph.png" className="hidden rounded-[15px] dark:block" alt="payments illustration dark" width={1200} height={1200} />
                                {/* <Component /> */}
                            </div>
                        </AnimatedGroup>
                    </div>
                </div>
            </ScrollTriggeredSection>
        </section>
    )
}