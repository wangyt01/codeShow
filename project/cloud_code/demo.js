
var spreadNS = GC.Spread.Sheets;

// function CustomDateFormat() {

// }

// CustomDateFormat.prototype = new GC.Spread.Formatter.FormatterBase();

// CustomDateFormat.prototype.format = function (obj, formattedData) {
//     var date = new Date(obj);

//     if (date instanceof Date && isFinite(date)) {
//         if (date.getFullYear() > 1990 && formattedData) {
//             formattedData.conditionalForeColor = "blue";
//         } else if (formattedData) {
//             formattedData.conditionalForeColor = "red";
//         }
//         return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
//     }
//     else {
//         return obj != null ? obj.toString() : "";
//     }
// };

// CustomDateFormat.prototype.parse = function (str) {
//     return new GC.Spread.Formatter.GeneralFormatter().parse(str);
// };

function CustomNumberFormat() {
    
}

CustomNumberFormat.prototype = new GC.Spread.Formatter.FormatterBase();

CustomNumberFormat.prototype.format = function (obj, formattedData) {
    if (typeof obj === "number") {
        return formatNumber(obj, formattedData);
    } else if (typeof obj === "string") {
        if ($.isNumeric(obj)) {
            return formatNumber(parseFloat(obj), formattedData);
        }
    }

    return obj ? obj.toString() : "";
};

function formatNumber(value, formattedData) {
    if (isFinite(value) && formattedData) {
        if (value >= 10) {
            formattedData.conditionalForeColor = "green";
        } else if (value > 0) {
            formattedData.conditionalForeColor = "gold";
            var value = value.replace(/\s/g, '').replace(/(.{4})/g, "$1 ");
        } else {
            formattedData.conditionalForeColor = "blue";
        }
    } else if (formattedData) {
        formattedData.conditionalForeColor = "red";
    }
    return value.toString();
}

CustomNumberFormat.prototype.parse = function (str) {
    return new GC.Spread.Formatter.GeneralFormatter().parse(str);
};

window.onload = function () {
    var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"), {sheetCount: 1});
    initSpread(spread);
};

function initSpread(spread) {
    var sheet = spread.getSheet(0);

    spread.suspendPaint();

    sheet.name("Custom Formatter");
    initData(sheet);

    spread.resumePaint();
};

function initData(sheet) {
    sheet.setArray(0, 0, [
        [6216615900501527612, new Date(2002, 2, 6)],
        ["-18", "1988/3/2"],
        ["6216615900501527612", "Oct 9, 2011"],
        [4, 4],
        [NaN, NaN],
        [Infinity, Infinity]
    ]);

    for (var c = 0; c < 2; c++) {
        // 宽度设置
        sheet.setColumnWidth(c, 180);
    }

   // sheet.getRange(0, 0, 6, 2).formatter(new CustomNumberFormat());
    // sheet.getRange(0, 1, 6, 2).formatter(new CustomDateFormat());

    // sheet.setText(0, 0, "Custom Number", spreadNS.SheetArea.colHeader);
    // sheet.setText(0, 1, "Custom Date", spreadNS.SheetArea.colHeader);
};
        