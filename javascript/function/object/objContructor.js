/* 
object contructor : giúp b tạo nên bản thiết kế 
+ 
+ khi là method thì gọi như hàm 
+ cách để xem lại bản thiết kế đối tượng : console.log(author.constructor);
+ không thể thêm đối số như cách bình thường   
*/
// mô tả thiết kế  đối tượng
function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
User.prototype.className = "F8";
User.prototype.getClassName = function () {
  return this.className;
};
// từ khóa new để tạo đối tượng
var author = new User("sơn ", "đặng ", "avatar");
var User = new User("tung ", "óc chó ", "avatar");

author.title = "chia sẻ dạo tại f8";
User.comment = "lieu có khóa asp.net k ad ";

console.log(author.getName());
console.log(User.getClassName());
