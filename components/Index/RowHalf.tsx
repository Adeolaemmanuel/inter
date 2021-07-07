
interface Props {
  name: string;
  data: string;
}

const RowHalf: React.FC<Props> = (props) => {
  return (
    <div className="w3-row-padding">
      <div className="w3-col s6 m6 l6">
        <p className="w3-padding w3-black w3-round">{props.name}</p>
      </div>
      <div className="w3-col s6 m6 l6">
        <p className="w3-padding w3-bold w3-large">{props.data}</p>
      </div>
    </div>
  );
};

export default RowHalf;
