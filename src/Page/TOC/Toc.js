import React from "react";
import { Navbar } from "../../partial/Navbar";
import { Footer } from "../../partial/Footer";
import Style from "./Toc.module.css";
export const Toc = () => {
  return (
    <div>
      <Navbar />
      <div style={{ fontFamily: "Arial, sans-serif" }} className={Style.container}>
        <h1 style={{ marginBottom: "20px" }}>Terms and Conditions</h1>

        <h2 style={{ marginBottom: "10px" }}>Terms of Use</h2>
        <p style={{ marginBottom: "20px" }}>
          By accessing this Website, available at{" "}
          <a href="https://onlineclipboard.org">https://onlineclipboard.org</a>,
          you agree to comply with these Website Terms and Conditions of Use and
          acknowledge your responsibility to adhere to applicable local laws. If
          you do not agree with any of these terms, you are not permitted to
          access this site. The materials on this Website are protected by
          copyright and trademark laws.
        </p>

        <h2 style={{ marginBottom: "10px" }}>Use Licence</h2>
        <p style={{ marginBottom: "20px" }}>
          Permission is granted to temporarily download one copy of the
          materials on OnlineClipboard's Website for personal, non-commercial
          transitory viewing only. This is a licence grant, not a transfer of
          title, and under this licence, you may not:
        </p>
        <ul style={{ marginBottom: "20px", paddingLeft: "20px" }}>
          <li>Modify or copy the materials;</li>
          <li>
            Use the materials for any commercial purpose or public display;
          </li>
          <li>
            Attempt to reverse engineer any software on OnlineClipboard's
            Website;
          </li>
          <li>
            Remove any copyright or other proprietary notations from the
            materials; or
          </li>
          <li>
            Transfer the materials to another person or "mirror" the materials
            on any other server.
          </li>
        </ul>
        <p style={{ marginBottom: "20px" }}>
          This licence will terminate upon violation of any of these
          restrictions. Upon termination, your right to view the materials will
          also be terminated, and you must destroy any downloaded materials in
          your possession, whether in printed or electronic format.
        </p>

        <h2 style={{ marginBottom: "10px" }}>Disclaimer</h2>
        <p style={{ marginBottom: "20px" }}>
          All materials on OnlineClipboard's Website are provided "as is."
          OnlineClipboard makes no warranties, whether expressed or implied, and
          hereby disclaims all other warranties. Furthermore, OnlineClipboard
          does not make any representations concerning the accuracy or
          reliability of the use of the materials on its Website or otherwise
          relating to such materials or any sites linked to this Website.
        </p>

        <h2 style={{ marginBottom: "10px" }}>Limitations</h2>
        <p style={{ marginBottom: "20px" }}>
          OnlineClipboard or its suppliers shall not be held accountable for any
          damages arising from the use or inability to use the materials on
          OnlineClipboard's Website, even if OnlineClipboard or an authorised
          representative of this Website has been notified, orally or in
          writing, of the possibility of such damage. Some jurisdictions do not
          allow limitations on implied warranties or limitations of liability
          for incidental damages, so these limitations may not apply to you.
        </p>

        <h2 style={{ marginBottom: "10px" }}>Revisions and Errata</h2>
        <p style={{ marginBottom: "20px" }}>
          The materials appearing on OnlineClipboard's Website may include
          technical, typographical, or photographic errors. OnlineClipboard does
          not warrant that any of the materials on this Website are accurate,
          complete, or current. OnlineClipboard may change the materials
          contained on its Website at any time without notice. OnlineClipboard
          does not commit to updating the materials.
        </p>

        <h2 style={{ marginBottom: "10px" }}>Links</h2>
        <p style={{ marginBottom: "20px" }}>
          OnlineClipboard has not reviewed all of the sites linked to its
          Website and is not responsible for the contents of any such linked
          site. The inclusion of any link does not imply endorsement by
          OnlineClipboard of the site. Use of any linked website is at the
          user's own risk.
        </p>

        <h2 style={{ marginBottom: "10px" }}>
          Site Terms of Use Modifications
        </h2>
        <p style={{ marginBottom: "20px" }}>
          OnlineClipboard may revise these Terms of Use for its Website at any
          time without prior notice. By using this Website, you agree to be
          bound by the current version of these Terms and Conditions of Use.
        </p>

        <h2 style={{ marginBottom: "10px" }}>Governing Law</h2>
        <p>
          Any claim related to OnlineClipboard's Website shall be governed by
          the laws of India without regard to its conflict of law provisions.
        </p>
      </div>
      <Footer />
    </div>
  );
};
