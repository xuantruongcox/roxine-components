/** @jsxImportSource theme-ui */

import { Container } from "theme-ui";



function Caption({ data }) {

  const caption = data[0];

  return (
    <section
      sx={{ variant: 'banner' }}
      style={{ backgroundImage: `url(${caption.image})` }}
      className="caption"
    >

      <Container>

        <h2
          sx={{ fontSize: 0, color: 'accent', letterSpacing: 'bannerSubTitle', fontWeight: 'bold', textTransform: 'uppercase' }}
          className="caption__summary-text animate__animated animate__fadeInLeft"
        >
          {caption.summary}
        </h2>


        <h1
          sx={{ fontSize: 1, color: 'accent', letterSpacing: ['.5rem', 'bannerTitle'], textTransform: 'uppercase', fontFamily: 'body' }}
          className="caption__title-text animate__animated animate__zoomIn"
        >
          {caption.title}
        </h1>


        <p sx={{maxWidth: '80rem', fontSize: 2, color: 'accent', letterSpacing: 'standard' }} className="caption__description-text animate__animated animate__fadeInRight">
          {caption.description}
        </p>
        <a
          sx={{ variant: "button" }}
          href={caption.link.path}
          className="caption__link-btn animate__animated animate__fadeInUp"
        >
          {caption.link.label}
        </a>
      </Container>

    </section>
  );
}

export default Caption;
