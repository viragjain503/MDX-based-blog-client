import ArticleTitle from "@/components/ArticleTitle"

const test = ({ name, photo, date, tags }) => {
  return (
    <ArticleTitle
      name="John Doe"
      photo="https://example.com/john-doe.jpg"
      date="April 8, 2023"
      tags={["React", "Bootstrap", "Web Development"]}
    />
  );
};

export default test;
