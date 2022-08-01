import BlogHeader from "../Blog/BlogHeader/BlogHeader";
import HubItem from "./HubItem/HubItem";
import classes from "./Hubs.module.scss";

function Hubs({ hubs }) {
  const hubItems = hubs.map(hub => (
    <HubItem key={hub.hubId} hub={hub}/>
  ));

  return (
    <article className={classes.Hubs}>
      <BlogHeader name="Mancho Hub" />
      <article className={classes.background}>
        <article className="container">
          <article className={classes.content}>
            <ul>
              {hubItems}

              {/* <NavItem url="/">
                Как правильно управлять проектом Releases в Асане?
              </NavItem>
              <NavItem url="/">
                Как собирать и прописывать ошибки и баги приложения в Backlog?
              </NavItem>
              <NavItem url="/">
                Почему не жать руки по 500 раз в день в офисе это нормально
              </NavItem>
              <NavItem url="/" bottom >
                Персональные и командные карьерные планы развития в компании
              </NavItem>
               */}
            </ul>
          </article>
        </article>
      </article>
    </article>
  );
}

export default Hubs;
