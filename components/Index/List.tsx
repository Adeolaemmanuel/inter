import { Fragment } from "react";
import { useQuery, gql } from "@apollo/client";
import styles from "../../styles/index.module.css";
import Link from "next/link";
import Image from "next/image";

interface List {
  name: string;
  gender: string;
  homeworld: {
    id: string;
    name: string;
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
          id,
          name
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
                <div
                  className="w3-card w3-padding w3-margin-top w3-round-large"
                  key={ind}
                >
                  <Link href={`/${res.name}`}>
                    <div className="w3-row">
                      <div className="w3-col s7 m9 l9">
                        <h3 className="w3-bold w3-padding">{res.name}</h3>
                        <div className="w3-row">
                          <div className="w3-col s6 m1 l1">
                            {res.gender === "male" ? (
                              <Image
                                src="/assets/img/profile.svg"
                                alt="Vercel Logo"
                                width={100}
                                height={60}
                              />
                            ) : (
                              <Image
                                src="/assets/img/woman.svg"
                                alt="Vercel Logo"
                                width={100}
                                height={60}
                              />
                            )}
                          </div>
                          <div className="w3-rest">
                            <p className='w3-bold w3-padding w3-large'>{res.homeworld.name}</p>
                          </div>
                        </div>
                      </div>
                      <div className="w3-rest">
                        <div className="w3-green w3-opacity w3-text-black w3-round-large w3-center">
                          <h3 className="w3-bold w3-padding w3-small">
                            {res.homeworld.id}
                          </h3>
                        </div>
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
