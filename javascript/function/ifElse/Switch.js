/* 
câu lệnh rẽ nhánh  - switch 
+ cách hoạt động 
(
    truyền giá trị cho switch có thể là biến , số , chuỗi , toán tử điều kiện
    + lấy giá trị   
    + sau đó đi so sánh với case 
    + thấy giá trị đúng nhờ so sánh với toàn tử ===
    + chạy cái dòng lệnh này 
    + gặp từ khóa breack để thoát ra khỏi dòng lệnh
    + do swith tính cái case đúng, lọt vào tất cả case sau đó luôn
    gặp từ khóa  break nó mới thoát 
)
+ đưa biến vào kiểm tra 
+ case  giá trị   sau dấu : là câu lệnh thực thi 
+ break : ý nghĩa thoát khỏi câu lệnh  

Lưu ý khác : trong vài trường hợp có nhiều tác vụ có xử lý giống nhau 
 có thể xử lý :  
  switch(date ){
    case: 2
    case:3 
    case4:4
    console.log('hôm nay là thứ 2,3,4)
  }
=> in ra giá trị  hôm nay là thứ 2,3,4
                  hôm nay là thứ 2,3,4
                  hôm nay là thứ 2,3,4

giải thích do gặp phải case 2 có giá trị đúng nên sẽ lọt vào 
tất cả case còn lại cho đến khi gặp từ khóa breack

+ từ khóa default : dành cho trường hợp không  nằm trong giá trị có 
 */

var date = 2;

switch (date) {
  case 2:
    console.log("hôm nay là thứ 2");
    break;

  case 3:
    console.log("hôm nay là thứ 3");
    break;
  case 4:
    console.log("hôm nay là thứ 4");
    break;
  case 5:
    console.log("hôm nay là thứ 5");
    break;
  case 6:
    console.log("hôm nay là thứ 6");
    break;
  default:
    console.log("không biết");
    break;
}
