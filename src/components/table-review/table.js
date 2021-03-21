import RowCharacter from "../row-review/row";
import Row from "../row-review/row";
import RowReview from "../row-review/row";
import RowStory from "../row-story/row";
import "./table.css";

function TableReview(props) {
  const { content, type, id } = props;

  return (
    <table className="table">
      <thead>
        {id === "character" ? (
          <tr>
            <th className="text-secondary dark:text-darksecondary">
              Character Name
            </th>
            <th className="text-secondary dark:text-darksecondary">Author</th>
            <th className="text-secondary dark:text-darksecondary">
              Importance
            </th>
            <th className="text-secondary dark:text-darksecondary">
              Romantic Orientation
            </th>
            <th className="text-secondary dark:text-darksecondary">
              Sexual Orientation
            </th>
            <th className="text-secondary dark:text-darksecondary">More</th>
          </tr>
        ) : id === "story" ? (
          <tr>
            <th className="text-secondary dark:text-darksecondary">
              Story Title
            </th>
            <th className="text-secondary dark:text-darksecondary">Author</th>
          </tr>
        ) : (
          <tr>
            <th className="text-secondary dark:text-darksecondary">
              Review for
            </th>
            <th className="text-secondary dark:text-darksecondary">Reviewer</th>
          </tr>
        )}
      </thead>

      <tbody>
        {content.map((c) => {
          return <RowReview content={c} type={type} id={id} />;
        })}
      </tbody>
    </table>
  );
}

export default TableReview;
