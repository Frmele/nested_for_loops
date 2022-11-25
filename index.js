'use strict';

const paintLivingRoomProject = [
  ["paint", "sand paper", "brushes", "wallpaper stripper"],
  ["colors", "painting techniques", "music for DIY"],
  ["strip wallpaper", "clean walls", "sand surfaces", "apply paint"],
  ["colors", "who does what", "budget", "sand paper"],
];
console.table(paintLivingRoomProject);


for (const list of paintLivingRoomProject) {
  console.log("------");
  console.log(`The following list has ${list.length} items in it:`);
  for (const listItem of list) {
   console.log(listItem);
  }
}