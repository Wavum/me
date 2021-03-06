import React from "react";
import { Context } from "./../../store";
import styled from "./../../theme";
import CallToAction from "./CallToAction";
import { CenterSection } from "./../../shared";
import Me from "./../../../images/me.jpg";

const Columns = styled.div`
  width: 100%;
`;

const Greeter = styled.div`
  padding-left: 15%;
  position: absolute;

  ${props => props.theme.breakpoints.media.tablet`
    padding: 8%;
    position: unset;
  `}
`;

const Image = styled.div`
  height: 100vh;
  width: 100vh;
  float: right;
  background: linear-gradient(to left, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 1)), url(${Me}) no-repeat;
  background-size: contain;

  ${props => props.theme.breakpoints.media.tablet`
    height: 100vw;
    width: 100vw;
    float: unset;
    background: linear-gradient(to top, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 1)), url(${Me}) no-repeat;
    background-size: contain;
  `}
`;

interface Props extends React.HTMLProps<HTMLDivElement> { }

export default (props: Props) => {
  return (
    <Context.Consumer>
      {data => (
        <div {...props}>
          <CenterSection noHorizontal>
            <Columns className="columns is-gapless is-vcentered">
              <Greeter>
                <p className="title">{data.hero.title}</p>
                <p className="subtitle">{data.hero.subtitle}</p>
                <CallToAction text={data.hero.callToAction} socialLinks={data.hero.socialLinks} />
              </Greeter>
              <div className="column">
                <Image />
              </div>
            </Columns>
          </CenterSection>
        </div>
      )}
    </Context.Consumer>
  );
}
