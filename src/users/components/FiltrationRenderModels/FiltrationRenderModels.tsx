import "./styles.css";

import { FunctionComponent } from "react";
import { Col, Nav, Row, Tab } from "react-bootstrap";
import { listAllTabs } from "constants/constants";
import { RenderModels } from "./RenderModels";
import { IValueProps } from "interfaces/model";
import { useDispatch, useSelector } from "react-redux";
import { getModels, setSearchQueryParam } from "store/slices/models";
import { searchModelsSelector } from "store/selectors/models";

export const FiltrationRenderModels: FunctionComponent = () => {
  const dispatch = useDispatch();
  const queryParam = useSelector(searchModelsSelector);
  console.log(queryParam);
  const searchQueryParam = queryParam.searchQueryParam;

  const setQuery = ({ value }: IValueProps) => {
    return () => {
      dispatch(setSearchQueryParam({ searchQueryParam, value }));
      dispatch(getModels({ searchQueryParam, value }));
    };
  };

  const generalObj = listAllTabs.map((item: any) => {
    const arrayLinks: any = Object.values(item)[0];
    const arrayTitle = Object.keys(item)[0];
    console.log(arrayTitle);
    const linksAndTabs = arrayLinks?.map((title: any) => {
      const tabs = (
        <Tab.Pane eventKey={title} key={title + arrayTitle}>
          <RenderModels />
        </Tab.Pane>
      );
      const links = (
        <Nav.Item key={title + arrayTitle}>
          <Nav.Link
            eventKey={title}
            key={title + arrayTitle}
            style={{ color: "white", cursor: "pointer" }}
            onClick={setQuery({ value: { [arrayTitle]: title } })}
          >
            {title}
          </Nav.Link>
        </Nav.Item>
      );
      return { links, tabs };
    });
    return linksAndTabs;
  });

  const allLinksAndTabs = generalObj.map((item) => {
    const tabs = item.map((tab: any) => {
      return tab.tabs;
    });
    const links = item.map((link: any) => {
      return link.links;
    });
    return { links, tabs };
  });

  return (
    <>
      <Tab.Container id="left-tabs-example" defaultActiveKey="Teenagers">
        <Row>
          <Col sm={3} className="bg-secondary p-2 rounded">
            <Nav variant="pills" className="flex-column">
              {allLinksAndTabs.map((item: any) => item.links)}
            </Nav>
          </Col>
          <Col sm={9}>
            {/* <Tab.Content>
              {allLinksAndTabs.map((item: any) => item.tabs)}
            </Tab.Content> */}
            <Tab.Content>
              <Tab.Pane eventKey="Teenagers">
                <RenderModels />
              </Tab.Pane>
              <Tab.Pane eventKey="Young">
                <RenderModels />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </>
  );
};
