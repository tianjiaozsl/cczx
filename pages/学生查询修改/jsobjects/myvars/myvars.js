export default {
	mygrade: [
  {
    "label": "高一",
    "value": "高一"
  },
  {
    "label": "高二",
    "value": "高二"
  },
  {
    "label": "高三",
    "value": "高三"
  },
  {
    "label": "自强",
    "value": "自强"
  }
],
	findSsn : async () => {
		await FindQuery.run();
		if (FindQuery.data.length==1){
			showModal("Edit_Modal");
		}
		else {
			showAlert("年级、班级或者姓名错误！");
		}
		
	}
}