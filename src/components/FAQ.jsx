import React from 'react'

import FaqQuestion from '../components/FaqQuestion';

function FAQ() {
    return (
        <div>
            <div className="faq-section">
                <div className="title">
                    <h2>Frequently Asked Questions</h2>
                </div>

                <FaqQuestion
                    q="What is Netflix?"
                    a="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                     You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
                />

                <FaqQuestion
                    q="How much does Netflix cost?"
                    a="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
                />

                <FaqQuestion
                    q="Where can i watch ?"
                    a=" Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
                />



            </div>
        </div>
    )
}

export default FAQ;