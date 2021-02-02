import l from "./style.module.css";
//import bg from "../../assets/bg3.jpg";

const Layout = ({ id, title, urlBg, colorBg, children }) => {
  //const clasesss = l.desc + " " + l.full;

  // const styleRoot =
  //   urlBg || colorBg
  //     ? { background: "#457aeb" }
  //     : { backgroundImage: `url(${bg})` }; "#457aeb"

  const styleRoot = {};

  if (urlBg) {
    styleRoot.backgroundImage = `url(${urlBg})`;
  }

  if (colorBg) {
    styleRoot.background = colorBg;
  }

  return (
    <section
      className={l.root}
      id={id} 
      style={styleRoot}
      >
      <div className={l.wrapper}>
        <article>
          <div className={l.title}>
            <h3>{title}</h3>
            <span className={l.separator}></span>
          </div>
          <div className={`${l.desc} ${l.full}`}>
            {children}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
