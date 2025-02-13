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
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">David Ghazy</h2>
        <p className="text-lg mb-2">Sales Professional | SaaS/IaaS Expert</p>
        <p className="text-sm text-gray-300 mb-4">US citizen, fluent in English and Hebrew</p>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold mb-2">Introduction</h3>
        <p className="text-gray-300">
          Sales Professional with over 12 years of experience driving revenue growth and expanding global markets in the
          SaaS/IaaS domain. Consistently exceeded quotas, achieving total revenue upwards of $10M in various sales
          roles. Contributed to securing a round of investment, reaching new business revenue milestones, and
          facilitating acquisition.
        </p>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold mb-2">Key Skills</h3>
        <ul className="list-disc list-inside text-gray-300">
          <li>
            In-depth knowledge of Software as a Service, SMB and Enterprise markets, technology, product market fit, and
            Go-To-Market strategies.
          </li>
          <li>
            Deep comprehension of sales methodology, BANT, MEDDPICC, Solution Selling, Challenger, SNAP, Outbound, The
            Sandler System, and Target Account Selling.
          </li>
          <li>Experience leading and building strong strategies for Outbound and Inbound sales.</li>
          <li>
            Fast learner of complex technology eco-systems and stacks. Passion for new innovations and progression.
          </li>
        </ul>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>

        <div className="mb-6">
          <h4 className="text-lg font-medium">Self-Employed</h4>
          <p className="text-sm text-gray-400">Mar 2023 - Present</p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>
              Account Executive, KBWEB Consult, remote commission based (February – Present)– Ave ARR 80K x 4 wins.
            </li>
            <li>Property Manager, California (March-June): Managed and oversaw 4 family owner Airbnb properties.</li>
            <li>Embarked on a 3-month action competitive sports adventure across Europe and the USA.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-medium">SquareTalk - Director of Sales & Partnerships</h4>
          <p className="text-sm text-gray-400">Aug 2021 - Feb 2023</p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>
              Led the sales team to its highest revenue year, achieving a 30% increase and closing $1.2M in new ARR.
            </li>
            <li>Directly contributed to closing 4 significant logos each ranging between $35k - $60k in new ARR.</li>
            <li>Successfully outreached and secured agreements with 5 new technology partners and resellers.</li>
            <li>Managed and mentored a team of 4 sales managers responsible for the full sale cycle.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-medium">CloudShare - Head of Inside Sales</h4>
          <p className="text-sm text-gray-400">Jul 2019 - Aug 2021</p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>Led the discovery and qualification of all inbound new business, achieving 200% of quarterly MBOs.</li>
            <li>Qualified over 250 opportunities in scale of $6k ARR to $600K ARR.</li>
            <li>Initiated Target Account Selling outreach strategy, increasing sales by 10%.</li>
            <li>
              Optimized the Salesforce sales process, defining lead life cycle stages, MQL, status, qualification
              mechanism.
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-lg font-medium">Zoomin Software - Enterprise Sales Manager</h4>
          <p className="text-sm text-gray-400">May 2018 - Jul 2019</p>
          <ul className="list-disc list-inside text-gray-300 mt-2">
            <li>
              Played a key role in evolving the company from bootstrap to securing a first-round investment of $7.8M.
            </li>
            <li>
              Built sales pipeline of $5.6 million, cumulatively reached $2.53M ARR and closed 3 deals Average of $90k
              ARR.
            </li>
            <li>
              Managed full sales cycle processes to reach quota, initiate qualification discovery calls and tailored
              demonstrations.
            </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mb-8"
      >
        <h3 className="text-xl font-semibold mb-2">Education</h3>
        <h4 className="text-lg font-medium">California State University, San Bernardino, CA</h4>
        <p className="text-sm text-gray-400">2004-2008</p>
        <ul className="list-disc list-inside text-gray-300 mt-2">
          <li>Dual BA in Business Administration, concentrating in Marketing & Entrepreneurial Management.</li>
          <li>Achieved a 3.5 GPA in majors and was on the Dean's List for two consecutive years.</li>
          <li>Founding member of Chiro of Ro AEPI fraternity, Riverside, CA.</li>
        </ul>
      </motion.section>
    </div>
  )
}

export default DetailedCV

