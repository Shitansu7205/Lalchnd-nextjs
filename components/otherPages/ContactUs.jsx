"use client";
import React from "react";
import Image from "next/image";
import {
    ArrowUpRight,
    Camera,
    Gem,
    Globe,
    Headphones,
    Mail,
    MapPin,
    Navigation,
    Phone,
    Send,
    ShieldCheck,
    Share2,
} from "lucide-react";
import toast from "react-hot-toast";
const storeLocations = [
    {
        title: "Master Canteen",
        city: "Bhubaneswar",
        location: "Station Square, Unit 3, Bhubaneswar",
        phone: "0674 - 2534016 / 17 / 18",
        image: "/images/lalchnd/store/bhubaneswar/master-canteen/1.webp",
        mapUrl: "https://maps.app.goo.gl/ptDkSMHomFuLYsg89",
    },
    {
        title: "Raghunathpur",
        city: "Bhubaneswar",
        location: "Raghunathpur, Nandankanan Road, Bhubaneswar",
        phone: "0674 - 2746910 / 51 / 52",
        image: "/images/lalchnd/store/bhubaneswar/raghunathpur/1.webp",
        mapUrl: "https://maps.app.goo.gl/hpNaJ71SYubyMZ3R8",
    },
    {
        title: "Cantonment Road",
        city: "Cuttack",
        location: "Cantonment Road, Cuttack, Odisha",
        phone: "0671 - 2309258 / 2309259",
        image: "/images/lalchnd/store/cuttack/cantonment/1.webp",
        mapUrl: "https://maps.app.goo.gl/PeR1fPWB3YdxMEL6A",
    },
    {
        title: "CDA Sector VI",
        city: "Cuttack",
        location: "CDA Sector VI, Cuttack, Odisha",
        phone: "0671 - 2503717 / 72 / 73",
        image: "/images/lalchnd/store/cuttack/cda/1.webp",
        mapUrl: "https://maps.app.goo.gl/fTHF9qkYx8cuR8nC7",
    },
    {
        title: "Berhampur",
        city: "Berhampur",
        location: "Dharma Nagar, Aska Road, Berhampur, Odisha",
        phone: "0680 - 2221404 / 02 / 03",
        image: "/images/lalchnd/store/berhampur/1.webp",
        mapUrl: "https://maps.app.goo.gl/yQ4Patxj98WoAx1i6",
    },
    {
        title: "New Delhi",
        city: "Delhi",
        location: "A-57B, Vasant Kunj Marg, Mahipalpur, New Delhi",
        phone: "+91 8800488800",
        image: "/images/lalchnd/store/delhi/1.webp",
        mapUrl: "https://maps.app.goo.gl/YjdyrzPbqg2aAV7S8",
    },
];


