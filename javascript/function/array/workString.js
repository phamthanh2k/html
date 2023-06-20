// lam viec voi chuoi
var myString = "hoc js tai  js js f8";

// keyword : javascrip string methods

// 1. length
// console.log(mysString.length)

/*  2 . Find index : tìm vị trí nằm trong 1 chuỗi
 + trả về vị trí đầu tiên của indexof còn những thằng sau đó nó sẽ không trả về
+ muốn tìm vị trí số 2 thì trỏ đến số sau vị trí thứ nhất 
+ muốn tìn vị trí cuối cùng trong chuỗi thì sử dụng lastIndexOf 
+ trong trường hợp không tìm đc thì trả về âm 1
+ phân biệt chữ hoa chữ thường */
console.log(myString.search("js"));

/*  3.cut string
+ muốn lấy từ phải qua trái thì sử dụng vị tri 0 đến số âm */
console.log(myString.slice(-3, -1));

/*
4.replace  
+ thay thế chữ đầu tiền còn những chữ phía sau nó không thay thế

 */
console.log(myString.replace("js", "javascrip"));

/* 5. convert to upper case
+ chuyển đỗi sang chữ hoa  */
console.log(myString.toUpperCase());
/*6. convert to lower case 
+  chuyển đổi sang hữ thường
*/

console.log(myString.toLocaleLowerCase());

/* 
7. trim 
+ loại bỏ khoảng trắng thừa của 2 đầu đi
 */
console.log(myString.trim());

/* 8. splip
+ dựa vào 1 điểm chung để cắt thành 1 array  */

var languages = "javascript,php,ruby";

console.log(languages.split(", "));

/* 
9 . get a character by index 
*/

const mysString2 = "son dang";
console.log(mysString2.charAt(10));
