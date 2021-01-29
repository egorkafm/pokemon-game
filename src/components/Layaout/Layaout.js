import l from "./style.module.css";
import bg from "../../assets/bg3.jpg";

const Layout = ({ id, title, descr, urlBg = false, colorBg = false }) => {
  const clasesss = l.desc + " " + l.full;

  const styleRoot =
    urlBg || colorBg
      ? { background: "#457aeb" }
      : { backgroundImage: `url(${bg})` };

  return (
    <section className={l.root} id={id}>
      <div className={l.wrapper} style={styleRoot}>
        <article>
          <div className={l.title}>
            <h3>{title}</h3>
            <span className={l.separator}></span>
          </div>
          <div className={clasesss}>
            <p>{descr}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
