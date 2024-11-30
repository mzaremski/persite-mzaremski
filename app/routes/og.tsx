import { ImageResponse } from '@vercel/og';
import Header from '~/components/Header';
import { Card } from '@radix-ui/themes';

export const loader = async () => {
  return new ImageResponse(
    (
      <Card style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Header ogImage={true} />
      </Card>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
};
