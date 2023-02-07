
import { useState, useEffect } from "react";
import React from "react";

const Genres = ({ type, setPage }) => {
const [selectedGenres, setSelectedGenres] = useState([]);
const [genres, setGenres] = useState([]);

const handleAdd = (genre) => {
setSelectedGenres([...selectedGenres, genre]);
setGenres(genres.filter((g) => g.id !== genre.id));
setPage(1);
};

const handleRemove = (genre) => {
setSelectedGenres(
selectedGenres.filter((selected) => selected.id !== genre.id)
);
setGenres([...genres, genre]);
setPage(1);
};

const fetchGenres = async () => {
const { data } = await fetch(`
https://api.themoviedb.org/3/genre/${type}/list?api_key=7e5e27e6b51bcfd87532d3a63a2c2646&language=en-US`
);
setGenres(data.genres);
};

useEffect(() => {
fetchGenres();
}, []);

return (
<div className="p-6">
{selectedGenres.map((genre) => (
<span
className="bg-primary text-white px-3 py-1 m-2 rounded-full inline-block cursor-pointer hover:bg-gray-900"
key={genre.id}
onClick={() => handleRemove(genre)}
>
{genre.name}
<span className="ml-2 text-sm font-medium">x</span>
</span>
))}
{genres.map((genre) => (
<span
className="bg-gray-900 text-white px-3 py-1 m-2 rounded-full inline-block cursor-pointer hover:bg-primary"
key={genre.id}
onClick={() => handleAdd(genre)}
>
{genre.name}
</span>
))}
</div>
);
};

export default Genres;