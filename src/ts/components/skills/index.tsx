import React from "react";
import Item from "./item";
import Context from "./../../store";
import { Accordions } from "./../../shared";

interface Props extends React.HTMLProps<HTMLDivElement> { }

export default (props: Props) => {
  return (
    <div {...props}>
      <Context.Consumer>
        {data => (
          <Accordions>
            {data.skills.map((skill, i) => <Item key={i} name={skill.name} percentage={skill.knowledgeInPercentage} projects={skill.projects} />)}
          </Accordions>
        )}
      </Context.Consumer>
    </div>
  );
}