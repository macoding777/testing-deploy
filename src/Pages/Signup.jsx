import { useParams } from "react-router-dom";

const NotePages = () => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default NotePages;
