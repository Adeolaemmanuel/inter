import { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/dist/client/router";

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
  let name: any = router.query;

  return (
    <Fragment>
      <div className="w3-container">
        <div className="w3-display-container">
          <div className="w3-display-middle">
            {data &&
              data.allPeople.people.map((res, ind) => {
                return (
                  <div key={res.homeworld.id}>
                    {name === res.name ? (
                      <div className="w3-card">
                        <div className="w3-center">
                          <p className="w3-padding">{res.name}</p>
                          <p className='w3-padding'>{res.homeworld.name}</p>
                          <p className='w3-padding'>{res.homeworld.gravity}</p>
                          <p className='w3-padding'>{res.homeworld.population}</p>
                          <p className='w3-padding'>{res.homeworld.diameter}</p>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Details;
