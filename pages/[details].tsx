import { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import styles from '../styles/index.module.css';
import Head from "next/head";
import RowHalf from "../components/Index/RowHalf";

interface List {
  name: string;
  gender: string;
  homeworld: {
    id: string;
    name: string;
    diameter: string;
    gravity: string;
    population: string;
  };
}

interface people {
  people: List[];
}

interface AllPeopleDetails {
  allPeople: people;
}

const query = gql`
  query allPeople {
    allPeople {
      people {
        name
        gender
        homeworld {
          id
          name
          diameter
          gravity
          population
        }
      }
    }
  }
`;

const Details = () => {
  const { data } = useQuery<AllPeopleDetails>(query);

  const router = useRouter();
  let name: any = router.query.details;
  

  return (
    <Fragment>
        <Head>
            <title>{name}</title>
        </Head>
      <div className="w3-container">
        <div className="w3-display-container">
          <div className={`w3-display-middle ${styles.details} w3-container`}>
            {data &&
              data.allPeople.people.map((res, ind) => {
                if(name === res.name){
                    return (
                        <div key={ind}>
                          <div className="w3-card">
                              <div className="w3-center">
                                <p className="w3-padding w3-panel w3-margin-top w3-black">{res.name}</p>
                                <RowHalf name='Gender' data={res.gender.toUpperCase()} />
                                <RowHalf name='Home world name' data={res.homeworld.name} />
                                <RowHalf name='Home world gravity' data={res.homeworld.gravity} />
                                <RowHalf name='Home world population' data={res.homeworld.population} />
                                <RowHalf name='Home world diameter' data={res.homeworld.diameter} />
                              </div>
                            </div>
                        </div>
                      );
                }
              })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Details;
