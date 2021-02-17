import { useParams } from "react-router-dom";

function ProductPage(props:any) {
  const {id} = props.match.params
  return (
    <div>
      <h1>Are you looking for {id}</h1>
    </div>
  );
}
export default ProductPage;
