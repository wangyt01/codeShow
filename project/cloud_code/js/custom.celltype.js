// 书列表单元格类型
function TreeCellType(event, isCollapse, level, isDetails) {
  this._Event = event;
  this._isCollapse = isCollapse;
  this._Level = level;
  this._IsDetails = isDetails;
}
TreeCellType.prototype = new GC.Spread.Sheets.CellTypes.Base();
TreeCellType.prototype.paint = function (ctx, value, x, y, w, h, style, context) {
  GC.Spread.Sheets.CellTypes.Base.prototype.paint.apply(this, arguments);

  if ((this._IsDetails + '') && (this._IsDetails == "1" || this._IsDetails == 1)) return;

  var collapsed;
  var rowIndex = context.row
  collapsed = context.sheet.rowOutlines.getCollapsed(rowIndex);
  var indent = context.sheet.getCell(rowIndex, context.col).textIndent();
  x += (indent - 1) * 8;

  if (!ctx) {
    return;
  }
  ctx.save();
  ctx.beginPath();
  if (collapsed || this._isCollapse) {
    ctx.fillStyle = "gray";
    // ctx.strokeStyle = "black";
    // ctx.lineWidth = 1;
    ctx.moveTo(x, y + h / 2 - 3.5);
    ctx.lineTo(x, y + h / 2 + 3.5);
    ctx.lineTo(x + 3.51, y + h / 2);
  } else {
    ctx.fillStyle = "black";
    ctx.moveTo(x + 5, y + h / 2 - 2.5);
    ctx.lineTo(x, y + h / 2 + 2.5);
    ctx.lineTo(x + 5, y + h / 2 + 2.5);
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
};
// override getHitInfo to allow cell type get mouse messages
TreeCellType.prototype.getHitInfo = function (x, y, cellStyle, cellRect, context) {
  return {
    x: x,
    y: y,
    row: context.row,
    col: context.col,
    cellStyle: cellStyle,
    cellRect: cellRect,
    sheetArea: context.sheetArea,
    sheet: context.sheet
  };
};
TreeCellType.prototype.processMouseDown = function (hitinfo) {
  var hoffset = (hitinfo.sheet.getCell(hitinfo.row, hitinfo.col).textIndent()) * 8;
  var x1 = hitinfo.cellRect.x,
    y1 = hitinfo.cellRect.y,
    w1 = hitinfo.cellRect.width,
    h1 = hitinfo.cellRect.height;
  if (hitinfo.x >= x1 && hitinfo.x <= (x1 + hoffset) && hitinfo.y >= (y1) && hitinfo.y <= (y1 + h1)) {
    var collapsed;
    var rowIndex = hitinfo.row
    collapsed = hitinfo.sheet.rowOutlines.getCollapsed(rowIndex);
    var rgi = hitinfo.sheet.rowOutlines.find(rowIndex, this._Level)
    if (rgi && rgi.children && rgi.children.length) {
      for (var i = 0; i < rgi.children.length; i++) {
        if (rgi.children[i].start == (rowIndex + 1))
          hitinfo.sheet.rowOutlines.expandGroup(rgi.children[i], collapsed);
      }
    }
    hitinfo.sheet.invalidateLayout();
    hitinfo.sheet.repaint();
  }
};
