/* 
object trong javascript 

systax : var object = {
    key :value ;
}
+ thêm mới 1 key : value 
systax :+ object.key = value
+ object[key] = value (dành cho key không hợp ký tự truyền dưới dạnh string)
* Lưu ý : có thể đưa key thành dạng chuỗi 
+ cách lấy value : object.key
+ key không có giá trị trả về undefined
+  tạo ra biến đc gán giá trị giống  key trong object thì làm thế nào 
systax : object[nameBien]
+ cách để xóa đi 1 value :  delete object.key ;
+ key có thể gán giá trị là 1 function 
lưu ý : cách gọi key trong object gồm 2 loai 
++ function --> phương thức / method
++ other --> thuộc tính / property
*/

var myInfo = {
  name: "son dang",
  age: 18,
  address: "ha noi, vn",
  [emailKey]: "thanh@gmail.com",
  getName: function () {
    return this.name;
  },
};
var emailKey = "email";

myInfo["my-email"] = "thanh@gmail.com";
console.log(myInfo.getName());               
