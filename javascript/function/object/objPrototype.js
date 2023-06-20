/* 
object prototype : bacsic 
+ nó như là nguyên liệu của 1 ngôi nhà 
+ this nằm bên trong hàm tạo
+ bên trong nó bao gồm thuộc tính và method
+ có thể add thuộc tính và method  sau khi đã được tạo ra 
 ++ objectName.prototype.thuộc tính hay phương thức  = value  ; 
*/

function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
// từ khóa new để tạo đối tượng
var author = new User("sơn ", "đặng ", "avatar");
var User = new User("tung ", "óc chó ", "avatar");
