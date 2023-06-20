/* 
1. hàm là gì :
+ là một khối mã 
+ công việc cụ thể 

2. loại hàm :
 + build in : hàm được định nghĩa sẵn 
 + tự định nghĩa 

 3. tính chất 
  + không thực thi khi nó được dịnh nghĩa 
  + sẽ thực thi khi được gọi 
  + có nhận tham số 
  + nhận 1 giá trị
  4 . tạo hàm 
*/
function showDialog() {
  alert("hi xin chao cao ban");
}

showDialog();
// call ()

/* 
một số điều cần biết về function
1. khi function đặt trùng tên 
+ finction được khai báo sau cùng sẽ ghi đè lên
2. khai báo biến trong hàm 
+ khai báo được biến trong hàm 
và chỉ sử dụng được biến trong hàm đó 
3. định nghĩa hàm trong hàm 
hoàn toàn có thể định nghĩa hàm trong hàm 
nhưng gọi hàm đó chỉ trong hàm cha  */

function showMesage() {
  function showMesage2() {
    console.log("Messange 2");
  }
  showMesage2();
}
showMesage();
