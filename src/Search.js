import React from "react";

export default function Search() {
  return (
    <div className="search">
      <form id="search">
        <input
          type="text"
          placeholder="Search City..."
          class="citySearchField"
          autofocus="on"
        />
        <input type="submit" value="Search" />
      </form>
      ;
    </div>
  );
}
