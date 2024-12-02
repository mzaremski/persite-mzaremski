import stylesParallaxyStars from "./background-parallaxy-stars.css";

export const ParallaxyStars = () => {
  return (
    <div id="background-parallaxy-stars">
      <div className="background-parallaxy-stars">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="background-parallaxy-stars background-parallaxy-stars__second-half">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export function links() {
  return [
    { rel: "stylesheet", href: stylesParallaxyStars },
  ];
} 