import { FooterWrapper, SocialIcon, UpArrowButton } from "./styles";
import Link from "next/link";

const FACEBOOK_PROFILE = "https://www.facebook.com/ezsailingcharters";
const INSTAGRAM_PROFILE = "https://www.instagram.com/everythingzensailing/";
const TRIPADVISOR_PROFILE =
  "https://www.tripadvisor.com/Attraction_Review-g54171-d23477199-Reviews-Everything_Zen_Sailing_Charters-Charleston_South_Carolina.html?m=19905";

export const Footer: React.FC = () => {
  const footerItems = [
    { label: "CHARTERS & RATES", relRoute: "/charters" },
    { label: "CATERING", relRoute: "/catering" },
    { label: "SPECIAL OCCASIONS", relRoute: "/special-occasions" },
    { label: "OUR STORY", relRoute: "/story" },
    { label: "FAQ", relRoute: "/faq" },
    { label: "CONTACT US", relRoute: "/contact" },
  ];
  return (
    <>
      <FooterWrapper>
        <img src={"/WAVEYYY.svg"} />
        <UpArrowButton
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <ul>
          {footerItems.map(({ label, relRoute }) => (
            <Link href={relRoute} key={relRoute}>
              <li>
                <h2>{label}</h2>
              </li>
            </Link>
          ))}
        </ul>
        <div>
          <SocialIcon
            href={FACEBOOK_PROFILE}
            bg={"/icons/Facebook.svg"}
            target={"_blank"}
          />
          <SocialIcon
            href={INSTAGRAM_PROFILE}
            bg={"/icons/Instagram.svg"}
            target={"_blank"}
          />
          <SocialIcon
            href={TRIPADVISOR_PROFILE}
            bg={"/icons/Tripadvisor.svg"}
            target={"_blank"}
          />
        </div>
        <span />
      </FooterWrapper>
    </>
  );
};
