/* 
+  đẹ quy là gì : là hàm tự gọi lại chính nó 
+ vấn đề của đẹ quy : xác định được điểm dừng của nó.
  phần xử lý logic handle => tạo ra điểm dừng.
  điểm dừng đệ quy chính là không gọi lại nó nữa.
  khi return thì hàm sẽ kết thúc thì nó sẽ không gọi lại hàm đệ quy nữa 

+ đặc tính của set  là value luôn unique
+ contructor function */
//   dùng vòng lặp tốn Cpu
// dùng de quy tốn ram
// lập trình hướng hàm (functional proramming )

// var array = ["a", "v", "c", "d", "a", "c", "d"];

// console.log(new Set(array));

/* function deQuy() {
  if (num < 0) {
    // dừng
    // ..
    return;
  }
  deQuy();
}

deQuy(10);
 */

function countDown(num) {
  if (num > 0) {
    console.log(num);
    return countDown(num - 1);
  }
  return num;
}

countDown(3);
