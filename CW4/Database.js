"use strict";
class Course{
	constructor(n, t, d, r){
		this.name=n;
		this.time=t;
		this.date=d;
		this.rooms=r;
	}
	toString(){
		return this.name;
	}
}
class Student{
	constructor(i,n, gp,c){
		this.id=i;
		this.name=n;
		this.gpa=gp;
		this.courses=c;
	}
	toString(){
		return this.id+'';
	}
}
class Point{
	constructor(x, y){
		this.x=x;
		this.y=y;
	}
	toString(){
		return "("+this.x+" , "+this.y+")";
	}
}

class Point3D extends Point{
	constructor(x,y,z){
		super(x,y);
		this.z=z;
	}
	toString(){
		return "("+this.x+","+this.y+","+this.z+")";
	}
}

class Distance{
	constructor(km =0){
		this.km = Math.round(km);
    }
    get miles () {
        return Math.round(this.km * 1.6);
    }
    set miles (value = 0) {
        this.km = Math.round(value / 1.6);
    }
    toString () {
        return this.km + " km"; 
    }
    static fromMiles(value) {
        let d = new Distance();
        d.miles = value;
        return t;
	}
}

class CW4 extends Menu{
	constructor(){
	super();
    this.course = new Course("Math", "9:00", new Date("2018-10-24"), ["m101"]);
    this.student = new Student(1521221050, "Enes Karali", 2.0,this.course);
	this.distance = new Distance(350);
    this.point = new Point(7,8);
    this.point3d = new Point3D(7,8,9);
	}
}




