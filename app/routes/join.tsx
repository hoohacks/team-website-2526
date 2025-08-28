import Navbar from "app/navbar";
import Footer from "app/footer/footer"


export default function Join() {
    return (
        <>
            <div className="min-h-screen bg-transparent text-white flex flex-col">
                <Navbar/>

                <div className="flex flex-1 items-center justify-center px-6 mt-30">
                    <div className="max-w-2xl text-center space-y-12">
                        {/* Recruitment Section */}
                        <div className="space-y-6">
                            <h1 className="text-5xl font-bold">Fall Recruitment</h1>
                            <p className="text-lg text-gray-300">
                                Our recruitment begins in <span className="font-semibold">September</span> and is
                                typically open
                                for two weeks before interviews begin. No prior experience is required to apply!
                            </p>
                            <a href="https://forms.cloud.microsoft/r/jXLg61qRTb">
                                <button
                                    className="w-40 px-6 py-3 rounded-lg bg-[#B1CCFF] text-black font-semibold hover:bg-blue-500 transition">
                                    Join
                                </button>
                            </a>
                        </div>

                        {/* Newsletter Section */}
                        <div className="space-y-6 mt-30 mb-30">
                            <h1 className="text-5xl font-bold">Subscribe to our Newsletter</h1>
                            <p>Join our newsletter to get the latest HooHacks news, events, and opportunities.</p>
                            <a href="https://hoohacks.us17.list-manage.com/subscribe?u=8db3fa0f566f9edea113259df&id=b74b5fd33d">
                                <button
                                    type="submit"
                                    className="w-40 px-6 py-3 rounded-lg bg-[#B1CCFF] text-black font-semibold hover:bg-blue-500 transition"
                                >
                                    Subscribe
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
