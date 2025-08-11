'use strict';

{
  const d = new Date(2000, 3, 11);
  d.setDate(23);

  console.log(d.toLocaleString());
}