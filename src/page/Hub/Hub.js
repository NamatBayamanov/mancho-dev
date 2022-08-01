import Hubs from "../../components/Hubs/Hubs";
import { getHubs } from "../../data/hubs";

function Hub() {
  return ( 
    <div>
      <Hubs hubs={getHubs()}/>
    </div>
  );
}

export default Hub;