import "../../css/progress/progress.css";

export default function Progress(value) {
  console.log(value);
  return (
    <>
      <div className="container-progress" id={value.value === true ? "progress" : "progress-hidden"}>
        <span className="title-progress">TRAYENDO INFORMACIÓN</span>
        <img
          src="../../../public/assets/img/progress.gif"
          alt="img_gif"
          className="img-progress"
        />

        <div className="container-subtitle-progress">
          <span className="subtitle-progress">YA CASI ACABAMOS </span>
          <span className="subtitle-progress" id="spot1">. &nbsp;</span>
          <span className="subtitle-progress" id="spot2">. &nbsp;</span>
          <span className="subtitle-progress" id="spot3">. &nbsp;</span>
          <span className="subtitle-progress" id="spot4">.&nbsp;</span>
          <span className="subtitle-progress" id="spot5">.</span>
        </div>
      </div>
    </>
  );
}
