import { Button } from './ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function About() {
    return (
        
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xxl text-4x1 font-medium lg:text-5xl">About Us</h2>
                <div className="grid gap-6 md:gap-12 lg:gap-24">
                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                        At Orygin AI, we&apos;re not just building AI—we&apos;re redefining the way businesses operate. Our intelligent AI systems replace large teams, automate complex processes, and drive efficiency at scale. From fully autonomous social media teams to AI-driven e-commerce assistants and business intelligence solutions, we create cutting-edge AI that works smarter, faster, and better than ever before.</p>
                        <p className="text-muted-foreground">
                        We believe in limitless automation. Whether it&apos;s optimizing workflows, enhancing customer experiences, or making data-driven decisions in real-time, our AI solutions are designed to seamlessly integrate and scale with your business. No matter your industry, if it can be automated, we can build it.</p>
                        <p className="text-muted-foreground">
                        The future of business is AI-powered. Let&apos;s build it together.</p>
                        
                        <Button asChild variant="secondary" size="sm" className="gap-1 pr-1.5">
                            <Link href="https://github.com/oryginai">
                                <span>Check out our work</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
