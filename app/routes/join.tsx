import Navbar from "app/navbar";
import Footer from "app/footer/footer"
import Button from "app/components/Button";
import Reveal from "app/components/Reveal";

/* ── Off-season. Fall recruitment is closed. ────────────────────────────────
   To bring it back next fall:
     1. Uncomment the two Reveal blocks below (Fall Recruitment, Interest
        Meeting Slides) and the SLIDES constants.
     2. Update the application URL, the closing date, and SLIDES_ID.
     3. Flip RECRUITING to true in app/recruiting.ts — that re-labels /join
        from "Newsletter" to "Join" in the navbar and footer and swaps the
        bar's button to Apply. Update APPLY_FORM_URL / APPLY_DEADLINE there.
     4. Restore the Reveal delays: recruitment 0, slides 150, newsletter 300.

   Interest meeting deck, shared view-only from Drive. Swap this ID each fall.
   The `ouid` and `rtpof` params on the Drive share link are the owner's
   account state, not the file, so they're dropped here.

   const SLIDES_ID = "1lw58XYEMH4_qsStbhQwwztiqnGrAOBpw";
   const SLIDES_VIEW_URL = `https://docs.google.com/presentation/d/${SLIDES_ID}/preview`;
   ──────────────────────────────────────────────────────────────────────── */

export default function Join() {
    return (
        <>
            <div className="min-h-screen bg-transparent text-white flex flex-col">
                <Navbar />

                <div className="flex flex-1 items-center justify-center px-6 mt-30">
                    <div className="max-w-2xl text-center space-y-12">
                        {/* Recruitment Section — closed for now.
                            <Reveal className="space-y-6">
                                <h1 className="text-4xl sm:text-5xl font-bold text-balance bg-linear-to-b from-white to-[#B1CCFF] bg-clip-text text-transparent">Fall Recruitment</h1>
                                <p className="text-lg text-white/80">
                                    Our recruitment begins <span className="font-semibold text-white">now</span> and is
                                    open until <span className="font-semibold text-white">September 4</span>, after which interviews begin. No prior experience is required to apply!
                                </p>
                                <Button href="https://forms.cloud.microsoft/r/As7Gzt0hAc" className="w-40">Apply</Button>
                            </Reveal>
                        */}

                        {/* Interest Meeting Slides — linked rather than embedded. The
                            deck is an uploaded .pptx, and Google's conversion clips
                            overflowing text in the inline player; the full Slides view
                            has the room to lay it out properly.

                            <Reveal delay={150} className="space-y-6 mt-30">
                                <h2 className="text-4xl sm:text-5xl font-bold text-balance bg-linear-to-b from-white to-[#B1CCFF] bg-clip-text text-transparent">Interest Meeting Slides</h2>
                                <p className="text-lg text-white/80">Couldn't make it? Here's the full deck from our fall interest meeting.</p>
                                <Button href={SLIDES_VIEW_URL} target="_blank" className="w-40">View Slides</Button>
                            </Reveal>
                        */}

                        {/* Newsletter Section — the page's only section off-season, so
                            it leads instead of trailing the recruitment blocks. */}
                        <Reveal className="space-y-6 mb-30">
                            <h2 className="text-4xl sm:text-5xl font-bold text-balance bg-linear-to-b from-white to-[#B1CCFF] bg-clip-text text-transparent">Subscribe to our Newsletter</h2>
                            <p className="text-lg text-white/80">Get the latest HooHacks news, events, and opportunities in your inbox.</p>
                            <Button href="https://hoohacks.us17.list-manage.com/subscribe?u=8db3fa0f566f9edea113259df&id=b74b5fd33d" className="w-40">Subscribe</Button>
                        </Reveal>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
