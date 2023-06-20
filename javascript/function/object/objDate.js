/* 
obj date 
+ khi có new mới tạo thành đối tượng có thể truy xuất  các phương thức khác
+ javascript date object mdn
 */
var date = new Date();

// console.log(typeof Date());
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDay();
console.log(`${day}/${month}/${year}`);
