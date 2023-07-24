import SectionTitle from "../../components/Title/SectionTitle";

const ResearchPaper = () => {
  const researchPapers = [
    {
      collegeName: "Greenwood University",
      title: "Renewable Energy Sources and Sustainable Development",
      authors: "John Smith, Emily Johnson",
      journal: "Journal of Environmental Science",
      year: "2022",
      link: "https://example.com/research-paper-1",
    },
    {
      collegeName: "Bluefield College of Engineering",
      title: "Smart Cities: IoT Applications and Urban Planning",
      authors: "Michael Lee, Sarah Williams",
      journal: "IEEE Transactions on Smart Cities",
      year: "2023",
      link: "https://example.com/research-paper-2",
    },
    {
      collegeName: "Sunrise Medical College",
      title: "Cancer Research and Innovative Treatment Approaches",
      authors: "David Johnson, Rachel Davis",
      journal: "Journal of Medical Science and Technology",
      year: "2021",
      link: "https://example.com/research-paper-3",
    },
  ];

  return (
    <div className="lg:px-0 px-3">
      <div className="container mx-auto py-8">
        <SectionTitle
          Ftitle={"Recommended "}
          Ltitle={"Research Papers"}
          subTitle={"Exploring New Frontiers: Unveiling the Path of Knowledge"}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {researchPapers.map((paper, i) => (
            <div
              key={i}
              className="border border-gray-300 bg-white rounded-lg  p-4 shadow-md hover:shadow-2xl duration-500"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {paper.title}
              </h3>
              <p className="text-gray-500 mb-2">
                <span className="text-gray-600 font-medium">Authors: </span>{" "}
                {paper.authors}
              </p>
              <p className="text-gray-500 mb-4">
                <span className="text-gray-600 font-medium">
                  Published in:{" "}
                </span>
                {paper.journal}, {paper.year}
              </p>
              <a href={"#"} className="button-secondary">
                Read Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;
