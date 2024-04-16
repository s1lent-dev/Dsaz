import PropTypes from "prop-types";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./styles.scss";
const Progressbar = ({ solved, totalQues }) => {
  return (
    <div className="progressbar">
      <CircularProgressbar
        value={solved}
        maxValue={totalQues}
        text={`${solved}/${totalQues}`}
        styles={buildStyles({
          pathColor:
            solved < (totalQues * 30) / 100
              ? "red"
              : solved < (totalQues * 60) / 100
              ? "orange"
              : "green",
        })}
      />
    </div>
  );
};

Progressbar.propTypes = {
  solved: PropTypes.number.isRequired,
  totalQues: PropTypes.number.isRequired,
};

export default Progressbar;
