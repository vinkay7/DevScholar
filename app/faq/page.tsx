export default function FAQPage() {
  return (
    <div className="bg-[#0c1425] text-white min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

        <div className="space-y-6">
          {[
            {
              question: "What types of projects do you handle?",
              answer:
                "We handle a wide range of academic projects including software development, data analysis, research papers, literature reviews, dissertations, and theses. Our expertise spans across computer science, engineering, data science, and related fields.",
            },
            {
              question: "How do I request a project?",
              answer:
                "You can request a project by clicking the 'Request a Project' button on our website and filling out the form with your project details. Alternatively, you can contact us directly via email or phone.",
            },
            {
              question: "What is your pricing structure?",
              answer:
                "Our pricing starts from ₦75,000 for BSc projects, ₦200,000 for MSc projects, and ₦350,000 for PhD research. The final price depends on the complexity, scope, and deadline of your project. We provide a detailed quote after reviewing your requirements.",
            },
            {
              question: "How long does it take to complete a project?",
              answer:
                "The timeline varies based on the project's complexity and scope. Typically, BSc projects take 2-3 weeks, MSc projects take 3-4 weeks, and PhD research can take 4-8 weeks or more. We always discuss and agree on a timeline before starting the project.",
            },
            {
              question: "Do you offer revisions?",
              answer:
                "Yes, we offer revisions to ensure your complete satisfaction. BSc projects include 1 revision, MSc projects include 3 revisions, and PhD research includes unlimited revisions within a reasonable timeframe.",
            },
            {
              question: "How do I make payment?",
              answer:
                "We accept various payment methods including bank transfers, credit/debit cards, and mobile money payments. For large projects, we typically require a 50% advance payment, with the remaining 50% due upon completion.",
            },
            {
              question: "Is my project information kept confidential?",
              answer:
                "Absolutely. We have strict confidentiality policies in place to protect your intellectual property and personal information. We never share your project details with third parties without your explicit consent.",
            },
            {
              question: "Can I get regular updates on my project's progress?",
              answer:
                "Yes, we provide regular updates throughout the development process. Depending on the project's duration, we can schedule weekly or bi-weekly progress reports.",
            },
            {
              question: "What if I'm not satisfied with the work?",
              answer:
                "Your satisfaction is our priority. If you're not satisfied with the work, we offer revisions to address your concerns. If we cannot meet your requirements after multiple revision attempts, we can discuss partial refunds on a case-by-case basis.",
            },
            {
              question: "Do you help with project defense or presentation?",
              answer:
                "Yes, we can help prepare presentation slides and documentation for your project defense. We can also provide guidance on how to present your project effectively.",
            },
            {
              question: "Can you work with tight deadlines?",
              answer:
                "We can accommodate tight deadlines depending on our current workload and the project's complexity. Rush fees may apply for extremely urgent projects. Please contact us as early as possible to discuss your deadline requirements.",
            },
            {
              question: "Do you provide source code and documentation?",
              answer:
                "Yes, for software development projects, we provide complete source code, documentation, and installation instructions. All deliverables are yours to keep and use as you see fit.",
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-[#162040] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-3">{faq.question}</h2>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
