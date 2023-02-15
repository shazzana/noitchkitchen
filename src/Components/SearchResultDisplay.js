import React from "react";
import Table from "react-bootstrap/Table";

function SearchResultDisplay() {

    const handleClick = (event) => {
        console.log("Button clicked!");
    }

  return (
    <div>
      <br />
      <h1>Search Results</h1>
      <Table striped bordered responsive>
        <thead>
          <tr>
            <th>Ingredient</th>
            <th>Remarks</th>
            <th>Histamine</th>
            <th>Other Amines</th>
            <th>Liberator</th>
            <th>Blocker</th>
            <th>Compatibility</th>
            <th>Add to list</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Avocado</td>
            <td>-</td>
            <td>
              <i class="fa-solid fa-check"></i>
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
            <td>3</td>
            <td>
                <i class="fa-solid fa-circle-plus" onClick={handleClick}></i>
            </td>
          </tr>
          <tr>
            <td>Ginger</td>
            <td>Anti-inflammatory</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>0</td>
            <td>
              <i class="fa-solid fa-circle-plus"></i>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered>
        <thead>
            <tr>
                <td colSpan={4}>Mechanisms affecting histamine metabolism</td>
                <td colSpan={4}>Histamine Compatibility Scale</td>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td colSpan={2}>Histamine</td>
            <td colSpan={2}>High histamine content</td>
            <td colSpan={2}>0</td>
            <td colSpan={2}>
              Well tolerated, no symptoms expected at usual intake
            </td>
          </tr>
          <tr>
            <td colSpan={2}>Other Amines</td>
            <td colSpan={2}>Other biogenic amines</td>
            <td colSpan={2}>1</td>
            <td colSpan={2}>
            Moderately compatible, minor symptoms, occasional 
            consumption of small quantities is often tolerated 
            </td>
          </tr>
          <tr>
            <td colSpan={2}>Liberators</td>
            <td colSpan={2}>Histamine liberators</td>
            <td colSpan={2}>2</td>
            <td colSpan={2}>
            Incompatible, significant symptoms at usual intake
            </td>
          </tr>
          <tr>
            <td colSpan={2}>Blockers</td>
            <td colSpan={2}>Inhibitors of diamine oxidase and other histamine degrading enzymes</td>
            <td colSpan={2}>3</td>
            <td colSpan={2}>
            Very poorly tolerated, severe symptoms
            </td>
          </tr>
          <tr>
            <td colSpan={2}></td>
            <td colSpan={2}></td>
            <td colSpan={2}>-</td>
            <td colSpan={2}>
            No general statement possible
            </td>
          </tr>
          <tr>
          <td colSpan={2}></td>
            <td colSpan={2}></td>
            <td colSpan={2}>?</td>
            <td colSpan={2}>
            Insufficient or contradictory information
            </td>
          </tr>
        </tbody>
        </Table>
    </div>
  );
}

export default SearchResultDisplay;