"use client"
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Settings2, Sparkles, Brain } from 'lucide-react'
import { ReactNode, useRef } from 'react'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { TextEffect } from '@/components/ui/text-effect'
import { motion, useInView, Variants } from 'framer-motion'

// Animation variants
const titleVariants = {
    hidden: {
        opacity: 0, 
        y: -20,
        filter: 'blur(8px)'
    },
    visible: {
        opacity: 1, 
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            type: "spring",
            bounce: 0.3
        }
    }
}

const cardContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        }
    }
}

const cardVariants: Variants = {
    hidden: { 
        opacity: 0, 
        y: 30,
        scale: 0.95,
        filter: 'blur(5px)'
    },
    visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.8
        }
    }
}

const decoratorVariants: Variants = {
    initial: { 
        rotate: 0,
        scale: 1
    },
    hover: { 
        scale: 1.05,
        transition: { 
            type: "spring", 
            stiffness: 400, 
            damping: 10 
        }
    }
}

// ScrollTriggeredSection component
function ScrollTriggeredSection({ children, threshold = 0.2 }: { children: ReactNode, threshold?: number }) {
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

export default function Features() {
    return (
        <section id="features" className="bg-zinc-50 py-16 md:py-32 dark:bg-transparent">
            <div className="@container mx-auto max-w-5xl px-6">
                <ScrollTriggeredSection threshold={0.1}>
                    <div className="text-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={titleVariants}>
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.25}
                                as="h2" 
                                className="text-balance text-4xl font-semibold lg:text-5xl">
                                AI Solutions That Power Your Future
                            </TextEffect>
                            <motion.p 
                                className="mt-4"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ 
                                    opacity: 1, 
                                    y: 0,
                                    transition: { delay: 0.4, duration: 0.7 } 
                                }}>
                                We create custom AI systems that automate, optimize, and scale your business for unstoppable growth.
                            </motion.p>
                        </motion.div>
                    </div>
                    
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={cardContainerVariants}
                        className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                        
                        <motion.div variants={cardVariants} whileHover={{ y: -8, transition: { type: "spring", stiffness: 400 } }}>
                            <Card className="group shadow-zinc-950/5 transition-all duration-300 hover:shadow-lg">
                                <CardHeader className="pb-3">
                                    <motion.div 
                                        variants={decoratorVariants}
                                        initial="initial"
                                        whileHover="hover">
                                        <CardDecorator>
                                            <Brain className="size-6" aria-hidden />
                                        </CardDecorator>
                                    </motion.div>
                                    <h3 className="mt-6 font-medium text-[#ff0000]">Intelligent</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm">From automating customer support to managing workflows, replace large teams and handle tasks with efficienctly.</p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={cardVariants} whileHover={{ y: -8, transition: { type: "spring", stiffness: 400 } }}>
                            <Card className="group shadow-zinc-950/5 transition-all duration-300 hover:shadow-lg">
                                <CardHeader className="pb-3">
                                    <motion.div 
                                        variants={decoratorVariants}
                                        initial="initial"
                                        whileHover="hover">
                                        <CardDecorator>
                                            <Settings2 className="size-6" aria-hidden />
                                        </CardDecorator>
                                    </motion.div>
                                    <h3 className="mt-6 font-medium text-[#ff0000]">Autonomous Business Systems</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm">AI-driven systems that seamlessly integrate into your operations—sales, analytics, and beyond.</p>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={cardVariants} whileHover={{ y: -8, transition: { type: "spring", stiffness: 400 } }}>
                            <Card className="group shadow-zinc-950/5 transition-all duration-300 hover:shadow-lg">
                                <CardHeader className="pb-3">
                                    <motion.div 
                                        variants={decoratorVariants}
                                        initial="initial"
                                        whileHover="hover">
                                        <CardDecorator>
                                            <Sparkles className="size-6" aria-hidden />
                                        </CardDecorator>
                                    </motion.div>
                                    <h3 className="mt-6 font-medium text-[#ff0000]">Custom for You</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm">No matter your industry, we craft tailor-made AI solutions to solve complex problems, and unlock new possibilities.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </ScrollTriggeredSection>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <motion.div 
            aria-hidden 
            className="bg-radial to-background absolute inset-0 from-transparent to-75%" 
            animate={{ 
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.05, 1] 
            }}
            transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
            }}
        />
        <motion.div 
            className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t"
            // whileHover={{ 
            //     rotate: [0, 5, 0, -5, 0],
            //     transition: { duration: 0.5 }
            // }}
        >
            {children}
        </motion.div>
    </div>
)
