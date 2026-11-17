function isAnagram(str1, str2) {
   str1 = str1.toLowerCase()
   str2 = str2.toLowerCase()
   console.log("Lowercase string 1:", str1)
   console.log("Lowercase string 2:", str2)

   let s1=str1.split("").sort().join("")
   let s2=str2.split("").sort().join("")
   console.log("Sorted string 1:", s1)
   console.log("Sorted string 2:", s2)
   return s1 === s2
}
console.log(isAnagram("Listen", "Silent"))
console.log(isAnagram("hello", "world"))