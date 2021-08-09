import React, { useState } from "react";
import CharacterItem from "./CharacterItem";
const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item}></CharacterItem>

        /* <Pagination
                              postsPerPage={postsPerPage}
                              totalPosts={posts.length}
                              paginate={paginate}
                            /> */
      ))}
    </section>
  );
};

export default CharacterGrid;
