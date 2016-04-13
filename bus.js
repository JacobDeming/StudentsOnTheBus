var prompt=require('prompt');
var Student=require('./student.js');
var x=0;
var studentArray=[];

var Bus=function(driverName,color,gas){
	this.studentsOnBus=[];
	this.driverName=driverName;
	this.color=color;
	this.gas=gas;
	this.studentsEnterBus=function(studentArray){
		this.studentsOnBus=studentArray;}
	this.busChatter=function(){
		for(var i=0;i<this.studentsOnBus.length;i++){
			if(this.studentsOnBus[i].fun==true){
				console.log(this.studentsOnBus[i].catchPhrase);
				console.log("");}}}}

var makeStudent=function(){
	prompt.start();
  	prompt.get(['name', 'gender', 'grade', 'gpa', 'detentions', 'sleepingInClass', 'catchPhrase'], function(err, result) {
      	var student = new Student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);
      	student.canStudentHaveFun();
      	studentArray.push(student);
      	checkStudents();})}

var newBus=new Bus('Jacob','Red',20);

var checkStudents=function(){
	if(x<20){
		x++;
		console.log("NEW STUDENT ENTERING BUS!")
		makeStudent();}
	else{
		newBus.studentsEnterBus(studentArray);
		newBus.busChatter();}}

checkStudents();