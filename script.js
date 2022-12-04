//This object stores all insults
const insults = { 
    hair : ["Looks like you glued a raccoon to your head..", "Did you lick a wall socket this morning by any chance?", "If I had to give your haircut a name - it would be: 'an explosion on a pasta factory'!", "It seems like your hair went for a walk and didn't leave a goodbye note.."],
    face : ["Did you have a fight with a UFC fighter? You obviously lost..", "For how long was your head stuck in a beehive?", "My 110 years old grandpa hasn't been sober since he was 5 - your faces look very similar", "I think your face was designed on the 1st of April"],
    outfit : ["Was Ronald McDonald angry that you took his outfit?", "I never knew a potato bag could be worn like this", "You broke the laws of physics by fitting S-Size kid's outfit on your 300kg body", "Nice outfit for Halloween - I can clearly tell you dressed up as a floor mop! What.. It's not Halloween yet? Oh.."]
};
//Function to be used for random insult picking later
const randomInsultPicker = num => {
   let result = Math.floor(Math.random() * num);
   return result;
};

let insultArr = []; //Array to be populated with chosen results
//Choosing winners for 3 categories of judgement
let winner1 = randomInsultPicker(insults.hair.length);
let winner2 = randomInsultPicker(insults.face.length);
let winner3 = randomInsultPicker(insults.outfit.length);

//Pushing winners into the new array that we created on line 13
insultArr.push("Lets look at that hair: " + insults.hair[winner1], "That silly face of yours: " + insults.face[winner2], "And about that outfit: " + insults.outfit[winner3]);

//Results in a var with line-break and joined
let verdict = insultArr.join("\n") 

//Prints final result to console
console.log(`Let me judge how you look today..\n ${verdict}`);


