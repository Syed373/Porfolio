import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import Submit from '@/icons/Submit-icon'

function Contact() {
    return (
        <div className="max-w-3xl pb-20 mx-auto border-1 border-white/30 shadow-sm shadow-white/50 h-fit my-2 rounded-xl backdrop-blur-sm bg-[#c2c2c220]">
            <div className="w-3xl mt-20 flex justify-center text-center md:text-start">
                <div className='w-2xl font-robo'>
                    <Tabs defaultValue="Contact" className="w-3xl">
                        <TabsList>
                            <TabsTrigger value="Contact">Contact</TabsTrigger>
                            <TabsTrigger value="Hire">Hire</TabsTrigger>
                            <TabsTrigger value="Collaborate">Collaborate</TabsTrigger>
                        </TabsList>
                        <TabsContent value="Contact">
                            <div className=''>
                                <div className="mb-8 space-y-1">
                                    <h1 className="text-3xl">Send a Message</h1>
                                    <p className="text-sm text-white/40">I'll get back to you as soon as possible</p>
                                </div>
                                <div className="space-y-10 md:flex gap-8">
                                    <div>
                                        <Label htmlFor="message">Name</Label>
                                        <Input className='mt-4' placeholder="Your Name" type="Name" />
                                    </div>
                                    <div>
                                        <Label htmlFor="message">Email</Label>
                                        <Input className='mt-4' placeholder="Your Email" type="message" />
                                    </div>
                                </div>
                                <div className="w-full mt-8 md:mt-0">
                                    <div>
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea className='mt-4 h-30' placeholder="Your Message..." id="contact-message" />
                                    </div>
                                </div>
                                <Button variant="secondary" className='mt-8'>Send Message&nbsp;<Submit /></Button>
                            </div>
                        </TabsContent>
                        <TabsContent value="Hire">
                            <div className=''>
                                <div className="mb-8 space-y-1">
                                    <h1 className="text-3xl">Work with Me</h1>
                                    <p className="text-sm text-white/40">Tell me about your project or position</p>
                                </div>
                                <div className="space-y-10 md:flex gap-8">
                                    <div>
                                        <Label htmlFor="message">Name</Label>
                                        <Input className='mt-4' placeholder="Your Name" type="Name" />
                                    </div>
                                    <div>
                                        <Label htmlFor="message">Email</Label>
                                        <Input className='mt-4' placeholder="Your Email" type="message" />
                                    </div>
                                </div>
                                <div className="space-y-6 w-full mt-8 md:mt-0">
                                    <div>
                                        <Label htmlFor="message">Company / Organization</Label>
                                        <Textarea className='mt-4' placeholder="Company or Organization Name..." id="contact-message" />
                                    </div>
                                    <div>
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea className='mt-4 h-30' placeholder="Tell me about your project or position..." id="contact-message" />
                                    </div>
                                </div>
                                <Button variant="secondary" className='mt-8'>Submit Inquiry&nbsp;<Submit /></Button>
                            </div>
                        </TabsContent>
                        <TabsContent value="Collaborate">
                            <div className=''>
                                <div className="mb-8 space-y-1">
                                    <h1 className="text-3xl">Let's Build Together</h1>
                                    <p className="text-sm text-white/40">Share your idea and how we can collaborate</p>
                                </div>
                                <div className="space-y-10 md:flex gap-8">
                                    <div>
                                        <Label htmlFor="message">Name</Label>
                                        <Input className='mt-4' placeholder="Your Name" type="Name" />
                                    </div>
                                    <div>
                                        <Label htmlFor="message">Email</Label>
                                        <Input className='mt-4' placeholder="Your Email" type="message" />
                                    </div>
                                </div>
                                <div className="space-y-6 w-full mt-8 md:mt-0">
                                    <div>
                                        <Label htmlFor="message">Project Name</Label>
                                        <Textarea className='mt-4' placeholder="Name of your project" id="contact-message" />
                                    </div>
                                    <div>
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea className='mt-4 h-30' placeholder="Share your collaboration idea..." id="contact-message" />
                                    </div>
                                </div>
                                <Button variant="secondary" className='mt-8'>Let's Collaborate&nbsp;<Submit /></Button>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default Contact