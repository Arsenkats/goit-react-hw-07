import { RotatingLines } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loaderContainer}>
      <RotatingLines
        visible={true}
        height='36'
        width='36'
        color='#808080'
        strokeWidth='1'
        animationDuration='0.75'
        ariaLabel='rotating-lines-loading'
      />
    </div>
  );
};

export default Loader;
