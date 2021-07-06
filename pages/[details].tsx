import { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import styles from '../styles/index.module.css';
import Head from "next/head";

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
                                <p className="w3-padding"><span className='w3-padding w3-bold'>Person name:</span> {res.name}</p>
                                <p className='w3-padding'><span className='w3-padding w3-bold'>Home world name:</span>{res.homeworld.name}</p>
                                <p className='w3-padding'><span className='w3-padding w3-bold'>Home world gravity:</span>{res.homeworld.gravity}</p>
                                <p className='w3-padding'><span className='w3-padding w3-bold'>Home world population:</span>{res.homeworld.population}</p>
                                <p className='w3-padding'><span className='w3-padding w3-bold'>Home world diameter:</span>{res.homeworld.diameter}</p>
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
