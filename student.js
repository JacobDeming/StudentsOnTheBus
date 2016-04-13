var Student = function(name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase){
  this.name=name;
  this.gender=gender;
  this.grade=grade;
  this.gpa=gpa;
  this.detentions=detentions;
  this.sleepingInClass=sleepingInClass;
  this.catchPhrase=catchPhrase;
  this.fun=true
  this.canStudentHaveFun=function(){
    if((this.detentions<10)&&(this.gpa>2)){
      this.fun=true;
    }else{
      this.fun=false;}}}

module.exports=Student;
