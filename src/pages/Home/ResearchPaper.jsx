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
    <div>
      <div className="container mx-auto py-8">
        <SectionTitle
          Ftitle={"Recommended "}
          Ltitle={"Research Papers"}
          subTitle={"Exploring New Frontiers: Unveiling the Path of Knowledge"}
        />
        <div className="grid grid-cols-3 gap-5 mt-10">
          {researchPapers.map((paper, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md p-4 relative h-56 hover:shadow-2xl duration-500 hover:scale-[1]"
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
              <a
                href={"#"}
                className="text-orange-500 hover:text-orange-600 hover:bg-orange-200 bg-orange-100 px-3 py-1 rounded transition-colors absolute bottom-5 font-medium"
                r
              >
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
