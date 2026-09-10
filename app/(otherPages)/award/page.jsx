import Footer3 from "@/components/footers/Footer3";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import BreadcrumbBanner from "@/components/common/BreadcrumbBanner";
import React from "react";
import AwardGridPopup from "@/components/common/AwardGridPopup";
export const metadata = {
    title: "Awards || Vemus - Jewelry Ecommerce React Nextjs Template",
    description: "Vemus - Jewelry Ecommerce React Nextjs Template",
};
export default function page() {
    return (
        <>
            <Topbar1 />
            <Header1 parentClass="tf-header" />
            <BreadcrumbBanner
                title="Our Awards & Achievements"
                current="Awards"
                image="https://lalchnd.com/wp-content/uploads/2025/07/WhatsApp-Image-2025-06-23-at-6.03.24-PM-1.jpeg"
            />
            <AwardGridPopup />
            <Footer3 />
        </>
    );
}
