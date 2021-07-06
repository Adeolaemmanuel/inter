import { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/dist/client/router";
import styles from '../styles/index.module.css';

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
  let name: string = router.query.details;
  console.log(name);
  

  return (
    <Fragment>
      <div className="w3-container">
        <div className="w3-display-container">
          <div className={`w3-display-middle ${styles.details}`}>
            {data &&
              data.allPeople.people.map((res, ind) => {
                if(name === res.name){
                    console.log(res);
                    
                    return (
                        <div key={ind}>
                          <div className="w3-card">
                              <div className="w3-center">
                                <p className="w3-padding">{res.name}</p>
                                <p className='w3-padding'>{res.homeworld.name}</p>
                                <p className='w3-padding'>{res.homeworld.gravity}</p>
                                <p className='w3-padding'>{res.homeworld.population}</p>
                                <p className='w3-padding'>{res.homeworld.diameter}</p>
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
