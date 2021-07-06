import { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";
import styles from "../../styles/index.module.css";
import Link from "next/link";

interface List {
  name: string;
  gender: string;
  homeworld: {
    id: string;
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
        }
      }
    }
  }
`;

const List = () => {
  const { data } = useQuery<AllPeopleDetails>(query);

  return (
    <Fragment>
      <div className="w3-container">
        <h3 className="w3-padding w3-bold">Lists</h3>
        <div className="w3-container w3-padding">
          {data &&
            data.allPeople.people.map((res: List, ind: number) => {
              return (
                <div className="w3-card w3-padding w3-margin-top w3-round-large" key={ind}>
                  <Link href={`/${res.name}`}>
                    <div className="w3-row">
                      <div className="w3-col s6 m7 l7">
                        <h3 className="w3-bold w3-padding">{res.name}</h3>
                      </div>
                      <div className="w3-rest">
                        <h3 className="w3-bold w3-padding">{res.gender}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default List;
