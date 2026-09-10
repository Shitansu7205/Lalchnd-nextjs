import Footer3 from "@/components/footers/Footer3";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import React from "react";
import MediaGridPopup from "@/components/common/MediaGridPopup";
export const metadata = {
    title: "Media || Vemus - Jewelry Ecommerce React Nextjs Template",
    description: "Vemus - Jewelry Ecommerce React Nextjs Template",
};
export default function page() {
    return (
        <>
            <Topbar1 />
            <Header1 parentClass="tf-header" />
            <BreadcrumbBanner
                title="In the News"
                current="Media"
                image="https://lalchnd.com/wp-content/uploads/2026/09/Desktop-2560-x-931.jpg.jpeg"
            />
            <MediaGridPopup />
            <Footer3 />
        </>
    );
}
