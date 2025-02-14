/* eslint-disable react/no-unescaped-entities */
import type React from "react"
import { motion } from "framer-motion"

const DetailedCV: React.FC = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-4 font-poppins text-blue-400">David Ghazy</h2>
        <p className="text-lg mb-2">Sales Professional | SaaS/IaaS Expert</p>
        <p className="text-sm text-gray-300 mb-4">US citizen, fluent in English and Hebrew</p>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-white font-bold">Full-Cycle Sales Management</p>
            <p className="text-gray-300 text-sm">End-to-end prospecting, demos, negotiations, and closing</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-white font-bold">Revenue & Pipeline Growth</p>
            <p className="text-gray-300 text-sm">
              Consistently exceeding targets; multi-million-dollar ARR achievements
            </p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-white font-bold">Client Relationship Building</p>
            <p className="text-gray-300 text-sm">Trusted advisor to C-level executives and finance teams</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-white font-bold">Strategic Sales Execution</p>
            <p className="text-gray-300 text-sm">Tailored sales strategies for mid-market and enterprise accounts</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-white font-bold">Cross-Functional Collaboration</p>
            <p className="text-gray-300 text-sm">Partnering with Marketing, Product, and Customer Success teams</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="text-white font-bold">Startup & SaaS Expertise</p>
            <p className="text-gray-300 text-sm">Thriving in fast-paced and innovative environments</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-4 font-poppins text-blue-400">Selected Key Performance Highlights</h3>
        <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
          <li>
            <span className="block pl-2 -indent-2">
              Cloud & Pipeline Mastery: Leveraged 12+ years in SaaS to generate $10M+ in new ARR and drive 30% annual
              revenue growth by aligning cloud solutions with customer business needs.
            </span>
          </li>
          <li>
            <span className="block pl-2 -indent-2">
              Solution-Based Sales Excellence: Managed full-cycle sales—from prospecting to closing both short-term
              cloud contracts and complex enterprise deals—consistently exceeding quarterly targets by up to 200%.
            </span>
          </li>
          <li>
            <span className="block pl-2 -indent-2">
              Leadership & Community Engagement: Built and mentored high-performing teams, secured strategic
              partnerships, and utilized CRM insights (Salesforce) to forecast growth and engage user communities.
            </span>
          </li>
        </ul>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-4 font-poppins text-blue-400">Professional Experience</h3>

        <div className="mb-8">
          <h4 className="text-lg font-medium mb-1">SQUARETALK</h4>
          <p className="text-sm text-gray-400 mb-2">
            Cloud-based SaaS contact center & communications platform - open source stack
          </p>
          <p className="text-sm text-gray-400 mb-2">Tel Aviv / Remote | August 2021 – February 2023</p>
          <p className="text-md font-medium mb-2">Director of Sales & Partnerships</p>
          <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
            <li>
              <span className="block pl-2 -indent-2">
                Revenue Growth: Drove a record 30% annual revenue increase; secured $1.2M in new ARR to elevate total
                annual sales to $5.2M.
              </span>
            </li>
            <li>
              <span className="block pl-2 -indent-2">
                Full-Cycle Sales Leadership: Managed a team of four sales managers, setting KPIs and mentoring them
                through every phase of the sales process.
              </span>
            </li>
            <li>
              <span className="block pl-2 -indent-2">
                Strategic Expansion: Established five new technology partner/reseller agreements, boosting indirect
                business by 60%.
              </span>
            </li>
            <li>
              <span className="block pl-2 -indent-2">
                Key Deals: Personally closed four high-value accounts (each contributing $35K–$60K ARR) and oversaw 40
                additional deals via targeted outbound efforts and partner referrals.
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-medium mb-1">CLOUDSHARE</h4>
          <p className="text-sm text-gray-400 mb-2">
            Cloud-based SaaS/IaaS platform for interactive demos, training labs, and proof-of-concept environments
          </p>
          <p className="text-sm text-gray-400 mb-2">Tel Aviv / Remote | July 2019 – August 2021</p>
          <p className="text-md font-medium mb-2">Head of Inside Sales</p>
          <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
            <li>
              <span className="block pl-2 -indent-2">
                Pipeline Development: Built and managed a robust pipeline valued at $2.6M ARR, with closed deals
                contributing $800K in ARR.
              </span>
            </li>
            <li>
              <span className="block pl-2 -indent-2">
                Quota Achievement: Surpassed quarterly MBOs by 200%, qualifying over 250 opportunities ranging from $6K
                to $600K ARR.
              </span>
            </li>
            <li>
              <span className="block pl-2 -indent-2">
                Remote Process Optimization: Implemented and enhanced Salesforce workflows and integrated sales tools to
                streamline remote sales operations, enabling higher efficiency and transparency.
              </span>
            </li>
            <li>
              <span className="block pl-2 -indent-2">
                Strategic Outreach: Introduced Target Account Selling methodologies that increased sales by 10% through
                customized industry messaging and cold outreach initiatives.
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-medium mb-1">ZOOMIN SOFTWARE (acquired by Salesforce)</h4>
          <p className="text-sm text-gray-400 mb-2">
            Content orchestration platform centralizing and personalizing product documentation
          </p>
          <p className="text-sm text-gray-400 mb-2">Tel-Aviv | October 2016 – July 2019</p>
          <p className="text-md font-medium mb-2">Enterprise Sales Manager (May 2018 – Jul 2019)</p>
          <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
            <li>
              <span className="block pl-2 -indent-2">
                Enterprise-Level Sales: Built a sales pipeline of $5.6M, converting opportunities into $2.53M ARR by
                engaging directly with C-level stakeholders and delivering compelling ROI presentations.
              </span>
            </li>
          </ul>
          <p className="text-md font-medium mt-4 mb-2">Enterprise Product Specialist (Oct 2016 – Jul 2019)</p>
          <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
            <li>
              <span className="block pl-2 -indent-2">
                Strategic Prospecting: Developed and executed an outbound strategy that increased lead generation by
                150% and boosted SQL conversion by 10%.
              </span>
            </li>
            <li>
              <span className="block pl-2 -indent-2">
                Sales Process Engineering: Acted as Salesforce administrator to streamline the lead-to-deal workflow,
                ensuring efficient qualification and closing cycles.
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-medium mb-1">CLICKSOFTWARE (acquired by Salesforce)</h4>
          <p className="text-sm text-gray-400 mb-2">AI-powered field service management solutions platform</p>
          <p className="text-sm text-gray-400 mb-2">Tel-Aviv | January 2012 – September 2016</p>
          <p className="text-md font-medium mb-2">SMB Inside Sales Manager (February 2013 – September 2016)</p>
          <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
            <li>
              <span className="block pl-2 -indent-2">
                Pipeline & Revenue Success: Exceeded pipeline targets by 170%, delivering $4.5M in new opportunities and
                closing $2.7M in ARR.
              </span>
            </li>
            <li>
              <span className="block pl-2 -indent-2">
                Collaborative Selling: Partnered with cross-functional teams (AEs, marketing, and solution engineering)
                to manage complex, high-volume sales cycles.
              </span>
            </li>
          </ul>
          <p className="text-md font-medium mt-4 mb-2">
            Business/Sales Development Manager (January 2012 – February 2013)
          </p>
          <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
            <li>
              <span className="block pl-2 -indent-2">
                Activity & Target Attainment: Consistently met quarterly targets by managing global inbound leads and
                executing high-volume outbound campaigns (average: 80 cold calls/day and 10 demo meetings/week).
              </span>
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-4 font-poppins text-blue-400">
          Professional Development & Technical Initiatives
        </h3>
        <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
          <li>
            <span className="block pl-2 -indent-2">
              Full-Stack SaaS Application Project: Developed a comprehensive SaaS platform (Next.js frontend, Django
              backend) featuring authentication, social login, and subscription management. This project underlines my
              technical acumen and ability to grasp complex products—skills that enable me to effectively communicate
              value propositions to clients.
            </span>
          </li>
          <li>
            <span className="block pl-2 -indent-2">
              Continuous Learning: Regularly engage in professional development initiatives to stay ahead of market
              trends, particularly within the SaaS and HR-tech landscapes.
            </span>
          </li>
        </ul>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 1 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-2 font-poppins text-blue-400">Education</h3>
        <h4 className="text-lg font-medium mb-1">California State University, San Bernardino, CA</h4>
        <p className="text-sm text-gray-400 mb-2">
          Dual BA in Business Administration (Marketing & Entrepreneurial Management)
        </p>
        <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
          <li>
            <span className="block pl-2 -indent-2">
              Graduated with a 3.5 GPA; recognized on the Dean's List for two consecutive years
            </span>
          </li>
        </ul>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-2 font-poppins text-blue-400">Additional Information</h3>
        <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
          <li>
            <span className="block pl-2 -indent-2">Languages: Fluent in English and Hebrew</span>
          </li>
          <li>
            <span className="block pl-2 -indent-2">Work Authorization: U.S. Citizen</span>
          </li>
          <li>
            <span className="block pl-2 -indent-2">
              Remote Work Experience: Proven ability to thrive in distributed teams and dynamic startup environments
            </span>
          </li>
        </ul>
      </motion.section>
    </div>
  )
}

export default DetailedCV

