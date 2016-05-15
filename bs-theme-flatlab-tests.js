// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by bs-theme-flatlab.js.
import { name as packageName } from "meteor/bs-theme-flatlab";

// Write your tests here!
// Here is an example.
Tinytest.add('bs-theme-flatlab - example', function (test) {
  test.equal(packageName, "bs-theme-flatlab");
});
