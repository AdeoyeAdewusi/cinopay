import React from "react";
import Layout from "../../Components/Layout";
import Cover from "../../Components/Layout/Cover";
import styles from "./styles.module.css";
import DoctorsSvg from "../../Components/SVG/doctorsSvg";
import DermatologySvg from "../../Components/SVG/dermatologySvg";
import FertilitySvg from "../../Components/SVG/fertilitySvg";
import EyecareSvg from "../../Components/SVG/eyecareSvg";
import DentalCareSvg from "../../Components/SVG/dentalCareSvg";
import FaqSvg from "../../Components/SVG/faqSvg";
import { AiOutlineRight } from "react-icons/ai";
const HomePage = () => {
  return (
    <Layout>
      <Cover>
        <div className={styles.pay}>
          <div className={styles.payDis}>
            <h1> Pay your healthcare bills in affordable Installments.</h1>
            <p>
              We provide various affordable means of health care bills payments.
              No worries on paying huge sums for your health care all at once.
            </p>
            <DoctorsSvg />
          </div>
        </div>
      </Cover>
      <Cover>
        <div className={styles.pay}>
          <div className={styles.payDis}>
            <p>DELIVER TIMELY CARE FOR EVERYONE</p>
            <h2> Range of Services Covered</h2>
            <p>
              We cover what insurance does not, no matter the circumstances,
              Elective treatments and day-care surgeries.
            </p>
            <div className={styles.sections}>
              <div className={styles.dermatology}>
                <DermatologySvg />
                <p>Dermatology</p>
              </div>
              <div className={styles.fertiity}>
                <FertilitySvg />
                <p>Fertility</p>
              </div>
              <div className={styles.eyecare}>
                <EyecareSvg />
                <p>Eye Care</p>
              </div>
              <div className={styles.dentalcare}>
                <DentalCareSvg />
                <p>Dental Care</p>
              </div>
              <div className={styles.atlete}>
                <img
                  src="/Assets/Images/olympicathlete.png"
                  width={82}
                  height={64}
                />
                <p>Dermatology</p>
              </div>
            </div>
          </div>
        </div>
      </Cover>
      <Cover>
        <div className={styles.about}>
          <div>
            <div>
              <p className={styles.hea}>Health, Our Priority</p>
              <h2 className={styles.how}>
                How to Grow your Practice with Cinopay
              </h2>
            </div>
            <div className={styles.offer}>
              <p>Offer Cinopay to all your customers </p>
              <p>
                Offer Cinopay to all your customers. Serve 50% more customers
                with instant 0% EMIs for all procedures
              </p>
            </div>
            <div className={styles.login}>
              <p>Login to the Cinopay Clinic account</p>
              <p>100% digital, paperless registration process</p>
            </div>
            <div className={styles.unlock}>
              <p>Unlock instant credit for your customers</p>
              <p>100% digital, 24X7 credit assessment for your customers.</p>
            </div>
            <div className={styles.recieve}>
              <p>Receive Loans in little or no time.</p>
              <p>
                Guaranteed credit in your Cinopay account within 30 minutes, for
                your appointments.
              </p>
            </div>
          </div>
          <img src="/Assets/Images/iPhone13.png" width={610} height={600} />
        </div>
      </Cover>

      <div className={styles.faqBg}>
        <Cover>
          <div className={styles.faq}>
            <div className={styles.generalFaq}>
              <h1>General FAQs</h1>
              <p>We’ve pulled together some basics to help you get started.</p>
              <FaqSvg />
            </div>
            <div className={styles.mainFaqs}>
              <div>
                <p>How does Cinopay work?</p>
                <AiOutlineRight />
              </div>
              <div>
                <p>How do I login?</p>
                <AiOutlineRight />
              </div>
              <div>
                <p>Who can apply for financing with Cinopay?</p>
                <AiOutlineRight />
              </div>
              <div>
                <p>How do I contact Cinopay?</p>
                <AiOutlineRight />
              </div>
              <div>
                <p>Are there any fees or interest?</p>
                <AiOutlineRight />
              </div>
              <div>
                <p>Which payment methods does Cinopay offer?</p>
                <AiOutlineRight />
              </div>
              <div>
                <p>
                  I need to cancel / I want a refund / My treatment cost has
                  changed
                </p>
                <AiOutlineRight />
              </div>
              <div>
                <p>Will this affect my credit score?</p>
                <AiOutlineRight />
              </div>
              <div>
                <p>How do I request for crowd funding in Cinopay?</p>
                <AiOutlineRight />
              </div>
            </div>
          </div>
        </Cover>
      </div>
    </Layout>
  );
};

export default HomePage;
