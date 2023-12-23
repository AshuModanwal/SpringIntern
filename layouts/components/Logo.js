import config from "@config/config.json";
import Image from "next/image";
import Link from "next/link";

const Logo = ({ src }) => {
  // destructuring items from config object
  const { base_url, logo, logo_width, logo_height, logo_text, title } =
    config.site;

  return (
    <Link
      href={base_url}
      className="navbar-brand block py-1"
      style={{
        height: logo_height.replace("px", ""),
        width: logo_width.replace("px", ""),
      }}
    >
      {src || logo ? (
        <Image
          width={logo_width.replace("rem", "")* 0.7}
          height={logo_height.replace("rem", "") * 0.7}
          src={src ? src : logo}
          alt={title}
          priority
        />
      ) : logo_text ? (
        logo_text
      ) : (
        title
      )}
    </Link>
  );
};

export default Logo;
