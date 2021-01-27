import s from "./style.module.css";
import { ReactComponent as LogoReact } from "../../assets/logo.svg";

const HeaderBlock = () => {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <LogoReact />
        <h1 className={s.header}>This is Pokemon Card Game</h1>
        <p>Simple Tripe Triad Card Game</p>
      </div>
    </div>
  );
};

export default HeaderBlock;
