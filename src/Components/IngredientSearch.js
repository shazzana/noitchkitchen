import { useState } from "react";
import Table from "react-bootstrap/Table";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import './IngredientSearch.css';

function IngredientSearch(props) {
  const [formInput, setFormInput] = useState("");

//   const handleInput = (event) => {
//     console.log(event.target.value)
//     setFormInput(event.target.value)
// }

//   const handleSubmit = (event) => {
//     event.preventDefault();

  // const [list, setList] = useState([]);

  // const addToList = (el) => {
  //   console.log("Button clicked!");
  //   const oldList = [...list];
  //   const newList = oldList.concat(el);
  //   setList(newList);
  // };

  // console.log(list);

  // const removeFromList = (id) => {
  //   const oldList = [...list];
  //   const newList = oldList.filter((el)=>el.id !==id)
  //   setList(newList);
  // }

  // const searchItem = props.itemSrc;
  const ingredientsArr = props.APIDataSrc;


  // const searchResults = ingredientsArr.filter((item) => {
  //   const searchItemLowerCase = formInput.toLowerCase();
  //   const ingredientName = item.name.toLowerCase();

  //   return searchItemLowerCase && ingredientName.includes(searchItemLowerCase);
  // });

  // const searchResultsData = 

  console.log(formInput)
  const allIngredients = ingredientsArr
  .filter((item) => {
      const searchItemLowerCase = formInput.toLowerCase();
      const ingredientName = item.name.toLowerCase();

      return searchItemLowerCase === ''
      ? item 
      : ingredientName.includes(searchItemLowerCase)
  
      // return searchItemLowerCase && ingredientName
    })
  .map((el) => {
    let hasHistamine = el.histamine;
    let hasOtherAmines = el.other_amines;
    let hasLiberator = el.liberator;
    let hasBlocker = el.blocker;
    const addToList = props.listItemSrc;

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
          <i
            class="fa-solid fa-circle-plus"
            onClick={() => addToList(el)}
            ingredient={el}
          ></i>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <div className="Header">
        <h1>Ingredient Search</h1>
        <Form className="Form-container">
          <Form.Group className="Form-field" controlId="formSearch">
            <Form.Control
              // value={formInput}
              // onChange={handleInput}
              onChange={(e) => setFormInput(e.target.value)}
              type="search-field"
              placeholder="Search ingredient"
            />
          </Form.Group>
          <br />
      </Form>
      </div>
      {/* TODO when backend is deployed */}
      <Container className="Ingredient-Table">
        <Table striped bordered responsive >
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
                          Presence of liberators of mast cell mediators
                          (histamine liberators)
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
                          <strong>0: </strong>Well tolerated, no symptoms
                          expected at usual intake
                          <br />
                          <br />
                          <strong>1: </strong>Moderately compatible, minor
                          symptoms, occasional consumption of small quantities
                          is often tolerated
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
              <th>ADD TO LIST</th>
            </tr>
          </thead>
          <tbody>{allIngredients}</tbody>
        </Table>
      </Container>
    </div>
  );
}

export default IngredientSearch;
