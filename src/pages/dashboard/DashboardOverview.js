import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog, faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Form, Button, ButtonGroup, Breadcrumb, InputGroup, Dropdown } from '@themesberg/react-bootstrap';

import { RecentAction } from "../../components/RecentAction";

export default () => {
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
            <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
            <Breadcrumb.Item active>Recent Action</Breadcrumb.Item>
            {/* <Breadcrumb.Item active>Transactions</Breadcrumb.Item> */}
          </Breadcrumb>
          <h4>Recent Action</h4>
          {/* <p className="mb-0">Your web analytics dashboard template.</p> */}
        </div>
        {/* <div className="btn-toolbar mb-2 mb-md-0">
          <ButtonGroup>
            <Button variant="outline-primary" size="sm">Share</Button>
            <Button variant="outline-primary" size="sm">Export</Button>
          </ButtonGroup>
        </div> */}
      </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <InputGroup.Text>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroup.Text>
              <Form.Control type="text" placeholder="Search" />
            </InputGroup>
          </Col>
          {/* <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                <span className="icon icon-sm icon-gray">
                  <FontAwesomeIcon icon={faCog} />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                <Dropdown.Item className="d-flex fw-bold">
                  10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                <Dropdown.Item className="fw-bold">30</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col> */}
        </Row>
      </div>

      <RecentAction />
    </>
  );
};

// import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCashRegister, faChartLine, faCloudUploadAlt, faPlus, faRocket, faTasks, faUserShield } from '@fortawesome/free-solid-svg-icons';
// import { Col, Row, Button, Dropdown, ButtonGroup } from '@themesberg/react-bootstrap';

// import { CounterWidget, CircleChartWidget, BarChartWidget, TeamMembersWidget, ProgressTrackWidget, RankingWidget, SalesValueWidget, SalesValueWidgetPhone, AcquisitionWidget } from "../../components/Widgets";
// import { PageVisitsTable } from "../../components/Tables";
// import { trafficShares, totalOrders } from "../../data/charts";

// export default () => {
//   return (
//     <>
//       Dashboard overview
//     </>



    // <>
    //   <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
    //     <Dropdown className="btn-toolbar">
    //       <Dropdown.Toggle as={Button} variant="primary" size="sm" className="me-2">
    //         <FontAwesomeIcon icon={faPlus} className="me-2" />New Task
    //       </Dropdown.Toggle>
    //       <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
    //         <Dropdown.Item className="fw-bold">
    //           <FontAwesomeIcon icon={faTasks} className="me-2" /> New Task
    //         </Dropdown.Item>
    //         <Dropdown.Item className="fw-bold">
    //           <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" /> Upload Files
    //         </Dropdown.Item>
    //         <Dropdown.Item className="fw-bold">
    //           <FontAwesomeIcon icon={faUserShield} className="me-2" /> Preview Security
    //         </Dropdown.Item>

    //         <Dropdown.Divider />

    //         <Dropdown.Item className="fw-bold">
    //           <FontAwesomeIcon icon={faRocket} className="text-danger me-2" /> Upgrade to Pro
    //         </Dropdown.Item>
    //       </Dropdown.Menu>
    //     </Dropdown>

    //     <ButtonGroup>
    //       <Button variant="outline-primary" size="sm">Share</Button>
    //       <Button variant="outline-primary" size="sm">Export</Button>
    //     </ButtonGroup>
    //   </div>

    //   <Row className="justify-content-md-center">
    //     <Col xs={12} className="mb-4 d-none d-sm-block">
    //       <SalesValueWidget
    //         title="Sales Value"
    //         value="10,567"
    //         percentage={10.57}
    //       />
    //     </Col>
    //     <Col xs={12} className="mb-4 d-sm-none">
    //       <SalesValueWidgetPhone
    //         title="Sales Value"
    //         value="10,567"
    //         percentage={10.57}
    //       />
    //     </Col>
    //     <Col xs={12} sm={6} xl={4} className="mb-4">
    //       <CounterWidget
    //         category="Customers"
    //         title="345k"
    //         period="Feb 1 - Apr 1"
    //         percentage={18.2}
    //         icon={faChartLine}
    //         iconColor="shape-secondary"
    //       />
    //     </Col>

    //     <Col xs={12} sm={6} xl={4} className="mb-4">
    //       <CounterWidget
    //         category="Revenue"
    //         title="$43,594"
    //         period="Feb 1 - Apr 1"
    //         percentage={28.4}
    //         icon={faCashRegister}
    //         iconColor="shape-tertiary"
    //       />
    //     </Col>

    //     <Col xs={12} sm={6} xl={4} className="mb-4">
    //       <CircleChartWidget
    //         title="Traffic Share"
    //         data={trafficShares} />
    //     </Col>
    //   </Row>

    //   <Row>
    //     <Col xs={12} xl={12} className="mb-4">
    //       <Row>
    //         <Col xs={12} xl={8} className="mb-4">
    //           <Row>
    //             <Col xs={12} className="mb-4">
    //               <PageVisitsTable />
    //             </Col>

    //             <Col xs={12} lg={6} className="mb-4">
    //               <TeamMembersWidget />
    //             </Col>

    //             <Col xs={12} lg={6} className="mb-4">
    //               <ProgressTrackWidget />
    //             </Col>
    //           </Row>
    //         </Col>

    //         <Col xs={12} xl={4}>
    //           <Row>
    //             <Col xs={12} className="mb-4">
    //               <BarChartWidget
    //                 title="Total orders"
    //                 value={452}
    //                 percentage={18.2}
    //                 data={totalOrders} />
    //             </Col>

    //             <Col xs={12} className="px-0 mb-4">
    //               <RankingWidget />
    //             </Col>

    //             <Col xs={12} className="px-0">
    //               <AcquisitionWidget />
    //             </Col>
    //           </Row>
    //         </Col>
    //       </Row>
    //     </Col>
    //   </Row>
    // </>

    
//   );
// };
