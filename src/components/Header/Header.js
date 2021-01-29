import h from "./style.module.css";

const Header = ({ title, descr }) => {
  return (
    <header className={h.root}>
      <div className={h.forest}></div>
      <div className={h.container}>
        {title && <h1>{title}</h1>}
        {descr && <p>{descr}</p>}
      </div>
    </header>
  );
};

export default Header;
