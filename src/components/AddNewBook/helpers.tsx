import { format } from "date-fns";
import React, { InputHTMLAttributes } from "react";

export const ReleaseDate: React.FC<InputHTMLAttributes<HTMLInputElement>> = (
  props
) => (
  <div className="input release-date">
    <label htmlFor="release-date">Release Date: </label>
    <input
      {...props}
      type="date"
      defaultValue={format(new Date(), "yyyy-mm-dd")}
      name="release-date"
      id="release-date"
    />
  </div>
);

export const ShelfPosition: React.FC<InputHTMLAttributes<HTMLInputElement>> = (
  props
) => (
  <div className="input shelf-position">
    <label htmlFor="shelf-position">Choose the shelf: </label>
    <input
      {...props}
      type="number"
      name="shelf-position"
      id="shelf-position"
      placeholder="1"
      defaultValue={1}
      min={1}
      max={2}
    />
  </div>
);
