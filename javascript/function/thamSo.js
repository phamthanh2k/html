// tham số hàm - javarscrip co bản
/*
1 .tham số ?
- định nghĩa ?
- kiểu dữ liệu
- tính private
- 1tham số
- nhiều tham số

2. truyền tham số
- 1 tham số
- nhiều tham số

3. arguments?
- đối tượng arguments
- giới thiệu vòng for
*/

function writeLog(message, messange2) {
  var myString = "";
  for (var param of arguments) {
    console.log(param);
    myString += ` ${param} -`;
  }
  console.log(myString);
}

writeLog(123, "run", "run");
