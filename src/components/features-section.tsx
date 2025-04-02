"use client"
import { ReactNode, useRef } from 'react'
import { useInView } from 'framer-motion'
import { TextEffect } from '@/components/ui/text-effect'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { Brain, Cpu, Lock, BarChart3, Settings, Zap } from 'lucide-react'

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

// Feature card component
interface FeatureProps {
    icon: ReactNode;
    title: string;
    description: string;
}

function FeatureCard({ icon, title, description }: FeatureProps) {
    return (
        <div className="bg-card hover:bg-card/80 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg">
            <div className="flex size-12 items-center justify-center rounded-lg bg-red-500/10 mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-medium mb-2" style={{ color: '#FF0000' }}>{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    );
}

export default function FeaturesSection() {
    // Animation variants for staggered feature cards
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };
    
    // Animation variants for each feature card
    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 20, 
            filter: 'blur(8px)', 
            scale: 0.95 
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            scale: 1,
            transition: {
                type: 'spring',
                bounce: 0.4,
                duration: 1.2,
            },
        },
    };

    return (
        <section className="py-16 md:py-32 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-red-500/5 blur-3xl"></div>
                <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-red-500/5 blur-3xl"></div>
            </div>
            
            <div className="container mx-auto px-6">
                <ScrollTriggeredSection threshold={0.1}>
                    <div className="text-center mb-16">
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            as="span"
                            className="text-sm font-medium uppercase tracking-wider text-red-500">
                            Our Features
                        </TextEffect>
                        
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={0.3}
                            as="h2"
                            className="mt-4 text-4xl font-semibold md:text-5xl">
                            AI capabilities that transform your business
                        </TextEffect>
                        
                        <TextEffect
                            preset="fade-in-blur"
                            speedSegment={0.3}
                            delay={0.6}
                            as="p"
                            className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                            Our platform brings together the best of AI to deliver solutions that are practical, powerful, and tailored to your business needs.
                        </TextEffect>
                    </div>
                </ScrollTriggeredSection>
                
                <ScrollTriggeredSection threshold={0.1}>
                    <AnimatedGroup
                        variants={{
                            container: containerVariants,
                            item: itemVariants
                        }}
                        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <FeatureCard 
                            icon={<Brain className="size-6 text-red-500" />}
                            title="AI Decision Making"
                            description="Our AI systems make intelligent decisions based on your data, delivering insights that drive business growth."
                        />
                        <FeatureCard 
                            icon={<Cpu className="size-6 text-red-500" />}
                            title="Powerful Processing"
                            description="Process complex data at scale with our high-performance AI infrastructure that adapts to your needs."
                        />
                        <FeatureCard 
                            icon={<Lock className="size-6 text-red-500" />}
                            title="Enterprise Security"
                            description="Bank-grade security protocols ensure your data and AI models remain protected at all times."
                        />
                        <FeatureCard 
                            icon={<BarChart3 className="size-6 text-red-500" />}
                            title="Advanced Analytics"
                            description="Gain deeper insights with our advanced analytics that transform raw data into actionable intelligence."
                        />
                        <FeatureCard 
                            icon={<Settings className="size-6 text-red-500" />}
                            title="Customizable Workflows"
                            description="Build flexible AI workflows that integrate seamlessly with your existing business processes."
                        />
                        <FeatureCard 
                            icon={<Zap className="size-6 text-red-500" />}
                            title="Real-time Automation"
                            description="Automate repetitive tasks with intelligent systems that work 24/7, increasing efficiency across your organization."
                        />
                    </AnimatedGroup>
                </ScrollTriggeredSection>
            </div>
        </section>
    );
}
