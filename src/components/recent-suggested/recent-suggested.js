import "./recent-suggested.css";

export default function RecentSuggested(props) {
  const { characters } = props;

  return (
    <div className="RecentSuggested">
      <h3>Recently Suggested Characters</h3>

      <div className="characters">
        {characters.map((character) => {
          return (
            <div className="character-card">
              <div className="line">
                <div className="chunk">
                  <h4>{character.character_name}</h4>
                  <h5>by {character.author}</h5>
                </div>
                <div className="chunk">
                  <span>
                    {character.gender}/
                    {character.importance === null
                      ? "N/A"
                      : character.importance}
                  </span>
                </div>
              </div>
              <p>
                A(n) {character.romantic_orientation}{" "}
                {character.sexual_orientation} character.
              </p>

              <a href={`/suggested-character/${character.id}`}>Read more</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
