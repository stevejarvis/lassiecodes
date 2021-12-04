import Layout from '../components/layout'
import { useUser } from '@auth0/nextjs-auth0';

function Privacy() {
  const { user, error, isLoading } = useUser();

  return (
    <Layout user={user} loading={isLoading}>
      <h1>Privacy Policy</h1>

      <p>
        Protecting your private information is our priority. This Statement of Privacy applies to https://www.lassie.codes, and Lassie Codes governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Lassie Codes include https://www.lassie.codes. The Lassie Codes website is a technology services site. By using the Lassie Codes website, you consent to the data practices described in this statement.
      </p>

      <h2>
        Collection of your Personal Information
      </h2>

      <p>
        We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services. These may include: (a) registering for an account; (b) signing up for special offers from selected third parties; (c) sending us an email message. To wit, we will use your information for managing your preferences and communicating with you in relation to services and/or products you have requested from us. 
      </p>

      <h2>
        Sharing Information with Third Parties
      </h2>

      <p>
        Lassie Codes does not sell, rent or lease its customer lists to third parties.
      </p>

      <p>
        Lassie Codes may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Lassie Codes, and they are required to maintain the confidentiality of your information.
      </p>

      <p>
        Lassie Codes may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to: (a) conform to the edicts of the law or comply with legal process served on Lassie Codes or the site; (b) protect and defend the rights or property of Lassie Codes; and/or (c) act under exigent circumstances to protect the personal safety of users of Lassie Codes, or the public.
      </p>

      <h2>
        Automatically Collected Information
      </h2>

      <p>
        Information about your computer hardware and software may be automatically collected by Lassie Codes. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Lassie Codes website.
      </p>

      <h2>
        Use of Cookies
      </h2>

      <p>
        The Lassie Codes website may use "cookies" to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.
      </p>

      <p>
        One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize Lassie Codes pages, or register with Lassie Codes site or services, a cookie helps Lassie Codes to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same Lassie Codes website, the information you previously provided can be retrieved, so you can easily use the Lassie Codes features that you customized.
      </p>

      <p>
        You have the ability to disable cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the Lassie Codes services or websites you visit.
      </p>

      <h2>
        Links
      </h2>

      <p>
        This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.
      </p>

      <h2>
        Security of your Personal Information
      </h2>

      <p>
        Lassie Codes secures your personal information from unauthorized access, use, or disclosure. Lassie Codes uses the following methods for this purpose:
      </p>
	
      <p>
        - 	SSL Protocol
      </p>

      <p>
        When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol.
      </p>


      <p>
        We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that: (a) there are security and privacy limitations inherent to the Internet which are beyond our control; and (b) security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed.
      </p>

      <h2>
        Right to Deletion
      </h2>

      <p>
        Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:

        <ul>
          <li>Delete your personal information from our records; and</li> 
          <li>Direct any service providers to delete your personal information from their records.</li> 
        </ul>
      </p>

      <p>
        Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:
        <ul>
          <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;</li>
          <li>Debug to identify and repair errors that impair existing intended functionality;</li>
          <li>Comply with the California Electronic Communications Privacy Act;</li>
          <li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;</li>
          <li>Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;</li>
          <li>Comply with an existing legal obligation; or</li>
        </ul>
      </p>

      <h2>
        Children Under Thirteen
      </h2>

      <p>
        Lassie Codes does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.
      </p>

      <h2>
        External Data Storage Sites
      </h2>

      <p>
        We may store your data on servers provided by third party hosting vendors with whom we have contracted.
      </p>

      <h2>
        Changes to this Statement
      </h2>

      <p>
        Lassie Codes reserves the right to change this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account, by placing a prominent notice on our website, and/or by updating any privacy information. Your continued use of the website and/or Services available after such modifications will constitute your: (a) acknowledgment of the modified Privacy Policy; and (b) agreement to abide and be bound by that Policy.
      </p>
 

      <h2>
        Contact Information
      </h2>

      <p>
        Lassie Codes welcomes your questions or comments regarding this Statement of Privacy. If you believe that Lassie Codes has not adhered to this Statement, please contact Lassie Codes at:
      </p>

      <p>
        Email Address: <a href="mailto:steve.a.jarvis+lassiecodes@gmail.com">steve.a.jarvis+lassiecodes@gmail.com</a>
      </p>

      <p>
        Effective as of November 21, 2021 
      </p>
    </Layout>
  )
}

export default Privacy
