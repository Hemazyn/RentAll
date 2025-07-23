import { Footer, Navigation } from '../components';
import HeroSection from '../components/HeroSection';

export default function page() {
  return (
   <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navigation textColor="text-gray-800" androidButtonClass="bg-white border border-primary text-primary" />
      <main className="flex-grow mx-auto px-4 py-4 md:py-10 max-w-3xl">
        <h1 className="text-xl md:text-5xl font-extrabold text-gray-900 mb-2 md:mb-8">Terms & Conditions</h1>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg  md:text-3xl font-bold text-gray-900">App Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-2">This Terms of Service (this “Agreement”) is an agreement between you and RDM App Technologies LTD, including but not limited to legal persons, unincorporated organizations that provide RentAll Services.</p>
          <p className="text-gray-700 leading-relaxed">This Terms of Service governs your use of all RentAll Services. You unconditionally accept and agree to be bound by the terms and conditions set out in this Terms of Service including the Privacy Policy as well any applicable laws and guidelines when you access the RentAll Platform or use any of the RentAll Services. If you disagree with any part hereof, kindly desist from using the RentAll Platform or any of the RentAll Services. You should read all of these terms carefully.</p>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg  md:text-3xl font-bold text-gray-900">Eligibility</h2>
          <p className="text-gray-700 leading-relaxed mb-2">To be eligible to use or access the RentAll Platform, the following conditions must be met by you –</p>
          <ol className="list-none space-y-2 pl-0">
            <li>
              <span className="font-semibold">a)</span> must create a RentAll user account on the RentAll Platform;
            </li>
            <li>
              <span className="font-semibold">b)</span> as an individual, be at least 18 or be of legal age to form a binding contract under applicable laws;
            </li>
            <li>
              <span className="font-semibold">c)</span> as an individual, legal person, or other organization, you have full power, authority and capacity to accept these Terms of Use;
            </li>
            <li>
              <span className="font-semibold">d)</span> as an employee or agent of a legal entity, you must have the full power, authority and capacity to accept these Terms of Service on their behalf and bind such legal entity to these Terms of Use;
            </li>
            <li>
              <span className="font-semibold">e)</span> you have not been previously restricted from using or accessing the RentAll Platform and RentAll Services
            </li>
            <li>
              <span className="font-semibold">f)</span> your use of RentAll Services will not violate any applicable laws and regulations applicable to you, including but not limited to regulations on anti-money laundering, anti-corruption, and counter-terrorist financing
            </li>
          </ol>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg  md:text-3xl font-bold text-gray-900 RentAll">Use of Information</h2>
          <p className="text-gray-700 leading-relaxed mb-2">You hereby acknowledge that in order to use or access the RentAll Platform or RentAll Services, you must provide us with correct and updated Personal Information.</p>
          <p className="text-gray-700 leading-relaxed mb-2">Personal Information may include –identity data, identity documents, transaction data, and technical data. Your Personal Information shall be properly protected and kept confidential at all times.</p>
          <p className="text-gray-700 leading-relaxed mb-2">We may use, process, store and transfer your Personal Information in order to –</p>
          <ol className="list-none space-y-2 pl-0">
            <li>
              <span className="font-semibold">a)</span> provide RentAll Services to you;
            </li>
            <li>
              <span className="font-semibold">b)</span> comply with applicable laws and regulatory requirements;
            </li>
            <li>
              <span className="font-semibold">c)</span> secure your RentAll user account and maintain data and information security;
            </li>
            <li>
              <span className="font-semibold">d)</span> verify the identity details and bank account details which you provide to us;
            </li>
            <li>
              <span className="font-semibold">e)</span> protect our vital interests and that of others;
            </li>
            <li>
              <span className="font-semibold">f)</span> provide service communications;
            </li>
            <li>
              <span className="font-semibold">g)</span> provide customer service;
            </li>
            <li>
              <span className="font-semibold">h)</span> facilitate corporate reorganisations; and
            </li>
            <li>
              <span className="font-semibold">i)</span> implement direct marketing campaigns.
            </li>
          </ol>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg  md:text-3xl font-bold text-gray-900 RentAll">Security and unauthorised use</h2>
          <p className="text-gray-700 leading-relaxed mb-2">RentAll remains committed to providing adequate data and information security to ensure that the detection and prevention of fraudulent and unauthorised access to RentAll user accounts, however, it is of utmost importance that RentAll Users treat the credentials used to access RentAll Platform as confidential information and avoid the disclosure of same to anybody.</p>
          <p className="text-gray-700 leading-relaxed mb-2">You hereby agree that you are responsible for maintaining adequate confidentiality and control of any and all credentials that you use to access the RentAll Services or RentAll Platform.</p>
          <p className="text-gray-700 leading-relaxed mb-2">You acknowledge that RentAll shall not in any way be liable for any loss, damage or costs caused by authorized or unauthorized use of your RentAll user account credentials.</p>
          <p className="text-gray-700 leading-relaxed mb-2">We will never request for your credentials via email, SMS or any other means. If you receive such communication, please disregard and contact us below –</p>
          <p className="text-gray-700 leading-relaxed mb-2">
            RentAll Help Desk Email address:{' '}
            <a href="mailto:help@myRentAll.com" className="text-[#E60023] hover:underline">
              help@myRentAll.com
            </a>
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">You should immediately notify RentAll if you believe there has been an unauthorized transaction or unauthorized access to your RentAll user account or your password or PIN has been compromised.</p>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg  md:text-3xl font-bold text-gray-900 RentAll">Confirmation of Gift card values</h2>
          <p className="text-gray-700 leading-relaxed mb-2">The details of every gift card including – card currency, card type, receipt type (where receipts are required), and card value shall be verified and confirmed when you upload the gift card on the RentAll Platform.</p>
          <p className="text-gray-700 leading-relaxed mb-2">You hereby acknowledge that estimated pay-out amount of a gift card is subject to confirmation and may vary if there is any variance in the card details you provided upon verification and confirmation.</p>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg  md:text-3xl font-bold text-gray-900 RentAll">Prohibited Activities</h2>
          <p className="text-gray-700 leading-relaxed mb-2">During the use of the RentAll Platform or RentAll Services and in the course of your interactions with RentAll, affiliated third parties or other RentAll users, you will not</p>
          <ol className="list-none space-y-2 pl-0">
            <li>
              <span className="font-semibold">a)</span> Breach this Terms of Use, any policy and/or any agreement that you have agreed to with RentAll;
            </li>
            <li>
              <span className="font-semibold">b)</span> Breach any applicable laws and regulations;
            </li>
            <li>
              <span className="font-semibold">c)</span> Engage in or facilitate fraudulent activities including but not limited to taking any actions that defraud RentAll or a RentAll user;
            </li>
            <li>
              <span className="font-semibold">d)</span> Infringe on RentAll or any third party's copyright, patent, trademark, trade secret or other intellectual property rights, or rights of publicity or privacy;
            </li>
            <li>
              <span className="font-semibold">e)</span> Sell counterfeit goods and/or product or service that is prohibited by law or is contrary to public order or good moral;
            </li>
            <li>
              <span className="font-semibold">f)</span> Act in a manner that is defamatory, trade libellous, threatening or harassing to RentAll, our employees, agents or other RentAll users;
            </li>
            <li>
              <span className="font-semibold">g)</span> Provide false, inaccurate or misleading Personal Information;
            </li>
            <li>
              <span className="font-semibold">h)</span> Engage in potentially fraudulent or suspicious activity and/or transactions;
            </li>
            <li>
              <span className="font-semibold">i)</span> Receive or attempt to receive chargeback from both RentAll and the Merchant, bank or card issuer for the same transaction during the course of a dispute;
            </li>
            <li>
              <span className="font-semibold">j)</span> Take any action that imposes an unreasonable or disproportionately large load on our infrastructure; and
            </li>
            <li>
              <span className="font-semibold">k)</span> Facilitate any viruses, trojan horses, worms or other computer programming routines that may damage, detrimentally interfere with, surreptitiously intercept or expropriate any system, data or Personal Information;
            </li>
          </ol>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg  md:text-3xl font-bold text-gray-900 RentAll">Termination and Restriction of Access</h2>
          <p className="text-gray-700 leading-relaxed mb-2">You hereby acknowledge that RentAll reserves the right to restrict access to your RentAll account and/or the termination of this Agreement upon the reasonable suspicion that you have contravened any of the terms and conditions contained in this Terms of Use</p>
          <p className="text-gray-700 leading-relaxed mb-2">RentAll, in its sole discretion, reserves the right to terminate this Agreement and/or restrict access to the RentAll Services and RentAll Platform for any reason and at any time upon notice and payment to you of any unrestricted funds held in your wallet. If we limit access to your RentAll user account, including through the placement of a lien, we will provide you with notice of our actions, and the opportunity to request restoration of access if, in our sole discretion, we deem it appropriate. Further, you acknowledge that RentAll’s decision to take certain actions, including limiting access to your RentAll user account, may be based on confidential criteria that is essential to our management of risk, the security of other RentAll users’ accounts and the RentAll Platform. You agree that RentAll is under no obligation to disclose the details of its risk management or its security procedures to you.</p>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg  md:text-3xl font-bold text-gray-900 RentAll">Disclaimers and Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed mb-2">
            <span className="font-bold">THE RentAll SERVICES AND PLATFORM ARE PROVIDED “AS IS” AND WITHOUT ANY REPRESENTATION OF WARRANTY, WHETHER EXPRESS, IMPLIED OR STATUTORY. RentAll, OUR PARENT AND AFFILIATES, OUR OFFICERS, DIRECTORS, AGENTS, JOINT VENTURES, EMPLOYEES AND OUR SUPPLIERS SPECIFICALLY DISCLAIM ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.</span>
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">RentAll does not guarantee continuous, uninterrupted or secure access to any part of the RentAll Services, and operation of the RentAll Platform may be temporarily suspended for maintenance or upgrade or interfered with by numerous factors outside of our control. RentAll will make reasonable efforts to ensure that service requests are processed in a timely manner, but RentAll makes no representations or warranties regarding the amount of time needed to complete processing because the RentAll Services are dependent upon many factors outside of our control, such as delays in the banking system or delays by partners and vendors.</p>
          <p className="text-gray-700 leading-relaxed mb-2">RentAll does not have any control over the products or services provided by third-parties and paid for with the RentAll Services. Hence, RentAll cannot ensure that the third-party would actually complete the transaction or is authorized to do so.</p>
          <p className="text-gray-700 leading-relaxed mb-2">
            <span className="font-bold">Limitation of Liability TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, RentAll AND ITS SUBSIDIARIES AND AFFILIATES, OFFICERS, DIRECTORS, AGENTS, EMPLOYEES OR SUPPLIERS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (i) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE GLOVER SERVICES AND PLATFORM; (ii) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES, INCLUDING WITHOUT LIMITATION, ANY DEFAMATORY, OFFENSIVE OR ILLEGAL CONDUCT OF OTHER USERS OR THIRD PARTIES; (iii) ANY CONTENT OBTAINED FROM THE SERVICES; OR (iv) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.</span>
          </p>
          <p className="text-gray-700 leading-relaxed mb-2">To the maximum extent permitted by law, in no event will any liability of RentAll and its subsidiaries and affiliates, officers, directors, agents, employees or suppliers to any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with any use of, or inability to use of the RentAll Platform, any content displayed on RentAll Platform and any linked third-party websites exceed (in aggregate) the fees earned by RentAll in connection with your use of the RentAll Platform in the 6 (six) month period immediately preceding the event giving rise to the claim for liability.</p>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg  md:text-3xl font-bold text-gray-900 RentAll">Changes</h2>
          <p className="text-gray-700 leading-relaxed mb-2">RentAll reserves the rights to make changes to this Terms of Use without notice. You are required to visit this page regularly as your continued use of the RentAll Platform or RentAll Services will be deemed as an unconditional acceptance and agreement to be bound by the revised Terms of Use.</p>
          <p className="text-gray-700 leading-relaxed mb-2">Notwithstanding the foregoing, will do our best to notify you of any changes to the Terms of Service and any such notice will be published on the RentAll Platform by posting same on our website, sending push notifications through on the mobile app or sending an email to the email address associated with your RentAll user account.</p>
        </section>
        <section className="mb-3 md:mb-10">
          <h2 className="text-lg  md:text-3xl font-bold text-gray-900 RentAll">Governing Law</h2>
          <p className="text-gray-700 leading-relaxed mb-2">This Agreement and the rights and obligations of the Parties hereunder shall be governed by and interpreted and construed in accordance with the laws of Nigeria.</p>
        </section>
      </main>
      <HeroSection />
      <Footer />
    </div>
  );
}
