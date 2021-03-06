import RowCharacter from "../row-review/row";
import Row from "../row-review/row";
import RowReview from "../row-review/row";
import RowStory from "../row-story/row";
import RowSCStory from "../row-sc-story/row";
import "./table.css";

function TableSCStory(props) {
  const { content, type, id } = props;

  return (
    <table className="table">
      <thead>
        {id === "character" ? (
          <tr>
            <th>Character Name</th>
            <th>Author</th>
            <th>Importance</th>
            <th>Romantic Orientation</th>
            <th>Sexual Orientation</th>
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
          return <RowSCStory content={c} type={type} id={id} />;
        })}
      </tbody>
    </table>
  );
}

export default TableSCStory;
