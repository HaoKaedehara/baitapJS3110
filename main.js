//alert("Hello JS!");
var txt1 = document.querySelector("#a");
var math = document.querySelector("#b");
var txt2 = document.querySelector("#c");
var txtkq = document.querySelector("#d");
var btnTinh = document.querySelector("#calc");

console.log("txt1");
console.log(txt1);

btnTinh.onclick = function(){
    var valA = Number(txt1.value);
    var valMath = math.value;
    var valC = Number(txt2.value);

    var operators = ['+', '-', '*', '/'];
    if(operators.indexOf(valMath)<0){
        alert("Phép tính không hợp lệ");
        math.value = '' ;
        math.focus();
        return;
    }
    txtkq.value = eval(valA+valMath+valC);
}
// BÀI TẬP 2

function inso1denN(){
    var lap2 = document.querySelector("#nSo");
    var showNSo = document.querySelector("#showNSo");
    var solapb2 =parseInt(lap2.value);
    console.log(lap2);
    var inSo = "";
    for (let i = 0; i <= solapb2 ; i++) {
        console.log(i);
           inSo = i + ' ';
           showNSo.append(inSo); 
    }
}
//Bài tập 3
function namsinh(){
    var dmy = new Date();
    var namHT;
    namHT = dmy.getFullYear();
    do{
        dmy = parseInt(prompt("Moi ban nhap nam sinh"));
    } while (parseInt(dmy) > namHT);
    alert("Tuoi cua ban la: " + (namHT-dmy));
}
//Bài tập 4
function validate(){
    console.log("vo roi, ngu loi dam vao roi, nuoc tran");
    var username = document.querySelector("#tk");
    var mk = document.querySelector("#mk");
    var rmk = document.querySelector("#rmk");

    if(username ==""){
        alert("Chưa nhập mật khẩu");
        return false;
    }
    if(mk ==""){
        alert("Chưa nhập mật khẩu");
        return false;
    }
    if(mk != rmk){
        alert("Mật khẩu chưa trùng khớp");
        return false;
    }
    alert("Kiểm tra kết nối internet của bạn, chúng tôi đang cố đăng nhập");
    return true;

}

//Bài tập 5
function like(){
    if(chkLike.checked) alert("Hmm, mình chung chí hướng nhỉ?");
    else alert("Mình chung ý nghĩ nhỉ?");
} ;
//Bài tập 6
function gioitinh(){
    console.log("Bài 6");
    var radbtn = document.getElementsByName("gtinh");
    for (var i = 0; i<radbtn.length; i++){
        if (radbtn[i].checked=== true){
            alert(radbtn[i].value);
        }
    }
} ;
// Bài tập 7
var giay = 10;
function demnguoc(){
    --giay;
    if(giay != 0){
        document.getElementById("textBox").value = giay;
        setTimeout("demnguoc()", 1000);
    }else document.getElementById("ketnoi").innerText = "Kết nối thành công";
}
demnguoc();
//bài tập 8
var min = null;
var max = null;
var value = '';
while (value != null)
{
    value = prompt("BT8 Min Max ? Nhấn cancel để xuất KQ");
    if (value != null)
    {
        if (min == null){
            min = value;
            max = value;
        }
        else 
        {
            if (min > value){
            min = value;
            }
            if (max < value){
            max = value;
            }
        }
    }
}    
var chuoi = document.querySelector("#thaythechuoi");
chuoi.innerHTML = ("Min là " + min +", Max là " + max);
//bài tập 9
var addbtn = document.querySelector("#addNum");
var subbtn = document.querySelector("#subNum");
var numVal = document.querySelector("#NumberVal");
numVal.value = 10;
addbtn.onclick = function(){
    var giatri = Number(numVal.value);
    numVal.value = ++giatri;
}
subbtn.onclick = function(){
    var giatri = Number(numVal.value);
    numVal.value = --giatri;
}
// bài 10
function tatquangcao()   
        {
            document.getElementById("an").style.display="none";
            document.getElementById("quangcao").style.display="none";
            document.getElementById("hien").style.display="block";
        }
        function hienquangcao()
        {
            document.getElementById("an").style.display="block";
            document.getElementById("quangcao").style.display="block";
            document.getElementById("hien").style.display="none";
        }