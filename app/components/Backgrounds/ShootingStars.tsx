import stylesShootingStars from "./background-shooting-stars.css";

export const ShootingStars = () => {
  return (
    <div id="background-shooting-stars">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

export function links() {
  return [
    { rel: "stylesheet", href: stylesShootingStars },
  ];
} 
