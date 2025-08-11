'use strict';

{
  const diff = Date.now() - new Date(2023, 5, 10).getTime();
  const days = Math.floor(diff / 1000 / 60 / 60 / 24);

  console.log(diff);
  console.log(days);
}