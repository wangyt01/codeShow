//获取银行卡号不包括LunmCode
function getBankCardWithoutLunmCode(bank_no) {
    // bank_no 银行代码
    //控制位数. 19位的银行卡 cardinalNumber=12. 16位的银行卡 cardinalNumber=9
    var cardinalNumber = 12;
    var prefix = "";
    switch (bank_no) {
        case "102":
            prefix = "622202";
            break;
        case "103":
            prefix = "622848";
            break;
        case "105":
            prefix = "622700";
            break;
        case "301":
            prefix = "622262";
            break;
        case "104":
            prefix = "621661";
            break;
        case "303":
            prefix = "622666";
            cardinalNumber = 9;
            break;
        case "305":
            prefix = "622622";
            break;
        case "306":
            prefix = "622556";
            break;
        case "308":
            prefix = "622588";
            cardinalNumber = 9;
            break;
        case "410":
            prefix = "622155";
            break;
        case "302":
            prefix = "622689";
            break;
        case "304":
            prefix = "622630";
            break;
        case "309":
            prefix = "622908";
            break;
        case "310":
            prefix = "621717";
            break;
        case "315":
            prefix = "622323";
            break;
        case "316":
            prefix = "622309";
            break;
        default:
            return '';
    }
    //生成不包括Luhm校验码的银行卡号
    var bankCardWithoutLunmCode = prefix;
    for (var j = 0; j < cardinalNumber; j++) {
        bankCardWithoutLunmCode += Math.floor(Math.random() * 10);
    }
    return bankCardWithoutLunmCode;
}
// 获取Luhn Code
function getLuhnCode(bankCardWithoutLunmCode) {
    if (bankCardWithoutLunmCode == '') return '';
    var no = bankCardWithoutLunmCode.split('').reverse().join('');
    // 定义奇数/偶数数据
    var addArr = new Array();
    var evenArr = new Array();

    // 奇数/偶数数组分开
    for (var i = 0; i < no.length; i++) {
        if (i % 2 == 0) {
            addArr[i / 2] = no[i];
        } else {
            evenArr[(i - 1) / 2] = no[i];
        }
    }
    //奇数数组内容x2
    // 如果乘以2得到的数字是两位,把这两位相加得到一位数字.
    // 如果相加后的内容时两位数,减去9.
    for (var i = 0; i < addArr.length; i++) {
        var temp = parseInt(addArr[i]) * 2;
        if (temp > 9) {
            temp = parseInt(String(temp).charAt(0)) + parseInt(String(temp).charAt(1));
            if (temp > 9) {
                temp = temp - 9;
            }
        }
        addArr[i] = temp;
    }
    //两个数组合并
    var arr = addArr.concat(evenArr);
    var oddEvenCount = 0;

    for (var i = 0; i < arr.length; i++) {
        oddEvenCount += parseInt(arr[i]);
    }
    //生成Lnhn code
    var LuhnCode = oddEvenCount % 10 == 0 ? 0 : (10 - oddEvenCount % 10);
    return LuhnCode;
}
function getBankCard(bank_no) {
    var bankCardWithoutLunmCode = getBankCardWithoutLunmCode(bank_no);
    var bankCard = bankCardWithoutLunmCode + getLuhnCode(bankCardWithoutLunmCode) + "";
    console.log("银行卡号:", bankCard);
    return bankCard;
}
// 随机生成姓名
function getName() {
    var familyNames = new Array(
        "赵", "钱", "孙", "李", "周", "吴", "郑", "王", "冯", "陈",
        "褚", "卫", "蒋", "沈", "韩", "杨", "朱", "秦", "尤", "许",
        "何", "吕", "施", "张", "孔", "曹", "严", "华", "金", "魏",
        "陶", "姜", "戚", "谢", "邹", "喻", "柏", "水", "窦", "章",
        "云", "苏", "潘", "葛", "奚", "范", "彭", "郎", "鲁", "韦",
        "昌", "马", "苗", "凤", "花", "方", "俞", "任", "袁", "柳",
        "酆", "鲍", "史", "唐", "费", "廉", "岑", "薛", "雷", "贺",
        "倪", "汤", "滕", "殷", "罗", "毕", "郝", "邬", "安", "常",
        "乐", "于", "时", "傅", "皮", "卞", "齐", "康", "伍", "余",
        "元", "卜", "顾", "孟", "平", "黄", "和", "穆", "萧", "尹"
    );
    var givenNames = new Array(
        "子璇", "淼", "国栋", "夫子", "瑞堂", "甜", "敏", "尚", "国贤", "贺祥", "晨涛",
        "昊轩", "易轩", "益辰", "益帆", "益冉", "瑾春", "瑾昆", "春齐", "杨", "文昊",
        "东东", "雄霖", "浩晨", "熙涵", "溶溶", "冰枫", "欣欣", "宜豪", "欣慧", "建政",
        "美欣", "淑慧", "文轩", "文杰", "欣源", "忠林", "榕润", "欣汝", "慧嘉", "新建",
        "建林", "亦菲", "林", "冰洁", "佳欣", "涵涵", "禹辰", "淳美", "泽惠", "伟洋",
        "涵越", "润丽", "翔", "淑华", "晶莹", "凌晶", "苒溪", "雨涵", "嘉怡", "佳毅",
        "子辰", "佳琪", "紫轩", "瑞辰", "昕蕊", "萌", "明远", "欣宜", "泽远", "欣怡",
        "佳怡", "佳惠", "晨茜", "晨璐", "运昊", "汝鑫", "淑君", "晶滢", "润莎", "榕汕",
        "佳钰", "佳玉", "晓庆", "一鸣", "语晨", "添池", "添昊", "雨泽", "雅晗", "雅涵",
        "清妍", "诗悦", "嘉乐", "晨涵", "天赫", "玥傲", "佳昊", "天昊", "萌萌", "若萌"
    );
    var i = parseInt(Math.random() * 100);
    var familyName = familyNames[i];
    var j = parseInt(Math.random() * 100);
    var givenName = givenNames[i];
    var name = familyName + givenName;
    console.log("姓名", name);
    return name;
}
// 生成随机身份证号
function getId_no() {
    var coefficientArray = ["7", "9", "10", "5", "8", "4", "2", "1", "6", "3", "7", "9", "10", "5", "8", "4", "2"]; // 加权因子
    var lastNumberArray = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"]; // 校验码
    var address = "420101"; // 住址
    var birthday = "19810101"; // 生日
    var s = Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString() + Math.floor(Math.random() * 10).toString();
    var array = (address + birthday + s).split("");
    var total = 0;
    for (i in array) {
        total = total + parseInt(array[i]) * parseInt(coefficientArray[i]);
    }
    var lastNumber = lastNumberArray[parseInt(total % 11)];
    var id_no_String = address + birthday + s + lastNumber;
    console.log("身份证", id_no_String);
    return id_no_String;
}
window.onload = function () {
    // 获取select的选中项
    var checkedBankNo = document.getElementsByName("bank_no")[0].value;
    // 获取生成卡号的按钮
    var generateBankcard = document.getElementById("generateBankcard");
    generateBankcard.onclick = function () {
        // 获取卡号文本框
        var bankcard = document.getElementById("bankcard");
        // 获取select的选中项
        var checkedBankNo = document.getElementsByName("bank_no")[0].value;
        bankcard.value = getBankCard(checkedBankNo);
    }
    // 生成身份证号码
    var generateIdentity = document.getElementById("generateIdentity");
    generateIdentity.onclick = function () {
        var identity = document.getElementById("identity");
        identity.value = getId_no();
    }
    // 生成随机姓名
    var generateName = document.getElementById("generateName");
    generateName.onclick = function () {
        var name = document.getElementById("name");
        name.value = getName();
    }
}

/**
 * 一键生成
 */
$(function(){
    $('#getAll').click(function(){
         // 获取卡号文本框
         var bankcard = document.getElementById("bankcard");
         // 获取select的选中项
         var checkedBankNo = document.getElementsByName("bank_no")[0].value;
         bankcard.value = getBankCard(checkedBankNo);
         var identity = document.getElementById("identity");
         identity.value = getId_no();
         var name = document.getElementById("name");
         name.value = getName();
    })
})