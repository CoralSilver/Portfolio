import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby';
import Layout from "../components/layout/layout";
import Image from "../components/image";
import StyledBackgroundSection from '../components/backgroundImage';
import SEO from "../components/seo";
import heartIcon from "../icons/ic_heart.svg";
import GridImage from "../components/grid/gridImage";
import { Container } from "../components/container.css";
import Social from "../components/social/social";

const IndexPage = ({data, path}) => {

  return (
  <div>
        <StyledBackgroundSection>

  <Layout path={path}>
    <SEO title="Home" />
    <Container>
    <h2 className="hero-title">Coral Silverman</h2>
    <h3 className="hero-description">Front End & UI-UX Engineer</h3>
    <Social />
    </Container>
    <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
  </Layout>
  </StyledBackgroundSection>

  </div>

  )
}

export default IndexPage;

// export const data = graphql`
//   query HomepageQuery {
//     allContentJson {
//       nodes {
//         title,
//         gallery {
//           title
//           copy
//           linkTo
//           image {
//             childImageSharp {
//               fluid(maxHeight: 500, quality: 90) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }          
//         }
//       }
//     }
//   }
// `;
