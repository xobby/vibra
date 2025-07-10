import { CustomIcon } from '@components/ui/custom-icon';
import { SEO } from './seo';

export function Placeholder(): JSX.Element {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <SEO
        title='Vibra'
        description='From breaking news to viral moments, culture to conversations — Vibra brings you the world, as it happens.'
        image='/home.png'
      />
      <i>
        <CustomIcon
          className='h-20 w-20 text-[#1DA1F2]'
          iconName='VibraIcon'
        />
      </i>
    </main>
  );
}
