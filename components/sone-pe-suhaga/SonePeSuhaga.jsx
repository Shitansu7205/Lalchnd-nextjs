"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  CalendarCheck,
  WalletCards,
  CalendarDays,
  Clock3,
  FileText,
  Settings2,
  ShoppingBag,
  CreditCard,
  Percent,
  ShieldCheck,
  UserCheck,
  Wallet,
  TrendingUp,
  Info,
} from "lucide-react";

/* =========================================================
   IMAGE DATA
========================================================= */

const schemeImages = {
  hero: "/images/sone-pe-suhaga/sone-pe-suhaga.jpg",
  scheme: "/images/sone-pe-suhaga/gold-bangle.jpg",
};

/* =========================================================
   TAB DATA
========================================================= */

const schemeTabs = [
  {
    id: "definitions",
    label: "Definitions",
    shortLabel: "Definitions",
    icon: Info,
  },
  {
    id: "instalments",
    label: "Instalments",
    shortLabel: "Instalments",
    icon: Wallet,
  },
  {
    id: "payments",
    label: "Payments",
    shortLabel: "Payments",
    icon: CreditCard,
  },
  {
    id: "appropriation",
    label: "Appropriation & Discount",
    shortLabel: "Discount",
    icon: Percent,
  },
  {
    id: "preclosure",
    label: "Pre-Closure",
    shortLabel: "Pre-Closure",
    icon: Clock3,
  },
  {
    id: "enrolment",
    label: "Enrolment & KYC",
    shortLabel: "KYC",
    icon: UserCheck,
  },
];

/* =========================================================
   DEFINITIONS DATA
========================================================= */

const definitionsData = [
  {
    title: "Enrolment Date",
    description:
      `It's means the date of payment of the first Instalment. In case the first Instalment is paid by cheque, then the Enrolment Date shall 
      be the date on which the cheque amount is credited to LCJ’s account.`,
    icon: CalendarDays,
  },
  {
    title: "Validity Period",
    description:
      `It's means the period ending 365 days from the Enrolment Date.`,
    icon: Clock3,
  },
  {
    title: "Reference Date",
    description:
      `It's means For programs that are pre-closed before the 6th monthly payment has been completed, the day immediately after the receipt of the pre-closure notice from the Customer. For programs, which are pre-closed after the 6th monthly payment has been completed, the day that falls 1 month after the date of receipt of the pre-closure notice from the Customer. 
      For completed programs, the first day of the 11th month of the Program.`,
    icon: FileText,
  },
  {
    title: "Appropriation Period",
    description:
      `It's means the period starting from the Reference Date and extending to the end of the Validity Period.`,
    icon: Settings2,
  },
  {
    title: "Purchase Date",
    description:
      `It's means the date when the Customer appropriates the accumulated advance and associated 
      discount against jewellery selected from an LCJ store, subject to the terms and conditions herein or the default option date.`,
    icon: ShoppingBag,
  },
  {
    title: "Pre-closure",
    description:
      `It's means when the Customer expressly opts out of the Program before payment of all 11 (eleven) Instalments by notifying the Company.`,
    icon: Clock3,
  },
  {
    title: "Advance",
    description:
      `It's means an individual monthly Instalment.`,
    icon: Wallet,
  },
  {
    title: "Accumulated Advances",
    description:
      `It's means the sum of Instalments received by LCJ up to the Reference Date.`,
    icon: TrendingUp,
  },
  {
    title: "Prevailing Gold Rate",
    description:
      `It's means the Company’s gold rate prevailing at the specific time of the transaction. The prevailing Company’s gold rate is an intra-day rate that depends on multiple factors, including spot rate in the open.`,
    icon: ShieldCheck,
  },
  {
    title: "Discount",
    description:
      `Applicable discount on making charges`,
    icon: Percent,
  },
];

/* =========================================================
   INSTALMENT DATA
========================================================= */

