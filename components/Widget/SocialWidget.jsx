import { Icon } from '@iconify/react';
import Div from '../Div';
import Link from 'next/link';

export default function SocialWidget() {
  return (
    <Div className="cs-social_btns cs-style1">
      <Link href="/" className="cs-center">
        <Icon icon="fa6-brands:reddit" />
      </Link>
  
    </Div>
  );
}
