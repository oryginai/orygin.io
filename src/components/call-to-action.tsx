"use client"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { motion, useInView, Variants } from 'framer-motion'
import { useRef } from 'react'
import { TextEffect } from '@/components/ui/text-effect'

// Animation variants
const containerVariants: Variants = {
    hidden: { 
        opacity: 0,
        y: 30,
    },
    visible: { 
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
}

const itemVariants: Variants = {
    hidden: { 
        opacity: 0, 
        y: 20,
        filter: 'blur(5px)'
    },
    visible: { 
        opacity: 1, 
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.7,
            type: "spring",
            bounce: 0.3
        }
    }
}

const buttonVariants: Variants = {
    hidden: { 
        opacity: 0,
        scale: 0.9,
    },
    visible: { 
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            delay: 0.6,
            type: "spring",
            stiffness: 200
        }
    },
    hover: {
        scale: 1.05,
        boxShadow: "0 10px 25px rgba(255, 0, 0, 0.2)",
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
        }
    },
    tap: {
        scale: 0.98
    }
}

export default function CallToAction() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { 
        once: true, 
        amount: 0.3
    });
    
    return (
        <section ref={sectionRef} className="py-16">
            <motion.div 
                className="mx-auto max-w-5xl rounded-3xl border px-6 py-12 md:py-20 lg:py-32 relative overflow-hidden"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {/* Background animation */}
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-50 to-transparent dark:via-red-950/10 opacity-0"
                    animate={isInView ? { 
                        opacity: [0, 0.2, 0],
                        scale: [1, 1.1, 1]
                    } : {}}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                
                <div className="text-center relative z-10">
                    <motion.div variants={itemVariants}>
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.25}
                            as="h2" 
                            className="text-balance text-4xl font-semibold lg:text-5xl">
                            Start Building
                        </TextEffect>
                    </motion.div>
                    
                    <motion.p 
                        className="mt-4"
                        variants={itemVariants}>
                        Because the best ideas deserve the best execution.
                    </motion.p>

                    <motion.div 
                        className="mt-12 flex flex-wrap justify-center gap-4"
                        variants={itemVariants}>
                        <motion.div
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                        >
                            <Button asChild size="lg" className="bg-[#ff0000] hover:bg-[#e60000] text-white relative">
                                <Link href="https://www.cal.com/oryginai/15min" target='_blank' rel='noopener noreferrer'>
                                    <span>Get Started</span>
                                    <ArrowUpRight className="ml-1 size-4" />
                                    {/* Pulse effect */}
                                    <motion.span
                                        className="absolute inset-0 rounded-md bg-white"
                                        animate={{
                                            opacity: [0, 0.3, 0],
                                            scale: [0.9, 1.2, 0.9]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                </Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Corner decorations */}
                <motion.div 
                    className="absolute top-4 left-4 w-20 h-20 border-t-2 border-l-2 border-red-200 rounded-tl-2xl"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                />
                <motion.div 
                    className="absolute bottom-4 right-4 w-20 h-20 border-b-2 border-r-2 border-red-200 rounded-br-2xl"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 1, duration: 0.6 }}
                />
            </motion.div>
        </section>
    )
}
