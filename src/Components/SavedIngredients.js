import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function SavedIngredients(props) {
  const [cat, setCat] = useState("Choose your rating");
  // const [value, setValue] = useState("")

  const list = props.listSrc;
  // console.log(list);

  const listData = list.map((el) => {
    let hasHistamine = el.histamine;
    let hasOtherAmines = el.other_amines;
    let hasLiberator = el.liberator;
    let hasBlocker = el.blocker;

    const handleSelectChange = (e) => {
      setCat(e.target.value);
      // console.log(e.target.value);
      // console.log(el.your_compatibility);
    };

    // el['your_compatibility'] = cat;
    // console.log(el.your_compatibility);
    

    return (
      <tr key={el.id}>
        <td>{el.name}</td>
        <td>{el.remarks}</td>
        <td>
          {hasHistamine ? (
            <p>
              <i class="fa-solid fa-check"></i>
            </p>
          ) : (
            <p>-</p>
          )}
        </td>
        <td>
          {hasOtherAmines ? (
            <p>
              <i class="fa-solid fa-check"></i>
            </p>
          ) : (
            <p>-</p>
          )}
        </td>
        <td>
          {hasLiberator ? (
            <p>
              <i class="fa-solid fa-check"></i>
            </p>
          ) : (
            <p>-</p>
          )}
        </td>
        <td>
          {hasBlocker ? (
            <p>
              <i class="fa-solid fa-check"></i>
            </p>
          ) : (
            <p>-</p>
          )}
        </td>
        <td>{el.compatibility}</td>
        <td>
          <Form className="d-flex">
            <Form.Select
              className="search-dropdown"
              onChange={handleSelectChange}
              value={cat}
              aria-label="Default select example"
            >
              <option>Choose your rating</option>
              <option value="0" 
              // onClick={handleSelectValue}
              >0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select>
          </Form>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <br />
      <h1>Saved Ingredients</h1>
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>INGREDIENT{""}</th>
            <th>REMARKS</th>
            <th>
              <p>
                HISTAMINE{" "}
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Popover id="popover-positioned-bottom">
                      <Popover.Header as="h3">{`Factor affecting histamine metabolism`}</Popover.Header>
                      <Popover.Body>High histamine content</Popover.Body>
                    </Popover>
                  }
                >
                  <i class="fa-solid fa-circle-info"></i>
                </OverlayTrigger>
              </p>
            </th>
            <th>
              <p>
                OTHER AMINES{" "}
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Popover id="popover-positioned-bottom">
                      <Popover.Header as="h3">{`Factor affecting histamine metabolism`}</Popover.Header>
                      <Popover.Body>
                        Presence of other biogenic amines
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <i class="fa-solid fa-circle-info"></i>
                </OverlayTrigger>
              </p>
            </th>
            <th>
              <p>
                LIBERATOR{" "}
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Popover id="popover-positioned-bottom">
                      <Popover.Header as="h3">{`Factor affecting histamine metabolism`}</Popover.Header>
                      <Popover.Body>
                        Presence of liberators of mast cell mediators (histamine
                        liberators)
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <i class="fa-solid fa-circle-info"></i>
                </OverlayTrigger>
              </p>
            </th>
            <th>
              <p>
                BLOCKER{" "}
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Popover id="popover-positioned-bottom">
                      <Popover.Header as="h3">{`Factor affecting histamine metabolism`}</Popover.Header>
                      <Popover.Body>
                        Blocker (inhibitors) of diamine oxidase or of other
                        histamine degrading enzymes
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <i class="fa-solid fa-circle-info"></i>
                </OverlayTrigger>
              </p>
            </th>
            <th>
              <p>
                COMPATIBILITY{" "}
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Popover id="popover-positioned-bottom">
                      <Popover.Header as="h3">{`Histamine Compatibility`}</Popover.Header>
                      <Popover.Body>
                        <strong>0: </strong>Well tolerated, no symptoms expected
                        at usual intake
                        <br />
                        <br />
                        <strong>1: </strong>Moderately compatible, minor
                        symptoms, occasional consumption of small quantities is
                        often tolerated
                        <br />
                        <br />
                        <strong>2: </strong>Incompatible, significant symptoms
                        at usual intake
                        <br />
                        <br />
                        <strong>3: </strong>Very poorly tolerated, severe
                        symptoms
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <i class="fa-solid fa-circle-info"></i>
                </OverlayTrigger>
              </p>
            </th>
            <th>
              <p>
                YOUR COMPATIBILITY{" "}
                <OverlayTrigger
                  placement="bottom"
                  delay={{ show: 250, hide: 400 }}
                  overlay={
                    <Popover id="popover-positioned-bottom">
                      <Popover.Header as="h3">{`Histamine Compatibility`}</Popover.Header>
                      <Popover.Body>
                        <strong>0: </strong>Well tolerated, no symptoms expected
                        at usual intake
                        <br />
                        <br />
                        <strong>1: </strong>Moderately compatible, minor
                        symptoms, occasional consumption of small quantities is
                        often tolerated
                        <br />
                        <br />
                        <strong>2: </strong>Incompatible, significant symptoms
                        at usual intake
                        <br />
                        <br />
                        <strong>3: </strong>Very poorly tolerated, severe
                        symptoms
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <i class="fa-solid fa-circle-info"></i>
                </OverlayTrigger>
              </p>
            </th>
          </tr>
        </thead>
        <tbody>{listData}</tbody>
      </Table>
    </div>
  );
}

export default SavedIngredients;
