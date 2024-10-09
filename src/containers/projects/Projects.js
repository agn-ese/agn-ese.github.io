import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([
  {
    node: {
      id: "1",
      name: "Project 1",
      description: "This is a description of Project 1",
      url: "https://github.com/user/project1",
      primaryLanguage: {
        name: "JavaScript"
      }
    }
  },
  {
    node: {
      id: "2",
      name: "Project 2",
      description: "This is a description of Project 2",
      url: "https://github.com/user/project2",
      primaryLanguage: {
        name: "Python"
      }
    }
  }, []
  // Add more projects as needed
]);
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);


    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
        </div>
      </Suspense>
    );
  
}