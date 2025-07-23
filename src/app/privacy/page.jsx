import { Footer, Navigation } from '../components';
import HeroSection from '../components/HeroSection';

export default function page() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navigation textColor="text-gray-800" androidButtonClass="bg-white border border-primary text-primary" />
      <main className="flex-grow mx-auto px-4 py-4 md:py-10 max-w-3xl">
        <h1 className="text-xl md:text-4xl font-extrabold text-gray-900 mb-2 md:mb-8">Privacy Policy</h1>
        <section className="mb-3 md:mb-10">
          <p className="text-gray-700 leading-relaxed mb-4">At RentAll, we take your privacy seriously. Please read this Privacy Policy to learn how we treat your personal data. By using or accessing our Services in any manner, you acknowledge that you accept the practices and policies outlined below, and you hereby consent that we will collect, use and share your information as described in this Privacy Policy.</p>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900">Data</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Personal data or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).</p>
          <p className="text-gray-700 leading-relaxed mb-4">We may store and process all or part of your personal data in Nigeria and elsewhere in the world where our facilities or our service providers are located.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Further details are provided below.</p>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 ">Identity Data</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Identity Data includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth, gender, signature, billing address, delivery address, email address, BVN etc.</p>
          <p className="text-gray-700 leading-relaxed mb-4">We may collect, use, process, store and transfer your Identity Data in order to provide our Services, comply with applicable laws and regulatory requirements, detect and prevent fraud, protect our vital interests and that of others, provide Service communications, provide customer service, maintain data and information security, facilitate corporate reorganisations, implement direct marketing campaigns</p>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 ">Transaction Data</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Transaction Data includes details about payments to and from you and other details of Services you have received from us.</p>
          <p className="text-gray-700 leading-relaxed mb-4">We may collect, use, process, store and transfer your Transaction Data in order to provide our Services, comply with applicable laws and regulatory requirements, detect and prevent fraud, protect our vital interests and that of others, provide customer service, ensure quality control, maintain data and information security, research and development purposes, enhance customer experience and implement direct marketing campaigns.</p>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 ">Technical Data</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Technical Data includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, browser fingerprint, authentication data, security questions, click-stream data, public social networking posts, and other data collected via cookies and similar technologies.</p>
          <p className="text-gray-700 leading-relaxed mb-4">We may collect, use, process, store and transfer your Technical Data in order to provide our Services, comply with applicable laws and regulatory requirements, detect and prevent fraud, research and development purposes, enhance customer experience and implement third party marketing campaigns.</p>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 ">Anonymised and Aggregated Data</h2>
          <p className="text-gray-700 leading-relaxed mb-4">We also collect, use and share Aggregated Data such as statistical or demographic data for the purpose of analyzing web traffic and functionality of our website. Aggregated Data could be derived from your personal data but is not considered personal data in law as this data will not directly or indirectly reveal your identity. For example, we may aggregate your Transaction Data and Technical Data to calculate the percentage of users accessing a specific website feature. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this privacy policy.</p>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 ">Disclosure Of Your Personal Data</h2>
          <p className="text-gray-700 leading-relaxed mb-4">We may share your personal data with certain third-party which we deem necessary in order to provide our Services effectively or comply with applicable laws and regulatory requirements.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Our engagement terms with these third parties shall require them to only use your information in connection with the services they perform for us and prohibit them from selling your information to anyone else. Such engagements shall also be subject to professional duty of confidentiality where applicable.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Further information are set out below –</p>
          <ol className="list-none space-y-2 pl-0">
            <li>
              <span className="font-semibold">a)</span> Third party identity verification service providers – In order to detect and prevent fraudulent transactions and comply with applicable laws and regulatory requirements, we may share your personal data with third party identity verification service providers who shall verify your identity against available public records and other third-party databases.
            </li>
            <li>
              <span className="font-semibold">b)</span> Banks and other financial institution partners – In order to process payments and withdrawals and comply with applicable laws and regulatory requirements we may share your personal data with banks and financial institutions.
            </li>
            <li>
              <span className="font-semibold">c)</span> Service providers – We may share your personal data with service providers that we engage their services to execute different business functions. Examples of these service providers include – cloud storages, network infrastructure providers, marketing, data analytics etc.
            </li>
            <li>
              <span className="font-semibold">d)</span> Professional advisors – We may share your personal data with professional advisors in order to avail ourselves with technical, financial or legal consulting services or in compliance with our legal obligations.
            </li>
            <li>
              <span className="font-semibold">e)</span> Companies or other entities during corporate reorganisations – If a change in our corporate structure occurs as a result of the sale, transfer or merger of parts of our business or our assets or that of another entity by us, then the new corporate entity may use your personal data in the same way as set out in this privacy policy. You will receive prior notice of any change in applicable policies.
            </li>
            <li>
              <span className="font-semibold">f)</span> Law enforcement agents and officials – We may share your personal data where we are bound by law or any legal procedure to share same or when we believe in good faith that the disclosure of your personal information is necessary to prevent physical harm or financial loss, to report suspected illegal activity, or to investigate violations of our Terms of Services or any other applicable policies.
            </li>
          </ol>
          <p className="text-gray-700 leading-relaxed mb-4">Users can freely decline our Cookies if the web browser or browser add-on permits unless our Cookies are required to prevent fraud or ensure the security of websites we control. However, declining our Cookies may interfere with your use of our websites and the Service.</p>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 ">Third Party Websites</h2>
          <p className="text-gray-700 leading-relaxed mb-4">The RentAll Platform may contain links to third-party websites and applications of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the RentAll Platform, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information.</p>
          <p className="text-gray-700 leading-relaxed mb-4">We are not responsible for the content or privacy and security practices and policies of any third parties, including other sites, services or applications that may be linked to or from the RentAll Platform.</p>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 ">Data Security</h2>
          <p className="text-gray-700 leading-relaxed mb-4">We have put in place appropriate security measures (and contractually require third parties we share your information with to maintain) appropriate physical, technical and administrative safeguards to prevent the personal data from being accidentally loss, misuse or in an unauthorised access, alteration or disclosure of your personal data. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>
          <p className="text-gray-700 leading-relaxed mb-4">The security of your personal information it is instructive to note that no method of electronic transmission or storage of data guarantees 100% security. Thus, we strive to use commercially acceptable means to protect your personal information and we cannot guarantee its absolute security.</p>
          <p className="text-gray-700 leading-relaxed mb-4">Based on the foregoing, we have established appropriate procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</p>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 ">Retention Of Personal Data</h2>
          <p className="text-gray-700 leading-relaxed mb-4">We will only retain your personal information for as long as reasonably necessary to</p>
          <ol className="list-none space-y-2 pl-0">
            <li>
              <span className="font-semibold">a)</span> provide our services to you,
            </li>
            <li>
              <span className="font-semibold">b)</span> archiving purposes to detect and investigate fraudulent transactions,
            </li>
            <li>
              <span className="font-semibold">c)</span> comply with our legal obligations under financial or anti-money laundering laws
            </li>
            <li>
              <span className="font-semibold">d)</span> satisfying any tax, accounting or reporting requirements; and
            </li>
            <li>
              <span className="font-semibold">e)</span> upon our reasonable belief that there is a prospect of litigation in respect to our relationship with you.
            </li>
          </ol>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 ">Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-4">Under certain circumstances, you can exercise certain rights provided under applicable laws and regulations in relation to the personal information we hold. These rights include the right to –</p>
          <ol className="list-none space-y-2 pl-0">
            <li>
              <span className="font-semibold">a)</span> give and withdraw consent;
            </li>
            <li>
              <span className="font-semibold">b)</span> request access to your personal information;
            </li>
            <li>
              <span className="font-semibold">c)</span> request the rectification of your personal information;
            </li>
            <li>
              <span className="font-semibold">d)</span> request erasure of your personal information;
            </li>
            <li>
              <span className="font-semibold">e)</span> object to the processing of your personal information;
            </li>
            <li>
              <span className="font-semibold">f)</span> request that we restrict the processing of your personal information;
            </li>
            <li>
              <span className="font-semibold">g)</span> request the transfer of your personal information to you or a third party; and
            </li>
            <li>
              <span className="font-semibold">h)</span> complain at any time with any relevant authority for data protection issues.
            </li>
          </ol>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg md:text-2xl font-bold text-gray-900 ">Limitation Of Liability</h2>
          <p className="text-gray-700 leading-relaxed mb-4">We will not be responsible for a breach of personal information which happens due to –</p>
          <ol className="list-none space-y-2 pl-0">
            <li>
              <span className="font-semibold">a)</span> an event which is beyond our control;
            </li>
            <li>
              <span className="font-semibold">b)</span> an act or threats of terrorism;
            </li>
            <li>
              <span className="font-semibold">c)</span> an act of God (such as, but not limited to fires, explosions, earthquakes, drought, tidal waves and floods) which compromises our data protection measures;
            </li>
            <li>
              <span className="font-semibold">d)</span> war, hostilities (whether war be declared or not), invasion, the act of foreign enemies, mobilisation, requisition, or embargo;
            </li>
            <li>
              <span className="font-semibold">e)</span> rebellion, revolution, insurrection, or military or usurped power, or civil war which compromises our data protection measures;
            </li>
            <li>
              <span className="font-semibold">f)</span> the transfer of your personal information to a third party on your instructions; and
            </li>
            <li>
              <span className="font-semibold">g)</span> the use of your personal information by a third party designated by you.
            </li>
          </ol>
        </section>
      </main>
      <HeroSection />
      <Footer />
    </div>
  );
}
