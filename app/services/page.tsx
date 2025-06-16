export default function ServicesPage() {
  return (
    <div className="bg-[#0c1425] text-white min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Services</h1>

        <div className="space-y-16">
          {/* Code Implementation */}
          <section className="bg-[#162040] rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Code Implementation</h2>
            <p className="text-gray-300 mb-6">
              Our expert developers can implement complex algorithms, applications, and systems in various programming
              languages to meet your academic requirements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Languages We Support:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Python</li>
                  <li>Java</li>
                  <li>C/C++</li>
                  <li>JavaScript/TypeScript</li>
                  <li>R</li>
                  <li>MATLAB</li>
                  <li>PHP</li>
                  <li>And many more...</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Types of Projects:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Machine Learning Models</li>
                  <li>Web Applications</li>
                  <li>Mobile Applications</li>
                  <li>Data Analysis Systems</li>
                  <li>Algorithms Implementation</li>
                  <li>Database Systems</li>
                  <li>IoT Projects</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Literature Review */}
          <section className="bg-[#162040] rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Literature Review</h2>
            <p className="text-gray-300 mb-6">
              Our academic experts conduct comprehensive analyses of academic papers and research in your field of
              study, providing you with a solid foundation for your research.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">What We Deliver:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Comprehensive literature surveys</li>
                  <li>Critical analysis of existing research</li>
                  <li>Identification of research gaps</li>
                  <li>Synthesis of findings</li>
                  <li>APA/MLA/Chicago formatted citations</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Fields We Cover:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Computer Science</li>
                  <li>Engineering</li>
                  <li>Data Science</li>
                  <li>Information Technology</li>
                  <li>Artificial Intelligence</li>
                  <li>Cybersecurity</li>
                  <li>And many more...</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Visualization */}
          <section className="bg-[#162040] rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Data Visualization</h2>
            <p className="text-gray-300 mb-6">
              We transform complex data into clear, insightful visual representations that enhance understanding and
              support your research findings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Visualization Types:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Interactive dashboards</li>
                  <li>Statistical charts and graphs</li>
                  <li>Geospatial visualizations</li>
                  <li>Network diagrams</li>
                  <li>Time series analysis</li>
                  <li>Correlation matrices</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Tools We Use:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Tableau</li>
                  <li>Power BI</li>
                  <li>D3.js</li>
                  <li>Python (Matplotlib, Seaborn, Plotly)</li>
                  <li>R (ggplot2)</li>
                  <li>Excel Advanced Visualizations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Report Writing */}
          <section className="bg-[#162040] rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Report Writing</h2>
            <p className="text-gray-300 mb-6">
              Our professional academic writing services cover dissertations, theses, and research papers, ensuring
              high-quality, well-structured documents.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Document Types:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Research papers</li>
                  <li>Dissertations</li>
                  <li>Theses</li>
                  <li>Technical reports</li>
                  <li>Case studies</li>
                  <li>Project documentation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Our Process:</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Understanding your requirements</li>
                  <li>Research and data collection</li>
                  <li>Structured writing and formatting</li>
                  <li>Editing and proofreading</li>
                  <li>Plagiarism checking</li>
                  <li>Revisions based on feedback</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
