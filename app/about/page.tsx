export default function AboutPage() {
  return (
    <div className="bg-[#0c1425] text-white min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Dev Scholar</h1>

        <div className="bg-[#162040] rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-6">
            At Dev Scholar, our mission is to empower students and researchers to achieve academic excellence through
            expert assistance and guidance. We believe that every student deserves access to high-quality academic
            support that helps them understand complex concepts and develop practical skills.
          </p>
          <p className="text-gray-300">
            We are committed to delivering exceptional service, maintaining the highest standards of academic integrity,
            and fostering a culture of continuous learning and improvement.
          </p>
        </div>

        <div className="bg-[#162040] rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Team</h2>
          <p className="text-gray-300 mb-6">
            Our team consists of experienced professionals with advanced degrees in various fields of study. We have:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
            <li>PhD holders in Computer Science, Engineering, and Data Science</li>
            <li>Software developers with industry experience</li>
            <li>Research specialists with publication records</li>
            <li>Academic writers with expertise in various citation styles</li>
            <li>Project managers who ensure timely delivery</li>
          </ul>
          <p className="text-gray-300">
            Each team member is carefully selected based on their academic background, practical experience, and
            commitment to excellence.
          </p>
        </div>

        <div className="bg-[#162040] rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-yellow-400 mb-2">Excellence</h3>
              <p className="text-gray-300">
                We strive for excellence in every project we undertake, ensuring that our work meets the highest
                academic standards.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-400 mb-2">Integrity</h3>
              <p className="text-gray-300">
                We maintain strict ethical standards and ensure that all our work is original, properly cited, and
                respects intellectual property.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-400 mb-2">Confidentiality</h3>
              <p className="text-gray-300">
                We respect your privacy and maintain strict confidentiality regarding your personal information and
                project details.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-400 mb-2">Timeliness</h3>
              <p className="text-gray-300">
                We understand the importance of deadlines in academic settings and are committed to delivering projects
                on time.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#162040] rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
          <p className="text-gray-300 mb-6">
            We believe in a collaborative approach to academic assistance. Our process involves:
          </p>
          <ol className="list-decimal list-inside text-gray-300 space-y-4">
            <li>
              <span className="font-semibold">Understanding Your Needs:</span> We take the time to thoroughly understand
              your project requirements, academic level, and specific goals.
            </li>
            <li>
              <span className="font-semibold">Customized Solutions:</span> We develop tailored solutions that address
              your unique challenges and meet your specific requirements.
            </li>
            <li>
              <span className="font-semibold">Transparent Communication:</span> We maintain open and clear communication
              throughout the project, providing regular updates and addressing any concerns promptly.
            </li>
            <li>
              <span className="font-semibold">Quality Assurance:</span> We have a rigorous quality control process to
              ensure that all deliverables meet our high standards before being sent to you.
            </li>
            <li>
              <span className="font-semibold">Continuous Support:</span> We provide ongoing support and revisions to
              ensure your complete satisfaction with the final product.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
