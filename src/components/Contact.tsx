import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import Submit from '@/icons/Submit-icon'
import EmailIcon from "@/icons/Email-icon"
import Github from "@/icons/Github-icon"
import X from "@/icons/X-icon"
import LinkedIn from "@/icons/LinkedIn-icon"

interface SocialLink {
    name: string;
    profile: string;
    icon: React.ComponentType<any>;
    href: string;
    label: string;
}

function Contact() {

    const socialLinks: SocialLink[] = [
        {
            name: 'Email',
            profile: 'umair00703@gmail.com',
            icon: EmailIcon,
            href: 'https://mail.google.com/mail/u/0/#inbox?compose=new/',
            label: 'Email'
        },
        {
            name: 'github',
            profile: 'github.com/syed373',
            icon: Github,
            href: 'https://github.com/syed373/',
            label: 'GitHub Profile'
        },
        {
            name: 'X',
            profile: '@Syeed373',
            icon: X,
            href: 'https://x.com/syeed373/',
            label: 'X (Twitter) Profile'
        },
        {
            name: 'linkedIn',
            profile: 'linkedin.com/in/syed373',
            icon: LinkedIn,
            href: 'https://linkedin.com/in/syed373/',
            label: 'LinkedIn Profile'
        }
    ];

    const handleSocialClick = (link: SocialLink): void => {
        window.open(link.href, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="w-full max-w-3xl pb-12 sm:pb-16 lg:pb-20 mx-auto border border-white/30 shadow-sm shadow-white/50 my-2 rounded-xl backdrop-blur-sm px-4 sm:px-6 lg:px-8">
            <div className="w-full mt-12 sm:mt-16 lg:mt-20 flex flex-col justify-center items-center text-center text-white">
                <div className="font-robo text-background">
                    <h1 className="text-4xl text-foreground font-medium bg-background py-1 rounded-lg mx-4">Get in Touch</h1>
                    <p className="text-background/50 px-10 my-8">Have a project idea, collaboration opportunity, or just want to chat about Fullstack and technology? I'm always open to connecting with fellow builders and creators.</p>
                </div>
                <div className="border border-background/50 mt-8 mb-16 w-fit rounded-sm p-8 flex flex-col items-center">
                    <h1 className="font-robo text-3xl w-fit font-bold">Connect with me</h1>
                    <p className="text-background/50 px-10 my-2">Choose how you'd like to reach out</p>
                    <div className="text-white space-y-4 my-6">
                        {socialLinks.map((link) => {
                            const IconComponent = link.icon;
                            return (
                                <button
                                    key={link.name}
                                    onClick={() => handleSocialClick(link)}
                                    className="flex items-center gap-4 font-robo hover:bg-white/10 w-70 p-2 rounded-md"
                                    aria-label={link.label}
                                >
                                    <IconComponent className="size-12 bg-popover rounded-full p2" />
                                    <div>
                                        <h1 className="text-start">{link.name}</h1>
                                        <p className="text-sm text-background/50">{link.profile}</p>
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className='w-full font-robo flex justify-center'>
                    <Tabs defaultValue="Contact" className="w-full">
                        <div className="flex justify-center mb-6">
                            <TabsList className="w-full max-w-md">
                                <TabsTrigger value="Contact" className="flex-1">Contact</TabsTrigger>
                                <TabsTrigger value="Hire" className="flex-1">Hire</TabsTrigger>
                                <TabsTrigger value="Collaborate" className="flex-1">Collaborate</TabsTrigger>
                            </TabsList>
                        </div>

                        <TabsContent value="Contact" className="w-full max-w-2xl mx-auto">
                            <div className='w-full'>
                                <div className="mb-6 sm:mb-8 space-y-1">
                                    <h1 className="text-2xl sm:text-3xl">Send a Message</h1>
                                    <p className="text-sm text-white/40">I'll get back to you as soon as possible</p>
                                </div>
                                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:gap-8 mb-6">
                                    <div className="w-full md:flex-1">
                                        <Label className="block text-left">Name</Label>
                                        <Input className='mt-2 sm:mt-4 w-full' placeholder="Your Name" type="text" />
                                    </div>
                                    <div className="w-full md:flex-1">
                                        <Label className="block text-left">Email</Label>
                                        <Input className='mt-2 sm:mt-4 w-full' placeholder="Your Email" type="email" />
                                    </div>
                                </div>
                                <div className="w-full">
                                    <Label className="block text-left">Message</Label>
                                    <Textarea className='mt-2 sm:mt-4 min-h-[120px] w-full resize-none' placeholder="Your Message..." id="contact-message" />
                                </div>
                                <div className="mt-6 sm:mt-8 flex justify-center">
                                    <Button variant="secondary" className='inline-flex items-center gap-2'>
                                        Send Message
                                        <Submit />
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="Hire" className="w-full max-w-2xl mx-auto">
                            <div className='w-full'>
                                <div className="mb-6 sm:mb-8 space-y-1">
                                    <h1 className="text-2xl sm:text-3xl">Work with Me</h1>
                                    <p className="text-sm text-white/40">Tell me about your project or position</p>
                                </div>
                                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:gap-8 mb-6">
                                    <div className="w-full md:flex-1">
                                        <Label className="block text-left">Name</Label>
                                        <Input className='mt-2 sm:mt-4 w-full' placeholder="Your Name" type="text" />
                                    </div>
                                    <div className="w-full md:flex-1">
                                        <Label className="block text-left">Email</Label>
                                        <Input className='mt-2 sm:mt-4 w-full' placeholder="Your Email" type="email" />
                                    </div>
                                </div>
                                <div className="space-y-6 w-full">
                                    <div>
                                        <Label className="block text-left">Company / Organization</Label>
                                        <Input className='mt-2 sm:mt-4 w-full' placeholder="Company or Organization Name..." />
                                    </div>
                                    <div>
                                        <Label className="block text-left">Message</Label>
                                        <Textarea className='mt-2 sm:mt-4 min-h-[120px] w-full resize-none' placeholder="Tell me about your project or position..." id="hire-message" />
                                    </div>
                                </div>
                                <div className="mt-6 sm:mt-8 flex justify-center">
                                    <Button variant="secondary" className='inline-flex items-center gap-2'>
                                        Submit Inquiry
                                        <Submit />
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="Collaborate" className="w-full max-w-2xl mx-auto">
                            <div className='w-full'>
                                <div className="mb-6 sm:mb-8 space-y-1">
                                    <h1 className="text-2xl sm:text-3xl">Let's Build Together</h1>
                                    <p className="text-sm text-white/40">Share your idea and how we can collaborate</p>
                                </div>
                                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:gap-8 mb-6">
                                    <div className="w-full md:flex-1">
                                        <Label className="block text-left">Name</Label>
                                        <Input className='mt-2 sm:mt-4 w-full' placeholder="Your Name" type="text" />
                                    </div>
                                    <div className="w-full md:flex-1">
                                        <Label className="block text-left">Email</Label>
                                        <Input className='mt-2 sm:mt-4 w-full' placeholder="Your Email" type="email" />
                                    </div>
                                </div>
                                <div className="space-y-6 w-full">
                                    <div>
                                        <Label className="block text-left">Project Name</Label>
                                        <Input className='mt-2 sm:mt-4 w-full' placeholder="Name of your project" />
                                    </div>
                                    <div>
                                        <Label className="block text-left">Message</Label>
                                        <Textarea className='mt-2 sm:mt-4 min-h-[120px] w-full resize-none' placeholder="Share your collaboration idea..." id="collaborate-message" />
                                    </div>
                                </div>
                                <div className="mt-6 sm:mt-8 flex justify-center">
                                    <Button variant="secondary" className='inline-flex items-center gap-2'>
                                        Let's Collaborate
                                        <Submit />
                                    </Button>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Contact