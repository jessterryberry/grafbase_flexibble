import { ProjectInterface } from "@/common.types";
import { fetchAllProjects } from "@/lib/actions";

type ProjectSearch = {
    projectSearch: {
        edges: { node: ProjectInterface }[];
        pageInfo: {
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor: string;
            endCursor: string;
        }
    }
}

const Home = async () => {
    const data = await fetchAllProjects() as ProjectSearch;

    const projectsToDisplay = data?.projectSearch?.edges || [];

    if(projectsToDisplay.length === 0) {
        return (
            <section className="flexStart flex-vcol paddings">
                Categories

                <p className="no-result-text text-center">No projects found, go create some first!</p>
            </section>
        )
    }

    return (
        <section className="flex-start flex-col paddings mb-16">
            <h1>Categories</h1>
            <h1>Posts</h1>
            <h1>LoadMore</h1>
        </section>
    )
}

export default Home;