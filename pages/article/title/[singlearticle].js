// pages/articles/[singlearticle].js

import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import moment from "moment/moment";
import ArticleTitle from "@/components/ArticleTitle";

const MyComponent = ({ mdxSource, data }) => {
  
  const formattedDate = moment(data.published).format("MMM DD, YYYY");

  const components = {
    // Define components to be used in the MDX file here
  };

  return (
    <div>
        <ArticleTitle
          name={data.title}
          photo="/Myself.png"
          date={formattedDate}
          tags={data.tags}
          views={data.views}
        />
      <div
        style={{
          "background-color": "#f2f2f2",
          padding: "20px",
          margin: "5px",
        }}
      >
        <MDXRemote {...mdxSource} components={components} />
      </div>
    </div>
  );
};


export async function getServerSideProps({ params }) {
  const { singlearticle } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/article/title/${singlearticle}`
  );
  const data = await res.json();
   
  const source = fs.readFileSync(`blogs/${singlearticle}.mdx`, "utf8");
  
  const mdxSource = await serialize(source);

  return { props: { mdxSource, data } };
}

export default MyComponent;
