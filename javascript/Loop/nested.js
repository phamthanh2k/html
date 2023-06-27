/* 
vòng lặp lồng nhau nest
+ cách lấy index  mảng con của mảng 
 -b1 :  truy xuất index mảng cha trước 
 -b2 : truy xuất index mảng con 
 + cú pháp biến[indexCha][indexCon]   */

var myArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (i = 0; i < myArray.length; i++) {
  for (j = 0; j < myArray[i].length; j++) {
    console.log(myArray[i][j]);
  }
}
// thêm ví dụ

for (var i = 100; i > 0; i -= 5) {
  console.log(i);
}