const instalmentData = [
  {
    title: "Monthly Instalment",
    value: "₹2,000+",
    description:
      `Customer has to pay 11 (eleven) fixed monthly Instalments of a minimum of 2,000/- (Rupees Two Thousand) or above in multiples of Rs. 1,000/- (Rupees One Thousand).`,
    icon: Wallet,
  },
  {
    title: "Fixed Instalment Amount",
    value: "11 Instalments",
    description:
      `Once the first Instalment is paid, the Instalment amount cannot be changed. A new separate program can be added by the Customer for any additional amount.`,
    icon: CalendarDays,
  },
  {
    title: "Appropriation Period",
    value: "Eligible Period",
    description:
      `Customers will be eligible to avail of the accumulated advances and any associated discount only during the Appropriation Period, subject to the
Terms and Conditions herein, by purchase of jewellery from LCJ stores.`,
    icon: Clock3,
  },
  {
    title: "Monthly Due Date",
    value: "Next Calendar Month",
    description:
      `The due date of each Instalment must be the same date of the next calendar month as the date of enrolment. E.g. Enrolment Date 1-Jan, next Due Date will be 1-Feb.`,
    icon: CalendarCheck,
  },
  {
    title: "Month-End Due Date",
    value: "Last Date of Month",
    description:
      ` In case the month does not have the last date on which the Instalment started, then it shall be the last date of the respective month. For example: if 1st Instalment started on 31st Jan, then Due Date for next Instalment will be 28th / 29th Feb, 31st March, 30th April, respectively and so on for the remaining period of the program.`,
    icon: CalendarDays,
  },
  {
    title: "Delayed Instalment Payment",
    value: "Period Extended",
    description:
      `In case of delay in payment of the monthly Instalments, the scheme period shall be extended equivalent to the extent of delay in payment of instalment. LCJ shall not be liable under any circumstances to pay any benefit other than discounts on purchase of jewellery as mentioned in the Clause No. 5 (a).`,
    icon: AlertCircle,
  },
];

/* =========================================================
   PAYMENT DATA
========================================================= */

const paymentData = [
  {
    title: "Accepted Payment Methods",
    description:
      `The payment for monthly Instalments can be done through Cash (not exceeding a sum of 1,99,999/- cumulatively for the period of the program), Credit/Debit cards, Cheque, Bank Transfer and UPI. Payment/exchange through General Exchange Program are not permitted. International Card/ Transfers for Online Payments will not be accepted. Payments can be made at stores or through the program website as may be applicable.`,
    icon: CreditCard,
  },
  {
    title: "Online Payments",
    description:
      `LCJ shall not be responsible for any online payment failure money being debited from the Customer’s account. Customers are requested to check with banks or service providers for such payment failures. It is the responsibility of the account holder enter details correctly.`,
    icon: TrendingUp,
  },
  {
    title: "Payment Failure",
    description:
      `LCJ will not be responsible or liable to send reminders payments.`,
    icon: CreditCard,
  },
  {
    title: "Payment Receipt",
    description:
     `The customer can ask for receipt from LCJ Stores only after the clearance of payment. In case of Standing Instruction enabled accounts, the Program cannot be closed prior to the Appropriation Period, unless the benefit holder has cancelled the standing Instruction by submitting the required form to LCJ.`,
    icon: FileText,
  },
  {
    title: "Booking Transaction Record",
    description:
      `At the time of joining the program, Customer will be issued a Booking Transaction Record (“BTR”) which must be produced and transactions recorded at the time of making of payments.`,
    icon: FileText,
  },
  {
    title: "Loss of BTR",
    description:
      `Loss of BTR must be intimated in writing to the LCJ and upon submission of the affidavit, indemnity and other documents as deemed necessary by the LCJ, a duplicate TRB may be isued to you.`,
    icon: FileText,
  },
];

/* =========================================================
   APPROPRIATION / DISCOUNT DATA
========================================================= */

const discountData = [
   {
    title: "Accepted Payment Methods",
    description:
      `The Customer is mandatorily required to appropriate the accumulated advance and associated discount against jewellery from LCJ store on the completion of 365 days from the Enrolment Date.`,
    icon: CreditCard,
  },
   {
    title: "Accepted Payment Methods",
    description:
      `This discount will be applicable as per the table given below as per the amount of Instalments paid. Any purchases over and above the accumulated amount of instalments willattract normal making charges.`,
    icon: CreditCard,
  },
];

/* =========================================================
   PRE-CLOSURE DATA
========================================================= */

