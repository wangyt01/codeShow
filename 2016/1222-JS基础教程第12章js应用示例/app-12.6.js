window.addEventListener("load",initAll,false);

function initAll(){
	var radioButtons = document.getElementsByTagName("input");

	for(var i=0;i<radioButtons.length;i++){
		if(radioButtons[i].type =="radio"){
			radioButtons[i].addEventListener("click",chgChart,false);
		}
	}
	chgChart();
}
//我们获得所有单选按钮并且遍历他们，将他们设置为在单击时调用chgChart().在此
//之后，手动调用chgChart()来显示页面的默认视图。

function chgChart(){
	var bChart ={
		name: "Desktop browser usage by year",
		years:[2010,2011,2012,2013,2014],
		fieldnames:["MS IE","Firefox","Chrome"],
		fields:[
        [51.45,42,93,33,74,29,25,24.5],
        [31.27,27,28.2,24.15,20.82,20.53],
        [10.25,21.08,33.23,42.63,46.6]
		]//二维数组。我们可以用bChaet.fields[0][n]引用第一行。
	}
	//这里创建自定义对象的属性，并且通过赋值对他们进行初始化。在这里我们建立了bChart
	//的name,years,fielnames和field属性。这些字段分别是图表的名称，图表设计的月份，
	//图表值的3个标签以及每个年份和每个标签的值域。

	var mobiChart ={
		name: "Mobile device vendors by year",
		years: [2010,2011,1012,2013,2014],
		fieldnames:["Nokia","Apple","Samsung","RIM"],
		fields:[
		[36.93,38.44,29.27,21.4,17.6],
		[28.88,27.51,24.39,24.01,23.23],
		[4.5,11,18.96,25.47,29.39],
		[19.78,14.38,5.22,3.65,2.87]
		]
	}

	var radioButtons = document.getElementsByTagName("input");
	var currDirection = getButton("direction");
	var imgSrc = "images/"+getButton("color");
	//在绘制图标之前，需要知道用户选择了那个单选按钮。radioButtons数组包含
	//页面上的所有输入元素，获得这个数组之后，就可以调用getButton()函数。

	if(getButton("type")=="browser"){
		var thisChart = bChart;
	}
	else{
		var thisChart = mobiChart;
	}
	//当用户通过单击任何单选按钮来改变图表时，调用chgChart()函数。

	var chartBody = "<h2>" +thisChart.name+"</h2><table>";
	//实际绘制代码从这里开始。

	for(var i=0;i<thisChart.years.length;i++){
		//这是双层循环的的第一层，我们用这两个循环遍历步骤3中建立的二维数组。
		//这个外层循环使用i作为索引变量，循环的次数是图表涉及的年份数量。
		if(currDirection =="horizontal"){
			//如果用户希望看到图表的水平版本，就运行以下代码。
			chartBody +="<tr class ='horiz'><th rowspan ="+(thisChart.fieldnames.length+1);
			chartBody +=">"+thisChart.years[i]+"</th><td colspan=2></td></tr>";
			//每个水平图表的第一行包含第i个年份标签。因为两个图表的字段数可能不一样，
			//所以我们需要实时计算rowspan.
			for(var j=0;j<thisChart.fieldnames.length;j++){
				//这是内层循环的水平版本。
				chartBody += "<tr class='horiz'><td>"+thisChart.fieldnames[j];
				//表格的细节从这里开始.
				chartBody +="</td><td><img alt='horiz bar' src='"+imgSrc;
				chartBody +="' width="+thisChart.fields[j][i]*3+">";
				//接下来,结束前面的单元格并且计算柱状图像.柱状图像的颜色取决于imgSrc,
				//宽度是数组中[j][i]元素的值乘以３。
				chartBody +=thisChart.fields[j][i]+"</td></tr>";
				//现在,在图像的右边写出实际数据值,结束这一行.水平图标代码的内层循环到这
				//里就结束.
			}
		}
		else{
			chartBody +="<tr class='vert'><th rowspan=2>"+thisChart.years[i]+"</th>";
			//如果用户希望看到图表的垂直版本,那么首先写图表的初始行.
			for(var j=0;j<thisChart.fieldnames.length;j++){
				//这里是第一个内层循环.他在一行中绘制图上的所有线条.
				chartBody +="<td><img alt='vert bar' src='"+imgSrc;
				chartBody +="' height="+thisChart.fields[j][i]*3+"'></td>";
			}
			chartBody +="</tr><tr calss='vert'>";
			for(j=0;j<thisChart.fieldnames.length;j++){
				chartBody +="<td>"+thisChart.fields[j][i]+"<br>";
				chartBody += thisChart.fieldnames[j]+"</td>";
			}
			chartBody +="</tr>";
		}
	}
	chartBody +="</table>";
	document.getElementById("chartArea").innerHTML = chartBody;

	function getButton(buttonSet){
		for(var i=0;i<radioButtons.length;i++){
			if(radioButtons[i].name ==buttonSet && radioButtons[i].checked){
				return radioButtons[i].value;
			}
		}
		return -1;
	}
}
