/* 
breack continue  
+ breach dùng để ngắt các 
+ continue : dùng để vòng lặp được tiếp tục  
để i lặp lại 10 lần nhưng phải để i dừng lại 5 lần 
*/

for (var i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    continue;
  }
  console.log("đang nhập" + i);
}
