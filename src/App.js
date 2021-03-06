import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Character from "./pages/character/character";
import SuggestCharacter from "./pages/suggest-character/suggest-character";
import Success from "./pages/success/success";
import About from "./pages/about/about";
import Dashboard from "./pages/dashboard/dashboard";
import SuggestedCharacters from "./pages/suggested-characters/suggested-characters";
import SuggestedCharacter from "./pages/suggested-character/suggested-character";
import AllCharacters from "./pages/all-characters/all-characters";
import SuggestStory from "./pages/suggest-story/suggest-story";
import UpdateStory from "./pages/update-story/update-story";
import SuggestReview from "./pages/suggest-review/suggest-review";
import SuggestedStories from "./pages/suggested-stories/suggested-stories";
import SuggestedReviews from "./pages/suggested-reviews/suggested-reviews";
import UpdateCharacter from "./pages/update-character/update-character";
import AddCharacter from "./pages/add-character/add-character";
import UpdateReview from "./pages/update-review/update-review";
import SuggestedStory from "./pages/suggested-story/suggested-story";
import AddStory from "./pages/add-story/add-story";
import SuggestedReview from "./pages/suggested-review/suggested-review";
import AddReview from "./pages/add-review/add-review";

import DataContext from "./utils/data";
import AboutTeam from "./pages/about-team/about";
import SuggestStorySC from "./pages/suggest-story-sc/suggest-story";
import SuccessSTSC from "./pages/success-st-sc/success";
import SuggestedStoriesSC from "./pages/sc-suggested-stories/suggested-stories";
import SCSuggestedStory from "./pages/sc-suggested-story/suggested-story";
import Contact from "./pages/contact/contact";
import Results from "./pages/results/results";
import SuccessDelete from "./pages/success-delete/success";
import SuccessDeleteCharacter from "./pages/success-delete-all/success";
import About2 from "./pages/about2/about";

// import useDarkMode from "./utils/theme-context";

function App() {
  //   useDarkMode();
  const [characterCheck, setCharacterCheck] = React.useState(true);
  const [reviewCheck, setReviewCheck] = React.useState(true);
  const [storyCheck, setStoryCheck] = React.useState(true);

  return (
    <BrowserRouter>
      <DataContext.Provider
        value={{
          characterCheck,
          setCharacterCheck,
          storyCheck,
          setStoryCheck,
          reviewCheck,
          setReviewCheck,
        }}
      >
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/character/:id" component={Character} />
            <Route path="/suggest-character" component={SuggestCharacter} />
            <Route path="/success" component={Success} />
            <Route path="/about" component={About} />
            <Route path="/dashboard" component={Dashboard} />
            <Route
              path="/suggested-characters"
              component={SuggestedCharacters}
            />
            <Route
              path="/suggested-character/:id"
              component={SuggestedCharacter}
            />
            <Route path="/all-characters" component={AllCharacters} />
            <Route path="/update-character/:id" component={UpdateCharacter} />
            <Route path="/suggest-story/:id" component={SuggestStory} />
            <Route path="/suggest-story-sc/:id" component={SuggestStorySC} />
            <Route path="/update-story/:id" component={UpdateStory} />
            <Route path="/suggest-review/:id" component={SuggestReview} />
            <Route path="/suggested-stories" component={SuggestedStories} />
            <Route path="/suggested-reviews" component={SuggestedReviews} />
            <Route path="/add-character" component={AddCharacter} />
            <Route path="/update-review/:id" component={UpdateReview} />
            <Route path="/suggested-story/:id" component={SuggestedStory} />
            <Route path="/suggested-review/:id" component={SuggestedReview} />
            <Route path="/add-story/:id" component={AddStory} />
            <Route path="/add-review/:id" component={AddReview} />
            <Route path="/success" component={Success} />
            <Route path="/success-stsc/:id" component={SuccessSTSC} />
            <Route path="/success-deleted" component={SuccessDelete} />
            <Route
              path="/success-deleted-ch"
              component={SuccessDeleteCharacter}
            />
            <Route path="/about-the-team" component={AboutTeam} />
            <Route
              path="/sc-suggested-stories"
              component={SuggestedStoriesSC}
            />

            <Route
              path="/sc-suggested-story/:id"
              component={SCSuggestedStory}
            />
            <Route path="/contact" component={Contact} />
            <Route path="/results" component={Results} />
            <Route path="/editor" component={About2} />
          </Switch>
        </div>
      </DataContext.Provider>
    </BrowserRouter>
  );
}

export default App;
