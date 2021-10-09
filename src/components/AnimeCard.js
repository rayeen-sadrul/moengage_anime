import React from "react";

const AnimeCard = ({ anime }) => {
	return (
		<article className="anime-card">
			<a
				href={anime.url}
				alt={anime.title}
				target="_blank"
				rel="noreferrer">
				<figure>
					<img src={anime.image_url} alt="Anime" />
				</figure>
				<h3>{anime.title}</h3>
			</a>
		</article>
	);
};

export default AnimeCard;
