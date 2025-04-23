/* eslint-disable react/no-unescaped-entities */
"use client"

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
        <h3 className="text-2xl font-semibold mb-4 font-poppins text-blue-400">About Me</h3>
        <p className="text-gray-300 text-base">
          10 years of SaaS sales experience helping startups reach global scale from bootstrap to enterprise initiatives, bridging the barriers for SMB and Enterprise sales cycles. Led full-cycle SaaS/IaaS sales, from prospecting to closing, surpassing quotas by 200%+ in subscription, consumption, and professional services deals. Developed strategic sales plans, aligning solution selling proposition with customer needs to maximize ROI and position as the preferred leading provider. Mastered qualifying and selling tactics, leveraging BANT, MEDDPIC, Solution Selling, Challenger, SNAP, The Sandler System, and Target Account Selling to drive revenue growth at scale of $10M.
        </p>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-4 font-poppins text-blue-400">Core Competencies</h3>
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
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-4 font-poppins text-blue-400">Selected Key Performance Highlights</h3>
        <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
          <li>
            <span className="block">
              Cloud & Pipeline Mastery: Leveraged 10+ years in SaaS to generate $10M+ in new ARR and drive 30% annual revenue growth by aligning cloud solutions with customer business needs.
            </span>
          </li>
          <li>
            <span className="block">
              Solution-Based Sales Excellence: Managed full-cycle sales—from prospecting to closing both short-term cloud contracts and complex enterprise deals—consistently exceeding quarterly targets by up to 200%.
            </span>
          </li>
          <li>
            <span className="block">
              Leadership & Community Engagement: Built and mentored high-performing teams, secured strategic partnerships, and utilized CRM insights (Salesforce) to forecast growth and engage user communities.
            </span>
          </li>
        </ul>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-4 font-poppins text-blue-400">Professional Experience</h3>

        <div className="mb-8">
          <h4 className="text-lg font-medium mb-1">SQUARETALK</h4>
          <p className="text-sm text-gray-400 mb-2">
            Cloud-based SaaS contact center & communications platform
          </p>
          <p className="text-sm text-gray-400 mb-2">Jerusalem / Remote | August 2021 – February 2023</p>
          <p className="text-md font-medium mb-2">Director of Sales & Partnerships</p>
          <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
            <li>
              <span className="block">
                Revenue Leadership: Oversaw sales of new business and partnerships exceeding quota with revenue mix of 30% indirect, 50% direct, 20% outreach sales, reporting directly to CEO and board of directors.
              </span>
            </li>
            <li>
              <span className="block">
                Team Achievement: Led a team of four sales managers to achieve a record 30% increase in new business, closing $1.2M in new ARR with an ACV of $8K, surpassing per-quarter team quota of $120K.
              </span>
            </li>
            <li>
              <span className="block">
                Strategic Partnerships: Signed five technology partner/reseller agreements as an individual contributor, increasing indirect business by 60%, and closed four strategic accounts ($35K–$90K+ ARR) while overseeing 40 additional deals.
              </span>
            </li>
            <li>
              <span className="block">
                Process Optimization: Reshaped sales strategy, USP, GTM, and business operation workflows, enhancing lead generation, market penetration, and business process optimization with improved sales analytics.
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
              <span className="block">
                Pipeline Growth: Drove a $2.6M ARR pipeline of qualified opportunities, closing $800K in ARR and securing 15 new logos across self-service SMB and enterprise sales.
              </span>
            </li>
            <li>
              <span className="block">
                Quota Success: Surpassed quarterly MBOs by 200%, qualifying 250+ opportunities ($6K–$600K ARR, $56K ACV) through 400+ discovery and demo calls.
              </span>
            </li>
            <li>
              <span className="block">
                Sales Strategy: Increased sales by 10% by implementing Target Account Selling, leveraging industry-specific USPs and cold outreach campaigns.
              </span>
            </li>
            <li>
              <span className="block">
                Tool Integration: Streamlined Salesforce workflows and integrated Salesloft, LiveChat, and Sales Navigator, boosting efficiency and transparency for executive reporting and KPIs.
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
          <p className="text-md font-medium mb-2">Enterprise Sales Manager / Product Specialist (May 2017 – Jul 2019)</p>
          <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
            <li>
              <span className="block">
                Revenue Generation: Grew a sales pipeline of $5.6M, converting opportunities into $2.53M ARR with an ACV of $96K and an average 6-month closing cycle, engaging C-level stakeholders with ROI presentations, demos, and business cases.
              </span>
            </li>
            <li>
              <span className="block">
                Lead Generation: Orchestrated an outbound strategy that increased lead generation by 150% and boosted SQL conversion by 10%, averaging 60 cold calls daily.
              </span>
            </li>
            <li>
              <span className="block">
                Strategic Contributions: Led development of USP, ICP, PMF, sales playbook, ROI, and executive reports, supporting growth and securing a $7.8M funding round.
              </span>
            </li>
            <li>
              <span className="block">
                CRM Administration: Administered Salesforce, Hubspot, and social tools to streamline lead-to-deal workflows, ensuring efficient qualification, closing cycles, reporting, and automation.
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-medium mb-1">CLICKSOFTWARE (acquired by Salesforce)</h4>
          <p className="text-sm text-gray-400 mb-2">AI-powered field service management solutions platform</p>
          <p className="text-sm text-gray-400 mb-2">Tel-Aviv | January 2012 – September 2016</p>
          <p className="text-md font-medium mb-2">Inside Sales Manager - SMB/Enterprise</p>
          <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
            <li>
              <span className="block">
                Pipeline Achievement: Exceeded pipeline targets by 170%, delivering $4.5M in new opportunities and closing $2.7M in ARR with an ACV of $50K and a 3-month closing cycle.
              </span>
            </li>
            <li>
              <span className="block">
                Cross-Functional Collaboration: Partnered with AEs, marketing, and solution engineering teams to manage complex, high-volume sales cycles.
              </span>
            </li>
            <li>
              <span className="block">
                Target Attainment: Consistently met quarterly targets through global inbound lead management and high-volume outbound campaigns (80 cold calls/day, 10 demo meetings/week), overachieving KPIs by 30%-40%.
              </span>
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 1 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-4 font-poppins text-blue-400">
          Professional Development & Technical Initiatives
        </h3>
        <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
          <li>
            <span className="block">
              Full-Stack SaaS Application Project: Developed a comprehensive SaaS platform (Next.js frontend, Django backend) featuring authentication, social login, and subscription management. This project underlines my technical acumen and ability to grasp complex products—skills that enable me to effectively communicate value propositions to clients.
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
        <h3 className="text-2xl font-semibold mb-2 font-poppins text-blue-400">Education</h3>
        <h4 className="text-lg font-medium mb-1">California State University, San Bernardino, CA</h4>
        <p className="text-sm text-gray-400 mb-2">
          Dual BA in Business Administration (Marketing & Entrepreneurial Management)
        </p>
        <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
          <li>
            <span className="block">
              Graduated with a 3.5 GPA; recognized on the Dean's List for two consecutive years
            </span>
          </li>
        </ul>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 1.4 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-2 font-poppins text-blue-400">Additional Information</h3>
        <ul className="list-disc list-outside pl-5 text-gray-300 space-y-2">
          <li>
            <span className="block">Languages: Fluent in English and Hebrew</span>
          </li>
          <li>
            <span className="block">Work Authorization: U.S. Citizen</span>
          </li>
          <li>
            <span className="block">
              Remote Work Experience: Proven ability to thrive in distributed teams and dynamic startup environments
            </span>
          </li>
          <li>
            <span className="block">
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/davidghazy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/davidghazy
              </a>
            </span>
          </li>
          <li>
            <span className="block">
              GitHub:{" "}
              <a
                href="https://github.com/davidghazy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/davidghazy
              </a>
            </span>
          </li>
        </ul>
      </motion.section>
    </div>
  )
}

export default DetailedCV