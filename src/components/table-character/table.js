import RowCharacter from "../row-character/row";
import Row from "../row-review/row";
import RowReview from "../row-review/row";
import RowStory from "../row-story/row";
import "./table.css";

function TableCharacter(props) {
  const { content, type, id } = props;
  return (
    <table className="table">
      <thead>
        {id === "character" ? (
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Importance</th>
            <th>Gender</th>
            <th>Pairing</th>
            <th>Series</th>
            <th>Relationships</th>
            <th>Romantic</th>
            <th>Sexuality</th>
            <th>More</th>
          </tr>
        ) : id === "story" ? (
          <tr>
            <th>Story Title</th>
            <th>Author</th>
          </tr>
        ) : (
          <tr>
            <th>Review for</th>
            <th>Reviewer</th>
          </tr>
        )}
      </thead>

      <tbody>
        {content.map((c) => {
          return <RowCharacter content={c} type={type} id={id} />;
        })}
      </tbody>
    </table>
  );
}

export default TableCharacter;
