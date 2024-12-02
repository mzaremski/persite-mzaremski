import stylesPerlinNoise from "./background-perlin-noise.css";

export const PerlinNoise = () => {
  return (
    <div id="background-perlin-noise"></div>
  )
}

export function links() {
  return [
    { rel: "stylesheet", href: stylesPerlinNoise },
  ];
} 