const preClosureData = [
  {
    title: "Pre-Closure Eligibility",
    description:
      `The Customer will have the option to avail of pro-rata discounts upon pre-closing the program only if a minimum of 6 [six] monthly Instalments are paid.`,
    icon: CalendarCheck,
  },
  {
    title: "Pro-Rata Discount",
    description:
      `The pro-rata discount availed by the customer will also be adjusted in said transaction. Alternatively, the Customer may seek a refund of aggregated Instalments paid by the Customer till the notice of pre-closure is received by Lalchnd at its sole discretion. The Customer will also be provided with prorated discount voucher can avail Discount under the scheme as per table below of six months’ validity that the Customer can utilise to for purchase of jewellery from the Company subject to the Customer having made at least 6 (six) monthly Instalments and other applicable terms and conditions herein. Said discount shall only be useable on a purchase of jewellery of value equal to or greater than the accumulated advances under this program plus the discount itself.`,
    icon: Percent,
  },
  {
    title: "Pre-Closure Before 6 Instalments",
    description:
      ` In the event the Customer has pre-closed without paying a minimum of six Instalments, the Customer will not be eligible for any discount. The customer can utilise the accumulated  Instalments to purchase any jewellery or receive a refund of the accumulated advances.`,
    icon: WalletCards,
  },
];

const discountTableData = [
  {
    instalments: "11 Months",
    discount: "100%",
    purchaseFrom: "12th Month",
  },
  {
    instalments: "10 Months",
    discount: "90%",
    purchaseFrom: "11th Month",
  },
  {
    instalments: "9 Months",
    discount: "80%",
    purchaseFrom: "10th Month",
  },
  {
    instalments: "8 Months",
    discount: "70%",
    purchaseFrom: "9th Month",
  },
  {
    instalments: "7 Months",
    discount: "60%",
    purchaseFrom: "8th Month",
  },
  {
    instalments: "6 Months",
    discount: "50%",
    purchaseFrom: "7th Month",
  },
];

/* =========================================================
   ENROLMENT / KYC DATA
========================================================= */

const enrolmentData = [
  {
    title: "Customer Enrolment",
    description:
      `Only individuals above the age of 18 can enrol into the Program, subject to KYC requirements as applicable by law. Other entities like companies, partnership firms or proprietorship concerns or trusts or Hindu Undivided Family (HUF) or NRI Customers cannot enrol.`,
    icon: UserCheck,
  },

];


/* =========================================================
   REUSABLE INFO CARD
========================================================= */

function InfoCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="sps-info-card">
      <div className="sps-info-icon">
        <Icon />
      </div>

      <div className="sps-info-content">
        <h4>{item.title}</h4>

        {item.value && (
          <span className="sps-info-value">
            {item.value}
          </span>
        )}

        <p className="sub-title">{item.description}</p>
      </div>
    </div>
  );
}

/* =========================================================
   DEFINITIONS TAB
========================================================= */

function DefinitionsTab() {
  return (
    <div className="sps-tab-layout">

      <div className="sps-tab-content">

        <div className="sps-section-heading">
          <span>SCHEME DETAILS</span>

          <h2 className="heading-font">Definitions</h2>

          <p className="s-sub-title">
            Here are the key terms you need to know about the
            Sone Pe Suhaga Gold Savings Scheme.
          </p>
        </div>

        <div className="sps-definition-grid">

          {definitionsData.map((item, index) => (
            <InfoCard
              key={`${item.title}-${index}`}
              item={item}
            />
          ))}

        </div>

      </div>

    

    </div>
  );
}

/* =========================================================
   INSTALMENTS TAB
========================================================= */

function InstalmentsTab() {
  return (
    <div className="sps-standard-tab">

      <div className="sps-section-heading">

        <span>SCHEME DETAILS</span>

        <h2 className="heading-font">Instalments</h2>

        <p className="s-sub-title">
          Understand the instalment structure and important
          payment requirements of the scheme.
        </p>

      </div>

      <div className="sps-card-grid">

        {instalmentData.map((item, index) => (
          <InfoCard
            key={`${item.title}-${index}`}
            item={item}
          />
        ))}

      </div>

    </div>
  );
}

/* =========================================================
   PAYMENTS TAB
========================================================= */

function PaymentsTab() {
  return (
    <div className="sps-standard-tab">

      <div className="sps-section-heading">

        <span>PAYMENT INFORMATION</span>

        <h2 className="heading-font">Payments</h2>

        <p className="s-sub-title">
          Multiple payment options are available subject to
          Lalchnd Jewellers&apos; applicable payment terms.
        </p>

      </div>

      <div className="sps-card-grid">

        {paymentData.map((item, index) => (
          <InfoCard
            key={`${item.title}-${index}`}
            item={item}
          />
        ))}

      </div>

    </div>
  );
}

/* =========================================================
   APPROPRIATION TAB
========================================================= */

