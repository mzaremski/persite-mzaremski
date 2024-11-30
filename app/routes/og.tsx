import { ImageResponse } from '@vercel/og';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import persiteData from '../../persite-data';
import { Box, Card, Flex } from '@radix-ui/themes';
import radixStyles from "@radix-ui/themes/styles.css?url";


export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);

  const fontColor = persiteData.theme.mode === 'dark' ? '#ffffff' : '#000000';
  const shadowColor = persiteData.theme.mode === 'dark' ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.15)';
  const backgroundImage = `http://localhost:5173/ogbackground-${persiteData.theme.mode}.jpg`;
  
  return new ImageResponse(
    (
      <div
      style={{
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
        <img src={backgroundImage} style={{position: 'absolute'}}/>
        <div style={{display: 'flex', width: '300px', height: '300px', borderRadius: '100%', overflow: 'hidden', position: 'relative', boxShadow: `0 0 40px ${shadowColor}`}}>
          <img src="http://localhost:5173/avatar.jpg" alt="" style={{position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', transform: 'translate(-50%, -50%)', top: '50%', left: '50%'}}/>
        </div>
        <div style={{display: 'flex', height: '300px', flexDirection: 'column', justifyContent: 'center', paddingLeft: '40px', textShadow: `0 0 40px ${shadowColor}`}}>
          <h1
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              color: fontColor,
              margin: '0'
            }}
          >
            {persiteData.name}
          </h1>
          <span
            style={{
              fontSize: '35px',
              color: fontColor,
            }}
          >
            {persiteData.slogan}
          </span>
        </div>
    </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
};

/*
* Created with https://www.css-gradient.com
* Gradient link: https://www.css-gradient.com/?c1=010101&c2=282828&gt=r&gd=dtt
*/
// background: #010101;
// background: radial-gradient(at center top, #010101, #282828);
