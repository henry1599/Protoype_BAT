(function(window, undefined) {
  var dictionary = {
    "da2b81d6-b3c3-402a-9aad-5b8f5ab11fde": "View submission Emily Jones",
    "a73f2c6a-1811-411e-849e-b3d88bf0f2f1": "Joining a team page",
    "78827450-0a26-455a-8db3-0d24ae7e2a69": "Choosing team page",
    "a401bd9e-a149-4f0a-aaf1-8fa60d4de81a": "Leaderboard - Department",
    "235b87af-8541-4c3c-a3f0-3b1a97e601ed": "Customization page",
    "70976b24-3dd8-497b-b9f1-8c8ab97cdf0b": "Post submission",
    "3b1e6b01-65d3-478f-8fa5-dc1390d38a00": "Shop items",
    "d41efd49-7dda-4f70-a968-e2fb77ed9b60": "Workee",
    "716d5297-0cf5-47ca-a177-f0769ee75e9e": "Leaderboard - Team",
    "64d1b6f5-abc7-459e-8cc0-d03224bb37c5": "View submission Thomas Coffer",
    "885b6989-4191-4e1a-8d71-782398789459": "Sign up page",
    "f0a8a869-39a0-4d83-89a8-224bf4f1c1d5": "Shop redeem",
    "d787e45c-909e-48c1-a69f-27e59568be6e": "Login page",
    "182a3b6b-d8d5-4bd0-8667-45ab6de9ae29": "Profile",
    "083f9eef-86bb-42d9-a168-096d6e8f7b37": "Leaderboard",
    "70377dc7-b84b-4cb7-83c6-5bfce8e51adc": "Leaderboard - company",
    "75e84bb1-e5ea-4b22-92f4-2c15f8afa309": "OKRs",
    "07203dda-d82b-48de-9d2d-8ce74d9179ab": "View Task Report",
    "cba81688-2567-40c2-aa15-6c31404cdc9c": "Tasks",
    "b7fb5df5-91d8-4dab-ba9c-5e4a6d2e96f0": "Submission",
    "b90cc887-a2ed-4e15-9659-d6531c639431": "View submission Lee Nguyen",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Challenge-Screen",
    "aa075386-aeb2-445f-a045-8e636c59ec86": "Create workee page",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);