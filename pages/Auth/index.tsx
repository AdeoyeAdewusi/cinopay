import React from "react";
import CinoPayLogo from "../../Components/SVG/logoSvg";
import styles from "./styles.module.css";
import PatientSvg from "../../Components/SVG/patientSvg";
import ClinicsSvg from "../../Components/SVG/clinicsSvg";
const Auth = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.innerLg}>
          <CinoPayLogo />
        </div>
        <div className={styles.authOuter}>
          <div className={styles.innerTopCopy}>
            <h1>Welcome to Cinopay, a simple solution to your medical bills</h1>
            <p>
              Are you a patient or a doctor? Please select your type of account
            </p>
          </div>
        </div>
        <div className={styles.authOuter}>
          <div className={styles.auths}>
            <div className={styles.authsCopyDiv}>
              <PatientSvg />
              <div className={styles.authsCopy}>
                <p>Patient Account</p>
                <p>
                  Get to book and pay for your medical appointment with Cinopay
                </p>
              </div>
            </div>
            <div className={styles.authsCopyDiv}>
              <ClinicsSvg />
              <div className={styles.authsCopy}>
                <p>Clinic Account</p>
                <p>Get a database of patients with reliable payment options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
