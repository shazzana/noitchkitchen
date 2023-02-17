import { React, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

function SearchResultDisplay(props) {
const [search, setSearch] = useState('')

  const handleClick = (event) => {
    console.log("Button clicked!");
  };

    const resultArr = props.resultSrc;

    const results = resultArr
    .filter((el) => {
      return search.toLowerCase() === '' ? el : el.name.toLowerCase().includes(search)
    })
    .map((el) => {
      // If el.histamine is true, show tick
      // If el.histamine is false or null, show dash

      const hasMechanism = true;

      return (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.remarks}</td>
              <td>
                {hasMechanism ? (
                  <p>
                    <i class="fa-solid fa-check"></i>
                  </p>
                ) : (
                  <p>-</p>
                )}
              </td>
              <td>
                <i class="fa-solid fa-check"></i>
              </td>
              <td>
                <i class="fa-solid fa-check"></i>
              </td>
              <td>
                <i class="fa-solid fa-check"></i>
              </td>
              <td>{el.compatibility}</td>
              <td>
                <i class="fa-solid fa-circle-plus" onClick={handleClick} ingredient={el}></i>
              </td>
            </tr>
      );
    });

  return (
    <div>
      <br />
      <h1>Search Results</h1>
      {/* TODO when backend is deployed */}
      <Table striped bordered responsive>
          <thead>
            <tr>
              <th>INGREDIENT</th>
              <th>REMARKS</th>
              <th>HISTAMINE</th>
              <th>OTHER AMINES</th>
              <th>LIBERATOR</th>
              <th>BLOCKER</th>
              <th>COMPATIBILITY</th>
              <th>ADD TO LIST</th>
            </tr>
          </thead>
      <tbody>{results}</tbody>
      </Table>
      <Table>

      </Table>
    </div>
  );
}

export default SearchResultDisplay;
