import React, { useState, useContext, Suspense, lazy } from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
);

export default function Projects() {
    const { isDark } = useContext(StyleContext);

    const [repo] = useState([
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
        },
        // Add more projects here...
    ]);

    console.log(repo); // Inspect the repo data

    if (openSource.display) {
        return (
            <Suspense fallback={<Loading />}>
                <div className="main" id="opensource">
                    <h1 className="project-title">Open Source Projects</h1>
                    <div className="repo-cards-div-main">
                        {repo.map((v) => {
                            if (!v || !v.node) {
                                console.error("Undefined repo item:", v);
                                return null; // Skip rendering this item
                            }
                            return (
                                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
                            );
                        })}
                    </div>
                    <Button
                        text={"More Projects"}
                        className="project-button"
                        href={socialMediaLinks.github}
                        newTab={true}
                    />
                </div>
            </Suspense>
        );
    } else {
        return <p>No projects available</p>;
    }
}
