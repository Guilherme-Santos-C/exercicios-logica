var isAnagram = function (s, t) {
  let arrS = s.split("").sort().join("");
  let arrT = t.split("").sort().join("");
  
  return arrS == arrT;
};

console.log(isAnagram("anagram", "nagaram"));
