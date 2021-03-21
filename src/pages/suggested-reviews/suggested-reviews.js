import "./suggested-reviews.css";
import React from "react";
import Sidebar from "../../components/sidebar/sidebar";
import Table from "../../components/table-character/table";
import Pagination from "../../components/pagination/pagination";
import TableReview from "../../components/table-review/table";
import MobileHeader from "../../components/mobile-header/mobile-header";

export default function SuggestedReviews() {
  const [reviews, setReviews] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(0);

  React.useEffect(() => {
    fetch("https://aroacedb-back.herokuapp.com/suggest/reviews")
      .then((res) => res.json())
      .then((resJson) => {
        console.log(resJson);
        const data = resJson.data.paginated_reviews;
        console.log(data);
        setReviews(data);
        setCurrentPage(resJson.data.currentPage);
        setTotalPages(resJson.data.totalPages);
      });
  }, [currentPage]);

  return (
    <div className="SuggestedCharacters">
      <Sidebar />
      <MobileHeader />
      <div className="suggested-container bg-primary dark:bg-darkprimary transition duration-500">
        <div className="title">
          <h2 className="text-secondary dark:text-darksecondary">
            Suggested Reviews
          </h2>
        </div>
        <TableReview content={reviews} type="suggest" id="review" />
        <Pagination
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
