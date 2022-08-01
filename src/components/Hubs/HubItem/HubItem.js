import NavItem from "../../Navbar/NavItem/NavItem";
function HubItem({hub}) {
  return ( 
    <NavItem url={`/hub/` + hub.hubId} bottom >
      {hub.title}
    </NavItem>
  );
}

export default HubItem;