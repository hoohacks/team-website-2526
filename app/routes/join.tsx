import Navbar from "app/navbar";
import Footer from "app/footer/footer"
import Button from "app/components/Button";
import Reveal from "app/components/Reveal";


export default function Join() {
    return (
        <>
            <div className="min-h-screen bg-transparent text-white flex flex-col">
                <Navbar />

                <div className="flex flex-1 items-center justify-center px-6 mt-30">
                    <div className="max-w-2xl text-center space-y-12">
                        {/* Recruitment Section */}
                        <Reveal className="space-y-6">
                            <h1 className="text-4xl sm:text-5xl font-bold text-balance bg-linear-to-b from-white to-[#B1CCFF] bg-clip-text text-transparent">Fall Recruitment</h1>
                            <p className="text-lg text-white/80">
                                Our recruitment begins <span className="font-semibold text-white">now</span> and is
                                open until <span className="font-semibold text-white">September 4</span>, after which interviews begin. No prior experience is required to apply!
                            </p>
                            <Button href="https://forms.cloud.microsoft/r/As7Gzt0hAc" className="w-40">Apply</Button>
                        </Reveal>

                        {/* Newsletter Section */}
                        <Reveal delay={150} className="space-y-6 mt-30 mb-30">
                            <h2 className="text-4xl sm:text-5xl font-bold text-balance bg-linear-to-b from-white to-[#B1CCFF] bg-clip-text text-transparent">Subscribe to our Newsletter</h2>
                            <p className="text-lg text-white/80">Join our newsletter to get the latest HooHacks news, events, and opportunities.</p>
                            <Button href="https://hoohacks.us17.list-manage.com/subscribe?u=8db3fa0f566f9edea113259df&id=b74b5fd33d" className="w-40">Subscribe</Button>
                        </Reveal>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
