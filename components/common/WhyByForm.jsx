import React from "react";

export default function WhyByForm() {
    return (
        <div
            className="offcanvas offcanvas-end canvas-sidebar canvas-description"
            id="whyLalchnd"
        >
            <div className="canvas-header">
                <h3 className="title fw-normal text-uppercase">
                    Why Choose Lalchnd
                </h3>

                <span
                    className="icon-close link icon-close-popup"
                    data-bs-dismiss="offcanvas"
                />
            </div>

            <div className="canvas-body">
                <ul className="des-list">
                    <li>
                        <h5 className="title h5 fw-normal text-uppercase">
                            Assured Jewellery Quality
                        </h5>

                        <p className="text text-main-4">
                            Hallmarked gold, certified diamonds and finely crafted silver, each made to the highest standard of purity and workmanship. Every piece comes with the quality details you need to buy with complete confidence.

                        </p>
                    </li>

                    <li>
                        <h5 className="title h5 fw-normal text-uppercase">
                            Transparent Pricing
                        </h5>

                        <p className="text text-main-4">
                           Gold value, stone value and making charges are itemised clearly on every bill. You always know exactly what you are paying for, with no hidden costs.
                        </p>
                    </li>

                    <li>
                        <h5 className="title h5 fw-normal text-uppercase">
                            Easy, Fair Exchange
                        </h5>

                        <p className="text text-main-4">
                            Your old jewellery is valued clearly and fairly, with every deduction explained and friendly help at every Lalchnd showroom.
                        </p>
                    </li>

                </ul>
            </div>
        </div>
    );
}