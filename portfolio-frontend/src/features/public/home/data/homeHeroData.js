/**
 * HOME HERO DATA CONFIG
 * =============================
 *
 * PURPOSE:
 * - Decouple content from UI
 * - Enable scalability (CMS / A-B testing / localization)
 */

import HeroAnimation from "@/assets/lottie/computer.lottie";
import HandAnimation from "@/assets/lottie/waving-hand.lottie";

export const homeHeroDate = {
    greeting: "Hi, I'm",
    name: "Avinash",

    subtitle: "Full Stack Developer passionate about scalable systems",

    description: "I specialize in building high-performance web applications and scalable backenc systems. With a strong foundation in both frontend and backend technology stacks, I create seamless user experiences and robust server-side solutions.",

    animations: {
        background: HeroAnimation,
        hand: HandAnimation,
    },

    ui: {
        showHand: true,
        backgroundOpacity: 0.2,
    },

    buttons: [
        {
            label: "View Projects",
            link: "/projects",
            type: "primary",
        },
        {
            label: "Download CV",
            action: "downloadCV",
            type: "secondary",
        },
    ],
};