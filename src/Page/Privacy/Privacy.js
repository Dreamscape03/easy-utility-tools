import React from "react";
import { Navbar } from "../../partial/Navbar";
import { Footer } from "../../partial/Footer";
import Style from "./Privacy.module.css";
export const Privacy = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy describes Our policies and procedures on the
          collection, use and disclosure of Your information when You use the
          Service and tells You about Your privacy rights and how the law
          protects You. We use Your Personal data to provide and improve the
          Service. By using the Service, You agree to the collection and use of
          information in accordance with this Privacy Policy. This Privacy
          Policy has been created with the help of the Privacy Policy Generator.
        </p>

        <h2>Interpretation and Definitions</h2>
        <h3>Interpretation</h3>
        <p>
          The words of which the initial letter is capitalised have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in plural.
        </p>

        <h3>Definitions</h3>
        <dl>
          <dt>Account</dt>
          <dd>
            A unique account created for You to access our Service or parts of
            our Service.
          </dd>

          <dt>Affiliate</dt>
          <dd>
            An entity that controls, is controlled by or is under common control
            with a party, where "control" means ownership of 50% or more of the
            shares, equity interest or other securities entitled to vote for
            election of directors or other managing authority.
          </dd>

          <dt>Company</dt>
          <dd>OnlineClipboard.org, India.</dd>

          <dt>Cookies</dt>
          <dd>
            Small files that are placed on Your computer, mobile device or any
            other device by a website, containing the details of Your browsing
            history on that website among its many uses.
          </dd>

          <dt>Country</dt>
          <dd>Bihar, India</dd>

          <dt>Device</dt>
          <dd>
            Any device that can access the Service such as a computer, a cell
            phone or a digital tablet.
          </dd>

          <dt>Personal Data</dt>
          <dd>
            Any information that relates to an identified or identifiable
            individual.
          </dd>

          <dt>Service</dt>
          <dd>The Website.</dd>

          <dt>Service Provider</dt>
          <dd>
            Any natural or legal person who processes the data on behalf of the
            Company. It refers to third-party companies or individuals employed
            by the Company to facilitate the Service, to provide the Service on
            behalf of the Company, to perform services related to the Service or
            to assist the Company in analyzing how the Service is used.
          </dd>

          <dt>Usage Data</dt>
          <dd>
            Data collected automatically, either generated by the use of the
            Service or from the Service infrastructure itself (for example, the
            duration of a page visit).
          </dd>

          <dt>Website</dt>
          <dd>Online Clipboard, accessible from https://onlineclipboard.org</dd>

          <dt>You</dt>
          <dd>
            The individual accessing or using the Service, or the company, or
            other legal entity on behalf of which such individual is accessing
            or using the Service, as applicable.
          </dd>
        </dl>
      </div>
      <Footer />
    </div>
  );
};