export default function ContactUs() {

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            storeCity: formData.get("storeCity"),
            subject: formData.get("subject"),
            message: formData.get("message"),
        };


        try {
            const response = await fetch("/api/v1/enquiry/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Something went wrong.");
            }

            console.log("Contact submitted:", result);

            form.reset();

            toast.success(result.message);
        } catch (error) {
            console.error("Contact form error:", error);

            toast.error(
                error.message ||
                "Unable to send your message right now."
            );
        }
    };

    return (
        <>
            <link rel="stylesheet" href="/css/contact/contact-us.css" />
            <section className="s-contact-us section-padding-bottom-40 section-padding-top-40">
                <div className="container-full-2">


                    <div className="contact-store-grid">
                        {storeLocations.map((store) => (
                            <article
                                className="contact-store-card hover-img3"
                                key={store.title}
                            >
                                <div
                                    className="contact-store-image img-style3"
                                    style={{ borderRadius: 0 }}
                                >
                                    <Image
                                        src={store.image}
                                        alt={`${store.title} Lalchnd Jewellers showroom`}
                                        fill
                                        sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                                    />
                                </div>
                                <div className="contact-store-content">
                                    <p className="store-city text-caption text-main-4">
                                        {store.city}
                                    </p>
                                    <h4 className="store-title fw-normal">Lalchnd Jewellers</h4>
                                    <ul className="store-info-list">
                                        <li>
                                            <span className="store-info-icon">
                                                <MapPin size={15} strokeWidth={1.8} />
                                            </span>
                                            <span className="text-main-4">{store.location}</span>
                                        </li>
                                        <li>
                                            <span className="store-info-icon">
                                                <Phone size={15} strokeWidth={1.8} />
                                            </span>
                                            <a
                                                href={`tel:${store.phone.replace(/[^\d+]/g, "")}`}
                                                className="link text-main-4"
                                            >
                                                {store.phone}
                                            </a>
                                        </li>
                                    </ul>
                                    <a
                                        href={store.mapUrl}
                                        className="home-cta-btn tf-btn btn-fill animate-btn contact-us-btn"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Navigation size={14} strokeWidth={1.8} />
                                        View On Map
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="contact-connect-grid">
                        <div className="contact-map-panel">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d730709.305226829!2d84.57717468075467!3d19.927489964349334!3m2!1i1024!2i768!4f13.1!2m1!1sLalchnd%20Jewellers%20Odisha!5e1!3m2!1sen!2sus!4v1789462932042!5m2!1sen!2sus"
                                width="600"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="strict-origin-when-cross-origin"
                            ></iframe>
                        </div>

                        <div className="right-col contact-form-panel">
                            <h3 className="title fw-normal">Get In Touch</h3>
                            <p className="sub-title text-main-4">
                                Contact us by phone or email to get help from our qualified team.
                            </p>
                            <form
                                className="form-contact style-border"
                                onSubmit={handleSubmit}
                            >
                                <div className="form-content">
                                    <div className="cols tf-grid-layout sm-col-2">
                                        <fieldset>
                                            <input type="text" placeholder="Name *"  name="name"
                                        required />
                                        </fieldset>
                                        <fieldset>
                                            <input type="tel" placeholder="Phone *"  name="phone"
                                        required />
                                        </fieldset>
                                    </div>
                                    <div className="cols tf-grid-layout sm-col-2">
                                        <fieldset>
                                            <input type="email" placeholder="Email *"  name="email"
                                        required />
                                        </fieldset>
                                        <fieldset className="contact-select-field">
                                            <select
                                                defaultValue=""
                                                name="storeCity"
                                                required
                                                aria-label="Select store city"
                                            >
                                                <option value="" disabled>
                                                    Select Store City *
                                                </option>
                                                {[
                                                    ...new Set(storeLocations.map((store) => store.city)),
                                                ].map((city) => (
                                                    <option value={city} key={city}>
                                                        {city}
                                                    </option>
                                                ))}
                                            </select>
                                            <ArrowUpRight size={15} strokeWidth={1.8} />
                                        </fieldset>
                                    </div>
                                    <fieldset>
                                        <input type="text" placeholder="Subject" name="subject" />
                                    </fieldset>
                                    <textarea placeholder="Message" defaultValue={""} name="message" required />
                                </div>
                                <button
                                    type="submit"
                                    className="home-cta-btn tf-btn btn-fill animate-btn type-large"
                                >
                                    <Send size={15} strokeWidth={1.8} />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="contact-trust-section">
                        <div className="contact-trust-mark" aria-hidden="true">
                            <Gem size={30} strokeWidth={1.5} />
                        </div>
                        <h2 className="heading-font">
                            We&apos;re always here to help you make the right choice with
                            confidence.
                        </h2>
                        <p className="contact-trust-copy text-main-4">
                            Your trust is our most precious jewel. Experience luxury,
                            authenticity, and unparalleled service with Lalchnd.
                        </p>
                        <div className="contact-trust-points">
                            <div className="contact-trust-point">
                                <ShieldCheck size={22} strokeWidth={1.5} />
                                <span>Authentic craftsmanship</span>
                            </div>
                            <div className="contact-trust-point">
                                <Gem size={22} strokeWidth={1.5} />
                                <span>Timeless collections</span>
                            </div>
                            <div className="contact-trust-point">
                                <Headphones size={22} strokeWidth={1.5} />
                                <span>Personal service</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