function AppropriationTab() {
  return (
    <div className="sps-standard-tab">

      <div className="sps-section-heading">

        <span>SCHEME BENEFITS</span>

        <h2 className="heading-font">Appropriation &amp; Discount</h2>

        <p className="s-sub-title">
          The applicable discount is linked to the period
          completed under the scheme.
        </p>

      </div>

      <div className="sps-discount-wrapper">

        {discountData.map((item, index) => (
          <InfoCard
            key={`${item.title}-${index}`}
            item={item}
          />
        ))}

      </div>


    </div>
  );
}

/* =========================================================
   PRE-CLOSURE TAB
========================================================= */

function PreClosureTab() {
  return (
    <div className="sps-standard-tab">

  <div className="sps-section-heading">
    <span>SCHEME OPTIONS</span>

    <h2 className="heading-font">Pre-Closure</h2>

    <p className="s-sub-title">
      Important information regarding closure of the scheme
      before completion of the applicable period.
    </p>
  </div>

  {/* Pre-Closure Information */}
  <div>
    {preClosureData.map((item, index) => (
      <InfoCard
        key={`${item.title}-${index}`}
        item={item}
      />
    ))}
  </div>

  {/* Discount Table */}
  <div className="sps-discount-table-wrapper">

    <div className="sps-discount-table">
      <table>
        <thead>
          <tr>
            <th>Monthly Instalments</th>
            <th>Discount on Making Charges</th>
            <th>Date of Purchase On or After</th>
          </tr>
        </thead>

        <tbody>
          {discountTableData.map((item, index) => (
            <tr key={`${item.instalments}-${index}`}>
              <td>{item.instalments}</td>
              <td>{item.discount}</td>
              <td>{item.purchaseFrom}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  </div>

</div>
  );
}

/* =========================================================
   ENROLMENT TAB
========================================================= */

function EnrolmentTab() {
  return (
    <div className="sps-standard-tab">

      <div className="sps-section-heading">

        <span>JOIN THE SCHEME</span>

        <h2 className="heading-font">Enrolment &amp; KYC</h2>

        <p className="s-sub-title">
          Complete the enrolment process with the required
          customer information and KYC documentation.
        </p>

      </div>

      <div>

        {enrolmentData.map((item, index) => (
          <InfoCard
            key={`${item.title}-${index}`}
            item={item}
          />
        ))}

      </div>

    </div>
  );
}

/* =========================================================
   TAB CONTENT SWITCHER
========================================================= */

function TabContent({ activeTab }) {

  switch (activeTab) {

    case "definitions":
      return <DefinitionsTab />;

    case "instalments":
      return <InstalmentsTab />;

    case "payments":
      return <PaymentsTab />;

    case "appropriation":
      return <AppropriationTab />;

    case "preclosure":
      return <PreClosureTab />;

    case "enrolment":
      return <EnrolmentTab />;

    default:
      return <DefinitionsTab />;
  }
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function SonePeSuhaga() {

  const [activeTab, setActiveTab] = useState("definitions");

  return (
    <>
      <link
        rel="stylesheet"
        href="/css/sonepesuhaga/SonePeSuhaga.css"
      />

      <section className="sps-page">

        {/* =====================================================
            HERO
        ===================================================== */}

        <div className="sps-hero">

          <div className="sps-decoration sps-decoration-left" />

          <div className="sps-decoration sps-decoration-right" />

          <div className="sps-hero-inner">

            <div className="sps-brand-line">

             

            </div>

            

            

            <h1 className="heading-font">
              Gold Savings <span className="highlight-font">Scheme</span>
            </h1>

            <p className="s-sub-title">
              Small Steps. Bigger Dreams. Your Golden Future Starts Here.
            </p>

            

          </div>

        </div>

        {/* =====================================================
            TABS
        ===================================================== */}

        <div className="sps-container">

          <div className="sps-tabs-wrapper">

            <div className="sps-tabs">

              {schemeTabs.map((tab) => {

                const Icon = tab.icon;

                return (
                  <button
                    type="button"
                    key={tab.id}
                    className={`sps-tab-button ${
                      activeTab === tab.id
                        ? "active"
                        : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >

                    <Icon className="sps-tab-icon" />

                    <h6 className="sps-tab-desktop">
                      {tab.label}
                    </h6>

                    <h6 className="sps-tab-mobile">
                      {tab.shortLabel}
                    </h6>

                  </button>
                );

              })}

            </div>

          </div>

          {/* ===================================================
              TAB PANEL
          =================================================== */}

          <div className="sps-panel">

            <TabContent activeTab={activeTab} />

          </div>

          

        </div>

      </section>
    </>
  );
}