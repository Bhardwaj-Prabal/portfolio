import Layout from "../Layouts/Layout";
import Button from "../components/button";
import GitHubFetcher from "../components/GitHubFetcher";

const Projects = () => {
  return (
    <>
      <Layout title="Projects">
        <div className="content">
          <div className="btn-container">
            <Button label="Back" href="/" />
          </div>
          <GitHubFetcher clientLoad />
        </div>
      </Layout>
      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            height: 100%;
          }

          iframe {
            width: 100%;
            height: 100%;
            border: none;
          }

          .content {
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: left;
            text-align: left;
          }

          .btn-container {
            
            margin: 2rem;
          }
        `}
      </style>
    </>
  );
};

export default Projects;
