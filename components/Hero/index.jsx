import parse from 'html-react-parser';
import Button from '../Button';
import Div from '../Div';
import VerticalLinks from '../VerticalLinks';
import LightSpeed from 'react-reveal/LightSpeed'
import Link from 'next/link';

export default function Hero({
  title,
  subtitle,
  btnText,
  btnLink,
  scrollDownId,
  socialLinksHeading,
  heroSocialLinks,
  bgImageUrl,
}) {
  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container">
      <div className="buttons">
              <LightSpeed left>
                <div className="button_wrapper">
                    <span className="span">Info:</span> <hr />
              <Link href="https://discord.gg/vr5up7mW">
                      
                      <button class="button" id="lineExpand"><span class="button--text">Forum</span></button>
  
                      </Link>
              </div>
              </LightSpeed>
              <LightSpeed right>
                <div className="button_wrapper">
                <span className="span">Shop Now:</span> <hr />
                      <Link href="https://store.yangmc.net/">
                      <button class="button" id="bubbleBorder2"><span class="button--text">Store</span></button>
                     
                      </Link>
                      </div>
                      </LightSpeed>
              <LightSpeed right>
                <div className="button_wrapper">
                <span className="span">News:</span> <hr />
                      <Link href="https://store.yangmc.net/">
                      <button class="button" id="bubbleBorder"><span class="button--text">Feed</span></button>
                     
                      </Link>
                      </div>
                      </LightSpeed>
                      
                    

                    

            </div>
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title">{parse(title)}</h1>
          <Div className="cs-hero_info">
            <Div>
              <Button btnLink={btnLink} btnText={btnText} />
            </Div>
            <Div>
              <Div className="cs-hero_subtitle">{subtitle}</Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <a href={scrollDownId} className="cs-down_btn">
        .
      </a>
    </Div>
  );
}
