import s from "./style.module.css";
import { ReactComponent as LogoReact } from "../../assets/logo.svg";

const HeaderBlock = ({ title, hideBackground = false, descr }) => {
  const styleRoot = hideBackground ? { backgroundImage: "none" } : {};
  return (
    <div className={s.root} style={styleRoot}>
      <div className={s.container}>
        <LogoReact />
        {title && <h1 className={s.header}>{title}</h1>}

        {descr && <p>{descr}</p>}
      </div>
    </div>
  );
};


export default HeaderBlock;

